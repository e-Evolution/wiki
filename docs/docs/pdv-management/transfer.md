---
title: Traspaso a Banco
category: Documentation
star: 9
article: false
---

El procedimiento para registrar en ADempiere un traspaso monetario desde una caja a un banco determinado, se debe realizar de la siguiente manera.

Cuando se tiene solamente transacciones por tarjeta de débito o crédito, efectuadas por medio del punto de venta. Se debe realizar el proceso Depósito de Caja y por último el proceso Cierre de Caja, para llevar la caja a cero (0) nuevamente.

Si por el contrario, se tiene solamente transacciones por pago móvil y transferencia bancaria. Se debe realizar el proceso Transferencia Bancaria por cada una de las transacciones y por último el proceso Cierre de Caja, para llevar la caja a cero (0) nuevamente.

Finalmente, se puede presentar el caso en el que se tengan todos los tipos de pago anteriormente nombrados. Para ello se debe realizar primeramente el proceso Depósito de Caja, para reflejar en ADempiere las transacciones por tarjeta de débito o crédito. Luego se debe realizar el proceso Transferencia Bancaria, para reflejar en ADempiere las transacciones por pago móvil y transferencia bancaria. Por último el proceso Cierre de Caja, para ejecutar el cruce de los saldos y poder llevar la cuenta caja a cero (0) nuevamente.

Para mejor referencia de lo explicado anteriormente, se presenta a continuación el diagrama del proceso **Traspaso a Banco**, con la finalidad dar a conocer el comportamiento de ADempiere ante dicho proceso.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image263.png)

Imagen 1. Diagrama de Traspaso a Banco POS

Cada uno de los procesos nombrados anteriormente son explicados a continuación.

## Depósito de Caja

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la carpeta **Diario de Caja**, por último seleccione la ventana **Depósito de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image264.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana de búsqueda inteligente **Depósito de Caja**, que permite realizar el proceso de depósito de las diferentes cajas registradas en ADempiere. Esta ventana cuenta con diferentes campos que le permiten al usuario filtrar la búsqueda de registros en base a lo que sea seleccionado en los mismos.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image265.png)

Imagen 3. Ventana de Depósito a Caja

Podrá visualizar en el campo **Tipo de Banco**, el tipo de banco que define el comportamiento de la ventana de búsqueda inteligente **Depósito de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image266.png)

Imagen 4. Campo Tipo de Banco

Seleccione en el campo **Cuenta Bancaria**, la cuenta caja por la cual requiere filtar la búsqueda de la información. Para este caso, se utiliza la cuenta **Caja Administración Ventas - –\_Administración VES**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image267.png)

Imagen 5. Campo Cuenta Bancaria

Note

Para el realizar el depósito de caja a banco, se debe seleccionar la cuenta caja administrativa en la cual se encuentran los registros de los monto que serán transferidos a banco.

Seleccione en el campo **Socio del Negocio**, el socio del negocio por el cual requiere filtar la búsqueda de la información.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image268.png)

Imagen 6. Campo Socio del Negocio

Seleccione en el campo **Tipo de Pago**, el tipo de pago por el cual requiere filtrar la búsqueda de la información.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image269.png)

Imagen 7. Campo Tipo de Pago

Seleccione en el campo **Tipo de Documento**, el tipo de documento por el cual requiere filtar la búsquedade de la información.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image270.png)

Imagen 8. Campo Tipo de Documento

Seleccione en el campo **Fecha de la Transacción**, la fecha de la transacción por la cual requiere filtrar la búsqueda de la información.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image271.png)

Imagen 9. Campo Fecha de la Transacción

Seleccione la opción **Comenzar Búsqueda**, para filtrar la búsqueda de la información en base a lo seleccionado en los campos anteriormente explicados.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image272.png)

Imagen 10. Opción Comenzar Búsqueda

Podrá visualizar el listado de las transacciones registradas en ADempiere, en base a lo seleccionado en los campos anteriormente explicados.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image273.png)

Imagen 11. Listado de Transacciones de ADempiere

Seleccione la transacción involucrada en el depósito que se encuentra realizando.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image274.png)

Imagen 12. Selección de Transacción a Depositar

Seleccione en el campo **Fecha de la Transacción**, la fecha con la cual se va a generar el depósito de caja que se encuentra realizando.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image275.png)

Imagen 13. Campo Fecha de la Transacción

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria a la cual se va a realizar el depósito de caja que se encuentra realizando.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image276.png)

Imagen 14. Campo Cuenta Bancaria

Seleccione en el campo **Socio del Negocio**, el socio del negocio involucrado en el depósito que se encuentra realizando. En este caso, el socio del negocio es la misma empresa.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image277.png)

Imagen 15. Campo Socio del Negocio

Introduzca en el campo **No. del Documento**, el número de documento con el cual se va a generar el depósito de caja que se encuentra realizando.

Este campo se utiliza cuando se va a realizar un depósito que involucra una sola transacción. Cuando se va a realizar un depósito con más de una transacción, se recomienda tildar el check dividir depósito.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image278.png)

Imagen 16. Campo No. de Documento

Seleccione el checklist **Dividir Depósito**, si requiere dividir el depósito de caja que se encuentra realizando.

Este check permite generar tantos depósitos como movimientos sean seleccionados en el proceso, respetando su número de documento. Para este caso, no es necesario tildar el checklist **Dividir Depósito**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image279.png)

Imagen 17. Checklist Dividir Depósito

Seleccione en el campo **Cargo**, el cargo correspondiente al depósito de caja que se encuentra realizando. Para este caso se utiliza el cargo **Efectivo en Tránsito Administración**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image280.png)

Imagen 18. Campo Cargo

Seleccione en el campo **Tipo de Documento para Retiros**, el tipo de documento para retiros. Para este caso, no es necesario seleccionar el tipo de documento para retiros.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image281.png)

Imagen 19. Campo Tipo de Documento para Retiros

Seleccione en el campo **Tipo de Documento para Depósito**, el tipo de documento para depósito. Para este caso, no es necesario seleccionar el tipo de documento para depósito.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image282.png)

Imagen 20. Campo Tipo de Documento

El check **Conciliar Automáticamente**, permite que sea creado un registro de cierre de caja con la cuenta caja administrativa seleccionada anteriormente y asocia al mismo el registro del egreso que genera en la ventana **Caja**. Para este caso, es necesario destildar el check para crear el cierre de caja de manera manual según lo requerido por el usuario.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image283.png)

Imagen 21. Check Conciliar Automáticamente

Seleccione la opción **OK**, para ejecutar el proceso y realizar el depósito de caja a banco.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image284.png)

Imagen 21. Opción OK

## Consultar Egreso e Ingreso Generado del Depósito

Al consultar el documento de egreso generado en la ventana **Caja**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Depósito de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image285.png)

Imagen 22. Egreso Generado en Caja

Al consultar el documento de ingreso generado en la ventana **Pago/Cobro**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Depósito de Caja**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image286.png)

Imagen 23. Ingreso Generado en Banco

## Transferencia Bancaria

Realice el procedimiento regular para registrar una transferencia bancaria en ADempiere, el mismo se encuentra explicado de manera detallada en el documento Registro de Transferencia Bancaria, elaborado por ERPyA. Considerando las siguientes restricciones:

**Cuenta Bancaria Desde**: La caja desde la cual requiere realizar la transferencia. Para este ejemplo es utilizada la caja **Caja Administración Ventas - –\_Administración VES**.

**Cuenta Bancaria a Transferir**: El banco al cual requiere realizar la transferencia. Para este ejemplo es utilizado el banco **Banco Provincial S.A. Banco Universal - 0108_01080000000000000019**.

**Socio del Negocio**: El socio del negocio involucrado en la transferencia bancaria. Para este ejemplo es utilizado el socio **Compañía Estándar**.

**Moneda**: La moneda con la cual requiere realizar la transferencia. Para este ejemplo es utilizada la moneda **VES**.

**Cargo**: El cargo que justifica el movimiento monetario. Para este caso es utilizado el cargo **Efectivo en Tránsito Administración**.

**No. del Documento**: El número de documento con el que será generado el egreso de la caja. Para este ejemplo es utilizado el número **4321**.

**Documento Destino**: El número de documento con el que será generado el ingreso del banco. Para este ejemplo es utilizado el número **4321**.

**Monto**: El monto correspondiente a la transferencia bancaria que requiere generar. Para este ejemplo es utilizado el monto **5.917.563,54**.

**Descripción**: Una breve descripción relacionada a la transferencia que requiere generar. Para este ejemplo es utilizado como descripción **Transferencia bancaria por pago de factura TMP- 0004910**.

**Fecha de Estado de Cuenta**: La fecha en la cual se encuentra realizando la transferencia bancaria.

**Fecha Contable**: La fecha en la cual se encuentra realizando la transferencia bancaria.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image287.png)

Imagen 24. Transferencia Bancaria

Warning

Recuerde que se debe realizar una transferencia bancaria por cada pago móvil y transferencia bancaria recibida.

## Consultar Egreso e Ingreso Generado de la Transferencia

Al consultar el documento de egreso generado en la ventana **Caja**, con ayuda del número de documento ingresado en el campo **No. del Documento** de la ventana **Transferencia Bancaria**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image288.png)

Imagen 25. Egreso Generado en Caja

Al consultar el documento de ingreso generado en la ventana **Pago/Cobro**, con ayuda del número de documento ingresado en el campo **Documento Destino** de la ventana **Transferencia Bancaria**.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image289.png)

Imagen 26. Ingreso Generado en Banco

## Cierre de Caja

Realice el procedimiento regular para registrar un cierre de caja en ADempiere, el mismo se encuentra explicado de manera detallada en el documento Registro de Cierre de Caja, elaborado por ERPyA.

Se selecciona la caja administrativa para llevar esta a cero (0) nuevamente, transfiriendo el saldo de la caja al banco. Este proceso se debe realizar por cada caja administrativa a la que igreso dinero por las ventas del día.

En la ejecución del procedimiento de cierre de caja, se debe considerar las siguientes restricciones:

**Cuenta**: Caja Administración Ventas - –\_Administración VES

**Tipo de Documento**: Cierre de Caja de Administrativo

**Fecha de Estado de Cuenta**: La fecha correspondiente al día de las transacciones de cobro por las ventas.

Recuerde cargar las transacciones seleccionando la opción **Crear a Partir de Caja**, donde debe seleccionar los movimientos creados en la ventana **Caja**, obtenidos como resultado de los procesos Depósito de Caja y Transferencia Bancaria, previamente realizados.

![Campo](/assets/img/docs/pdv-management/pdm-pdv-image290.png)

Imagen 27. Cierre de Caja
