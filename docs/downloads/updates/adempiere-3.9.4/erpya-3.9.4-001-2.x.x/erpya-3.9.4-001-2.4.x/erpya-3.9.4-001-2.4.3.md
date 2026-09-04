---
title: erpya-3.9.4-001-2.4.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.4.3"
  - "2024-09-09"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-09-09

## Novedades

### Compras

- Se corrige error con validación de lista de precios al agregar una orden de compras con al menos una linea que no se encuentra en la lista de precios.

![Imagen 1](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.4.3-img1.png)

### Solicitud para Cotización

- Se corrige referencia de orden de compra en requisiciones generadas desde **Solicitud para Cotizacion**.

### Selección de Pago

- Se corrige **Generación de Selección de pagos** con mas de una **Orden de Compra** a un mismo socio del negocio

![Imagen 2](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.4.3-1.gif)

- Se corrige **Generación de Pagos** de una selección de pagos con el mismo socio de negocio y mismo cargo en varias lineas.

![Imagen 3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.4.3-2.gif)

## Contexto

- Compras
- Solicitud para Cotización
- Selección de Pago

## Detalle Técnico

- Bugfix
- Generación de Pagos

## Enlaces relacionados

- [ERPYA v2.4.3](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.4.3)

- [Error: Validación de Lista de Precio en Orden de Compra #1014](https://github.com/erpcya/Control-ERPYA/issues/1014)

- [Orden de Compra desde Solicitud de Cotización (Creada desde Requisición) No se lleva el Centro de Costos #51](https://github.com/erpcya/Control-NATULAC/issues/51)

- [Payment Selection Purchase Order #76](https://github.com/erpcya/adempiere/issues/76)

- [Payment Selection with the same Charge an Business Patner #77](https://github.com/erpcya/adempiere/issues/77)

## Requerimientos

- No se requieren procesos adicionales por aplicar
