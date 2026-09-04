---
title: erpya-3.9.4-001-4.0.5
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.5"
  - "2026-04-07"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-04-07

## Novedades

- **Soporte para control de inventario basado en picking en WMS**

## Contexto

Se han implementado mejoras significativas en el módulo de Gestión de Almacenes (WMS), específicamente en el formulario de Generación de Órdenes de Salida (OutBound Order).

### Mejoras Funcionales:

- **Modos de Operación**: Introducción del flag `pickedBasedInventoryStorage` (vía variable `ECA27_PICKED_BASED_INVENTORY_STORAGE`) para alternar entre selección directa del usuario o almacenamiento basado en inventario ya seleccionado.
- **Optimización SQL**: Rediseño de consultas para el manejo preciso de instancias de atributos (`Attribute Set Instance`) mediante el uso de sub-consultas y la función `COALESCE`.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
