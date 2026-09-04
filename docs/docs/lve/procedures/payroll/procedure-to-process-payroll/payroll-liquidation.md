---
title: Nómina Liquidación
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Nóminas
  - Procedimiento para Procesar Nómina
article: false
---

**Nómina Liquidación**
========================

 Para procesar una “**Nómina de Liquidación**” debemos realizar el proceso de nómina estándar mencionado en el documento [Procedimiento Para Procesar Nómina](./) elaborado por [ERPyA](http://erpya.com). En esta ventana se registran los datos principales que ADempiere requiere para crear una nómina de liquidación, cada uno de los campos detallados a continuación son relevantes para obtener un registro exitoso:

Estatus del Documento:

- Seleccione “**Nómina Liquidación**” en el campo “**Tipo de Documento**”

El tipo de documento le permitirá definir la acción del documento que esté registrando en ADempiere.

- Seleccione “**Nómina Liquidación**” en el campo “**Nómina**”

La nómina de liquidación define el comportamiento de la nómina, para este caso por ser una nómina especial cuenta con las siguientes características:

- Regla de Pago: Débito Directo
- Cargo: Sueldos y Salarios por Pagar

- Seleccione la fecha en la que esté ejecutando la nómina en el campo **Fecha Contable**

Está nómina  por ser una nómina especial no debe registrarse con período

![Nomina de Liquidacion](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/payrollsettlementprocess.png)

Imagen 1. Nómina de Liquidación

Incidencias:

Para esta nómina es obligatorio registrar la incidencia llamada "**Fecha de Egreso del Trabajador**" para conocer la fecha de egreso del trabajador, cabe destacar que esta incidencia debe registrarse al socio de negocio empleado al cual se le procesa la nómina de liquidación

|           **INCIDENCIA**                              |     **CÓDIGO**       |    **TIPO**    |
|-------------------------------------------------------|----------------------|----------------|
| Fecha de Egreso del Trabajador                        |     ("IN_FET")       |     Fecha      |

![Incidencia Nomina de Liquidacion](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/incidencepayrollsettlement.png)

Imagen 2. Incidencia Nómina de Liquidación

Resultados:

- "**Reportes**"

Para visualizar los reportes de nóminas  puede seguir los pasos que se encuentran en el documento ''Reporte de nómina'' con los datos adicionales que se indican a continuación para cada reporte

- “**Recibo de Pago**”

- **Nómina**: Nómina Liquidación

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Liquidación

![Recibo de Pago Nomina de Liquidacion](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/settlementreceipt.png)

Imagen 3. Recibo de Pago Nómina de Liquidación

- “**Detalle de Pago**”

- **Nómina**: Nómina Liquidación

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Liquidación

- **Plantilla de Reporte de Nómina**: Detalle de Pago

![Detalle de Pago Nomina de Liquidacion](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/paymentdetail.png)

Imagen 4. Detalle de Pago Nómina de Liquidación

- “**Resumen de Pago**”

- **Nómina**: Nómina Liquidación

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Liquidación

- **Plantilla de Reporte de Nómina**: Resumen de Pago

![Resumen de Pago Nomina de Liquidacion](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/paymentsummary.png)

Imagen 5. Resumen de Pago Nómina de Liquidación

- "**Retenciones**"

- **Nómina**: Nómina Liquidación

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Retenciones Parafiscales

![Retenciones](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/withholdings.png)

Imagen 6. Resumen de Pago Nómina de Liquidación

- "**Aportes**"

- **Nómina**: Nómina Liquidación

- **Proceso de Nómina**: Ubique el número de documento del proceso de nómina que está ejecutando.

- **Configuración de Reporte de Nómina**: Aportes Parafiscales

![Aportes](/assets/img/docs/lve/procedures/payroll/procedures-to-process-payroll/resources/contributions.png)

Imagen 7. Resumen de Pago Nómina de Liquidación

::: info Nota

Cabe destacar que los reportes de Aportes, Retenciones, se deben pasar al Departamento de Contabilidad

:::