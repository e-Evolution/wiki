---
title: Selección de Pago
category: Documentation
star: 9
article: false
---

Una selección de pagos en ADempiere no es más que la agrupación de documentos de CxP o de compras que se necesitan ser cancelados ya sean en su totalidad o de manera parcial, dentro de la selección de pagos se encuentran los tipos de documentos **Orden de Pago** y la **Selección de Pagos de Cuentas por Pagar**, los cuales son utilizados para seguir los canales regulares entre los departamentos de compras, cuenta por pagar y tesorería.

La **Orden de Pago** es utilizada para crear aquellas solicitud de pago de los documentos pendientes por pagar, comúnmente es utilizada por los departamentos de compras y de cuentas pagar, ya qué ellos solo se encargan de agrupar aquellos documentos los cuales necesitan qué sean cancelados.

La **Selección de Pagos de Cuentas por Pagar** es utilizada cuando se define cuales son los documentos que sí se les generará el pago y desde qué cuenta bancaria de la compañía saldrán la cancelación de los documentos seleccionados; la selección parte de la agrupación de facturas asociadas en la **Orden de Pago** este procedimiento es comúnmente realizado por el departamento de tesorería, ya qué ellos son los encargados de llevar los saldos en banco lo cual le permite tener una toma de decisión del banco a utilizar para saldar una factura de CxP o realizar un anticipo a proveedores.

Para conocer mejor este procedimiento de la selección de pagos ERPyA ofrece una explicación eficiente y sencilla de este proceso para así obtener un resultado exitoso al momento de generar una orden de pago y posteriormente una selección de pago de cuentas por pagar para culminar el procedimiento de manera exitosa en la versión 3.9.2 de ADempiere en la localización Venezuela.

- Registro desde Orden
- Registro desde Factura
- Registro desde Nómina
- Registro desde Selección de Pago

## Registro desde Orden

En muchas ocasiones se necesitan realizar anticipos a proveedores, una vez que se concrete la compra dependiendo de las reglas del negocio con la que cuente la compañía y el proveedor se realizan anticipos, los anticipos son aquellos pagos que se generan antes de una factura, por ello como ya existe una compra a un proveedor y se requiere aplicar un anticipo; para aplicar un anticipo a proveedores en ADempiere y realizar una **Orden de Pago** a través de una **Orden de Compra** se deben aplicar los siguientes pasos.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la ventana **Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image214.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Selección de Pago**, con los diferentes registros realizados en dicha ventana.

![Campo](/assets/img/docs/balance-management/bam-balance-image215.png)

Imagen 2. Ventana Selección de Pago

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro en la ventana **Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image216.png)

Imagen 3. Icono Registro Nuevo de la Ventana Selección de Pago

Seleccione en el campo **Organización**, la organización para la cual está realizando el documento **Orden de Pago**.

Al seleccionar la organización con la que trabajará el registro a crear estará disponible únicamente bajo esa organización seleccionada, aunque la decisión de la organización a trabajar quedará al momento que inicie sesión en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image217.png)

Imagen 4. Campo Organización del Documento Orden de Pago desde Orden

Introduzca en el campo **No. del Documento**, el número de documento correspondiente a la secuencia de numeración del documento que esta realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image218.png)

Imagen 5. Campo Número de Documento del Documento Orden de Pago desde Orden

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para ejemplificar el registro es utilizado el tipo de documento **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image219.png)

Imagen 6. Campo Tipo de Documento del Documento Orden de Pago desde Orden

Seleccione en el campo **F. Documento**, la fecha en la cual está realizando el documento **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image220.png)

Imagen 7. Campo F. Documento del Documento Orden de Pago desde Orden

Seleccione en el campo **Fecha de Pago**, la fecha en la cual se debe generar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image221.png)

Imagen 8. Campo Fecha de Pago del Documento Orden de Pago desde Orden

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria desde la cual requiere generar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image222.png)

Imagen 9. Campo Cuenta Bancaria del Documento Orden de Pago desde Orden

Seleccione en el campo **Moneda**, la moneda con la cual se requiere generar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image223.png)

Imagen 10. Campo Moneda del Documento Orden de Pago desde Orden

Introduzca en el campo **Nombre de Referencia**, un nombre de referencia para la identificación de la orden de pago que este realizando.

La información a colocar en este campo es una pequeña referencia de la orden pago que se esté creando por ejemplo: **Pago Anticipos a proveedores Servicios**.

![Campo](/assets/img/docs/balance-management/bam-balance-image224.png)

Imagen 11. Campo Nombre de Referencia del Documento Orden de Pago desde Orden

Introduzca en el campo **Descripción**, una breve descripción referente a la orden de pago que este realizando.

La información a colocar en este campo es una pequeña descripción de la orden de pago que se esté realizando por ejemplo: **Primer anticipo a proveedores de servicios primera semana de Junio**.

![Campo](/assets/img/docs/balance-management/bam-balance-image225.png)

Imagen 12. Campo Descripción del Documento Orden de Pago desde Orden

Note

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña **Selección de Pago**.

Seleccione la opción **Crear Desde Orden**, para crear la orden de pago desde la orden de compra.

Al seleccionar el botón **Crear Desde Orden**, se desplegará otra ventana llamada Smart Browser (Ventana de Búsqueda Inteligente).

![Campo](/assets/img/docs/balance-management/bam-balance-image226.png)

Imagen 13. Opción Crear desde Orden del Documento Orden de Pago desde Orden

Podrá visualizar la ventana de búsqueda inteligente del proceso **Crear Desde Orden**, con diferentes campos que le permiten al usuario filtrar la búsqueda de la información en base lo que seleccione en dichos campos

![Campo](/assets/img/docs/balance-management/bam-balance-image227.png)

Imagen 14. Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Los campos a visualizar en el smart browser son los siguientes:

Campo **Moneda**, este campo se encuentra sólo lectura y la moneda a mostrar dependerá de la moneda seleccionada en la ventana padre **Selección de Pago**; la moneda que aparezca en ese campo dentro del smart browser le indica a ADempiere que los documentos a buscar deben estar bajo esa moneda, ejemplo:

Si el valor en el campo **Moneda** es **VES** (Bolívar) cuando se realice la búsqueda de los documentos ADempiere mostrara únicamente los que estén creados bajo esa moneda.

Si el valor en el campo **Moneda** es USD\*\* (Dólar) cuando se realice la búsqueda de los documentos ADempiere mostrara únicamente los que estén creados bajo esa moneda.

![Campo](/assets/img/docs/balance-management/bam-balance-image228.png)

Imagen 15. Campo Moneda de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Campo **Socio de Negocio**, este campo puede ser utilizado si desea ubicar las órdenes de compras que estén asociadas a un socio de negocio en específico.

![Campo](/assets/img/docs/balance-management/bam-balance-imag229.png)

Imagen 16. Campo Socio de Negocio de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Checklist **Transacción de Ventas**, esté checklist comúnmente se encuentra destildado, pero sí se tilda al momento de hacer la búsqueda en el smart browser ADempiere mostrará las **Ordenes de Ventas**, sí el check se encuentra destildado mostrará únicamente las **Ordenes de Compras**.

![Campo](/assets/img/docs/balance-management/bam-balance-image230.png)

Imagen 17. Check Transacción de Ventas de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Campo **Regla de Pago**, este es un campo de búsqueda tipo lista, el cual al tildarlo mostrará una serie de opciones de reglas de pagos, la opción a seleccionar en esté campo le indicará a ADempiere qué al momento de realizar la búsqueda ubique y muestre solo las ordenes de compras que estén bajo la regla de pago seleccionada en ese campo, como por ejemplo:

Si se selecciona la regla de pago **A Crédito** y tengo creadas una o varias órdenes de compras qué tienen establecida esa regla de pago, al realizar la búsqueda desde el smart browser ADempiere mostrará las órdenes que éste unicamente con esa regla de pago, si no existen órdenes de compras con esa regla de pago ADempiere no mostrará nada.

![Campo](/assets/img/docs/balance-management/bam-balance-image231.png)

Imagen 18. Campo Regla de Pago de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Campo **Tipo de Documento**, este es un campo de búsqueda tipo lista el cual al tildarlo mostrará una serie de opciones de los tipos de documentos que se encuentran asociados a las órdenes de compras, la opción a seleccionar en este campo le indicará a ADempiere qué al momento de realizar la búsqueda ubique y muestre solo las ordenes de compras que estén bajo el tipo de documento seleccionado en ese campo, como por ejemplo:

Si se selecciona el tipo de documento **Orden de Compra Nacional** ADempiere mostrará cuando se realice la búsqueda unicamente las ordenes de compra que estén asociadas a ese tipo de documento, de lo contrario si no es seleccionado ningún tipo de documento ADempiere mostrará todas las órdenes de compras con todos los tipos de documentos que estén asociados a una orden de compra.

![Campo](/assets/img/docs/balance-management/bam-balance-image232.png)

Imagen 19. Campo Tipo de Documento de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Campo **Fecha de la Orden**, este campo es un campo tipo fecha el cual cuenta con dos recuadros con calendarios, el primero es para ser utilizada como fecha de la orden **Desde** y el segundo como fecha de la orden **Hasta**, al colocar una fecha en cualquiera de estas dos opciones (Fecha desde / Fecha hasta) ADempiere mostrará únicamente las ordenes de compras que están asociadas bajo ese rango de fechas, como por ejemplo:

Si se coloca en el campo fecha desde la fecha **18/06/2020** y el campo fecha hasta **20/06/2020**, ADempiere mostrar las ordenes de compras que estén bajo ese rango de fechas.

![Campo](/assets/img/docs/balance-management/bam-balance-image233.png)

Imagen 20. Campo Fecha de la Orden de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Note

Para saber más sobre el campo **Fecha de la Orden** y qué acción implica sobre una orden de compra, visitar el documento Registro de Orden de Compra Directa.

Campo **Fecha Prometida**, este campo es un campo tipo fecha el cual cuenta con dos recuadros con calendarios, el primero es para ser utilizada como fecha prometida **Desde** y el segundo como fecha prometida **Hasta**, al colocar una fecha en cualquiera de estas dos opciones (Fecha desde / Fecha hasta) ADempiere mostrará únicamente las ordenes de compras que están asociadas bajo ese rango de fechas, como por ejemplo:

Si se coloca en el campo fecha desde la fecha **20/06/2020** y el campo fecha hasta **25/06/2020**, ADempiere mostrar las ordenes de compras que estén bajo ese rango de fechas.

![Campo](/assets/img/docs/balance-management/bam-balance-image234.png)

Imagen 21. Campo Fecha Prometida de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Note

Para saber más sobre el campo **Fecha Prometida** y qué acción implica sobre una orden de compra, visitar el documento Registro de Orden de Compra Directa

Campo **Orden de Venta** este campo es un campo tipo búsqueda, aunque este campo tenga como orden de venta eso no significa que esté asociado para ubicar sólo las órdenes de ventas es un nombre estándar que maneja ADempiere y también es utilizado para esté caso para ubicar las órdenes de compras.

Este campo permite que sea ubicada una orden de compra en específico, para que al momento de realizar la búsqueda en el smart browser, esté muestre la orden de compra ubicada desde este campo.

![Campo](/assets/img/docs/balance-management/bam-balance-image235.png)

Imagen 22. Campo Orden de Venta de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Luego de establecer los filtros de búsqueda y cual de ellos desea seleccionar, tilde la opción **Comenzar Búsqueda**, para buscar los diferentes registros de órdenes de compra que se encuentran en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image236.png)

Imagen 23. Opción Comenzar Búsqueda de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Al tildar la opción **Comenzar Búsqueda**, se desplegará en la parte inferior del smart browser las órdenes de compras.

![Campo](/assets/img/docs/balance-management/bam-balance-image237.png)

Imagen 24. Ordenes de Compras de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Seleccione las órdenes que deseen asociar a la **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image238.png)

Imagen 25. Seleccionar Órdenes de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Al seleccionar las órdenes indique en el campo **Total del Pago**, cual es el total del anticipo por cada orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image239.png)

Imagen 26. Total Anticipo de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Seleccione la opción **OK** para cargar la información de la orden de compra a la pestaña **Línea de Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image240.png)

Imagen 27. Opción Ok de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Orden

Seleccione el icono **Refrescar**, ubicado en la barra de herramientas de ADempiere para refrescar la ventana **Selección de Pago** y pueda visualizar la información cargada desde la opción **Crear Desde Orden**.

![Campo](/assets/img/docs/balance-management/bam-balance-image241.png)

Imagen 28. Icono Refrescar del Documento Orden de Pago desde Orden

Seleccione la pestaña **Línea de Selección de Pago**, para verificar que la información cargada desde la opción **Crear Desde Orden** sea correcta.

![Campo](/assets/img/docs/balance-management/bam-balance-image242.png)

Imagen 29. Pestaña Línea de Selección de Pago del Documento Orden de Pago desde Orden

Note

En la pestaña **Línea de Selección de Pago** deberán aparecer las misma cantidad de órdenes seleccionadas desde la opción **Crear Desde Orden**.

Podrá observar que en cada registro de la pestaña **Línea de Selección de Pago** aparecerán las siguientes características:

Campo **Selección de Pago** debe aparecer el número de la selección de pago con la que se está trabajando, este número es el número de documento de la orden de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image243.png)

Imagen 30. Campo Selección de Pago del Documento Orden de Pago desde Orden

Campo **No. Línea** este campo define el número de línea de cada registro asociado a la pestaña **Lńea Selección de Pago**, cada número de línea va incrementando de 10 en 10, es decir que sí existen 3 registros asociados en la pestaña, cada registro debe estar en 10, 20 y 30.

![Campo](/assets/img/docs/balance-management/bam-balance-image244.png)

Imagen 31. Campo N° Línea del Documento Orden de Pago desde Orden

Campo **Descripción** este campo puede ser utilizado si se requiere dar una descripción en el registro de la línea.

![Campo](/assets/img/docs/balance-management/bam-balance-image245.png)

Imagen 32. Campo Descripción de la línea del Documento Orden de Pago desde Orden

Checklist **Activo** esté check indica si el registro de la línea está activo o no.

![Campo](/assets/img/docs/balance-management/bam-balance-image246.png)

Imagen 33. Checklist Activo del Documento Orden de Pago desde Orden

Campo **Socio del Negocio**, debe aparecer el socio de negocio de la orden que se encuentra asociada al registro de la línea.

![Campo](/assets/img/docs/balance-management/bam-balance-image247.png)

Imagen 34. Socio de Negocio del Documento Orden de Pago desde Orden

Campo **Cuenta Bancaria Socio del Negocio**, en este campo tipo lista deben aparecer las cuentas bancarias asociadas al socio del negocio, las cuentas bancarias a aparecer en este campo dependerá de las cuentas asociadas al momento de Registro de Proveedor.

La selección de la cuenta bancaria en este campo dependerá de las reglas del negocio que tenga la compañía con los proveedores.

![Campo](/assets/img/docs/balance-management/bam-balance-image248.png)

Imagen 35. Campo Cuenta Bancaria Socio del Negocio del Documento Orden de Pago desde Orden

Campo **Orden de Compra**, en este campo debe aparecer el número del documento de la orden seleccionada desde opción **Crear Desde Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image249.png)

Imagen 36. Campo Orden de Compra del Documento Orden de Pago desde Orden

En el campo **Factura**, para este caso no debe aparecer ninguna información ya que se está trabajando es con órdenes de compras, sí requiere realizar una **Orden de Pago** y asociar facturas verificar el instructivo Registro desde Factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image250.png)

Imagen 37. Campo Factura del Documento Orden de Pago desde Orden

Campo **Movimiento Nómina** para este caso no debe aparecer ninguna información ya que se está trabajando es con órdenes de compras, sí requiere realizar una **Selección de Pago** y asociar a un movimiento de nómina verificar el instructivo Registro desde Nómina.

![Campo](/assets/img/docs/balance-management/bam-balance-image251.png)

Imagen 38. Campo Movimento de Nómina del Documento Orden de Pago desde Orden

Campo **Regla de Pago**, se debe seleccionar la regla de pago con la que se emitirá el pago al proveedor.

ADempiere cuenta cuenta con cinco (5) reglas de pagos, las cuales son:

A crédito: Esta regla de pago indica que dicho documento cuenta con un crédito de pago, sin embargo es crédito no es reflejado en la orden de pago si no en la regla de pago que tenga establecida el **Socio del Negocio** o la **Orden de Compra**.

Débito directo. Está regla de pago indica que el pago a generar es un débito directo, lo cual en pocas palabras es una transferencia bancaria.

Depósito directo: Está regla de pago indica que el pago a generar es un depósito directo, está regla también entraría dentro de transferencia bancaria.

Cheque: Está regla de pago indica qué el pago a generar es a través de cheques bancarios.

Tarjeta de crédito: Está regla de pago indica qué el pago a generar es a través de tarjeta de crédito.

![Campo](/assets/img/docs/balance-management/bam-balance-image252.png)

Imagen 39. Campo Regla de Pago del Documento Orden de Pago desde Orden

Campo **Programa de Pago de Factura**, se debe seleccionar el programa de pago que posea la factura, para este caso como estamos trabajando con ordenes no aplica este campo.

![Campo](/assets/img/docs/balance-management/bam-balance-image253.png)

Imagen 40. Campo Programa de Pago del Documento Orden de Pago desde Orden

Campo **Cargo** se debe seleccionar el cargo qué desee asociar al registro de la línea de la selección de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image254.png)

Imagen 41. Campo Cargo del Documento Orden de Pago desde Orden

Checklist **Anticipo** aparecerá tildado cuando el documento que se encuentre en la línea sea una orden de compra, de lo contrario no aparecerá tildado.

![Campo](/assets/img/docs/balance-management/bam-balance-image255.png)

Imagen 42. Checklist Anticipo del Documento Orden de Pago desde Orden

Checklist **Transacción de Ventas** esté checklist aparecerá tildado cuando en la línea se encuentre un documento de ventas o CxC.

![Campo](/assets/img/docs/balance-management/bam-balance-image256.png)

Imagen 43. Checklist Transacción de Ventas del Documento Orden de Pago desde Orden

Campo **Importe Fuente** en este campo debe aparecer el total de la abierto de la orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image257.png)

Imagen 44. Campo Importe Fuente del Documento Orden de Pago desde Orden

Campo **Tipo de Conversión**, este campo tipo lista mostrará los tipos de conversión que se encuentren registrados en ADempiere, el tipo de conversión no es más que el tipo de índice el cual se le asociará el valor de las tasa o conversiones de monedas.

![Campo](/assets/img/docs/balance-management/bam-balance-image258.png)

Imagen 45. Campo tipo de Conversión del Documento Orden de Pago desde Orden

Campo **Tasa de Cambio** , este campo tipo lista mostrará las tasas de cambios que se encuentren asociadas al tipo de cambio seleccionado en el campo **Tipo de Conversión**, la tasa de cambio no es más que la conversión de una moneda con otra en un fecha determinada.

![Campo](/assets/img/docs/balance-management/bam-balance-image259.png)

Imagen 46. Campo Tasa de Cambio del Documento Orden de Pago desde Orden

Note

Estos dos campos **Tasa de Cambio** y **Tipo deConversióń** son utilizados en el caso de que se esté trabajando con documentos en moneda extranjera y se necesiten realizar los pagos con la moneda nacional.

Campo **Total del Pago** debe aparecer el monto a pagar de la orden, este monto puede ser editado ya para este caso el anticipo a realizar puede ser por el total o solo una parte del total de la orden, todo dependerá del acuerdo de pagos que tenga la compañía con el proveedor.

![Campo](/assets/img/docs/balance-management/bam-balance-image260.png)

Imagen 47. Total de Pago del Documento Orden de Pago desde Orden

Campo **Total Abierto** debe aparecer el total abierto que tiene la orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image261.png)

Imagen 48. Total Abierto del Documento Orden de Pago desde Orden

Checklist **Procesado**, esté al momento de crear la orden no estará tildado, cuando se generen los pagos desde el proceso Registro de Imprimir / Exportar Pagos, esté checklist aparecerá tildado.

![Campo](/assets/img/docs/balance-management/bam-balance-image262.png)

Imagen 49. Checklist Procesado del Documento Orden de Pago desde Orden

Campo **Total de Descuento** en este campo mostrará si la orden tiene un descuento o no.

![Campo](/assets/img/docs/balance-management/bam-balance-image263.png)

Imagen 50. Campo Total de Descuento del Documento Orden de Pago desde Orden

En el campo **Diferencia monto** debe aparecer la diferencia que pueda tener la orden entre el total abierto y el total a pagar.

![Campo](/assets/img/docs/balance-management/bam-balance-image264.png)

Imagen 51. Diferencia Monto del Documento Orden de Pago desde Orden

Note

El resultado o valor a mostrar en este campo dependerá de los valores colocados en el campo **Total del Pago** y **Total Abierto**, si los valores de saldo en ambos campos son iguales este campo debe estar en cero (0).

Una vez definido el monto que se desea pagar en cada de las órdenes y verificado que las órdenes seleccionadas desde la opción **Crear Desde Orden** estén en la pestaña **Línea de Selección de Pago**, se puede completar la **Orden de Pago**, para ello regrese a la pestaña principal **Selección de Pago** .

Ubique al finalizar la ventana, en el grupo de campo **Estado**, el botón que debe tener por nombre **Completar**.

![Campo](/assets/img/docs/balance-management/bam-balance-image265.png)

Imagen 52. Grupo de Estado del Documento Orden de Pago desde Orden

Note

El nombre del botón cambiará dependiendo del estado en el que se encuentre el documento si el documento se encuentra en estado **Borrador** la acción a mostrar en el botón es **Completar** caso que se está aplicando para este documento, si el estado del documento está en estado **Completo** el botón cambiará su nombre a la siguiente acción que se pueda aplicar en el documento.

Dar click al botón **Completar** y tildar **Ok** para la acción de documento seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image266.png)

Imagen 53. Botón Completar del Documento Orden de Pago desde Orden

Al aplicar esta acción **Completar** el documento pasará a estado completo y este no podrá ser modificado.

Note

Es muy importante tener en cuenta que todo documento transaccional una vez se culmine con el llenado de los datos debe ser completado, para que ADempiere tome como válido los datos cargados en el documento.

Hasta este punto llegaría el registro de órdenes a través de la ventana **Selección de Pago** con el tipo de documento **Orden de Pago** ya que solo se está creando la solicitud de los anticipos que se desean cancelar, en este paso a pesar de que se complete el documento esto no quiere decir que se han generado los pagos, para poder generar los pagos correspondientes a las órdenes asociadas a la **Orden de Pago** se necesita completar los procedimientos Registro desde Selección de Pago y el Registro de Imprimir / Exportar Pagos.

## Registro desde Factura

Para realizar una **Orden de Pagos** en ADempiere el cual permite montar una solicitud de todas aquellas facturas que estén pendientes por pagar, se deben aplicar los siguientes pasos:

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la ventana **Selección de Pagos**.

![Campo](/assets/img/docs/balance-management/bam-balance-image267.png)

Imagen 1. Menú de ADempiere para el Documento Orden de Pago desde Factura

Podrá visualizar la ventana **Selección de Pago**, con los diferentes registros en dicha ventana.

![Campo](/assets/img/docs/balance-management/bam-balance-image268.png)

Imagen 2. Ventana Selección de Pago para el Documento Orden de Pago desde Factura

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro en la ventana **Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image269.png)

Imagen 3. Icono Registro Nuevo de la Ventana Selección de Pago para el Documento Orden de Pago desde Factura

Seleccione en el campo **Organización**, la organización para la cual está realizando el documento **Orden de Pago**.

Al seleccionar la organización con la que trabajará el registro a crear bajo estará disponible únicamente bajo esa organización seleccionada, aunque la decisión de la organización a trabajar quedará al momento que inicie sesión en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image270.png)

Imagen 4. Campo Organización del Documento Orden de Pago desde Factura

Introduzca en el campo **No. del Documento**, el número de documento correspondiente a la secuencia de numeración del documento que esta realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image271.png)

Imagen 5. Campo Número de Documento del Documento Orden de Pago desde Factura

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para ejemplificar el registro es utilizado el tipo de documento **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image272.png)

Imagen 6. Campo Tipo de Documento del Documento Orden de Pago desde Factura

Seleccione en el campo **F. Documento**, la fecha en la cual se está generando el documento de orden de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image273.png)

Imagen 7. Campo F. Documento del Documento Orden de Pago desde Factura

Seleccione en el campo **Fecha de Pago**, la fecha en la cual se debe realizar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image274.png)

Imagen 8. Campo Fecha de Pago del Documento Orden de Pago desde Factura

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria desde la cual requiere generar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image275.png)

Imagen 9. Campo Cuenta Bancaria del Documento Orden de Pago desde Factura

Seleccione en el campo **Moneda**, la moneda para realizar la orden de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image276.png)

Imagen 10. Campo Moneda del Documento Orden de Pago desde Factura

Introduzca en el campo **Nombre de Referencia**, un nombre de referencia para la orden de pago que está realizando.

La información a colocar en este campo es una pequeña referencia de la orden pago que se esté creando por ejemplo: **Pago proveedores Servicios**.

![Campo](/assets/img/docs/balance-management/bam-balance-image277.png)

Imagen 11. Campo Nombre de Referencia del Documento Orden de Pago desde Factura

Introduzca en el campo **Descripción**, una breve descripción referente a la orden de pago que está realizando.

La información a colocar en este campo es una pequeña descripción de la orden de pago que se esté realizando por ejemplo: **Pagos a proveedores primera semana de Junio**

![Campo](/assets/img/docs/balance-management/bam-balance-image278.png)

Imagen 12. Campo Descripción del Documento Orden de Pago desde Factura

Seleccione la opción **Crear Desde Factura**, para crear la orden de pago desde la factura.

Al seleccionar el botón **Crear Desde Factura**, se desplegará otra ventana llamada Smart Browser (Ventana de Búsqueda Inteligente) donde podrá ubicar a las facturas que estén pendientes por pagar.

![Campo](/assets/img/docs/balance-management/bam-balance-image279.png)

Imagen 13. Opción Crear desde Factura del Documento Orden de Pago desde Factura

Podrá observar la siguiente ventana de búsqueda inteligente una serie de campos para ser utilizados como criterio de búsqueda.

![Campo](/assets/img/docs/balance-management/bam-balance-image280.png)

Imagen 14. Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Los campos a visualizar en el smart browser son los siguientes:

Campo **Cuenta Bancaria**, este es un campo tipo lista donde aparecerá el listado de las cuentas bancarias cargadas en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image281.png)

Imagen 15. Campo Cuenta Bancaria de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Moneda**, este campo se encuentra sólo lectura y la moneda a mostrar dependerá de la moneda seleccionada en la ventana padre **Selección de Pago**; la moneda que aparezca en ese campo dentro del smart browser le indica a ADempiere que los documentos a buscar deben estar bajo esa moneda, ejemplo:

Si el valor en el campo **Moneda\*** es \***\*VES** (Bolívar) cuando se realice la búsqueda los documentos ADempiere mostrara únicamente los que estén creados bajo esa moneda.

Si el valor en el campo **Moneda** es USD\*\* (Dólar) cuando se realice la búsqueda los documentos ADempiere mostrara únicamente los que estén creados bajo esa moneda.

![Campo](/assets/img/docs/balance-management/bam-balance-image282.png)

Imagen 16. Campo Moneda de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Regla de Pago**, este es un campo de búsqueda tipo lista el cual al tildarlo mostrará una serie de opciones de reglas de pagos, la opción a seleccionar en esté campo le indicará a ADempiere qué al momento de realizar la búsqueda ubique y muestre solo las facturas de compras que estén bajo la regla de pago seleccionada en ese campo,como por ejemplo:

Si se selecciona la regla de pago \***\* A Crédito\*\*** y tengo creadas una o varias facturas que tienen establecida esa regla de pago, al realizar la búsqueda desde el smart browser ADempiere mostrará las facturas que éste únicamente con esa regla de pago, si no existen facturas con esa regla de pago ADempiere no mostrará nada.

![Campo](/assets/img/docs/balance-management/bam-balance-image283.png)

Imagen 17. Campo Regla de Pago de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Término de Pago** este es un campo de búsqueda tipo lista el cual al tildarlo mostrará una serie de opciones de término de pago, la opción a seleccionar en esté campo le indicará a ADempiere qué al momento de realizar la búsqueda ubique y muestre solo las facturas de compras que estén bajo ese término de pago, seleccionado en ese campo,como por ejemplo:

Si se selecciona el término de pago **Contado** y tengo creadas una o varias facturas que tienen establecido ese término de pago, al realizar la búsqueda desde el smart browser ADempiere mostrará las facturas que éste únicamente con ese término de pago, si no existen facturas con ese término de pago ADempiere no mostrará nada.

![Campo](/assets/img/docs/balance-management/bam-balance-image284.png)

Imagen 18. Campo Término de Pago de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **En negociación** este campo es un campo tipo lista donde al seleccionar cualquiera de las opciones (Sí / No) ubicará las facturas que estén en negociación.

![Campo](/assets/img/docs/balance-management/bam-balance-image285.png)

Imagen 19. Campo en Negociación de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Sólo Vencidas** este campo es un campo tipo lista donde al seleccionar cualquiera de las opciones (Sí / No) ubicará las facturas que estén o no estén vencidas.

![Campo](/assets/img/docs/balance-management/bam-balance-image286.png)

Imagen 20. Campo Sólo Vencidas de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Orden de Venta**, en este campo tipo búsqueda al seleccionar una orden ya sea de venta o de compra, ubicara las facturas asociadas a esa orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image287.png)

Imagen 21. Campo Orden de Venta de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Fecha de la Facturación**, este campo es un campo tipo fecha el cual cuenta con dos recuadros con calendarios, el primero es para ser utilizado como fecha de la factura **Desde** y el segundo como fecha de la factura **Hasta**, al colocar una fecha en cualquiera de estas dos opciones (Fecha desde / Fecha hasta) ADempiere mostrará únicamente las facturas que están asociadas bajo ese rango de fechas, como por ejemplo:

Si se coloca en el campo fecha desde la fecha **18/06/2020** y el campo fecha hasta **20/06/2020**, ADempiere mostrar las facturas que estén bajo ese rango de fechas.

![Campo](/assets/img/docs/balance-management/bam-balance-image289.png)

Imagen 22. Campo Fecha de Facturación de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Note

Para saber más sobre el campo **Fecha Facturación** y qué acción implica sobre un documento por pagar, visitar el documento Registro de Documento por Pagar.

Campo de búsqueda **Fecha de Vencimiento** este campo es un campo tipo fecha el cual cuenta con dos recuadros con calendarios, el primero es para ser utilizada como fecha de vencimiento **Desde** y el segundo como fecha de vencimiento **Hasta**, al colocar una fecha en cualquiera de estas dos opciones (Fecha desde / Fecha hasta) ADempiere mostrará únicamente las facturas que están asociadas bajo ese rango de fechas, como por ejemplo:

Si se coloca en el campo fecha desde, la fecha **18/06/2020** y el campo fecha hasta **20/06/2020**, ADempiere mostrar las facturas que estén bajo ese rango de fechas; la fecha de vencimiento de una factura aplica más que todo para aquellas facturas las cuales cuentan con una regla de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image290.png)

Imagen 23. Campo Fecha de Vencimiento de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Días de Vencimiento** este campo es utilizado para colocar los días de vencimiento de una factura; estos días de vencimiento son configurados en la factura y aplica más que todo para aquellas facturas las cuales cuentan con una regla de pago a crédito.

![Campo](/assets/img/docs/balance-management/bam-balance-image291.png)

Imagen 24. Campo Días de Vencimiento de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Socio de Negocio**, este campo puede ser utilizado si desea ubicar las facturas que estén asociadas a un socio de negocio en específico.

![Campo](/assets/img/docs/balance-management/bam-balance-image292.png)

Imagen 25. Campo Socio de Negocio de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo **Tipo de Documento**, este es un campo de búsqueda tipo lista el cual al tildarlo mostrará una serie de opciones de los tipos de documentos que se encuentran asociados a las facturas, la opción a seleccionar en este campo le indicará a ADempiere qué al momento de realizar la búsqueda ubique y muestre sólo las facturas que estén bajo el tipo de documento seleccionado en ese campo, como por ejemplo:

Si se selecciona el tipo de documento **Factura de Cuentas por Pagar Nacional** ADempiere mostrará cuando se realice la búsqueda unicamente las facturas que estén asociadas a ese tipo de documento, de lo contrario si no es seleccionado ningún tipo de documento ADempiere mostrará todas las facturas con todos los tipos de documentos que estén asociados a una factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image293.png)

Imagen 26. Campo Tipo de Documento de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Asignar Requerimientos** este es un campo tipo lista, el cual contiene una serie de opciones el cual indica a ADempiere que dependiendo del requerimiento seleccionado ADempiere ubicara las facturas, dentro de los requerimientos de este campo están:

Ninguno: Si se selecciona este criterio de búsqueda, ADempiere ubicara todas las facturas en ADempiere , es decir ubicar las facturas que estén con órdenes o sin órdenes con recepciones o sin recepciones.

Orden de Compra: si se selecciona este criterio de búsqueda, ADempiere ubicara solo y únicamente las facturas que estén asociadas a una orden de compra, de lo contrario no mostrará ninguna factura.

Orden de Compra y Recibo: Si se selecciona este criterio de búsqueda, ADempiere ubicara solo y únicamente las facturas que tengan asociada una orden de compra y una recepción , de lo contrario no mostrará ninguna factura.

Recibo: Si se selecciona este criterio de búsqueda, ADempiere ubicara solo y únicamente las facturas que tengan asociada una recepción, de lo contrario no mostrará ninguna factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image294.png)

Imagen 27. Campo Asignar Requerimientos de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Sólo Descuento** Este campo es un campo tipo lista el cual indica sí requiere aplicar para la condición de búsqueda que muestre solo las facturas con descuento o que no muestre ninguna factura que contenga aplicado un descuento.

![Campo](/assets/img/docs/balance-management/bam-balance-image295.png)

Imagen 28. Campo Sólo Descuento de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Grupo de Socio del Negocio** Este es un campo tipo lista el cual al seleccionar cualquiera de las opciones a mostrar de un grupo de socio del negocio, se mostrará solo y únicamente las facturas que estén asociada a ese grupo de socio del negocio.

![Campo](/assets/img/docs/balance-management/bam-balance-image296.png)

Imagen 29. Campo Grupo de Socio del Negocio de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Campo de búsqueda **Factura** Este campo tipo búsqueda permite ubicar una factura en específico , para que al momento de tildar la opción comenzar la búsqueda esté muestre únicamente la información de la factura ubicada dentro de esté campo de búsqueda.

![Campo](/assets/img/docs/balance-management/bam-balance-image297.png)

Imagen 30. Campo Factura de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Dependiendo del criterio de búsqueda seleccionado tilde la opción **Comenzar Búsqueda**, para buscar las facturas de los socios del negocio proveedores.

![Campo](/assets/img/docs/balance-management/bam-balance-image298.png)

Imagen 31. Opción Comenzar Búsqueda

Al tildar la opción **Comenzar Búsqueda**, se desplegará en la parte inferior de la ventana las facturas que están pendientes por pagar.

![Campo](/assets/img/docs/balance-management/bam-balance-image299.png)

Imagen 32. Listado de Facturas

Seleccione las facturas que deseen asociar a la **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image300.png)

Imagen 33. Seleccionar Factura y Opción OK

Al seleccionar la factura indique cual es el total que se desea cancelar al proveedor de esa factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image301.png)

Imagen 23. Total a Cancelar

Seleccione la opción **OK**, para cargar a la pestaña **Línea de Selección de Pago** la información de las facturas seleccionadas.

![Campo](/assets/img/docs/balance-management/bam-balance-image302.png)

Imagen 36. Opción Ok de la Ventana de Búsqueda Inteligente del Proceso Crear Desde Factura

Seleccione el icono **Refrescar**, ubicado en la barra de herramientas de ADempiere para refrescar la ventana y pueda visualizar la información cargada desde la opción **Crear Desde Factura**.

![Campo](/assets/img/docs/balance-management/bam-balance-image303.png)

Imagen 37. Icono Refrescar del Documento Orden de Pago desde Factura

Seleccione la pestaña **Línea de Selección de Pago**, para verificar que la información cargada desde la opción **Crear Desde Factura** sea correcta.

![Campo](/assets/img/docs/balance-management/bam-balance-image304.png)

Imagen 38. Pestaña Línea de Selección de Pago del Documento Orden de Pago desde Factura

Note

En la pestaña **Línea de Selección de Pago** deberán aparecer las misma cantidad de facturas seleccionadas desde la opción **Crear Desde Factura**.

Podrá observar que en cada registro de la pestaña **Línea de Selección de Pago** aparecerán las siguientes características:

Campo **Selección de Pago** debe aparecer el número de la selección de pago con la que se está trabajando, este número es el número de documento de la orden de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image305.png)

Imagen 39. Campo Selección de Pago del Documento Orden de Pago desde Factura

Campo **No. Línea** este campo define el número de línea de cada registro asociado a la pestaña **Lńea Selección de Pago**, cada número de línea va incrementando de 10 en 10, es decir que sí existen 3 registros asociados en la pesta cada registro estar en 10, 20 y 30.

![Campo](/assets/img/docs/balance-management/bam-balance-image306.png)

Imagen 40. Campo N° Línea del Documento Orden de Pago desde Factura

Campo **Descripción** este campo puede ser utilizado si se requiere dar una descripción en el registro de la línea.

![Campo](/assets/img/docs/balance-management/bam-balance-image307.png)

Imagen 41. Campo Descripción del Documento Orden de Pago desde Factura

Checklist **Activo** esté checklist indica si el registro de la línea está activo o no.

![Campo](/assets/img/docs/balance-management/bam-balance-image308.png)

Imagen 42. Checklist Activo del Documento Orden de Pago desde Factura

En el campo **Socio del Negocio** debe aparecer el socio de negocio de la factura que se encuentra asociada al registro de la línea.

![Campo](/assets/img/docs/balance-management/bam-balance-image309.png)

Imagen 43. Socio de Negocio Factura del Documento Orden de Pago desde Factura

Campo **Cuenta Bancaria Socio del Negocio**, en este campo tipo lista deben aparecer las cuentas bancarias asociadas al socio del negocio, las cuentas bancarias a aparecer en este campo dependerá de las cuentas asociadas al momento de crear Registro de Proveedor.

La selección de la cuenta bancaria en este campo dependerá de las reglas del negocio que tenga la compañía con los proveedores.

![Campo](/assets/img/docs/balance-management/bam-balance-image310.png)

Imagen 44. Campo Cuenta Bancaria Socio del Negocio del Documento Orden de Pago desde Factura

Campo **Orden de Compra** para este caso no debe aparecer ninguna información ya que se está trabajando son con facturas, sí requiere realizar una **Orden de Pago** y asociar órdenes verificar el instructivo Registro desde Orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image311.png)

Imagen 45. Campo Orden de Compra del Documento Orden de Pago desde Factura

En el campo **Factura** debe aparecer el número del documento de la factura seleccionada desde opción **Crear Desde Factura**.

![Campo](/assets/img/docs/balance-management/bam-balance-image312.png)

Imagen 46. Campo Factura del Documento Orden de Pago desde Factura

Campo **Movimiento Nómina** para este caso no debe aparecer ninguna información ya que se está trabajando son con órdenes de compras, sí requiere realizar una **Orden de Pago** y asociar a un movimiento de nómina verificar el instructivo Registro desde Nómina.

![Campo](/assets/img/docs/balance-management/bam-balance-image313.png)

Imagen 47. Campo Movimento de Nómina del Documento Orden de Pago desde Factura

Campo **Regla de Pago** se debe seleccionar la regla de pago con la que se emitirá el pago al proveedor.

ADempiere cuenta cuenta con cinco (5) reglas de pagos, las cuales son:

A crédito: esta regla de pago indica que dicho documento cuenta con un crédito de pago, sin embargo es crédito no es reflejado en la orden de pago si no en la regla de pago que tenga establecida el **Socio del Negocio** o la **Orden de Compra**.

Débito directo. está regla de pago indica que el pago a generar es un débito directo, lo cual en pocas palabras es una transferencia bancaria.

Depósito directo: está regla de pago indica que el pago a generar es un depósito directo, está regla también entraría dentro de transferencia bancaria.

Cheque: está regla de pago indica qué el pago a generar es a través de cheques bancarios.

Tarjeta de crédito: está regla de pago indica qué el pago a generar es a través de tarjeta de crédito.

![Campo](/assets/img/docs/balance-management/bam-balance-image314.png)

Imagen 48. Campo Regla de Pago del Documento Orden de Pago desde Factura

Campo **Programa de Pago de Factura** se debe seleccionar el programa de pago que posea la factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image315.png)

Imagen 49. Campo Programa de Pago del Documento Orden de Pago desde Factura

Campo **Cargo** se debe seleccionar el cargo qué desee asociar al registro de la línea de la selección de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image316.png)

Imagen 50. Campo Cargo del Documento Orden de Pago desde Factura

Checklist **Anticipo** aparecerá tildado cuando el documento que se encuentre en la línea sea una orden de compra, de lo contrario no aparecerá tildado.

![Campo](/assets/img/docs/balance-management/bam-balance-image317.png)

Imagen 51. Checklist Anticipo del Documento Orden de Pago desde Factura

Checklist **Transacción de Ventas** esté checklist aparecerá tildado cuando en la línea se encuentre un documento de ventas o CxC.

![Campo](/assets/img/docs/balance-management/bam-balance-image318.png)

Imagen 52. Checklist Transacción de Ventas del Documento Orden de Pago desde Factura

Campo **Importe Fuente** en este campo debe aparecer el total de la abierto de la orden.

![Campo](/assets/img/docs/balance-management/bam-balance-image319.png)

Imagen 53. Campo Importe Fuente del Documento Orden de Pago desde Factura

Campo **Tipo de Conversión**, este campo tipo lista mostrará los tipos de conversión que se encuentren registrados en ADempiere, el tipo de conversión no es más que el tipo de índice el cual se le asociará el valor de las tasa o conversiones de monedas.

![Campo](/assets/img/docs/balance-management/bam-balance-image320.png)

Imagen 54. Campo tipo de Conversión del Documento Orden de Pago desde Factura

Campo **Tasa de Cambio** , este campo tipo lista mostrará las tasas de cambios que se encuentren asociadas al tipo de cambio seleccionado en el campo **Tipo de Conversión**, la tasa de cambio no es más que la conversión de una moneda con otra en un fecha determinada.

![Campo](/assets/img/docs/balance-management/bam-balance-image321.png)

Imagen 55. Campo Tasa de Cambio del Documento Orden de Pago desde Factura

Note

Estos dos campos **Tasa de Cambio** y **Tipo deConversióń** son utilizados en el caso de que se esté trabajando con documentos en moneda extranjera y se necesiten realizar los pagos con la moneda nacional.

En el campo **Total del Pago** debe aparecer el monto a pagar de la factura, este monto puede ser editado ya que en algunos casos las facturas suelen ser pagadas de forma parcial, todo dependerá del acuerdo de pagos que tenga la compañía con el proveedor.

![Campo](/assets/img/docs/balance-management/bam-balance-image322.png)

Imagen 56. Total de Pago del Documento Orden de Pago desde Factura

En el campo **Total Abierto** debe aparecer el total abierto que tiene la factura, si la factura ha sido pagada de manera parcial el total pendiente por pagar aparecerá en este campo.

![Campo](/assets/img/docs/balance-management/bam-balance-image323.png)

Imagen 57. Total de Abierto del Documento Orden de Pago desde Factura

Checklist **Procesado**, esté al momento de crear la orden no estará tildado, cuando se generen los pagos desde el proceso Registro de Imprimir / Exportar Pagos, esté checklist aparecerá tildado.

![Campo](/assets/img/docs/balance-management/bam-balance-image324.png)

Imagen 58. Checklist Procesado del Documento Orden de Pago desde Factura

Campo **Total de Descuento** en este campo mostrará si la orden tiene un descuento o no.

![Campo](/assets/img/docs/balance-management/bam-balance-image325.png)

Imagen 59. Campo Total de Descuento del Documento Orden de Pago desde Factura

En el campo **Diferencia monto** debe aparecer la diferencia que pueda tener una factura entre el total abierto y el total a pagar.

![Campo](/assets/img/docs/balance-management/bam-balance-image326.png)

Imagen 60. Diferencia Monto del Documento Orden de Pago desde Factura

Note

El resultado o valor a mostrar en este campo dependerá de los valores colocados en el campo **Total del Pago** y **Total Abierto**, si los valores de saldo en ambos campos son iguales este campo debe estar en cero (0).

Una vez definido el monto que se desea pagar en cada factura y verificado que las facturas seleccionadas desde la opción **Crear Desde Factura** estén en la pestaña **Línea de Selección de Pago** se puede completar la **Orden de Pago** para ello regrese a la ventana principal **Selección de Pago**.

Ubique al finalizar la ventana en el grupo de campo **Estado** y el botón que debe tener por nombre **Completar**

![Campo](/assets/img/docs/balance-management/bam-balance-image327.png)

Imagen 61. Grupo de Estado del Documento Orden de Pago desde Factura

Note

El nombre del botón cambiará dependiendo del estado en el que se encuentre el documento si el documento se encuentra en estado **Borrador** la acción a mostrar en el botón es **Completar** caso que se está aplicando para este documento, si el estado del documento está en estado **Completo** el botón cambiará su nombre a la siguiente acción que se pueda aplicar en el documento.

Dar click a botón **Completar** y tildar **Ok** para la acción de documento seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image328.png)

Imagen 62. Botón Completar del Documento Orden de Pago desde Factura

Al aplicar esta acción **Completar** el documento pasará a estar completo y este no podrá ser modificado.

Note

Es muy importante tener en cuenta que todo documento transaccional una vez se culmine con el llenado de los datos debe ser completado, para que ADempiere tome como válido los datos cargados en el documento.

Hasta este punto llegaría el registro de factura a través de la ventana **Selección de Pago** con el tipo de documento **Orden de Pago** ya que solo se está creando la solicitud de los facturas que están pendientes por pagar y necesitan ser canceladas, en este paso a pesar de que se complete el documento esto no quiere decir que se han generado los pagos, para poder generar los pagos correspondientes a las facturas asociadas a la **Orden de Pago** se necesita completar el procedimiento Registro desde Selección de Pago y el Registro de Imprimir / Exportar Pagos.

## Registro desde Nómina

La selección de pagos de nómina representa una de las formas que requiere ADempiere para que usted registre el pago de la nómina a los empleados, luego de que usted completó la nómina de los empleados y está seguro de que todos los cálculos obtenidos son correctos, previa visualización en el reporte de nómina, debe comenzar el proceso donde registre los pagos de cada uno de los empleados.

Lo primero que debe hacer es dirigirse a la ventana **Selección de Pagos**, ubicada dentro de la carpeta principal del menú llamada **Gestión de Saldos Pendientes**.

Registre los datos principales del pago con la siguiente información:

Seleccione en el campo Tipo de Documento la opción **Selección de Pagos Nóminas**, el tipo de documento determina la acción a realizar del documento dentro de ADempiere.

Seleccione en el campo **Fecha del Documento** la fecha en la que está realizando el documento, se recomienda utilizar la misma fecha contable con la que registró el proceso de nómina

Seleccione en el campo **Fecha de Pago** la fecha de pago del documento. La fecha de pago determina la fecha en que se generarán los pagos dentro de ADempiere, es fundamental ya que en muchos casos esa será la fecha en la qué se generará el txt del banco, cualquier variación en la misma podría ocasionar que esté documento no sea aceptado por el mismo, se recomienda que la selección de pago se realice el mismo día en que subirá el txt al banco.

Luego debe seleccionar en el Campo **Cuenta Bancaria** la Cuenta Bancaria que se va a disponer para el pago de la nómina, en este caso será una caja y estará identificada con el Nombre del Banco y al final de este llevará la palabra Tránsito. La Cuenta Bancaria identifica la cuenta del banco de la cual se van a emitir los pagos a los empleados

En el campo **Nombre de Referencia** puede colocarle un nombre referencia qué le ayude a identificar claramente la selección de pago, por ejemplo: Selección de Pago de la Nómina Semanal

En el campo **Descripción** puede colocar también una breve descripción de la selección de pago, por ejemplo: Selección de pago de la nómina semanal del 01/06/2020 hasta el 07/06/2020

![Campo](/assets/img/docs/balance-management/bam-balance-image329.png)

Imagen 1. Selección de Pago

Posteriormente usted debe seleccionar el campo que dice **Crear a partir del Movimiento de Recursos Humanos** este campo le indica que va a seleccionar los pagos de la nómina que desea cancelar. Inmediatamente le aparecerá una ventana con distintos filtros debido a que en ese momento puede tener diferentes procesos de nómina completos estos filtros que se detallan a continuación le ayudarán a encontrar de una manera más eficaz del proceso de nómina que se desea cancelar, entre ellos podemos seleccionar:

![Campo](/assets/img/docs/balance-management/bam-balance-image330.png)

Imagen 2. Campo Crear a Partir de Movimiento de Movimiento de Recursos Humanos

Nómina: Seleccione el tipo de nómina que desea cancelar, esta opción le permite filtrar todos los procesos de nóminas de este tipo que estén completos

Proceso de Nómina: coloque el número del documento del proceso de nómina que se cancelará. Con estos 2 filtros encontrará exactamente la cantidad de socios de negocios que posee la nómina conjuntamente con el concepto de neto a pagar procesado a cada uno de ellos. Cabe acotar que para que usted pueda visualizar el proceso de nómina esté debe estar en estado completo

![Campo](/assets/img/docs/balance-management/bam-balance-image331.png)

Imagen 3. Búsqueda de Nómina

Luego de seleccionar estos filtros se le desplegará una lista con la cantidad de empleados a los cuales se les procesó la nómina, conjuntamente con el nombre de los empleados estará acompañada el concepto de neto a pagar que se le calculó a cada empleado. Puede tildar cada uno de los empleados o tildar el primer recuadro que aparece antes de la lista de todos los empleados, para seleccionarlos todos automáticamente.

Presione el check de OK.

![Campo](/assets/img/docs/balance-management/bam-balance-image332.png)

Imagen 4. Selección de Movimiento de Nómina

Diríjase a la pestaña **Línea de Selección de Pago**, en esta ventana verificaremos que estén correctamente todos los montos que le fueron asignados a cada empleado, es decir que en el concepto neto a pagar esté la cantidad correcta, además de esto usted debe verificar que se encuentren todos los empleados. Otro de los factores que debe tener en cuenta es que la regla del pago de los empleados sea Débito Directo, sí el empleado no tiene está regla de pago no serán regenerados por pagos para esté empleado, para conocer cómo determinar la regla de pago puede dirigirse al documento Pestaña Detalle de Pago en el cual se le detallan todos los pagos a seguir para configurar la regla de pago del socio de negocio empleado.

![Campo](/assets/img/docs/balance-management/bam-balance-image333.png)

Imagen 5. Linea Selección de Pago

Seleccione nuevamente la ventana principal Selección de Pago y verifique en el campo **Total Total** aparezca el monto total de lo que usted va a cancelar en su nómina.

![Campo](/assets/img/docs/balance-management/bam-balance-image334.png)

Imagen 6. Campo Total Total

Sí todos los datos descritos a continuación están correctos proceda a completar la selección de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image335.png)

Imagen 7. Completar la Selección

Note

Para este ejemplo de Selección de Pago se utilizó la cuenta de la caja asociada al Banco Nacional de Crédito.

## Registro desde Selección de Pago

Para realizar una **Selección de Pago** la cual se encarga de definir de qué cuenta bancaria de la compañía saldrán los pagos pendientes a proveedores se deben realizar los siguientes pasos:

Note

Es muy importante tener en cuenta que para poder seguir el paso a paso que se detalla a continuación se debe tener previamente cargada en ADempiere la **Orden de Pago** si no se encuentra cargado en ADempiere pueden consultar el instructivo Registro desde Factura o Registro desde Orden

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la ventana **Selección de Pagos**.

![Campo](/assets/img/docs/balance-management/bam-balance-image336.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Selección de Pago**, en la cual debe seleccionar el icono **Registro Nuevo** ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image337.png)

Imagen 2. Icono Registro Nuevo del Documento Registro desde Selección de Pago

Seleccione en el campo **Organización**, la organización para la cual está realizando el documento **Selección de Pago**.

Al seleccionar la organización con la que trabajará el registro a crear estará disponible únicamente bajo esa organización seleccionada, aunque la decisión de la organización a trabajar quedará al momento que inicie sesión en ADempiere.

![Campo](/assets/img/docs/balance-management/bam-balance-image338.png)

Imagen 3. Campo Organización del Documento Registro desde Selección de Pago

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para ejemplificar el registro es utilizado el tipo de documento **Selección de Pagos de Cuentas por Pagar**.

![Campo](/assets/img/docs/balance-management/bam-balance-image339.png)

Imagen 4. Campo Tipo de Documento del Documento Registro desde Selección de Pago

Seleccione en el campo **F. Documento**, la fecha en la cual se está generando el documento de selección de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image340.png)

Imagen 5. Campo F. Documento

Seleccione en el campo **Fecha de Pago**, la fecha en la cual se debe realizar el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image341.png)

Imagen 6. Campo Fecha de Pago del Documento Registro desde Selección de Pago

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria desde la cual se le realizará el pago al socio del negocio proveedor. Para ejemplificar el registro es utilizada la cuenta **Mercantil C.A. Banco Universal - 0105_0105-000000000000000**.

![Campo](/assets/img/docs/balance-management/bam-balance-image342.png)

Imagen 7. Campo Cuenta Bancaria del Documento Registro desde Selección de Pago

Introduzca en el campo **Nombre de Referencia**, un nombre de referencia de la selección de pago que está realizando.

La información a colocar en este campo es una pequeña referencia de la selección de pago que se esté creando por ejemplo: **Pago Proveedores Servicios**.

![Campo](/assets/img/docs/balance-management/bam-balance-image343.png)

Imagen 8. Campo Nombre de Referencia del Documento Registro desde Selección de Pago

Introduzca en el campo **Descripción**, una breve descripción referente a la selección de pago que está realizando.

La información a colocar en este campo es una pequeña descripción de la selección de pago que se esté realizando por ejemplo: **Pagos a proveedores primera semana de Julio por el banco Mercantil**

![Campo](/assets/img/docs/balance-management/bam-balance-image344.png)

Imagen 9. Campo Descripción del Documento Registro desde Selección de Pago

Seleccione la opción **Crear Desde Selección de Pago**, para crear la selección de pago desde la solicitud de pago creada anteriormente.

![Campo](/assets/img/docs/balance-management/bam-balance-image345.png)

Imagen 10. Opción Crear Desde Selección de Pago del Documento Registro desde Selección de Pago

Al seleccionar el botón **Crear Desde Selección de Pago**, se desplegará otra ventana llamada Smart Browser (Ventana de Búsqueda Inteligente) donde podrá ubicar a las **Órdenes de Pago** cargadas en ADempiere. Podrá observar en la siguiente ventana de búsqueda inteligente una serie de campos para ser utilizados como criterio de búsqueda.

![Campo](/assets/img/docs/balance-management/bam-balance-image346.png)

Imagen 11. Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Los campos a visualizar en el smart browser son los siguientes:

Campo **Selección de Pago**, permite filtrar la búsqueda por la orden de pago previamente realizada. Para este caso seleccione el criterio de búsqueda **Selección de Pago** para ubicar las **Orden de Pago** la cual tiene los documentos que necesitan ser cancelados.

Al desplegar el campo **Selección de Pago** podrá observar las **Órdenes de Pago** qué se encuentran en estado completo, o también las **Órdenes de Pago** que los documentos que posee aún no se encuentran asociados en su totalidad con una orden **Selección de Pago** ya que dependiendo de la forma de pago y el saldo con el que cuente el banco asociado a la selección de pago en la ventana padre se decide cuales son los documentos que serán cancelados por ese banco.

![Campo](/assets/img/docs/balance-management/bam-balance-image347.png)

Imagen 12. Campo Selección de Pago de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Campo **Socio del Negocio**, permite filtrar la búsqueda por el socio del negocio seleccionado.

![Campo](/assets/img/docs/balance-management/bam-balance-image348.png)

Imagen 13. Campo Socio del Negocio de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Campo **Factura**, permite filtrar la búsqueda por la factura previamente realizada.

Es decir al colocar una factura en específico en el campo **Factura**, ADempiere traerá la **Orden de Pago** que ese asociada a esa factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image349.png)

Imagen 14. Campo Factura de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Campo **Regla de Pago**, permite filtrar la búsqueda de los documentos que posean la regla de pago seleccionada y que se encuentren asociada a una **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image350.png)

Imagen 15. Campo Regla de Pago de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Campo **Orden de Venta**, permite filtrar la búsqueda por la orden de venta previamente realizada.

Es decir al colocar una orden en específico en el campo **Orden de Venta**, ADempiere traerá las ordenes que se encuentren asociada a una **Orden de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image351.png)

Imagen 16. Campo Orden de Venta de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Campo **Cargo**, permite filtrar la búsqueda por el cargo previamente seleccionado en la factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image352.png)

Imagen 17. Campo Cargo de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Dependiendo del criterio de búsqueda seleccionado tilde la opción **Comenzar Búsqueda**, para ubicar los documentos los cuales pertenecerán a la selección de pagos para ser cancelados.

![Campo](/assets/img/docs/balance-management/bam-balance-image353.png)

Imagen 18. Opción Comenzar Búsqueda de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Al tildar la opción **Comenzar Búsqueda**, se desplegará en la parte inferior de la ventana los documentos asociados a la **Orden de Pagos** seleccionada anteriormente.

![Campo](/assets/img/docs/balance-management/bam-balance-image354.png)

Imagen 19. Listado de Documento por Pagar de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Seleccione los documentos que deseen asociar a la **Selección de Pago**.

La selección de los documentos dependerá de la toma de decisión que tenga el personal de tesorería, ya que dependiendo del banco asociado a la selección de pago ellos sabrán qué documentos podrán ser cancelados por ese banco y la regla de pago con la que contará ya que estos deben ser agrupados sí los pagos serán por transferencia solo se deben seleccionar los documentos que se les generarán los pagos por transferencia (Débito Directo) sí en tal caso serán cancelados por cheques deben ser seleccionado solo los que serán cancelados por esa regla de pago; si los documentos asociados a la **Orden de Pago** no son seleccionados en su totalidad para esta selección de pago, estos pueden ser asociados en otra seleccion de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image355.png)

Imagen 20. Seleccionar Factura de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Seleccione la opción **OK**, para cargar a la pestaña **Línea de Selección de Pago** la información de la solicitud de pago realizada anteriormente.

![Campo](/assets/img/docs/balance-management/bam-balance-image356.png)

Imagen 21. Opción OK de la Ventana de Búsqueda Inteligente del Proceso Crear desde la Selección de Pago

Seleccione el icono **Refrescar**, ubicado en la barra de herramientas de ADempiere para refrescar la ventana y pueda visualizar la información cargada desde la opción **Crear Desde Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image357.png)

Imagen 22. Icono Refrescar del Documento Registro desde Selección de Pago

Seleccione la pestaña **Línea de Selección de Pago**, para verificar que la información cargada desde la opción **Crear Desde Selección de Pago** sea correcta.

![Campo](/assets/img/docs/balance-management/bam-balance-image358.png)

Imagen 23. Pestaña Línea de Selección de Pago del Documento Registro desde Selección de Pago

Note

En la pestaña **Línea de Selección de Pago** deberán aparecer las misma cantidad de los documentos seleccionadas desde la opción **Crear Desde Selección de Pago**.

Podrá observar que en cada registro de la pestaña **Línea de Selección de Pago** aparecerán las siguientes características:

Campo **Selección de Pago** debe aparecer el número de la selección de pago con la que se está trabajando, este número es el número de documento de la selección de pago.

Campo **No. Línea** este campo define el número de línea de cada registro asociado a la pestaña **Lńea Selección de Pago**, cada número de línea va incrementando de 10 en 10, es decir que sí existen 3 registros asociados en la pestaña, cada registro debe estar en 10, 20 y 30.

Campo **Descripción** este campo puede ser utilizado si se requiere dar una descripción en el registro de la línea.

Checklist **Activo** esté check indica si el registro de la línea está activo o no.

En el campo **Socio del Negocio** debe aparecer el socio de negocio del documento que se encuentra asociada al registro de la línea.

![Campo](/assets/img/docs/balance-management/bam-balance-image359.png)

Imagen 24. Socio de Negocio del Documento Registro desde Selección de Pago

Sí el documentos asociado pertenece a una factura en el campo **Factura** debe aparecer el número del documento de la factura seleccionada desde opción **Crear Desde Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image360.png)

Imagen 25. Factura Cuentas por Pagar del Documento Registro desde Selección de Pago

Sí el documentos asociado pertenece a una orden de compra en el campo **Orden de Compra** debe aparecer el número del documento de la orden seleccionada desde opción **Crear Desde Selección de Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image361.png)

Imagen 26. Orden de Compra del Documento Registro desde Selección de Pago

En el campo **Regla de Pago** se debe seleccionar la regla de pago con la que se emitirá el pago al proveedor.

ADempiere cuenta cuenta con cinco (5) reglas de pagos, las cuales debe ser utilizadas de las siguientes manera:

Para lo pagos que serán generados a través de transferencia bancarias se deben tildar las siguientes reglas de pago:

A crédito.

Débito directo.

Depósito directo.

Para los pagos que serán generados a través de cheques o tarjetas se deben utilizar las siguientes reglas de pago:

A crédito.

Cheque.

Tarjeta de crédito.

En una **Selección de Pagos de Cuentas por Pagar** no se pueden mezclar los métodos de pagos es decir, si los pagos a realizar son solo transferencia bancaria solamente se deben seleccionar los documentos que se les realizará los pagos por transferencia bancaria y asociar las reglas de pagos correspondientes, si los pagos a generar son a través de cheques o tarjetas sólo se deben crear una selección de pagos para este método de pago, no se pueden asociar asociar un método de pago de transferencia con cheques ya que esto alteraría el proceso de Registro de Imprimir / Exportar Pagos

![Campo](/assets/img/docs/balance-management/bam-balance-image362.png)

Imagen 27. Regla de Pago del Documento Registro desde Selección de Pago

El Checklist **Anticipo** aparecerá tildado cuando el documento que se encuentre en la línea sea una orden de compra, de lo contrario no aparecerá tildado.

![Campo](/assets/img/docs/balance-management/bam-balance-image363.png)

Imagen 28. Checklist Anticipo del Documento Registro desde Selección de Pago

En el campo **Total del Pago** debe aparecer el monto a pagar del documento asociado a la línea, el monto a mostrar es el mismo que fue establecido en la **Orden de Pago**

![Campo](/assets/img/docs/balance-management/bam-balance-image364.png)

Imagen 29. Total de Pago del Documento Registro desde Selección de Pago

En el campo **Total Abierto** debe aparecer el total abierto que tiene la factura, si la factura ha sido pagada de manera parcial el total pendiente por pagar aparecerá en este campo.

![Campo](/assets/img/docs/balance-management/bam-balance-image365.png)

Imagen 30. Total de Abierto del Documento Registro desde Selección de Pago

En el campo **Diferencia monto** debe aparecer la diferencia que pueda tener una factura entre el total abierto y el total a pagar.

![Campo](/assets/img/docs/balance-management/bam-balance-image366.png)

Imagen 31. Diferencia Monto del Documento Registro desde Selección de Pago

Note

El resultado o valor a mostrar en este campo dependerá de los valores colocados en el campo **Total del Pago** y **Total Abierto**, si los valores de saldo en ambos campos son iguales este campo debe estar en cero (0).

Una verificado los documentos seleccionadas desde la opción **Crear Desde Selección de Pago** estén en la pestaña **Línea de Selección de Pago** se puede completar la **Selección de Pago** para ello regrese a la ventana principal **Selección de Pago** .

Ubique al finalizar la ventana en el grupo de campo **Estado** y el botón que debe tener por nombre **Completar**

![Campo](/assets/img/docs/balance-management/bam-balance-image367.png)

Imagen 32. Grupo de Estado del Documento Registro desde Selección de Pago

Note

El nombre del botón cambiará dependiendo del estado en el que se encuentre el documento si el documento se encuentra en estado **Borrador** la acción a mostrar en el botón es **Completar** caso que se está aplicando para este documento, si el estado del documento está en estado **Completo** el botón cambiará su nombre a la siguiente acción que se pueda aplicar en el documento.

Dar click a botón **Completar** y tildar **Ok** para la acción de documento seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image368.png)

Imagen 33. Botón Completar del Documento Registro desde Selección de Pago

Al aplicar esta acción **Completar** el documento pasará a esta completo y este no podrá ser modificado.

Note

Es muy importante tener en cuenta que todo documento transaccional una vez se culmine con el llenado de los datos debe ser completado, para que ADempiere tome como válido los datos cargados en el documento.

Hasta este punto llegaría el registro y la definición de los documentos que serán cancelados a través de una **Selección de Pago**, este paso a pesar de que se complete no garantiza que los pagos se han generados, para poder generar los pagos correspondientes a cada uno de los documentos asociados se necesita completar el procedimiento Registro de Imprimir / Exportar Pagos
