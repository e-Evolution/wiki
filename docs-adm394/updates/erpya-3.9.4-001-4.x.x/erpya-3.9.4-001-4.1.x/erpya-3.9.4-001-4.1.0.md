---
title: erpya-3.9.4-001-4.1.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.1.0"
  - "2026-04-15"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-04-15

## Novedades

- **Restricción de acciones críticas en facturas fiscales completadas**

## Contexto

Se implementa un **Model Validator** para controlar y restringir operaciones sobre facturas que cumplen condiciones específicas de negocio. El sistema ahora bloquea acciones de anulación (Void) y reverso en facturas de venta marcadas como documentos fiscales en estado **Completado**.

### Beneficios Principales:

- **Integridad Contable**: Evita la manipulación indebida de documentos ya consolidados.
- **Cumplimiento Fiscal**: Garantiza la consistencia en los procesos de ventas ante auditorías.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
