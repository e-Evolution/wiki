---
title: erpya-3.9.4-001-1.4.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.3"
  - "2024-03-27"
article: false
---

**Fecha de Liberación:** 2024-03-27

## Novedades

El problema radicaba en que el proceso no se estaba dividiendo en dos partes. Por lo general, cuando hay una orden de distribución, se deben realizar dos movimientos de inventario.

    - Movimiento de Inventario #1: Este primer movimiento de inventario traslada la mercancía desde la ubicación de origen hasta el almacén en tránsito. Además, establece en la línea de la orden de distribución las cantidades disponibles en tránsito, listas para ser movidas a su destino final.

    - Movimiento de Inventario #2: Este segundo movimiento de inventario se encarga de trasladar la mercancía desde el almacén de tránsito hasta su destino final. Asimismo, establece la cantidad en tránsito en cero en la orden de distribución.

## Contexto

- Se corrige problema con movimiento de inventario generado desde Orden de Salida

## Detalle Técnico

- The problem with the inventory movement generated from Output Order is corrected

## Enlaces relacionados

- [ERPYA v1.4.3](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.4.3)

## Requerimientos
