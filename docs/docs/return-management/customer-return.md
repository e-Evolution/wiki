---
title: Devolución de Cliente
category: Documentation
star: 9
article: false
---

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar una **Devolución de Cliente** en la versión 3.9.2 de ADempiere en la localización Venezuela. Dicho proceso de devolución es realizado generando un documento de autorización de devolución y porterior a ello, los documentos de devolución y nota de crédito correspondientes, los mismos son necesarios para reflejar el ingreso de los productos al almacén y disminuir el saldo de la factura.

- Autorización de Devolución (Cliente)
- Devolución (Cliente)
- Nota de Crédito por Devolución (Cliente)
- Consultar Saldos Abiertos
- Consultar Detalle de Transacciones

### Autorización de Devolución (Cliente)

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la ventana **Orden de Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image1.png)

Imagen 1. Autorización de Devolución (Cliente)

Seleccione el icono **Registro Nuevo**, en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/return-management/rem-return-image2.png)

Imagen 2. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento **Autorización de Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image3.png)

Imagen 3. Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/return-management/rem-return-image4.png)

Imagen 4. Campo Tipo de Documento Destino

Seleccione en el campo **Fecha de la Orden**, la fecha en la que se esta realizando el documento.

![Campo](/assets/img/docs/return-management/rem-return-image5.png)

Imagen 5. Campo Fecha de la Orden

Seleccione en el campo **Tipo Autorización Devolución**, el motivo por el cual son devueltos los productos. Para ejemplificar el registro es utilizada la opción **Producto Erróneo**.

![Campo](/assets/img/docs/return-management/rem-return-image6.png)

Imagen 6. Campo Tipo Autorización Devolución

Seleccione en el campo **Socio del Negocio**, el socio del negocio cliente seleccionado en la orden de venta.

![Campo](/assets/img/docs/return-management/rem-return-image7.png)

Imagen 7. Campo Socio del Negocio

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección del socio del negocio cliente seleccionado.

![Campo](/assets/img/docs/return-management/rem-return-image8.png)

Imagen 8. Campo Dirección del Socio del Negocio

Seleccione en el campo **Almacén**, el almacén en el que serán ingresados los productos.

![Campo](/assets/img/docs/return-management/rem-return-image9.png)

Imagen 9. Campo Almacén

Seleccione en el campo **Lista de Precios**, la lista de precios seleccionada en la orden de venta.

![Campo](/assets/img/docs/return-management/rem-return-image10.png)

Imagen 10. Campo Lista de Precios

Seleccione en el campo **Agente Comercial**, el vendedor que realiza la orden de venta.

![Campo](/assets/img/docs/return-management/rem-return-image11.png)

Imagen 11. Campo Agente Comercial

Seleccione el icono **Guardar Cambios**, para guardar el registro de los campos.

![Campo](/assets/img/docs/return-management/rem-return-image12.png)

Imagen 12. Icono Guardar Cambios

Seleccione el icono **Proceso** en la barra de herramientas.

![Campo](/assets/img/docs/return-management/rem-return-image13.png)

Imagen 13. Icono Proceso

Podrá apreciar un menú desplegado por el icono **Proceso**, en el cual debe seleccionar la opción **Crear Orden de Devolución desde Entrega / Recibo**.

![Campo](/assets/img/docs/return-management/rem-return-image14.png)

Imagen 14. Menú del Icono Proceso

Podrá apreciar la seguiente ventana de búsqueda inteligente en la cual debe seleccionar en el campo **Entrega / Recibo**, el documento de entrega con ayuda del identificador.

![Campo](/assets/img/docs/return-management/rem-return-image15.png)

Imagen 15. Campo Entrega / Recibo

Seleccione el documento de entrega y luego seleccione la opción **OK**.

![Campo](/assets/img/docs/return-management/rem-return-image16.png)

Imagen 16. Opción OK

Seleccione la opción **Comenzar Búsqueda**, para apreciar los productos entregados al cliente.

![Campo](/assets/img/docs/return-management/rem-return-image17.png)

Imagen 17. Opción Comenzar Búsqueda

Seleccione el producto de la devolución e introduzca la cantidad de la devolución en la columna cantidad.

![Campo](/assets/img/docs/return-management/rem-return-image18.png)

Imagen 18. Producto a Devolver

Seleccione la opción **OK**, para cargar los productos a la pestaña **Línea de Autorización**.

![Campo](/assets/img/docs/return-management/rem-return-image19.png)

Imagen 19. Opción OK

Seleccione la pestaña **Línea de Autorización**, para verificar que las cantidades, el producto y el precio cargado sean los correctos.

![Campo](/assets/img/docs/return-management/rem-return-image20.png)

Imagen 20. Pestaña Línea de Autorización

Regrese a la ventana principal **Autorización de Devolución** y seleccione la opción **Completar** ubicada en la parte inferior derecha del documento.

![Campo](/assets/img/docs/return-management/rem-return-image21.png)

Imagen 21. Completar Documento

Seleccione la acción **Completar** y la opción **OK**, para completar el documento.

![Campo](/assets/img/docs/return-management/rem-return-image22.png)

Imagen 22. Acción Completar

### Devolución (Cliente)

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Entregas**, por último seleccione la ventana de búsqueda inteligente **Generar Entregas Desde Líneas de Orden**.

![Campo](/assets/img/docs/return-management/rem-return-image23.png)

Imagen 23. Menú de ADempiere

Seleccione en el campo **Socio del Negocio**, el socio del negocio seleccionado en el documento de **Orden de Devolución Cliente**.

![Campo](/assets/img/docs/return-management/rem-return-image24.png)

Imagen 24. Campo Socio del Negocio

Seleccione la opción **Comenzar Búsqueda**, para buscar los documentos de ventas relacionados con el socio del negocio seleccionado.

![Campo](/assets/img/docs/return-management/rem-return-image25.png)

Imagen 25. Opción Comenzar Búsqueda

Podrá apreciar las órdenes de ventas y las autorizaciones de devoluciones realizadas al socio del negocio seleccionado.

![Campo](/assets/img/docs/return-management/rem-return-image26.png)

Imagen 26. Órdenes y Autorizaciones al Socio

Ubique y seleccione el documento **Orden de Devolución Cliente** a utilizar para crear el documento **Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image27.png)

Imagen 27. Seleccionar Orden de Devolución Cliente

Se mostrará las opciones del campo **Acción de Documento**, como se visualiza en este ejemplo la acción **Completar**, de esta manera se generará el documento con estado **Completo**.

![Campo](/assets/img/docs/return-management/rem-return-image28.png)

Imagen 28. Acción del Documento

Seleccione la opción **OK**, para generar el documento **Devolución (Cliente)** desde el documento **Orden de Devolución Cliente** seleccionado.

![Campo](/assets/img/docs/return-management/rem-return-image29.png)

Imagen 29. Opción OK

Seleccione en el menú de ADempiere, la carpeta **Gestión de Devoluciones**, luego seleccione la ventana **Devolución Cliente**.

![Campo](/assets/img/docs/return-management/rem-return-image30.png)

Imagen 30. Menú de ADempiere

Podrá apreciar el documento **Devolución Cliente**, creado desde la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/return-management/rem-return-image31.png)

Imagen 31. Documento Devolución Cliente

Note

La elaboración de este proceso permite ingresar nuevamente los productos seleccionados anteriormente al almacén de la empresa.

## Nota de Crédito por Devolución (Cliente)

Para generar el documento **Nota de Crédito por Devolución (Cliente)**, debe existir obligatoriamente una factura para aplicar la nota de crédito. Para ejemplificar el registro de la devolución de cliente se utiliza la factura número **84884**.

![Campo](/assets/img/docs/return-management/rem-return-image32.png)

Imagen 32. Factura 84884

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Facturas de Ventas**, por último seleccione la ventana de búsqueda inteligente **Generar Facturas desde Líneas de la Orden**.

![Campo](/assets/img/docs/return-management/rem-return-image33.png)

Imagen 33. Menú de ADempiere

Seleccione en el campo **Socio del Negocio**, el socio del negocio del documento **Autorización de Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image34.png)

Imagen 34. Campo Socio del Negocio 3

Seleccione la opción **Comenzar Búsqueda**, para buscar los documentos relacionados con el socio del negocio seleccionado.

![Campo](/assets/img/docs/return-management/rem-return-image35.png)

Imagen 35. Opción Comenzar Búsqueda

Seleccione el documento **Autorización de Devolución (Cliente)** a utilizar para crear el documento **Nota de Crédito por Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image36.png)

Imagen 36. Seleccionar Autorización de Devolución Cliente

Se mostrará las opciones del campo **Acción de Documento**, como se visualiza en este ejemplo la acción **Completar**, de esta manera se generará el documento con estado **Completo**.

![Campo](/assets/img/docs/return-management/rem-return-image37.png)

Imagen 37. Acción de Documento

Destilde el checklist **Agregar Línea de Referencia en Factura** para que no se genere una línea en el documento solo con la referencia de la transacción.

![Campo](/assets/img/docs/return-management/rem-return-image38.png)

Imagen 38. Checklist Agregar Línea de Referencia en Factura

Seleccione la opción **OK**, para que se genere el documento **Nota de Crédito por Devolución (Cliente)**.

![Campo](/assets/img/docs/return-management/rem-return-image39.png)

Imagen 39. Opción OK

Podrá visualizar el mensaje donde indica que se creó la nota de crédito desde la autorización de devolución **ADCN-1000014**.

![Campo](/assets/img/docs/return-management/rem-return-image40.png)

Imagen 40. Mensaje de Creación de Nota de Crédito

Seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Facturas de Ventas**, por último seleccione la ventana **Documentos por Cobrar**.

![Campo](/assets/img/docs/return-management/rem-return-image41.png)

Imagen 41. Menú de ADempiere

Podrá apreciar el documento **Nota de Crédito por Devolución (Cliente)**, creado desde la ventana de búsqueda inteligente.

![Campo](/assets/img/docs/return-management/rem-return-image42.png)

Imagen 42. Documento Nota de Crédito

En la pestaña **Línea de la Factura**, podrá visualizar la factura afectada número **84884**.

![Campo](/assets/img/docs/return-management/rem-return-image43.png)

Imagen 43. Pestaña del Documento Nota de Crédito

### Consultar Saldos Abiertos

Al consultar saldos abiertos se verifica que la nota de crédito haya sido aplicada a la factura, generando con ello un descuento al saldo abierto del socio del negocio de la siguiente manera.

![Campo](/assets/img/docs/return-management/rem-return-image44.png)

Imagen 44. Consultar Saldos Abiertos

## Consultar Detalle de Transacciones

Al consultar los detalles de transacciones se verifican los movimientos de salida de productos por medio de una entrega, generando con ello un descuento al total de productos. De igual manera es reflejada la entrada del mismo producto por medio de una devolución de cliente, generando con ello un aumento al total de productos en existencia.

![Campo](/assets/img/docs/return-management/rem-return-image45.png)

Imagen 45. Consultar Detalle de Transacciones
