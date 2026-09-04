---
title: Pago
category: Documentation
star: 9
article: false
---

Un pago es un egreso monetario por las compras de productos o adquisiciones de servicios de la empresa. Adicional a ello, se considera pago la cancelación de las deudas que una empresa posee con los socios de negocios por préstamos u otros motivos que generen cuentas por pagar.

En ADempiere un pago es realizado previo a una autorización, siendo este muy delicado por tratarse del egreso monetario de la empresa. El procedimiento para realizar un pago en ADempiere tiene como requerimiento principal, que exista un documento por pagar o una orden de compra cuando se trata de un proceso de pago sencillo. Si se trata de un proceso mediante una programación de pago, el documento es generado al completar el proceso **Imprimir/Exportar**, mismo que requiere de los documentos **Orden de Pago** y **Selección de Pago**.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para elaborar un pago correctamente en ADempiere, en su versión 3.9.2 para la localización Venezuela.

- Registro de Pago
- Consultar Asignación

## Registro de Pago

Para ejemplificar el procedimiento de generar un pago en ADempiere, es utilizada la factura por pagar **1000099**.

![Campo](/assets/img/docs/balance-management/bam-balance-image66.png)

Imagen 1. Factura por Pagar

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image67.png)

Imagen 2. Menú de ADempiere

Luego podrá visualizar la ventana **Pago/Cobro**, donde debe seleccionar el icono **Registro Nuevo** que se encuentra ubicado en la barra de herramientas de ADempiere para crear un nuevo registro en la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image68.png)

Imagen 3. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento **Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image69.png)

Imagen 4. Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image70.png)

Imagen 5. Campo Tipo de Documento

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria a la cual será realizado el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image71.png)

Imagen 6. Campo Cuenta Bancaria

Introduzca en el campo **Descripción**, una breve descripción referente al pago que será realizado.

![Campo](/assets/img/docs/balance-management/bam-balance-image72.png)

Imagen 7. Campo Descripción

Seleccione en el campo **Socio del Negocio**, el socio del negocio proveedor al cual le será realizado el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image73.png)

Imagen 8. Campo Socio del Negocio

Seleccione la factura a pagar en el campo **Factura**, la misma puede ser seleccionada con ayuda del identificador de dicho campo.

![Campo](/assets/img/docs/balance-management/bam-balance-image74.png)

Imagen 9. Identificador del Campo Factura

Podrá visualizar la siguiente ventana de información de factura, donde debe seleccionar la factura a pagar y la opción **OK** para cargar los datos a la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image75.png)

Imagen 10. Selección de Factura y Opción OK

Podrá visualizar en el campo **Total del Pago** el monto total de la factura, mismo monto total que se va a cancelar con el documento **Pago** que se esta realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image76.png)

Imagen 11. Campo Total del Pago

Seleccione en el campo **Moneda**, la moneda correspondiente al pago que se esta realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image77.png)

Imagen 12. Campo Moneda

Seleccione en el campo **Tipo de Pago**, la forma utilizada para el pago.

![Campo](/assets/img/docs/balance-management/bam-balance-image78.png)

Imagen 13. Campo Tipo de Pago

Seleccione el icono **Guardar Cambios**, para guardar el registro de los campos en la ventana **Pago/Cobro**.

![Campo](/assets/img/docs/balance-management/bam-balance-image79.png)

Imagen 14. Icono Guardar Cambios
Seleccione la opción **Completar**, ubicada en la parte inferior derecha de la ventana.

![Campo](/assets/img/docs/balance-management/bam-balance-image80.png)

Imagen 15. Opción Completar Documento

Seleccione la accion **Completar** y la opción **OK**, para completar el documento **Pago** que esta realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image81.png)

Imagen 16. Acción Completar Documento

## Consultar Asignación

Seleccione el icono **Visualiza Detalle** en el documento **Pago** generado anteriormente, para visualizar donde es usado el documento. Luego seleccione la opción **Consulta de Asignación** en el menú desplegado por el icono **Visualiza Detalle**.

![Campo](/assets/img/docs/balance-management/bam-balance-image82.png)

Imagen 17. Icono Visualiza Detalle

Podrá visualizar la ventana **Consulta de Asignación**, con el registro nuevo de la asignación de pago generado al completar el documento **Pago**.

![Campo](/assets/img/docs/balance-management/bam-balance-image83.png)

Imagen 18. Pestaña Asignación

En la pestaña **Asignaciones** podrá visualizar la información de asignación de pago de la factura por pagar seleccionada en el documento **Pago** y el pago realizado anteriormente.

![Campo](/assets/img/docs/balance-management/bam-balance-image84.png)

Imagen 19. Pestaña Asignaciones
