---
title: erpya-3.9.4-001-2.3.2
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.3.2"
  - "2024-08-22"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-22

## Novedades

### Comisiones Bancarias

Se agrega mejora para que la búsqueda de documentos de comisiones bancarias se haga incluyendo los últimos 4 dígitos del número de pago y no la totalidad de dígitos. Hay bancos que tienen dígitos muy largos como este `1742502503164` y el usuario puede confundirse al crear el mismo, por esa razón es preferible cargar los últimos 4 dígitos como este `3164` y dejar que el algoritmo se encargue de verificar el mismo.

## Contexto

- Comisiones

## Detalle Técnico

- Commission

## Enlaces relacionados

- [ERPYA v2.3.2](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.2)

## Requerimientos

- No se requieren procesos adicionales por aplicar
