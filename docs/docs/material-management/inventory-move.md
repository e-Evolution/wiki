---
title: Movimiento de Inventario
category: Documentation
star: 9
article: false
---

En ADempiere el movimiento de inventario permite mover de una ubicación o almacén a otro, los diferentes productos que se encuentran almacenados en una determinada empresa.

Un movimiento de inventario puede ser realizado porque se requiere que sea distribuido algún material en los diferentes departamentos de la empresa, también puede realizarce porque no exista disponibilidad de un artículo, material o recurso que es indispensable o urgente para realizar alguna transacción de compra o venta.

El presente material elaborado por **ERPyA**, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar en ADempiere un movimiento de inventario, en su versión 3.9.2 para la localización Venezuela.

- Registro de Movimiento de Inventario
- Consultar Reporte de Almacenamiento

### Registro de Movimiento de Inventario

Para ejemplificar el procedimiento es generado el reporte **Detalle de Almacenamiento** del producto **Bolígrafo** en el almacén **Insumos de Oficina**, el mismo es visualizado de la siguiente manera antes del movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image19.png)

Imagen 1. Reporte Detalle Almacenamiento Antes del Movimiento

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la ventana **Movimiento de Inventario**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image20.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana **Movimiento de Inventario** donde se encuentran los registros de los diferentes movimientos de inventarios realizados en la organización.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image21.png)

Imagen 3. Ventana Movimiento de Inventario

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere para crear un nuevo registro de movimiento inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image22.png)

Imagen 4. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización desde la cual se esta realizando el movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image23.png)

Imagen 5. Campo Organización

Seleccione en el campo **Orden de Distribución**, la orden de distribución asignada para el movimiento de los productos del inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image24.png)

Imagen 6. Campo Orden de Distribución

Note

Este campo debe ser llenado si el movimiento de inventario es realizado a consecuencia de una orden de distribución.

Seleccione en el campo **Agente Comercial**, el usuario que gestiona el movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image25.png)

Imagen 7. Campo Agente Comercial

Introduzca en el campo **Descripción**, una breve descripción del movimiento de inventario que esta realizando.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image26.png)

Imagen 8. Campo Descripción

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por la empresa ERPyA.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image27.png)

Imagen 9. Campo Tipo de Documento

Introduzca en el campo **Fecha de Movimiento**, la fecha en la cual se esta realizando el movimiento de productos.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image28.png)

Imagen 10. Campo Fecha de Movimiento

Note

Recuerde guardar los cambios realizados en los campos de la pestaña **Movimiento**, seleccionando el icono **Guardar Cambios** ubicado en la barra de herramientas de ADempiere.

Seleccione la pestaña **Línea del Movimiento** y proceda al llenado de los campos correspondientes.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image29.png)

Imagen 11. Pestaña Línea de Movimiento

Seleccione en el campo **Línea Orden Distribución**, la línea de la orden de distribución en la cual se encuentra el producto involucrado en el movimiento de inventario que esta realizando.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image30.png)

Imagen 12. Campo Línea Orden Distribución

Note

Este campo debe ser llenado si el movimiento de inventario es realizado a consecuencia de una orden de distribución.

Seleccione en el campo **Producto**, el producto involucrado en el movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image31.png)

Imagen 13. Campo Producto

Seleccione en el campo **Ubicación**, la ubicación exacta donde se encuentra localizado el producto.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image32.png)

Imagen 14. Campo Ubicación

Seleccione en el campo **A Ubicación**, la ubicación exacta donde será almacenado o donde va dirigido el producto.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image33.png)

Imagen 15. Campo A Ubicación

Seleccione en el campo **Cantidad del Movimiento**, la cantidad de productos involucrados en el movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image34.png)

Imagen 16. Campo Cantidad del Movimiento

Note

Recuerde guardar los cambios realizados en los campos de la pestaña **Línea del Movimiento**, seleccionando el icono **Guardar Cambios** ubicado en la barra de herramientas de ADempiere.

Seleccione la pestaña principal **Movimiento**, luego seleccione la opción **Completar** ubicada en la parte inferior derecha de la ventana **Movimiento de Inventario**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image35.png)

Imagen 17. Pestaña Movimiento y Opción Completar

Seleccione la acción **Completar** y la opción **OK** para completar el documento **Movimiento de Inventario**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image36.png)

Imagen 18. Acción Completar y Opción OK

### Consultar Reporte de Almacenamiento

Al generar el reporte **Detalle de Almacenamiento** del producto **Bolígrafo** en el almacén **Insumos de Oficina**, el mismo es visualizado de la siguiente manera después del movimiento de inventario.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image37.png)

Imagen 19. Reporte Detalle Almacenamiento Después del Movimiento
