---
title: Nómina
category: Documentation
star: 9
article: false
---

El presente material elaborado por **ERPyA** pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de realizar los procedimientos correspondientes a nómina en la versión 3.9.2 de ADempiere en la localización Venezuela.

- Proceso de Nómina
  - Registro de Nómina
- Novedades de Nómina
  - Registro de Incidencias
- Pagos de Nómina
  - Registro de Pagos de Nómina
- Reporte de Nómina
  - Generar Reporte de Nómina

## Proceso de Nómina

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de procesar la nómina en la versión 3.9.2 de ADempiere en la localización Venezuela.

Registro de Nómina

### Registro de Nómina

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la ventana **Proceso Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image1.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Proceso Nómina**, donde debe seleccionar el icono **Registro Nuevo** ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro de proceso de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image2.png)

Imagen 2. Ventana Proceso Nómina y Selección de Icono de Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual está realizando el proceso de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image3.png)

Imagen 3. Campo Organización

Introduzca en el campo **Nombre**, el nombre de la nómina que se requiere procesar con su respectivo rango de tiempo (desde/hasta).

![Campo](/assets/img/docs/human-management/hum-human-image4.png)

Imagen 4. Campo Nombre

Seleccione el tipo de documento a generar en el campo **Tipo de Documento Destino**, la selección de este define el comportamiento del documento que se está elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/human-management/hum-human-image5.png)

Imagen 5. Campo Tipo de Documento Destino

Note

Los tipos de documentos de nómina se encuentran agrupados según su comportamiento, la Nominas Semanal y la Nómina Semanal Mixta se encuentran definidas en el Tipo de Documento **Nómina Semanal**. De igual forma ocurre con las diferentes nóminas regulares utilizadas en ADempiere.

Seleccione en el campo **Fecha Contable**, la fecha correspondiente a la fecha final del periodo de la nómina seleccionada, es decir la fecha hasta ingresada en el campo **Nombre**.

![Campo](/assets/img/docs/human-management/hum-human-image6.png)

Imagen 6. Campo Fecha Contable

Seleccione la nómina que se requiere procesar en el campo **Nómina**. En este campo no se encuentran unidas las nóminas como en el campo **Tipo de Documento Destino**, por lo tanto se puede seleccionar la opción **Nómina Semanal Mixta** para ejemplificar el registro que se está realizando.

![Campo](/assets/img/docs/human-management/hum-human-image7.png)

Imagen 7. Campo Nómina

Seleccione el **Periodo de Nómina**. Las nóminas regulares poseen sus periodos de nómina ya sean semanales, quincenales o mensuales, usted debe elegir en este campo el periodo correspondiente a la nómina que esté ejecutando.

![Campo](/assets/img/docs/human-management/hum-human-image8.png)

Imagen 8. Campo Periodo de Nómina

Seleccione en el campo **Socio del Negocio**, el socio del negocio es el empleado al cual se le va a procesar la nómina que se está registrando.

![Campo](/assets/img/docs/human-management/hum-human-image9.png)

Imagen 9. Campo Socio del Negocio

Note

Este campo es utilizado cuando se le va a procesar la nómina a un solo empleado de la organización.Si usted desea procesar la nómina a todo el personal que tiene asignado la Nómina Semanal Mixta no seleccione a ningún Socio de Negocio.

Seleccione en el campo **Moneda**, la moneda correspondiente al pago del empleado de la organización.

![Campo](/assets/img/docs/human-management/hum-human-image10.png)

Imagen 10. Campo Moneda

Seleccione en el campo **Tipo de Conversión**, el tipo de conversión correspondiente a la moneda seleccionada para el pago.

![Campo](/assets/img/docs/human-management/hum-human-image11.png)

Imagen 11. Campo Tipo de Conversión

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere para guardar el registro de los campos de la ventana **Proceso Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image12.png)

Imagen 12. Selección de Icono Guardar Cambios

Seleccione la opción **Completar**, ubicada en la parte inferior derecha de la ventana **Proceso Nómina**, para preparar la nómina registrada.

![Campo](/assets/img/docs/human-management/hum-human-image13.png)

Imagen 13. Opción Completar

Seleccione la acción **Preparar** y la opción **OK** para preparar el documento.

![Campo](/assets/img/docs/human-management/hum-human-image14.png)

Imagen 14. Selección de la acción Preparar y la opción OK.

Puede preparar la nómina cuantas veces sean necesarios. Cuando esté seguro de que tiene todos los cálculos correctos proceda a completar la Nómina.

![Campo](/assets/img/docs/human-management/hum-human-image15.png)

Imagen 15. Selección de la acción Completar y la opción OK.

## Novedades de Nómina

Las novedades de nómina son todas aquellas incidencias que se deben cargar en la nómina de cada uno de los empleados.

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de registrar las novedades a los empleados, en la versión 3.9.2 de ADempiere en la localización Venezuela.

Registro de Incidencias

### Registro de Incidencias

Seleccione en el menú de ADempiere, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la ventana **Novedades de Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image16.png)

Imagen 1. Menú de ADempiere

Seleccione en el campo **Proceso Nómina**, el proceso de nómina actual al cual le cargará las incidencias de los empleados. Dicho proceso se encuentra explicado en el documento Registro de Nómina elaborado por ERPyA.

![Campo](/assets/img/docs/human-management/hum-human-image17.png)

Imagen 2. Campo Proceso Nómina

Seleccione en el campo **Socio del Negocio**, el socio del negocio empleado al cual se le cargará la incidencia.

![Campo](/assets/img/docs/human-management/hum-human-image18.png)

Imagen 3. Campo Socio del Negocio

Note

En este campo encontrará todos los socios de negocios que tengan registrado la nómina que se está procesando, tome especial atención el empleado que seleccionará para que proceda a cargar su incidencia

Seleccione en el campo **Fecha**, la fecha en la que se le cargará la incidencia al socio del negocio empleado seleccionado.

![Campo](/assets/img/docs/human-management/hum-human-image19.png)

Imagen 4. Campo Fecha

Seleccione en el campo **Concepto Nómina**, la incidencia que se le cargará al socio de negocio empleado seleccionado.

![Campo](/assets/img/docs/human-management/hum-human-image20.png)

Imagen 5. Campo Conceptos de Tipo Incidencias

Note

En este campo se muestran todas las incidencias, sin importar el tipo de nómina con el que fue generado el documento proceso de nómina seleccionado.

Introduzca el valor de la incidencia que seleccionó en el campo que aparece a continuación.

![Campo](/assets/img/docs/human-management/hum-human-image21.png)

Imagen 6. Campo Monto Incidencias

Note

Este campo se habilita para agregar valor de la incidencia que seleccionó. Existen incidencias cuyo valor es de tipo **Monto**, otras que son de tipo **Cantidad** y otras incidencias que de tipo **Fecha** en el campo que dice **Tipo de Columna** le indica el valor de la incidencia que seleccionó

Introduzca en el campo **Descripción**, una breve descripción de la incidencia que se le cargará al socio del negocio empleado.

![Campo](/assets/img/docs/human-management/hum-human-image22.png)

Imagen 7. Campo Descripción

Seleccione la opción **OK**, para que la incidencia sea cargada a la incidencia al proceso de nómina seleccionado.

![Campo](/assets/img/docs/human-management/hum-human-image23.png)

Imagen 8. Opción OK

Por último podrá visualizar la forma como queda generada la Incidencia lista para que sea procesada durante la nómina.

![Campo](/assets/img/docs/human-management/hum-human-image24.png)

Imagen 9. Incidencia Generada

## Pagos de Nómina

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar los pagos de nómina en la versión 3.9.2 de ADempiere en la localización Venezuela.

Registro de Pagos de Nómina

### Registro de Pagos de Nómina

Luego de que usted completó su proceso de nómina debemos registrar los pagos que serán cancelados a sus empleados, para eso debemos seguir los pasos que se detallan a continuación.

Realice una **Selección de Pagos** siguiendo detalladamente los pasos que se indican en el documento Registro desde Nómina, luego de completar su selección de pago puede continuar con el siguiente requerimiento.

Genere los pagos de su nómina a traves de un formato txt en la ventana **Imprimir y Exportar Pagos** siguiendo el procedimiento que se detalla en el documento Registro de Imprimir / Exportar Pagos de Nómina, posterior a la descarga del archivo txt puede realizar el próximo proceso.

Proceda a realizar una **Transferencia Bancaria** donde reintegre el dinero que salio de su **Caja en Tránsito de Nómina** para el pago de su nómina, para ello debe completar el siguiente formulario que se detalla a continuación Transferencia Bancaria de Nómina.

Por último y para culminar el proceso de pago de nómina debe realizar un cierre de caja con la finalidad de conciliar los ingresos y egresos de nuestra **Caja en Tránsito de Nómina**, para ello debe cumplir los pasos que se detallan en el siguiente documento Cierre de Caja Nómina.

Una vez finalizado y completado cada uno de estos procesos se da por culminado el registro de pagos de nómina en ADempiere.

## Reporte de Nómina

El presente material elaborado por ERPyA pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar y obtener un resultado exitoso al momento de generar los reportes de nómina en la versión 3.9.2 de ADempiere en la localización Venezuela.

Generar Reporte de Nómina

### Generar Reporte de Nómina

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Nómina**, por último seleccione la carpeta **Reporte de Nómina**, para posteriormente seleccionar el **Reporte de Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image25.png)

Imagen 1. Menú de ADempiere

Podrá visualizar en la ventana **Reporte de Nómina**, los diferentes campos que permiten generar el reporte de nómina de acuerdo a lo requerido por el usuario en su momento. Cabe destacar que estos campos son filtros los cuales nos permiten obtener la información más precisa del reporte que deseamos visualizar. No es obligatorio llenar todos campos, usted escogerá los que más se adapten a la información que usted desea obtener. A continuación se detallan cada uno de ellos

![Campo](/assets/img/docs/human-management/hum-human-image26.png)

Imagen 2. Ventana Reporte de Nómina

Seleccionar en el campo **Organización**, la organización desde la cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image27.png)

Imagen 3. Campo Organización

Seleccionar en el campo **Contrato de Nómina**, el tipo de contrato por el cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image28.png)

Imagen 4. Campo Contrato de Nómina

Seleccionar en el campo **Nómina**, la nómina a la cual pertenece el empleado y por la cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image29.png)

Imagen 5. Campo Nómina

Note

Se debe seleccionar la nómina a la cual pertenece el empleado para generar el reporte de la misma.

Seleccionar en el campo **Proceso Nómina**, el proceso de nómina realizado previamente.

![Campo](/assets/img/docs/human-management/hum-human-image30.png)

Imagen 6. Campo Proceso Nómina

Note

El número de documento del proceso de nómina lo encontrará en la ventana proceso de nómina en el campo que dice número de documento.

Seleccione en el campo **Departamento Nómina**, el departamento al cual pertenece el empleado y por el cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image31.png)

Imagen 7. Campo Departamento Nómina

Seleccione en el campo **Puesto Nómina**, el cargo o puesto que desempeña el empleado en la organización seleccionada anteriormente.

![Campo](/assets/img/docs/human-management/hum-human-image32.png)

Imagen 8. Campo Puesto Nómina

Seleccione en el campo **Estado del Empleado**, la condición o estatus del empleado dentro de la organización seleccionada anteriormente.

![Campo](/assets/img/docs/human-management/hum-human-image33.png)

Imagen 9. Campo Estado del Empleado

Seleccione en el campo **Socio del Negocio**, el empleado por el cual se va generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image34.png)

Imagen 10. Campo Socio del Negocio

Seleccione en el campo **Fecha Contable**, el rango de fecha **Desde - Hasta** por el cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image35.png)

Imagen 11. Campo Fecha Contable

Seleccionar en el campo **Estado del Documento**, el estado en el que se encuentra el documento de pago por el cual se va a generar el reporte de nómina.

![Campo](/assets/img/docs/human-management/hum-human-image36.png)

Imagen 12. Campo Estado del Documento

Seleccionar en el campo **Configuración del Reporte de Nómina**, este campo es obligatorio llenarlo para obtener el reporte de Nómina, existe una gran cantidad de reportes de nóminas, los mismos están configurados dependiendo del tipo de nómina que necesite visualizar, por ejemplo la configuración de reporte de nómina llamada **Nómina Regular**, es el reporte que se utiliza cuando queremos ver los resultados de las nóminas regulares (Nómina Semanal, Nómina Semanal Mixta, Nómina Quincenal,Nómina Quincenal Mixta, Nómina Mensual y Nómina Mensual Mixta) de cada empleado de la organización seleccionada anteriormente.

![Campo](/assets/img/docs/human-management/hum-human-image37.png)

Imagen 13. Campo Configuración del Reporte de Nómina

Seleccionar en el campo **Plantilla de Reporte de Nómina** las diferentes formatos con los que se puede visualizar un reporte de Nómina.

![Campo](/assets/img/docs/human-management/hum-human-image38.png)

Imagen 14. Campo Plantilla de Reporte de Nómina

Seleccionar la opción **OK**, ubicada en la parte inferior derecha de la ventana para finalmente generar el reporte de nómina en base a lo seleccionado en los diferentes campos que contiene dicha ventana **Reporte de Nómina**.

![Campo](/assets/img/docs/human-management/hum-human-image39.png)

Imagen 15. Opción Ok para Generar el Reporte

El reporte que se visualiza a continuación es un **Recibo de Pago**. Es una de los tipos de reporte que encontrará en Adempiere.

![Campo](/assets/img/docs/human-management/hum-human-image40.png)

Imagen 16. Reporte de Nómina
