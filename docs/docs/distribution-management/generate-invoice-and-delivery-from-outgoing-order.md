---
title: Generar Entrega / Factura desde Orden de Salida
category: Documentation
star: 9
article: false
---

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar entregas y facturas desde orden de salida en la versión 3.9.2 de ADempiere en la localización Venezuela.

El proceso **Generar Entrega / Factura desde Orden de Salida** cuenta con el checklist **Consolidado en un Documento** que al estar tildado permite agrupar todas las órdenes de salida que tenga un mismo socio del negocio para generar una entrega y una factura. Si en las órdenes de salida seleccionadas se encuentran productos con un mismo código, ADempiere suma en la factura todos los productos que posean el mismo código, ubicándolos en una sola línea.

En el caso de que el checklist no se encuentre tildado, el proceso **Generar Entrega / Facturas desde Orden de Salida** es ejecutado de forma regular, generando tantas facturas como órdenes de venta tenga la orden de salida.

A continuación se explica el procedimiento que debe ser realizado para generar entregas y facturas desde orden de salida.

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Avanzada de Almacenes**, luego seleccione la carpeta **Operaciones de Salidas**, por último seleccione el proceso **Generar Entrega / Factura desde Orden de Salida**.

![Menú de smart browser generar entrega y factura desde os](https://github.com/user-attachments/assets/d8cfb493-dd1b-49f1-a6bf-9c843931609a)

Imagen 1. Menú de ADempiere: Generar Entrega / Factura desde Orden de Salida

Podrá visualizar la ventana **Generar Entrega / Factura desde Orden de Salida** y proceder al llenado de los campos correspondientes para filtrar la búsqueda.

![smart browser generar entrega y salida desde os](https://github.com/user-attachments/assets/bac66f22-aad6-4bf0-8f1d-b79304eb39c1)

Imagen 2. Smart Browser Generar Entrega / Factura desde Orden de Salida

Seleccione en el campo **Orden de Salida**, la orden de salida de la cual se va a filtrar la búsqueda.

::: info Nota

Para ejemplificar el registro solo es seleccionada la orden de salida como filtro de búsqueda, los filtros de búsqueda son acorde a la comodidad del cliente.

:::

![campo os de smart browser generar entrega y factura desde os](https://github.com/user-attachments/assets/a6a2c7e3-1b67-4da7-96de-07039ee545d4)

Imagen 3. Campo Orden de Salida

Seleccione la opción **Comenzar Búsqueda** para realizar la búsqueda de los documentos según los filtros indicados.

![opcion comenzar busqueda de smart browser generar entrega y factura desde os](https://github.com/user-attachments/assets/65ec55bc-b3cd-465c-8507-ee762ccbf3c0)

Imagen 4. Opción Comenzar Búsqueda

Seleccione las líneas de la orden de salida por la cual será generada la entrega y la factura.

![lineas de os en smart browser generar entrega y factura desde os](https://github.com/user-attachments/assets/48b9523b-8720-4617-8ea2-04f3ed7e2383)

Imagen 5. Líneas de la Orden de Salida

Seleccione la opción **OK**, para generar la entrega y la factura desde la orden de salida seleccionada.

![opcion ok en smart browser generar entrega y factura desde os](https://github.com/user-attachments/assets/58ae63a9-da2e-4516-845d-d441e032c29b)

Imagen 6. Opción OK

Podrá visualizar la parte inferior izquierda de la ventana, los numeros de documentos de los registros generados.

![nros de documentos generados](https://github.com/user-attachments/assets/83f83afa-462a-424a-ab01-1146066d0dd4)

Imagen 7. Nro. de Documentos de Registros Generados 

## Consultar Entrega Generada

Al consultar el registro en la ventana **Entregas (Cliente)**, puede visualizar la entrega al cliente generada desde la orden de salida.

![entrega generada](https://github.com/user-attachments/assets/404e57ab-cfc9-492d-94e7-c3dcffe1820d)

Imagen 8. Entrega en Ventana Entregas (Cliente)

## Imprimir Entrega Generada

Al imprimir el registro en la ventana **Entregas (Cliente)**, seleccionando el icono **Imprimir** ubicado en la barra de herramientas de ADempiere, podrá visualizar de la siguiente manera la entrega al cliente generada desde la orden de salida.

![reporte de entrega generada](https://github.com/user-attachments/assets/8afd68a9-5e15-44b1-be27-a3131d8168aa)

Imagen 9. Reporte de Entrega

## Consultar Facturas Generadas

Al consultar el registro en la ventana **Documentos por Cobrar**, puede visualizar la factura de cuentas por cobrar generada desde la orden de salida.

![factura generada](https://github.com/user-attachments/assets/370554af-c8cb-43ab-aab5-9ce4b1daaecd)

Imagen 10. Factura en Ventana Documentos por Cobrar

## Imprimir Facturas Generadas

Al imprimir el registro en la ventana **Documentos por Cobrar**, seleccionando el icono **Imprimir** ubicado en la barra de herramientas de ADempiere, podrá visualizar de la siguiente manera la factura de venta generada desde la orden de salida.

![reporte de factura generada](https://github.com/user-attachments/assets/aac18122-3a96-462b-abb0-c69eebf65232)

Imagen 11. Reporte de Factura
