---
title: Transferencia Bancaria
category: Documentation
star: 9
article: false
---

Una transferencia bancaria en ADempiere es el proceso mediante el cual se realizan los traslados de fondos entre cuentas, para simular y reflejar en ADempiere los movimientos realizados en los bancos reales, el procedimiento reflejará en la cuenta **Banco Desde**, un egreso y a su vez un ingreso en la cuenta **Banco Hasta**.

El presente material elaborado por **ERPyA**, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar una transferencia bancaria en ADempiere, en su versión 3.9.2 para la localización Venezuela.

- Registro de Transferencia Bancaria
  - Consultar Egreso Generado de la Transferencia Bancaria
  - Consultar Ingreso Generado de la transferencia Bancaria
- Transferencia Bancaria de Nómina

## Registro de Transferencia Bancaria

Para realizar una transferencia bancaria en ADempiere deben seguir los siguientes pasos:

Ubique yseleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione el proceso **Transferencia Bancaria**.

![Campo](/assets/img/docs/balance-management/bam-balance-image369.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana del proceso **Transferencia Bancaria** y proceder al llenado de los campos correspondientes.

![Campo](/assets/img/docs/balance-management/bam-balance-image370.png)

Imagen 2. Ventana Transferencia Bancaria

Seleccione en el campo **Cuenta bancaria desde**, la cuenta a debitar el monto de la transferencia realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image371.png)

Imagen 3. Campo Cuenta Bancaria Desde

Note

La cuenta a debitar desde es la cuenta bancaria de donde saldrá la transferencia.

Seleccione en el campo **Cuenta Bancaria a Transferir**, la cuenta a acreditar el monto de la transferencia realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image372.png)

Imagen 4. Campo Cuenta Bancaria a Transferir

Note

La cuenta bancaria a transferir, es la cuenta en donde caerá la transferencia.

Seleccione en el campo **Socio del Negocio**, el socio del negocio titular de la cuenta seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image373.png)

Imagen 5. Campo Socio del Negocio

Seleccione en el campo **Moneda**, la moneda en la cual fue realizada la transferencia.

![Campo](/assets/img/docs/balance-management/bam-balance-image374.png)

Imagen 6. Campo Moneda

Seleccione en el campo **Cargo**, el cargo correspondiente a la transferencia entre cuentas que se está realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image375.png)

Imagen 7. Campo Cargo

Note

El cargo a colocar en la transferencia bancaria depenrá de que tipo de transferencia se este realizando.

Introduzca en el campo **No. del Documento**, la referencia correspondiente a la transferencia bancaria realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image376.png)

Imagen 8. Campo No. del Documento

Note

El número de documento a colocar en este campo es el número de la transferencia bancaria realizada del banco colocado en el campo **Cuenta bancaria desde**.

Introduzca en el campo **Documento Destino**, la referencia correspondiente a la transferencia bancaria realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image377.png)

Imagen 9. Campo Documento Destino

Note

El número de documento a colocar en este campo es el número de la transferencia bancaria realizada al banco seleccionado en el campo **Cuenta Bancaria a Transferir** (banco destino),el llenado de este campo aplicaría para aquellas transacciones de intercompañía el cual el personal que esté realizado el procedimiento conozca el número de transferencia en ambas cuentas bancarias (Banco a emisor/banco destino), si se desconoce el número de transferencia simplemente no se coloca, este campo no es un campo obligatorio por ello se puede obviar el llenado de este campo.

Introduzca en el campo **Monto**, el monto total de la transferencia bancaria realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image378.png)

Imagen 10. Campo Monto

Introduzca en el campo **Descripción**, una breve descripción referente a la transferencia entre cuentas que está realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image379.png)

Imagen 11. Campo Descripción

Introduzca en el campo **Fecha de Estado de Cuenta**, la fecha de la transferencia bancaria realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image380.png)

Imagen 12. Campo Fecha de Estado de Cuenta

Introduzca en el campo **Fecha Contable**, la fecha de la transferencia bancaria realizada.

![Campo](/assets/img/docs/balance-management/bam-balance-image381.png)

Imagen 13. Campo Fecha Contable

Si desea que los pagos/cobros que se generen de esta transferencia bancarias se concilien de una vez puede tildar la opción **Conciliar Automáticamente**, si no tilda esta opción los pagos/cobros no se conciliaran y deberán ser conciliados a través Registro de Conciliación Automática

![Campo](/assets/img/docs/balance-management/bam-balance-image382.png)

Imagen 14. Campo Conciliar Automáticamente

Seleccione la opción **OK**, para generar en ADempiere la transferencia entre cuentas bancarias.

![Campo](/assets/img/docs/balance-management/bam-balance-image383.png)

Imagen 15. Opción OK

Podrá apreciar el resultado del proceso de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image384.png)

Imagen 16. Resultado de Transferencia

Note

Al realizar el proceso de transferencia bancaria, es generado un egreso en la cuenta seleccionada en el campo **Cuenta bancaria desde** y un ingreso en la cuenta seleccionada en el campo **Cuenta Bancaria a Transferir**.

De igual manera, cuando se está trabajando las transferencias bancarias con cajas es creado un documento de cobro en la ventana **Caja** reflejando el ingreso a la cuenta seleccionada en el campo **Cuenta Bancaria a Transferir** y un pago en la ventana **Pago/Cobro** reflejando el egreso de la cuenta seleccionada en el campo **Cuenta bancaria desde**.

### Consultar Egreso Generado de la Transferencia Bancaria

Si en la transferencia bancaria en el campo **Cuenta Bancaria Desde** fue seleccionada una cuenta bancaria el pago caerá en la ventana **Pago/Cobro** y tendrá como número de documento el número colocado en el campo **No. del Documento** de la transacción bancaria.

![Campo](/assets/img/docs/balance-management/bam-balance-image385.png)

Imagen 17. Pago en Ventana Pago/Cobro

Si en la transferencia bancaria en el campo **Cuenta Bancaria Desde** fue seleccionada una cuenta de caja el pago caerá en la ventana **Caja** y tendrá como número de documento el número colocado en el campo **No. del Documento** de la transacción bancaria.

![Campo](/assets/img/docs/balance-management/bam-balance-image386.png)

Imagen 18. Pago en Ventana Caja

## Consultar Ingreso Generado de la transferencia Bancaria

Si en la transferencia bancaria en el campo **Cuenta Bancaria a Transferir** fue seleccionada una cuenta bancaria el cobro caerá en la ventana **Pago/Cobro**, si en el campo **Documento Destino** de la transferencia bancaria se colocó el número de la transacción este mismo debe aparecer como el número de documento del campo **No. del Documento** en la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image387.png)

Imagen 19. Cobro en Ventana Pago/Cobro

Note

Si en el campo **Documento Destino** de la transferencia bancaria no se colocó el número de la transacción, el número de documento a mostrar del cobro en la ventana **Pago/Cobro** será el mismo que se número colocado en el campo **No. del Documento** de la transferencia bancaria.

Si en la transferencia bancaria en el campo **Cuenta Bancaria a Transferir** fue seleccionada una cuenta de caja el cobro caerá en la ventana **Caja**, si en el campo **Documento Destino** de la transferencia bancaria se colocó el número de la transacción este mismo debe aparecer como el número de documento del campo **No. del Documento** en la ventana **Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image388.png)

Imagen 20. Cobro en Ventana Caja

Note

Si en el campo **Documento Destino** de la transferencia bancaria no se colocó el número de la transacción, el número de documento a mostrar del cobro en la ventana **Caja** será el mismo que se número colocado en el campo **No. del Documento** de la transferencia bancaria.

## Transferencia Bancaria de Nómina

Luego de completar la selección de pago y de generar los pagos de nómina en la ventana imprimir exportar pagos procedemos a realizar la transferencia bancaria, ubicamos en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione **Transferencia Bancaria**. Este proceso es realizado con la finalidad que la empresa cancele a la cuenta de caja el monto total cancelado a los empleados por la nómina procesada.

Cabe acotar que debe realizar la transferencia según el monto transferido a cada empleado

Si usted utiliza un txt para transferirle a todo el personal puede realizar una transferencia por el monto total del pago a los trabajadores.

Si usted paga particularmente a cada uno de sus empleados debe realizar una transferencia por cada pago que fué realizado para cada uno de sus empleados.

Warning

Recuerde que al realizar la transferencia usted esta es registrando cada uno de los pagos que salen del banco. Por tal motivo debe tener especial cuidado en cuanto a monto y a número de referencia

Seleccione en el campo **Cuenta Bancaria Desde** el nombre la cuenta bancaria original que utiliza la compañía para cancelar la nómina a los empleado. Esa será la cuenta que emitirá la transferencia bancaria.

Seleccione en el campo **Cuenta Bancaria a Transferir** el nombre de la cuenta de la caja, esa cuenta es igual a la cuenta bancaria que usted seleccionó en su selección de pago, la cual se identifica al final del nombre con la palabra tránsito. Esa cuenta representará la cuenta que recibirá la transferencia bancaria.

Seleccione en el campo **Socio de Negocio**, el socio de negocio registrado con los datos de su compañía.

Seleccione en el campo **Moneda** debe registrar la moneda con la cual se está cancelando la nómina, en este caso será bolívares (VES).

Seleccione en el campo **Cargo** el cargo denominado Efectivo en Tránsito Nómina, esté cargo se utiliza para indicar contablemente el registro del pago de la nómina.

Seleccione en el campo **No. del Documento** debe registrar el mismo número de documento que le generó la selección de pago creada para la cancelación de su proceso de nómina. En caso de que realice transferencia bancarias particulares debe registrar el número de referencia de la transferencia.

Seleccione en el campo **Documento Destino** el mismo número de documento que registró en el campo Nro. del Documento.

Seleccione en el campo **Monto** el monto total de la selección de pago que realizó anteriormente, ubique en la selección de pago el campo total total y allí encontrará el monto total de la selección de pago.

Seleccione en el campo **Descripción** una breve descripción de la transferencia realizada.

Seleccione en el campo **Fecha de Estado de Cuenta** la misma fecha con la que registró su selección de pago.

Seleccione en el campo **Fecha Contable** la misma fecha con la que registró su selección de pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image389.png)

Imagen 1. Transferencia Bancaria

Warning

Por favor NO tildar el check que dice conciliación automática

Luego de que tenga todos los datos correctos proceda a culminar el proceso de transferencia bancaria tildando la opción de **OK**

![Campo](/assets/img/docs/balance-management/bam-balance-image390.png)

Imagen 2. Opción OK

Después de esto le aparecerá una ventana indicando que su transferencia bancaria fué creada

![Campo](/assets/img/docs/balance-management/bam-balance-image391.png)

Imagen 3. Transferencia Creada
