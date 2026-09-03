---
title: Cierre de Caja del Punto de Venta
category: Documentation
star: 9
article: false
---

El proceso cierre de caja del punto de venta consiste en ejecutar el mismo desde la ventana **Punto de Venta**. Su finalidad es completar el registro de cierre de caja creado con la cuenta **Caja POS** en la que fueron realizadas las transacciones de venta, dejando la cuenta en su saldo inicial. Para ello, es necesario que se realice el flujo de trabajo regular establecido para el punto de venta, es decir, se deben realizar los siguientes procesos:

La apertura de caja desde el proceso de punto de venta

La venta de los productos desde el punto de venta

El retiro de fondos desde el punto de venta

Cada uno de los procesos anteriormente nombrados, generan documentos que se asocian de manera automática a la línea de los registros creados en la ventana **Cierre de Caja**, con las cuentas **Caja POS** y **Caja Administrativa**.

Adicional a ello, al ejecutar el proceso cierre de caja del punto de venta, ADempiere deja el cierre de caja creado con la cuenta **Caja Administrativa**, en estado **Borrador**, para que este sea completado de forma manual.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Cierre de Caja**, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image26.png)

Imagen 1. Diagrama de Cierre de Caja POS

A continuación, se específica el procedimiento que se debe realizar para ejecutar correctamente el cierre de caja POS.

## Ejecución del Proceso

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Ventas**, luego seleccione la carpeta **Órdenes de Venta**, por último seleccione la carpeta **Punto de Venta**. Para finalizar, seleccione la ventana **Punto de Venta**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image27.png)

Imagen 2. Menú de ADempiere

Luego de realizar desde el punto de venta todas las tomas de pedido del día, seleccione la opción **Cerrar Caja del Punto de Venta**, ubicada en el menú desplegado por el icono **Proceso** de la barra de herramientas de la ventana **Punto de Venta**, explicada en el documento Barra de Herramientas del Punto de Venta elaborado por ERPyA.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image28.png)

Imagen 3. Opción Cerrar Caja del Punto de Venta

Podrá visualizar la ventana **Cerrar Caja del Punto de Venta**, con diferentes campos que permiten filtrar la búsqueda de información según lo requerido por el socio del negocio vendedor que esta realizando el cierre de caja.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image29.png)

Imagen 4. Ventana Cierre de Caja del Punto de Venta

En el campo **Terminal PDV**, podrá visualizar el terminal configurado para el socio del negocio vendedor.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image30.png)

Imagen 5. Campo Terminal PDV del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta

En el campo **Cuenta Bancaria**, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image31.png)

Imagen 6. Campo Cuenta Bancaria del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta

Seleccione en el campo **Fecha de la Transacción**, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image32.png)

Imagen 7. Campo Fecha de la Transacción del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta

Seleccione en el campo **Tipo de Licitación**, el tipo de pago por el cual requiere filtrar las tomas de pedido realizadas.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image33.png)

Imagen 8. Campo Tipo de Licitación del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta

Indique en el campo **Cobros**, si las tomas de pedido realizadas fueron cobradas o no.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image34.png)

Imagen 9. Campo Cobros del Filtro de Búsqueda de la Ventana Cierre de Caja del Punto de Venta

Seleccione la opción **Comenzar Búsqueda**, para realizar la búsqueda de todas las tomas de pedido realizadas por el socio del negocio vendedor, según lo seleccionado en los campos anteriormente explicados.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image35.png)

Imagen 10. Opción Comenzar Búsqueda para Filtrar la Búsqueda de la Ventana Cierre de Caja del Punto de Venta

Podrá visualizar el listado de todos los cobros realizados por las órdenes de ventas POS generadas desde el punto de venta. Así como también, las transacciones de apertura y retiros de fondos que se realicen en la caja durante el día, para realizar el cierre de caja debe seleccionar todos los registros de transacciones que contiene la misma.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image36.png)

Imagen 11. Listado de Todos los Cobros Realizados por las Órdenes de Ventas del Punto de Venta

En el grupo de campos **Parámetros**, podrá visualizar los siguientes campos:

En el campo **Terminal PDV**, podrá visualizar el terminal configurado para el socio del negocio vendedor.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image37.png)

Imagen 12. Campo Terminal PDV de la Ventana Cierre de Caja del Punto de Venta

En el campo **Cuenta Bancaria**, podrá visualizar la cuenta caja asociada al socio del negocio vendedor en la configuración del terminal PDV.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image38.png)

Imagen 13. Campo Cuenta Bancaria de la Ventana Cierre de Caja del Punto de Venta

En el campo **Fecha de la Transacción**, el rango de fecha en el cual fue realizada la toma de pedido por medio del punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image39.png)

Imagen 14. Campo Fecha de la Ventana Cierre de Caja del Punto de Venta

Para calcular el valor correspondiente a los siguientes campos, ADempiere realiza la conversión de todos los montos de los pagos y cobros de la caja, a la moneda de la caja para luego realizar los respectivos cálculos y obtener el valor de cada uno.

En el campo **Total de la Línea**, la cantidad total de la línea con impuestos incluidos.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image40.png)

Imagen 15. Campo Total de la Línea de la Ventana Cierre de Caja del Punto de Venta

Note

El valor de este campo proviene de la sumatoria del gran total de todas las órdenes de venta.

En el campo **Total Pagado**, la monto total pagado de las órdenes de venta realizadas desde el punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image41.png)

Imagen 16. Campo Total Pagado de la Ventana Cierre de Caja del Punto de Venta

Note

El valor de este campo proviene de la sumatoria de todos los cobros y pagos realizados en la caja, convertidos a la moneda de la caja, (Cobros Convertidos a la Moneda de la Caja + Pagos Convertidos a la Moneda de la Caja).

En el campo **Total Abierto**, el monto total abierto de las órdenes de venta realizadas desde el punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image42.png)

Imagen 17. Campo Total Abierto de la Ventana Cierre de Caja del Punto de Venta

Note

Este valor proviene de la sumatoria de todos los montos pendientes por cobrar cuando las ordenes de ventas son a crédito.

En el campo **Diferencia Monto**, podrá visualizar el monto resultante de la sumatoria del monto total de la apertura más el resultado del total cobrado menos el total de los retiros.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image43.png)

Imagen 18. Campo Diferencia Monto de la Ventana Cierre de Caja del Punto de Venta

Note

El valor de este campo proviene de la sumatoria de todos los montos pendientes por cobrar de las órdenes de venta, para el cálculo del mismo se emplea la fórmula (Total de la Apertura + (Total de los Cobros - Total de los Retiros)).

El campo **Diferencia Edo. de Cuenta**, muestra el saldo que posee la cuenta caja en la que se encuentra realizando el proceso **Cierre de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image44.png)

Imagen 19. Campo Diferencia Edo. de Cuenta

Tilde el checklist **Sobre/Sub Pago**, para indicar que existe un sobre pago (no contabilizado) o un sub pago (pago parcial).

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image45.png)

Imagen 20. Checklist Sobre/Sub Pago de la Ventana Cierre de Caja del Punto de Venta

Note

Si el punto de venta tuvo pagos de más (Sobre) o de menos (Sub), ADempiere calcula la diferencia. Para el caso expuesto en el presente material, no es necesario seleccionar el checklist.

Seleccione en el campo **Cargo**, el cargo correspondiente al cierre de caja que se encuentra realizando desde el punto de venta.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image46.png)

Imagen 21. Campo Cargo de la Ventana Cierre de Caja del Punto de Venta

Note

Cuando existen pagos de más (Sobre) o de menos (Sub), se selecciona un cargo y ADempiere genera una linea en el cierre contra el cargo seleccionado, permitiendo cuadrar la caja del día. Para el caso expuesto en el presente material, no es necesario seleccionar ningún cargo.

Seleccione la opción **OK**, para realizar el cierre de caja del punto de venta con los cobros seleccionados y generar el documento pertinente en la ventana **Cierre de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image47.png)

Imagen 22. Opción OK de la Ventana Cierre de Caja del Punto de Venta

## Consultar Registro en Cierre de Caja

Al ejecutar el proceso **Cerrar de Caja del Punto de Venta**, se completa el registro con la cuenta **Caja 01**, creado en la ventana **Cierre de Caja**, llevando la misma a cero (0) nuevamente.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image48.png)

Imagen 23. Cierre de Caja 01 Completada

Podrá visualizar en la pestaña **Línea de Cierre de Caja**, los registros que fueron creados automáticamente a lo largo del día según las transacciones que fueron realizadas en la caja. Basicamente estos son:

Apertura: Crea el registro de cierre de caja (Caja 01), asociando en la línea del mismo el documento de ingreso generado en caja.

Cobros: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de cobro generado en caja, asociando el documento a la línea.

Retiro de Fondos: Crea en la línea de cierre de caja (Caja 01), un registro por cada documento de egreso generado en caja, asociando el documento a la línea.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image49.png)

Imagen 24. Pestaña Línea de Cierre de Caja 01 Completada

## Completar Registro en Cierre de Caja

Ubique el registro de la **Caja Administrativa** generado en la ventna **Cierre de Caja**, el cual se encuentra en estado **Borrador**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image50.png)

Imagen 25. Cierre de Caja Administrativa en Estado Borrador

Al seleccionar la pestaña **Línea de Cierre de Caja**, podrá visualizar las líneas creadas con los registros asociados de apertura si fue utilizada la caja para realizar apertura y retiro si fueron realizados retiros en la moneda de la caja en la que se encuentra.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image51.png)

Imagen 26. Pestaña Línea de Cierre de Caja

Regrese a la pestaña principal **Cierre de Caja**, para ejecutar el cierre de la misma.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image52.png)

Imagen 27. Pestaña Principal Cierre de Caja

Seleccione la opción **Completar**, para completar el cierre de caja de la **Caja Administrativa**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image53.png)

Imagen 28. Opción Completar del Cierre de Caja

Seleccione la acción **Completar** y la opción **OK**, para completar el registro.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image54.png)

Imagen 29. Acción Completar y Opción OK del Cierre de Caja
