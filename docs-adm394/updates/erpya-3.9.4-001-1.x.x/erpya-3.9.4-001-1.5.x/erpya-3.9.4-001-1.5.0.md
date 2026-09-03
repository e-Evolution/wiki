---
title: erpya-3.9.4-001-1.5.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.0"
  - "2024-04-09"
article: false
---

**Fecha de Liberación:** 2024-04-09

## Novedades

- El formulario para Generar Orden de Salida desde Órdenes de Ventas / Distribución tiene la posibilidad de filtrar los documentos a través del tipo de documento seleccionado tal como se ve en la imagen:

![1.5.0](/assets/img/downloads/updates/resources/adempiere-1.5.0.png)

El problema que se corrigió aquí es que la lista que mostraba de los tipos de documentos no estaba haciendo filtro por la bandera `Activo del registro de tipo de documento`.

No es un problema crítico pero es muy molesto para el usuario seleccionar un tipo de documento que no se encuentra en uso actualmente

## Contexto

- Se agrega validación en los tipos de documentos de filtro en el formulario para `Generar Orden de Salida`.

## Detalle Técnico

- Fixed error with active flag for document type search for Generate

## Enlaces relacionados

- [ERPYA v1.5.0](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.5.0)

## Requerimientos
