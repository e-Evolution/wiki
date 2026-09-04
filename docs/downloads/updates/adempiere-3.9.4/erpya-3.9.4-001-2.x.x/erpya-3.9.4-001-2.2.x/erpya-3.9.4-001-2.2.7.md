---
title: erpya-3.9.4-001-2.2.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.2.7"
  - "2024-08-12"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-20

## Novedades

### Retenciones de I.S.L.R

- Se corrige problema con moneda de referencia para unidad tributaria cuando se tiene esquema contable predeterminado en **USD**, ahora se toma como referencia para la moneda de cálculo de retención de **I.S.L.R**, la moneda fiscal de la información de la organización y si no tiene se toma por defecto la del esquema contable.

![2.2.7](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.2.7-img1.png)

### Importación de Extracto Bancario

- Se agrega importador para extracto bancario de Bancaribe separado por punto y coma `;`

Se usa como ruta para importación la siguiente: ```org.erpya.lve.bank.imp.Bancaribe_Loader_Ssv```

## Contexto

- I.S.L.R
- Extracto Bancario

## Detalle Técnico

- ISLR Withholding
- Bank statement

## Enlaces relacionados

- [ERPYA v2.2.7](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.2.7)

## Requerimientos

- No se requieren procesos adicionales por aplicar
