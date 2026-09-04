---
title: Anular Factura Fiscal
category: Documentation
star: 9
article: false
---

Suponiendo que el día **10/02/2021**, se tiene la orden de venta **OPOS-5186** y la factura asociada a dicha orden es la **TMP- 0004912**. Adicional a ello, el cobro correspondiente a las mismas es el **AC465**. En ADempiere cuando por algún motivo se requiere anular una factura fiscal cuando la misma no fue impresa en su momento. Se debe realizar el siguiente procedimiento.

## Reversar Cobros

Ubique en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la carpeta **Diario de Caja**, por último seleccione la ventana **Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image1.png)

Imagen 1. Menú de ADempiere

Con ayuda del número de documento, ubique el cobro asociado a la factura que requiere anular.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image2.png)

Imagen 2. Ubicar Cobro

Seleccione la opción **Cerrar**, ubicada en la parte inferior derecha de la ventana **Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image3.png)

Imagen 3. Opciónb Cerrar de la Ventana Caja

Seleccione la acción **Reversar-Corregir** y la opción **OK**, para ejecutar el proceso de reverso del cobro.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image4.png)

Imagen 4. Acción Reversar-Corregir y Opción OK

Note

El procedimiento explicado anteriormente, debe ser realizado con los diferentes cobros que tiene asociado la factura.

## Anular Factura

Unique en el menú de ADempiere, la carpeta **Gestión de Sistema**, luego seleccione la carpeta **Reglas Generales**, por último seleccione la carpeta **Impresora Fiscal**. Finalmente, seleccione el proceso **Autorizar Documento Fiscal**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image5.png)

Imagen 5. Menú de ADempiere

Podrá visualizar la ventana del proceso **Autorizar Documento Fiscal**, con los campos necesarios para ejecutar el proceso requerido por el usuario.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image6.png)

Imagen 6. Ventana Autorizar Documento Fiscal

Seleccione en el campo **Factura**, la factura involucrada en el proceso que requiere ejecutar.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image7.png)

Imagen 7. Campo Factura

Seleccione en el campo **Tipo de Autorización**, la opción **Anulación**, para anular la factura seleccionada en el campo **Factura**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image8.png)

Imagen 8. Campo Tipo de Autorización

Seleccione la opción **OK**, para ejecutar el proceso **Autorizar Documento Fiscal**, en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image9.png)

Imagen 9. Opción OK

## Anular Orden de Venta

Ubique en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la ventana **Órdenes de Venta**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image10.png)

Imagen 10. Menú de ADempiere

Con ayuda del número de documento, ubique la orden de venta asociada a la factura anulada.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image11.png)

Imagen 11. Ubicar Orden de Venta

Seleccione la opción **Cerrar**, ubicada en la parte inferior derecha de la ventana **Órdenes de Venta**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image12.png)

Imagen 12. Opciónb Cerrar de la Ventana Órdenes de Venta

Seleccione la acción **Anular** y la opción **OK**, para ejecutar el proceso de anular orden.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image13.png)

Imagen 13. Acción Anular y Opción OK
