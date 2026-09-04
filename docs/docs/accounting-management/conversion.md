---
title: Conversión Monetaria
category: Documentation
star: 9
article: false
---

ADempiere permite definir diferentes conversiones monetarias y estas a su vez, diferentes tasas de cambio que permiten realizar la conversión una moneda a otra para gestionar de manera efectiva las transacciones de compra/venta de la empresa u organización. El proceso de conversión monetaria se puede realizar de forma manual o automática, y es explicado de manera detallada en sus respectivos documentos.

- Conversión Manual
- Tipo de Conversión
- Tasa de Conversión desde la Ventana Moneda
- Tasa de Conversión desde la Ventana Tasa de Cambio
- Conversión Automática
- Conversión Automática por Tipo de Conversión

## Conversión Manual

La conversión manual consiste en crear en ADempiere los tipos de conversión con los cuales va a trabajar la empresa. Esta funcionalidad permite lo siguiente:

Tasa de Conversión Diaria: Al trabajar con diferentes monedas en los procesos de compra/venta de la organización, se vuelve obligatoría la creación de las tasas de cambio diariamente en los diferentes tipos de conversión con los que trabaja dicha organización. Adicional a ello, la fecha final del rango o periodo de la tasa de cambio, siempre debe ser igual a la fecha de inicio de dicho rango o periodo.

En el caso de que el usuario intente crear una tasa de cambio con el mismo tipo de conversión y moneda utilizado previamente el mismo día, al intentar guardar el registro existirá una validación que no permitirá completar el proceso.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image997.png)

Imagen 1. Ejemplo de Validación

Crear Tasa Recíproca: Esta funcionalidad permite que al guardar el registro sea creada de manera automática una tasa de cambio como reverso.

Note

Un ejemplo de este caso puede ser cuando el usuario crea una tasa de cambio de moneda **VES** a moneda **USD** con una tasa multiplicadora 2 entonces automáticamente se creará una tasa de cambio de moneda **USD** a **VES** con la tasa multiplicadora 0.5

../../../\_images/tasa-cambio-reciproca.gif
Video 1. Tasa de Cambio

En el siguiente enlace puede descargar un ejemplo del mismo para visualizarlo mejor Convert Video

## Tipo de Conversión

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Reglas Contables**, por último seleccione la ventana **Tipo de Conversión**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image207.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana **Tipo de Conversión**, con los diferentes registros que contiene dicha ventana.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image208.png)

Imagen 3. Ventana Tipo de Conversión

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image209.png)

Imagen 4. Icono Registro Nuevo de la Ventana Tipo de Conversión

Seleccione en el campo **Organización**, la organización para la cual esta creando el registro de tipo de conversión.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image990.png)

Imagen 5. Campo Organización de la Ventana Tipo de Conversión

Introduzca en el campo **Código**, el código correspondiente al registro de tipo de conversión que se encuentra realizando, para este caso es utilizado el código **BCV**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image210.png)

Imagen 6. Campo Código de la Ventana Tipo de Conversión

Introduzca en el campo **Nombre** el nombre correspondiente al registro de tipo de conversión que se encuentra realizando, para este caso es utilizado el nombre de conversión **BCV**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image211.png)

Imagen 7. Campo Nombre de la Ventana Tipo de Conversión

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro de tipo de conversión que se encuentra realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image212.png)

Imagen 8. Campo Descripción de la Ventana Tipo de Conversión

El checklist **Activo**, indica que el registro se encuentra activo y puede ser utilizado en cualquier transacción que lo requiera.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image213.png)

Imagen 9. Checklist Activo de la Ventana Tipo de Conversión

Seleccione el checklist **Predeterminado**, para indicar como predeterminado el registro que se encuentra realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image214.png)

Imagen 10. Checklist Predeterminado de la Ventana Tipo de Conversión

Note

Recuerde guardar los cambios realizados seleccionando el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

## Tasa de Conversión desde la Ventana Moneda

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Reglas Contables**, por último seleccione la ventana **Moneda**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image215.png)

Imagen 11. Menú de ADempiere

Seleccione el registro de la moneda para la cual requiere registrar una tasa de conversión. Para ejemplificar el registro es utilizada la moneda **USD**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image216.png)

Imagen 12. Registro de Moneda USD en ADempiere

Seleccione la pestaña **Tasas de Cambio** para navegar entre los diferentes registros de tasas de cambio correspondientes a la moneda **USD**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image217.png)

Imagen 13. Pestaña Tasas de Cambio de la Ventana Moneda

Seleccione el icono **Registro Nuevo** para crear un nuevo registro de tasas de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image218.png)

Imagen 14. Icono Registro Nuevo de la Pestaña Tasas de Cambio

Warning

La tasa de cambio se debe crear de dólares a bolívares y de bolívares a dólares.

Seleccione en el campo **Moneda Hacia**, la moneda para la cual requiere convertir el dinero. Para ejemplificar el registro es utilizada la moneda **VES**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image219.png)

Imagen 15. Campo Moneda Hacia de la Pestaña Tasas de Cambio

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión a utilizar. Para este caso es utilizado el tipo de conversión **BCV**, creado anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image220.png)

Imagen 16. Campo Tipo de Conversión de la Pestaña Tasas de Cambio

Seleccione en el campo **Válido Desde**, la fecha desde la cual es válida la tasa de conversión que se encuentra realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image221.png)

Imagen 17. Campo Válido Desde de la Pestaña Tasas de Cambio

Seleccione en el campo **Válido Hasta**, la fecha hasta la cual es válida la tasa de conversión que se encuentra realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image222.png)

Imagen 18. Campo Válido Hasta de la Pestaña Tasas de Cambio

Introduzca en el campo **Factor de Base a Destino**, la tasa por la que serán multiplicados los montos de las transacciones donde sea utilizado el tipo de conversión seleccionado anteriormente. Para ejemplificar el registro es utilizada la tasa **82.000,0**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image223.png)

Imagen 19. Campo Factor de Base a Destino de la Pestaña Tasas de Cambio

Note

Recuerde guardar los cambios realizados seleccionando el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

## Tasa de Conversión desde la Ventana Tasa de Cambio

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Reglas Contables**, por último seleccione la ventana **Tasa de Cambio**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image224.png)

Imagen 20. Menú de ADempiere

Podrá visualizar la ventana **Tasa de Cambio**, con diferentes campos que permiten registrar las tasas de cambio según el tipo de conversión.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image225.png)

Imagen 21. Ventana Tasa de Cambio

Seleccione el icono **Registro Nuevo**, para crear un nuevo registro de tasa de cambio según el tipo de conversión.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image226.png)

Imagen 22. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual se encuentra realizando el registro de tasa de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image227.png)

Imagen 23. Campo Organización

Seleccione en el campo **Moneda**, la moneda origen de la conversión.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image228.png)

Imagen 24. Campo Moneda

Seleccione en el campo **Moneda Hacia**, la moneda destino de la conversión.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image229.png)

Imagen 25. Campo Moneda Hacia

Seleccione en el campo **Tipo de Conversión**, el tipo de conversion de la tasa de cambio que se encuentra registrando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image230.png)

Imagen 26. Campo Tipo de Conversión

Seleccione en el campo **Válido Desde**, la fecha de inicio del periodo de validez de la tasa de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image231.png)

Imagen 27. Campo Válido Desde

Seleccione en el campo **Válido Hasta**, la fecha final del periodo de validez de la tasa de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image232.png)

Imagen 28. Campo Válido Hasta

Introduzca en el campo **Factor de Destino a Base**, la tasa por la que serán multiplicados los montos de las transacciones donde sea utilizado el tipo de conversión seleccionado anteriormente. Para ejemplificar el registro es utilizada la tasa **82.000,0**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image233.png)

Imagen 29. Campo Factor de Destino a Base

Note

Recuerde guardar los cambios realizados seleccionando el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

## Conversión Automática

Ubique y seleccione en el menú de ADempiere, la carpeta **Operaciones de Intercambio**, luego seleccione el proceso **Obtener Tasas de Cambio desde Proveedor**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image234.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana del proceso **Obtener Tasas de Cambio desde Proveedor**, para ejecutar el mismo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image235.png)

Imagen 2. Ventana Obtener Tasas de Cambio desde Proveedor

La ventana del proceso **Obtener Tasas de Cambio desde Proveedor** contiene lo siguiente:

Checklist **Obtener Tasas para la Moneda del Esquema Contable**: Este permite limitar la búsqueda de tasas de cambio a la moneda establecida en el esquema contable. De no ser tildado este checklist, el proceso no hará filtro por la moneda del esquema contable.

Campo **Fecha de la Transacción**: Este permite determinar el rango de fecha para obtener las tasas de cambio. El proceso aplica el filtro si el proveedor de servicio permite hacer búsqueda por rango de fecha. Tomando en cuenta que un proveedor de servicio es el proveedor al cual se conectará la aplicación para la consulta de tasas de cambio.

Podrá visualizar que el checklist **Obtener Tasas para la Moneda del Esquema Contable**, se encuentra tildado para filtrar la búsqueda de tasas de cambio a la moneda del esquema.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image236.png)

Imagen 3. Checklist Obtener Tasas para la Moneda del Esquema Contable

Seleccione en el campo **Fecha de la Transacción**, el rango de fecha para filtrar la búsqueda de tasas de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image237.png)

Imagen 4. Campo Fecha de la Transacción

Seleccione la opción **OK**, para ejecutar el proceso **Obtener Tasas de Cambio desde Proveedor** en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image238.png)

Imagen 5. Opción OK del Proceso Obtener Tasas de Cambio desde Proveedor

Al ejecutar el proceso **Obtener Tasas de Cambio desde Proveedor**, podrá visualizar las tasas de cambio de la siguiente manera.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image239.png)

Imagen 6. Resultado del Proceso Obtener Tasas de Cambio desde Proveedor

## Conversión Automática por Tipo de Conversión

Ubique y seleccione en el mené de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Reglas Contables**, por último seleccione la ventana **Tipo de Conversión**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image240.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Tipo de Conversión**, con los registros de tipos de conversión que contiene ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image241.png)

Imagen 2. Ventana Tipo de Conversión

Ubique el registro correspondiente al tipo de conversión desde el cual requiere obtener las tasas de cambio. Para el presente caso, se utiliza el tipo de conversión **BCV**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image242.png)

Imagen 3. Tipo de Conversión BCV

Verifique que el registro de tipo de conversión seleccionado, tenga asociado el proveedor en el campo **Proveedor de Tasas de Cambio**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image243.png)

Imagen 4. Campo Proveedor de Tasas de Cambio

Seleccione la opción **Obtener Tasas de Cambio desde Proveedor**, desplegada al seleccionar el icono **Proceso**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image244.png)

Imagen 5. Opción Obtener Tasas de Cambio desde Proveedor

Podrá visualizar la ventana **Obtener Tasas de Cambio desde Proveedor**, con diferentes campos que permiten obtener las tasas de cambio dependiendo de la selección de los mismos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image245.png)

Imagen 6. Ventana del Proceso

El checklist **Obtener Tasas para la Moneda del Esquema Contable**, se encuentra tildado para filtrar la búsqueda de tasas de cambio a la moneda del esquema.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image246.png)

Imagen 7. Checklist Obtener Tasas para la Moneda del Esquema Contable

Seleccione en el campo **Fecha de la Transacción**, el rango de fecha para filtrar la búsqueda de tasas de cambio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image247.png)

Imagen 8. Campo Fecha de la Transacción

El checklist **Actualizar Tasas Actuales**, permite atualizar las tasas actuales si coinciden con la fecha.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image248.png)

Imagen 9. Checklist Actualizar Tasas Actuales

Seleccione la opción **OK**, para ejecutar el proceso **Obtener Tasas de Cambio desde Proveedor** en base a lo seleccionado en los campos explicados anteriormente.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image249.png)

Imagen 10. Opción OK

Al ejecutar el proceso **Obtener Tasas de Cambio desde Proveedor**, podrá visualizar las tasas de cambio de la siguiente manera.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image250.png)

Imagen 11. Tasas de Cambio Obtenidas del Proveedor
