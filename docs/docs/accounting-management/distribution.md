---
title: Distribución Contable
category: Documentation
star: 9
article: false
---

Las distribuciones contables son utilizadas para realizar un reparto del valor monetario de una operación administrativa en cuentas contables específicas, dicho de otra manera, esta metodología permite distribuir porcentualmente el monto de un documento en diferentes cuentas de manera estructurada.

La forma en la que ADempiere ha diseñado esta funcionalidad, le permitirá estructurar la manera en la que desea sea distribuido el importe, y los filtros, de esta forma usted tiene la oportunidad de definir un patrón para aplicar sus distribuciones contables. Sin embargo, para comprender mejor esta funcionalidad veamos el siguiente ejemplo:

Imaginemos una empresa que recibe un documento por pagar por concepto de consumo eléctrico, este está definido como un cargo en la factura, el resultado predeterminado será el siguiente:

| Cuenta            | Débito    | Crédito   |
| ----------------- | --------- | --------- |
| Gasto Eléctrico   | 2.500.000 |           |
| Cuentas por Pagar |           | 2.500.000 |
| Total             | 2.500.000 | 2.500.000 |

Para este caso la empresa requiere distribuir un 60% del consumo eléctrico al costo de producción y un 40% a la cuenta de gasto común, quedando el asiento de la distribución de la siguiente manera:

| Cuenta            | Débito    | Crédito   |
| ----------------- | --------- | --------- |
| Gasto Eléctrico   | 1.000.000 |           |
| Costo Eléctrico   | 1.500.000 |           |
| Cuentas por Pagar |           | 2.500.000 |
| Total             | 2.500.000 | 2.500.000 |

El ejemplo anterior define de manera gráfica a que se refiere una distribución contable, ahora bien, ADempiere le ofrece la oportunidad de establecer un comportamiento para que estas distribuciones sean ejecutadas de forma automática al ejecutar cualquier documento.

Con esta funcionalidad usted podŕa definir en qué tipos de documentos, Tipo de Aplicación, e inclusive un rango de fecha en la que desea ejecutar la distribución. Esta última para los casos en los que la distribución es ejecutada de manera excepcional y por ende tiene fecha de vigencia.

Además, puede definir los filtros para la ejecución, estableciendo si desea que su distribución sea aplicada a una organización, cuenta, actividad, producto, socio de negocio, o elementos de usuarios activos en especifico, o si por el contrario usted desea que su aplicación sea general.

El ejemplo expuesto fue bastante claro, pero también muy sencillo, y por supuesto no podíamos llegar hasta allí. Como hemos visto en el documento: Dimensiones Contables, ADempiere ERP maneja múltiples dimensiones que permiten medir y reportar desempeño desde los resultados transaccionales. Por tanto, las dimensiones no pueden dejar de ser fusionadas con las distribuciones.

Para ello, es permitido decidir que dimensiones desea sean sobreescritas al ejecutar la distribución, transfiriendo un porcentaje del monto de la transacción, o bien, podría establecer un monto fijo (débito o crédito) para distribuir.

Por otra parte, ¿recuerda usted el Tipo de Aplicación?, pues sí, también puede sobreescribir la aplicación contable, transfiriendo el importe distribuido a uno o varios tipos de aplicación.

Para que pueda conocer cómo y cuándo usar esta funcionalidad ERPyA ha estructurado un material, basado en la gama de opciones disponibles para establecer un patrón de comportamiento al ejecutar las distribuciones.

- Registro de Distribución Contable
- Distribución Contable
- Línea
- Consulta de Distribución Contable Aplicada

## Registro de Distribución Contable

Para ejemplificar el procedimiento de distribución contable, se tiene el documento por pagar **1000110** con monto total de **2.500.000,00**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image410.png)

Imagen 1. Factura por Pagar

Ubique y seleccione en el menú de ADempiere, la carpeta **Análisis de Desempeño**, luego seleccione la carpeta **Reglas Contables**, por último seleccione la ventana **Distribución Contable**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image411.png)

Imagen 2. Menú de ADempiere

## Distribución Contable

Podrá visualizar la carpeta **Distribución Contable**, con los diferentes registros de distribución que se encuentran en ADempiere.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image412.png)

Imagen 3. Ventana Distribución Contable

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere, para crear un nuevo registro de distribución.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image413.png)

Imagen 4. Icono Registro Nuevo de la Ventana Distribución Contable

Seleccione en el campo **Organización**, la organización para la cual esta realizando la distribución.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image414.png)

Imagen 5. Campo Organización de la Ventana Distribución Contable

Introduzca en el campo **Nombre**, el nombre de referencia correspondiente al registro de distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image415.png)

Imagen 6. Campo Nombre de la Ventana Distribución Contable

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro de distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image416.png)

Imagen 7. Campo Descripción de la Ventana Distribución Contable

Seleccione en el campo **Esquema Contable**, el esquema que será utilizado para la distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image417.png)

Imagen 8. Campo Esquema Contable de la Ventana Distribución Contable

El checklist **Crear Reversión**, indica que el movimiento de reversión se creará.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image418.png)

Imagen 9. Checklist Crear Reversión de la Ventana Distribución Contable

Warning

Si se inhabilita el checklist, el movimiento original será borrado.

Seleccione en el campo **Tipo de Aplicación**, el tipo de aplicación que será utilizado para la distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image419.png)

Imagen 10. Campo Tipo de Aplicación de la Ventana Distribución Contable

Seleccione el tipo de documento en el campo **Tipo de Documento**, la selección de este define el comportamiento del documento que se esta elaborando, dicho comportamiento se encuentra explicado en el documento Tipo de Documento elaborado por ERPyA.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image420.png)

Imagen 11. Campo Tipo de Documento de la Ventana Distribución Contable

Seleccione en el campo **Válido Desde**, la fecha de inicio de la distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image421.png)

Imagen 12. Campo Válido Desde de la Ventana Distribución Contable

Seleccione en el campo **Válido Hasta**, la fecha de finalización de la distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image422.png)

Imagen 13. Campo Válido Hasta de la Ventana Distribución Contable

El checklist **Cualquier Organización**, al estar tildado aplica la distribución contable a todas las organizaciones.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image423.png)

Imagen 14. Checklist Cualquier Organización de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Organización**, se habilita el campo **Organización** para aplicar la distribución contable sólo a la organización que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image424.png)

Imagen 15. Campo Organización del Checklist Cualquier Organización de la Ventana Distribución Contable

El checklist **Cualquier Cuenta**, al estar tildado aplica la distribución contable a todas las cuentas.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image425.png)

Imagen 16. Checklist Cualquier Cuenta de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Cuenta**, se habilita el campo **Cuenta** para aplicar la distribución contable sólo a la cuenta que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image426.png)

Imagen 17. Campo Cuenta del Checklist Cualquier Cuenta de la Ventana Distribución Contable

El checklist **Cualquier Actividad**, al estar tildado aplica la distribución contable a todas las actividades.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image427.png)

Imagen 18. Checklist Cualquier Actividad de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Actividad**, se habilita el campo **Actividad** para aplicar la distribución contable sólo a la actividad que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image428.png)

Imagen 19. Campo Actividad del Checklist Cualquier Actividad de la Ventana Distribución Contable

El checklist **Cualquier Producto**, al estar tildado aplica la distribución contable a todos los productos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image429.png)

Imagen 20. Checklist Cualquier Producto de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Producto**, se habilita el campo **Producto** para aplicar la distribución contable sólo al producto que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image430.png)

Imagen 21. Campo Producto del Checklist Cualquier Producto de la Ventana Distribución Contable

El checklist **Cualquier Socio del Negocio**, al estar tildado aplica la distribución contable a todos los socios del negocio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image431.png)

Imagen 22. Checklist Cualquier Socio del Negocio de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Socio del Negocio**, se habilita el campo **Socio del Negocio** para aplicar la distribución contable sólo al socio del negocio que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image432.png)

Imagen 23. Campo Socio del Negocio del Checklist Cualquier Socio del Negocio de la Ventana Distribución Contable

El checklist **Cualquier Usuario 1**,

![Campo](/assets/img/docs/accounting-management/acm-accounting-image433.png)

Imagen 24. Checklist Cualquier Usuario 1 de la Ventana Distribución Contable

Al destildar el checklist **Cualquier Usuario 1**, se habilita el campo **Centro de Costos** para aplicar la distribución contable sólo al centro de costos que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image434.png)

Imagen 25. Campo Centro de Costos del Checklist Cualquier Usuario 1 de la Ventana Distribución Contable

Note

Recuerde guardar el registro de los campos de la pestaña antes de posicionarse en otra pestaña de la misma ventana, seleccionando el icono **Guardar Cambios** ubicado en la barra de herramientas de ADempiere.

## Línea

Seleccione la pestaña **Línea**, para crear los registros de distribución requeridos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image435.png)

Imagen 26. Pestaña Línea de la Ventana Distribución Contable

Introduzca en el campo **Descripción**, una breve descripción correspondiente al registro de porcentaje de distribución que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image436.png)

Imagen 27. Campo Descripción de la Pestaña Línea de la Ventana Distribución Contable

Introduzca en el campo **Porcentaje**, el porcentaje de distribución correspondiente al registro que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image437.png)

Imagen 28. Campo Porcentaje de la Pestaña Línea de la Ventana Distribución Contable

Introduzca en el campo **Débito Contabilizado**, el monto de débito contabilizado correspondiente al registro que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image438.png)

Imagen 29. Campo Débito Contabilizado de la Pestaña Línea de la Ventana Distribución Contable

Introduzca en el campo **Crédito Contabilizado**, el monto de crédito contabilizado correspondiente al registro que esta realizando.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image439.png)

Imagen 30. Campo Crédito Contabilizado de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Signo de cuenta invertida**,

![Campo](/assets/img/docs/accounting-management/acm-accounting-image440.png)

Imagen 31. Checklist Signo de Cuenta Invertida de la Pestaña Línea de la Ventana Distribución Contable

Note

Al seleccionar el checklist **Signo de cuenta invertida**, no se habilita ningún campo.

El checklist **Sobrescribir tipo de publicación**, Sobreescribe el tipo de publicación con el valor especificado.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image441.png)

Imagen 32. Checklist Sobrescribir Tipo de Publicación de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobrescribir tipo de publicación**, se habilita el campo **Tipo de Aplicación** para aplicar la distribución contable sólo al tipo de aplicación que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image442.png)

Imagen 33. Campo Tipo de Aplicación del Checklist Sobrescribir Tipo de Publicación de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe Organización**, aplica la distribución contable a todas las organizaciones.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image443.png)

Imagen 34. Checklist Sobreescribe Organización de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe Organización**, se habilita el campo **Organización** para aplicar la distribución contable sólo a la organización que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image444.png)

Imagen 35. Campo Organización del Checklist Sobreescribe Organización de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe la cuenta**, aplica la distribución contable a todas las cuentas.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image445.png)

Imagen 36. Checklist Sobreescribe la Cuenta de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe la cuenta**, se habilita el campo **Cuenta** para aplicar la distribución contable sólo a la cuenta que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image446.png)

Imagen 37. Campo Cuenta del Checklist Sobreescribe la Cuenta de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe la Actividad**, aplica la distribución contable a todas las actividades.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image447.png)

Imagen 38. Checklist Sobreescribe la Actividad de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe la Actividad**, se habilita el campo **Actividad** para aplicar la distribución contable sólo a la actividad que sea seleccionada en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image448.png)

Imagen 39. Campo Actividad del Checklist Sobreescribe la Actividad de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe Producto**, aplica la distribución contable a todos los productos.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image449.png)

Imagen 40. Checklist Sobreescribe Producto de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe Producto**, se habilita el campo **Producto** para aplicar la distribución contable sólo al producto que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image450.png)

Imagen 41. Campo Producto del Checklist Sobreescribe Producto de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe Socio del Negocio**, aplica la distribución contable a todos los socios del negocio.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image451.png)

Imagen 42. Checklist Sobreescribe Socio del Negocio de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe Socio del Negocio**, se habilita el campo **Socio del Negocio** para aplicar la distribución contable sólo al socio del negocio que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image452.png)

Imagen 43. Campo Socio del Negocio del Checklist Sobreescribe Socio del Negocio de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe Usuario 1**,

![Campo](/assets/img/docs/accounting-management/acm-accounting-image453.png)

Imagen 44. Checklist Sobreescribe Usuario 1 de la Pestaña Línea de la Ventana Distribución Contable

Al seleccionar el checklist **Sobreescribe Usuario 1**, se habilita el campo **Centro de Costos** para aplicar la distribución contable sólo al centro de costos que sea seleccionado en dicho campo.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image454.png)

Imagen 45. Campo Centro de Costos del Checklist Sobreescribe Usuario 1 de la Pestaña Línea de la Ventana Distribución Contable

El checklist **Sobreescribe Usuario 3**,

![Campo](/assets/img/docs/accounting-management/acm-accounting-image455.png)

Imagen 46. Checklist Sobreescribe Usuario 3 de la Pestaña Línea de la Ventana Distribución Contable

Note

Al seleccionar el checklist **Sobreescribe Usuario 3**, no se habilita ningún campo.

El checklist **Sobreescribe Usuario 4**,

![Campo](/assets/img/docs/accounting-management/acm-accounting-image456.png)

Imagen 47. Checklist Sobreescribe Usuario 4 de la Pestaña Línea de la Ventana Distribución Contable

Note

Al seleccionar el checklist **Sobreescribe Usuario 4**, no se habilita ningún campo.

Regrese a la pestaña **Distribución** y ubique el campo **Porcentaje Total**, ubicado en la parte inferior izquierda de la misma. En este campo podrá visualizar el porcentaje total de todas las distribuciones definidas en cada uno de los registros de la pestaña **Línea**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image457.png)

Imagen 48. Pestaña Distribución Contable y Campo Porcentaje Total

## Consulta de Distribución Contable Aplicada

Ubique la factura por pagar **1000110** con monto total de **2.500.000,00**, expuesta anteriormente al principio del presente material y seleccione la opción **Contabilizado** ubicado en la parte inferior de la ventana **Documento por Pagar**.

![Campo](/assets/img/docs/accounting-management/acm-accounting-image458.png)

Imagen 49. Opción Contabilizado de la Factura por Pagar

Podrá visualizar el asiento de la distribución de la siguiente manera

![Campo](/assets/img/docs/accounting-management/acm-accounting-image459.png)

Imagen 50. Asiento Contable de Distribución
