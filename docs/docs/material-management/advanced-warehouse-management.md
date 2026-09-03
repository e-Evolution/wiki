---
title: Manejo Avanzado de Almacenes
category: Documentation
star: 9
article: false
---

La utilidad de la Gestión Avanzada de Almacenes (WMS) en ADempiere, consiste en la configuración de los almacenes de la organización, donde se les establece el patio de entrada y patio de salida del WMS. Dicha configuración es realizada una unica vez por los consultores de **ERPyA**.

El manejo avanzado de almacenes parte desde una orden de venta, un pedido en el cual no se le debe asignar ninguna instancia de atributos o lotificación de producto a vender. Luego se genera la orden de salida, la misma es copia fiel exacta de los valores cargados en la orden de venta, por lo que no tendrá ninguna instancia o lote asociado.

Con la orden de venta y la orden de salida ya cargadas en ADempiere, se procede a generar el picking list para establecer allí los lotes y las instancias de los productos a vender.

Finalmente, se procede a realizar el proceso de entrega y facturación de los productos.

## **Configuración de la Gestión Avanzada de Almacenes**

Para el correcto funcionamiento del proceso, es necesario que se realicen las siguientes configuraciones, tomando como ejemplo el caso en el que se tiene un almacén determinado para las ventas y el mismo posee diferentes ubicaciones.

Para la presentación del caso, se tiene el siguiente ejemplo: 

**Almacén**: CENTRO DE DISTRIBUCIÓN GUACARA
  - **Ubicación 1**: CDG
  - **Ubicación 2**: R1
  - **Ubicación 3**: R2
  - **Ubicación 4**: R3
  - **Ubicación 5**: R4

### **Tipo de Area del Almacén**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Tipo de Area del Almacén**.

![menu tipo de area del almacen](https://github.com/user-attachments/assets/659d4509-fdd1-4cd0-925e-c0b16def1534)

En la presente ventana se configuran las diferentes areas con las que se quiere a segmentar el almacén.

Para la presentación del caso, se configuró una sola area, la cual lleva por nombre **WMS**.

![ventana tipo de area del almacén](https://github.com/user-attachments/assets/e6eecaf5-0e46-40c7-bfea-5040f547499a)

### **Tipo de Sección del Almacén**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Tipo de Sección del Almacén**

![menu tipo de seccion del almacen](https://github.com/user-attachments/assets/19585346-f240-41dc-a290-129b6b80218e)

En la presente ventana se configuran las secciones que van a tener las areas del almacén. Dicha area es la previamente configurada.

Para la presentación del caso, se tienen las siguientes secciones de area en el almacén.

**Patio de Entrada**

![patio de entrada](https://github.com/user-attachments/assets/9efd566a-54d3-4d07-865a-7ad5b5d763cc)

**Patio de Salida**

![patio de salida](https://github.com/user-attachments/assets/45b2964a-d24d-4a36-a0d2-27e496ea016b)

### **Estructura del Almacén**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Estructura del Almacén**

![menu estructura del almacen](https://github.com/user-attachments/assets/20aaf7dc-d154-4107-81ce-60f9a28391c3)

En la presente ventana se realiza la configuración de los diferentes almacenes a los que se requiera aplicar la funcionalidad, asociando a los mismos, las diferentes areas con las que se necesitar segmentar el almacén, sus respectivas secciones por area y ubicaciones por secciones, siguiendo la siguiente estructura:

- Estructura del Almacén:
  - Almacén
    - Area del Almacén
      - Sección del Almacén
        - Detalle de las Secciones del Almacén (Ubicaciones)
      - Sección del Almacén
        - Detalle de las Secciones del Almacén (Ubicaciones)

Un almacén tiene establecida una ubicación por defecto, la misma no debe ser ingresada en el **Detalle de las Secciones** ya que esa ubicación es la que se va a configurar en la **Defición de Entradas / Salidas**, para que al momento de la ejecución del proceso (la venta), se llama el almacén configurado y este a su vez toma la ubicación (por defecto del almacén) previamente configurada en la **Definición de Entradas / Salidas**, validando en el **Picking List**, la existencia de los productos en las diferentes ubicaciones establecidas en la **Estructura del Almacén**.

Para la presentación del caso, se configura el almacén **CENTRO DE DISTRIBUCIÓN GUACARA**, partiendo de la información inicial del almacén:

**Almacén**: CENTRO DE DISTRIBUCIÓN GUACARA
  - **Ubicación 1**: CDG
  - **Ubicación 2**: R1
  - **Ubicación 3**: R2
  - **Ubicación 4**: R3
  - **Ubicación 5**: R4

Donde la ubicación 1 (CDG) es la ubicación por defecto del almacén, ubicación que tomara la transacción (la venta) al momento de llamar el almacén en la misma.

Adicionalmente, se tiene que por ejemplo la ubicación 4 (R3), debe ser una ubicación respetada por el proceso, lo que quiere decir que al momento de la ejecución de la funcionalidad, el proceso no debe afectar las cantidades de los productos que se encuentran en la misma. 

Por lo que en el **Detalle de las Secciones de Almacenes**, se establecen las ubicaciones que se necesita que tome la funcionalidad al momento de la ejecución del proceso, lo que quiere decir que si por ejemplo se tienen 5 ubicaciones en un almacén (CDG, R1, R2, R3 Y R4) de las cuales una es la ubicación por defecto del almacén (CDG), y se necesita que la funcionalidad me valide por la existencia de solo 3 de las 5 ubicaciones, entonces en el **Detalle de las Secciones de Almacenes** se deben establer las 3 ubicaciones (ejemplo: R1, R2, R4).

En base al ejemplo expuesto anteriormente, se procede a configurar un almacén con un area, dos secciones y las diferentes ubicaciones que la funcionalidad va a controlar y/o afectar, quedando de la siguiente manera:

**Almacén**: CENTRO DE DISTRIBUCIÓN GUACARA
  - **Area del Almacén**: WMS
    - **Sección**: Patio de Entrada
        - **Ubicación 1**: R1
        - **Ubicación 2**: R2
        - **Ubicación 3**: R4
    - **Sección**: Patio de Salida
        - **Ubicación 1**: R1
        - **Ubicación 2**: R2
        - **Ubicación 3**: R4

::: info Nota

Es importante resaltar que en el ejemplo no se esta incluyendo en la configuración de la **Estructura del Almacén**, las ubicaciones:

  - **Ubicación 1**: CDG
  - **Ubicación 4**: R3

:::

**Pestaña Almacén de la Ventana Estructura del Almacén**

![pestaña almacen de la estructura del almacen](https://github.com/user-attachments/assets/1eb17d1e-532c-482a-b491-9e0b0efe4290)

**Pestaña Área de Almacén de la Ventana Estructura del Almacén**

![pestaña area de almacen de la estructura del almacen](https://github.com/user-attachments/assets/ec6de420-cee3-42ee-ba44-9faafdd2a123)

**Pestaña Sección del Almacén (PATIO DE ENTRADA "PUT AWAY") de la Ventana Estructura del Almacén**

![pestaña seccion del almacen entrada de la estructura del almacen](https://github.com/user-attachments/assets/0ef62922-07a8-4d1b-8eac-4a781f857193)

**Pestaña Detalle de las Secciones del Almacén (PATIO DE ENTRADA "PUT AWAY") de la Ventana Estructura del Almacén**

![ubicaciones de las secciones](https://github.com/user-attachments/assets/91724a95-f7e6-4247-860b-d5cd7ad4204f)

**Pestaña Sección del Almacén (PATIO DE SALIDA "PICKING LIST") de la Ventana Estructura del Almacén**

![pestaña seccion del almacen salida de la estructura del almacen](https://github.com/user-attachments/assets/afa6662f-a4f4-4770-896a-4d70c8bd1ce2)

**Pestaña Detalle de las Secciones del Almacén (PATIO DE SALIDA "PICKING LIST") de la Ventana Estructura del Almacén**

![ubicaciones de las secciones](https://github.com/user-attachments/assets/91724a95-f7e6-4247-860b-d5cd7ad4204f)

### **Reglas de Entradas / Salidas**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Reglas de Entradas / Salidas**

![menu reglas de entradas salidas](https://github.com/user-attachments/assets/778cb6e8-5d4a-469b-a70f-f242699bb9ce)

En la presente ventana se configuran las reglas de entrada y salida de la mercancía, donde los valores para la regla de entrada deben ser:

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Regla de Entrada de Mercancia 
- **Regla de Entrada y Salida**: Custum Interface
- **Tipo Entrada y Salida**: Operación de Entrada
- **Inbound Outbound Class**: WMSRule_PutAway

![regla de entrada de mercancia](https://github.com/user-attachments/assets/4d434b26-03df-4711-93a7-df7d856cea6e)

Así mismo, los valores para la regla de salida deben ser:

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Regla de Salida de Mercancia 
- **Regla de Entrada y Salida**: Custum Interface
- **Tipo Entrada y Salida**: Operación de Salida
- **Inbound Outbound Class**: FEFO_NotDue_ProductAccepted

![regla de salida de mercancia](https://github.com/user-attachments/assets/2b63667e-bd04-4a56-affe-d3e380c51810)

### **Estrategia de Entradas / Salidas**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Estrategia de Entradas / Salidas**

![menu estrategias de entradas salidas](https://github.com/user-attachments/assets/cbe0abb2-5d17-4bc5-9c64-d50780bad36e)

En la presente ventana se configuran las estrategias de entrada y salida de la mercancía, donde los valores para la estrategia de entrada deben ser:

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Estrategia de Entrada
- **Almacén**: CENTRO DE DISTRIBUCIÓN GUACARA
- **Tipo Entrada y Salida**: Operación de Entrada

![estrategia de entrada](https://github.com/user-attachments/assets/1310c058-8f4b-42f8-bb77-bba820845ef9)

Luego, en la pestaña **Detalle de la Estrategia de las Entradas / Salidas** se debe establecer las reglas de entradas previamente creadas, las cuales será aplicadas con la estrategia de entrada.

![detalle de la estrategia de entrada](https://github.com/user-attachments/assets/0e5017d0-5723-48a7-83e0-9b5dc07b9bc5)

Así mismo, los valores para la estrategia de salida deben ser:

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Estrategia de Salida
- **Almacén**: CENTRO DE DISTRIBUCIÓN GUACARA
- **Tipo Entrada y Salida**: Operación de Salida

![estrategia de salida](https://github.com/user-attachments/assets/632247d5-ec53-472f-90ed-7f95fee1356b)

Luego, en la pestaña **Detalle de la Estrategia de las Entradas / Salidas** se debe establecer las reglas de salidas previamente creadas, las cuales será aplicadas con la estrategia de salida.

![detalle de la estrategia de salida](https://github.com/user-attachments/assets/3a6b7803-c500-4e24-96ee-191efafb847b)

### **Definición de Entradas / Salidas**

Ubique en el menú de ADempiere la carpeta **Gestión Avanzada de Almacén**, luego seleccione la carpeta **Configuración de Gestión Avanzada de Almacén**, finalmente seleccione la ventana **Definición de Entradas / Salidas**

![menu definicion de entradas salidas](https://github.com/user-attachments/assets/59198a07-4a53-4702-8dc7-c502aad20855)

En esta ventana se configura el comportamiento que se va a aplicar al momento de la ejecución de los procesos de entrada o salida de la mercancía. 

Para los casos de entrada de mercancía al almacén, se configura el **Put Away**, en el que se establecen los siguientes valores:

**Pestaña Definición de Entradas / Salidas**

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Put Away
- **Estrategia de Entrada del Almacén**: Estrategia de Entrada
- **Tipo de Área del Almacén**: WMS
- **Tipo de Sección del Almacén**: PATIO DE ENTRADA
- **Ubicación**: CDG (La ubicación por defecto del almacén que estamos configurando)

![definicion de entrada](https://github.com/user-attachments/assets/a2bb9a0c-c154-470b-9ed2-2eeae7bb62fa)

Para los casos de salida de mercancía del almacén, se configura el **Picking List**, en el que se establecen los siguientes valores:

**Pestaña Definición de Entradas / Salidas**

- **Organización**: Organización Principal (La organización del almacén que estamos configurando)
- **Nombre**: Picking List
- **Estrategia de Entrada del Almacén**: Estrategia de Salida
- **Tipo de Área del Almacén**: WMS
- **Tipo de Sección del Almacén**: PATIO DE SALIDA
- **Ubicación**: CDG (La ubicación por defecto del almacén que estamos configurando)

![definicion de salida](https://github.com/user-attachments/assets/13b5e118-4c64-471f-b09c-a57f282ddf91)

## **Ejecución de Entradas de la Gestión Avanzada de Almacenes**

Para el correcto funcionamiento del proceso de entradas, debe existir una previa configuración de la [Gestión Avanzada de Almacenes](http://localhost:8080/docs/material-management/advanced-warehouse-management.html#configuracion-de-la-gestion-avanzada-de-almacenes). Así mismo, debe existir una previa configuración del producto, donde se especifique:

- **Unidades por Paquete**: Unidades del producto que componen el paquete/caja/bulto del producto.
- **Unidades por Tarima**: Unidades del producto que componen la paleta/estante/tarima.

Dicha información es necesaria porque al momento de darle entrada a los productos, ADempiere evalua la existencia del producto en las ubicaciones configuradas para almacenarlo en las mismas según los valores configurados en el producto (unidades por paquete y unidades por tarima).

Para la presentación del caso, se tiene como ejemplo el producto **PRODUCTO DE PRUEBA**

Cuando se tengan listas las configuraciones necesarias, se puede proceder a realizar las transacciones que ejecutan la funcionalidad. Para ello, el procedimiento a seguir es el siguiente:

### **Orden de Distribución**

Se debe crear una orden de distribución, donde se especifique el producto, la ubicación donde se encuentra actualmente el producto (desde la cual se va mover) y la ubicación a la cual será movilizado el producto. Si desconoce el procedimiento para la elaboración de la misma, puede consultar el documento [Orden de Distribución](https://docs.erpya.com/docs/distribution-management/distribution-order.html). 

Al completar el registro, se aplica la funcionalidad en base a la configuración realizada en la ventana **Estructura del Almacén**, ejecutando lo siguiente:

- Se lleva las cantidades de los campos **Cantidad** y **Cantidad Ordenada** a cero (o), en la línea creada donde se esta solicitando mover a la ubicación por defecto **CDG**.
- Se crea de manera automática una línea con los valores de la línea que tiene la ubicación por defecto **CDG**, incluyendo las cantidades de los campos **Cantidad** y **Cantidad Ordenada** antes de ser llevadas a cero (o), pero reemplazando la ubicación **CDG** por alguna de las ubicaciones configuradas en la ventana **Estructura del Almacén**. 

::: info Nota

El tipo de documento de orden de distribución puede ser configurado para que al completar el registro, se generen de manera automática los movimientos de inventario (Desde la ubicación origen a transito y desde transito a la ubicación destino).

:::

Para la presentación del caso, se generó la orden de distribución **OD-327**, en la cual se establece que se necesita mover el producto **PP-010101_PRODUCTO DE PRUEBA**, desde la ubicación **CUARENTENA** hasta la ubicación **CDG** del almacén **CENTRO DE DISTRIBUCIÓN GUACARA**. Por lo que al completar el documento, ADempiere ejecuta la funcionalidad del WMS aplicando la configuración establecida anteriormente, generando de manera automatica los movimientos de inventario

- Movimiento de Inventario **MMI- 5260** desde la ubicación **CUARENTENA** hasta la ubicación **Transito WMS**
- Movimiento de Inventario **MMI- 5262** desde la ubicación **Transito WMS** hasta la ubicación **R2**

**Encabezado de la Orden de Distribución**

![encabezado de orden de distribucion](https://github.com/user-attachments/assets/a19f04c9-7ebb-47dc-91c5-65bfd5ef137c)

**Líneas de la Orden de Distribución**

![linea creada manual en la orden de distribucion](https://github.com/user-attachments/assets/8cea59c1-79bf-43e6-bbb5-5dd3eddf28dd)

![linea creada automatico en orden de distribucion](https://github.com/user-attachments/assets/bbcc8d66-3800-4b54-aaac-7c64393d7cc9)

**Encabezado del Movimiento de Inventario MMI- 5260**

![encabezado de movimiento mmi-5260](https://github.com/user-attachments/assets/29edf627-ac5a-4ed6-b8ce-041972e9d8aa)

**Línea del Movimiento de Inventario MMI- 5260**

![linea de movimiento mmi-5260](https://github.com/user-attachments/assets/d2518fde-bb0c-41dc-a65f-0c5e3b8e99bd)

**Encabezado del Movimiento de Inventario MMI- 5262**

![encabezado de movimiento mmi-5262](https://github.com/user-attachments/assets/c27941cb-4814-4312-8319-622ea49cd0b5)

**Línea del Movimiento de Inventario MMI- 5262**

![linea de movimiento mmi-5262](https://github.com/user-attachments/assets/b2f66b1f-3ce0-41a3-b806-f66f6800500d)

## **Ejecución de Salidas de la Gestión Avanzada de Almacenes**

El procedimiento a realizar, que garantiza el correcto funcionamiento de las salidas de la gestión avanzada de almacenes es el siguiente

### **Generar Orden de Venta o Pedido**

Se debe crear una orden de venta al cliente de manera regular, si desconoce el procedimiento para la elaboración de la misma, puede consultar el documento [Orden de Venta](https://docs.erpya.com/docs/sales-management/order.html).

Para la presentación del caso, se elaboró la orden de venta **OVN-20906**

**Encabezado de la Orden** 

![Encabezado de la Orden de Venta OVN-20906](/assets/docs/material-management/encabezado-orden-ovn-20906.png)

**Líneas de la Orden**

![Línea de la Orden de Venta OVN-20906](/assets/docs/material-management/linea-orden-ovn-20906.png)

### **Generar Orden de Salida**

Se debe crear la orden de salida desde la orden de venta, este documento se puede generar de dos maneras:

1. De manera automática: Esto sucede cuando la orden de venta es configurada para que al momento de completar la misma, se genere una orden de salida (copia fiel exacta de la orden de venta). Al mismo tiempo, se asocia el registro de la orden de salida en la orden de venta que se completa.

2. Por medio del smart browser: [Generar Orden de Salida (Orden de Venta / Distribución)](https://docs.erpya.com/docs/distribution-management/outbound-order.html).

Una vez ejecutado el proceso y generado el documento, el registro de la orden de salida puede ser ubicado en la ventana **Orden de Salida**. 

Para la presentación del caso, se generó la orden de salida **OSE-3452**

**Encabezado de la Orden** 

![Encabezado de la Orden de Salida OSE-3452](/assets/docs/material-management/encabezado-orden-ose-3452.png)

**Líneas de la Orden**

![Línea de la Orden de Salida OSE-3452](/assets/docs/material-management/linea-orden-ose-3452.png)

### **Generar Lista de Selección para Entrega (Picking List)**

Para generar la lista de selección para la entrega (Picking List), se debe ubicar en el menú de ADempiere la carpeta **Gestión Avanzada de Almacenes**, luego se debe seleccionar la carpeta **Operaciones de Salida**, para finalmente seleccionar el smart browser **Generar Lista de Selección para Entrega (Picking List)**.

![Menú de ADempiere Picking List](https://github.com/user-attachments/assets/dab5e852-2ac3-4aa6-9228-e9d70d3f1907)

Estando en el smart browser se podran visualizar diferentes campos que permiten filtrar la información en base al requerimiento del usuario.

- **Orden de Venta**: Para los casos en los que se requiere generar el Picking List a una orden en especifico, se debe colocar allí el numero de documento de la orden para que al ejecutar la busqueda se puedan visualizar todas las líneas asociadas a la orden filtrada.

- **Fecha de la Orden**: El campo permite colocar un rango de fechas para filtrar todas las ordenes que se encuentren en el rango especificado.

- **Socio del Negocio**: Permite filtrar la información por un socio en especifico.

- **Producto**: Permite filtrar la información en base al producto ingresado en el campo.

![Smart Browser Picking List](/assets/docs/material-management/smart-browser-picking-list.png)

Para la presentación del caso, se filtrará la información por la orden de venta **OVN-20906**.

Luego de colocar la orden de venta y seleccionar la opción **Comenzar Búsqueda**, podrá visualizar todas las líneas de la orden, según los campos utilizados para filtrar la información.

![Resultado de Busqueda Smart Browser Picking List](/assets/docs/material-management/resultado-busqueda-picking-list.png)

Debe seleccionar las líneas con las que requiere generar el Picking List

![Seleccion Lineas Picking List](/assets/docs/material-management/seleccion-lineas-picking-list.png)

La información de los campos inferiores, es cargada por defecto según la configuración realizada por los consultores de **ERPyA** indicando:

- **Almacén**: El almacén del cual saldrán los productos.

- **Ubicación**: La ubicación exacta del almacén del cual sandrán los productos.

- **Tipo de Área del Almacén**: El tipo de área con el cual fue configurado el proceso.

- **Tipo de Sección del Almacén**: El tipo de selección con el cual fue configurado el proceso.

Para la ejecución del proceso debe seleccionar la opción **OK**. 

Al ejecutar el proceso, ADempiere muestra de manera automática en la ventana **Documento Seleccionado (Gestión de Almacén)**, el Listado de Selección para Entrega (Picking List).

Para la presentación del caso, fue generado el Picking List **1000202**

![Picking List en Documento Seleccionado](/assets/docs/material-management/picking-list-generado.png)

En la pestaña **Línea de Orden de Salida** de dicha ventana puede verificar las líneas cargadas.

![Linea de Picking List Generado](/assets/docs/material-management/linea-picking-list-generado.png)

Adicionalmente puede ver el reporte del Picking List, regresando a la pestaña principal **Documento Seleccionado (Gestión de Almacén)** y luego seleccionando el icono **Informe**.

![Reporte de Picking List](/assets/docs/material-management/reporte-picking-list-generado.png)

### **Generar Entrega y Factura**

Luego de tener en ADempiere la **Lista de Selección para Entrega (Picking List)**, se procede a generar la entrega y la factura de los productos. 

Estos documentos se pueden realizar ejecutando los siguientes procesos:

1. [Generar Entrega / Factura desde Orden de Salida](https://docs.erpya.com/docs/distribution-management/generate-invoice-and-delivery-from-outgoing-order.html)

2. [Generar Entregas desde Orden de Salida](https://docs.erpya.com/docs/sales-management/delivery.html#generar-entregas-desde-orden-de-salida).

3. [Generar Factura desde Orden de Salida](https://docs.erpya.com/docs/sales-management/bill.html).

Para la presentación del caso, fue generada la entrega **EN-21290**.

![encabezado entrega desde os](/assets/docs/material-management/encabezado-entrega-desde-os.png)

Para la presentación del caso, fue generada la factura **217764**.

![encabezado factura desde os](/assets/docs/material-management/encabezado-factura-desde-os.png)
