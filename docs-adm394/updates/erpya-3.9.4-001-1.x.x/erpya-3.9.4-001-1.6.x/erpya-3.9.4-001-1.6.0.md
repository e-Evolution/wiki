---
title: erpya-3.9.4-001-1.6.0
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.0"
  - "2024-04-18"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-18

## Novedades

- Para realizar ésta validación se agregó en el `Tipo de Documento` una bandera llamada **Permitir Sobregirar Factura a Asignar** (`LVE_AllowOverdraftReference`) con el valor predeterminado como verdadero para mantener la compatibilidad hacia atrás.

- Con este cambio es posible validar documentos por cobrar para que no permitan ser sobregirados a través de una Nota de Crédito

## Contexto

- Se agrega validación para que no permita sobregirar Facturas de Cuentas por Cobrar si son fiscales a través de notas de crédito
- Se agrega soporte a Acceso a Datos de Rol en Ventana de informacion de Productos.

## Detalle Técnico

- Validation is added so that it does not allow overdrawing Accounts Receivable Invoices if they are fiscal through credit notes
- Added support for Access to Role Data in Product Information Window

## Enlaces relacionados

- [ERPYA v1.6.0](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.6.0)

## Requerimientos

- Se requiere aplicar proceso.

### ¿Cómo se ve el mensaje de error?

Cuando hay un error de validación por sobregiro se ve de la siguiente manera:

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.0-video1.mp4" type="video/mp4">
    </video>
</div>

![Mensaje de Error](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.0-img2.png)

- Inglés:

```sh
Invoice Amount: 14,205.87
Invoice Open Amount: 0.00
Amount to Allocate: 4,345.05
Currency: VES
Difference: -4,345.05
```

- Español:

```sh
Monto de Factura: 14.205,87
Saldo Abierto: 0,00
Monto a Asignar: 4.345,05
Moneda: VES
Diferencia: -4.345,05
```
