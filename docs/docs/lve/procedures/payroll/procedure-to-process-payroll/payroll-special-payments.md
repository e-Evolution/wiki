---
title: Nómina Pagos Especiales
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Nóminas
  - Procedimiento para Procesar Nómina
article: false
---
**Nómina Pagos Especiales**
===============================

Para procesar una “**Nómina de Pagos Especiales**” debemos realizar el proceso de nómina estándar mencionado en el documento [Procedimiento Para Procesar Nómina](./) elaborado por ''ERPyA''. En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de pagos especiales. El comportamiento de esta nómina puede representarse a través 2 formas diferentes, una de ellas parte del registro de una incidencia pagos especiales, la cual le  permitirá asignarle un monto diferente a cada empleado por cada nómina de pagos especiales que realice, también tiene disponible el factor bono pagos especiales a través del mismo puede determinar un monto fijo de un pago especial que le otorgará al empleado por un período determinado de tiempo. Cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:

Estatus del Documento:

Seleccione **Nómina por Pagos Especiales** en el campo "**Tipo de Documento**".

El tipo de documento le permitirá definir la acción del documento que esté registrando en ADempiere.

Seleccione **Nómina Pagos Especiales** en el campo "**Nómina**"

La nómina de Pagos Especiales define el comportamiento de la nómina, para este caso tiene las siguientes características:

Regla de Pago: Débito Directo
Cargo: Sueldos y Salarios por Pagar

Seleccione la fecha “Hasta” o el último día del período que seleccionó anteriormente en el campo "**Fecha Contable**"

A través de la fecha contable se determina contablemente la fecha de pago de la nómina de pagos especiales en ejecución, por tal motivo se recomienda colocar la fecha “**Hasta**” o el último día del período que seleccionó anteriormente.

![Nómina Pagos Especiales](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/pagosespeciales.png)

Imagen 1. Nómina Pagos Especiales

Está nómina  por ser una nómina especial no debe registrarse con período

Incidencias

Para procesar una nómina de pagos especiales tiene disponible la incidencia llamada "**Pagos Especiales**" para registrar el monto del pago especial que le otorgará a cada empleado durante esa nómina.

|           **INCIDENCIA**                              |     **CÓDIGO**       |    **TIPO**    |
|-------------------------------------------------------|----------------------|----------------|
| Pagos Especiales                                      |     ("IN_PE")        |     Monto      |

![Incidencia de Nómina Pagos Especiales]

Imagen 3. Incidencia de Nómina Pagos Especiales

- Factores

También tenemos disponible en el atributo del empleado  un factor llamado Pagos Especiales, en donde registrará el monto que le asignará al empleado durante un largo período de tiempo.

|           **CONCEPTO DE NÓMINA**                      |     **CÓDIGO**       |    **TIPO**    |
|-------------------------------------------------------|----------------------|----------------|
| Factor Bono Pagos Especiales por Empleado             |     ("FA_BPE")       |      Monto     |

Para conocer cómo registrar una atributo del empleado puede utilizar el siguiente enlace ''Atributo del Empleado''

![Factor Nómina Pagos Especiales](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/factorpagosespeciales.png)

Imagen 3. Factor Nómina Pagos Especiales

Debe utilizar alguna de las 2 formas para asignar el monto del pago especial al empleado

Resultados:

- “**Reportes**”

Para visualizar los reportes de nóminas  puede seguir los pasos que se encuentran en el documento ''Reporte de nómina'' con los datos adicionales que se indican a continuación para cada reporte

- “**Detalle de Pago**”

- **Nómina**: Nómina Pagos Especiales

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Pagos Especiales

- **Plantilla de Reporte de Nómina**: Detalle de Pago

![Detalle de Pago Nómina Pagos Especiales](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/detallepagosespeciales.png)

Imagen 3. Detalle de Pago Nómina Pagos Especiales

- “**Resumen de Pago**”

- **Nómina**: Nómina Pagos Especiales

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Pagos Especiales

- **Plantilla de Reporte de Nómina**: Resumen de Pago

![Resumen de Pago Nómina Pagos Especiales](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/resumenpagosespeciales.png)

Imagen 4. Resumen de Pago Nómina Pagos Especiales
