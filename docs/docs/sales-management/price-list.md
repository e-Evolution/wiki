---
title: Lista de Precios
category: Documentation
star: 9
article: false
---

Esta documentación está destinada a definir las listas de precios en ADempiere para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimientos descritos aquí recuerde que de eso dependerá el buen uso del ERP.

- Configuración del Esquema de Lista de Precios
- Configuración de Lista de Precios Base
  - Crear Precios desde Crear Lista de Precios
  - Crear Precios desde Pestaña Precio de Producto
- Crear Lista de Precios desde otra Lista de Precios
- Crear Lista de Precios desde Última OC Procesada
- Crear Entradas de Productos en Lista de Precios

## Configuración del Esquema de Lista de Precios

El esquema de lista de precios se puede configurar por tipo de conversión en diferentes monedas, para aplicar a los productos diversos márgenes de ganacias o descuentos, según el requerimiento de la organización para la cual se configura dicho esquema.

A continuación, se explica el procedimiento a seguir para configurar un esquema de lista de precios.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la carpeta **Reglas de Gestión de Materiales**, por último seleccione la ventana **Esquema de Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image313.png)

Imagen 1. Menú de ADempiere

Podrá viualizar la ventana **Esquema de Lista de Precios**, con los registros del esquema de lista de precios definidos para la organización.

![Campo](/assets/img/docs/sales-management/sam-sales-image314.png)

Imagen 2. Ventana Esquema de Lista de Precios

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/sales-management/sam-sales-image315.png)

Imagen 3. Icono Registro Nuevo

Seleccione en el campo \*\*Organización la organización para la cual se encuentra realizando el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image316.png)

Imagen 4. Campo Organización

Introduzca en el campo **Nombre**, el nombre del esquema de lista de precios que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image317.png)

Imagen 5. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image318.png)

Imagen 6. Campo Descripción

Seleccione en el campo **Válido Desde**, la fecha de inicio de validez del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image319.png)

Imagen 7. Campo Válido Desde

Seleccione en el campo **Tipo de Descuento**, el tipo de cálculo del descuento comercial.

![Campo](/assets/img/docs/sales-management/sam-sales-image320.png)

Imagen 8. Campo Tipo de Descuento

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image321.png)

Imagen 9. Icono Guardar Cambios

Seleccione la pestaña **Línea de Esquema** y proceda al llenado de los campo correspondientes.

![Campo](/assets/img/docs/sales-management/sam-sales-image322.png)

Imagen 10. Pestaña Línea de Esquema

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión con el cual se va a trabajar. Para este ejemplo el tipo de conversión utilizado es **BCV**.

![Campo](/assets/img/docs/sales-management/sam-sales-image323.png)

Imagen 11. Campo Tipo de Conversión

Note

El tipo de conversión seleccionado en el esquema de lista de precios, debe ser el mismo de la lista de precios.

Seleccione en el campo **Fecha de Conversión**, la fecha de conversión de la moneda.

Esta fecha indica el inicio del periodo de validez del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image324.png)

Imagen 12. Campo Fecha de Conversión

Seleccione en el campo **Socio del Negocio**, el socio del negocio correspondiente al registro que se encuentra realizando.

Al seleccionar un socio del negocio, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicho socio al momento de seleccionar el mismo en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image325.png)

Imagen 13. Campo Socio del Negocio

Seleccione en el campo **Producto**, el producto correspondiente al registro que se encuentra realizando.

Al seleccionar un producto, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicho producto al momento de seleccionar el mismo en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image326.png)

Imagen 14. Campo Producto

Seleccione en el campo **Categoría del Producto**, la categoría de producto correspondiente al registro que se encuentra realizando.

Al seleccionar una categoría de producto, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicha categoría al momento de seleccionar la misma en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image327.png)

Imagen 15. Campo Categoría del Producto

Note

Al configurar el esquema de lista de precios por categoría de producto y procesar la lista de precios llamando dicho esquema, ADempiere no tomará en cuenta aquellos productos que se encuentren en una categoría diferente a la que fue incluida en el esquema.

Seleccione en el campo **Grupo de Producto**, el grupo de producto correspondiente al registro que se encuentra realizando.

Al seleccionar un grupo de producto, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicho grupo al momento de seleccionar el mismo en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image328.png)

Imagen 16. Campo Grupo de Producto

Note

Al configurar el esquema de lista de precios por grupo de producto y procesar la lista de precios llamando dicho esquema, ADempiere no tomará en cuenta aquellos productos que se encuentren en un grupo diferente al que fue incluido en el esquema.

Seleccione en el campo **Clase de Producto**, la clase de producto correspondiente al registro que se encuentra realizando.

Al seleccionar una clase de producto, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicha clase al momento de seleccionar la misma en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image329.png)

Imagen 17. Campo Clase de Producto

Note

Al configurar el esquema de lista de precios por clase de producto y procesar la lista de precios llamando dicho esquema, ADempiere no tomará en cuenta aquellos productos que se encuentren en una clase diferente a la que fue incluida en el esquema.

Seleccione en el campo **Clasificación de Producto**, la clasificación de producto correspondiente al registro que se encuentra realizando.

Al seleccionar una clasificación de producto, la configuración que se realice en el presente registro, tendrá efecto solamente sobre dicha clasificación al momento de seleccionar la misma en alguna transacción.

![Campo](/assets/img/docs/sales-management/sam-sales-image330.png)

Imagen 18. Campo Clasificación de Producto

Note

Al configurar el esquema de lista de precios por clasificación de producto y procesar la lista de precios llamando dicho esquema, ADempiere no tomará en cuenta aquellos productos que se encuentren en una clasificación diferente a la que fue incluida en el esquema.

Introduzca en el campo **Línea de Producto**, la línea del producto correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image331.png)

Imagen 19. Campo Línea de Producto

Introduzca en el campo **Grupo 1**, el grupo 1 correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image332.png)

Imagen 20. Campo Grupo 1

Introduzca en el campo **Grupo 2**, el grupo 2 correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image333.png)

Imagen 21. Campo Grupo 2

El campo \*\*Base del Precio de Lista, indica el precio a usar como la base para el cálculo de una nueva lista de precios.

El presente campo contiene predeterminada la opción **Precio de Lista**.

![Campo](/assets/img/docs/sales-management/sam-sales-image334.png)

Imagen 22. Campo Base del Precio de Lista

Introduzca en el campo **Margen Mínimo sobre el precio de lista**, el margen mínimo sobre el precio de lista.

El margen mínimo sobre el precio de lista indica el margen mínimo para un producto. El margen es calculado substrayendo el precio de lista original del nuevo precio calculado. Si el campo contiene **0.00**, el margen es ignorado.

![Campo](/assets/img/docs/sales-management/sam-sales-image335.png)

Imagen 23. Campo Margen Mínimo sobre el precio de lista

Introduzca en el campo **Sobreprecio del Precio de Lista**, el sobreprecio del precio de lista.

El total de sobrecargo en el precio de lista indica el total a ser adicionado al precio antes de la multiplicación.

![Campo](/assets/img/docs/sales-management/sam-sales-image336.png)

Imagen 24. Campo Sobreprecio del Precio de Lista

Introduzca en el campo **Margen Máximo sobre el Precio de Lista**, el margen máximo sobre el precio de lista.

El margen máximo del precio de lista indica el margen máximo para un producto. El margen es calculado restando el precio de lista original del precio nuevo calculado. Si este campo contiene **0.00**, entonces es ignorado.

![Campo](/assets/img/docs/sales-management/sam-sales-image337.png)

Imagen 25. Campo Margen Máximo sobre el Precio de Lista

Introduzca en el campo **% Descuento Sobre Precio de Lista**, el porcentaje (%) de descuento sobre precio de lista.

El porcentaje de descuento sobre precio de lista, indica el porcentaje de descuento que será restado del precio base. Un monto negativo indica el porcentaje que será añadido al precio base.

![Campo](/assets/img/docs/sales-management/sam-sales-image338.png)

Imagen 26. Campo % Descuento Sobre Precio de Lista

El campo **Redondeo del Precio de Lista**, indica como el precio de lista final será redondeado.

La opción seleccionada establece la regla de redondeo para la lista de precios final.

![Campo](/assets/img/docs/sales-management/sam-sales-image339.png)

Imagen 27. Campo Redondeo del Precio de Lista

El campo **Base para Precio Estándar**, indica el precio a usar como la base para el cálculo del nuevo precio estándar.

El presente campo tiene predeterminada la opción **Precio Estándar**.

![Campo](/assets/img/docs/sales-management/sam-sales-image340.png)

Imagen 28. Campo Base para Precio Estándar

Introduzca en el campo **Margen Mínimo del Precio Estándar**, el margen mínimo del precio estándar.

El margen mínimo del precio estándar indica el margen mínimo para un producto. El margen se calcula restando el precio estándar original del precio nuevamente calculado. Si este campo contiene **0.00** entonces es ignorado.

![Campo](/assets/img/docs/sales-management/sam-sales-image341.png)

Imagen 29. Campo Margen Mínimo del Precio Estándar

Introduzca en el campo **Total de Sobreprecio al Precio Estándar**, el total de sobreprecio al precio estándar.

El total de sobreprecio del precio estándar, indica el total a ser añadido al precio antes de la multiplicación.

![Campo](/assets/img/docs/sales-management/sam-sales-image342.png)

Imagen 30. Campo Total de Sobreprecio al Precio Estándar

Introduzca en el campo **Margen Máximo del Precio Estándar**, el margen máximo del precio estándar.

El margen máximo del precio estándar indica el margen máximo para un producto. El margen se calcula restando el precio estándar original del precio nuevamente calculado. Si este campo contiene **0.00** entonces es ignorado.

![Campo](/assets/img/docs/sales-management/sam-sales-image343.png)

Imagen 31. Campo Margen Máximo del Precio Estándar

Introduzca en el campo **% Descuento Sobre Precio Estándar**, el porcentaje (%) de descuento sobre precio estándar.

El porcentaje de descuento en el precio estándar, indica el porcentaje de descuento que será restado del precio base. Un monto negativo indica el porcentaje que será añadido al precio base.

![Campo](/assets/img/docs/sales-management/sam-sales-image344.png)

Imagen 32. Campo % Descuento Sobre Precio Estándar

El campo **Redondeo del Precio Estándar**, indica como el precio estándar será redondeado.

La opción seleccionada establece la regla de redondeo para el precio calculado.

![Campo](/assets/img/docs/sales-management/sam-sales-image345.png)

Imagen 33. Campo Redondeo del Precio Estándar

El campo **Base para Precio Límite**, identifica el precio a ser usado como la base para calcular una nueva lista de precios.

El presente campo tiene predeterminada la opción **Precio Límite (OC)**

![Campo](/assets/img/docs/sales-management/sam-sales-image346.png)

Imagen 34. Campo Base para Precio Límite

Introduzca en el campo **Margen Mínimo del Precio Límite**, el margen mínimo del precio límite.

El margen mínimo del precio límite, indica el margen mínimo para un producto. El margen se calcula restando el precio límite original del nuevo precio calculado. Si este campo contiene **0.00**, entonces es ignorado.

![Campo](/assets/img/docs/sales-management/sam-sales-image347.png)

Imagen 35. Campo Margen Mínimo del Precio Límite

Introduzca en el campo **Total de Sobreprecio al Precio Límite**, el total de sobreprecio al precio límite.

El total de sobreprecio al precio límite, indica el total a ser adicionado al precio límite anterior a la multiplicación.

![Campo](/assets/img/docs/sales-management/sam-sales-image348.png)

Imagen 36. Campo Total de Sobreprecio al Precio Límite

Introduzca en el campo **Margen Máximo del Precio Límite**, el margen máximo del precio límite.

Identifica el margen máximo para un producto. El margen se calcula restando el precio límite original del nuevo precio calculado. Si este campo contiene **0.00**, entonces es ignorado

![Campo](/assets/img/docs/sales-management/sam-sales-image349.png)

Imagen 37. Campo Margen Máximo del Precio Límite

Introduzca en el campo **% Descuento Sobre Precio Límite**, el porcentaje (%) de descuento sobre precio límite.

El porcentaje de descuento sobre el precio límite, indica el porcentaje de descuento que será restado del precio base. Un monto negativo indica el porcentaje que será añadido al precio base.

![Campo](/assets/img/docs/sales-management/sam-sales-image350.png)

Imagen 38. Campo % Descuento Sobre Precio Límite

El campo **Redondeo del Precio Límite**, indica el redondeo (si existe alguno) que se aplicará al precio final en la lista de precios.

La opción seleccionada establece la regla de redondeo para el resultado final.

![Campo](/assets/img/docs/sales-management/sam-sales-image351.png)

Imagen 39. Campo Redondeo del Precio Límite

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image352.png)

Imagen 40. Icono Guardar Cambios

## Configuración de Lista de Precios Base

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la carpeta **Reglas de Gestión de Materiales**, por último seleccione la ventana **Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image353.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Lista de Precios**, con todos los registros de listas de precios de compras y ventas.

![Campo](/assets/img/docs/sales-management/sam-sales-image354.png)

Imagen 2. Ventana Lista de Precios

Warning

La información de los campos que contiene la pestaña **Lista de Precios**, no debe ser modificada por ningún motivo. De igual manera, no se debe tildar o destildar ningún check de los que contiene dicha pestaña.

Ubique el registro de lista de precios de **Ventas (USD)**.

![Campo](/assets/img/docs/sales-management/sam-sales-image355.png)

Imagen 3. Lista de Precios Ventas (USD)

Seleccione la pestaña **Versión**, para crear la versión de lista de precios base.

![Campo](/assets/img/docs/sales-management/sam-sales-image356.png)

Imagen 4. Pestaña Versión

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image357.png)

Imagen 5. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image358.png)

Imagen 6. Campo Organización

Note

La organización seleccionada en la lista de precios, debe coincidir con la organización seleccionada en la tasa de cambio creada a la fecha. Si la lista de precios esta creada con organización (_), las tasas de cambio a utilizar deben estar creadas con organización (_).

Introduzca en el campo **Nombre**, el nombre correspondiente a la versión de lista de precios que se encuentra creando.

Este campo contiene como nombre por defecto, la fecha y la hora en el cual fue creado el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image359.png)

Imagen 7. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image360.png)

Imagen 8. Campo Descripción

Seleccione en el campo **Esq List Precios/Desc**, el esquema de descuento correspondiente.

![Campo](/assets/img/docs/sales-management/sam-sales-image361.png)

Imagen 9. Campo Esq List Precios/Desc

Seleccione en el campo **Válido Desde**, la fecha de inicio del periodo de validez del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image362.png)

Imagen 10. Campo Válido Desde

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image363.png)

Imagen 11. Icono Guardar Cambios

Note

Para cargar los precios de los productos en la lista de precios base, puede realizar desde la opción **Crear Lista de Precios**, o de manera manual desde la pestaña **Precio del Producto**.

## Crear Precios desde Crear Lista de Precios

Para cargar los precios de los productos desde la opción **Crear Lista de Precios**, debe realizar lo siguiente.

Esta opción permite crear los precios de los productos desde la última orden de compra procesada, basandose en el tipo de conversión, descuento y margen de ganancia, previamente configurado en el esquema de descuento.

Si los precios de los productos se encuentran en una moneda diferente a la moneda de la compañía, ADempiere toma los precios de la pestaña **Compras** de cada producto y en base a la moneda que este asociada a dicha pestaña y a la moneda de la lista de precios, toma la configuración del esquema de lista de precios, realizando la conversión a la tasa de la fecha que tenga la versión de lista de precios y aplica el descuento o margen de ganancia configurado en el mismo (si lo tiene), para finalmente cargar dichos precios a la lista de precios.

Seleccione la opción **Crear Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image364.png)

Imagen 12. Opción Crear Lista de Precios

Note

También puede acceder al proceso, seleccionando la opción **Crear Lista de Precios** desplegada del icono \*\*Proceso ubicado en la barra de herramientas de ADempiere.

Podrá visualizar la ventana **Crear Lista de Precios**, con diferentes campos que permiten generar la lista de precios en base a lo requerido por el usuario.

![Campo](/assets/img/docs/sales-management/sam-sales-image365.png)

Imagen 13. Ventana Crear Lista de Precios

Seleccione en el campo **Producto**, el producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image366.png)

Imagen 14. Campo Producto

Seleccione en el campo **Categoría del Producto**, la categoría del producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las categorías de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image367.png)

Imagen 15. Campo Categoría del Producto

Seleccione en el campo **Grupo de Producto**, el grupo de producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los grupos de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image368.png)

Imagen 16. Campo Grupo de Producto

Seleccione en el campo **Clase de Producto**, la clase de producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clases de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image369.png)

Imagen 17. Campo Clase de Producto

Seleccione en el campo **Clasificación de Producto**, la clasificación por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clasificaciones de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image999.png)

Imagen 18. Campo Clasificación de Producto

Seleccione la opción **OK**, para ejecutar el proceso y generar la lista de precios en base a lo seleccionado.

![Campo](/assets/img/docs/sales-management/sam-sales-image370.png)

Imagen 19. Opción OK

Note

Para verificar los precios de los productos puede seleccionar la pestaña **Precio de Producto**, de la ventana **Lista de Precios**, de la versión previamente creada.

## Crear Precios desde Pestaña Precio de Producto

Para cargar los precios de los productos de manera manual, debe realizar lo siguiente.

Seleccione la pestaña **Precio de Producto** y proceda a llenar los campos correspondientes.

![Campo](/assets/img/docs/sales-management/sam-sales-image371.png)

Imagen 20. Pestaña Precio del Producto

Seleccione en el campo **Producto**, el producto correspondiente al registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image372.png)

Imagen 21. Campo Producto

Introduzca en el campo **Precio de Lista**, el precio de lista del producto.

El precio de lista es el precio de lista oficial en la moneda del documento.

![Campo](/assets/img/docs/sales-management/sam-sales-image373.png)

Imagen 22. Campo Precio de Lista

Introduzca en el campo **Precio Estándar**, el precio estándar del producto.

El precio estándar indica el precio estándar o normal para un producto en esta lista de precios.

![Campo](/assets/img/docs/sales-management/sam-sales-image374.png)

Imagen 23. Campo Precio Estándar

Introduzca en el campo **Precio Límite**, el precio límite del producto.

El límite de precio indica el precio más bajo para un producto establecido en la moneda de la lista de precio.

![Campo](/assets/img/docs/sales-management/sam-sales-image375.png)

Imagen 24. Campo Precio Límite

Introduzca en el campo **PMVP**, el PMVP del producto.

El PMVP indica el precio marcado de venta al público.

![Campo](/assets/img/docs/sales-management/sam-sales-image376.png)

Imagen 25. Campo PMVP

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image377.png)

Imagen 26. Icono Guardar Cambios

## Crear Lista de Precios desde otra Lista de Precios

Para ejemplificar el caso de creación de una lista de precios desde otra, se tiene la versión de lista de precios base **2021-03-03 09:03:41**, creada en la lista de precios **Ventas (USD)**. De igual manera, se tiene la tasa de cambio de **VES** a **USD** y viceversa, con monto de **1.877.000,00**, a la fecha **03/03/2021**.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la carpeta **Reglas de Gestión de Materiales**, por último seleccione la ventana **Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image378.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Lista de Precios**, con todos los registros de listas de precios de compras y ventas.

![Campo](/assets/img/docs/sales-management/sam-sales-image379.png)

Imagen 2. Ventana Lista de Precios

Warning

La información de los campos que contiene la pestaña **Lista de Precios**, no debe ser modificada por ningún motivo. De igual manera, no se debe tildar o destildar ningún check de los que contiene dicha pestaña.

Ubique el registro de lista de precios de **Ventas (VES)**.

![Campo](/assets/img/docs/sales-management/sam-sales-image380.png)

Imagen 3. Lista de Precios Ventas (VES)

Seleccione la pestaña **Versión**, para crear la versión de lista de precios desde otra versión de lista de precios.

![Campo](/assets/img/docs/sales-management/sam-sales-image381.png)

Imagen 4. Pestaña Versión

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image382.png)

Imagen 5. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image383.png)

Imagen 6. Campo Organización

Note

La organización seleccionada en la lista de precios, debe coincidir con la organización seleccionada en la tasa de cambio creada a la fecha. Si la lista de precios esta creada con organización (_), las tasas de cambio a utilizar deben estar creadas con organización (_).

Introduzca en el campo **Nombre**, el nombre correspondiente a la versión de lista de precios que se encuentra creando.

Este campo contiene como nombre por defecto, la fecha y la hora en el cual fue creado el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image384.png)

Imagen 7. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image385.png)

Imagen 8. Campo Descripción

Seleccione en el campo **Esq List Precios/Desc**, el esquema de descuento correspondiente.

![Campo](/assets/img/docs/sales-management/sam-sales-image386.png)

Imagen 9. Campo Esq List Precios/Desc

Seleccione en el campo **Lista de Precios Base**, la versión de lista de precios base desde la cual requiere generar la lista de precios.

![Campo](/assets/img/docs/sales-management/sam-sales-image387.png)

Imagen 10. Campo Lista de Precios

Seleccione en el campo **Válido Desde**, la fecha de inicio del periodo de validez del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image388.png)

Imagen 11. Campo Válido Desde

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image389.png)

Imagen 12. Icono Guardar Cambios

Seleccione la opción **Crear Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image390.png)

Imagen 13. Opción Crear Lista de Precios

Note

También puede acceder al proceso, seleccionando la opción **Crear Lista de Precios** desplegada del icono \*\*Proceso ubicado en la barra de herramientas de ADempiere.

Podrá visualizar la ventana **Crear Lista de Precios**, con diferentes campos que permiten generar la lista de precios en base a lo requerido por el usuario.

![Campo](/assets/img/docs/sales-management/sam-sales-image391.png)

Imagen 14. Ventana Crear Lista de Precios

Seleccione en el campo **Producto**, el producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image392.png)

Imagen 15. Campo Producto

Seleccione en el campo **Categoría del Producto**, la categoría del producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las categorías de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image393.png)

Imagen 16. Campo Categoría del Producto

Seleccione en el campo **Grupo de Producto**, el grupo de producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los grupos de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image394.png)

Imagen 17. Campo Grupo de Producto

Seleccione en el campo **Clase de Producto**, la clase de producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clases de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image395.png)

Imagen 18. Campo Clase de Producto

Seleccione en el campo **Clasificación de Producto**, la clasificación por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clasificaciones de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image396.png)

Imagen 19. Campo Clasificación de Producto

Seleccione la opción **OK**, para ejecutar el proceso y generar la lista de precios en base a lo seleccionado.

![Campo](/assets/img/docs/sales-management/sam-sales-image397.png)

Imagen 20. Opción OK

Seleccione la pestaña **Precio de Producto** para verificar los precios de los productos, creados desde la lista de precios base seleccionada previamente.

![Campo](/assets/img/docs/sales-management/sam-sales-image398.png)

Imagen 21. Pestaña Precio de Producto

## Crear Lista de Precios desde Última OC Procesada

Para ejemplificar el caso de creación de una lista de precios desde la última orden de compra procesada, se tiene la siguiente configuración en el esquema de lista de precios:

Tipo de Conversión: BCV

Categoría del Producto: Suministro de Dotaciones

% Descuento Sobre Precio de Lista: -20,0

% Descuento Sobre Precio Estándar: -20,0

% Descuento Sobre Precio Límite: -20,0

Adicional a ello, se tiene la orden de compra **OCN-27**, elaborada en moneda **USD**. La misma cuenta con el producto **DOIS-000001_Estandar**, en la cual su precio de compra es **12,00**.

Note

El producto debe estar incluido en una orden de compra y dicha orden debe estar en estado **Completo**. Recuerde que al completar la orden de compra, los precios de compra de los productos son cargados a la pestaña **Compras** de cada producto incluido en la orden.

De igual manera, se tiene la tasa de cambio de **VES** a **USD** y viceversa, con monto de **1.877.000,00**, a la fecha **03/03/2021**.

En base a las especificaciones nombradas anteriormente, se procede a explicar el procedimiento a seguir para generar la lista de precios desde la última orden de compra procesada.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la carpeta **Reglas de Gestión de Materiales**, por último seleccione la ventana **Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image399.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Lista de Precios**, con todos los registros de listas de precios de compras y ventas.

![Campo](/assets/img/docs/sales-management/sam-sales-image400.png)

Imagen 2. Ventana Lista de Precios

Warning

La información de los campos que contiene la pestaña **Lista de Precios**, no debe ser modificada por ningún motivo. De igual manera, no se debe tildar o destildar ningún check de los que contiene dicha pestaña.

Ubique el registro de lista de precios de **Ventas (VES)**.

![Campo](/assets/img/docs/sales-management/sam-sales-image401.png)

Imagen 3. Lista de Precios Ventas (VES)

Seleccione la pestaña **Versión**.

![Campo](/assets/img/docs/sales-management/sam-sales-image402.png)

Imagen 4. Pestaña Versión

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image403.png)

Imagen 5. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image404.png)

Imagen 6. Campo Organización

Note

La organización seleccionada en la lista de precios, debe coincidir con la organización seleccionada en la tasa de cambio creada a la fecha. Si la lista de precios esta creada con organización (_), las tasas de cambio a utilizar deben estar creadas con organización (_).

Introduzca en el campo **Nombre**, el nombre correspondiente a la versión de lista de precios que se encuentra creando.

Este campo contiene como nombre por defecto, la fecha y la hora en el cual fue creado el registro.

![Campo](/assets/img/docs/sales-management/sam-sales-image405.png)

Imagen 7. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image406.png)

Imagen 8. Campo Descripción

Seleccione en el campo **Esq List Precios/Desc**, el esquema de descuento correspondiente.

![Campo](/assets/img/docs/sales-management/sam-sales-image407.png)

Imagen 9. Campo Esq List Precios/Desc

Seleccione en el campo **Válido Desde**, la fecha de inicio del periodo de validez del registro que se encuentra realizando.

![Campo](/assets/img/docs/sales-management/sam-sales-image408.png)

Imagen 10. Campo Válido Desde

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image409.png)

Imagen 11. Icono Guardar Cambios

Seleccione la opción **Crear Lista de Precios**.

Esta opción permite crear los precios de los productos desde la última orden de compra procesada, basandose en el tipo de conversión, descuento y margen de ganancia, previamente configurado en el esquema de descuento.

Si los precios de los productos se encuentran en una moneda diferente a la moneda de la compañía, ADempiere toma los precios de la pestaña **Compras** de cada producto y en base a la moneda que este asociada a dicha pestaña y a la moneda de la lista de precios, toma la configuración del esquema de lista de precios, realizando la conversión a la tasa de la fecha que tenga la versión de lista de precios y aplica el descuento o margen de ganancia configurado en el mismo (si lo tiene), para finalmente cargar dichos precios a la lista de precios.

![Campo](/assets/img/docs/sales-management/sam-sales-image410.png)

Imagen 12. Opción Crear Lista de Precios

Note

También puede acceder al proceso, seleccionando la opción **Crear Lista de Precios** desplegada del icono \*\*Proceso ubicado en la barra de herramientas de ADempiere.

Podrá visualizar la ventana **Crear Lista de Precios**, con diferentes campos que permiten generar la lista de precios en base a lo requerido por el usuario.

![Campo](/assets/img/docs/sales-management/sam-sales-image411.png)

Imagen 13. Ventana Crear Lista de Precios

Seleccione en el campo **Producto**, el producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image412.png)

Imagen 14. Campo Producto

Seleccione en el campo **Categoría del Producto**, la categoría del producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las categorías de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image413.png)

Imagen 15. Campo Categoría del Producto

Seleccione en el campo **Grupo de Producto**, el grupo de producto por el cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todos los grupos de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image414.png)

Imagen 16. Campo Grupo de Producto

Seleccione en el campo **Clase de Producto**, la clase de producto por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clases de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image415.png)

Imagen 17. Campo Clase de Producto

Seleccione en el campo **Clasificación de Producto**, la clasificación por la cual requiere generar la lista de precios.

Si no es seleccionado ningún valor en este campo, se genera la lista de precios con todas las clasificaciones de productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image416.png)

Imagen 18. Campo Clasificación de Producto

Seleccione la opción **OK**, para ejecutar el proceso y generar la lista de precios en base a lo seleccionado.

![Campo](/assets/img/docs/sales-management/sam-sales-image417.png)

Imagen 19. Opción OK

Seleccione la pestaña **Precio de Producto** para verificar los precios de los productos, creados desde la pestaña **Compras** de cada producto.

![Campo](/assets/img/docs/sales-management/sam-sales-image418.png)

Imagen 20. Pestaña Precio de Producto

Note

El resultado a obtener por producto en el ejemplo expuesto anteriormente sería:

Precio de Compra del Producto (DOIS-000001_Estandar): 12,00

Tasa de Cambio: 1.877.000,00

Margen de Gancia por Categoría (Suministro de Dotaciones): 20%

Resultado de Operación:

Precio de Compra del Producto (DOIS-000001_Estandar) \* Tasa de Cambio = Precio de Compra Convertido

Precio de Compra Convertido + Margen de Gancia por Categoría (Suministro de Dotaciones) = Precio del Producto (DOIS-000001_Estandar) para la Venta

Ejemplo:

12,00 \* 1.877.000,00 = 22.524.000,00

22.524.000,00 + 20% = 27.028.800,00

## Crear Entradas de Productos en Lista de Precios

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la carpeta **Reglas de Gestión de Materiales**, por último seleccione la ventana **Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image419.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Lista de Precios**, donde debe ubicar el registro de la lista de precios a utilizar.

![Campo](/assets/img/docs/sales-management/sam-sales-image420.png)

Imagen 2. Ventana Lista de Precios

Seleccione la pestaña **Versión**, para establecer la lista de precios de los productos.

![Campo](/assets/img/docs/sales-management/sam-sales-image421.png)

Imagen 3. Pestaña Versión

Seleccione ĺa opción **Crear Entradas de Productos en Lista de Precios**, para establecer los precios de los productos desde el proceso.

![Campo](/assets/img/docs/sales-management/sam-sales-image422.png)

Imagen 4. Opción Crear Entradas de Productos en Lista de Precios

También puede acceder al proceso, seleccionando la opción **Crear Entradas de Productos en Lista de Precios** desplegada del icono \*\*Proceso ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image423.png)

Imagem 5. Opción Crear Entradas de Productos en Lista de Precios desde el Icono Proceso

Podrá visualizar la ventana del proceso, donde debe seleccionar la opción **Comenzar Búsqueda** para buscar los productos registrados en ADempiere.

![Campo](/assets/img/docs/sales-management/sam-sales-image424.png)

Imagen 5. Opción Comenzar Búsqueda

Al seleccionar el registro del producto se habilitan los tres (3) campos referente a los precios de los productos. Introduzca en cada uno de ellos, los diferentes precios que corresponden a la lista de precios que se encuentra realizando.

Recuerde que debe ingresar los precios del producto considerando lo siguiente:

En el campo **Precio de Lista**, se debe indicar el precio de lista oficial en la moneda del documento.

En el campo **Precio Estándar**, se debe indicar el precio estándar o normal para un producto en esta lista de precios.

En el campo **Precio Límite**, se debe indicar el pprecio más bajo para un producto establecido en la moneda de la lista de precio.

![Campo](/assets/img/docs/sales-management/sam-sales-image425.png)

Imagen 6. Ingresar Precios de Productos

Luego de ingresar todos los precios de los productos requeridos, seleccione la opción **OK** para cargar dichos precios a la pestaña **Precio Producto**.

![Campo](/assets/img/docs/sales-management/sam-sales-image426.png)

Imagen 7. Opción OK para Cargar Precios

Seleccione el icono **Refrescar**, ubicado en la barra de herramientas de ADempiere, para cargar a la pestaña **Precio Producto**, la información ingresada en la ventana del proceso **Crear Entradas de Productos en Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image427.png)

Imagen 8. Icono Refrescar

Seleccione la pestaña **Precio Producto**, para visualizar los registros cargados desde el proceso **Crear Entradas de Productos en Lista de Precios**.

![Campo](/assets/img/docs/sales-management/sam-sales-image428.png)

Imagen 9. Pestaña Precio Producto
