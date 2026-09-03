---
title: Documento por Pagar
category: Documentation
star: 9
article: false
---

Una factura en cuentas por pagar, es el documento legal que representa una deuda contraída por la compañía u organización con un proveedor determinado, por la compra de productos y servicios que la misma necesita de forma directa o indirecta para realizar sus actividades, afectando económicamente a la misma.

En ADempiere es posible generar una factura de cuentas por pagar de forma directa. El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar una factura de cuentas por pagar en ADempiere, en su versión 3.9.2 para la localización Venezuela.

- Registro de Documento por Pagar
  - Línea de la Factura
- Crear Factura desde Orden de Compra
- Conversión de Factura Automática

## Registro de Documento por Pagar

Ubique en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione la ventana **Documentos por Pagar**, adjunto imagen para referencia.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image217.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Documentos por Pagar**, con todos los registros que contiene ADempiere referente a documentos por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image218.png)

Imagen 2. Ventana Documentos por Pagar

Seleccione la opción **Registro Nuevo** en la barra de herramientas de ADempiere, para crear un documento nuevo en la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image219.png)

Imagen 2. Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se esta realizando el documento por pagar de productos o servicios, el valor en el mismo debe ser diferente del símbolo (\*).

![Campo](/assets/img/docs/purchase-management/pum-purchase-image220.png)

Imagen 3. Campo Organización

En el campo **Orden de Compra**, se muestra el número de documento de la orden de compra asociada al documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image221.png)

Imagen 4. Campo Orden de Compra

En el campo **Fecha de la Orden**, se muestra la fecha contable de la orden de compra asociada al documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image222.png)

Imagen 5. Campo Fecha de la Orden

En el campo **Referencia de Orden de Socio del Negocio**, se puede ingresar la referencia de orden del socio del negocio para esta transacción específica. Frecuentemente los números de orden de compras se dan para ser impresas en las facturas como una referencia más fácil. Un número estándar puede ser definido en la ventana **Socio del Negocio (Cliente)**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image997.png)

Imagen 6. Campo Referencia de Orden de Socio del Negocio

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image223.png)

Imagen 7. Campo Tipo de Documento

Introduzca el número del documento en el campo **No. de Documento**, el mismo no es obligatorio ya que ADempiere genera un número de secuencia automáticamente al ser guardado el registro del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image224.png)

Imagen 8. Campo Número de Documento

Seleccione en el campo **Fecha Facturación**, la fecha que posee el documento por pagar en físico.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image225.png)

Imagen 9. Campo Fecha Facturación

Seleccione en el campo **Fecha Contable**, la fecha en la cual se esta realizando el documento por pagar en ADempiere.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image226.png)

Imagen 10. Campo Fecha Contable

Seleccione el socio del negocio proveedor en el campo **Socio del Negocio**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image227.png)

Imagen 11. Campo Socio del Negocio

Podrá visualizar en el campo **Dirección del Socio del Negocio**, la dirección de localización del socio del negocio proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image228.png)

Imagen 12. Campo Dirección del Socio del Negocio

De igual manera, puede visualizar en el campo **Usuario**, el usuario en ADempiere del socio del negocio seleccionado anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image229.png)

Imagen 13. Campo Usuario

Seleccione en el campo **Lista de Precios**, la lista de precios con la cual requiere generar el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image230.png)

Imagen 14. Campo Lists de Precios

Podrá visualizar en el campo **Moneda**, la moneda definida para la lista de precios seleccionada.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image231.png)

Imagen 15. Campo Moneda

Seleccione en el campo **Agente Compañía**, el agente comercial relacionado con el documento por pagar que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image232.png)

Imagen 16. Campo Agente comercial

Seleccione el checklist **Imprimir Descuento**, para indicar que el descuento será impreso en la factura y la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image233.png)

Imagen 17. Checklist Imprimir Descuento

Seleccione la opción **Cheque**, para indicar la forma de pago que será aplicada al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image234.png)

Imagen 18. Opción Cheque

Seleccione la opción **Crear Desde Factura**, para crear el documento por pagar desde una una orden, autorización de devolución de material (ADM), factura o recepción en una factura.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image235.png)

Imagen 19. Opción Crear Desde Factura

Seleccione la opción **Generar Recibos desde Facturas**, para crear y procesar el recibo de la entrega desde la factura.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image236.png)

Imagen 20. Opción Generar Recibos desde Facturas

El checklist **Documento Fiscal**, indica que el registro de documento por pagar es considerado un documento fiscal y se utiliza para las facturas declaradas.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image237.png)

Imagen 21. Checklist Documento Fiscal

Introduzca en el campo **Control No**, el número de control fiscal establecido para el documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image238.png)

Imagen 22. Campo Control No.

Introduzca en el campo **Código Sunagro**, el Codigo de Superintendencia Nacional de Gestión Agroalimentaria establecido para el documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image239.png)

Imagen 23. Campo Código Sunagro

Seleccione en el campo **Lista**, la lista correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image240.png)

Imagen 24. Campo Lista

Seleccione en el campo **Región de Ventas**, la región de ventas correspondiente al área de cobertura de ventas específica.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image241.png)

Imagen 25. Campo Región de Ventas

Seleccione en el campo **Factura Afectada**, la factura afectada para ser asignada automáticamente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image242.png)

Imagen 26. Campo Factura Afectada

Seleccione el checklist **No Aplica Retención de I.V.A**, para indicar que los documentos o socios de negocio marcados con este checklist no serán procesados al momento de realizar la retención de I.V.A.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image243.png)

Imagen 27. Checklist No Aplica Retención de IVA

Seleccione en el campo **Centro de Costos**, el centro de costos definido para el registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image244.png)

Imagen 28. Campo Centro de Costos

Seleccione en el campo **Concepto de Retención de ISLR**, la retención de I.S.L.R. aplicada al socio de negocio proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image245.png)

Imagen 29. Campo Concepto de Retención de ISLR

Seleccione en el campo **Actividad**, la actividad o tarea que es ejecutada en el curso de un negocio para ser usada en el costeo de la misma.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image246.png)

Imagen 30. Campo Actividad

Seleccione en el campo **Retención de Terceros**, la retención correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image247.png)

Imagen 31. Campo Retención de Terceros

Seleccione el icono **Guardar** de la barra de herramientas de ADempiere, para guardar los cambios realizados.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image248.png)

Imagen 32. Guardar Cambios

### Línea de la Factura

Seleccione la pestaña **Línea de Factura** y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image249.png)

Imagen 33. Línea de Factura

Podrá visualizar en el campo **Factura**, el número de registro del documento por pagar al que pertenece la línea que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image250.png)

Imagen 34. Campo Factura

Si el registro de documento por pagar es realizado desde una orden de compra, podrá visualizar en el campo **Línea Orden de Compra**, la línea de la orden de compra asociada al mismo.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image251.png)

Imagen 35. Campo Línea Orden de Compra

De igual manera, podrá visualizar en el campo **No. Línea**, el número de línea correspondiente al registro en el cual se encuentra ubicado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image252.png)

Imagen 36. Campo No. Línea

Si el registro de documento por pagar es realizado desde un recibo de entrega, podrá visualizar en el campo **Línea Entrega Recibo**, la línea de la entrega asociada al mismo.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image253.png)

Imagen 37. Campo Línea Entrega Recibo

Seleccione en el campo **Producto**, el producto o servicio comprado por el cual se encuentra realizando el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image254.png)

Imagen 38. Campo Producto

Seleccione en el campo **Cargo**, el cargo por el cual se encuentra realizando el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image255.png)

Imagen 39. Campo Cargo

Introduzca en el campo **Descripción**, una breve descripción referente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image256.png)

Imagen 40. Campo Descripción

Seleccione el checklist **Relacionado Activo**, para indicar que el registro se encuentra relacionado con un activo fijo.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image257.png)

Imagen 41. Checklist Relacionado Activo

Note

Al tildar el checklist **Relacionado Activo**, se habilitan los campos **Capital vs Gastos** y **Activo Fijo**.

Seleccione en el campo **Capital vs Gasto**, si el registro que se encuentra realizando es por capital o gasto.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image258.png)

Imagen 42. Campo Capital o Gasto

Seleccione en el campo **Activo Fijo**, el activo fijo involucrado en el registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image259.png)

Imagen 43. Campo Activo Fijo

Seleccione en el campo **Cantidad**, la cantidad comprada del producto seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image260.png)

Imagen 44. Campo Cantidad

Seleccione en el campo **UM**, la unidad de medida del producto seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image261.png)

Imagen 45. Campo UM

Podrá visualizar en el campo **Cantidad Facturada**, la cantidad factura del producto seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image262.png)

Imagen 46. Campo Cantidad Facturada

Introduzca en el campo **Precio**, el precio real del producto.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image263.png)

Imagen 47. Campo Precio

Note

El precio ingreso es convertido al precio real basado en la conversión de la unidad de medida seleccionada en el campo **UM**.

Podrá visualizar en el campo **Precio Actual**, el precio unitario del producto.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image264.png)

Imagen 48. Campo Precio

Note

El precio actual indica el precio para un producto en la moneda fuente.

Introduzca en el campo **Precio de Lista**, el precio oficial del producto.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image265.png)

Imagen 49. Campo Precio de Lista

Note

El precio actual indica el precio oficial para un producto en la moneda fuente.

Seleccione en el campo **Impuesto**, el impuesto a aplicar al registro o línea de registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image266.png)

Imagen 50. Campo Impuesto

Podrá visualizar en el campo **Total del Impuesto**, el total del impuesto a aplicar al registro o línea de registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image267.png)

Imagen 51. Campo Total del Impuesto

Seleccione en el campo **Factura Afectada**, la factura afectada para ser asignada automáticamente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image268.png)

Imagen 52. Campo Factura Afectada

Seleccione en el campo **Actividad**, la actividad o tarea que es ejecutada en el curso de un negocio para ser usada en el costeo de la misma.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image269.png)

Imagen 53. Campo Actividad

Seleccione en el campo **Centro de Costo**, el centro de costos definido para el registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image270.png)

Imagen 54. Campo Centro de Costo

Seleccione la opción **Crear Costo de Entrega a partir de Recibos**, para crear el costo de la entrega a partir de los recibos.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image271.png)

Imagen 55. Opción Crear Costo de Entrega a partir de Recibos

Podra visualizar en el campo **Neto de Línea**, el total neto de la línea basado en la cantidad y el precio actual.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image272.png)

Imagen 56. Campo Neto de Línea

Note

El total neto de la línea se obtiene de la operación (Cantidad \* Precio Actual) sin fletes ni cargos. Cualquier cargo adicional o flete no es incluido.

De igual manera, podrá visualizar en el campo **Total de la Línea**, la cantidad total de la línea con los impuestos incluidos

![Campo](/assets/img/docs/purchase-management/pum-purchase-image273.png)

Imagen 57. Campo Total de la Línea

Note

El total de la línea se obtiene de la operación (Neto de Línea + Total del Impuesto).

Guarde el registro de los campos seleccionando el icono **Guardar Cambios** ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image274.png)

Imagen 58. Guardar Cambios

Regrese a la ventana principal **Factura**, ubicando la parte inferior del documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image275.png)

Imagen 59. Opción Completar

Podrá visualizar en el campo **Total de Líneas**, la sumatoria total de todos los netos de línea sin impuestos ni cargos, que contiene el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image276.png)

Imagen 60. Campo Total de Líneas

De igual manera, podrá visualizar en el campo **Gran Total**, la sumatoria de todos los montos reflejados en el campo **Total de la Línea**, de todas las líneas que contiene el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image277.png)

Imagen 61. Campo Gran Total

Note

El gran total identifica el total incluyendo impuestos y totales de fletes en la moneda del documento.

Seleccione la opción **Completar**, ubicada en la parte inferior derecha del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image278.png)

Imagen 62. Opción Completar

Seleccione la acción **Completar** y la opción **OK** para completar el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image279.png)

Imagen 63. Acción Completar Documento

## Crear Factura desde Orden de Compra

Ubique en el menú de ADempiere la carpeta **Gestión de Compras**, luego seleccione la ventana **Documentos por Pagar**, adjunto imagen para referencia.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image280.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Documentos por Pagar**, con todos los registros de documentos por pagar que se encuentran en ADempiere.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image281.png)

Imagen 2. Ventana Documentos por Pagar

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere para crear un nuevo registro.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image282.png)

Imagen 3. Icono Registro Nuevo de la Ventana Documentos por Pagar

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image283.png)

Imagen 4. Campo Organización de la Ventana Documentos por Pagar desde Orden de Compra

Introduzca en el campo **No. del Documento**, el número de documento correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image284.png)

Imagen 5. Campo No del Documento de la Ventana Documentos por Pagar desde Orden de Compra

Note

Si no es ingresado ningún valor en este campo, ADempiere tomará el número de secuencia establecido para para el tipo de documento seleccionado.

Introduzca en el campo **Descripción**, una breve descripción con respecto al documento que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image285.png)

Imagen 6. Campo Descripción de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image286.png)

Imagen 7. Campo Tipo de Documento Destino de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione en el campo **Fecha de Facturación**, la fecha que posee el documento por pagar en físico.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image287.png)

Imagen 8. Campo Fecha de Facturación de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione en el campo **Fecha Contable**, la fecha en la cual se encuentra realizando el registro del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image288.png)

Imagen 9. Campo Fecha Contable de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione en el campo **Socio del Negocio**, el socio del negocio proveedor por el cual es realizado el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image289.png)

Imagen 10. Campo Socio del Negocio de la Ventana Documentos por Pagar desde Orden de Compra

Podrá visualizar en el campo **Dirección del Socio del Negocio**, la dirección de localización del socio del negocio seleccionado anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image290.png)

Imagen 11. Campo Dirección del Socio del Negocio de la Ventana Documentos por Pagar desde Orden de Compra

De igual manera, podrá visualizar en el campo **Usuario**, el usuario dentro de ADempiere del socio del negocio seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image291.png)

Imagen 12. Campo Usuario de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione en el campo **Lista de Precios**, la lista de precios utilizada para el documento por pagar que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image292.png)

Imagen 13. Campo Lista de Precios de la Ventana Documentos por Pagar desde Orden de Compra

Podrá visualizar en el campo **Moneda**, la moneda definida para la lista de precios seleccionada anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image293.png)

Imagen 14. Campo Moneda de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione en el campo **Agente Compañía**, el agente comercial relacionado con el documento por pagar que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image294.png)

Imagen 15. Campo Agente Compañía de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione el checklist **Imprimir Descuento**, para imprimir el descuento en la factura y la orden asociada al documento por pagar que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image295.png)

Imagen 16. Checklist Imprimir Descuento de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image296.png)

Imagen 17. Icono Guardar Cambios de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione la opción **Crear Desde Factura**, para crear el documento por pagar desde una orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image297.png)

Imagen 18. Opción Crear Desde Factura de la Ventana Documentos por Pagar desde Orden de Compra

Podrá visualizar la ventana **Crear Desde una Orden/ADM/Factura/Recepción en una Factura**, con el campo **Crear Desde Tipo** y la opción **Conenzar Búsqueda**, para filtrar de búsqueda según lo que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image298.png)

Imagen 19. Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

Seleccione en el campo **Crear Desde Tipo**, la opción **Orden**, para crear el documento por pagar desde una orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image299.png)

Imagen 20. Campo Crear Desde Tipo de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

Al seleccionar la opción **Orden**, se habilita el campo **Orden de Venta**, para seleccionar la orden de compra desde la cual se requiere crear el documento por pagar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image300.png)

Imagen 21. Campo Orden de Venta de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

Seleccione la opción **Comenzar Búsqueda**, para realizar la búsqueda de los registros en ADempiere según lo seleccionado anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image301.png)

Imagen 22. Opción Comenzar Búsqueda de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

Seleccione el registro de la orden de compra desde la cual requiere crear el documento por pagar que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image302.png)

Imagen 23. Selección de Orden de Compra en la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

Seleccione la opción **OK**, para cargar a la ventana **Documento por Pagar**, la información de la orden de compra seleccionada.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image303.png)

Imagen 24. Opción OK de la Ventana Crear Desde una Orden ADM Factura Recepción en una Factura

El proceso regresa a la ventana **Documentos por Pagar**, donde se debe seleccionar el icono **Refrescar**, ubicado en la barra de herramientas de ADempiere, para actualizar los campos en dicha ventana y sean visualizados los datos cargados desde el proceso anteriormente explicado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image304.png)

Imagen 25. Icono Refrecar de la Ventana Documentos por Pagar desde Orden de Compra

Podrá visualizar los datos de la orden de compra cargados a la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image305.png)

Imagen 26. Datos de la Orden de Compra en la Ventana Documentos por Pagar desde Orden de Compra

Sin embargo, puede seleccionar la pestaña **Línea de Factura**, para visualizar los productos que contiene la orden de compra seleccionada.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image306.png)

Imagen 27. Pestaña Línea de Factura de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione la pestaña principal **Factura**, para ubicar la opción **Completar**, en la parte inferior derecha del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image307.png)

Imagen 28. Pestaña Principal Factura de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione la opción **Completar**, para completar el registro realizado en la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image308.png)

Imagen 29. Opción Completar de la Ventana Documentos por Pagar desde Orden de Compra

Seleccione la acción **Completar** y la opción **OK**, para culminar el procedimiento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image309.png)

Imagen 30. Acción Completar y Opción OK de la Ventana Documentos por Pagar desde Orden de Compra

## Conversión de Factura Automática

Cree una orden de compra de forma habitual con divisas, de no conocer el procedimiento puede consultar el material Registro de Orden de Compra Directa, para este ejemplo hemos realizado una orden con moneda USD.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image310.png)

Imagen 1. Orden de Compra

Cree un documento por pagar de manera habitual, de no conocer el procedimiento puede consultar el material Crear Factura desde Orden de Compra, para este ejemplo realizaremos una factura en BS para convertirla.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image311.png)

Imagen 2. Factura

Tome como salvedad los siguientes campos importantes para el proceso:

Seleccione la opción **Crear Desde Orden/Recibo**, para crear el documento por pagar desde una orden de compra.

Seleccione la orden creada inicialmente, al ejecutar el proceso verá que son cambiados automáticamente los campos **Lista de Precio**, **Moneda** y **Tipo de Conversión**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image312.png)

Imagen 3. Lista de Precio

Proceda a cambiar de manera manual la **Lista de Precio** y el **Tipo de Conversión** de ser necesario, recuerde, que el **Tipo de Conversión** determina la tasa de cambio con la que se realizará la conversión del documento.

Ejecute el proceso **Recalcular Tasa Para Lineas de la Factura** que realiza la conversión del documento por pagar, ubicado en la barra de herramientas.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image313.png)

Imagen 4. Proceso Convertir Documento

La ejecución del proceso dejará como resultado las lineas del documento convertidas, los impuestos y el gran total, evitando así tener que realizar la conversión de forma manual.

Sabiendo que el ejemplo es de una Orden de Compra de 500 USD con un 16% de IVA quedando un total de 580 USD, al crear la factura y convertir con una tasa de 5,771 el resultado convertido debe ser 3.347,18.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image314.png)

Imagen 5. Factura Convertida
