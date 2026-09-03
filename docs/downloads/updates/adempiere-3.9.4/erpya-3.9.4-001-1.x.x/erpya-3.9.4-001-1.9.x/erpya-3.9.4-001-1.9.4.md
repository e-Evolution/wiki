---
title: erpya-3.9.4-001-1.9.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.9.4"
  - "2024-07-05"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-07-05

## Novedades

### Localización Venezuela

Se agrega soporte a carga de extracto bancario para los bancos:

- **Banco del Tesoro**
  - Archivo Separado por Comas (CSV): `org.erpya.lve.bank.imp.Tesoro_Loader_Csv`
  - Archivo Separado por Tabuladores (TSV): `org.erpya.lve.bank.imp.Tesoro_Loader_Tsv`
  - Archivo Separado por Pipe (PSV): org.erpya.`lve.bank.imp.Tesoro_Loader_Psv`
  - Archivo Separado por Punto y Coma (SSV): `org.erpya.lve.bank.imp.Tesoro_Loader_Ssv`

- **Banco de Venezuela**

Archivo Personalizado de Venezuela Separado por tres (3) o más espacios en blanco (TXT): `org.erpya.lve.bank.imp.Venezuela_Loader_v1`

### Base

Se corrige proceso Generar Factura desde Linea de la Orden para que tome el tipo de documento desde el parametro del reporte

## Contexto

- Extracto Bancario

## Detalle Técnico

- LVE
- Bank Statement

## Referencia

[Generar Factura desde Línea de la Orden #75](https://github.com/erpcya/Control-NATULAC/issues/75)

## Enlaces relacionados

- [ERPYA v1.9.4](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.9.4)

## Requerimientos

- No se requieren procesos adicionales por aplicar.
