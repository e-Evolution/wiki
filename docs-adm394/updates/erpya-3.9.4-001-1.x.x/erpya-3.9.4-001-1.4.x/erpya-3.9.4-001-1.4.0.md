---
title: erpya-3.9.4-001-1.4.0
category: Actualizaciones
star: 9
tag:
  - Actualizaciones
  - Versiones
  - erpya-3.9.4-001-1.4.0
  - "2024-03-22"
article: false
---

**Fecha de Liberación:** 2024-03-22

## Novedades

El problema es que se estaba estableciendo por defecto la organización, usuario y rol de inicio de sesión en los parámetros de reportes de Jasper.

Con este cambio sólo se establecen por defecto los siguientes atributos:

- AD_Client_ID
- AD_Role_ID
- AD_User_ID
- AD_Client_ID
- AD_Role_ID
- AD_User_ID

La organización ya no se establece por defecto. La razón es que cuando se establecía con los valores de inicio de sesión y el usuario no seleccionaba una organización al ejecutar el reporte de Jasper, igual aplicaba un filtro por la organización de inicio de sesión y daba la sensación de que el reporte tenía problemas o no mostraba los datos esperados. Para solucionar esto, el usuario debía salir y volver a iniciar sesión con la organización que quería filtrar en el reporte.

## Contexto

- Ejecución de Reportes de Jasper

## Detalle Técnico

- Fixed problem with default values ​​when running Jasper reports

## Enlaces relacionados

- [ERPYA v1.4.0](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.4.0)

## Requerimientos
