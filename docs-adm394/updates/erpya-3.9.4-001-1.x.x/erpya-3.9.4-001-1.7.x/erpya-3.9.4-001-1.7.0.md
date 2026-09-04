---
title: erpya-3.9.4-001-1.7.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.7.0"
  - "2024-04-30"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-30

## Novedades

- Se corrige cierre de sesión desde la interfaz `ZK`

- Esta versión prioriza la seguridad de la sesión, evitando que queden sesiones abiertas.
- Con esta versión se valida que no exista una sesión abierta mientras ya está procesada.
- Se limpia la sesión previa.

## Contexto

- Cierre de Sesión en `ZK`

## Detalle Técnico

- Signing out of `ZK`

## Enlaces relacionados

- [ERPYA v1.7.0](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.7.0)

- [BugReport: Al hacer Logout no cierra sesión de ADempiere #62](https://github.com/erpcya/adempiere/issues/62)

## Requerimientos

- Se requieren procesos adicionales por aplicar.
