---
title: Importación
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Importación
article: false
---

**Importación**
===============

Dicha importación tiene como consecuencia para la empresa nacional la generación de gastos aduanales, sujetos al pago de tributos o al amparo de las franquicias correspondientes.

## **Expediente de Importación**

El expediente de importación representa la agrupación fiscal para un proceso de importación y es quién da paso al proceso de importación.

- Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Importación y Exportación**" y luego seleccione la ventana "**Expediente de Importación/Exportación**".

![Menu Import](/assets/img/docs/lve/procedures/import/resources/menu1.png)

Imagen 1. Menú de ADempiere

- Seleccione el tipo de documento **"Expediente de Importación".

![Tipo de Documento Import](/assets/img/docs/lve/procedures/import/resources/tipodocimport.png)

Imagen 2. Tipo de Documento

- Introduzca la fecha del expediente.

![Fecha de Documento Import](/assets/img/docs/lve/procedures/import/resources/fechadocimport.png)

Imagen 3. Fecha de Documento

- Introduzca el número del expediente asignado en el campo **Número de Documento**.

![Número de Documento Import](/assets/img/docs/lve/procedures/import/resources/ndocumentoimport.png)

Imagen 4. Fecha de Documento

- Introduzca la moneda en la cuál gestionará el expediente, es decir, la moneda de la compra de la mercancía.

![Moneda de Documento Import](/assets/img/docs/lve/procedures/import/resources/monedaimport.png)

Imagen 5. Moneda de Documento

Introduzca el tipo de conversión en la cuál gestionará el expediente, recuerde que generalmente es el tipo de cambio de curso legal.

![Tipo de Cambio de Documento Import](/assets/img/docs/lve/procedures/import/resources/tipoconvimport.png)

Imagen 6. Tipo de Cambio de Documento

::: info Nota

El campo **Moneda de Fiscal** es la moneda de curso legal y es cargada automáticamente.

:::

Vaya a la siguiente pestaña **Tipo de Conversión Negociada**, para establecer la tasa asignada al expediente de importación.

![Pestaña Tasa de Conversión](/assets/img/docs/lve/procedures/import/resources/pestanatcimport.png)

Imagen 7. Tipo de Cambio de Documento

Indique el monto de la tasa de cambio asignada al expediente de importación.

![Tasa de Cambio de Documento Import](/assets/img/docs/lve/procedures/import/resources/tasacambioimport.png)

Imagen 8. Tipo de Cambio de Documento

- Vea el expediente generado en el campo **Expediente Generado**, este registro es el valor utilizado para consultar los registros en reportes administrativos y contables.

![Expediente Generado](/assets/img/docs/lve/procedures/import/resources/expgeneradoimport.png)

Imagen 9. Tipo de Cambio de Documento

::: info Nota

Tome en cuenta que esta ''tasa de cambio'' será tasa con la que cada documento imputado en la importación es convertido, es decir al establecer el expediente en un documento, automáticamente será establecida la tasa negociada.

:::

- Proceda a completar el documento para que su expediente tenga validez en los documentos que fungen como costo CIF o costo FOB.

A continuación se detalla los campos que son actualizados de manera automática:

- **Monto Base Ordenado:** El campo aumenta al completar una orden de compra asociada al **Expediente**, al igual que actualiza la pestaña **Ordenes Relacionadas**.

- **Cantidad de Ordenes:**  El campo aumenta al completar una orden de compra asociada al **Expediente**.

- **Monto Neto Ordenado:** El campo aumenta al completar una orden de compra asociada al **Expediente**.

- **Impuesto Ordenado:** El campo aumenta al completar una orden de compra asociada al **Expediente**, al igual que actualiza la pestaña **Facturas Relacionadas**.

- **Cantidad de facturas:** El campo aumenta al completar las facturas asociadas al **Expediente**.

- **Monto Neto Facturado:** El campo aumenta al completar las facturas asociadas al **Expediente**.

- **Impuesto Facturado:** El campo aumenta al completar las facturas asociadas al **Expediente**.

- **Total del Impuesto:** El campo aumenta al completar los pagos asociados al **Expediente**, al igual que actualiza la pestaña **Pagos Relacionados**.

- **Cantidad de pagos:** El campo aumenta al completar los pagos asociados al **Expediente**

- **Monto Pagado:** El campo aumenta al completar los pagos asociados al **Expediente**

## **Orden de Compra de Importación**

- Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Compras**" y luego seleccione la ventana "**Órdenes de Compra**".

![Menú de ADempiere 1](/assets/img/docs/lve/procedures/import/resources/menu1.png)

Imagen 10. Menú de ADempiere

- Realice el procedimiento regular para realizar una orden de compra, explicado en el material **''Orden de compra''**.

![Orden de Compra sin Completar](/assets/img/docs/lve/procedures/import/resources/orden1.png)

Imagen 11. Orden de Compra Importación sin Completar

- Asigne el expediente creado anteriormente en el campo **Expediente Importación/Exportación**.

![Expediente de OC](/assets/img/docs/lve/procedures/import/resources/ocexpgeneradoimport.png)

Imagen 12. Expediente de Importación

::: info ¡Importante!

Al colocar el expediente se establece el ''tipo de conversión negociado'' y el ''Expediente Generado''.

:::

- Seleccione la opción "**Completar**", ubicada en la parte inferior derecha del documento.

![Opción Completar 1](/assets/img/docs/lve/procedures/import/resources/completar1.png)

Imagen 13. Opción Completar Documento

- Seleccione la acción "**Completar**" y la opción "**OK**" para completar el documento "**Orden de Compra**".

![ Acción Completar](/assets/img/docs/lve/procedures/import/resources/accion1.png)

Imagen 14. Acción Completar

- Podrá visualizar en la parte inferior de la orden de compra, el campo en estado "**Completo**" y el resultado de la conversión configurada anteriormente.

![Orden de Compra Completa](/assets/img/docs/lve/procedures/import/resources/resultado1.png)

Imagen 15. Orden de Compra Completa

## **Documento por Pagar de Mercancía**

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Compras**" y luego seleccione la ventana "**Documentos por Pagar**".

![Menú de ADempiere 4](/assets/img/docs/lve/procedures/import/resources/menu4.png)

Imagen 16. Menú de ADempiere

Realice el procedimiento regular para realizar un documento por pagar desde una Orden de Compra, explicado en el material **''Documento por pagar''**.

![Factura de Importación](/assets/img/docs/lve/procedures/import/resources/facturaimpor.png)

Imagen 17. Factura de Cuentas por Pagar Importación

::: info ¡Importante!

Seleccione el tipo de documento: **Factura de Cuentas por Pagar Importación**, para que este documento afecte la base del IVA.

:::

Asigne el expediente creaado anteriormente en el campo **Expediente Importación/Exportación**.

![Expediente Factura CXP](/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png)

Imagen 18. Expediente de Importación

::: info Nota

Al crear desde la orden de compra establecerá el **expediente de Importación** asociado a la orden de compra, y establece el **tipo de conversión negociado**.

:::

Vea el expediente creaado anteriormente en el campo **Expediente Importación/Exportación**.

![Expediente Factura CXP](/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png)

Imagen 18. Expediente de Importación

## **Documento por Pagar de Costos CIF**

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Compras**" y luego seleccione la ventana "**Documentos por Pagar**".

![Menú de ADempiere 4](/assets/img/docs/lve/procedures/import/resources/menu4.png)

Imagen 19. Menú de ADempiere

Realice el procedimiento regular para realizar un documento por pagar desde una Orden de Compra, explicado en el material [Documento por pagar](/about/services/products/requisition-to-invoice.md)

![Factura de Importación](/assets/img/docs/lve/procedures/import/resources/facturaimpor.png)

Imagen 20. Factura de Cuentas por Pagar Importación

::: info ¡Importante!

Seleccione el tipo de documento: ''Facturas Gastos Internacionales Importación'', para que este documento afecte la base del IVA.

:::

Asigne el expediente creaado anteriormente en el campo **Expediente Importación/Exportación**.

![Expediente Factura CXP](/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png)

Imagen 21. Expediente de Importación

Asigne la factura relacionada o factura de la mercacía creada anteriormente en el campo **Factura Relacionada**.

![Factura Relacionada](/assets/img/docs/lve/procedures/import/resources/facturarelacionimport.png)

Imagen 22. Factura Relacionada

::: info Nota:

Al colocar el expediente se establece el **tipo de conversión negociado**.

:::

## **Actualización de Tasa de Expediente de Importación**

- Buscar en la ventana Expediente de Importación/Exportación.
![image](https://github.com/erpcya/docs/assets/9578152/c50ed35a-6013-41ce-aea0-214da5e635a1)

- Seleccione en el acercador **Tipo de Conversión (por Documentos)**
  ![image](https://github.com/erpcya/docs/assets/9578152/670c15cf-a785-4cd3-8215-ee69e548c5a4)

- Estando en la ventana **Tipo de Conversión (por Documentos)**, vaya a la pestaña **Tasa de Cambio**
- Proceda a modificar los montos de las tasas en los registros generados.
  ![image](https://github.com/erpcya/docs/assets/9578152/4500fc36-8d34-4258-8ae6-074900574e86)

- Vaya nuevamente al expediente, y seleccione el proceso **Actualizar Saldos de Expedientes**
![image](https://github.com/erpcya/docs/assets/9578152/2ff78073-17e3-42e5-802f-c933e5ef64a0)

- Levanta la siguiente ventana, para ejecutar el proceso.
![image](https://github.com/erpcya/docs/assets/9578152/6b4549c7-9c1c-4143-9605-db929a84a3ef)

- Seleccione la opción ok.
![image](https://github.com/erpcya/docs/assets/9578152/2a1464b8-a9c7-47d5-97e8-470ab7b5bbe7)

- Valide los saldos actualizados.
![image](https://github.com/erpcya/docs/assets/9578152/45af6f27-ce56-4a54-b27c-4cbc1c892f30)

## **Cancelación de Factura**

Realice el procedimiento regular para realizar un documento de selección de pagos desde una factura de cuentas por pagar, explicado en el material **''Selección de pago''**, esto cancelará el pasivo con el proveedor de mercancía.
