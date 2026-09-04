---
title: erpya-3.9.4-001-3.8.9
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.9"
  - "2026-02-19"
article: true
---

**Fecha de Liberación:** 2026-02-19

## Novedades

- **Validación de estados de cuenta duplicados y soporte de schema dinámico en MP Integration**

## Contexto

Actualización enfocada en la integridad de datos bancarios y flexibilidad de integración.

### Mejoras Realizadas:

- **Conciliación**: Se integró una validación adicional en el proceso de importación para detectar y prevenir la carga de extractos bancarios duplicados, reduciendo riesgos de inconsistencias contables.
- **MP Integration**: Inclusión de soporte para **schema dinámico** en consultas SQL y refactorización de la clase `MPApi` para manejar conexiones multi-schema de forma más robusta y legible.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
