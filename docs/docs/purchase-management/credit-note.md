---
title: Nota de Crédito
category: Documentation
star: 9
article: false
---

Es un documento que se aplica a una factura con la finalidad de disminuir el monto de la misma, ya sea por concepto de algún tipo de descuento promocional o por devolución de productos comprados.

A continuación es explicado el procedimiento para generar en ADempiere, una nota de crédito de cuentas por pagar.

## Registro de Nota de Crédito

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image99.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Documentos por Pagar**, con los diferentes registros de documentos por pagar cargados a ADempiere.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image100.png)

Imagen 2. Ventana Documentos por Pagar

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro en la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image101.png)

Imagen 3. Icono Registro Nuevo de la Ventana Documentos por Pagar

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image102.png)

Imagen 4. Campo Organización de la Ventana Documentos por Pagar

Seleccione en el campo **Orden de Compra**, la orden de compra por la cual requiere realizar la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image103.png)

Imagen 5. Campo Orden de Compra de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Fecha de la Orden**, la fecha contable de la orden seleccionada en el campo **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image104.png)

Imagen 6. Campo Fecha de la Orden de la Ventana Documentos por Pagar

Introduzca en el campo **No. del Documento**, el número de identificación correspondiente al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image105.png)

Imagen 7. Campo No del Documento de la Ventana Documentos por Pagar

Note

Si no es ingresado ningún valor en este campo, ADempiere tomará el número de secuencia establecido para el tipo de documento seleccionado al guardar el mismo.

Introduzca en el campo **Referencia de Orden de Socio del Negocio**, la referencia de orden de socio del negocio.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image106.png)

Imagen 8. Campo Referencia de Orden de Socio del Negocio de la Ventana Documentos por Pagar

Introduzca en el campo **Descripción**, una breve descripción con respecto al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image107.png)

Imagen 9. Campo Descripción de la Ventana Documentos por Pagar

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image108.png)

Imagen 10. Campo Tipo de Documento Destino de la Ventana Documentos por Pagar

Seleccione en el campo **Fecha de Facturación**, la fecha en la cual es realizado el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image109.png)

Imagen 11. Campo Fecha de Facturación de la Ventana Documentos por Pagar

Seleccione en el campo **Fecha Contable**, la fecha en la cual es realizado el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image110.png)

Imagen 12. Campo Fecha Contable de la Ventana Documentos por Pagar

Seleccione en el campo **Socio del Negocio**, el socio del negocio al cual le esta aplicando la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image111.png)

Imagen 13. Campo Socio del Negocio de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Dirección de Socio del Negocio**, la dirección del socio del negocio seleccionado anteriormente en el campo **Socio del Negocio**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image112.png)

Imagen 14. Campo Dirección de Socio del Negocio de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Usuario**, el usuario del socio del negocio seleccionado anteriormente en el campo **Socio del Negocio**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image113.png)

Imagen 15. Campo Usuario de la Ventana Documentos por Pagar

Seleccione en el campo **Lista de Precios**, la lista de precios con la cual requiere generar la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image114.png)

Imagen 16. Campo Lista de Precios de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Moneda**, la moneda definida para la lista de precios seleccionada.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image115.png)

Imagen 17. Campo Moneda de la Ventana Documentos por Pagar

Seleccione en el campo **Agente Compañía**, el agente de comprañía relacionado con la nota de crédito que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image116.png)

Imagen 18. Campo Agente Compañía de la Ventana Documentos por Pagar

El checklist **Imprimir Descuento**, indica se va a imprimir el descuento en la factura y la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image117.png)

Imagen 19. Checklist Imprimir Descuento de la Ventana Documentos por Pagar

Seleccione la opción **Cheque**, para indicar como será pagado el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image118.png)

Imagen 20. Opción Cheque de la Ventana Documentos por Pagar

Seleccione la opción **Crear Desde Factura**, para crear el documento desde una orden, autorización de devolución, factura o recepción.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image119.png)

Imagen 21. Opción Crear Desde Factura de la Ventana Documentos por Pagar

Seleccione la opción **Generar Recibos desde Facturas**, para crear y procesar el recibo de la entrega desde la factura cuando se encuentre correcta y completa.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image120.png)

Imagen 22. Opción Generar Recibos desde Facturas de la Ventana Documentos por Pagar

El checklist **Documento Fiscal**, indica que el registro en el que se encuentra es un documento fiscal.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image121.png)

Imagen 23. Checklist Documento Fiscal de la Ventana Documentos por Pagar

Introduzca en el campo **Contol No**, el número de control fiscal correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image122.png)

Imagen 24. Campo Control No de la Ventana Documentos por Pagar

Introduzca en el campo **Código Sunagro**, el código sunagro correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image123.png)

Imagen 25. Campo Código Sunagro de la Ventana Documentos por Pagar

Seleccione en el campo **Lista**, la lista correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image124.png)

Imagen 26. Campo Lista de la Ventana Documentos por Pagar

Seleccione en el campo **Región de Ventas**, la región de ventas correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image125.png)

Imagen 27. Campo Región de Ventas de la Ventana Documentos por Pagar

Seleccione en el campo **Factura Afectada**, la factura a la cual requiere aplicar la nota de crédito que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image126.png)

Imagen 28. Campo Factura Afectada de la Ventana Documentos por Pagar

Al tildar el checklist **No Aplica Retención de I.V.A**, no es aplicada la retención al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image127.png)

Imagen 29. Checklist No Aplica Retención de IVA de la Ventana Documentos por Pagar

Seleccione en el campo **Centro de Costos**, el centro de costos correspondiente para el registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image128.png)

Imagen 30. Campo Centro de Costos de la Ventana Documentos por Pagar

Seleccione en el campo **Concepto de Retención de I.S.L.R**, el concepto de retención que requiere aplicar al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image129.png)

Imagen 31. Campo Concepto de Retención de ISLR de la Ventana Documentos por Pagar

Seleccione en el campo **Actividad**, la actividad correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image130.png)

Imagen 32. Campo Actividad de la Ventana Documentos por Pagar

Seleccione en el campo **Retención de Terceros**, la retención correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image131.png)

Imagen 33. Campo Retención de Terceros de la Ventana Documentos por Pagar

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña **Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image132.png)

Imagen 34. Icono Guardar Cambios de la Ventana Documentos por Pagar

## Línea de la Factura

Seleccione la pestaña **Línea de la Factura**, para cargar los detalles de la nota de crédito que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image133.png)

Imagen 35. Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **No. Línea**, el número de línea correspondiente al registro que se encuentra realizando en la pestaña **Línea de la Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image134.png)

Imagen 36. Campo No Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Producto**, el producto por el cual se encuentra aplicando la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image135.png)

Imagen 37. Campo Producto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Cargo**, el cargo por el cual se encuentra aplicando la nota de crédito.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image136.png)

Imagen 38. Campo Cargo de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image137.png)

Imagen 39. Campo Descripción de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Cantidad**, la cantidad correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image138.png)

Imagen 40. Campo Cantidad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **UM**, la unidad de medida relacionada al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image139.png)

Imagen 41. Campo UM de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Introduzca en el campo **Precio**, el precio correspondiente a la nota de crédito que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image140.png)

Imagen 42. Campo Precio de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Precio Actual**, el precio actual ingresado en el campo **Precio**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image141.png)

Imagen 43. Campo Precio Actual de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Precio de Lista**, el precio de lista oficial.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image142.png)

Imagen 44. Campo Precio de Lista de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Impuesto**, el tipo de impuesto a aplicar en el registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image143.png)

Imagen 45. Campo Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Total Impuesto**, el monto total del impuesto aplicado al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image144.png)

Imagen 46. Campo Total Impuesto de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Factura Afectada**, la factura afectada para asignar la nota automáticamente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image145.png)

Imagen 47. Campo Factura Afectada de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Actividad**, la actividad correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image146.png)

Imagen 48. Campo Actividad de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione en el campo **Centro de Costos**, el centro de costos correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image147.png)

Imagen 49. Campo Centro de Costos de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Neto de Línea**, el neto de la línea.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image148.png)

Imagen 50. Campo Neto de Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Podrá visualizar en el campo **Total de la Línea**, el resultado de la sumatoria del valor en el campo **Neto de Línea** más el valor en el campo **Total del Impuesto**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image149.png)

Imagen 51. Campo Total de la Línea de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña **Línea de la Factura**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image150.png)

Imagen 52. Icono Guardar Cambios de la Pestaña Línea de la Factura de la Ventana Documentos por Pagar

Seleccione la pestaña principal **Factura** y ubique la opción **Completar**, en la parte inferior derecha de la ventana.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image151.png)

Imagen 53. Pestaña Principal Factura de la Ventana Documentos por Pagar

Seleccione la opción **Completar**, para completar el documento **Nota de Crédito de CxP**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image152.png)

Imagen 54. Opción Completar de la Ventana Documentos por Pagar

Seleccione la acción **Completar** y la opción **OK**, para culminar el proceso.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image153.png)

Imagen 55. Acción Completar y Opción OK de la Ventana Documentos por Pagar

## Consultar Asignación de Nota de Crédito Aplicada

Ubique el registro de la factura asociada a la nota de crédito, en este caso se ubica la factura **1000108** y posteriormente seleccione la pestaña **Pagos Asignados**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image154.png)

Imagen 56. Registro de la Factura Asociada a la Nota de Crédito de CxP

Haga clic contrario en el campo **Asignación** y seleccione la opción **Acercar** en el menú visualizado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image155.png)

Imagen 57. Acercar Asignación de Nota de Crédito de CxP

Podrá visualizar el registro de la asignación creada al completar el documento **Nota de Crédito de CxP**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image156.png)

Imagen 58. Registro de Asignación de Nota de Crédito de CxP

Seleccione la pestaña **Asignaciones**, para visualizar la información del monto de la nota de crédito aplicada a la factura.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image157.png)

Imagen 59. Pestaña Asignaciones de la Ventana Consulta de Asignación
