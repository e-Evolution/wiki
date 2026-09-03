---
title: erpya-3.9.4-001-2.3.9
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.3.9"
  - "2024-08-30"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-30

## Novedades

### Reportes Financieros

Se agrega funcionalidad para crear las líneas de informes financieros desde el elemento contable. Esto es muy útil al momento de importar un elemento contable personalizado.

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img1.png)

La funcionalidad inicial implementada es el reporte **Balance de Comprobación** haciendo coincidencia por los tipos de cuentas dentro del elemento contable.

Para lograr esto se agregaron dos columnas nuevas a las **Líneas de Informe**

- **Tipo de Cuenta**: Determina el tipo de cuenta, Activo, Pasivo, Capital entre otros
- **Tipo de Cuenta Hija**: Determina en detalle a qué pertenece el tipo, ejemplo: Dentro de **Ingresos** se tiene **Otros Ingresos**.

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img2.png)

Para hacer la búsqueda dentro del elemento contable se toman en cuenta las columnas nuevas dentro del mismo.

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img3.png)

Para generar el fuente de cada linea del informe se toma como criterio lo siguiente:

- El **Tipo de Cuenta** de la línea del informe debe coincidir con el **Tipo de Cuenta** del **Elemento Contable**

- Si la linea de informe no tiene nada en el **Tipo de Cuenta Hija** entonces sólo buscará los elementos contables que coincidan con el **Tipo de Cuenta** y que no tengan padre asociado, es decir, que estén en el primer nivel del arbol.

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img4.png)

- Si la linea de informe tiene asociado un **Tipo de Cuenta Hija** entonces hará coincidencia con el tipo de cuenta hija también sin importar si tiene o no tiene padre relacionado en el elemento contable.

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img5.png)

- Adicional a lo anterior es obligatorio que el elemento a tomar esté marcado como **Entidad Acumulada**

![2.3.9](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.9-img6.png)

## Contexto

- La nueva función permite crear líneas de informes financieros desde elementos contables, facilitando la importación de reportes como el **Balance de Comprobación**.

## Detalle Técnico

- Se agregan las columnas **Tipo de Cuenta y Tipo de Cuenta Hija** en las líneas de informe, utilizando estos datos para coincidir con elementos contables y marcando entidades acumuladas.

## Enlaces relacionados

- [ERPYA v2.3.9](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.9)

## Requerimientos

- Se requieren procesos adicionales por aplicar
