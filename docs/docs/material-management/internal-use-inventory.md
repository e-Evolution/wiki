---
title: Inventario de Uso Interno
category: Documentation
star: 9
article: false
---

En ADempiere el inventario de uso interno permite registrar los productos que son utilizados por los diferentes departamentos de una determinada empresa.

Un inventario de uso interno es realizado cuando se posee en existencia cierta cantidad de un artículo, material o recurso que es utilizado internamente por los departamentos de la empresa con la finalidad de lograr un objetivo o como apoyo parar lograr una meta.

La finalidad del proceso es restar de la cantidad de productos que se tienen en existencia en una determinada ubicación o almacén, la cantidad utilizada por los departamentos y por la cual es realizado el inventario. De igual manera, este proceso permite controlar y dar seguimiento a los productos para conocer su cantidad en existencia y proceder a la compra, venta o adquisición de los mismos.

El presente material elaborado por **ERPyA**, pretende ofrecerle una explicación eficiente a nuestros clientes del procedimiento a seguir para realizar en ADempiere un inventario de uso interno, en su versión 3.9.2 para la localización Venezuela.

- Registro de Inventario de Uso Interno
- Consultar Detalle de Almacenamiento

### Registro de Inventario de Uso Interno

Para ejemplificar el inventario de uso interno, es generado el reporte **Detalle de Almacenamiento** del producto **Bolígrafo** en el almacén **Insumos de Oficina**, el mismo es visualizado de la siguiente manera.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image1.png)

Imagen 1. Detalle de Almacenamiento antes del Movimiento

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Materiales**, luego seleccione la ventana **Inventario Uso Interno**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image2.png)

Imagen 2. Menú de ADempiere

Podrá visualizar la ventana **Inventario Uso Interno** donde se encuentran los registros de los diferentes inventarios realizados para el uso interno de la organización.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image3.png)

Imagen 3. Ventana Inventario de Uso Interno

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere para crear un nuevo registro de inventario de uso interno.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image4.png)

Imagen 4. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el inventario de uso interno.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image5.png)

Imagen 5. Campo Organización

Introduzca en el campo **Descripción**, una breve descripción referente al inventario que se esta realizando.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image6.png)

Imagen 6. Campo Descripción

Seleccione en el campo **Almacén**, el almacén de la organización en el cual se encuentra localizado el producto.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image7.png)

Imagen 7. Campo Almacén

Introduzca en el campo **Fecha de Movimiento**, la fecha en la cual es realizado el inventario de uso interno.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image8.png)

Imagen 8. Campo Fecha de Movimiento

Seleccione el tipo de documento a generar en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por la empresa ERPyA.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image9.png)

Imagen 9. Campo Tipo de Documento

La selección de la opción **Escáner de Código de Barras Producto**, permite escanear el código de barras del producto e ingresar su información a la pestaña **Línea Inventario, Uso Interno** de forma automática.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image10.png)

Imagen 10. Opción Escáner de Código de Barras de Producto

Seleccione la pestaña **Línea Inventario, Uso Interno** y proceda al llenado de los campos correspondientes.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image11.png)

Imagen 11. Pestaña Línea de Inventario Uso Interno

Seleccione en el campo **Ubicación**, el lugar exacto donde será localizado el producto.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image12.png)

Imagen 12. Campo Ubicación

Seleccione en el campo **Producto**, el producto involucrado en el inventario de uso interno que esta realizando. Para ejemplificar el registro es utilizado el producto **Bolígrafo**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image13.png)

Imagen 13. Campo Producto

Introduzca en el campo **Cantidad Usada Internamente**, la cantidad que es utilizada internamente por el departamento de la organización que esta realizando el inventario de uso interno.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image14.png)

Imagen 14. Campo Cantidad Usada Internamente

Seleccione en el campo **Cargo**, el cargo correspondiente al movimiento de material que esta realizando. Para ejemplificar el registro es utilizado el cargo **Insumos de Oficina**.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image15.png)

Imagen 15. Campo Cargo

Seleccione la pestaña principal **Inventario Uso Interno**, para luego seleccionar la opción **Completar**, ubicada en la parte inferior derecha del documento.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image16.png)

Imagen 16. Pestaña Inventario de Uso Interno

Seleccione la acción **Completar** y la opción **OK** para completar el documento.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image17.png)

Imagen 17. Acción Completar y Opción OK

### Consultar Detalle de Almacenamiento

Al generar el reporte **Detalle de Almacenamiento** del producto **Bolígrafo** en el almacén **Insumos de Oficina** luego del proceso **Inventario de Uso Interno**, se puede visualizar el mismo de la siguiente manera.

![Icono Guardar Cambios](/assets/img/docs/materials-management/mam-materials-image18.png)

Imagen 18. Detalle de Almacenamiento después del Movimiento
