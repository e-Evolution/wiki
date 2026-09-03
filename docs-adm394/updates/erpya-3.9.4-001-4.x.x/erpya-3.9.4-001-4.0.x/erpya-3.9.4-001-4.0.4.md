---
title: erpya-3.9.4-001-4.0.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.4"
  - "2026-03-30"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-30

## Novedades

- **Optimización de consultas de inventario por atributos en OutBound Order**

## Contexto

Mejora técnica en la gestión de órdenes de salida para productos con atributos activos.

### Solución Técnica:

- **Uso de UNION ALL**: Se reestructuraron las consultas SQL para separar el inventario por atributo específico frente al inventario agregado, mejorando notablemente el rendimiento cuando la variable `ECA27_OUTBOUND_ORDER_GENERATE_FROM_SPLIT_BY_ATTRIBUTES` está habilitada.
- **Identificación de Datos**: Inclusión de la columna `SplitByAttributeSetInstance` para una mejor distinción visual y lógica de los resultados.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
