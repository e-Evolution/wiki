---
title: Generar Factura desde Préstamo
category: Documentation
star: 9
article: false
---

El documento por cobrar a generar (Fiscal o no Fiscal) será emitido por concepto de cuota vencida, con los siguientes conceptos dependiendo del préstamo inicial solicitado(Producto Financiero) y su configuración (Vea Configuración de Producto Financiero (Préstamo)):

- Préstamo con Interés Gravado:
- Capital
- Interés + IVA
- Préstamo con Interés Exento:
- Capital
- Interés
- Préstamo sin Interés:
- Capital

Sin embargo existen casos en los cuales el solicitante retarda la cancelación de cuotas vencidas en estos casos ADempiere calcula intereses moratorios sobre la cuota vencida generando así una línea más en el documento.

## Interpretando la Ventana

Panel de Parámetros de Consulta de Amortización: En este panel dispone de los parámetros que serán de filtro para consultar las cuotas pendientes por Facturar.

![Campo](/assets/img/docs/loan-management/lom-loan-image12.png)

Imagen 1. Consulta de Amortización

Panel de resultados Para Selección de Cuotas: En este panel seleccionará las cuotas pendientes por Facturar.

![Campo](/assets/img/docs/loan-management/lom-loan-image13.png)

Imagen 2. Para Selección de Cuotas

Panel de Datos para Generar la Factura: En este panel indicará los datos para generar la factura.

![Campo](/assets/img/docs/loan-management/lom-loan-image14.png)

Imagen 3. Interpretando la Ventana

## Generar Factura desde Préstamo

Se creó un Smart Browser permitiendo al usuario seleccionar múltiples cuotas de un préstamo en específico y generar de manera eficiente y segura, agrupando varias cuotas en una factura, ó discriminando por cuota si el usuario así lo desea de esta forma será generada una factura por cuota.

Vaya a la ventana Generar Factura (Desde Préstamo) (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image15.png)

Imagen 4. Menú de Factura

A continuación se desplegará la siguiente ventana (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image16.png)

Imagen 5. Generar Factura

Proceda a llenar los parámetros de Consulta de Cuotas necesarios para generar la factura:

Socio de Negocio: Es un parámetro obligatorio, filtrará los préstamos pendientes por cobrar con el Socio del Negocio indicado.

Acuerdo Financiero(Préstamo): Es un parámetro obligatorio, filtrará las cuotas pendientes por cobrar del Préstamos indicado.

Fecha Inicio: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.

Fecha Final: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.

Fecha de Vencimiento: filtrará las cuotas pendientes por cobrar en el Rango de fecha indicada.

Vencido: Si selecciona la opción SI, filtrará las cuotas vencidas, si selecciona la opción NO, filtrará las cuotas no vencidas.

Seleccione la opción comenzar búsqueda

![Campo](/assets/img/docs/loan-management/lom-loan-image17.png)

Imagen 6. Búsqueda

A continuación verá los siguientes resultados:

![Campo](/assets/img/docs/loan-management/lom-loan-image18.png)

Imagen 7. Comenzar Búsqueda

Seleccione la cuota que desea facturar:

![Campo](/assets/img/docs/loan-management/lom-loan-image19.png)

Imagen 8. Resultado de Búsqueda

Proceda a llenar los Datos para Generar la Factura.

![Campo](/assets/img/docs/loan-management/lom-loan-image20.png)

Imagen 9. Llenando Datos

Tipo de Documento Destino: Seleccione el tipo de Documento con el que desea sea generada el Documento por Cobrar.

Fecha de Facturación: Indique la fecha en la cual será facturada la cuota.

Dividir Factura: Esta opción debe ser marcada si desea dividir las facturas por cuota, de lo contrario se generará una factura consolidada con las cuotas seleccionadas.

Acción de Documento: Indique la acción de documento con la cual desea generar la selección.

![Campo](/assets/img/docs/loan-management/lom-loan-image21.png)

Imagen 10. Datos para Facturar

Si desea generar la selección de pago seleccione la opción ok OK, caso contrario seleccione la opción cancelar cancelar

Si seleccionó la opción OK el sistema generará la(s) factura(s) de forma exitosa generando el siguiente mensaje indicando el número(s) de la(s) factura(s) generada.

![Campo](/assets/img/docs/loan-management/lom-loan-image22.png)

Imagen 11. Documentos Generados

## Consulta de Factura de Préstamo

Existen dos posibles formas de consultar las facturas generadas asociadas a un préstamo, a continuación serán explicadas.

Ventanas en Documento por Cobrar

Vaya a la ventana Documento por Cobrar (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image23.png)

Imagen 12. Menú de Factura

A continuación se desplegará la siguiente ventana (Adjunto Imagen).

![Campo](/assets/img/docs/loan-management/lom-loan-image24.png)

Imagen 13. Ventana de Factura

Busque el registro desde la opción **Encontrar Registro** ubicada en la barra de herramientas.

![Campo](/assets/img/docs/loan-management/lom-loan-image25.png)

Imagen 14. Buscar Factura

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image26.png)

Imagen 15. Diálogo de Búsqueda

Ingrese el número de la selección generada en el proceso Generar Factura (Desde Préstamo)

Ventana de Préstamo:

Una vez en la ventana de Préstamo

Vaya a la opción **Visualiza Detalle(Donde es Usado)** ubicada en la barra de herramientas.

![Campo](/assets/img/docs/loan-management/lom-loan-image27.png)

Imagen 16. Referencias de Factura

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image28.png)

Imagen 17. Lista de Referencias

Seleccione la opción **Documento por Cobrar de Cuota**

![Campo](/assets/img/docs/loan-management/lom-loan-image29.png)

Imagen 18. Lista de Referencias Seleccionadas

Esta opción lo llevará automáticamente a los pagos asociados a este préstamo.

## Contabilidad del Proceso

ADempiere contabilizará el documento por cobrar dependiendo de la definición del producto financiero (Vea Configuración de Producto Financiero (Préstamo)), a continuación se detalla:

Capital: Contabilidad definida en el producto asociado en producto financiero.

Interés: Contabilidad definida en el cargo asociado en la tasa financiera relacionada en el producto financiero.

IVA: Contabilidad definida en la tasa de impuesto asociada en el cargo perteneciente a la tasa financiera relacionada en el producto financiero.

| Cuenta                                 | Débito Contabilizado | Crédito Contabilizado |
| -------------------------------------- | -------------------- | --------------------- |
| 12410 - Prestamos por Cobrar           | 0,00                 | 1.522,36              |
| 12410 - Interés por Cobrar             | 0,00                 | 316,48                |
| 22000 - IVA                            | 0,00                 | 69,6256               |
| 12110 - Cuentas por Cobrar Comerciales | 1908,4656            | 0,00                  |
| Total                                  | 1908,4656            | 1908,4656             |
