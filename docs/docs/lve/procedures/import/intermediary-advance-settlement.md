---
title: Liquidación Anticipo Intermediario
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Importación
article: false
---

Posterior a la concesión del anticipo, será justificado el anticipo relacionando los gastos (Facturas) es entonces cuando se procede a liquidar los anticipos concedidos al gestor de importación.

La operación de anticipos a terceros está compuesta por cinco fases u operaciones las cuales no tienen porqué ser todas necesarias en el proceso de liquidación:

- Anticipo a terceros(Gestor)
- Registrar justificantes(Carga de Facturas de Cuentas por Pagar)
- Relación de Pasivos(Gestor)
- Incremento de anticipo a terceros(Gestor)
- Liquidación de Anticipos y CxP

## **Factura de Cuentas por Pagar de Costos FOB**

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Compras**", luego seleccione la ventana "**Documentos por Pagar**".

![menu-adempiere2](/assets/img/docs/lve/procedures/import/resources/menufactura.png)

Imagen 3. Menú de ADempiere

Realice el procedimiento habitual para crear los documentos por pagar necesarios, explicado en el material Documento por Pagar elaborado por ERPyA. Para ejemplificar el registro se realizan tres facturas como relación entregada por el intermediario gestor de la importación.

::: note

**¡Importante!**
  Seleccione el tipo de documento: **Facturas Gastos Nacionales Importación**, para que este documento no afecte la base del IVA.

:::

Asigne el expediente creaado anteriormente en el campo **Expediente Importación/Exportación**.

![expediente-factura](/assets/img/docs/lve/procedures/import/resources/expfacturaimport.png)

## **Conciliación de Liquidación**

- Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Saldos Pendientes**", luego seleccione la carpeta "**Diario de Caja**", por último seleccione la ventana "**Cierre de Caja**".

![Menú de ADempiere 4](/assets/img/docs/lve/procedures/import/resources/menucierre1.png)

Imagen 4. Expediente de Importación

Asigne la factura relacionada o factura de la mercacía creada anteriormente en el campo **Factura Relacionada**.

![Factura_Relacionada](/assets/img/docs/lve/procedures/import/resources/facturarelacionimport.png)

Imagen 5. Factura Relacionada

Al colocar el expediente se establece el **tipo de conversión negociado**.

Factura "**1000020**", con socio del negocio "**Bolivariana de Puertos (Bolipuertos) S A**" y moneda "**VES**".

![Documento Por Pagar 1](/assets/img/docs/lve/procedures/import/resources/doc1.png)

Imagen 6. Documento por Pagar

Podrá visualizar en la pestaña "**Línea de la Factura**", el cargo "**Cargo de Gatos**" utilizado para generar el documento por pagar con el monto de "**1.550.000,00**".

![Pestaña Línea de la Factura 1](/assets/img/docs/lve/procedures/import/resources/linea1.png)

Imagen 7. Pestaña Línea de la Factura

Factura "**1000022**", con socio del negocio "**Dhl Express Aduanas Venezuela C.A.**" y moneda "**VES**".

![Documento por Pagar 2](/assets/img/docs/lve/procedures/import/resources/doc2.png)

Imagen 8. Documento por Pagar

Podrá visualizar en la pestaña "**Línea de la Factura**", el cargo "**Flete Aduanales**" utilizado para generar el documento por pagar con el monto de "**2.400.000,00**".

![Pestaña Línea de la Factura 2](/assets/img/docs/lve/procedures/import/resources/linea2.png)

Imagen 9. Pestaña Línea de la Factura

Factura "**1000023**", con socio del negocio "**Dhl Express Aduanas Venezuela C.A.**" y moneda "**VES**".

![Documento Por Pagar](/assets/img/docs/lve/procedures/import/resources/doc3.png)

Imagen 10. Documento por Pagar

Podrá visualizar en la pestaña "**Línea de la Factura**", el cargo "**Honorarios Profesionales**" utilizado para generar el documento por pagar con el monto de "**27.000.000,00**".

![Pestaña Línea de la Factura 3](/assets/img/docs/lve/procedures/import/resources/linea3.png)

Imagen 11. Pestaña Línea de la Factura

::: note

Si ya se encuentra recepcionada la mercancía debe seguir el procedimiento de costos adicionales asociado a una recepción, de otro modo debe ser cargada de forma regular y ser reversada mediante un ajuste de crédito al recepcionar la mercancía, cargando un ajuste de débito con el procedimiento de costo adicional.

:::

## Cancelación ó Cruce de Anticipo con Cuentas por Pagar

La caja a definir funge en el procedimiento de anticipos a terceros como un puente para el registro y pago de los anticipos a proveedores intermediarios en el proceso de importación y para la posterior liquidación de las facturas entregadas en la relación de gastos o costos de nacionalización y cierre de los anticipos.

En la siguiente ventana de "**Caja**" se realizan todos los pagos de las facturas pendientes por cancelar, a continuación se define el proceso de caja en ADempiere.

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Saldos Pendientes**", luego seleccione la carpeta "**Diario de Caja**", por último seleccione la ventana "**Caja**".

![Menú de ADempiere 3](/assets/img/docs/lve/procedures/import/resources/menucaja.png)

Imagen 12. Menú de ADempiere

::: note

El requerimiento principal para realizar el proceso de gestión de caja de intermediario es tener una definición de caja creada.

:::

 Seleccione en el campo "**Organización**", la organización para la cual esta realizando el documento "**Caja**".

![Campo Organización 1](/assets/img/docs/lve/procedures/import/resources/org3.png)

Imagen 13. Campo Organización

Seleccione en el campo "**Cuenta Bancaria**" la cuenta caja correspondiente al documento que esta realizando. Para ejemplificar el registro es utilizada la opción "**Caja Intermediarios - --_OCI-1000024_Estandar**".

![Cuenta Bancaria](/assets/img/docs/lve/procedures/import/resources/cuenta3.png)

Imagen 14. Campo Cuenta Bancaria

Seleccione el tipo de documento a generar en el campo "**Tipo de Documento**", la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento **Tipo de Documento** elaborado por [ERPyA](https://adeos.business). Para ejemplificar el registro es utilizada la opción "**Pago Nacional**".

![Campo Tipo de Documento 1](/assets/img/docs/lve/procedures/import/resources/tipodoc3.png)

Imagen 15. Campo Tipo de Documento

Seleccione en el campo "**Factura**", la factura que será reflejada en la caja que esta realizando. Para ejemplificar el registro es utilizada la factura "**1000023**" creada anteriormente.

![Campo Factura 1](/assets/img/docs/lve/procedures/import/resources/factura2.png)

Seleccione la opción "**Completar**", ubicada en la parte inferior del documento.

![Opción Completar 2](/assets/img/docs/lve/procedures/import/resources/completar4.png)

Imagen 16. Opción Completar

Seleccione la acción "**Completar**" y la opción "**Ok**" para completar el documento "**Caja**".

![Acción Completar](/assets/img/docs/lve/procedures/import/resources/accion1.png)

Imagen 17. Acción Completar

::: note

Repita el procedimiento con todos los documentos por pagar importación correspondientes a la relación entregada por el intermediario gestor de la importación.

:::

Cuentas por pagar emite una "**Solicitud de Pago**" seleccionando la caja creada previamente y asociando todas las facturas de la relación entregada por el intermediario gestor de la importación.

Tesorería ejecuta el proceso de "**Imprimir/Exportar**" llamando la solicitud de pago creada previamente.

Resultados:

  - **Egreso**:

    - **Resultado**: Se genera un egreso en caja por el monto a cancelar.

- **Resultado Contable en Caja**:

| Organización | Cuenta                                                               | Débito Contabilizado | Crédito Contabilizado |
|---------------|---------------------------------------------------------------------|----------------------|------------------------|
| Organización | 2.1.4.1.3.002 - SELECCIÓN DE PAGOS                                   | 27.000.000,00       | 0,00                   |
| Organización | 1.1.2.4.1.002 - ANTICIPOS A INTERMEDIARIOS PENDIENTES POR CONCILIAR | 0,00                 | 27.000.000,00         |
|               |                                                                     | 27.000.000,00       | 27.000.000,00         |

- **Resultado Contable en Asignación entre Factura y Pago**:

| Organización | Cuenta                                                   | Débito Contabilizado | Crédito Contabilizado |
|---------------|-----------------------------------------------------------|----------------------|------------------------|
| Organización | 2.1.1.1.1.001 - CUENTAS POR PAGAR PROVEEDORES NACIONALES | 27.000.000,00       | 0,00                   |
| Organización | 2.1.4.1.3.002 - SELECCIÓN DE PAGOS                       | 0,00                 | 27.000.000,00         |
|               |                                                           | 27.000.000,00       | 27.000.000,00         |

## Conciliación de Liquidación

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Saldos Pendientes**", luego seleccione la carpeta "**Diario de Caja**", por último seleccione la ventana "**Cierre de Caja**".

![Menú de ADempiere 4](/assets/img/docs/lve/procedures/import/resources/menucierre1.png)

Imagen 18. Menú de ADempiere

- Realice el procedimiento regular para generar el cierre de caja, explicado en cierre caja importación del documento "**Importación**", seleccionando la caja intermediario creada. Luego de completar el procedimiento podrá apreciar en el campo "**Saldo Final**", el saldo abierto que posee el gestor intermediario.

![Cierre de Caja](/assets/img/docs/lve/procedures/import/resources/cierrecaja.png)

Imagen 19. Cierre de Caja

- Podrá apreciar en la pestaña "**Línea de Cierre de Caja**", los diferentes registros creados desde el proceso "**Crear a Partir de Pagos**".

![Pestaña Línea de Cierre de Caja](/assets/img/docs/lve/procedures/import/resources/linea4.png)

Imagen 20. Pestaña Línea de Cierre de Caja

- Para generar el reporte del balance de caja y visualizar los saldos abiertos que posee el gestor intermediario, seleccione en la ventana "**Cierre de Caja**" el icono "**Informe**", que se encuentra ubicado en la barra de herramientas de ADempiere.

![Icono Informe](/assets/img/docs/lve/procedures/import/resources/cierrecaja2.png)

Imagen 21. Icono Informe

- Podrá visualizar el balance de caja de la siguiente manera.

![Reporte de Balance](/assets/img/docs/lve/procedures/import/resources/reporte.png)

Imagen 22. Reporte de Balance
