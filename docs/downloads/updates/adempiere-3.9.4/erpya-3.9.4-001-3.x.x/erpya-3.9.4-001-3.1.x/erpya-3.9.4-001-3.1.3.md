---
title: erpya-3.9.4-001-3.1.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.1.3"
  - "2025-06-19"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-06-19

## Novedades

- Personalización de Funcionalidad de Pagos

## Contexto

- Se agrega soporte a Tipo de Conversion en Ventana de Seleccion de Pagos.

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-3.1.3-img1.png)

- Se agrega SmartBrowse para Crear desde Factura considerando los siguientes aspectos
Filtros:

  - Tipo de Cuenta.
  - Tipo de Industria.
  - Grupo de Ventas.
  - Segmento.
  - Tipo de Conversion Seleccionado en Documento de Seleccion de pago (Si no se selecciono un Tipo de Conversion busca el Tipo de conversion de la factura).

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-3.1.3-img2.png)

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-3.1.3-img3.png)

- Se agrega SmartBrowse para Crear desde Orden de Compra considerando los siguientes aspectos
Filtros:

  - Tipo de Cuenta.
  - Tipo de Industria.
  - Grupo de Ventas.
  - Segmento.
  - Tipo de Conversion Seleccionado en Documento de Seleccion de pago (Si no se selecciono un Tipo de Conversion busca el Tipo de conversion de la Orden de Compra).
  - Saldo de la Orden de Compra.

## Requerimientos

- Se requieren procesos adicionales por aplicar.

### Consideraciones Adicionales

#### Nombres de Procesos y SmartBrowse Creados

| Nivel SAAS| Smart Browse | Proceso |
| :- | :- | :-|
|Payment Customizations |ECA48_PaySelectionCreateFromInvoice_Create from Invoice| ECA48_PaySelectionCreateFromInvoice_Create from Invoice |
|Payment Customizations |ECA48_PaySelectionCreateFromOrder_Create from Order (Payment Customization)| ECA48_PaySelectionCreateFromOrder_Create from Order |
