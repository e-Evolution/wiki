---
title: Contabilidad de Transacciones
category: Documentation
star: 9
article: false
---

Cada transacción o proceso generado en cualquier organización de la compañía registrada en ADempiere, tiene como consecuencia un asiento contable que detalla la misma según su implicación contable.

El presente material elaborado por **ERPyA** pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para obtener el asiento contable generado en cada una de las transacciones realizadas en ADempiere, en su versión 3.9.2 para la localización Venezuela.

- Proceso de Egreso
  - Requisición
  - Orden de Compra
  - Factura de Cuentas por Pagar
  - Asignación Factura/Recepción
  - Recepción
  - Pago
  - Asignación de Factura/Pago
  - Conciliación
- Proceso de Ingreso
  - Orden de Venta
  - Factura de Cuentas por Cobrar
  - Entrega
  - Cobro
  - Asignación de Factura/Cobro
  - Conciliación
- Proceso de Inventario
  - Inventario Físico
  - Inventario Uso Interno
  - Movimiento de Inventario
  - Producción
- Proceso de Nómina Regular
  - Proceso Nómina
  - Pago de Nómina

## Proceso de Egreso

### Requisición

Realice el procedimiento regular para generar una requisición en ADempiere, el mismo es explicado en el documento **Registro de Requisición a Compra**, elaborado por **ERPyA**.

Luego de que el documento de requisición se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Requisición**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image1.png)

Imagen 1. Opción Contabilizado de la Ventana Requisición

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Requisición**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image2.png)

Imagen 2. Asiento Contable de la Ventana Requisición

### Orden de Compra

Realice el procedimiento regular para generar una orden de compra directa en ADempiere, el mismo es explicado en el documento **Registro de Orden de Compra Directa**, elaborado por **ERPyA**.

Luego de que el documento de orden de compra se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image3.png)

Imagen 3. Opción Contabilizado de la Ventana Órdenes de Compra

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Órdenes de Compra**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image4.png)

Imagen 4. Asiento Contable de la Ventana Órdenes de Compra

### Factura de Cuentas por Pagar

Realice el procedimiento regular para generar un documento por pagar en ADempiere, el mismo es explicado en el documento **Registro de Documento por Pagar**, elaborado por **ERPyA**.

Luego de que el documento de factura por pagar se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image5.png)

Imagen 5. Opción Contabilizado de la Ventana Documentos por Pagar

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Documentos por Pagar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image6.png)

Imagen 6. Asiento Contable de la Ventana Documentos por Pagar

### Asignación Factura/Recepción

Realice el procedimiento regular para generar una asignación en ADempiere, el mismo es explicado en el documento **Asignación de Factura a Recepción**, elaborado por **ERPyA**.

Luego de realizar por completo el procedimiento de asignación, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Facturas Asignadas a Recepciones**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image7.png)

Imagen 7. Opción Contabilizado de la Ventana Facturas Asignadas a Recepciones

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Asignar OC-Recibo-Factura**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image8.png)

Imagen 8. Asiento Contable de la Ventana Facturas Asignadas a Recepciones

### Recepción

Realice el procedimiento regular para generar una recepción de productos en ADempiere, el mismo es explicado en el documento **Registro de Recepción de Productos**, elaborado por **ERPyA**.

Luego de que el documento de recepción de productos se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Recepción de Productos**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image9.png)

Imagen 9. Opción Contabilizado de la Ventana Recepción de Productos

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Recepción de Productos**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image10.png)

Imagen 10. Asiento Contable de la Ventana Recepción de Productos

### Pago

Realice el procedimiento regular para generar un pago en ADempiere, el mismo es explicado en el documento **Registro de Pago**, elaborado por **ERPyA**.

Luego de que el documento pago se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image11.png)

Imagen 11. Opción Contabilizado de la Ventana Pago Cobro

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image12.png)

Imagen 12. Asiento Contable de la Ventana Pago Cobro

### Asignación de Factura/Pago

Ubique el documento de factura por pagar asociado al pago y seleccione la pestaña **Pagos Asignados** para visualizar la asignación generada por la transacción realizada entre la factura y el pago.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image13.png)

Imagen 13. Asignación Factura Pago

Note

La asignación **Factura/Pago**, es generada automáticamente después de completar el documento **Pago**, asociado a la factura.

Al hacer clic contrario sobre el campo **Asignación** en la pestaña **Pagos Asignados** de la ventana **Documentos por Pagar** y seleccionar la opción **Acercar**, podrá visualizar el documento de asignación donde debe seleccionar la opción **Contabilizado**, ubicado en la parte inferior de la ventana **Consulta de Asignación**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image14.png)

Imagen 14. Opción Contabilizado de la Ventana Consulta de Asignación

Podrá visualizar el asiento contable generado por la transacción anteriormente explicada.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image15.png)

Imagen 15. Asiento Contable de la Asignación Factura/Pago

### Conciliación

Realice el procedimiento regular para generar una conciliación en ADempiere, el mismo es explicado en el documento **Registro de Conciliación Automática**, elaborado por **ERPyA**.

Luego de que el documento de conciliación automática se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Estado de Cuentas Bancario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image16.png)

Imagen 16. Opción Contabilizado de la Ventana Estado de Cuentas Bancario

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Estado de Cuentas Bancario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image17.png)

Imagen 17. Asiento Contable de la Ventana Estado de Cuentas Bancario

## Proceso de Ingreso

### Orden de Venta

Realice el procedimiento regular para generar una orden de venta en ADempiere, el mismo es explicado en el documento **Registro de Orden de Venta**, elaborado por **ERPyA**.

Luego de que el documento de orden de venta se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Órdenes de Venta**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image18.png)

Imagen 1. Opción Contabilizado de la Ventana Órdenes de Venta

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Órdenes de Venta**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image19.png)

Imagen 2. Asiento Contable de la Ventana Órdenes de Venta

### Factura de Cuentas por Cobrar

Realice el procedimiento regular para generar una factura por cobrar en ADempiere, el mismo es explicado en el documento **Registro de Documento por Cobrar**, elaborado por **ERPyA**.

Luego de que el documento por cobrar se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Documentos por Cobrar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image20.png)

Imagen 3. Opción Contabilizado de la Ventana Documentos por Cobrar

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Documentos por Cobrar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image21.png)

Imagen 4. Asiento Contable de la Ventana Documentos por Cobrar

### Entrega

Realice el procedimiento regular para generar una entrega en ADempiere, el mismo es explicado en el documento **Registro de Entregas (Cliente)**, elaborado por **ERPyA**.

Luego de que el documento de entrega se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Entregas (Cliente)**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image22.png)

Imagen 5. Opción Contabilizado de la Ventana Entregas (Cliente)

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Entregas (Cliente)**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image23.png)

Imagen 6. Asiento Contable de la Ventana Entregas (Cliente)

### Cobro

Realice el procedimiento regular para generar un cobro en ADempiere, el mismo es explicado en el documento **Registro de Cobro**, elaborado por **ERPyA**.

Luego de que el documento de cobro se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image24.png)

Imagen 7. Opción Contabilizado de la Ventana Pago/Cobro

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image25.png)

Imagen 8. Asiento Contable de la Ventana Pago/Cobro

### Asignación de Factura/Cobro

Luego de haber registrado el cobro de la factura por cobrar, ADempiere genera de manera automática la asignación entre el cobro y la factura. Para visualizar el mismo se debe ubicar en la pestaña **Facturas Pagadas** de la ventana **Documentos por Pagar** y seleccionar la opción **Acercar** desplegada al hacer clic contrario sobre el campo **Asignación**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image26.png)

Imagen 9. Opción Acercar de la Pestaña Facturas Pagadas

Luego de ubicar la asignación entre el cobro y la factura, en la ventana **Consulta de Asignación**, se debe seleccionar la opción **Contabilizado** de dicha ventana.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image27.png)

Imagen 10. Opción Contabilizado de la Ventana Consulta de Asignación

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Consulta de Asignación**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image28.png)

Imagen 11. Asiento Contable de la Ventana Consulta de Asignación

### Conciliación

Realice el procedimiento regular para generar una conciliación en ADempiere, el mismo es explicado en el documento **Registro de Conciliación Automática**, elaborado por **ERPyA**.

Luego de que el documento de conciliación automática se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Estado de Cuentas Bancario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image29.png)

Imagen 12. Opción Contabilizado de la Ventana Estado de Cuentas Bancario

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Estado de Cuentas Bancario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image30.png)

Imagen 13. Asiento Contable de la Ventana Estado de Cuentas Bancario

## Proceso de Inventario

### Inventario Físico

Realice el procedimiento regular para generar un inventario físico en ADempiere, el mismo es explicado en el documento Registro de Inventario Físico, elaborado por ERPyA.

Luego de que el documento de inventario físico se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Inventario Físico**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image31.png)

Imagen 1. Opción Contabilizado de la Ventana Inventario Físico

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Inventario Físico**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image32.png)

Imagen 2. Asiento Contable de la Ventana Inventario Físico

### Inventario Uso Interno

Realice el procedimiento regular para generar un inventario de uso interno en ADempiere, el mismo es explicado en el documento Registro de Inventario de Uso Interno, elaborado por ERPyA.

Luego de que el documento de inventario de uso interno se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Inventario Uso Interno**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image33.png)

Imagen 3. Opción Contabilizado de la Ventana Inventario Uso Interno

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Inventario Uso Interno**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image34.png)

Imagen 4. Asiento Contable de la Ventana Inventario Uso Interno

### Movimiento de Inventario

Realice el procedimiento regular para generar un movimiento de inventario en ADempiere, el mismo es explicado en el documento Registro de Movimiento de Inventario, elaborado por ERPyA.

Luego de que el documento de movimiento de inventario se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Movimiento de Inventario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image35.png)

Imagen 5. Opción Contabilizado de la Ventana Movimiento de Inventario

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Movimiento de Inventario**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image36.png)

Imagen 6. Asiento Contable de la Ventana Movimiento de Inventario

### Producción

Realice el procedimiento regular para generar una producción en ADempiere, el mismo es explicado en el documento Producción, elaborado por ERPyA.

Luego de que el documento de producción se encuentre en estado **Completo**, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Producción**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image37.png)

Imagen 7. Opción Contabilizado de la Ventana Producción

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Producción**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image38.png)

Imagen 8. Asiento Contable de la Ventana Producción

### Proceso de Nómina Regular

#### Proceso Nómina

Realice el procedimiento regular para procesar las nóminas en ADempiere, el mismo se encuentra explicado en el documento Registro de Nómina, elaborado por ERPyA.

Luego de que se encuentren procesadas las nóminas, seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Proceso Nómina**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image39.png)

Imagen 1. Opción Contabilizado de la Ventana Proceso Nómina

Podrá visualizar el asiento contable generado por la transacción anteriormente realizada en la ventana **Poceso Nómina**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image40.png)

Imagen 2. Asiento Contable de la Nómina

#### Pago de Nómina

Realice el procedimiento regular para reflejar en ADempiere el pago de la nómina por empleado, el mismo se encuentra explicado en el documento Registro de Pagos de Nómina, elaborado por ERPyA.

Note

El pago de nómina que se genera al cumplir con todos los procesos que indica el documento, rebaja el pasivo.

Al culminar los procesos de selección de pagos e imprimir/exportar pagos, que indica el documento Registro de Pagos de Nómina, se genera un **Pago de Nómina** en caja. Seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Caja**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image41.png)

Imagen 3. Opción Contabilizado de la Ventana Caja

Podrá visualizar el asiento contable que se genera por la selección de pagos e imprimir/exportar pagos anteriormente realizados.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image42.png)

Imagen 4. Asiento Contable del Pago de la Nómina

Adicional a ello, al culminar el proceso de transferencia bancaria que indica el documento Registro de Pagos de Nómina, se genera un **Pago Nacional** en banco y a su vez un **Cobro Nacional** en caja.

Seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image43.png)

Imagen 5. Opción Contabilizado de la Ventana Pago/Cobro

Podrá visualizar el asiento contable que se genera por el egreso de la transferencia bancaria anteriormente realizada.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image44.png)

Imagen 6. Asiento Contable por el Egreso de la Transferencia Bancaria

Seleccione la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Caja**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image45.png)

Imagen 7. Opción Contabilizado de la Ventana Caja

Podrá visualizar el asiento contable que se genera por el ingreso de la transferencia bancaria anteriormente realizada.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image999.png)

Imagen 8. Asiento Contable por el Ingreso de la Transferencia Bancaria

Finalmente, al culminar el proceso de cierre de caja que indica el documento Registro de Pagos de Nómina, con la finalidad de conciliar los egresos e ingresos generados en caja y llevar la misma a su saldo inicial nuevamente, se obtiene un asiente contable que refleja dicha transacción, seleccionando la opción **Contabilizado**, ubicada en la parte inferior de la ventana **Cierre de Caja**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image46.png)

Imagen 9. Opción Contabilizado de la Ventana Cierre de Caja

Podrá visualizar el asiento contable que se genera por la transacción anteriormente realizada.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image47.png)

Imagen 10. Asiento Contable por el Cierre de Caja
