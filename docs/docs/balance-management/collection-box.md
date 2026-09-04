---
title: Caja Cobranza
category: Documentation
star: 9
article: false
---

El requerimiento principal para realizar el proceso de gestión de caja cobranza es tener una definición de caja creada, para esto contacte a un consultor de E.R.P. Consultores y Asociados. El procedimiento consta en reflejar en ADempiere el pago realizado por el socio del negocio cliente, por concepto de abono o anticipo de una orden de venta o factura de cuentas por cobrar. Dicho procedimiento se realiza registrando diariamente el cobro en caja y posteriormente el cierre de la misma.

Luego del cierre de caja, el departamento de tesorería realiza el depósito de las cajas en sus respectivos bancos correspondientes, para que caja pueda realizar su cierre y llevar el saldo inicial a cero (0) nuevamente.

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para obtener un resultado exitoso al momento de realizar el proceso de caja cobranza en la versión 3.9.2 de ADempiere en la localización Venezuela.

A continuación se explica detalladamente el procedimiento que se debe realizar para obtener un resultado exitoso en caja cobranza.

- Registro de Caja Cobranza

## Registro de Caja Cobranza

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la carpeta **Diario de Caja**, por último seleccione la ventana **Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image36.png)

Imagen 1. Menú de ADempiere

Luego podrá visualizar la ventana **Caja**, donde debe seleccionar el icono **Registro Nuevo** ubicado en la barra de herramientas de ADempiere para crear un nuevo registro en caja.

![Campo](/assets/img/docs/balance-management/bam-balance-image37.png)

Imagen 2. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento **Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image38.png)

Imagen 3. Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA. Para ejemplificar el registro es utilizada la opción **Cobro Nacional**.

![Campo](/assets/img/docs/balance-management/bam-balance-image39.png)

Imagen 4. Campo Tipo de Documento

Seleccione en el campo **Cuenta** la cuenta caja correspondiente al documento que esta realizando. Para ejemplificar el registro es utilizada la opción **Caja Cobranza - –\_Cobranza Nacional**.

![Campo](/assets/img/docs/balance-management/bam-balance-image40.png)

Imagen 5. Campo Cuenta

Note

Recuerde que para getionar el procedimiento de caja cobranza, debe tener creada la definición de caja cobranza.

Seleccione en el campo **Orden de Venta**, la orden de venta que será reflejada en la caja que esta realizando. Para ejemplificar el registro es utilizada la orden de venta **OVN-28** creada anteriormente.

![Campo](/assets/img/docs/balance-management/bam-balance-image41.png)

Imagen 6. Campo Orden de Venta

Note

Al seleccionar la orden de venta, se cargan automáticamente los campos **Socio del Negocio** y **Total de Caja**, con la información contenida en la orden seleccionada. Adicional a ello, se tilda el checklist **Anticipo**.

Introduzca en el campo **Total de Caja** el monto total del pago realizado por el socio del negocio cliente, correspondiente al abono o anticipo del mismo. Para ejemplificar el registro el monto utilizado es **90.000**.

![Campo](/assets/img/docs/balance-management/bam-balance-image42.png)

Imagen 7. Monto total del pago de abono o anticipo realizado por el socio del negocio cliente.

Seleccione en el campo **Tipo de Pago**, la forma de pago utilizada por el socio del negocio cliente. Para ejemplificar el registro es utilizada la opción **Depósito Directo**.

![Campo](/assets/img/docs/balance-management/bam-balance-image43.png)

Imagen 8. Campo Tipo de Pago

Note

Recuerde guardar los cambios realizados seleccionando el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere.

Seleccione la opción **Completar**, ubicada en la parte inferior del documento.

![Campo](/assets/img/docs/balance-management/bam-balance-image44.png)

Imagen 9. Opción Completar

Seleccione la acción **Completar** y la opción **Ok** para completar el documento **Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image45.png)

Imagen 10. Acción Completar

Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando en el campo **Tipo de Documento** la opción **Cierre de Caja Cobranza**.

![Campo](/assets/img/docs/balance-management/bam-balance-image46.png)

Imagen 11. Cierre de Caja Cobranza

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la carpeta **Diario de Caja**, por último seleccione la ventana **Depósito de Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image47.png)

Imagen 12. Menú de ADempiere

Luego podrá visualizar la ventana de búsqueda inteligente **Depósito de Caja**, con diferentes campos o filtros para realizar la búsqueda de información en base a lo requerido por el usuario.

![Campo](/assets/img/docs/balance-management/bam-balance-image48.png)

Imagen 13. Ventana de Búsqueda Inteligente Depósito de Caja

Seleccione en el campo **Cuenta Bancaria**, la caja cobranza seleccionada en el campo **Cuenta** de la ventana **Caja**. Para ejemplificar el registro es utilizada la cuenta bancaria **Caja Cobranza - –\_Cobranza Nacional**.

![Campo](/assets/img/docs/balance-management/bam-balance-image49.png)

Imagen 14. Campo Cuenta Bancaria

Seleccione la opción **Comenzar Búsqueda**, para filtar búsqueda de la información en base a lo seleccionado.

![Campo](/assets/img/docs/balance-management/bam-balance-image50.png)

Imagen 15. Opción Comenzar Búsqueda

Podrá visualizar la ventana de búsqueda inteligente **Depósito de Caja**, con los diferentes registros asociados a la cuenta bancaria seleccionada.

![Campo](/assets/img/docs/balance-management/bam-balance-image51.png)

Imagen 16. Ventana de Búsqueda Inteligente Depósito de Caja

Seleccione en el campo **Fecha de la Transacción**, la fecha contable de la caja de la cual se va a realizar el depósito.

![Campo](/assets/img/docs/balance-management/bam-balance-image52.png)

Imagen 17. Campo Fecha de la Transacción

Seleccione en el campo **Socio del Negocio**, la compañía para la cual realizó los documentos **Caja**, **Cierre de Caja** y para la cual va a realizar el **Depósito de Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image53.png)

Imagen 18. Campo Socio del Negocio

El checklist **Dividir Depósitos** destildado, permite visualizar el campo **No. del Documento** para ingresar el número de referencia del pago realizado por el socio del negocio y es utilizado cuando se tienen varios registros de caja con el mismo número de referencia, generando un (1) documento de egreso en **Caja** y un (1) documento de cobro en **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image54.png)

Imagen 19. Checklist Dividir Depósitos Destildado

Adicional a ello, al tildar el checklist **Dividir Depósitos** no puede ser visualizado el campo **No. del Documento**, esta acción permite que sea generado un (1) documento de egreso en **Caja**, con la sumatoria de todos los registros de documentos **Caja** que sean seleccionados en la ventana de búsqueda inteligente **Depósito de Caja** y un (1) documento de cobro en **Pago/Cobro**, por cada uno de los registros seleccionados en dicha ventana.

![Campo](/assets/img/docs/balance-management/bam-balance-image55.png)

Imagen 20. Checklist Dividir Depósitos Tildado

Seleccione en el campo **Tipo de Documento para Retiros**, el tipo de documento que será generado en la ventana **Caja**. Para ejemplificar el registro, el tipo de documento para retiros utilizado es **Egreso Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image56.png)

Imagen 21. Campo Tipo de Documento para Retiros

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria a la cual será realizado el depósito de caja.

![Campo](/assets/img/docs/balance-management/bam-balance-image57.png)

Imagen 22. Campo Cuenta Bancaria

Introduzca en el campo **No. del Documento**, el número de referencia del pago realizado por el socio del negocio cliente.

![Campo](/assets/img/docs/balance-management/bam-balance-image58.png)

Imagen 23. Campo Número del Documento

Seleccione en el campo **Cargo**, el cargo correspondiente al procedimiento que se esta realizando. Para ejemplificar el registro es utilizado el cargo **Efectivo en Transito Cobranza**.

![Campo](/assets/img/docs/balance-management/bam-balance-image59.png)

Imagen 24. Campo Cargo

Seleccione en el campo **Tipo de Documento para Depósitos**, el tipo de documento que será generado en la ventana **Pago/Cobro**. Para ejemplificar el registro, el tipo de documento para depósito utilizado es **Cobro Nacional**.

![Campo](/assets/img/docs/balance-management/bam-balance-image60.png)

Imagen 25. Campo Tipo de Documento para Depósito

Seleccione los diferentes registros de caja que pertenezcan a un mismo banco y la opción **OK** para ejecutar el proceso **Depósito de Caja** con la información ingresada en la ventana de búsqueda inteligente **Depósito de Caja**. Para ejemplificar el registro es seleccionado solo registro de caja **CCxCN-41**.

![Campo](/assets/img/docs/balance-management/bam-balance-image61.png)

Imagen 26. Selección de Caja y Opción OK

Note

Se deben seleccionar solo los registros que se conozca que pertencen al banco seleccionado en el campo **Cuenta Bancaria**.

Podrá visualizar los números de documentos en la parte inferior izquierda de la ventana de búsqueda inteligente **Depósito de Caja**. Dichos números de documentos pueden ser utilizados para ubicar los documetos generados.

![Campo](/assets/img/docs/balance-management/bam-balance-image62.png)

Imagen 27. Números de Documento Generados

Al consultar del documento de egreso generado en la ventana **Caja**, con ayuda del número de documento generado en la parte inferior izquierda de la ventana de búsqueda inteligente **Depósito de Caja**, se puede visualizar el registro de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image63.png)

Imagen 28. Documento de Egreso Generado en Caja

Al consultar del documento de cobro generado en la ventana **Pago/Cobro**, con ayuda del número de documento generado en la parte inferior izquierda de la ventana de búsqueda inteligente **Depósito de Caja**, se puede visualizar el registro de la siguiente manera.

![Campo](/assets/img/docs/balance-management/bam-balance-image64.png)

Imagen 29. Documento de Cobro Generado en Pago/Cobro

Realice el procedimiento regular para generar un cierre de caja, explicado en el documento Registro de Cierre de Caja, elaborado por ERPyA, seleccionando en el campo **Tipo de Documento** la opción **Cierre de Caja Administrativo**.

![Campo](/assets/img/docs/balance-management/bam-balance-image65.png)

Imagen 30. Cierre de Caja Administrativo

Note

Para identificar los cobros sin registros en ADempiere, se debe realizar el procedimiento explicado en el proceso Pagos/Cobros sin Registros del documento **Conciliaciones Automáticas**.
