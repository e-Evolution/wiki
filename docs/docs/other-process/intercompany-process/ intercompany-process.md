---
title: Proceso Intercompañía
category: Procedimientos
star: 9
tag:
 - Otros
 - Procesos
article: false
---

## ¿Cómo realizar los procesos intercompañía?

**Estos procesos los vamos a Dividir en dos etapas, En una primera etapa, tendremos dos Procesos, En el primer proceso vamos a crear una orden de compra desde la orden de venta, Donde en esta llamará los productos pedidos en la orden de venta a otra organización automáticamente a la orden de compra, Luego en el segundo proceso será Generara un movimiento de inventario para llamar mercancía de una organización a la nuestra, En la segunda etapa, Vamos a generar un movimiento de inventario, pero creando una orden de Distribución.**

## Requerimientos
- Realizar órdenes de Venta
- Tener Números de documento de las órdenes de venta

## **Primera etapa**

## Primer proceso
**Proceso para crear orden de compra desde la orden de venta**

**Teniendo nuestras respectivas órdenes de venta, con los productos requeridos a la otra organización, procederemos con la respectiva orden de compra.**

Aca podemos observar y verificar nuestra orden de venta
![](/assets/img/docs/general/intercompany-process1.png)

Con los respectivos productos en la línea de la orden
![](/assets/img/docs/general/intercompany-process2.png)
![](/assets/img/docs/general/intercompany-process3.png)

**Luego de tener visualizados nuestros productos y nuestro número de orden de venta, nos vamos
La orden de compra para generarlo desde la orden de venta.**

llegamos a la casilla de la orden de compra y visualizamos el siguiente ejemplo
![](/assets/img/docs/general/intercompany-process4.png)

**Aca crearemos una orden de compra nueva, llenando los siguientes parámetros**
- Compañía
- Organización
- Tipo de Documento Destino
- Fecha de orden
- Socio del negocio
- Dirección del socio Negocio
- Almacén (de entrega)
- Lista de precios
- Tipo de conversión

![](/assets/img/docs/general/intercompany-process4.png)
**Se observa el Ejemplo**

Luego nos vamos a la parte superior derecha y hacemos click en   <i class="fa-solid fa-gear"></i>
Nos aperturará varias opciones y seleccionaremos (Crear orden de compra desde la orden de venta)
![](/assets/img/docs/general/intercompany-process5.png)
Luego nos abrirá la siguiente pestaña
![](/assets/img/docs/general/intercompany-process6.png)

**llenaremos los criterios de busqueda**
- Referencia de Almacén
- Fecha de la Orden

Luego le daremos en **Comenzar busqueda**

Nos saldrán los productos la orden de venta que estamos buscando
![](/assets/img/docs/general/intercompany-process7.png)

Luego seleccionaremos dichos productos
![](/assets/img/docs/general/intercompany-process8.png)

Al estar seleccionados tildamos en el  <i class="fa-solid fa-check"></i>   y Creará nuestra **orden de compra**

teniendo nuestra orden de compra como se muestra en el ejemplo
![](/assets/img/docs/general/intercompany-process4.png)

Nos vamos a la línea de la orden de compra, Y verificamos nuestros productos

![](/assets/img/docs/general/intercompany-process9.png)
![](/assets/img/docs/general/intercompany-process10.png)

Luego de esto damos por culminado el primer proceso Denominado **(Proceso para crear orden de compra desde la orden de venta)**

## **Pasamos al segundo proceso de la primera etapa**

**Generar un movimiento de inventario**

Primero vamos a verificar nuestra orden de Venta
![](/assets/img/docs/general/intercompany-process11.png)

Luego de acá nos dirigiremos a la parte superior izquierda en el <i class="fa-solid fa-magnifying-glass"></i>  y escribiremos **Generar movimiento de inventario desde la orden de venta**
![](/assets/img/docs/general/intercompany-process15.png)

Luego nos abrirá la siguiente ventana
![](/assets/img/docs/general/intercompany-process12.png)

**llenaremos los criterios de búsqueda**
- Referencia de Almacén
- Fecha de la Orden

**Parámetros**
- Fecha del documento
- Acción del documento

Luego de esto le Damos en **Comenzar Búsqueda**
Y nos abrirá una pestaña con el producto que estamos buscando
![](/assets/img/docs/general/intercompany-process13.png)

Al estar seleccionados tildamos en el  <i class="fa-solid fa-check"></i>   y Generará el  movimiento de inventario desde la orden de venta

**Dato** **(Nos generara un numero de documento, con este vamos a poder ubicar nuestro movimiento de inventario)**

Para ubicar nuestro movimiento de inventario realizado nos vamos a a la parte superior izquierda en el <i class="fa-solid fa-magnifying-glass"></i> 
y escribiremos **Movimiento de inventario**
![](/assets/img/docs/general/intercompany-process16.png)

Nos abrirá la pestaña y nos vamos a <i class="fa-solid fa-magnifying-glass"></i> en la parte superior a **Encontrar registro**
![](/assets/img/docs/general/intercompany-process17.png)

Luego nos abrirá la siguiente pestaña
![](/assets/img/docs/general/intercompany-process18.png)
Y colocaremos el Número de documento que Obtuvimos al generar el movimiento de inventario y tildamos en <i class="fa-solid fa-check"></i>
Nos abrirá la ventana con el movimiento de inventario realizado
![](/assets/img/docs/general/intercompany-process14.png)
**Con esto tenemos culminada la Primera etapa del (Proceso intercompañía)**


