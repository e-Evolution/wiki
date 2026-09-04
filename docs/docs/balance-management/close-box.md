---
title: Cierre de Caja
category: Documentation
star: 9
article: false
---

ADempiere contempla diferentes funcionalidades que le permiten a las empresas controlar los movimientos monetarios realizados en las diferentes cajas que la misma utiliza para gestionar las operaciones de compra, venta, préstamos, reembolso, entre otras operaciones que requieren del proceso que es realizado en caja.

El procedimiento cierre de caja permite controlar y dar seguimiento al dinero que la empresa asigna, presta, reembolsa, entre otras acciones que generan un ingreso o egreso a las diferentes cajas. El mismo debe realizarce a diario, ya que inicialmente el saldo en caja corresponde al monto **0,00**. De igual manera, al final del día el monto de la caja debe corresponder a los mismos **0,00**.

El monto de la caja al final del día luego del proceso de cierre de caja, puede ser diferente al **0,00**, sólo en aquellos casos en los que la caja amerite un monto diferente y dependiento del proceso que se realice en la misma.

El presente material elaborado por ERPyA, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para generar en ADempiere un cierre de caja, en su versión 3.9.2 para la localización Venezuela.

- Registro de Cierre de Caja
- Cierre de Caja Nómina

## Registro de Cierre de Caja

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Saldos Pendientes**, luego seleccione la ventana **Diario de Caja**, por último seleccione la ventana **Cierre de Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image17.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Cierre de Caja**, donde debe seleccionar el icono **Registro Nuevo** y proceder al llenado de los campos correspondientes.

![Campo](/assets/img/docs/balance-management/bam-balance-image18.png)

Imagen 2. Ventana Cierre de Caja y Selección de Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual está realizando el cierre de caja.

![Campo](/assets/img/docs/balance-management/bam-balance-image19.png)

Imagen 3. Campo Organización

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/balance-management/bam-balance-image20.png)

Imagen 4. Campo Tipo de Documento

Seleccione en el campo **Cuenta Bancaria**, la cuenta bancaria a la cual se le realizará el cierre de caja.

![Campo](/assets/img/docs/balance-management/bam-balance-image21.png)

Imagen 5. Campo Cuenta Bancaria

Introduzca en el campo **Nombre**, el nombre de referencia del cierre de caja que está realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image22.png)

Imagen 6. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción referente al documento que está realizando.

![Campo](/assets/img/docs/balance-management/bam-balance-image23.png)

Imagen 7. Campo Descripción

Seleccione la opción **Crear a partir de Pagos**, para realizar el cierre de caja desde un ingreso generado anteriormente, este puede ser una selección de pago o una transferencia bancaria. Para ejemplificar el registro es utilizado el caso de una transferencia bancaria.

![Campo](/assets/img/docs/balance-management/bam-balance-image24.png)

Imagen 8. Opción Crear a Partir

Podrá visualizar la siguiente ventana de búsqueda inteligente, donde debe seleccionar la opción **Comenzar Búsqueda** para buscar las transferencias entre cuentas realizadas.

![Campo](/assets/img/docs/balance-management/bam-balance-image25.png)

Imagen 9. Ventana de Búsqueda Inteligente y Selección de Opción Comenzar Búsqueda

Seleccione el registro de la transferencia creada anteriormente y la opción **OK**, para cargar la información a la pestaña **Línea de Cierre de Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image26.png)

Imagen 10. Selección de Transferencia y Opción OK

Seleccione el icono **Refrescar** en la barra de herramientas de ADempiere, para refrescar el registro en la ventana **Cierre de Caja**.

![Campo](/assets/img/docs/balance-management/bam-balance-image27.png)

Imagen 11. Icono Refrescar

Seleccione la opción **Completar**, ubicada en la parte inferior del documento.

![Campo](/assets/img/docs/balance-management/bam-balance-image28.png)

Imagen 12. Opción Completar

Seleccione la acción **Completar** y la opción **OK**, para completar el documento.

![Campo](/assets/img/docs/balance-management/bam-balance-image29.png)

Imagen 13. Acción Completar y Opción OK

Note

Recuerde que el procedimiento para gestionar el cierre de caja debe realizarce diariamente.

## Cierre de Caja Nómina

El último paso que debemos seguir para terminar de registrar el proceso de pago de nómina en ADempiere es el cierre de caja, donde llamaremos los pagos registrados en nuestra selección de pago y se cruzaran con la transferencia bancaria que realizamos previamente. Recuerde que para poder realizar este paso debemos de tener completo los pasos realizados anteriormente los cuales son: **Seleccion de Pago**, **Imprimir Exportar Pagos de Nómina** y la **Transferencia Bancaria**.

Nos dirigimos a la ventana **Cierre de Caja**, ubicado en el menú **Gestión de Saldos Pendientes** en el sub directorio **Diario de Caja**, registramos los datos de la siguiente manera:

Seleccionamos en el campo **Cuenta de la Caja** el nombre de la cuenta que se dispone para registrar los pagos de la nómina, en este caso será una caja y estará identificada porque indica el nombre del banco y al final la palabra tránsito.

Seleccionamos el **Tipo de Documento** denominado **Cierre de Caja Nómina**, ese tipo de documento indica el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento**Tipo de Documento** elaborado por ERPyA.

Seleccione en el Campo **Nombre** un nombre referente a ese cierre de caja.

Seleccione en el Campo **Fecha de Estado de Cuenta** la fecha que registró en la selección de pago.

Seleccione en el campo **Descripción**una información adicional que le ayude a identificar su cierre de caja, este campo no es obligatorio por lo tanto es opcional colocar la información en él.

![Campo](/assets/img/docs/balance-management/bam-balance-image30.png)

Imagen 1. Registro Cierre de Caja

Seguidamente nos dirigimos a seleccionar el campo que dice **Crear a Partir de Caja**,

![Campo](/assets/img/docs/balance-management/bam-balance-image31.png)

Imagen 2 .Campo Crear a Partir de Caja

Luego nos aparecerá una ventana donde estará seleccionada el nombre de nuestra caja de nómina, también tendrá otras opciones disponibles de las cuales usted puede seleccionar la que más se adapte a su búsqueda para encontrar los movimientos que posee su caja. En este caso utilizaremos la fecha para encontrar los movimientos que posee la caja durante esa fecha.

![Campo](/assets/img/docs/balance-management/bam-balance-image32.png)

Imagen 3. Búsqueda de Parámetros

Posteriormente aparecen los movimientos que tenga registrados en su caja, en la fecha que determinó en su búsqueda. En este caso nos aparecen el pago generado a los empleados en la selección de pago y por otro lado tendremos el monto total de la transferencia que realizamos con el monto total de la nómina.

![Campo](/assets/img/docs/balance-management/bam-balance-image33.png)

Imagen 4. Pagos a Cruzar

Note

Cabe destacar que en el ejemplo que presentamos se evidencia la transferencia realizada y el pago de un solo empleado que fue con el que realizamos el proceso de nómina, sólo para este caso en específico, en su proceso le deben aparecer todos los empleados qué le procesaron la nómina

Seleccione todos los pagos de los empleados y el monto de la transferencia bancaria

Seguidamente nos dirigimos a la ventana principal de nuestro cierre de caja y en la pestaña llamada línea del cierre de caja visualizaremos los movimientos seleccionados para el cierre de la caja

Por último nos dirigimos a la ventana principal de nuestro cierre de caja y en el campo **Saldo Final** nos debe quedar un saldo de cero (0), eso quiere decir que los montos de la caja están correctos, el egreso de dinero que salió de nuestra caja para el pago de la nómina de los empleados y en monto ingresado a nuestra caja a través de la transferencia bancaria está correcto.

![Campo](/assets/img/docs/balance-management/bam-balance-image34.png)

Imagen 5. Saldo Final

Warning

Cabe destacar que el saldo final del cierre de la caja siempre debe quedar en cero 0. Sí no es así posiblemente esté realizando un procedimiento incorrecto

Al finalizar este proceso proceda a finalizar el proceso completando su cierre de caja.

![Campo](/assets/img/docs/balance-management/bam-balance-image35.png)

Imagen 6. Completar el cierre de Caja
