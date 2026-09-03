---
title: erpya-3.9.4-001-1.6.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.6"
  - "2024-04-30"
  - "Noticias"
  - "OpenID"
  - "Keycloak"
article: true
---

**Fecha de Liberación:** 2024-04-30

## Novedades

- Se agrega recarga para el atributo `refresh token`, esto permite que al momento de hacer logout de una sesión se obtenga el último token del tipo `refresh` para hacer `logout` del proveedor de servicio `OpenID`

## Contexto

- Keycloak
- OpenID

## Detalle Técnico

- Added reload for `refresh token` attribute

## Enlaces relacionados

- [ERPYA v1.6.6](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.6.6)

## Requerimientos

- Se requieren procesos adicionales por aplicar.
