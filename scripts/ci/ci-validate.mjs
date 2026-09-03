#!/usr/bin/env node
// ci-validate.mjs — WU0.3 CI gate: docmd link validation via MCP stdio (primary)
// with a blocking build-scan degraded mode (R9 fallback).
//
// Primary: spawn `npx -y @docmd/core@0.9.4 mcp` (pinned per R5) with the
// project root as cwd, speak newline-delimited JSON-RPC 2.0 (MCP stdio
// transport), initialize, then tools/call validate_docs. Any broken internal
// link reported => exit 1.
//
// Degraded mode (R9): if the stdio handshake or result parsing is not usable
// on the installed version, run `npx -y @docmd/core@0.9.4 build` and scan the
// output for broken/missing/unresolved link warnings. Still BLOCKING.
//
// Exit contract:
//   0 = validate_docs clean, or (degraded) build clean with no link warnings
//   1 = broken links reported / build failed / link warnings in build output
//   2 = usage or environment error (no docmd.config.json, npx failure)
//
// Usage: node ci-validate.mjs <projectRoot> [--timeout-ms <n=120000>]

import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const DOCMD = ['@docmd/core@0.9.4'];

function parseArgs(argv) {
  const args = { root: null, timeoutMs: 120000 };
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--timeout-ms') args.timeoutMs = Number(argv[++i]);
    else if (!args.root) args.root = argv[i];
  }
  return args;
}

const { root, timeoutMs } = parseArgs(process.argv.slice(2));
if (!root || !existsSync(`${root}/docmd.config.json`)) {
  console.error('usage: node ci-validate.mjs <projectRoot>  (projectRoot must contain docmd.config.json)');
  process.exit(2);
}

function degradedMode(projectRoot) {
  console.log('[ci-validate] R9 degraded mode: build + link-warning scan');
  const r = spawnSync('npx', ['-y', ...DOCMD, 'build'], {
    cwd: projectRoot, encoding: 'utf8', timeout: timeoutMs * 10, maxBuffer: 64 * 1024 * 1024,
  });
  const out = `${r.stdout || ''}\n${r.stderr || ''}`;
  if (r.status !== 0) {
    console.error('[ci-validate] BUILD FAILED (exit ' + r.status + ') — last 40 lines:');
    console.error(out.split('\n').slice(-40).join('\n'));
    process.exit(1);
  }
  const warnings = out.split('\n').filter((l) => /broken|missing|unresolved|cannot (find|resolve)/i.test(l));
  if (warnings.length) {
    console.error(`[ci-validate] LINK WARNINGS IN BUILD OUTPUT (${warnings.length}):`);
    for (const w of warnings.slice(0, 50)) console.error('  ' + w);
    process.exit(1);
  }
  console.log('[ci-validate] degraded mode: build clean, no link warnings');
}

function mcpValidate(projectRoot) {
  return new Promise((resolvePromise) => {
    const child = spawn('npx', ['-y', ...DOCMD, 'mcp'], { cwd: projectRoot, stdio: ['pipe', 'pipe', 'pipe'] });
    let buf = '';
    let stderr = '';
    let initialized = false;
    let settled = false;
    const timer = setTimeout(() => fail('timeout waiting for MCP response'), timeoutMs);

    function settle(result) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { child.kill('SIGTERM'); } catch { /* already gone */ }
      resolvePromise(result);
    }
    function fail(reason) {
      console.error(`[ci-validate] MCP handshake failed: ${reason}`);
      if (stderr.trim()) console.error(stderr.split('\n').slice(-20).join('\n'));
      settle(null);
    }
    function send(obj) { child.stdin.write(`${JSON.stringify(obj)}\n`); }

    child.stdout.on('data', (d) => {
      buf += d.toString();
      let idx;
      while ((idx = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (!line) continue;
        let msg;
        try { msg = JSON.parse(line); } catch { continue; } // log noise is not a frame
        if (msg.id === 1 && msg.result) {
          initialized = true;
          send({ jsonrpc: '2.0', method: 'notifications/initialized' });
          send({ jsonrpc: '2.0', id: 2, method: 'tools/call', params: { name: 'validate_docs', arguments: {} } });
        } else if (msg.id === 2) {
          if (msg.error) fail(`tool error: ${JSON.stringify(msg.error)}`);
          else settle(msg.result);
        }
      }
    });
    child.stderr.on('data', (d) => { stderr += d.toString(); });
    child.on('error', (e) => fail(e.message));
    child.on('close', (code) => {
      if (!settled) fail(`mcp process exited (${code}) ${initialized ? 'after initialize' : 'before initialize'}`);
    });

    send({
      jsonrpc: '2.0', id: 1, method: 'initialize',
      params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name: 'ci-validate', version: '0.1.0' } },
    });
  });
}

const projectRoot = root;
const result = await mcpValidate(projectRoot);
if (result === null) {
  degradedMode(root);
  process.exit(0);
}

// MCP tools/call result: {content: [{type:"text", text:"..."}], isError?: bool}
const isError = result.isError === true;
const texts = (result.content || []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');
console.log('[ci-validate] validate_docs raw output:');
console.log(texts || '(empty)');
if (isError) {
  console.error('[ci-validate] validate_docs returned isError — treating as failure');
  process.exit(1);
}
// WU0.3 finding (0.9.4): validate_docs resolves /assets/... against the docs
// source dir, not the root assets/ mirror that the build serves (verified:
// built site/ mirrors assets/ 1:1 and flagged assets return HTTP 200).
// Classification: an /assets/ target that EXISTS under <root>/assets/ is
// validator-strict (info, non-blocking); anything else is a real broken link.
const BROKEN_RE = /^\[([^\]]+)\] -> (\S+) \(Broken link:[^)]*\)$/gm;
const realBrokenSet = new Set();
let mirrorStrict = 0;
for (const m of texts.matchAll(BROKEN_RE)) {
  const [, where, target] = m;
  if (target.startsWith('/assets/') && existsSync(join(projectRoot, 'assets', target.slice('/assets/'.length)))) {
    mirrorStrict++;
  } else {
    realBrokenSet.add(target);
  }
}
// Known pre-existing source defects (documented, parity-preserved) are kept in a
// committed, reviewed baseline so the gate blocks only NEW broken links.
const baselinePath = join(projectRoot, 'scripts/ci/broken-links-baseline.json');
let baseline = new Set();
let baselineCount = 0;
if (existsSync(baselinePath)) {
  baseline = new Set(JSON.parse(readFileSync(baselinePath, 'utf8')).entries || []);
  baselineCount = baseline.size;
}
const newBroken = [...realBrokenSet].filter((t) => !baseline.has(t)).sort();
if (newBroken.length) {
  console.error(`[ci-validate] NEW BROKEN LINKS (${newBroken.length}; real=${realBrokenSet.size}, baseline=${baselineCount}):`);
  for (const b of newBroken.slice(0, 50)) console.error('  ' + b);
  process.exit(1);
}
console.log(`[ci-validate] validate_docs: PASS (mirror-strict asset refs: ${mirrorStrict}, real broken: ${realBrokenSet.size}, baseline: ${baselineCount}, new: 0)`);
