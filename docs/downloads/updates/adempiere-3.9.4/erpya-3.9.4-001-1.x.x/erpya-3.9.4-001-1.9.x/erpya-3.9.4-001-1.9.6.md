---
title: erpya-3.9.4-001-1.9.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.9.6"
  - "2024-07-12"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-07-12

## Novedades

### Localización Venezuela

Se agrega importador para extracto bancario del **Banco Nacional de Crédito (BNC)**, este toma como referencia el archivo txt generado por el banco y que es separado por tabuladores `org.erpya.lve.bank.imp.BNC_Loader_Tsv`

### Reabastecimiento

- Se corrige error al generar orden de compra desde el reporte de reabastecimiento. El mismo generaba las lineas con la unidad de medida **Unidad** en lugar de utilizar la unidad de medida del producto.

### Intercompañía

Se corrige problema con redondeo de precio al generar la orden de venta intercompañía de manera automática desde una orden de compra configurada como contra-documento.

## Contexto

- LVE
- Reabastecimiento
- Intercompañía

## Detalle Técnico

- Factura

## Referencia

[Extracto: Banco Nacional de Crédito #679](https://github.com/erpcya/Control-PROSEIN/issues/679)

[[Bug Report] Error con unidad de medida de Reabastecimiento #66](https://github.com/erpcya/adempiere/issues/66)

[[Bug Report] Diferencia en lista de precios (Intercompañía) #67](https://github.com/erpcya/adempiere/issues/67)

[Diferencia en lista de precios Intercompañia Casos Día: 04/07/2024 Cant. 1 #742](https://github.com/erpcya/Control-PROSEIN/issues/742)

## Enlaces relacionados

- [ERPYA v1.9.6](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.9.6)

- [Referencia de Discusión: #14](https://github.com/erpya/adempiere_patch_zk/discussions/14)

## Requerimientos

- No se requieren procesos adicionales por aplicar.
