---
title: erpya-3.9.4-001-3.6.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.6.6"
  - "2025-12-26"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-12-26

## Novedades

- **Soporte para división por atributos en la generación de formularios de órdenes de salida (WMS)**

## Contexto

Se ha implementado la capacidad de dividir automáticamente las órdenes de salida según atributos específicos durante la generación del formulario correspondiente, optimizando la preparación de pedidos para productos con variantes (lotes, series, etc.).

### Detalles del Cambio

- **Mecanismo de Control**: La funcionalidad está controlada por la variable del sistema **`ECA27_OUTBOUND_ORDER_GENERATE_FROM_SPLIT_BY_ATTRIBUTES`**.
- **Comportamiento**:
  - **Activada**: El sistema agrupa los items según sus atributos al generar la orden de salida.
  - **Desactivada**: Mantiene el comportamiento tradicional sin división.
- **Impacto**: Mejora la precisión logística y ofrece flexibilidad configurable según las necesidades del negocio.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
