---
title: Re-procesar Retenciones
category: Localización Venezuela
star: 9
tag:

  - Procedimientos
  - Gestión de Retenciones
article: false
---

**Re-procesar Retenciones**
===========================

El presente proceso es utilizado para procesar las retenciones nuevamente. Para ello es necesario anular los documentos de declaración y retención aplicados previamente al documento por pagar. Finalmente, se puede modificar la configuración de la retención en base a lo requerido por el usuario y re-procesar la retención con los nuevos valores de configuración.

Un ejemplo de lo anterior puede ser cuando se aplica la retención de IVA en base al 75% y debe ser en base al 100%.

Ejemplificando el proceso de retención se tiene el siguiente documento por pagar "**1000111**".

![documento por pagar](/assets/img/docs/lve/procedures/withholding-management/resources/document-payable.png)

Imagen 1. Documento por Pagar

El mismo contiene la siguiente información del impuesto de la factura.

![pestaña impuesto de factura](/assets/img/docs/lve/procedures/withholding-management/resources/invoice-tax-tab.png)

Imagen 2. Pestaña Impuesto de Factura

Dicho documento por pagar posee asociado el siguiente documento de retención "**20210500000029**".

![documento de retención](/assets/img/docs/lve/procedures/withholding-management/resources/retention-document.png)

Imagen 3. Documento de Retención

De igual manera, la declaración de la retención es la "**1000112**".

![documento de declaración](/assets/img/docs/lve/procedures/withholding-management/resources/declaration-document.png)

Imagen 4. Documento de Declaración

Luego de anular la declaración y la retención asociada al documento por pagar, se debe realizar el siguiente procedimiento.

Es importante que se anule la retención aplicada al documento por pagar para que ADempiere pueda re-procesar la retención. Si el documento ya posee una declaración, se debe anular primero la declaración y luego la retención.

Ubique y seleccione en el menú de ADempiere, la carpeta "**Gestión de Compras**", luego seleccione la ventana "**Documentos por Pagar**", por último ubique el registro del documento por pagar "**1000111**", para re-procesar la retención.

![documento por pagar](/assets/img/docs/lve/procedures/withholding-management/resources/document-payable.png)

Imagen 5. Documento por Pagar

Verifique la configuración de retención y modifique la misma de ser necesario. Las configuraciones de las retenciones se encuentran explicadas en los documentos [Retención de Iva](withholding-iva.md/), [Retención Islr](withholding-islr.md/) y [Retención Municipal](withholding-municipality.md/).

Seleccione el icono "**Proceso**", ubicado en la barra de herramientas de ADempiere.

![icono proceso del documento por pagar](/assets/img/docs/lve/procedures/withholding-management/resources/document-process-payable-icon.png)

Imagen 6. Icono Proceso

Seleccione la opción "**Re-Procesar Retención**", desplegada por el icono "**Proceso**".

![opción reprocesar retención](/assets/img/docs/lve/procedures/withholding-management/resources/reprocess-hold-option.png)

Imagen 7. Opción Re-Procesar Retención

Podrá visualizar una ventana de confirmación del proceso, donde debe seleccionar la opción "**OK**", para re-procesar la retención del documento por pagar.

![ventana reprocesar retención](/assets/img/docs/lve/procedures/withholding-management/resources/reprocess-hold-window.png)

Imagen 8. Ventana Re-Procesar Retención

Seguidamente se procede a generar el comprobante de informacion fiscal.
