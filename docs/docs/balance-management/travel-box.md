---
title: Caja Viáticos
category: Documentation
star: 9
article: false
---

ADempiere permite controlar el dinero que la empresa le asigna a sus trabajadores seleccionados, por medio de la caja creada a cada uno de ellos. El proceso **Caja Viáticos** es realizado con la finalidad de facilitar un dinero a un empleado y pueda ser utilizado para solventar situaciones de viajes laborales, por ende debe reflejarse en su caja correspondiente.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere viáticos de personal, en su versión 3.9.2 para la localización Venezuela.

- Registro de Caja Viáticos
  - Viáticos Igual al Gasto
  - Viáticos Mayor al Gasto
  - Gasto Mayor a Viáticos

## Registro de Caja Viáticos

En el registro de caja viáticos de una empresa u organización, se pueden presentar diversos acontecimientos que permiten ejecutar el proceso de diferentes maneras. Siendo uno de ellos, el registro de caja viáticos cuando el monto de los viáticos resulta igual que el monto de los gastos. Otro caso puede ser, cuando el monto de los viáticos resulta mayor al monto de los gastos. Finalmente, se puede presentar el caso en el que el monto de los viáticos resulta menor al monto de los gastos.

ADempiere permite controlar la caja viáticos en cualquiera de los acontecimientos expuestos anteriormente, para ello se debe seguir los procedimientos que se presentan a continuación.

### Viáticos Igual al Gasto

El proceso de registro de caja viáticos para el caso en el que el monto total de los viáticos resulta igual al monto total del gasto, debe ser realizado de la siguiente manera:

#### Transferencia Bancaria por Viáticos

Se realiza la transferencia bancaria a caja viáticos por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Registro de Transferencia Bancaria, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image392.png)

Imagen 1. Transferencia Bancaria por Viáticos

Note

Al realizar el proceso de transferencia bancaria, es generado un egreso de banco y un ingreso a caja viáticos. De igual manera, es creado un cobro en caja y un pago en pago/cobro.

Al consultar el egreso de banco en la ventana **Pago/Cobro**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image393.png)

Imagen 2. Egreso de Banco por Viáticos

Al consultar el ingreso a caja viáticos en la ventana **Caja**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image394.png)

Imagen 3. Ingreso a Caja por Viáticos

#### Relación de Facturas

Se realiza la relación de factura por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Relación de Facturas o Justificación de Gastos, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image395.png)

Imagen 4. Relación de Facturas de Gastos

#### Cierre de Caja

Se realiza el procedimiento regular para generar un cierre de caja, seleccionando la cuenta **Caja Viáticos** y el tipo de documento **Cierre de Caja Viáticos**. Para ello, se debe ejecutar el procedimiento explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image396.png)

Imagen 5. Cierre de Caja Viáticos

Note

Se selecciona el registro de la relación de factura realizada anteriormente con el monto total de la factura. Adicional a ello, se selecciona el registro de la transferencia bancaria realizada anteriormente. Lo anterior, con la finalidad de llevar la cuenta caja viáticos a su monto inicial, para este ejemplo el monto inicial es cero (0).

### Viáticos Mayor al Gasto

El proceso de registro de caja viáticos para el caso en el que el monto total de los viáticos resulta mayor al monto total del gasto, debe ser realizado de la siguiente manera:

#### Transferencia Bancaria por Viáticos

Se realiza la transferencia bancaria a caja viáticos por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Registro de Transferencia Bancaria, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image397.png)

Imagen 6. Transferencia Bancaria por Viáticos

Note

Al realizar el proceso de transferencia bancaria, es generado un egreso de banco y un ingreso a caja viáticos. De igual manera, es creado un cobro en caja y un pago en pago/cobro.

Al consultar el egreso de banco en la ventana **Pago/Cobro**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image398.png)

Imagen 7. Egreso de Banco por Viáticos

Al consultar el ingreso a caja viáticos en la ventana **Caja**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image399.png)

Imagen 8. Ingreso a Caja por Viáticos

#### Relación de Facturas

Se realiza la relación de factura por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Relación de Facturas o Justificación de Gastos, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image400.png)

Imagen 9. Relación de Facturas de Gastos

#### Cierre de Caja En Borrador

Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando la cuenta **Caja Viáticos** y el tipo de documento **Cierre de Caja Viáticos**.

Note

Se selecciona el registro de la relación de factura realizada anteriormente con el monto total de la factura. Adicional a ello, se selecciona el registro de la transferencia bancaria realizada anteriormente. Lo anterior, con la finalidad de llevar la cuenta caja viáticos a su monto inicial, para este ejemplo el monto inicial es cero (0).

![Campo](/assets/img/docs/balance-management/bam-balance-image401.png)

Imagen 10. Cierre de Caja Viáticos

Warning

Si el monto total de la transferencia bancaria realizada anteriormente a la caja viáticos del empleado es mayor al monto total gastado por el mismo, es necesario que el cierre de caja se genere en estado **Borrador** y se proceda a realizar una transferencia bancaria por el excedente del monto, antes de realizar el cierre de la caja viáticos del empleado nuevamente.

#### Transferencia Bancaria por Excedente

Realice el procedimiento regular para generar una transferencia bancaria, explicado en el documento Registro de Transferencia Bancaria, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image402.png)

Imagen 11. Transferencia Bancaria por Excedente de Viáticos

Note

Al realizar el proceso de transferencia bancaria, es generado un egreso de caja viáticos y un ingreso a banco. De igual manera, es creado un pago en caja y un cobro en pago/cobro.

Al consultar el egreso de caja viáticos en la ventana **Caja**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image403.png)

Imagen 12. Egreso de Caja por Excedente de Viáticos

Al consultar el ingreso a banco en la ventana **Pago/Cobro**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image999.png)

Imagen 13. Ingreso a Banco por Excedente de Viáticos

#### Completar Cierre de Caja

Ubique el registro del cierre de caja **CCV-2**, generado anteriormente en estado **Borrador** y seleccione la opción **Crear a Partir de Caja**, para seleccionar el registro de la transferencia bancaria realizada con el excedente de los viáticos. Finalmente, complete el cierre de caja para llevar la caja viáticos a su saldo inicial. Recuerde que el procedimiento regular para generar un cierre de caja, se encuentra explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image404.png)

Imagen 14. Cierre de Caja Viáticos

Note

Se selecciona el registro de la transferencia bancaria realizada desde la cuenta caja viáticos, por el monto restante abierto en dicha caja. Lo anterior, con la finalidad de llevar la cuenta caja viáticos a su monto inicial, para este ejemplo el monto inicial es cero (0).

## Gasto Mayor a Viáticos

El proceso de registro de caja viáticos para el caso en el que el monto total de los gastos resulta mayor al monto total de los viáticos, debe ser realizado de la siguiente manera:

### Transferencia Bancaria por Viáticos

Se realiza la transferencia bancaria a caja viáticos por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Registro de Transferencia Bancaria, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image405.png)

Imagen 15. Transferencia Bancaria por Viáticos

Note

Al realizar el proceso de transferencia bancaria, es generado un egreso de banco y un ingreso a caja viáticos. De igual manera, es creado un cobro en caja y un pago en pago/cobro.

Al consultar el egreso de banco en la ventana **Pago/Cobro**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image406.png)

Imagen 16. Egreso de Banco por Viáticos

Al consultar el ingreso a caja viáticos en la ventana **Caja**, se puede visualizar el mismo de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image407.png)

Imagen 17. Ingreso a Caja por Viáticos

### Relación de Facturas

Se realiza la relación de factura por el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Registros de Montos no Reembolsables para Viáticos y Reembolsos. Finalmente, se debe ejecutar el procedimiento explicado en el documento Relación de Facturas o Justificación de Gastos, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image408.png)

Imagen 18. Relación de Facturas de Gastos

### Cierre de Caja En Borrador

Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando la cuenta **Caja Viáticos** y el tipo de documento **Cierre de Caja Viáticos**.

Note

Se selecciona el registro de la relación de factura realizada anteriormente con el monto total de la factura. Adicional a ello, se selecciona el registro de la transferencia bancaria realizada anteriormente. Lo anterior, con la finalidad de llevar la cuenta caja viáticos a su monto inicial, para este ejemplo el monto inicial es cero (0).

![Campo](/assets/img/docs/balance-management/bam-balance-image409.png)

Imagen 19. Cierre de Caja Viáticos

Warning

Si el monto total de la transferencia bancaria realizada anteriormente a la caja viáticos del empleado es menor al monto total gastado por el mismo, es necesario que el cierre de caja se genere en estado **Borrador** y se proceda a realizar una caja con el cargo **Monto no Reembolsable**, reflejando el monto total gastado de más, antes de realizar el cierre de la caja viáticos del empleado nuevamente.

### Relación de Montos no Reembolsables

Se registra una caja utilizando el tipo de documento **Cobro Viáticos** y el cargo **Monto no Reembolsable**, con el monto correspondiente. Para ello, se debe ejecutar el procedimiento explicado en el documento Relación de Facturas o Justificación de Gastos, elaborado por ERPyA, donde se indica como registrar una caja utilizando un cargo en lugar de una factura.

![Campo](/assets/img/docs/balance-management/bam-balance-image410.png)

Imagen 20. Registro de Caja con Cargo

### Completar Cierre de Caja

Ubique el registro del cierre de caja **CCV-3**, generado anteriormente en estado **Borrador** y seleccione la opción **Crear a Partir de Caja**, para seleccionar el registro de la caja realizada con el monto gastado de más. Finalmente, complete el cierre de caja para llevar la caja viáticos a su saldo inicial. Recuerde que el procedimiento regular para generar un cierre de caja, se encuentra explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image411.png)

Imagen 21. Cierre de Caja Viáticos

Note

Se selecciona el registro de la transferencia bancaria realizada desde la cuenta caja viáticos, por el monto restante abierto en dicha caja. Lo anterior, con la finalidad de llevar la cuenta caja viáticos a su monto inicial, para este ejemplo el monto inicial es cero (0).
