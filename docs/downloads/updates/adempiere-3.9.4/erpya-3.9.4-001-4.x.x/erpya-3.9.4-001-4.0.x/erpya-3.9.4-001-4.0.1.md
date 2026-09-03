---
title: erpya-3.9.4-001-4.0.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.1"
  - "2026-03-24"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-24

## Novedades

- **Soporte de schema dinámico en integración de base de datos externa (MP Integration)**

## Contexto

Mejora en la flexibilidad de la infraestructura para integraciones con múltiples entornos de base de datos.

### Mejoras Técnicas:

- **MP Integration**: Se agregó soporte para especificar explícitamente el schema de base de datos en las consultas SQL de exportación.
- **Refactorización Core**: Actualización de las clases `MPApi` e `IExternalDatabaseApi` para manejar el contexto de schema de forma nativa y documentada.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
