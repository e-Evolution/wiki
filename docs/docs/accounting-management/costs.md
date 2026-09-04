---
title: Gestión de Costos
category: Documentation
star: 9
article: false
---

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de gestionar los costos en la versión 3.9.2 de ADempiere en la localización Venezuela.

- Costos de Material
- Costos Adicionales
  - Documentos por Pagar
  - Consultar Costos Adicionales
- Reportes de Costos
  - Consulta de Costo del Producto
  - Informe de Costos del Producto
  - Reporte de Costo del Producto
  - Valoración de Inventario a Fecha Efectiva
  - Valoración de Inventario
  - Detalle de Costos del Producto
  - Detalle de la Transacción del Costo

## Costos de Material

Para explicar el proceso de registro automático de costo de un producto y que el usuario pueda entender el mismo, es ubicado un producto sin relación con alguna transacción en ADempiere. Para este caso, es ubicado el producto **Estandar**, con código **DOIS-000001**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image251.png)

Imagen 1. Ventana Producto

Seleccione la pestaña **Costo** para verificar si el mismo posee algún registro, es decir, si ha sido utilizado en alguna transacción en ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image252.png)

Imagen 2. Pestaña Costo

Luego se procede a realizar y completar una **Orden de Compra**, utilizando el producto anteriormente mostrado.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image253.png)

Imagen 3. Ventana Orden de Compra

Podrá visualizar en la pestaña **Línea Orden de Compra**, el producto, la cantidad y el precio ingresado.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image254.png)

Imagen 4. Pestaña Línea de la Orden de Compra

Para finalizar el proceso es realizada una **Recepción**, la misma es creada desde la orden de compra realizada anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image255.png)

Imagen 5. Recepción de Producto

En la pestaña **Línea del Recibo**, puede visualizar el producto y la cantidad recepcionada.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image256.png)

Imagen 6. Pestaña Línea del Recibo

Puede consultar el resultado del proceso realizado anteriormente, ubicando el producto **Estandar**, con código **DOIS-000001** utilizado en el ejemplo expuesto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image257.png)

Imagen 7. Ventana Producto

Como resultado del proceso realizado, se tienen dos (2) registros de tipos de costo en la pestaña **Costos** de la ventana **Producto**:

![Campo](/assets/img/docs/accounting-management/acm-accounting-image258.png)

Imagen 8. Tipo de Costo Estándar

![Campo](/assets/img/docs/accounting-management/acm-accounting-image259.png)

Imagen 9. Tipo de Costo Facturación Promedio

## Costos Adicionales

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar costos adicionales a los productos en la versión 3.9.2 de ADempiere en la localización Venezuela.

Las empresas realizan un estudio sobre el costo de producción de un producto determinado con la finalidad de establecer el precio de venta en base a los resultados obtenidos. Con esto se quiere decir que según el método empleado por la empresa, se toma en cuenta el costo de la materia prima, el costo de la producción, impresión, empaque, flete y cualquier otro servicio o producto necesario para lograr un producto final, para obtener el precio de venta del producto acorde a los costos que implica la producción del mismo.

El proceso de costos adicionales de un producto, es realizado desde la ventana **Documentos por Pagar**. Al generar una factura por un servicio o producto aplicada a otro producto, se incrementa el costo del mismo para la venta según las tipologías empleadas por la empresa.

Un producto puede tener costos adicionales por flete, servicios de impresión, entre otros casos que son calculados según la tipología empleada por la empresa. Para ejemplificar la definición anterior, se explica el costo adicional que puede tener un producto por flete.

## Documentos por Pagar

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image260.png)

Imagen 1. Menú de ADempiere

Realice el procedimiento regular para generar una factura de cuentas por pagar, definido en el material Registro de Documento por Pagar de la versión 3.9.2 de ADempiere en la localización Venezuela.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image261.png)

Imagen 2. Factura por Pagar

Note

Es necesario que el documento por pagar no se encuentre en estado completo, de esta manera se pueden aplicar los costos adicionales a los productos.

Seleccione la pestaña **Costos Adicionales** y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image262.png)

Imagen 3. Pestaña Costos Adicionales

Podrá apreciar en el campo **Distribución de Costo**, que por defecto se encuentra seleccionada la opción **Cantidad**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image263.png)

Imagen 4. Campo Distribución de Costo

Note

Este campo permite establecer con que tipología sera realizada la distribución de costos. ADempiere utiliza cinco (5) tipologías para aplicar la distribución de costo a un producto.

Cantidad.

Costos.

Línea.

Peso.

Volumen.

Seleccione en el campo **Elemento de Costo**, el costo a aplicar al producto. Para ejemplificar el registro es utilizada la opción **Costos de Traslado**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image264.png)

Imagen 5. Campo Elemento de Costo

Seleccione en el campo **Entrega/Recibo**, el documento de recepción del producto al cual será aplicado el costo adicional.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image265.png)

Imagen 6. Campo Entrega/Recibo

Note

Este campo define el producto recepcionado al cual se le aplicará la distribución de costo según la tipología seleccionada anteriormente.

Si el documento de recepción posee solo una línea de entrega/recibo, no es necesario seleccionar la línea en el campo **Línea entrega/recibo**.

Si el documento de recepción posee más de una línea de entrega/recibo, es necesario seleccionar en el campo **Línea entrega/recibo**, una línea por registro de la pestaña **Costos Adicionales**.

Seleccione la opción **Distribución de Costos**, para aplicar el costo adicional al producto de la recepción.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image266.png)

Imagen 7. Distribución de Costos

Note

Según la tipología seleccionada anteriormente, ADempiere realiza la distribución de costos de la siguiente manera:

Cantidad, realiza la distribución dividiendo el costo de la factura entre la cantidad del producto recepcionado.

Costos, realiza la distribución porcentualmente al costo del producto.

Línea, realiza la distribución dividiendo el costo de la factura entre el número de líneas que tenga la factura.

Peso, realiza la distribución porcentualmente al peso del producto.

Volumen, realiza la distribución porcentualmente al volumen del producto.

Podrá visualizar la ventana **Distribución de Costos**, donde debe seleccionar la opción **OK** para aplicar el costo adicional al producto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image267.png)

Imagen 8. Ventana Distribución de Costos

Regrese a la ventana principal **Factura** y seleccione la opción **Completar**, ubicada en la parte inferior derecha del documento.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image268.png)

Imagen 9. Opción Completar

Seleccione la acción **Completar** y la opción **OK**, para completar el documento por pagar.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image269.png)

Imagen 10. Opción Completar

## Consultar Costos Adicionales

Ubique en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Detalle Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image270.png)

Imagen 11. Menú de ADempiere

Podrá visualizar el reporte **Detalle Costo del Producto** de la siguiente manera.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image271.png)

Imagen 12. Pestaña Costo

## Reportes de Costos

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de gestionar los reportes de costos en la versión 3.9.2 de ADempiere en la localización Venezuela.

- Consulta de Costo del Producto
- Informe de Costos del Producto
- Reporte de Costo del Producto
- Valoración de Inventario a Fecha Efectiva
- Valoración de Inventario
- Detalle de Costos del Producto
- Detalle de la Transacción del Costo

## Consulta de Costo del Producto

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione la ventana **Costos del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image272.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Encontrar Registro: Selección de Producto**, con campos que permiten filtrar la búsqueda del producto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image273.png)

Imagen 2. Ventana Encontrar Registro Selección de Producto

Introduzca en el campo **Código**, el código del producto por el cual requiere filtrar la búsqueda del producto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image274.png)

Imagen 3. Campo Código de la Ventana Encontrar Registro Selección de Producto

Introduzca en el campo **Nombre**, el nombre del producto por el cual requiere filtrar la búsqueda del producto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image275.png)

Imagen 4. Campo Nombre de la Ventana Encontrar Registro Selección de Producto

Introduzca en el campo **Descripción**, la descripción del producto por el cual requiere filtrar la búsqueda del producto.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image276.png)

Imagen 5. Campo Descripción de la Ventana Encontrar Registro Selección de Producto

Luego de ingresar lo requerido en los campos por los cuales desea filtrar la búsqueda del producto, seleccione la opción **OK**, para realizar la búsqueda.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image277.png)

Imagen 6. Opción OK de la Ventana Encontrar Registro Selección de Producto

Podrá visualizar la ventana **Costos del Producto**, con el registro buscado del producto y su información principal.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image278.png)

Imagen 7. Ventana Costos del Producto

Seleccione la pestaña **Costo del Producto**, para visualizar los registros de costos del producto según el tipo de costo configurado en ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image279.png)

Imagen 8. Pestaña Costo del Producto de la Ventana Costos del Producto

Seleccione la pestaña **Detalle de Costo**, para visualizar de manera detallada los registros del costo del producto según el tipo de costo configurado en ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image280.png)

Imagen 9. Pestaña Detalle de Costo de la Ventana Costos del Producto

## Informe de Costos del Producto

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Informe de Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image281.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana del reporte para generar el **Informe de Costo del Producto**, con diferentes campos que le permiten al usuario filtrar la búsqueda de información para generar el informe de acuerdo a lo requerido por el mismo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image282.png)

Imagen 2. Ventana del Reporte para Generar el Informe de Costo del Producto

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image283.png)

Imagen 3. Campo Esquema Contable de la Ventana del Reporte para Generar el Informe de Costo del Producto

Seleccione en el campo **Categoría del Producto**, la categoría del producto por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image284.png)

Imagen 4. Campo Categoría del Producto de la Ventana del Reporte para Generar el Informe de Costo del Producto

Introduzca en el campo **Código**, el código por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image285.png)

Imagen 5. Campo Código de la Ventana del Reporte para Generar el Informe de Costo del Producto

Seleccione la opción **OK**, para generar el informe en base a lo seleccionado en los campos de la ventana **Informe de Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image286.png)

Imagen 6. Opción OK de la Ventana del Reporte para Generar el Informe de Costo del Producto

## Reporte de Costo del Producto

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione la ventana **Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image287.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana del reporte **Costo del Producto**, con diferentes campos que le permiten al usuario filtrar la búsqueda de la información y generar el reporte en base a lo seleccionado en dichos campos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image288.png)

Imagen 2. Ventana del Reporte Costo del Producto

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image289.png)

Imagen 3. Campo Esquema Contable de la Ventana del Reporte Costo del Producto

Seleccione en el campo **Tipo de Costo**, el tipo de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image290.png)

Imagen 4. Campo Tipo de Costo de la Ventana del Reporte Costo del Producto

Seleccione en el campo **Categoría del Producto**, la categoría el producto por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image291.png)

Imagen 5. Campo Categoría del Producto de la Ventana del Reporte Costo del Producto

Seleccione en el campo **Producto**, el producto por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image292.png)

Imagen 6. Campo Producto de la Ventana del Reporte Costo del Producto

Introduzca en el campo **Código**, el código por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image293.png)

Imagen 7. Campo Código de la Ventana del Reporte Costo del Producto

Seleccione en el campo **Elemento de Costo**, el elemento de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image294.png)

Imagen 8. Campo Elemento de Costo de la Ventana del Reporte Costo del Producto

Seleccione la opción **OK**, para generar el reporte de costo del producto en base a lo seleccionado en los campos anteriormente explicados.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image295.png)

Imagen 9. Opción OK de la Ventana del Reporte Costo del Producto

## Valoración de Inventario a Fecha Efectiva

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Valoración de Inventario a Fecha Efectiva**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image296.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Valoración de Inventario a Fecha Efectiva**, con diferentes campos que le permiten al usuario filtrar la información en base a lo seleccionado en los mismos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image297.png)

Imagen 2. Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Fecha de Valor**, la fecha de valor por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image298.png)

Imagen 3. Campo Fecha de Valor de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image299.png)

Imagen 4. Campo Esquema Contable de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Almacén**, el almacén por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image300.png)

Imagen 5. Campo Almacén de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Producto**, el producto por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image301.png)

Imagen 6. Campo Producto de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Categoría del Producto**, la catedoría del producto por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image302.png)

Imagen 7. Campo Categoría del Producto de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Tipo de Costo**, el tipo de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image303.png)

Imagen 8. Campo Tipo de Costo de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Elemento de Costo**, el elemento de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image304.png)

Imagen 9. Campo Elemento de Costo de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione en el campo **Versión de Lista de Precios**, la versión de lista de precios por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image305.png)

Imagen 10. Campo Versión de Lista de Precios de la Ventana Valoración de Inventario a Fecha Efectiva

Seleccione la opción **OK**, para generar el reporte **Valoración de Inventario a Fecha Efectiva** en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image306.png)

Imagen 11. Opción OK de la Ventana Valoración de Inventario a Fecha Efectiva

Podrá visualizar de la siguiente manera el reporte **Valoración de Inventario a Fecha Efectiva**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image307.png)

Imagen 12. Reporte Valoración de Inventario a Fecha Efectiva

## Valoración de Inventario

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Valoración de Inventario**

![Campo](/assets/img/docs/accounting-management/acm-accounting-image308.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Valoración de la Transacción**, con diferentes campos que permiten filtrar la búsqueda de la información para generar el reporte de acuerdo a lo requerido.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image309.png)

Imagen 2. Ventana Valoración de la Transacción

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image310.png)

Imagen 3. Campo Esquema Contable de la Ventana Valoración de la Transacción

Seleccione en el campo **Almacén**, el almacén por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image311.png)

Imagen 4. Campo Almacén de la Ventana Valoración de la Transacción

Note

Para simular el proceso y generar el reporte de valoración de inventario, se deja el campo **Almacén** en blanco, indicando de esta manera que la búsqueda de la información se debe realizar en todos los almacenes registrados en ADempiere.

Seleccione en el campo **Fecha de Movimiento**, el rango de fechas en el que se realizó el movimiento del producto y por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image312.png)

Imagen 5. Campo Fecha de Movimiento de la Ventana Valoración de la Transacción

Seleccione en el campo **Producto**, el producto por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image313.png)

Imagen 6. Campo Producto de la Ventana Valoración de la Transacción

Note

Para simular el proceso y generar el reporte de valoración de inventario, se selecciona como ejemplo el producto **Cucharilla**.

Seleccione en el campo **Categoría del Producto**, la categoría a la que pertenece el producto seleccionado y por la cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image314.png)

Imagen 7. Campo Categoría del Producto de la Ventana Valoración de la Transacción

Seleccione en el campo **Socio del Negocio**, el socio del negocio por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image315.png)

Imagen 8. Campo Socio del Negocio de la Ventana Valoración de la Transacción

Introduzca en el campo **Código**, el código por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image316.png)

Imagen 9. Campo Código de la Ventana Valoración de la Transacción

Seleccione en el campo **Tipo de Costo**, el tipo de costo por el cual el usuario requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image317.png)

Imagen 10. Campo Tipo de Costo de la Ventana Valoración de la Transacción

Seleccione en el campo **Elemento de Costo**, el elemento de costo por el cual requiere filtrar la información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image318.png)

Imagen 11. Campo Elemento de Costo de la Ventana Valoración de la Transacción

Seleccione la opción **OK** para generar el reporte de valoración de la transacción.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image319.png)

Imagen 12. Opción OK Ventana Valoración de la Transacción

Luego de culminado el proceso, podrá visualizar el reporte de la siguiente manera.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image320.png)

Imagen 13. Reporte Valoración de la Transacción

## Detalle de Costos del Producto

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Detalle Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image321.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Detalle Costo del Producto**, con diferentes campos que le permiten al usuario filtrar la información según lo requerido por el mismo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image322.png)

Imagen 2. Ventana Detalle Costo del Producto

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image323.png)

Imagen 3. Campo Esquema Contable de la Ventana Detalle Costo del Producto

Seleccione en el campo **Categoría del Producto**, la categoría del producto por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image324.png)

Imagen 4. Campo Categoría del Producto de la Ventana Detalle Costo del Producto

Seleccione en el campo **Producto**, el producto por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image325.png)

Imagen 5. Campo Producto de la Ventana Detalle Costo del Producto

Introduzca en el campo **Código**, el código por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image326.png)

Imagen 6. Campo Código de la Ventana Detalle Costo del Producto

Seleccione la opción **OK**, para generar el reporte **Detalle Costo del Producto**, en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image327.png)

Imagen 7. Opción OK de la Ventana Detalle Costo del Producto

Podrá visualizar de la siguiente manera el reporte **Detalle Costo del Producto**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image328.png)

Imagen 8. Reporte Detalle Costo del Producto

## Detalle de la Transacción del Costo

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Gestión de Costos**, por último seleccione el reporte **Detalle de la Transacción de Costos**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image329.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Detalle de la Transacción de Costos**, con diferentes campos que le permiten al usuario filtrar la búsqueda para generar el reporte **Detalle de la Transacción de Costos** según lo requerido.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image330.png)

Imagen 2. Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Organización**, la organización por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image331.png)

Imagen 3. Campo Organización de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Esquema Contable**, el esquema contable por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image332.png)

Imagen 4. Campo Esquema Contable de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Tipo de Costo**, el tipo de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image333.png)

Imagen 5. Campo Tipo de Costo de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Elemento de Costo**, el elemento de costo por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image334.png)

Imagen 6. Campo Elemento de Costo de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Almacén**, el almacén por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image335.png)

Imagen 7. Campo Almacén de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Producto**, el producto por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image336.png)

Imagen 8. Campo Producto de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Fecha de Movimiento**, la fecha de movimiento por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image337.png)

Imagen 9. Campo Fecha de Movimiento de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Fecha Contable**, la fecha contable por la cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image996.png)

Imagen 10. Campo Fecha Contable de la Ventana Detalle de la Transacción de Costos

Seleccione en el campo **Tipo de Movimiento**, el tipo de movimiento por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image338.png)

Imagen 11. Campo Tipo de Movimiento de la Ventana Detalle de la Transacción de Costos

Introduzca en el campo **No. del Documento**, el número del documento por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image339.png)

Imagen 12. Campo No. del Documento de la Ventana Detalle de la Transacción de Costos

Introduzca en el campo **No. Lote**, el número de lote por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image340.png)

Imagen 13. Campo No. Lote de la Ventana Detalle de la Transacción de Costos

Introduzca en el campo **No. de Serie**, el número de serie por el cual requiere filtrar la búsqueda de información.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image341.png)

Imagen 14. Campo No de Serie de la Ventana Detalle de la Transacción de Costos

Seleccione la opción **OK**, para generar el reporte **Detalle de la Transacción de Costos**, en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image342.png)

Imagen 15. Opción OK de la Ventana Detalle de la Transacción de Costos

Podrá visualizar de la siguiente manera el reporte **Detalle de la Transacción de Costos**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image343.png)

Imagen 16. Reporte Detalle de la Transacción de Costos
