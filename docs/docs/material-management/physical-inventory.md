---
title: Inventario Físico
category: Documentation
star: 9
article: false
---

En ADempiere un inventario físico permite modificar las cantidades de productos en existencia. Este es un procedimiento delicado, que solo se debe realizar cuando la cantidad en existencia registrada en ADempiere difiera de la cantidad real de existencia en la organización o almacén. El proceso consta en reemplazar la cantidad en existencia por la cantidad real contada.

::: warning

[ERPyA](https://erpya.com/) no recomienda realizar inventario físico.

:::

El procedimiento de inventario físico sólo debe ser realizado en casos críticos como la inconsistencia de cantidades de productos por motivo de robo, hurto o casos similares. De igual forma, deben estar presentes los responsables y supervisores del almacén donde existe la inconsistencia, así como también debe estar presente un representante de contabilidad y un jefe o gerente de la empresa para avalar el procedimiento.

El presente material elaborado por [ERPyA](https://erpya.com/), pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar en ADempiere un inventario físico, en su versión 3.9.2 para la localización Venezuela.

- Registro de Inventario Físico
- Consultar Detalle de Almacenamiento

### Registro de Inventario Físico

Para visualizar completamente el procedimiento del inventario físico, es generado el reporte **Detalle de Almacenamiento** seleccionando la ubicación donde será realizado el inventario físico y el producto por el cual es realizado dicho inventario. Ejemplificando el caso, el reporte puede ser visualizado de la siguiente manera.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image75.png)

Imagen 1. Primer Reporte de Detalle de Almacenamiento

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la ventana **Inventario Físico**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image76.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana **Inventario Físico**, donde debe seleccionar el icono **Registro Nuevo** para crear un nuevo registro de inventario físico.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image77.png)

Imagen 3. Ventana Inventario Físico y Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el documento de inventario físico.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image78.png)

Imagen 4. Campo Organización

Introduzca en el campo **Descripción**, una breve descripción referente al documento de inventario físico que esta realizando en la organización seleccionada.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image79.png)

Imagen 5. Campo Descripción|

Seleccione en el campo **Almacén**, el lugar donde es almacenado el producto por el cual se esta realizando el inventario físico.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image80.png)

Imagen 6. Campo Almacén

Introduzca en el campo **Fecha del Movimiento**, la fecha en la cual es realizado en el almacén el conteo real del producto por el cual se esta realizando el inventario físico.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image81.png)

Imagen 7. Campo Fecha de Movimiento

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image82.png)

Imagen 8. Campo Tipo de Documento

:: note

Recuerde guardar el registro de los campos de la pestaña seleccionando el icono **Guardar Registros** ubicado en la barra de herramientas de ADempiere.

:::

Seleccione la pestaña **Línea de Conteo de Inventario** y proceda al llenado de los campos correspondientes.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image83.png)

Imagen 9. Pestaña Línea de Conteo de Inventario

Seleccione en el campo **Ubicación**, la ubicación exacta donde se encuentra localizado el producto dentro del almacén seleccionado. El mismo se puede seleccionar con ayuda del identificador ubicado del lado derecho del campo.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image84.png)

Imagen 10. Campo Ubicación

Seleccione en el campo **Producto**, el producto por el cual se esta realizando el inventario físico.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image85.png)

Imagen 11. Campo Producto

Introduzca en el campo **Cantidad Contada**, la cantidad real en existencia del producto seleccionado.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image86.png)

Imagen 12. Campo Cantidad Contada

::: note

Debe ser ingresada la cantidad real que existe físicamente en el almacén seleccionado.

:::

Seleccione el icono **Guardar Cambios**, ubicado en la barra de herramientas de ADempiere, para guardar el registro de los campos de la pestaña.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image87.png)

Imagen 13. Icono Guardar Cambios

Podrá visualizar que es cargada automáticamente la cantidad de productos en existencia que se encuentran registrados en ADempiere.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image88.png)

Imagen 14. Campo Cantidad en Libros

Seleccione la pestaña principal **Conteo de Inventario** y luego la opción **Completar**, ubicada en la parte inferior derecha de la ventana.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image89.png)

Imagen 15. Pestaña Conteo de Inventario

Seleccione la acción **Completar** y la opción **OK**, para completar el documento **Inventario Físico** que esta realizando.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image90.png)

Imagen 16. Acción Completar y Opción OK

### Consultar Detalle de Almacenamiento

Al generar el reporte **Detalle de Almacenamiento** seleccionando la ubicación donde fue realizado el inventario físico y el producto por el cual fue realizado dicho inventario, se puede visualizar el reporte de la siguiente manera.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image999.png)

Imagen 17. Segundo Reporte de Detalle de Almacenamiento
