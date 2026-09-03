---
title: erpya-3.9.4-001-2.3.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.3.0"
  - "2024-08-12"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-21

## Novedades

### Reportes de Retenciones

- Se agrega caché para el manejo de imágenes en reportes con muchas páginas que usan el logo de la empresa o cualquier otro recurso que, dada la cantidad de descargas del mismo se hace muy lento al momento de ejecutar el reporte.

::: note

Esto afecta directamente a todos los reportes de iReport

:::

## Contexto

- Lentitud al generar reporte en lote.

## Detalle Técnico

- Slowness when generating batch reports.

## Enlaces relacionados

- [ERPYA v2.3.0](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.0)

- [Lentitud en reportes de Retenciones al cargar logo #1012](https://github.com/erpcya/Control-ERPYA/issues/1012)

## Requerimientos

- No se requieren procesos adicionales por aplicar
