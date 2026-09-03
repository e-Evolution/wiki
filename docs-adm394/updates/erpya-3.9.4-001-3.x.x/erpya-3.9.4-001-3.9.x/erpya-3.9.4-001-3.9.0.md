---
title: erpya-3.9.4-001-3.9.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.9.0"
  - "2026-02-20"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-02-20

## Novedades

- **Corrección en el cálculo de comisiones con asignaciones multimoneda**

## Contexto

Mejora en la precisión de los cálculos financieros del módulo de comisiones.

### Mejora Realizada:

- Se ajustó la lógica de cálculo de comisiones para manejar correctamente escenarios donde las asignaciones (allocations) se realizan en una moneda distinta a la del pago original. El sistema ahora considera la tasa de conversión adecuada para asegurar la consistencia entre el monto asignado y la base de cálculo de la comisión.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
