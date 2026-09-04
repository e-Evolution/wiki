---
title: Asignación de Factura a Recepción
category: Documentation
star: 9
article: false
---

Para realizar el procedimiento de asignación correctamente, es necesario cumplir con los siguientes requerimientos:

Un documento de **Orden de Compra** directa, para este caso se presenta la orden de compra número **OCN-24**, relacionada con el socio del negocio **Estándar**, por la compra del producto **DOIS-000001 \_Estandar** y con monto total de **2.500.000,00**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image64.png)

Imagen 1. Orden de Compra

Un documento de **Recepción de Productos** desde la orden de compra previamente realizada, para este caso se presenta la recepción de productos número **RN-2**, relacionada con la orden de compra número **OCN-24** y el producto **DOIS-000001 \_Estandar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image65.png)

Imagen 2. Recepción de Productos

Una **Factura** manual, sin llamar dentro de la misma a la orden de compra o recepción anteriormente realizada. Para este caso se presenta la factura número **1000112**, relacionada con el socio del negocio **Estándar**, por la compra del producto **DOIS-000001 \_Estandar** y con monto total de **2.500.000,00**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image66.png)

Imagen 3. Factura por Pagar

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione el formulario **Asignar OC-Recibo-Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image67.png)

Imagen 4. Menú de ADempiere

Podrá visualizar la ventana **Asignar OC Recepción Factura**, con diferentes campos que le permiten al usuario realizar la asignación de las órdenes de compra, recepciones y facturas por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image68.png)

Imagen 5. Ventana Asignar OC Recepción Factura

Seleccione en el campo **Asignar Desde**, el documento que requiere asignar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image69.png)

Imagen 6. Campo Asignar Desde de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Asignar Hasta**, el documento al cual se requiere asignar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image70.png)

Imagen 7. Campo Asignar Hasta de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Modo de Búsqueda**, el método utilizado para filtrar la búsqueda de los documentos.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image71.png)

Imagen 8. Campo Modo de Búsqueda de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Socio del Negocio**, el socio del negocio por el cual requiere filtrar la búsqueda.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image72.png)

Imagen 9. Campo Socio del Negocio de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Producto**, el producto por el cual requiere filtrar la búsqueda.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image73.png)

Imagen 10. Campo Producto de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Fecha Desde**, el inicio del rango de fechas por el cual requiere filtrar la búsqueda.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image74.png)

Imagen 11. Campo Fecha Desde de la Ventana Asignar OC Recepción Factura

Seleccione en el campo **Fecha Hasta**, la fecha final del rango de fechas por el cual requiere filtrar la búsqueda.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image75.png)

Imagen 12. Campo Fecha Hasta de la Ventana Asignar OC Recepción Factura

Seleccione la opción **Buscar Registros**, para realizar la búsqueda en base a lo seleccionado en los campos anteriormente explicados.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image76.png)

Imagen 13. Opción Buscar Registros de la Ventana Asignar OC Recepción Factura

Seleccione en la sección **Factura**, la factura que requiere asignar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image77.png)

Imagen 14. Selección de Factura de la Ventana Asignar OC Recepción Factura

El checklist **Mismo Socio del Negocio**, filtra la búsqueda por el mismo socio del negocio de la factura seleccionada en la sección **Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image78.png)

Imagen 15. Checklist Mismo Socio del Negocio de la Ventana Asignar OC Recepción Factura

El checklist **Mismo Producto**, filtra la búsqueda por el mismo producto de la factura seleccionada en la sección **Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image999.png)

Imagen 16. Checklist Mismo Producto de la Ventana Asignar OC Recepción Factura

El checklist **Misma Cantidad**, filtra la búsqueda por la misma cantidad de productos de la factura seleccionada en la sección **Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image79.png)

Imagen 17. Checklist Misma Cantidad de la Ventana Asignar OC Recepción Factura

Seleccione en la sección **Entrega/Recibo**, la recepción a la cual requiere asignar la factura seleccionada en la sección **Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image80.png)

Imagen 18. Selección de Recepción de Productos de la Ventana Asignar OC Recepción Factura

En el campo **Para ser asignadas**, se visualiza la cantidad total de productos que contiene la factura.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image81.png)

Imagen 19. Campo Para ser asignadas de la Ventana Asignar OC Recepción Factura

En el campo **Asignando**, se visualiza la cantidad total de productos que contiene la recepción.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image82.png)

Imagen 20. Campo Asignando de la Ventana Asignar OC Recepción Factura

En el campo **Diferencia**, se visualiza el resultado obtenido de la operación (Para ser asignadas - Asignando). Es decir, al restar el valor del campo **Asignando**, al valor del campo **Para ser asignadas**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image83.png)

Imagen 21. Campo Diferencia de la Ventana Asignar OC Recepción Factura

Seleccione la opción **Proceso**, para realizar la asignación de documentos en base a lo seleccionado en la ventana **Asignar OC Recepción Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image84.png)

Imagen 22. Opción Proceso de la Ventana Asignar OC Recepción Factura

### Consultar Asignación en Factura por Pagar

Para consultar la asignación realizada en la factura por pagar, se debe ubicar el registro de la misma en la ventana **Documentos por Pagar**, y seleccionar la pestaña **Recepciones de Producto Asignadas**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image85.png)

Imagen 23. Pestaña Recepciones de Producto Asignadas

Consultar Asignación en Recepción de Productos
Para consultar la asignación realizada en la recepción de productos, se debe ubicar el registro de la misma en la ventana **Recepción de Productos**, y seleccionar la pestaña **Facturas Asignadas**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image86.png)

Imagen 24. Pestaña Facturas Asignadas
