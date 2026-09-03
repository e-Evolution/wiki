---
title: erpya-3.9.4-001-3.7.5
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.5"
  - "2026-01-15"
article: true
---

**Fecha de Liberación:** 2026-01-15

## Novedades

- **Corrección en el proceso de Asignación de Pagos (Payment Allocation)**

## Contexto

Actualización de estabilidad financiera para solventar errores detectados durante el cruce de documentos de cobro y pago.

### Mejora Realizada:

Se corrigió un error detectado bajo el issue **#1099** que afectaba la consistencia de los registros contables durante la asignación manual y automática de pagos. Esta mejora asegura que el saldo pendiente de las facturas se actualice correctamente tras la aplicación de cobros, evitando descuadres en los auxiliares de cuentas por cobrar y pagar.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
