---
title: Ordenes de Producción Planeadas y Producciones (Automáticas)
category: Documentation
star: 9
article: false
---
## PROCEDIMIENTO PARA PRODUCIR DESDE ORDENES DE PRODUCCIONES PLANEADAS

### Crear la Orden de Producción Planeada (Producto Terminado)

En la ventana Ordenes de Producción Planeadas se debe crear la orden de producción del producto a producir o producto terminado que para el ejemplo es el **PT-0001_Galletas**:

- **Campo Organización:** Se debe seleccionar la organización a la cual pertenece la orden de producción que necesita crear.
- **Campo Tipo de Documento:** Se debe seleccionar el tipo de documento **Orden de Producción Planeada**
- **Campo No. del Documento:** Cuando se guarda el registro, ADempiere establece de manera automatica el número de correlativo conigurado en el tipo de documento. Por taal motivo no se debe colocar ninguna información en dicho campo ya que ADempiere lo establece.
- **Campo Fecha del Movimiento:** Se debe colocar la fecha en la que esta realizando la orden de producción.
- **Campo Descripción:** Si requiere colocar alguna información descriptiva de la orden de producción que esta realizando, la puede agregar en este campo.
- **Campo Producto:** En este campo se debe seleccionar el producto que requiere mandar a producir. Dependiendo de las reglas de la organización, este producto puede ser un producto terminado o un producto semielaborado.
- **Campo Cantidad a Recibir:** Se debe seleccionar la cantidad a recibir del producto seleccionado. Esta cantidad es basa en la unidad de medida configurada en el maestro del producto. Para el ejemplo colocamos **1**.
- **Campo Ubicación:** Se debe seleccionar la ubicación donde será producido el producto. Para el ejemplo colocamos **PP-PRODUCCION EN PROCESO**.
- **Campo LDM y Fórmula:** Se debe seleccionar la lista de materiales con la que será producido el producto. Para el ejemplo seleccionamos la lista **PT0001-C1** que es la que desglosamos en el archivo a continuación.
- **Campo Cantidad Ordenada:** En este campo se visualiza la cantidad a producir de la ultima producción asociada a la orden de producción.
- **Campo Cantidad Completada:** En este campo se visualiza la suma de todas las cantidades a producir de todas las producciones asociadas a la orden de producción.

**Lista de Materiales de Ejemplo Desglosada**

<img width="916" height="441" alt="image" src="https://github.com/user-attachments/assets/9cda3358-e2c6-4a02-9f94-17085d67705f" />

Imagen 1. Lista de Materiales de Ejemplo Desglosada

**Ejemplo de Orden de Producción Planeada (Producto Terminado)**

Para el ejemplo nos genera como orden de producción planeada (producto terminado) la **OPP-3239**

<img width="1883" height="549" alt="image" src="https://github.com/user-attachments/assets/2e547c4f-a577-4056-ac9f-c781b59b5161" />

Imagen 2. Orden de Producción Planeada (Producto Terminado)

### Reporte de Explosión de Lista de Materiales

Estando en la orden de producción planeada (producto terminado), se debe seleccionar el icono **Proceso** que se encuentra en la barra de herramientas y posteriormente el proceso **Reporte de Explosión LDM**. Esto levantara una ventana de verificación que al seleccionar la opción **OK**, se genera el reporte de explosión de listas de materiales del producto a producir que se encuentra en la orden de producción.

<img width="1691" height="477" alt="image" src="https://github.com/user-attachments/assets/8eff5152-10fe-4f0b-9620-f68ca4a8e0c9" />

Imagen 3. Reporte de Explosión de Lista de Materiales

### Crear las Ordenes de Producción Planeadas (Subproductos o Semielaborados)

Luego se deben generar las ordenes de producciones planeadas (subproductos o semielaborados), para ello debemos estar posicionados en la orden de producción planeada (producto terminado), seleccionar el icono **Proceso** y luego el proceso **Generar Ordenes de Producción desde LDM (Browser)**

<img width="1883" height="549" alt="image" src="https://github.com/user-attachments/assets/8674d2a7-6f10-4cfb-8bb4-915c1515829c" />

Imagen 4. Proceso Generar Ordenes de Producción desde LDM (Browser)

Estando allí, se selecciona la opción **Comenzar Búsqueda** para visualizar todas las ordenes de producción (subproductos o semielaborados) que se deben mandar a producir para poder producir el producto terminado. Es decir, todos los semielaborados que se deben producir para poder producir el producto terminado.

<img width="1883" height="549" alt="image" src="https://github.com/user-attachments/assets/f8cb3bee-2882-497b-8da5-52ddbe8e1a51" />

Imagen 5. Parámetros del Proceso Generar Ordenes de Producción desde LDM (Browser)

**NOTA:**

  El proceso te permite mandar a generar producir los semielaborados ya sea que tengan existencia o no. 

Cuando se selecciona la opción **Comenzar Búsqueda** en el proceso **Generar Ordenes de Producción desde LDM (Browser)**, se muestran todas las listas de materiales asociados a los productos subproductos o semielaborados que se encuentran incluidos dentro de la lista de materiales del producto terminado previamente seleccionado en la orden de producción.

Se debe seleccionar las líneas de los productos que se quieren mandar a producir, considerando que las líneas de los productos se pueden repetir tantas listas de materiales tengan configuradas los productos.

Para el ejemplo se selecciona el producto **SM1200002_SM CREMA DE MANZANA** con la lista de materiales **SM1200002-C1_SM CREMA DE MANZANA C1_SM1200002-C1**. 

<img width="1893" height="908" alt="image" src="https://github.com/user-attachments/assets/eb2eebd7-4882-4e04-8358-188b4d9f67f1" />

Imagen 6. Líneas del Proceso Generar Ordenes de Producción desde LDM (Browser)

**Ejemplo de Orden de Producción Planeada (Subproducto o Semielaborado)**

La ejecución del proceso anterior genera las ordenes de producción planeadas de los subproductos o semielaborados. Para el ejemplo fue generada la orden de producción planeada (subproducto o semielaborado) **OPP-3239.10.SM1200002** con dicho producto, asociada a dicha lista de materiales. 

<img width="1893" height="552" alt="image" src="https://github.com/user-attachments/assets/9270c41e-d09d-437a-978e-e5231f1b9c2a" />

Imagen 7. Orden de Producción Planeada (Producto Hijo)

### Surtir Orden de Producción

El proceso de surtir orden de producción es netamente un proceso que genera movimientos de inventarios automáticos  con los productos seleccionados, el movimiento se realiza desde la ubicación que se coloca en el proceso hasta la ubicación que tiene establecida la orden de producción. Recordando que si el producto no tiene disponibilidad en el almacén de la orden de producción, no permitirá reportar la producción.
 
El smart browser se ubica en el menú de ADempiere como **Surtir Orden de Producción**,  al seleccionarlo se ve la ventana con campos para filtrar la información, panel de coincidencia y campos para generar el registro desde el smart browser:

- Campo **Orden de Producción**: En el campo se debe colocar la orden de producción especifica que se requiere surtir.
- Campo **Ubicación**: Se debe colocar la ubicación especifica donde se encuentra almacenado el producto que requiere surtir.
- Campo **Orden de Producción Origen**: En el campo se debe colocar la orden de producción planeada (producto terminado), este campo es para los casos en los que no se requiere surtir una sola orden de producción de subproducto o semielaborado, sino todas las ordenes de producción de subproductos o semielaborados asociadas a una orden de producción de producto terminado.

<img width="1893" height="901" alt="image" src="https://github.com/user-attachments/assets/5c1a1775-2880-4976-85c3-d53e0ba87099" />

Imagen 8. Surtir Orden de Producción

Cuando se selecciona la opción **Comenzar Búsqueda**, se muestran todas las coincidencias de productos en la ubicación previamente seleccionada. Recordando que se van a mostrar solamente los productos componentes involucrados en la lista de materiales del producto a producir.

Se debe seleccionar la línea del producto a surtir, con su respectiva instancia de conjunto de atributos y así sucesivamente hasta seleccionar todas las líneas de los productos a surtir. 

En el campo **Tipo de Documento Destino** se debe seleccionar el tipo de documento con el que se desea generar el movimiento de inventario desde la ubicación seleccionada, hasta la ubicación establecida en la orden de producción a surtir. 

<img width="1893" height="901" alt="image" src="https://github.com/user-attachments/assets/e2fbf0a7-4923-425a-9f3f-d975f01c0a40" />

Imagen 9. Surtir Orden de Producción con Movimiento de Inventario

En los casos en los que se requiera generar una orden de distribución para que posterior sean generados los movimientos de inventario, se debe tildar el check **Crear Orden de Distribución** y establecer el tipo de documento de orden de distribución a generar en el campo **Tipo de Documento de Distribución**.

<img width="1893" height="901" alt="image" src="https://github.com/user-attachments/assets/e8b001ca-af82-42c9-b540-07f358e5ec24" />

Imagen 10. Surtir Orden de Producción con Orden de Distribución

**NOTA:**

  Al ejecutar el proceso se genera el registro asociado a la orden de producción, por lo que se puede visualizar desde el acercador de la orden de producción.

### Reportar Producciones de Subproductos o Semielaborados

**Consideraciones** 

Para reportar una producción se debe tener disponibilidad de los productos componentes asociados a la lista de materiales (productos a consumir). Adicionalmente, se debe reportar la producción desde el último nivel hacia el primer nivel. Es decir, cuando se manda a generar las ordenes de producciones planeadas (subproductos o semielaborados), se generan en cascada y con su respectiva secuencia, ejemplo:

**Orden de Producción Planeada (Producto Termninado):** Se genera con el número de documento establecido como correlativo en el tipo de documento. Para el ejemplo se genera con **OPP-3239**
**Orden de Producción Planeada (Subproducto o Semielaborado):** Se genera con el número de documento de la orden de producción de producto terminado, seguido de un punto, seguido del número de nivel del producto en la explosión de LDM, seguido de otro punto, y por último el códigop del producto a producir hijo. Para el ejemplo se genera **OPP-3239.10.SM1200002**.

- OPP-3236
- OPP-3236.10.SM1200002
- OPP-3236.20.SM0000003
- OPP-3236.30.SM0000004
- OPP-3236.40.SM0000005

Al momento de reportar las producciones, primero se debe reportar el ultimo nivel de la cadena (OPP-3236.40.SM0000005), ya que dicho producto es necesario para poder reportar el siguiente nivel (OPP-3236.30.SM0000004)

**Ejecución del Proceso**

En la pestaña **Producción** de la ventana **Ordenes de Producción Planeadas**, se debe seleccionar el tipo de documento con el que se requiere generar el documento. 
Guarde el registro para que se establezcan los valores que provienen de la orden de producción (Descripción, Fecha Prometida, Producto, Ubicación, Cantidad a Producir). Al guardar el registro, ADempiere establece el correlativo configurado en el tipo de documento seleccionado. Para el ejemplo es **PS-3382**
Las especificaciones u observaciones de la producción que esta reportando se pueden agregar en el campo **Descripción**.
La cantidad producida que requiere reportar la debe establecer en el campo **Cantidad a Producir**. Luego de ello, debe guardar nuevamente el registro.

<img width="1893" height="513" alt="image" src="https://github.com/user-attachments/assets/70c4ad10-f353-483f-aace-29c6dea6ebc0" />

Imagen 11. Pestaña Producción

Para cargar las líneas de la producción debe seleccionar el proceso **Re-Cargar Producción y Establecer Atributos** que se encuentra en el icono **Proceso**. Este proceso permite cargar a la línea de la producción todos los componentes necesarios (incluidos en la lista de materiales), sin necesidad de procesar el documento y asociando de manera automática la instancia con existencia de cada uno de los productos (instancia seleccionada en el surtir).

<img width="1893" height="513" alt="image" src="https://github.com/user-attachments/assets/bf44bf46-a483-4b73-9bcd-129a9f953e6a" />

En los casos en los que la cantidad utilizada es menor a la que se encuentra configurada en la lista de materiales, se debe colocar en el campo **Cantidad Utilizada**, la cantidad que realmente se utilizó del componente, esta cantidad será establecida en el campo **Cantidad del Movimiento** de manera automática al guardar el registro. Esta información se establece en el campo **Cantidad Utilizada** en la pestaña **Línea de Producción**.

<img width="1893" height="513" alt="image" src="https://github.com/user-attachments/assets/d123c612-8a9c-480e-99b3-f72375fbc776" />

En la línea del producto producido se debe establecer una instancia de conjunto de atributos (lote) para asociar a dicho producto. Esta información se establece en el campo **Instancia Conjunto de Atributos** en la pestaña **Línea de Producción**.

<img width="1893" height="513" alt="image" src="https://github.com/user-attachments/assets/2c159b70-4e53-4ec7-bcd0-372e4e02140a" />

Al completar la producción, de manera automática se descuentan los componentes y se ingresa el producto producido al inventario. Esta verificación se puede realizar mediante los reportes **Detalle de Almacenamiento** y **Detalle de Transacciones**. Recordando que la producción se puede completar estando posicionado en la pestaña **Producción** de la ventana **Ordenes de Producción Planeadas**.

<img width="1893" height="513" alt="image" src="https://github.com/user-attachments/assets/4332d66b-1214-4990-bf9e-e4b8901b55da" />

**NOTA**

Este procedimiento de reportar las producciones se debe realizar por cada una de las ordenes de producciones planeadas (subproductos o semielaborados). Recordando que los productos componentes deben tener existencia en la ubicación establecida en la producción. De no tener existencia, se debe hacer el proceso de surtir orden de producción para realizar el movimiento de inventario desde la ubicación donde tienen existencia dichos productos hasta la ubicación de la producción.

### Reportar Producción Padre

Cuando se tengan ya reportadas todas las producciones planeadas (subproductos o semielaborados), se debe realizar lo siguiente:

- Se debe ejecutar el proceso de surtir orden de producción para realizar el movimiento de inventario de los productos componentes que no son producidos (ejemplo: material de empaque). En esta ocasión se debe ejecutar llamando la orden de producción padre.
- Se debe ejecutar el mismo proceso realizado para reportar la producción del subproducto o semielaborado. Proceso explicado anteriormente, específicamente en la ejecución del proceso.

La verificación del proceso y disponibilidad de los productos se puede realizar mediante los reportes **Detalle de Almacenamiento** y **Detalle de Transacciones**. 
