---
title: erpya-3.9.4-001-4.0.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.7"
  - "2026-04-10"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-04-10

## Novedades

- **Corrección en la asignación de Organización para comprobantes de retención ISLR**

## Contexto

Se ha solventado un problema técnico en la localización Venezuela (LVE) relacionado con la generación de comprobantes de retención ISLR.

### Corrección Realizada:

- **Consistencia de Datos**: Anteriormente, en cálculos con múltiples porcentajes, las líneas de retención podían asociarse incorrectamente a la organización del usuario en sesión en lugar de la organización del documento origen. Se ha forzado la unificación para que el 100% de los cálculos tomen estrictamente la organización del documento base.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
