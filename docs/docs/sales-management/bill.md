---
title: Generar Factura desde Orden de Salida
category: Documentation
star: 9
article: false
---

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar facturas desde orden de salida en la versión 3.9.2 de ADempiere en la localización Venezuela.

El proceso **Generar Facturas desde Orden de Salida** cuenta con el checklist **Consolidado en un Documento** que al estar tildado permite agrupar todas las órdenes de salida que tenga un mismo socio del negocio para generar una factura. Si en las órdenes de salida seleccionadas se encuentran productos con un mismo código, ADempiere suma en la factura todos los productos que posean el mismo código, ubicándolos en una sola línea.

En el caso de que el checklist no se encuentre tildado, el proceso **Generar Facturas desde Orden de Salida** es ejecutado de forma regular, generando tantas facturas como órdenes de venta tenga la orden de salida.

A continuación se explica el procedimiento que debe ser realizado para generar facturas desde orden de salida.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Facturas de Ventas**, por último seleccione el proceso **Generar Factura desde Orden de Salida**.

![Campo](/assets/img/docs/sales-management/sam-sales-image1.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Generar Factura desde Orden de Salida** y proceder al llenado de los campos correspondientes para filtrar la búsqueda.

![Campo](/assets/img/docs/sales-management/sam-sales-image2.png)

Imagen 2. Ventana Generar Factura desde Orden de Salida

Seleccione en el campo **Orden de Salida**, la orden de salida de la cual se va a filtrar la búsqueda.

![Campo](/assets/img/docs/sales-management/sam-sales-image3.png)

Imagen 3. Campo Orden de Salida

Note

Para ejemplificar el registro solo es seleccionada la orden de salida como filtro de búsqueda, los filtros de búsqueda son acorde a la comodidad del cliente.

Seleccione la opción **Comenzar Búsqueda** para realizar la búsqueda de los documentos según los filtros indicados.

![Campo](/assets/img/docs/sales-management/sam-sales-image4.png)

Imagen 4. Opción Comenzar Búsqueda

Seleccione la orden de salida por la cual será generada la factura.

![Campo](/assets/img/docs/sales-management/sam-sales-image5.png)

Imagen 5. Seleccionar Orden de Salida

Seleccione la opción **OK**, para generar la factura desde la orden de salida seleccionada.

![Campo](/assets/img/docs/sales-management/sam-sales-image6.png)

Imagen 6. Opción OK

Podrá visualizar la siguiente ventana de confirmación donde debe seleccionar la opción **OK**.

![Campo](/assets/img/docs/sales-management/sam-sales-image7.png)

Imagen 7. Ventana de Confirmación y Opción OK

## Consultar Facturas Generadas

Al consultar el registro en la ventana **Documentos por Cobrar**, puede visualizar la factura de cuentas por cobrar generada desde la orden de salida.

![Campo](/assets/img/docs/sales-management/sam-sales-image8.png)

Imagen 8. Factura desde Orden de Salida

## Imprimir Facturas Generadas

Al imprimir el registro en la ventana **Documentos por Cobrar**, seleccionando el icono **Imprimir** ubicado en la barra de herramientas de ADempiere, podrá visualizar de la siguiente manera la factura de ventas generada desde la orden de salida.

![Campo](/assets/img/docs/sales-management/sam-sales-image9.png)

Imagen 9. Factura Generada desde la Orden de Salida
