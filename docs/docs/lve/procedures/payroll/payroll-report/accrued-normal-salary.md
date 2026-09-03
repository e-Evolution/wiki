---
title: Devengado Salario Normal
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Nóminas
  - Reporte de Nóminas
article: false
---

**Devengado Salario Normal**
============================

El reporte "**Devengado Salario Normal**" se refiere al salario que devengó el trabajador de forma regular y permanente durante cada uno de sus procesos de nóminas. Para ADempiere el salario normal está representado por el salario base más los salarios obtenidos en sus días de descanso de su periodo de nómina.

Para obtener dicho reporte debemos seleccionar los siguientes campos:

|      **PARÁMETROS**             |                       **REFERENCIA**                        |
|---------------------------------|-------------------------------------------------------------|
| Organización                    | Seleccione la Organización a la cual pertenece la nómina o el socio de negocio que desea solicitar el reporte |
| Nómina                          | Selecciones entre los distintos tipos de nómina, aquella que desea visualizar el reporte, este filtro lo puede usar si quiere visualizar varias nóminas de un mismo tipo y no una en específico |
| Proceso de Nómina               | Seleccione el proceso de nómina en específico basado en el tipo de nómina que seleccionó anteriormente (También puede ubicarlo en la ventana proceso de nómina) |
| Socio del Negocio               | Seleccione el nombre del socio del negocio que necesite visualizar la información. Si desea ver la información de todos los socios de negocios deje en campo en blanco |
| Fecha Contable                  | Seleccione la fecha contable entre el rango desde, hasta si selecciona un proceso específico de nómina no debe utilizar este filtro ya que se traerá la fecha o periodo que tenga la nómina en particular |
| Estado del Documento            | Siempre es recomendable utilizar el estado COMPLETO, para que el reporte tome en cuenta solo los procesos de nóminas en estado Completo no los anulados, ni en borrador |
| Configuración del Reporte de Nómina.                         | Seleccione en este caso Devengado Salario Normal |

![Parámetros para generar el reporte](/assets/img/docs/lve/procedures/payroll/payroll-report/resources/reportparametersearningnormalsalary.png)

Imagen 1. Parámetros para generar el reporte.

Los campos que podrá visualizar en este reporte son:

|      **PARÁMETROS**             |                       **REFERENCIA**                        |
|---------------------------------|-------------------------------------------------------------|
| Organización                    | Seleccione la Organización a la cual pertenece  la nómina o el socio de negocio que desea solicitar el reporte          |
| Nómina                          | Selecciones entre los distintos tipos de nómina, aquella que desea visualizar el reporte, este filtro lo puede usar si quiere visualizar varias nóminas de un mismo tipo y no una en específico                                               |
| Proceso de Nómina               | Seleccione el proceso de nómina en específico basado en el tipo de nómina que seleccionó anteriormente  (También puede ubicarlo en la ventana proceso de nómina)                   |
| Socio del Negocio               | Seleccione el nombre del socio del negocio que necesite visualizar la información. Si desea ver la información de todos los socios de negocios deje en campo en blanco        |
| Fecha Contable                  | Seleccione la fecha contable entre el rango desde, hasta    si selecciona un proceso específico de nómina no debe utilizar este filtro ya que se traerá la fecha o periodo que tenga la nómina en particular                   |
| Estado del Documento            | Siempre es recomendable utilizar el estado COMPLETO, para que el reporte todo en cuenta solo los procesos de nóminas en estado Completo no los anulados, ni en borrador          |
| Configuración del Reporte de    | Seleccione en este caso Devengado Salario Normal                                                             |
| Nómina.                         |                                                             |

En el siguiente ejemplo se presenta  el monto devengado por salario normal  por el empleado durante el proceso de una nómina regular determinada.

Si desea conocer el valor de dicho concepto durante varias nóminas, no seleccione en el campo proceso de nómina y coloca un parametros de fechas con la finalidad de que pueda visualizar el monto obtenido durante varios procesos de nómina

![Reporte Devengado Salario Normal](/assets/img/docs/lve/procedures/payroll/payroll-report/resources/normalsalary.png)

Imagen 2. Reporte Devengado Salario Normal
