---
title: erpya-3.9.4-001-2.0.9
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.0.9"
  - "2024-07-29"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-07-29

## Novedades

## Operador Logístico (Personalizado)

- Se agrega **TXT** para reporte de **Detalle de Orden de Distribución**.

### Criterio

- El almacén lo toma del almacén asociado a la ubicación de la linea de orden de distribución `M_Locator_ID`

- El precio lo toma de la lista de precio asociada al socio de negocio, si el socio de negocio no tiene lista de precio toma la lista de precio predereminada de venta y si no tiene da un error

- La condición de pago quedó hardcodeada con la palabra `CONTADO`

### ¿Dónde se exporta el TXT?

En el reporte **Detalle de Orden de Distribución**.

![Reporte](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.9-img1.png)

### ¿Cómo se debería ver el formato como compañía?

![Reporte](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.9-img2.png)

## Gestion Avanzada de Almacenes

Se agrega Consulta Inteligente para Generar Entrega y Factura desde una Orden de Saida

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.9-img3.png)

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.9-img4.png)

## Contexto

- Gestión de Almacenes
- Detalle de Orden de Distribución

## Detalle Técnico

- Warehouse Management
- Distribution Order Detail

## Enlaces relacionados

- [ERPYA v2.0.9](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.0.9)

- [TXT de Orden de Distribución #87](https://github.com/erpcya/Control-NATULAC/issues/87)

- [Customer Addons v1.0.6](https://github.com/erpya/adempiere-customer-addons/releases/tag/1.0.6)

- [Add Browse for Generate Shipment / Invoice from OutBound Order #68](https://github.com/erpcya/adempiere/issues/68)

## Requerimientos

- Se requieren procesos adicionales por aplicar.
