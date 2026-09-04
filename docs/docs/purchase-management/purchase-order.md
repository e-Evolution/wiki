---
title: Órdenes de Compra
category: Documentation
star: 9
article: false
---

Esta documentación está destinada a definir cada uno de los procedimientos de la elaboración de órdenes de compra en ADempiere para cualquier organización, es importante seguir al pie de la letra cada uno de los procedimientos descritos aquí recuerde que de eso dependerá el buen uso del ERP.

- Crear Orden de Compra desde Requisición
  - Registro de Orden de Compra desde Requisición
  - Consultar y Completar Orden de Compra Generada
- Crear Orden de Compra desde Líneas de la Requisición
  - Crear Orden de Compra desde Líneas de la Requisición
- Orden de Compra Directa
  - Registro de Orden de Compra Directa
- Orden de Compra Multimoneda

## Crear Orden de Compra desde Requisición

En ADempiere es posible generar automáticamente mediante el proceso **Crear OC desde Requisición**, un documento de **Orden de Compra** con la información suministrada en el documento de **Requisición** previamente elaborado.

La ventana del proceso **Crear OC desde Requisición**, contiene diferentes campos que permiten generar la orden de compra según lo seleccionando en los mismos.

El proceso consiste en seleccionar el documento de requisición en el campo **Requisición de Material** y culminar el mismo seleccionando la opción **OK** para que posteriormente sea generado el documento **Orden de Compra**, indicando en la ventana del proceso el número de dicho documento.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere una orden de compra desde una requisición, en su versión 3.9.2 para la localización Venezuela.

- Registro de Orden de Compra desde Requisición
- Consultar y Completar Orden de Compra Generada

### Registro de Orden de Compra desde Requisición

Para ejemplificar el registro de crear orden de compra desde requisición, es utilizado el documento de requisición **RCN-1000004**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image315.png)

Imagen 1. Documento de Requisición

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione el proceso **Crear OC desde Requisición**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image316.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana del proceso **Crear OC desde Requisición** con diferentes campos que pueden ser utilizados para generar la orden de compra según lo requerido por el usuario.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image317.png)

Imagen 3. Ventana del Proceso Crear OC desde Requisición

Seleccione en el campo **Requisición de Material**, el documento de requisición por el cual será generado el documento de **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image318.png)

Imagen 4. Campo Requisición de Material

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image319.png)

Imagen 5. Campo Organización

Seleccione en el campo **Almacén**, el nombre del almacén donde serán almacenados los productos registrados en el documento de requisición seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image320.png)

Imagen 6. Campo Almacén

Note

Para generar una orden de compra desde una requisición determinada, los campos principales son **Requisición de Material**, **Organización** y **Almacén**. La selección de los campos **F. Documento**, **Fecha Requerida**, **Prioridad**, **Usuario**, **Producto**, **Categoría del Producto** y **Grupo de Socio del Negocio**, quedan a criterio de lo requerido por el usuario. De igual forma el checklist **Consolidado en un Documento**.

Seleccione la opción **OK**, para generar la orden de compra desde la requisición seleccionada anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image321.png)

Imagen 7. Opción OK

Podrá visualizar en la ventana del proceso **Crear OC desde Requisición**, el número del documento de **Orden de Compra** generado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image322.png)

Imagen 8. Ventana del Proceso Crear OC desde Requisición con el Número de Documento Generado

### Consultar y Completar Orden de Compra Generada

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image323.png)

Imagen 9. Menú de ADempiere

Al buscar el documento **Orden de Compra** con ayuda del número de documento generado en la ventana del proceso **Crear OC desde Requisición**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image324.png)

Imagen 10. Orden de Compra Generada desde el Proceso Crear OC desde Requisición

Note

El proceso genera el documento **Orden de Compra** en estado **Borrador** y la opción establecida de estado del documento es **Preparar**.

Seleccione en el campo **Agente Compañía**, el usuario que esta realizando la orden de compra. Para ejemplificar el registro es utilizado el agente de compañía **Compañía Estándar C.A.**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image325.png)

Imagen 11. Campo Agente Compañía

Seleccione la pestaña **Línea Orden Compra**, para ingresar el precio unitario de los productos solicitados.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image326.png)

Imagen 12. Pestaña Línea Orden Compra

Introduzca en el campo **Precio**, el precio unitario de los productos solicitados en el documento **Requisición**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image327.png)

Imagen 13. Campo Precio

Seleccione la pestaña **Orden de Compra** para regresar a la ventana principal del registro, luego seleccione la opción **Preparar**, ubicado en la parte inferior derecha del documento para completar el mismo.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image328.png)

Imagen 14. Opción Preparar

Seleccione la acción **Completar** y la opción **OK**, para completar el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image329.png)

Imagen 15. Acción Completar y Opción OK

### Crear Orden de Compra desde Líneas de la Requisición

En ADempiere es posible generar automáticamente mediante el proceso **Crear Orden de Compra desde Líneas de la Requisición**, un documento de **Orden de Compra** con la información suministrada en el documento de **Requisición** previamente elaborado.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere una orden de compra desde las líneas de la requisición.

Crear Orden de Compra desde Líneas de la Requisición

### Crear Orden de Compra desde Líneas de la Requisición

Para ejecutar el procedimiento de manera correcta, debe existir obligatoriamente un registro de requisición en estado **Completo. En este caso, se tiene como ejemplo la requisición **RCN-4\*\*.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image330.png)

Imagen 1. Requisición

Dicha requisición contiene cuatro (4) líneas.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image331.png)

Imagen 2. Pestaña Línea Requisición

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione el proceso **Crear Orden de Compra desde líneas de la Requisición**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image332.png)

Imagen 3. Menú de ADempiere

Podrá visualizar la ventana del proceso **Crear Orden de Compra desde líneas de la Requisición**, con diferentes campos que le permite al usuario filtrar la información en base a lo requerido para generar la orden de compra con las líneas seleccionadas de dicha requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image333.png)

Imagen 4. Ventana del Proceso Crear Orden de Compra desde Líneas de Requisición

Introduzca en el campo **No. del Documento**, el número de documento de la requisición por la cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image334.png)

Imagen 5. Campo No. del Documento

Seleccione en el campo **Organización**, la organización para la fue realizada la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image335.png)

Imagen 6. Campo Organización

Seleccione en el campo **Tipo de Documento**, el tipo de documento con el cual fue generada la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image336.png)

Imagen 7. Campo Tipo de Documento

Seleccione en el campo **Prioridad**, la prioridad con la cual fue generada la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image337.png)

Imagen 8. Campo Prioridad

Seleccione en el campo **Fecha Requerida**, la fecha en la que fueron requeridos los productos cargados a las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image338.png)

Imagen 9. Campo Fecha Requerida

Seleccione en el campo **F. Documento**, la fecha en la que fue generado el documento de requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image339.png)

Imagen 10. Campo F. Documento

Seleccione en el campo **Usuario**, el usuario que genero el documento de requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image340.png)

Imagen 11. Campo Usuario

Seleccione en el campo **Almacén**, el almacén utilizado para generar la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image341.png)

Imagen 12. Campo Almacén

Seleccione en el campo **Lista de Precios**, la lista de precios utilizada para generar la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image342.png)

Imagen 13. Campo Lista de Precios

Introduzca en el campo **Descripción**, la descripción ingresada en la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image343.png)

Imagen 14. Campo Descripción

Introduzca en el campo **Total de Líneas**, el total de las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image344.png)

Imagen 15. Campo Total de Líneas

Seleccione en el campo **Socio del Negocio**, el socio del negocio seleccionado en las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image345.png)

Imagen 16. Campo Socio del Negocio

Seleccione en el campo **Orden de Venta**, la orden de venta relacionada a la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image346.png)

Imagen 17. Campo Orden de Venta

Seleccione en el campo **Producto**, el producto seleccionado en las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image347.png)

Imagen 18. Campo Producto

Seleccione en el campo **Cargo**, el cargo relacionado a la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image348.png)

Imagen 19. Campo Cargo

Introduzca en el campo **Cantidad**, la cantidad del producto ingresada en las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image349.png)

Imagen 20. Campo Cantidad

Introduzca en el campo **Neto de Línea**, el neto de la línea de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image350.png)

Imagen 21. Campo Neto de Línea

Seleccione en el campo **Organización de la Transacción**, la organización de la transacción de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image351.png)

Imagen 22. Campo Organización de la Trans.

Seleccione en el campo **Actividad**, la actividad por la cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image352.png)

Imagen 23. Campo Actividad

Seleccione en el campo **Campaña**, la campaña por la cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image353.png)

Imagen 24. Campo Campaña

Seleccione en el campo **Proyecto**, el proyecto por el cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image354.png)

Imagen 25. Campo Proyecto

Seleccione en el campo **Centro de Costos**, el centro de costos por el cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image355.png)

Imagen 26. Campo Centro de Costos

Seleccione en el campo **Usuario 2**, el usuario dos (2) por el cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image356.png)

Imagen 27. Campo Usuario 2

Seleccione en el campo **Usuario e**, el usuario tres (3) por el cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image357.png)

Imagen 28. Campo Usuario 3

Seleccione en el campo **Usuario 4**, el usuario cuatro (4) por el cual requiere filtrar la información.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image358.png)

Imagen 29. Campo Usuario 4

Seleccione la opción **Comenzar Búsqueda**, para filtrar la información en base a lo seleccionado en los campos nombrados anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image359.png)

Imagen 30. Opción Comenzar Búsqueda

Podrá visualizar los resultados de la búsqueda, donde se refleja la información ingresada en las líneas de la requisición.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image360.png)

Imagen 31. Resultados de Búsqueda

Seleccione las líneas de la requisición para crear la orden de compra desde las mismas.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image361.png)

Imagen 32. Seleccione de Líneas de Requisición

Note

Al seleccionar cualquiera de los registros, se habilitan diferentes campos que le permiten al usuario ingresar o modificar los valores en los mismos.

Seleccione en el campo **Tipo de Documento**, el tipo de documento con el cual será generado el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image362.png)

Imagen 33. Campo Tipo de Documento

Seleccione en el campo **Prioridad**, la prioridad con la cual será generado el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image363.png)

Imagen 34. Campo Prioridad

Seleccione en el campo **Socio del Negocio**, el socio del negocio con el cual será generada la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image364.png)

Imagen 35. Campo Socio del Negocio

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección del socio del negocio seleccionado para la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image365.png)

Imagen 36. Campo Dirección del Socio del Negocio

Seleccione en el campo **Fecha de la Orden**, la fecha de la orden con la cual será generada la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image366.png)

Imagen 37. Campo Fecha de la Orden

Seleccione en el campo **Fecha Prometida**, la fecha prometida con la cual será generada la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image367.png)

Imagen 38. Campo Fecha Prometida

Seleccione en el campo **Agente Comercial**, el agente comercial con el cual será generada la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image368.png)

Imagen 39. Campo Agente Comercial

Seleccione en el campo **Termino de Pago**, el termino de pago con el cual será generado el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image369.png)

Imagen 40. Campo Termino de Pago

Seleccione en el campo **Lista de Precios**, la lista de precios con la cual será generada la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image370.png)

Imagen 41. Campo Lista de Precios

Introduzca en el campo **Referencia de Orden de Socio del Negocio**, la referencia de orden de socio del negocio.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image371.png)

Imagen 42. Campo Referencia de Orden de Socio del Negocio

Seleccione en el campo **Acción del Documento**, la acción de documento con la cual será generado al documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image372.png)

Imagen 43. Campo Acción del Documento

Seleccione la opción **OK**, para generar el documento **Orden de Compra** en base a lo seleccionado en los campos nombrados anteriormente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image373.png)

Imagen 44. Opción OK

Al ubicar en la ventana **Órdenes de Compra**, el registro de la orden de compra creado, podrá visualizar que el mismo fue generado en estado **Borrador**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image374.png)

Imagen 45. Registro de Orden de Compra

Seleccione la pestaña **Línea Orden Compra**, de la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image375.png)

Imagen 46. Pestaña Línea de Orden

Introduzca en el campo **Precio**, el precio del producto correspondiente al registro de la línea en la que se encuentra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image376.png)

Imagen 47. Campo Precio

Note

Recuerde guardar el registro de los campos en pestaña **Línea Orden Compra**

Seleccione la pestaña principal **Orden de Compra** para proceder a completar el registro.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image377.png)

Imagen 48. Pestaña Orden de Compra

Seleccione la opción **Preparar**, ubicado en la parte inferior de la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image378.png)

Imagen 49. Opción Preparar

Seleccione la acción **Completar** y la opción **OK**, para completar el proceso.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image379.png)

Imagen 50. Acción Completar y Opción OK

## Orden de Compra Directa

Una orden de compra es un documento elaborado por el departamento de compras de una empresa determinada, contiene los productos y servicios que dicha empresa necesita, la cantidad y los precios acordados con el proveedor a la que va dirigida, así como el sello del departamento de compras y la firma del jefe de dicho departamento.

En ADempiere es posible generar una orden de compra directa. El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere una orden de compra, en su versión 3.9.2 para la localización Venezuela.

Registro de Orden de Compra Directa

### Registro de Orden de Compra Directa

Una Orden de Compra en ADempiere, es un tipo de documento emitido por la empresa para realizar pedidos a sus diferentes proveedores. En ella se detalla: la cantidad a comprar, el tipo de producto, precio y condiciones de pago, así como también la forma de entrega.

Para el registro de un documento en ADempiere debe tener en cuenta que existen campos que son de carácter obligatorio, estos campos están identificados con el carácter especial:(\*) de color rojo.

Warning

Asegúrese de que cada campo que se encuentre identificado como carácter obligatorio, contenga la información requerida, de lo contrario no podrá completar el registro.

Ubique en el menú de ADempiere la carpeta **Gestión de Compras**, luego seleccione la ventana **Órdenes de Compra**, adjunto imagen para referencia.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image380.png)

Imagen 1. Menú de ADempiere

Seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere para crear un nuevo documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image381.png)

Imagen 2. Registro Nuevo

Seleccione en el campo **Compañía**, el nombre de la compañía de la cual se emite el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image382.png)

Imagen 3. Campo Compañía

Seleccione en el campo **Organización**, el nombre de la organización de la cual se está emitiendo el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image383.png)

Imagen 4. Campo Organización

Warning

El valor en el campo organización debe ser diferente del símbolo (\*) ya que éste símbolo hace referencia a todas las Organizaciones.

En el campo **No. de Documento**, no es necesario ingresarlo en forma manual, al momento de realizar un registro, ADempiere genera un número de secuencia automáticamente para el documento, al seleccionar la opción guardar del nuevo registro de orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image384.png)

Imagen 5. Campo No. del Documento

En el campo **Descripción**, Puede introduzca una breve descripción referente a la orden de compra que se está realizando, este campo es opcional.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image385.png)

Imagen 6. Campo Descripción

Seleccione el tipo de documento a generar, en el campo **Tipo de Documento Destino**, la selección de éste define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra definido en el documento Tipo de Documento elaborado por ERPyA

![Campo](/assets/img/docs/purchase-management/pum-purchase-image386.png)

Imagen 7. Campo Tipo de Documento Destino

Seleccione en el campo **Fecha de la Orden**, la fecha de elaboración del documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image387.png)

Imagen 8. Campo Fecha de la Orden

Seleccione en el campo **Fecha Prometida**, la fecha de entrega de la orden, prometida por el proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image388.png)

Imagen 9. Campo Fecha Prometida

En el campo **Socio del Negocio**, debe seleccionar el nombre del socio del negocio (proveedor) al que se le emite el documento **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image389.png)

Imagen 10. Campo Socio del Negocio

Si el Socio de negocio, tiene más de una dirección registrada, debe seleccionar la dirección del socio del negocio, caso contrario, si posee dirección única, esta información se refleja automáticamente en el campo **Dirección del Socio del Negocio** una vez haya seleccionado el nombre del socio de negocio.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image390.png)

Imagen 11. Campo Dirección del Socio del Negocio

En la sección de **Entrega\*\***, se encuentran los siguientes grupos de campos: almacén, entrega directa y usuario, estos hacen referencia a:

\*\*Almacén, en el cual se requiere el producto o servicio (Es de Carácter obligatorio)

![Campo](/assets/img/docs/purchase-management/pum-purchase-image391.png)

Imagen 12 . Campo Almacén

\*\*Entrega Directa, Indica que el proveedor realizará la entrega directamente al cliente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image392.png)

Imagen 13. Campo Entrega Directa

\*\*Usuario, Indica el Nombre del usuario de sistema.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image393.png)

Imagen 14. Campo Usuario

En el campo seleccionable **Vía de Entrega**, debe seleccionar la opción que indique, de qué manera serán entregados los productos o servicios de la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image394.png)

Imagen 15. Campo Vía de Entrega

En el campo seleccionable **Regla de Costo de Flete**, debe seleccionar la regla para cargar los costos del flete, por lo general se establece: Flete Incluido.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image395.png)

Imagen 16. Campo Regla de Costo de Flete

Seleccione la prioridad de la orden en el campo **Prioridad**, este campo indica la urgencia de los productos o servicios que se están ordenando en el documento, sin embargo, el documento trae predeterminado la opción **Media**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image396.png)

Imagen 17. Campo Prioridad

En la sección de **Facturación**, se encuentran los siguientes grupos de campos, (Todos de carácter obligatorio, para el registro de la orden que será emitida)

**Lista de Precios**, siempre debe ser Compras, esta determina el precio, margen y costo de los artículos comprados.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image397.png)

Imagen 18. Campo Lista de Precios

**Moneda**, dependerá del Tipo de Documento seleccionado, es decir, si el tipo de documento es : **Orden de Compra Nacional** la moneda será (VES) moneda nacional en curso. Caso contrario, **Orden de Compra Importación** la moneda será, cualquier moneda extranjera que sea utilizada por la compañía para realizar este tipo de compras, ejemplo:(USD,EUR,COP, entre otros).

![Campo](/assets/img/docs/purchase-management/pum-purchase-image398.png)

Imagen 19. Campo Moneda

**Agente de la Compañía**, será el agente de compras para el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image399.png)

Imagen 20. Campo Agente Compañía

**Término de pago**, indica las condiciones, método y tiempo de pago de la compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image400.png)

Imagen 21. Campo Término de Pago

Warning

Recuerde guardar el registro de la ventana, seleccionando el icono **Guardar** ubicado en la barra de herramientas, una vez guardado el nuevo registro, podrá avanzar a la pestaña **Línea Orden Compra**.

Seleccione la pestaña **Línea Orden Compra** y proceda seleccionando el Producto o Servicio a ordenar. Si la orden de compra contiene varios productos, el campo **Nro. de Línea\*\***, indicará el orden y despliegue de los mismos dentro del documento. Una vez que guarde el primer producto, deberá seleccionar nuevo, incrementando así el número de líneas por productos en el documento.

Warning

Los campos **Compañía**, **Organización**, **Orden de Compra**, **Socio del Negocio** y **Dirección del Socio del Negocio**, vienen precargados de la ventana principal **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image401.png)

Imagen 22. Línea Orden Compra

En la Sección **Cantidades**, se encuentra el siguiente grupo de Campos: cantidad, unidad de medida, cantidad ordenada, cantidad facturada. cantidad reservada y cantidad entregada.

**Cantidad**, indica la cantidad del producto en la compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image402.png)

Imagen 23. Campo Cantidad

\*\*Unidad de Medida, indica la unidad de medida del producto ordenado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image403.png)

Imagen 24. Campo Unidad de Medida

\*\*Cantidad Facturada, indica la cantidad de un producto que ha sido facturado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image404.png)

Imagen 25. Campo Cantidad Facturada

\*\*Cantidad Reservada, indica la cantidad del producto que ha sido reservado para otras órdenes.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image405.png)

Imagen 26. Campo Cantidad Reservada

\*\*Cantidad Entregada, indica la cantidad de un producto que ha sido entregado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image406.png)

Imagen 27. Campo Cantidad Entregada

Warning

En la sección Cantidades, solo deberá ingresar la información en el primer campo, el cual es Cantidad. Los demás, presentaran movimientos sólo sí se se han realizado para la orden de compra, más de una recepción, en relación a la cantidad total de la compra.

Seleccione en el campo **Cantidad**, la cantidad a ordenar del producto o servicio seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image407.png)

Imagen 28. Campo Cantidad

Seleccione la unidad de medida del producto seleccionado en el campo **UM**, esta puede ser unidad, gramos, kilos, toneladas, entre otras.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image408.png)

Imagen 29. Campo UM

En la Sección **Totales** se encuentran los siguientes grupos de campos:

**Precio**, este precio está basado en la unidad de medida.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image409.png)

Imagen 30. Campo Precio

**Precio de Costo**, indica el precio por unidad de medida, incluyendo todos los costos (Fletes, Traslados, entre otros)

![Campo](/assets/img/docs/purchase-management/pum-purchase-image410.png)

Imagen 31. Campo Precio Costo

**Precio Actual**, indica el precio para un producto en la moneda fuente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image411.png)

Imagen 32. Campo Precio Actual

**Precio Lista**, indica el precio de la lista oficial en la moneda del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image412.png)

Imagen 33. Campo Precio Lista

**Impuesto**, indica el tipo de impuesto para esta línea del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image413.png)

Imagen 34. Campo Impuesto

**Descuento**, indica el impuesto aplicado o tomado como un porcentaje.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image414.png)

Imagen 35. Campo Descuento

Introduzca el precio unitario del producto seleccionando en el campo **Precio**, este precio es el establecido por el socio del negocio proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image415.png)

Imagen 36. Campo Precio

Seleccione el impuesto en el campo **Impuesto**, este puede variar dependiendo del impuesto aplicable al producto seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image416.png)

Imagen 37 Campo Impuesto

Warning

Recuerde guardar el registro de la pestaña **Línea Orden Compra** con el icono **Guardar** de la barra de herramientas de ADempiere, antes de cambiar a la ventana principal **Orden de Compra**.

Regrese a la ventana principal **Orden de Compra** y seleccione la opción **Completar** ubicada en la parte inferior derecha del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image417.png)

Imagen 38. Opción Completar

## Orden de Compra Multimoneda

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Compras**, luego seleccione la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image418.png)

Imagen 1. Menú de ADempiere

Seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere para crear un nuevo documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image419.png)

Imagen 2. Registro Nuevo

Seleccione en el campo **Organización**, el nombre de la organización de la cual se está emitiendo el documento **Orden de Compra Multimoneda**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image420.png)

Imagen 3. Campo Organización

Warning

El valor en el campo organización debe ser diferente del símbolo (\*) ya que éste símbolo hace referencia a todas las Organizaciones.

En el campo **No. de Documento**, no es necesario ingresarlo en forma manual, al momento de realizar un registro, ADempiere genera un número de secuencia automáticamente para el documento, al seleccionar la opción guardar del nuevo registro de orden de compra multimoneda.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image421.png)

Imagen 4. Campo No. del Documento

En el campo **Descripción**, Puede introduzca una breve descripción referente a la orden de compra multimoneda que se está realizando, este campo es opcional.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image422.png)

Imagen 5. Campo Descripción

Seleccione el tipo de documento a generar, en el campo **Tipo de Documento Destino**, la selección de éste define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra definido en el documento Tipo de Documento elaborado por ERPyA.

Para realizar una orden de compra multimoneda, puede ser utilizado cualquier tipo de documento de orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image423.png)

Imagen 6. Campo Tipo de Documento Destino

Seleccione en el campo **Fecha de la Orden**, la fecha de elaboración del documento **Orden de Compra Multimoneda**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image424.png)

Imagen 7. Campo Fecha de la Orden

Seleccione en el campo **Fecha Prometida**, la fecha de entrega de la orden, prometida por el proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image425.png)

Imagen 8. Campo Fecha Prometida

En el campo **Socio del Negocio**, debe seleccionar el nombre del socio del negocio (proveedor) al que se le emite el documento **Orden de Compra Multimoneda**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image426.png)

Imagen 9. Campo Socio del Negocio

Seleccione en el campo **Socio del Negocio a Facturar**, el socio del negocio a facturar.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image427.png)

Imagen 10. Campo Socio de Negocio a Facturar

Si el socio de negocio, tiene más de una dirección registrada, debe seleccionar la dirección del socio del negocio, caso contrario, si posee dirección única, esta información se refleja automáticamente en el campo **Dirección del Socio del Negocio** una vez haya seleccionado el nombre del socio de negocio.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image428.png)

Imagen 11. Campo Dirección del Socio del Negocio

Seleccione en el campo **\*Dirección Factura**, la dirección del socio del negocio para la factura.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image429.png)

Imagen 12. Campo Dirección Factura

Seleccione en el campo **Usuario**, el usuario del socio del negocio seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image430.png)

Imagen 13. Campo Usuario

Seleccione en el campo **Contacto Entrega Directa**, el usuario de contacto para la entrega directa.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image431.png)

Imagen 14. Campo Contacto Entrega Directa

Seleccione en el campo **Almacén**, el almacén en el cual se requiere el producto o servicio

![Campo](/assets/img/docs/purchase-management/pum-purchase-image432.png)

Imagen 15. Campo Almacén

Seleccione el check **Entrega Directa**, que indica que el proveedor realizará la entrega directamente al cliente.

La selección de este check es obligatoria y permite generar un documento por pagar (factura), en una moneda diferente a la moneda de la orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image433.png)

Imagen 16. Check Entrega Directa

Warning

De no ser tildado el check **Entrega Directa**, no se podrá generar un documento por pagar (factura) con una moneda diferente a la moneda con la que fue realizada la orden de compra.

Al tildar el check **Entrega Directa**, se habilitan los siguientes campos

Seleccione en el campo **Socio del Negocio Entrega Directa**, el socio del negocio al cual serán entregados los productos incluidos en la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image434.png)

Imagen 17. Campo Socio del Negocio Entrega Directa

Seleccione en el campo **Dirección Entrega Directa**, la dirección de localización del socio para la entrega.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image435.png)

Imagen 18. Campo Dirección Entrega Directa

Seleccione en el campo **Contacto Entrega Directa**, el usuario de contacto del socio para la entrega.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image436.png)

Imagen 19. Campo Contacto Entrega Directa

En el campo seleccionable **Vía de Entrega**, debe seleccionar la opción que indique, de qué manera serán entregados los productos o servicios de la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image437.png)

Imagen 20. Campo Vía de Entrega

En el campo seleccionable **Regla de Costo de Flete**, debe seleccionar la regla para cargar los costos del flete, por lo general se establece: Flete Incluido.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image438.png)

Imagen 21. Campo Regla de Costo de Flete

Seleccione la prioridad de la orden en el campo **Prioridad**, este campo indica la urgencia de los productos o servicios que se están ordenando en el documento, sin embargo, el documento trae predeterminado la opción **Media**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image439.png)

Imagen 22. Campo Prioridad

Seleccione en el campo **Lista de Precios**, la lista de precios con la cual será generada la orden de compra.

Por tratarse de una orden de compra multimoneda, la lista de precios que se debe seleccionar debe ser **Compras (USD)** o **Compras (EUR)**. Esta determina el precio, margen y costo de los artículos comprados.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image440.png)

Imagen 23. Campo Lista de Precios

El valor en el campo **Moneda**, dependerá de la lista de precios seleccionada en el campo **Lista de Precios**.

El campo se encuentra solo lectura por lo que su valor solo puede ser modificado cambiando la lista de precios para establecer en el mismo, cualquier moneda extranjera que sea utilizada por la compañía para realizar este tipo de compras..

![Campo](/assets/img/docs/purchase-management/pum-purchase-image441.png)

Imagen 24. Campo Moneda

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión con el cual fue negociada la compra con el proveedor.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image442.png)

Imagen 25. Campo Tipo de Conversión

Note

Recuerde que debe tener creado el tipo de conversión con su respectiva tasa de conversión antes de completar el proceso. Si desconoce el procedimiento, puede consultar el material Conversión Manual, el mismo explica de manera detallada los procesos a realizar para crear un Tipo de Conversión, su Tasa de Conversión desde la Ventana Moneda y su Tasa de Conversión desde la Ventana Tasa de Cambio.

Seleccione en el campo **Agente Compañía**, el agente de compras para el documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image443.png)

Imagen 26. Campo Agente Compañía

Seleccione el check **Imprimir Descuento**, para imprimir el descuento en la factura y la orden.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image444.png)

Imagen 27. Check Imprimir Descuento

Seleccione en el campo **Término de pago**, las condiciones, método y tiempo de pago de la compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image445.png)

Imagen 28. Campo Término de Pago

Warning

Recuerde guardar el registro de la ventana, seleccionando el icono **Guardar** ubicado en la barra de herramientas, una vez guardado el nuevo registro, podrá avanzar a la pestaña **Línea Orden Compra**.

Seleccione la pestaña **Línea Orden Compra** y proceda al llenado de los campos seleccionando el producto o servicio a ordenar. Si la orden de compra contiene varios productos, el campo **Nro. de Línea**, indicará el orden y despliegue de los mismos dentro del documento. Una vez que guarde el primer producto, deberá seleccionar el icono **Registro Nuevo**, incrementando así el número de líneas por productos en el documento.

Warning

Los campos **Compañía**, **Organización**, **Orden de Compra**, **Socio del Negocio** y **Dirección del Socio del Negocio**, vienen precargados de la ventana principal **Orden de Compra**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image446.png)

Imagen 29. Línea Orden Compra

Seleccione en el campo **Producto**, el producto correspondiente a la orden de compra que se encuentra realizando.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image447.png)

Imagen 30. Campo Producto

Introduzca en el campo **Cantidad**, la cantidad del producto seleccionado.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image448.png)

Imagen 31. Campo Cantidad

Seleccione en el campo **Unidad de Medida**, la unidad de medida del producto seleccionado.

Esta unidad de medida puede ser unidad, gramos, kilos, toneladas, entre otras.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image449.png)

Imagen 32. Campo Unidad de Medida

En el campo **Cantidad Ordenada**, se indica la cantidad ordenada del producto seleccionado.

Este campo toma de manera automática, el valor ingresado en el campo **Cantidad**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image450.png)

Imagen 33. Campo Cantidad Ordenada

En el campo **Cantidad Entregada**, se indica la cantidad del producto que ha sido recepcionada.

Este campo estará en cero (0), hasta que sea generado un documento de recepción con dicho producto, asociando la orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image451.png)

Imagen 34. Campo Cantidad Entregada

En el campo **Cantidad Reservada**, se indica la cantidad del producto que ha sido reservado para otras órdenes.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image452.png)

Imagen 35. Campo Cantidad Reservada

Seleccione en el campo \*\*Cantidad Facturada, la cantidad de un producto que ha sido facturado.

Este campo estará en cero (0), hasta que sea generado un documento de cuentas por pagar (factura) con dicho producto, asociando la orden de compra.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image453.png)

Imagen 36. Campo Cantidad Facturada

Introduzca en el campo **Precio**, el precio del producto seleccionado.

Este precio está basado en la unidad de medida del producto, lo que quiere decir, que si el producto seleccionado tiene unidad de medida **Caja** y dicha caja contiene seis (6) unidades,ADempiere tomará el precio ingresado como precio de la caja y no como precio de cada unidad que compone la caja.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image454.png)

Imagen 37. Campo Precio

Introduzca en el campo **Precio de Costo**, el precio de costo del producto seleccionado.

Este precio indica el precio por unidad de medida, incluyendo todos los costos (fletes, traslados, entre otros)

![Campo](/assets/img/docs/purchase-management/pum-purchase-image455.png)

Imagen 38. Campo Precio Costo

En el campo **Precio Actual**, se indica el precio para un producto en la moneda fuente.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image456.png)

Imagen 39. Campo Precio Actual

Introduzca en el campo **Precio Lista**, el precio de lista oficial en la moneda del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image457.png)

Imagen 40. Campo Precio Lista

Seleccione en el campo **Impuesto**, el tipo de impuesto para esta línea del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image458.png)

Imagen 41. Campo Impuesto

Introduzca en el campo **Descuento**, el descuento aplicado o tomado como un porcentaje.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image459.png)

Imagen 42. Campo Descuento

En el campo **Neto de Línea**, se indica el total neto de la línea basado en la cantidad y el precio actual. Cualquier cargo adicional o flete no es incluido.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image460.png)

Imagen 43. Campo Neto de Línea

Warning

Recuerde guardar el registro de la pestaña **Línea Orden Compra** con el icono **Guardar** de la barra de herramientas de ADempiere, antes de cambiar a la ventana principal **Orden de Compra**.

Regrese a la pestaña principal **Orden de Compra** y seleccione la opción **Completar** ubicada en la parte inferior derecha del documento.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image461.png)

Imagen 44. Pestaña Principal Orden de Compra y Opción Completar

Seleccione la acción **Completar** y la opción **OK**.

![Campo](/assets/img/docs/purchase-management/pum-purchase-image462.png)

Imagen 45. Acción Completar y Opción OK
