---
title: erpya-3.9.4-001-2.5.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.5.7"
  - "2024-10-11"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-10-11

## Novedades

### Validación en Pago

- Se agrega validacion para no permitir reversar un pago que este en una conciliacion en **Borrador**.

### Base

- Se agrega soporte a no copiar columna `ProcessedOn` al copiar registro.

## Contexto

- Se ha identificado la necesidad de prevenir errores en el manejo de pagos durante el proceso de conciliación, específicamente para aquellos pagos que se encuentran en estado de **Borrador**.

## Detalle Técnico

- Se implementó una validación que impide la reversión de pagos si estos están asociados a una conciliación en estado **Borrador**, garantizando así la integridad del proceso de conciliación.
- Se añadió soporte para evitar que la columna `ProcessedOn` sea copiada al realizar un registro, lo que mejora la eficiencia en el manejo de datos y evita inconsistencias.

## Enlaces relacionados

- [ERPYA v2.5.7](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.5.7)

## Requerimientos

- Se requieren procesos adicionales por aplicar
