---
title: erpya-3.9.4-001-2.3.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.3.1"
  - "2024-08-22"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-22

## Novedades

### Manejo de Comisiones Bancarias

- Se agrega una funcionalidad para manejar los cargos bancarios y los débitos por concepto de I.S.L.R, esto es muy útil ya que hay bancos que hacen el descuento de manera automática dentro del monto de depósito y se hace complicado verificar la coincidencia con los movimientos de ADempiere.

Esta funcionalidad permite agregar en la cuenta bancaria los productos relacionados a la misma, cada producto puede definir si maneja **% de Comisión** o **% de Interés** así como el monto y la referencia para realizar la búsqueda.

![2.3.1](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.1-img1.png)

### Manejo de Fletes

Se corrigen las **Referencias** de la **Orden de Venta** y **Orden de Salida** en Proceso para **Crear Orden de Flete desde Orden de Salida** o **Desde Linea desde Orden de Salida**

![2.3.1](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.1-img2.png)

## Contexto

- Comisiones
- Manejo de Fletes

## Detalle Técnico

- Commission
- Freight Management

## Enlaces relacionados

- [ERPYA v2.3.1](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.1)

[Conciliaciones automáticas #630](https://github.com/erpcya/Control-PROSEIN/issues/630)
[Algoritmo: Banco de Venezuela #682](https://github.com/erpcya/Control-PROSEIN/issues/682)
[Algoritmo: Banco Provincial #683](https://github.com/erpcya/Control-PROSEIN/issues/683)
[Algoritmo: Banco Nacional de Crédito #684](https://github.com/erpcya/Control-PROSEIN/issues/684)
[Algoritmo: Banco del Tesoro #685](https://github.com/erpcya/Control-PROSEIN/issues/685)
[Algoritmo: Banco del Caribe #686](https://github.com/erpcya/Control-PROSEIN/issues/686)
[Algoritmo: Banesco #688](https://github.com/erpcya/Control-PROSEIN/issues/688)
[Algoritmo: Banco del Mercantil #738](https://github.com/erpcya/Control-PROSEIN/issues/738)

## Requerimientos

- Se requieren procesos adicionales por aplicar
