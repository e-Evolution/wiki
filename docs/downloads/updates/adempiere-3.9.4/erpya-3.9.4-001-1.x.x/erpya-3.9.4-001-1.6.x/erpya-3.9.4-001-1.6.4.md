---
title: erpya-3.9.4-001-1.6.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.4"
  - "2024-04-26"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-29

## Novedades

- Ésta funcionalidad permite que si se accede a ADempiere desde Keycloak, se puede decidir si al cerrar la sesión de ADempiere se cerrará la sesión de keycloak automáticamente.

Para que ésto funcione se tienen tres opciones para configurar las reglas del negocio de manera jerárquica:

- Configuración por Usuario: Predomina sobre todas

![img1](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.4-img1.png)

- Configuración por Rol: Ésta es tomada en cuenta si no existe configuración por usuario

![img2](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.4-img2.png)

- Configuración por Compañía: Ésta es tomada en cuenta si no existe configuración por rol y usuario

![img3](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.4-img3.png)

- Se agrega soporte para crear documento de Ajuste de Debito / Credito asignado a un Expediente de importación

- Marcar un Socio de Negocio y un Tipo de Documento de Credito y Debito con el Tilde Usado para Ajustar Expediente de Importación

**Esta marca debe estar presente en el Socio de Negocio y en el Tipo de Documento**

![img4](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.4-img4.png)

- En la Ventana Expediente de Importacion en el Engranaje se encontrara el proceso para Generar el Documento de Ajuste

![img5](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.4-img5.png)

## Contexto

- Cierre de Sesión en Keycloak
- Proceso para Ajustar Base de Impuestos de Importación

## Detalle Técnico

- Signing out of Keycloak
- Process to Adjust Import Tax Base

## Enlaces relacionados

- [ERPYA v1.6.4](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.6.4)

## Requerimientos

- Se requieren procesos adicionales por aplicar.
