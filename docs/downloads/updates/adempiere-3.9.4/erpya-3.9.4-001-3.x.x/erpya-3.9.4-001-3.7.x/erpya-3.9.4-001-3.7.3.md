---
title: erpya-3.9.4-001-3.7.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.3"
  - "2026-01-14"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-01-14

## Novedades

- **Almacén en Orden de Compra desde Requisición y nuevas fórmulas FAP**

## Contexto

Se han implementado mejoras en los procesos de compras y en el motor agrícola:
- **Orden de Compra**: Se agregó el parámetro de Almacén en el proceso de "Generar O.C. desde Línea de Requisición", permitiendo asociar un almacén específico al generar el documento.
- **Farming Engine**: Se incorporaron nuevas fórmulas para el cálculo de peso pagado en **Arroz Paddy** (`Rice_PaidWeight_v3`) y **Maíz Blanco** (`WhiteCorn_PaidWeight_v2`), optimizando la precisión según las reglas de cada cultivo.

## Requerimientos

- Es necesario aplicar el script de migración: [10480_Add_Warehouse_Parameter_to_Generate_PO_from_Requisition_Line.xml](https://github.com/erpya/adempiere_patch/blob/master/base/xml/migration/10480_Add_Warehouse_Parameter_to_Generate_PO_from_Requisition_Line.xml)
