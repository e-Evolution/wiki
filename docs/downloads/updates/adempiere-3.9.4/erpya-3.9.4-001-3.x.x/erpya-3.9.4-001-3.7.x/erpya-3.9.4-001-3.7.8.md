---
title: erpya-3.9.4-001-3.7.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.8"
  - "2026-01-21"
article: true
---

**Fecha de Liberación:** 2026-01-21

## Novedades

- **Limpieza de localizador en Outbound Order y separación de servicios en Requisiciones**

## Contexto

Este release introduce flexibilidad en la gestión de almacenes y precisión en el flujo de compras.

### Mejoras Implementadas:

- **Almacén**: Se agregó soporte para limpiar el localizador al generar Órdenes de Salida (Warehouse Outbound Order), permitiendo una reubicación de inventario más ágil.
- **Compras**: Mejora en el proceso de generación de Órdenes de Compra desde Requisiciones, permitiendo separar y clasificar correctamente los productos de tipo servicio.
- **Finanzas**: Ajuste en la lógica de asignación para manejar correctamente diferencias menores durante la conciliación de pagos vinculados a facturas.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
