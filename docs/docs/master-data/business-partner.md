---
title: Socio del Negocio
category: Documentation
star: 9
article: false
---

El socio del negocio generalmente es un sujeto jurídico o natural con el que la organización establece una alianza temporal o permanente a fin de obtener un beneficio común.

En ADempiere no es la excepción, en este sentido, es un participante obligatorio en una transacción administrativa, este puede actuar como cliente, proveedor y empleado, es decir, no existe una transacción de egreso (Compras) o ingreso (Ventas) sin la previa definición del proveedor o cliente (Socio del Negocio), no existe una nómina sin un empleado (Socio del Negocio), en otras palabras, es obligatorio la previa configuración de esta entidad en ADempiere para emitir transacciones administrativas y contables.

Este registro tiene un rol determinante en los asientos contables generados en ADempiere, desempeñándose como una de las dimensiones contables más relevantes, permitiendo agrupar la información de forma eficiente para facilitar el control de aquello que deseamos cuantificar, por tal motivo, la correcta definición determinará los resultados en los asientos y reportes contables de los que disponen nuestros clientes, cabe considerar, que estos valores son heredados de forma predeterminada desde el grupo de socio de negocio seleccionado en este registro, no obstante, el usuario tiene la opción de modificar la configuración contable para casos excepcionales.

En esta ocasión **ERPyA** pretende ofrecerle una guía fácil para la definición básica de un socio de negocio en ADempiere, dentro de este orden de ideas, es importante seguir paso a paso cada procedimiento, de ello dependerá el éxito de los registros resultantes.

- Registro de Socio del Negocio
  - Proveedor
  - Cliente
  - Empleado

## Registro de Socio del Negocio

En el menú de ADempiere, ubique y seleccione la carpeta **Relación con Socio del Negocio**, luego seleccione la carpeta **Reglas de Socios del Negocio** y finalmente seleccione la ventana **Socio del Negocio**.

![Menú de ADempiere](/assets/img/docs/master-data/mad-master-menu.png)

Imagen 1. Menú de ADempiere

En esta ventana se registran los datos principales que la empresa requiere del socio del negocio cliente. Cada uno de los campos con el símbolo (\*) son obligatorios para el registro.

A continuación visualizará la ventana **Socio del Negocio**, dónde debe seleccionar el icono de **Registro Nuevo** que se encuentra ubicado en la barra de herramientas de ADempiere.

![Ventana Principal Socio del Negocio](/assets/img/docs/master-data/mad-master-window.png)

Imagen 2. Ventana Principal Socio del Negocio

Proceda al llenado de los campos necesarios que a continuación se detallan.

Seleccione la organización en el campo **Organización**.

La organización le permite definir la entidad legal ó una sub-unidad a la cual pertenece el socio de negocio, si la organización es (\*), este estará disponible para todas las organizaciones al procesar documentos y transacciones, pero si por el contrario, ha seleccionado una organización diferente, este registro únicamente estará disponible para la organización seleccionada.

![Campo Organización](/assets/img/docs/master-data/mad-master-organization.png)

Imagen 3. Campo Organización

Warning

Generalmente los **Socios de Negocios** son registros compartidos entre entidades organizacionales, por esta razón **ERPyA** recomienda la creación con organización (\*) para evitar duplicidad e inconvenientes contables, de esta forma garantizamos la homogeneidad de los datos maestros.

Introduzca el código de socio del negocio en el campo **Código**.

El código es un dato único e irrepetible que protege la entrada de los registros, evitando la duplicidad de los mismos, generalmente se refiere al número de identificación que acredite la identidad de una persona natural una entidad jurídica, por ejemplo, una cédula de identidad o un RIF. Cuando el Socio de Negocio es un empleado o una firma personal, en éste campo se coloca la **Cédula de Identidad** en formato `V0000000000`, los caracteres permitidos son los siguientes:

- J: Jurídico
- V: Venezolano
- E: Extranjero
- G: Gobierno
- X: Aplica para Extranjeros sin documento venezolado (para importar)

El tamaño máximo del texto debe ser `11` dígitos incluyendo la primera letra

Si el código no coincide con el formato se mostrará el siguiente mensaje:

**Ingles:**
```
Invalid Business Partner Value Format
You should use the format [V, J, G, E, X (External unkow)][00000000]
Example: V20000000 / J400000000
```

**Español**
```
Formato de C.I./R.I.F No Válido
Debería usar el formato [V, J, G, E, X (Para Extranjeros sin Documento)][00000000]
Ejemplo: V20000000 / J400000000
```

Note

Si no es ingresado un dato en este campo ADempiere genera un dato de tipo numérico autoincrementable.

![Campo Código](/assets/img/docs/master-data/mad-master-code.png)

Imagen 4. Campo Código

Warning

Se recomienda no ingresar caracteres especiales como puntos, guiones u otros que alteren el registro en este campo.

Seleccione el socio de negocio padre en el campo **Socio de Negocio Padre**.

El socio de negocio padre no es un campo obligatorio, sin embargo, es un campo que permite la agrupación de sub-entidades dependientes (socios de negocios hijos) de un socio de negocio, para explicarlo mejor veamos el siguiente ejemplo:

Imaginemos un proveedor de tipo cadena cuyo nombre es **Cadena Única C.A**, esta tendrá dos tiendas físicas, **Cadena Unica Centro C.A** y **Cadena Única Oriente C.A** respectivamente. Para este caso el **Socio de Negocio Padre** es **Cadena Única C.A**,quedando agrupado de forma que las dos tiendas serán hijas de **Cadena Única C.A**, de esta forma al emitir reportes financieros podríamos generarlos desde el Socio de Negocio Padre (**Cadena Única C.A**), agrupando todos los saldos de las tiendas por el padre ó podría generar los reportes únicamente por tienda.

Note

Generalmente esta opción es utilizada para franquicias, cadenas o corporaciones.

Introduzca el nombre del socio del negocio en el campo **Nombre**.

El nombre se refiere a la razón social, siendo esta el nombre ó la denominación con la que está registrado en los documentos legales, el nombre es utilizado a nivel administrativo, formal y jurídico.

![Campo Nombre](/assets/img/docs/master-data/mad-master-name.png)

Imagen 5. Campo Nombre

Introduzca el nombre 2 del socio del negocio en el campo **Nombre 2**.

El nombre 2 varía su uso dependiendo de la naturaleza del socio del negocio (Cliente, Proveedor o Empleado), si es un cliente o un proveedor es opcional, y generalmente se utiliza para colocar la denominación comercial, por el contrario, si es un empleado es obligatorio, siendo este campo correspondiente al apellido, el mismo será impreso en los reportes administrativos y jurídicos.

![Campo Nombre 2](/assets/img/docs/master-data/mad-master-name-2.png)

Imagen 6. Campo Nombre 2

Introduzca una breve descripción referente al socio del negocio cliente en el campo **Descripción**.

La descripción no es un campo obligatorio,sin embargo, le permite dejar descripciones o notas de interés para el registro.

![Campo Descripción](/assets/img/docs/master-data/mad-master-description.png)

Imagen 7. Campo Descripción

Seleccione el checklist **Entidad Acumulada**.

Entidad acumulada no es un campo obligatorio, sin embargo, le permite definir al socio del negocio como entidad sumaria, lo que significa que si el socio de negocio tiene este check activo será un **Socio de Negocio Padre**.

![Campo Entidad Acumulada](/assets/img/docs/master-data/mad-master-entity.png)

Imagen 8. Campo Entidad Acumulada

Seleccione en el campo **Estado de Crédito**.

El estado del crédito no es un campo obligatorio, sin embargo, le permite definir el comportamiento para la gestión del crédito del socio de negocio, actúa conjuntamente con el campo **Saldo Actual** y **Límite de Crédito** ubicado en la pestaña **Cliente**, este puede variar entre las siguiente opciones dependiendo de las necesidades:

**Sin Verificación de Crédito**: Establecido de forma manual, omite la evaluación para los socios de negocios a los que no se evalúa el crédito, equivalente a **Sin límite de Crédito**.

**Crédito Correcto**: Activa la gestión de crédito por estar dentro del límite de cŕedito.

**Crédito Verificación**: Es establecido de forma automática por ADempiere al evaluar el crédito, cuando el saldo actual está por encima del % de crédito en verificación (por defecto es 90%) del límite de crédito pero no alcanza el 100%.

**Crédito Retenido**: Es establecido de forma automática por ADempiere al evaluar el crédito, cuando el saldo actual está por encima del límite de crédito, bloqueando la posibilidad de completar ordenes de ventas, completar facturas y emitir entregas.

**Crédito Detenido**: Establecido de forma manual, bloqueando la posibilidad de completar ordenes de ventas, completar facturas y emitir entregas.

![Campo Estado de Crédito](/assets/img/docs/master-data/mad-master-credit.png)

Imagen 9. Campo Estado de Crédito

Podrá visualizar el saldo actual que posee el cliente en el campo **Saldo Actual**.

El saldo actual es un campo solo lectura, actualizado de forma automática, aumentando o disminuyendo al emitir cuentas por cobrar o cuentas por pagar, controlando el estado de crédito.

![Campo Saldo Actual](/assets/img/docs/master-data/mad-master-balance.png)

Imagen 10. Campo Saldo Actual

Podrá visualizar el número de identificación autogenerado a partir del campo **Código** en el campo **Número de Identificación**

El número de identificación se refiere al número que acredita la identidad de una persona natural una entidad jurídica, por ejemplo, una cédula de identidad o un RIF, este campo mantiene incidencia en la generación de documentos fiscales como facturas, retenciones y comprobantes ARC. Para todos los casos se debe colocar en éste campo el **R.I.F** de la entidad o persona que se está registrando. Su formato es `V0000000000` y si la cantidad de números es menor a **9** dígitos se rellenará con ceros a la izquierda, los caracteres permitidos son los siguientes:

- J: Jurídico
- V: Venezolano
- E: Extranjero
- G: Gobierno
- X: Aplica para Extranjeros sin documento venezolado (para importar)

El tamaño máximo del texto debe ser `11` dígitos incluyendo la primera letra

Si el **Número de Identificación** no coincide con el formato se mostrará el siguiente mensaje:

**Ingles:**
```
Invalid Business Partner Value Format
You should use the format [V, J, G, E, X (External unkow)][00000000]
Example: V20000000 / J400000000
```

**Español**
```
Formato de C.I./R.I.F No Válido
Debería usar el formato [V, J, G, E, X (Para Extranjeros sin Documento)][00000000]
Ejemplo: V20000000 / J400000000
```

Si por alguna razón el **Número de Identificación** no tiene el mismo caracter de inicio que el **Código** se mostrará el siguiente error:

**Ingles:**
```
Value and Tax ID Mismatch
```

**Español:**

```
La Cédula y el R.I.F No Coinciden
```

Seleccione el checklist **Exento de Impuesto en Venta**.

Exento de Impuesto de Venta, no es un campo obligatorio, por defecto está establecido en falso, permite la omisión de impuestos al generar ordenes de ventas, es decir si un producto es gravado, hará una excepción para este socio de negocio, emitiendo la orden de venta con el producto en cuestión con impuesto (0%).

![Campo Exento de Impuesto en Venta](/assets/img/docs/master-data/mad-master-tax.png)

Imagen 11. Campo Exento de Impuesto en Venta

Seleccione el checklist **Exento de Impuesto en Compra**, para definir al socio del negocio como exento de impuesto.

Exento de Impuesto de Compra, no es un campo obligatorio, por defecto está establecido en falso, permite la omisión de impuestos al generar ordenes de compras, es decir si un producto es gravado, hará una excepción para este socio de negocio, emitiendo la orden de compra con el producto en cuestión con impuesto (0%).

![Campo Exento de Impuesto en Compra](/assets/img/docs/master-data/mad-master-buys.png)

Imagen 12. Campo Exento de Impuesto en Compra

Seleccione el grupo de impuestos en el campo **Grupo de Impuestos**.

![Campo Grupo de Impuestos](/assets/img/docs/master-data/mad-master-group.png)

Imagen 13. Campo Grupo de Impuestos

Introduzca el código DUNS del socio del negocio en el campo **DUNS**.

El código DUNS no es un campo obligatorio, sin embargo, le permite introducir el número DUNS (Data Universal Numbering System o Sistema Universal de Numeración de Datos), el mismo es un un número de identificación proporciona la identidad única a cada empresa a nivel internacional.

![Campo DUNS](/assets/img/docs/master-data/mad-master-duns.png)

Imagen 14. Campo DUNS

Introduzca el número de referencia socio del negocio en el campo **No. de Referencia**.

El número de Referencia no es un campo obligatorio, sin embargo, le permite introducir un número fijo que utiliza el socio de negocio para gestiones administrativas, este tiene incidencia en las órdenes de compra o venta dependiendo la naturaleza de la entidad, siendo establecido de forma automática en las mismas.

![Campo No. de Referencia](/assets/img/docs/master-data/mad-master-reference.png)

Imagen 15. Campo No. de Referencia

Introduzca el código NAICS o SIC del socio del negocio en el campo **NAICS/SIC**.

El código NAICS/SIC no es un campo obligatorio, sin embargo, le permite introducir el código NAICS (American Industry Classification System ó Sistema de Clasificación Industrial de América del Norte), este es un código utilizado en los Estados Unidos, Canadá y México para clasificar la industria y actividades económicas.

![Campo NAICS/SIC](/assets/img/docs/master-data/mad-master-naics.png)

Imagen 16. Campo NAICS/SIC

Introduzca la valuación ABC en el campo **Valuación ABC**.

La valuación ABC no es un campo obligatorio, sin embargo, le permite establecer una evaluación clasificatoria del socio de negocio cliente.

![Campo Valuación ABC](/assets/img/docs/master-data/mad-master-valuation.png)

Imagen 17. Campo Valuación ABC

Seleccione el grupo de socio del negocio en el campo **Grupo de Socio del Negocio**

El grupo de Socio del Negocio, permite categorizar sus socios de negocio de una forma específica, lo cual es eficiente a la hora de emitir asientos contables y reportes, para entenderlo mejor veamos el siguiente ejemplo:

Imaginemos que tenemos una cartera de clientes que manejan diferentes monedas, para categorizar de forma específica sería: **Clientes Nacionales** y **Clientes Internacionales**, de esta forma podría emitir reportes de cuentas por cobrar para clientes nacionales e Internacionales respectivamente.

Adicionalmente, define en el socio de negocio funciones y parámetros a partir de la categoría, entre las que se encuentran:

**Impresión a Color**: Define el color con los que serán mostrados en el arbol.

**Info Confidencial**: Permite ingresar información confidencial en solicitudes Web.

**Lista de Precios Venta**: Define lista de precios empleada en ordenes de venta y factura de cuentas por cobrar.

**Lista de Precios Compra**: Define lista de precios empleada en ordenes de compra y factura de cuentas por pagar.

**Esquema de Descuento OV**: Define esquema de descuento empleado en ordenes de venta y factura de cuentas por cobrar.

**Esquema de Descuento OC**: Define esquema de descuento empleado en ordenes de compra y factura de cuentas por pagar.

**Porcentaje de Crédito en Verificación de Cliente**: Define el porcentaje de crédito disponible para la evaluación del crédito previo a que un socio de negocio pase de crédito correcto a crédito en verificación.

**Porcentaje de Tolerancia OC/Factura**: Define el porcentaje de diferencia que puede existir entre el precio de la orden de compra y el precio de la factura de cuentas por pagar, porcentaje de holgura con el cual podría ser completados estos documentos sin pasar por el flujo de aprobación.

**Contabilidad**: Define cuentas contables en la que se realizarán los asientos contables dependiendo de la naturaleza del socio de negocio (Clientes o Proveedores).

![Campo Grupo de Socio del Negocio](/assets/img/docs/master-data/mad-master-partner.png)

Imagen 18. Campo Grupo de Socio del Negocio

Seleccione el tipo de cuenta en el campo **Tipo de Cuenta\*\***.

El tipo de cuenta no es un campo obligatorio, sin embargo, le permite a los vendedores conocer con perfección las características de sus clientes y los diferentes tipos de clientes definidos en la empresa y así realizar un mejor estudio de mercado.

![Campo Tipo de Cuenta](/assets/img/docs/master-data/mad-master-account.png)

Imagen 19. Campo Tipo de Cuenta

Seleccione el lenguaje en el campo **Lenguaje**.

El lenguaje no es un campo obligatorio, sin embargo, define el idioma con que será impreso los formatos de impresión asociados a este Socio de Negocio.

![Campo Lenguaje](/assets/img/docs/master-data/mad-master-language.png)

Imagen 20. Campo Lenguaje

Seleccione el tipo de industria en el campo **Tipo de Industria**.

El tipo de industria no es un campo obligatorio, sin embargo, define la tipología de industria en la que se encuentra el Socio de Negocio.

![Campo Tipo de Industria](/assets/img/docs/master-data/mad-master-industry.png)

Imagen 21. Campo Tipo de Industria

Seleccione el segmento en el campo **Segmento**.

El segmento no es un campo obligatorio, sin embargo, permite segmentar socios de negocios de manera rigurosa, identificar patrones que pueden ser usados para asignar un segmento.

![Campo Segmento](/assets/img/docs/master-data/mad-master-segment.png)

Imagen 22. Campo Segmento

Seleccione el grupo de ventas en el campo **Grupo de Ventas**.

El grupo de ventas no es un campo obligatorio, sin embargo, permite categorizar al socio de negocio en un grupo de venta con objetivos referente a marketing y promociones.

![Campo Grupo de Ventas](/assets/img/docs/master-data/mad-master-sales.png)

Imagen 23. Campo Grupo de Ventas

Introduzca la dirección de la página web en el campo **Dirección Web**.

La dirección Web no es un campo obligatorio, sin embargo, permite registrar el sitio web del socio del negocio (Cliente y Proveedores) en el cual se administra la información de contacto de la empresa para solucionar sus inquietudes, realizar compras y gestión de solicitudes, aprovechando oportunidades de negocio que se encuentran en la red.

![Campo Dirección Web](/assets/img/docs/master-data/mad-master-web.png)

Imagen 24. Campo Dirección Web

Seleccione el checklist **Prospecto Activo**.

Prospecto Activo no es un campo obligatorio, por defecto está establecido en falso, sin embargo al seleccionarlo indica que el socio de negocio de tipo cliente está activo.

![Campo Prospecto Activo](/assets/img/docs/master-data/mad-master-prospect.png)

Imagen 25. Campo Prospecto Activo

Seleccione la opción **Liga Organización**, para ejecutar el proceso.

El proceso liga organización es ejecutado para los casos en los que la organización en gestión requiere generar documentos o solicitudes que son cubiertas por otra organización, para entenderlo mejor veamos el siguiente ejemplo:

Imaginemos que tenemos una organización (**Inversión del Norte**) donde existe un proveedor **Inversión del Sur C.A**, este es ligado a la organización **Inversión del Sur**.

Cuando **Inversión del Norte** emite una orden de compra configurada para emitir contra documento con el proveedor **Inversión del Sur C.A**, es emitida una orden de venta para **Inversión del Norte** que satisface la orden de compra.

Para ejecutar este proceso debe tomar en cuenta los siguientes parámetros:

**Organización Existente**: Seleccione una organización existente, si el campo queda vacío, se creará una organización con el nombre del socio de negocio de forma automática.

**Tipo de Organización**: Seleccione tipo de organización previa definición.

**Límite de Acceso al Rol**: Seleccione un rol existente si desea que sólo un rol específico tenga acceso a esta organización, si el campo queda vacío, el rol ClientAdmin y ClientUser tendrán acceso a esta organización.

Seleccione la opción **OK** y será ejecutado el proceso.

Nota

Las configuraciones por límite de acceso a rol es modificable desde los roles.

![Campo Liga Organización](/assets/img/docs/master-data/mad-master-league.png)

Imagen 26. Campo Liga Organización

Warning

La organización puede ser ligada únicamente a un socio de negocio, para corregir un error en la asignación de la organización, ejecute el proceso: Desliga de Socio de Negocio a organización.

Introduzca el valor de ingresos en el campo **Valor Esperado**.

El valor esperado no es un campo obligatorio, sin embargo, permite ingresar un monto informativo de la rentabilidad esperada, basada en una estimación ingresos de un cliente.

![Campo Valor Esperado](/assets/img/docs/master-data/mad-master-value.png)

Imagen 27. Campo Valor Esperado

Podrá visualizar el valor total de transacciones que posee el cliente en el campo **Valor Total Transacciones**.

El valor total transacciones es un campo solo lectura, actualizado de forma automática, sumando cada ingreso generado por este cliente, el mismo permite evaluar la rentabilidad de un cliente potencial.

![Campo Valor Total Transacciones](/assets/img/docs/master-data/mad-master-total.png)

Imagen 28. Campo Valor Total Transacciones

Introduzca el costo de adquisición en el campo **Costo de Adquisición**.

El costo de adquisición no es un campo obligatorio, sin embargo, permite registrar el monto total correspondiente al costo generado para lograr convertir un prospecto a cliente.

![Campo Costo de Adquisición](/assets/img/docs/master-data/mad-master-acquisition.png)

Imagen 29. Campo Costo de Adquisición

Introduzca la cantidad de empleados en el campo **Empleados**.

Empleados no es un campo obligatorio, sin embargo, le permite evaluar la cantidad de empleados de una empresa prospecto, funge como un dato informativo para ser utilizada en cotizaciones por ejemplo.

![Campo Empleados](/assets/img/docs/master-data/mad-master-employes.png)

Imagen 30. Campo Empleados

Introduzca el porcentaje de participación en el campo **Participación**.

La participación no es un campo obligatorio, sin embargo, le permite mantener el control porcentualmente de la proporción obtenidas de las compras del cliente en la producción o distribución de productos o servicios.

Esto puede generar fidelización del cliente, dando la oportunidad de evaluar promociones y descuentos para aquellos clientes en los cuales su participación sea alta, y a su vez, mayor oportunidad en el aumento de la cartera de cliente creando programas para ventas cruzadas y sugestivas, comercializando así más productos y servicios.

![Campo Participación](/assets/img/docs/master-data/mad-master-participation.png)

Imagen 31. Campo Participación

Introduzca el número de ventas total en el campo **Volumen de Ventas**.

El volumen de ventas no es un campo obligatorio, sin embargo, permite registrar el número de ventas efectivas de un cliente, estas cifras generalmente son auditadas en reuniones directivas para evaluar la rentabilidad y expansión del negocio o si por el contrario sus ventas disminuyen.

Adicionalmente este datos es producto de supervisión para controlar volumen de ventas en comparación a pronósticos de ventas, estableciendo una estimación de cantidades mínimas a vender para mantener un equilibrio en la organización.

![Campo Volumen de Ventas](/assets/img/docs/master-data/mad-master-volume.png)

Imagen 32. Campo Volumen de Ventas

Introduzca la fecha de la primera venta en el campo **Primera Venta**.

La primera venta no es un campo obligatorio, sin embargo, permite registrar la fecha de la primera venta de forma informativa, útil para evaluar descuentos y promociones por aniversarios

![Campo Primera Venta](/assets/img/docs/master-data/mad-master-first.png)

Imagen 33. Campo Primera Venta

Seleccione el check **Entrega Directa**

El check entrega directa no es un campo obligatorio, sin embargo, permite registrar el socio de forma informativa, útil para generar reportes e indicar que los envíos de las notas se envían del vendedor directamente al cliente.

![Check Entrega Directa](/assets/img/docs/master-data/mad-master-direct.png)

Imagen 34. Check Entrega Directa

Seleccione el tipo de persona en el campo **Tipo de Persona**.

El tipo de persona se refiere a la forma legal como está está constituida una organización, entre las cuales tenemos las siguientes opciones:

**Jurídica Domiciliada**: Persona Jurídica Domiciliada es una empresa constituida dentro del territorio nacional, que cumple sus obligaciones y resguarda la empresa con su patrimonio.

**Jurídica No Domiciliada**: Persona Jurídica No Domiciliada es una empresa constituida fuera del territorio nacional, que cumple sus obligaciones y resguarda la empresa con su patrimonio.

**Natural Residente**: Persona Natural Residente es una persona residente en el país que asume las obligaciones, responsabilidades y resguarda las obligaciones con patrimonio propio.

**Natural No Residente**: Persona Natural No Residente es una persona residente fuera del país, que asume las obligaciones, responsabilidades y resguarda las obligaciones con patrimonio propio.

![Campo Tipo de Persona](/assets/img/docs/master-data/mad-master-person.png)

Imagen 35. Campo Tipo de Persona

Adjunte el logo de la empresa en el campo **Logo**.

El logo no es un campo obligatorio, sin embargo permite guardar logotipos de socios de negocios.

![Campo Logo](/assets/img/docs/master-data/mad-master-logo.png)

Imagen 36. Campo Logo

Seleccione el icono **Guardar Cambios** ubicado en la barra de herramientas para guardar los datos ingresados.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-keep.png)

Imagen 37. Icono Guardar Cambios

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

- Proveedor
  - Registro de Proveedor
- Cliente
  - Registro de Cliente
- Empleado
  - Registro de Empleado

## Proveedor

Un socio del negocio proveedor es aquella persona u organización que provee de productos y servicios a otra que lo necesite para su consumo, los transforme para su venta o los compre para venderlos sin modificaciones.

ADempiere tiene la funcionalidad de permitirle a las organizaciones llevar un control de las transacciones realizadas con proveedores internos y externos.
Un proveedor interno puede ser un proveedor nacional, este puede presentarse bajo tres (3) condiciones, proveedor empleado de la organización, proveedor cliente nacional de la organización o simplemente proveedor nacional.

De igual manera, un proveedor externo puede ser un proveedor internacional, este puede presentarse bajo dos (2) condiciones, proveedor cliente internacional de la organización o simplemente proveedor internacional. A continuación se define el proceso para la creación de socio del negocio proveedor en ADempiere.

- Registro de Proveedor
  - Pestaña Cuenta Bancaria
  - Pestaña Localización
  - Pestaña Contacto

### Registro de Proveedor

Para registrar un proveedor, es necesario que sea realizado el procedimiento regular explicado en el documento **Registro de Socio del Negocio**, elaborado por **ERPyA**.

Luego de culminar el procedimieto de registro de socio del negocio, seleccione la pestaña **Proveedor** que se encuentra del lado izquierdo de la ventana socio del negocio, para identificar al socio del negocio como proveedor de la empresa.

Esta pestaña le indica a ADempiere si el socio del negocio que se esta registrando es un proveedor

![Pestaña Proveedor](/assets/img/docs/master-data/mad-master-proveedor.png)

Imagen 1. Pestaña Proveedor

Nota
La pestaña **Proveedor** se compone de:

- Un checklist **Proveedor**.
- Los datos principales del socio del negocio donde los campos **Compañía**, **Organización**, **Código** y **Nombre**, vienen cargados de la ventana principal **Socio del Negocio**.
- Ademas posee un grupo de campos que definen la configuración de retenciones a aplicar al socio del negocio, dichos campos se encuentran explicados en los documentos Configuración Esencial de la Retención de IVA, Configuración Esencial de la Retención de ISLR y Configuración Esencial de la Retención Municipal.

Seleccione el checklist **Proveedor** para habilitar en ADempiere el socio del negocio como proveedor de la compañía u organización.

![Checklist Proveedor](/assets/img/docs/master-data/mad-master-checklist.png)

Imagen 2. Checklist Proveedor

Warning
De no ser tildado el checklist **Proveedor**, ADempiere no tomará el socio del negocio como proveedor.

Al tildar el checklist **Proveedor** podrá apreciar un grupo de campos necesarios para la compra de productos al mismo, dichos campos no son obligatorios ya que pueden ser definidos en el documento **Orden de Compra** al momento de su elaboración.

![Grupo de Campos Generados por el Checklist Proveedor](/assets/img/docs/master-data/mad-master-checklist-2.png)

Imagen 3. Grupo de Campos Generados por el Checklist Proveedor

El campo **Regla de Pago** establece la regla de pago definitiva para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo la regla de pago utilizada es **A Crédito**.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-regla.png)

Imagen 4. Campo Regla de Pago

El campo **Lista de Precios de Compra** establece la lista de precios definitiva para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo la lista de precios utilizada es **Compra (VES)**.

![Campo Lista de Precios de Compra](/assets/img/docs/master-data/mad-master-price.png)

Imagen 5. Campo Lista de Precios de Compra

El campo **Término Pago Orden de Compra** establece el término de pago definitivo para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo el término de pago utilizado es **Crédito a 15 días**.

![Campo Término de Pago Orden de Compra](/assets/img/docs/master-data/mad-master-term.png)

Imagen 6. Campo Término de Pago Orden de Compra

El campo **Esquema del Descuento en OC** establece el descuento definitivo para las compras al socio del negocio proveedor que se esta registrando, para este ejemplo el esquema de descuento utilizado es **Compras Porcentaje Simple**.

![Campo Esquema de Descuento en OC](/assets/img/docs/master-data/mad-master-schema.png)

Imagen 7. Campo Esquema de Descuento en OC

El campo **Exento de (IGTF)** establece que no se aplicará el impuesto **IGTF** al socio del negocio proveedor que se esta registrando

![Campo Exento de (IGTF)](/assets/img/docs/master-data/mad-master-igtf.png)

Imagen 8. Campo Exento de (IGTF)

### Pestaña Cuenta Bancaria

En esta pestaña se registran los datos bancarios del socio del negocio proveedor, con el checklist **Activo** se pueden registrar los datos de la tarjeta de crédito del socio del negocio. Así mismo, con el checklist **ACH** se pueden registrar los datos de la cuenta bancaria del socio del negocio.

Seleccione la pestaña **Cuenta Bancaria** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio. Por defecto se encuentra tildado el checklist **Activo**.

![Pestaña Cuenta Bancaria](/assets/img/docs/master-data/mad-master-count.png)

Imagen 9. Pestaña Cuenta Bancaria

### Checklist Activo

Seleccione en el campo **Tarjeta de Crédito**, el tipo de tarjeta de crédito que posee el socio del negocio proveedor que esta registrando.

![Campo Tarjeta de Crédito](/assets/img/docs/master-data/mad-master-card.png)

Imagen 10. Campo Tarjeta de Crédito

Introduzca en el campo **Número**, el número de tarjeta de crédito del socio del negocio proveedor que esta registrando.

![Campo Número](/assets/img/docs/master-data/mad-master-number.png)

Imagen 11. Campo Número

Introduzca en el campo **Código Verificación**, el código de verificación de la tarjeta de crédito del socio del negocio proveedor que esta registrando, este código son los últimos tres números del reverso de la tarjeta.

![Campo Código Verificación](/assets/img/docs/master-data/mad-master-check.png)

Imagen 12. Campo Código Verificación

Introduzca en el campo **Mes de Expiración**, el mes de expiración de la tarjeta de crédito del socio del negocio proveedor que esta registrando.

![Campo Mes de Expiración](/assets/img/docs/master-data/mad-master-month.png)

Imagen 13. Campo Mes de Expiración

Introduzca el año de expiración de la tarjeta de crédito del socio del negocio proveedor que esta registrando en el campo **Año de Expiración**.

![Campo Año de Expiración](/assets/img/docs/master-data/mad-master-year.png)

Imagen 14. Campo Año de Expiración

Introduzca el nombre de referencia de la tarjeta en el campo **Nombre**, en este campo va el nombre del titular de la tarjeta de crédito que esta registrando.

![Campo Nombre de Referencia de la Tarjeta](/assets/img/docs/master-data/mad-master-reference-card.png)

Imagen 15. Campo Nombre de Referencia de la Tarjeta

Warning
Este proceso se realiza con la finalidad de registrar la tarjeta de crédito del socio del negocio.

### Checklist ACH

Para registros de cuentas bancarias, tilde el checklist **ACH**, a continuación se reflejarán los campos para el registro de la cuenta bancaria del socio del negocio proveedor.

![Checklist ACH](/assets/img/docs/master-data/mad-master-ach.png)

Imagen 16. Checklist ACH

En el campo **Banco** seleccione el banco a registrar con ayuda del icono identificador (adjunto imagen).

![Campo Banco](/assets/img/docs/master-data/mad-master-bank.png)

Imagen 17. Campo Banco

A continuación visualizará la siguiente ventana con los diferentes bancos, dónde debe seleccionar el banco que posee el socio del negocio proveedor y la opción **OK** para cargar los datos a la ventana.

![Ventana Bancos](/assets/img/docs/master-data/mad-master-windows.png)

Imagen 18. Ventana Bancos

Seleccione en el campo **Tipo de Cuenta Bancaria**, el tipo de cuenta correspondiente a la cuenta del socio del negocio proveedor.

![Campo Tipo de Cuenta Bancaria](/assets/img/docs/master-data/mad-master-banking.png)

Imagen 19. Campo Tipo de Cuenta Bancaria

Introduzca en el campo **No. De Cuenta**, el número de cuenta del socio del negocio proveedor que esta registrando.

![Campo No. De Cuenta](/assets/img/docs/master-data/mad-master-no.png)

Imagen 20. Campo No. De Cuenta

Introduzca en el campo **Nombre**, el nombre del titular de la cuenta bancaria que esta registrando.

![Campo Nombre del Titular de la Cuenta](/assets/img/docs/master-data/mad-master-title.png)

Imagen 21. Campo Nombre del Titular de la Cuenta

### Pestaña Localización

La localización de un socio del negocio es muy importante por diferentes motivos y más si el socio del negocio es proveedor. Ya que las transacciones de compras serán realizadas al mismo, en esta pestaña se deben registrar con exactitud los datos de la dirección del socio del negocio.

Seleccione la pestaña **Localización** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio.

![Pestaña Localización](/assets/img/docs/master-data/mad-master-location.png)

Imagen 22. Pestaña Localización

A continuación visualizará la siguiente ventana, dónde debe resourcesdsocio-proveedorr la dirección exacta del socio del negocio proveedor que esta registrando.

![Ventana de Localización](/assets/img/docs/master-data/mad-master-location-2.png)

Imagen 23. Ventana de Localización

Warning
Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

### Pestaña Contacto

En esta pestaña se registran todos los datos de contacto que se tengan del socio del negocio proveedor.

Seleccione la pestaña **Contacto** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio, para proceder a llenar los campos necesarios.

![Pestaña Contacto](/assets/img/docs/master-data/mad-master-contac.png)

Imagen 24. Pestaña Contacto

Introduzca en el campo **Nombre**, el nombre del socio del negocio contacto para las transacciones entre las empresas.

![Campo Nombre de Contacto](/assets/img/docs/master-data/mad-master-contac-2.png)

Imagen 25. Campo Nombre de Contacto

Introduzca en el campo **Email**, el email del socio del negocio contacto para las transacciones entre las empresas.

![Campo Email](/assets/img/docs/master-data/mad-master-email.png)

Imagen 26. Campo Email

Introduzca en el campo **Teléfono**, el teléfono del socio del negocio contacto para las transacciones entre las empresas.

![Campo Teléfono](/assets/img/docs/master-data/mad-master-telephone.png)

Imagen 27. Campo Teléfono

Note
Este procedimiento realizado aplica solo para los Socios del Negocio que cumplan el rol de Proveedor.

## Cliente

Si es usted un usuario en etapa de iniciación le recomendamos leer el capítulo anterior, Socios del Negocio de ADempiere, donde respondimos la interrogante común: **¿Qué es un Socio de Negocio?**, esto con la intención de proveer en este material una información más digerible.

Como resultado de lo anteriormente expuesto, se puede concluir que un socio de negocio que actúa como cliente, es una entidad jurídica o natural que adquiere productos o servicios provenientes de la empresa,estos pueden ser:

- **Clientes Nacionales:** Realizan transacciones que generan ingresos a la empresa (Ventas) dentro del territorio.
- **Clientes Internacionales:** Realizan transacciones que generan ingresos a la empresa(Ventas) fuera del territorio, esto se conoce como exportación.

Esta categorización en ADempiere es conocida como **Grupo de Socio de Negocio** y es la base contable (en su mayoría) para las operaciones emitidas a partir de este registro maestro, no obstante, el usuario tiene la opción de realizar configuraciones excepcionales para ciertos clientes.

Para este caso, usted tendría por categoría diferentes cuentas contables, Cuenta por Cobrar Nacionales y Cuenta por Cobrar Internacionales respectivamente.

Ahora bien, si es usted usuario de ADempiere, seguramente se ha hecho preguntas que le han complicado la operativa de algún modo. Para facilitar su día a día **ERPyA** quiere responder algunas preguntas frecuentes con las que nos topamos en nuestra experiencia como consultores e implementadores de ADempiere:

**¿Si un socio de negocio es proveedor o empleado, y ahora funge como cliente, debo crearlo nuevamente?**

No, esto ha ocasionado en innumerables oportunidades duplicidades de registros e incongruencias en resultados. Bastará con ubicar con el código del socio del negocio al mismo y configurar como lo indica este material.

**Si la categoría es por ejemplo Cliente Nacional, ¿cómo actúa contablemente siendo cliente y proveedor?**

Pues bien, la categoría generalmente hace referencia a la agrupación contable a la que pertenece el socio de negocio cuando es registrado por primera vez, la misma contempla en su definición las cuentas contables a establecer en la pestaña de cliente y en la de proveedor, esto de alguna manera solventa la inquietud de no poder colocar dos tres grupos de socios de negocios, si desea conocer más del ¿cómo opera esta agrupación? de la que hablo vaya a **Grupo de Socio de Negocio**.

**¿Cómo agrupar por vendedor a mis clientes para emitir un reporte?**

Para ofrecer una eficiente administración en distribución y seguimiento de clientes y pedidos generados, ADempiere ofrece al usuario dos opciones:

- **Por Región de Ventas:** De esta forma se asigna la región de venta a un cliente, a su vez, ésta depende de un asesor de ventas.Esto permite una mayor facilidad en el mantenimiento por ausencia de vendedores, si su cliente posee más de una dirección podría configurar más de un asesor.
- **Por Asesor Especifico:** De esta forma se asigna un vendedor especifico al cliente directamente, omitiendo configuraciones en la localización.

**¿Qué columnas configuradas en el cliente es información transferida a la orden de venta?**

Existen múltiples reglas que permiten predefinir valores en transacciones dependiendo de la configuración:

- **Regla de facturación:** Define si la facturación después del pedido será después de la entrega, programada con el cliente o inmediatamente.
- **Regla de entrega:** Define si la entrega después del pedido será después del cobro, a disponibilidad del producto o forzado.
- **Descuentos:** Define esquemas de descuentos basados en volumen de ventas, promociones o % estáticos.
- **Vendedor o Asesor de Ventas:** Define el agente que garantiza la satisfacción y el cumplimiento de las demandas del cliente.
- **Regla de pago:** Define la metodología con la que generalmente el cliente cancela sus deudas.
- **Programas de Pago:** Define esquemas de pagos y estructuras de cuotas para la cancelación de sus deudas.
- **Lista de Precio:** Define lista de precio y moneda con la que generalmente el cliente cancela sus deudas.

Entre muchos otros campos más que son predeterminados desde el socio de negocio, pasando por la orden de venta y la factura, ellos definen comportamientos en funcionalidades versátiles dentro de ADempiere.

**¿Cómo configuro un descuento para el cliente?**

ADempiere le permite aplicar un Esquema de Descuentos(previamente configurado) al cliente, en este sentido, el usuario podrá definir reglas específicas aplicando % de descuentos planos o basado en volumen, si desea profundizar más el tema, le invitamos a ver nuestro instructivo de **Esquema de Descuentos**.

**¿Cómo bloqueo el límite de crédito para el cliente?**

Podrá configurar estados de crédito para definir el comportamiento del análisis del crédito en el Socio de Negocio, el mismo actúa junto al **Saldo Actual** y **Límite de Crédito** para realizar la evaluación, si desea profundizar más el tema, le invitamos a ver nuestro instructivo de Socio del Negocio.

**¿Cómo configuro un cliente exento de impuesto?**

Para concluir el preámbulo, le invitamos a tomar en cuenta cada una de estas acotaciones, de seguro serán de utilidad, y a futuro le garantizará un eficiente manejo de una herramienta tan potente como lo es ADempiere.

- Registro de Cliente
  - Pestaña Cuenta Bancaria
  - Pestaña Localización
  - Pestaña Contacto

## Registro de Cliente

Para registrar un cliente, es necesario que sea realizado el procedimiento regular explicado en el documento **Registro de Socio del Negocio**, elaborado por **ERPyA**.

Luego de culminar el procedimieto de registro de socio del negocio, seleccione la pestaña **Cliente** que se encuentra del lado izquierdo de la ventana socio del negocio, para identificar al socio del negocio como cliente de la empresa.

En esta pestaña es registrada la información que la empresa requiere del socio del negocio cliente al momento de una venta al mismo. Cada uno de los campos que la misma contiene son necesarios en algún punto de la transacción de ventas.

![Pestaña Cliente](/assets/img/docs/master-data/mad-master-client.png)

Imagen 1. Pestaña Cliente

A continuación visualizará la siguiente imagen, dónde debe tildar el checklist **Cliente**.

![Checklist Cliente](/assets/img/docs/master-data/mad-master-checklist-client.png)

Imagen 2. Checklist Cliente

Warning
Al tildar el checklist **Cliente**, podrá apreciar diferentes campos que establecen los términos o reglas para las transacciones de ventas al socio del negocio cliente que esta registrando. Dichos campos no son obligatorios porque pueden ser establecidos al momento de generar la orden de venta al socio del negocio.

Introduzca en el campo **Copias del Documento**, el número de copias a ser impresas de cada documento generado al socio del negocio cliente.

![Campo Copias del Documento](/assets/img/docs/master-data/mad-master-document.png)

Imagen 3. Campo Copias del Documento

Seleccione en el campo **Regla de Facturación**, la regla establecida para facturar al socio del negocio cliente.

![Campo Regla de Facturación](/assets/img/docs/master-data/mad-master-factura.png)

Imagen 4. Campo Regla de Facturación

Seleccione en el campo **Programa de Facturación**, la frecuencia usada cuando se generan las facturas.

![Campo Programa de Facturación](/assets/img/docs/master-data/mad-master-program.png)

Imagen 5. Campo Programa de Facturación

Seleccione en el campo **Regla de Entrega**, la regla establecida para entregar al cliente los productos o servicios.

![Campo Regla de Entrega](/assets/img/docs/master-data/mad-master-delivery.png)

Imagen 6. Campo Regla de Entrega

Seleccione en el campo **Vía de Entrega**, como serán entregados los productos o servicios de la orden.

![Campo Vía de Entrega](/assets/img/docs/master-data/mad-master-via.png)

Imagen 7. Campo Vía de Entrega

Seleccione en el campo **Lista de Precios**, la lista de precios establecida para las ventas al socio del negocio cliente que esta registrando.

![Campo Lista de Precios](/assets/img/docs/master-data/mad-master-list.png)

Imagen 8. Campo Lista de Precios

Seleccione en el campo **Esq List Precios/Desc**, el esquema para calcular el porcentaje de descuento comercial.

![Campo Esq List Precios/Desc](/assets/img/docs/master-data/mad-master-list-price.png)

Imagen 9. Campo Esq List Precios/Desc

Podrá apreciar en el campo **% Descuento**, el porcentaje de descuento configurado en el esquema de descuento.

![Campo % Descuento](/assets/img/docs/master-data/mad-master-desc.png)

Imagen 10. Campo % Descuento

Seleccione en el campo **Regla de Pago**, la forma de pago de las facturas establecida para el socio del negocio cliente que esta registrando.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-rule.png)

Imagen 11. Campo Regla de Pago

Seleccione en el campo **Término de Pago**, las condiciones de pago de las facturas establecida para el socio del negocio que esta registrando.

![Campo Término de Pago](/assets/img/docs/master-data/mad-master-term-price.png)

Imagen 12. Campo Término de Pago

Seleccione en el campo **Agente Comercial**, asignado a la región donde se encuentra el socio del negocio cliente.

![Campo Agente Comercial](/assets/img/docs/master-data/mad-master-agent.png)

Imagen 13. Campo Agente Comercial

Seleccione en el campo **Morosidad**, la regla de morocidad para facturas vencidas.

![Campo Morosidad](/assets/img/docs/master-data/mad-master-morosidad.png)

Imagen 14. Campo Morosidad

Introduzca en el campo **Referencia de Orden de Socio del Negocio**, el número estándar de referencia para las órdenes de compra.

![Campo Referencia de Orden de Socio del Negocio](/assets/img/docs/master-data/mad-master-business.png)

Imagen 15. Campo Referencia de Orden de Socio del Negocio

Seleccione el checklist **Imprimir Descuento**, si desea imprimir en la factura y en la orden de venta el descuento aplicado.

![Campo Imprimir Descuento](/assets/img/docs/master-data/mad-master-print.png)

Imagen 16. Campo Imprimir Descuento

Introduzca en el campo **Descripción de Orden**, una descripción estándar para se utilizadas en las órdenes a generar al socio del negocio cliente que esta registrando.

![Campo Descripción de Orden](/assets/img/docs/master-data/mad-master-description-2.png)

Imagen 17. Campo Descripción de Orden

Seleccione en el campo **Formato de Impresión**, el formato de impresión a utilizar en las facturas del socio del negocio cliente.

![Campo Formato de Impresión](/assets/img/docs/master-data/mad-master-format.png)

Imagen 18. Campo Formato de Impresión

Introduzca en el campo **Mín de Vida útil %**, tiempo mínimo de vida útil que tienen los productos.

![Campo Mín de Vida útil %](/assets/img/docs/master-data/mad-master-util.png)

Imagen 19. Campo Mín de Vida útil %

Introduzca en el campo **Límite de Crédito**, el límite de crédito establecido para el socio del negocio cliente que esta registrando.

![Campo Límite de Crédito](/assets/img/docs/master-data/mad-master-limit.png)

Imagen 20. Campo Límite de Crédito

Podrá visualizar en el campo **Crédito Usado**, el crédito usado por el socio del negocio cliente que esta registrando.

![Campo Crédito Usado](/assets/img/docs/master-data/mad-master-credit-used.png)

Imagen 21. Campo Crédito Usado

Introduzca en el campo **Tiempo Gracia Cobro**, los días de gracia que tiene el socio del negocio antes de que el agente comercial le realice el cobro.

![Campo Tiempo de Gracia Cobro](/assets/img/docs/master-data/mad-master-time.png)

Imagen 22. Campo Tiempo de Gracia Cobro

### Pestaña Cuenta Bancaria

En esta pestaña se registran los datos bancarios del socio del negocio cliente, con el checklist **Activo** se pueden registrar los datos de la tarjeta de crédito del socio del negocio. Así mismo, con el checklist **ACH** se pueden registrar los datos de la cuenta bancaria del socio del negocio.

Seleccione la pestaña **Cuenta Bancaria** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio. Por defecto se encuentra tildado el checklist **Activo**.

![Pestaña Cuenta Bancaria](/assets/img/docs/master-data/mad-master-banking-2.png)

Imagen 23. Pestaña Cuenta Bancaria

### Checklist Activo

Seleccione en el campo **Tarjeta de Crédito**, el tipo de tarjeta de crédito que posee el socio del negocio cliente que esta registrando.

![Campo Tarjeta de Crédito](/assets/img/docs/master-data/mad-master-card-credit.png)

Imagen 24. Campo Tarjeta de Crédito

Introduzca en el campo **Número**, el número de tarjeta de crédito del socio del negocio cliente que esta registrando.

![Campo Número](/assets/img/docs/master-data/mad-master-number-2.png)

Imagen 25. Campo Número

Introduzca en el campo **Código Verificación**, el código de verificación de la tarjeta de crédito del socio del negocio cliente que esta registrando, este código son los últimos tres números del reverso de la tarjeta.

![Campo Código de Verificación](/assets/img/docs/master-data/mad-master-check-2.png)

Imagen 26. Campo Código de Verificación

Introduzca en el campo **Mes de Expiración**, el mes de expiración de la tarjeta de crédito del socio del negocio cliente que esta registrando.

![Campo Mes de Expiración](/assets/img/docs/master-data/mad-master-month-2.png)

Imagen 27. Campo Mes de Expiración

Introduzca el año de expiración de la tarjeta de crédito del socio del negocio cliente que esta registrando en el campo **Año de Expiración**.

![Campo Año de Expiración](/assets/img/docs/master-data/mad-master-year-2.png)

Imagen 28. Campo Año de Expiración

Warning

Este proceso se realiza con la finalidad de registrar la tarjeta de crédito del socio del negocio.

### Checklist ACH

Para registros de cuentas bancarias, tilde el checklist **ACH**, a continuación se reflejarán los campos para el registro de la cuenta bancaria del socio del negocio.

![Checklist ACH](/assets/img/docs/master-data/mad-master-ach-2.png)

Imagen 29. Checklist ACH

Introduzca en el campo **IBAN**, el código IBAN conformado por el código del país (2 dígitos) más el código de control de la localidad donde se encuentra la sucursal del banco (2 dígitos). Para ejemplificar el registro es utilizado el código **VE21**

![Campo IBAN](/assets/img/docs/master-data/mad-master-iban.png)

Imagen 30. Campo IBAN

En el campo **Banco** seleccione el banco a registrar con ayuda del ícono identificador (adjunto imagen).

![Campo Banco](/assets/img/docs/master-data/mad-master-bank-2.png)

Imagen 31. Campo Banco

A continuación visualizará la siguiente ventana con los diferentes bancos, dónde debe seleccionar el banco que posee el socio del negocio cliente y la opción **OK** para cargar los datos al formulario.

![Opción OK](/assets/img/docs/master-data/mad-master-ok-2.png)

Imagen 32. Opción OK

Seleccione el tipo de cuenta correspondiente a la cuenta del socio del negocio cliente en el campo **Tipo de Cuenta Bancaria**.

![Campo Tipo de Cuenta Bancaria](/assets/img/docs/master-data/mad-banking-3.png)

Imagen 33. Campo Tipo de Cuenta Bancaria

Introduzca en el campo **No. De Cuenta**, el número de cuenta del socio del negocio cliente que esta registrando.

![Campo No. De Cuenta](/assets/img/docs/master-data/mad-no-2.png)

Imagen 34. Campo No. De Cuenta

Warning

Este proceso se realiza con la finalidad de registrar la cuenta del socio del negocio.

Introduzca el nombre de referencia en el campo **Nombre**, en este campo va el nombre del titular de la tarjeta de crédito o de la cuenta bancaria que esta registrando.

![Campo Nombre de Titular de Cuenta](/assets/img/docs/master-data/mad-master-title-2.png)

Imagen 35. Campo Nombre de Titular de Cuenta

Introduzca en el campo **Dirección**, la dirección de la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Dirección de Entidad Bancaria](/assets/img/docs/master-data/mad-master-direcc.png)

Imagen 36. Campo Dirección de Entidad Bancaria

Introduzca en el campo **Ciudad**, el nombre de la ciudad donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Ciudad de Entidad Bancaria](/assets/img/docs/master-data/mad-master-city.png)

Imagen 37. Campo Ciudad de Entidad Bancaria

Introduzca en el campo **Código Postal**, el código postal de la ciudad donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Código Postal](/assets/img/docs/master-data/mad-master-postal.png)

Imagen 38. Campo Código Postal

Introduzca en el campo **Estado**, el nombre del estado donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo Estado de Entidad Bancaria](/assets/img/docs/master-data/mad-master-state.png)

Imagen 39. Campo Estado de Entidad Bancaria

Introduzca en el campo **País Cuenta**, el nombre del país donde se encuentra la entidad bancaria poseedora de la tarjeta de crédito.

![Campo País Cuenta](/assets/img/docs/master-data/mad-master-country.png)

Imagen 40. Campo País Cuenta

Introduzca en el campo **Licencia de Conducir**, el número de licencia de conducir del socio del negocio cliente que esta registrando.

![Campo Licencia de Conducir](/assets/img/docs/master-data/mad-master-license.png)

Imagen 41. Campo Licencia de Conducir

Introduzca en el campo **No. Seguro Social**, el número de cédula del titular de la tarjeta de crédito o cuenta bancaria que esta registrando.

![Campo No. Seguro Social](/assets/img/docs/master-data/mad-master-sure.png)

Imagen 42. Campo No. Seguro Social

Introduzca en el campo **Cta. Correo Electrónico**, el correo electrónico asociado a la tarjeta de crédito o cuenta bancaria que esta registrando.

![Campo Cta. Correo Electrónico](/assets/img/docs/master-data/mad-master-mail.png)

Imagen 43. Campo Cta. Correo Electrónico

Seleccione en el campo **Dirección Verificada**, si la dirección de la entidad bancaria se encuentra verificada.

![Campo Dirección Verificada](/assets/img/docs/master-data/mad-master-direcc-2.png)

Imagen 44. Campo Dirección Verificada

Seleccione en el campo **Código Postal Verificado**, si el código postal de la entidad bancaria se encuentra verificado.

![Campo Código Postal Verificado](/assets/img/docs/master-data/mad-master-postal-2.png)

Imagen 45. Campo Código Postal Verificado

### Pestaña Localización

La localización de un socio del negocio cliente es muy importante por diferentes motivos, ya que las transacciones de ventas serán realizadas al mismo, en esta pestaña se deben registrar con exactitud los datos de la dirección del socio del negocio.

Seleccione la pestaña **Localización** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio.

![Pestaña Localización](/assets/img/docs/master-data/mad-master-location-3.png)

Imagen 46. Pestaña Localización

Introduzca en el campo **Localización / Dirección**, la dirección de localización del socio del negocio cliente con ayuda del identificador.

![Campo Localización / Dirección](/assets/img/docs/master-data/mad-master-location-direcc.png)

Imagen 47. Campo Localización / Dirección

Seleccione en el campo **País**, el país donde se encuentra domiciliado el socio del negocio que esta registrando

![Campo País](/assets/img/docs/master-data/mad-master-country-2.png)

Imagen 48. Campo País

Seleccione en el campo **Estado**, el estado donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Estado](/assets/img/docs/master-data/mad-master-state-2.png)

Imagen 49. Campo Estado

Seleccione en el campo **Ciudad**, la ciudad donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Ciudad](/assets/img/docs/master-data/mad-master-city-2.png)

Imagen 50. Campo Ciudad

Introduzca la dirección detallada del socio del negocio cliente en el campo **Dirección 1** y seleccione la opción **OK**

![Campo Dirección 1](/assets/img/docs/master-data/mad-master-direcc-4.png)

Imagen 51. Campo Dirección 1

Introduzca en el campo **Teléfono**, el número de teléfono local para contactar al socio del negocio cliente.

![Campo Teléfono](/assets/img/docs/master-data/mad-master-telephone-2.png)

Imagen 52. Campo Teléfono

Introduzca en el campo **Teléfono Móvil**, el número de teléfono móvil para contactar al socio del negocio cliente.

![Campo Teléfono Móvil](/assets/img/docs/master-data/mad-master-telephone-movil.png)

Imagen 53. Campo Teléfono Móvil

Introduzca en el campo **Fax**, el fax para contactar al socio del negocio cliente.

![Campo Fax](/assets/img/docs/master-data/mad-master-fax.png)

Imagen 54. Campo Fax

Introduzca en el campo **ISDN**, el ISDN para contactar al socio del negocio cliente.

![ISDN](/assets/img/docs/master-data/mad-master-isdn..png)

Imagen 55. ISDN

Podrá apreciar tildados los checklist **Dirección Entregar-A**, **Dirección Facturar-A**, **Dirección Pagar-Desde** y **Dirección Remitir-A**, indicando cada uno de ellos un comportamiento diferente.

![Campo Dirección Entregar-A](/assets/img/docs/master-data/mad-master-direcc-a.png)

Imagen 56. Campo Dirección Entregar-A

El checklist **Dirección Facturar-A** establece la localización ingresada como la dirección para facturar.

![Campo Dirección Facturar-A](/assets/img/docs/master-data/mad-master-factura-a.png)

Imagen 57. Campo Dirección Facturar-A

El checklist **Dirección Pagar-Desde** establece la localización ingresada como la dirección desde donde paga las facturas el socio del negocio y donde son enviadas las cartas de morosidad.

![Campo Dirección Pagar-Desde](/assets/img/docs/master-data/mad-master-price-desde.png)

Imagen 58. Campo Dirección Pagar-Desde

El checklist **Dirección Remitir-A** establece la localización ingresada como la dirección para el envío de los pagos.

![Dirección Remitir-A](/assets/img/docs/master-data/mad-master-remitir.png)

Imagen 59. Dirección Remitir-A

Seleccione en el campo **Región de Ventas**, la región o área de ventas en la que se encuentra localizado el socio del negocio cliente.

![Campo Región de Ventas](/assets/img/docs/master-data/mad-master-region.png)

Imagen 60. Campo Región de Ventas

Note

Para conocer más sobre las regiones de ventas que puede tener una compañía u organización, visite el documento **Registro de Región de Ventas**, elaborado por **ERPyA**.

Introduzca en el campo **Código SICA**, el código SICA del socio del negocio cliente.

![Campo Código SICA](/assets/img/docs/master-data/mad-master-sica.png)

Imagen 61. Campo Código SICA

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana socio del negocio.

### Pestaña Contacto

En esta pestaña se registran todos los datos de contacto que se posea el socio del negocio cliente. De igual manera, es creado su usuario de acceso en ADempiere.

Seleccione la pestaña **Contacto** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio, para proceder a llenar los campos necesarios.

![Pestaña Contacto](/assets/img/docs/master-data/mad-master-contact.png)

Imagen 62. Pestaña Contacto

Warning

El contacto (Usuario) permite registrar las diferentes personas de contacto que tiene la empresa con el socio del negocio cliente que esta registrando. Un ejemplo de esta pestaña puede ser, un jefe o persona de contacto por departamento para que a la hora de alguna venta de productos o servicios al socio del negocio cliente, se contacte a la persona correspondiente.

Introduzca en el campo **Nombre**, el nombre completo de la persona de contacto con el socio del negocio cliente que esta registrando.

![Nombre de Contacto](/assets/img/docs/master-data/mad-master-name-contact.png)

Imagen 63. Nombre de Contacto

Introduzca en el campo **Descripción**, una breve descripción de la persona de contacto con el socio del negocio cliente que esta registrando

![Campo Descripción](/assets/img/docs/master-data/mad-master-description-3.png)

Imagen 64. Campo Descripción

Introduzca en el campo **Comentarios**, los comentarios o información adicional sobre el registro de la persona de contacto con el socio del negocio cliente.

![Campo Comentarios](/assets/img/docs/master-data/mad-master-coment.png)

Imagen 65. Campo Comentarios

El checklist **Activo**, indica que el registro se encuentra activo en el sistema.

![Checklist Activos](/assets/img/docs/master-data/mad-master-checklist-3.png)

Imagen 66. Checklist Activo

Seleccione el checklist **Es Gerente de Proyecto**, para indicar que la persona de contacto con el socio del negocio cliente es gerente de proyecto.

![Campo Es Gerente de Proyecto](/assets/img/docs/master-data/mad-master-manager.png)

Imagen 67. Campo Es Gerente de Proyecto

Seleccione el checklist **Es Miembro de un Proyecto**, para indicar que la persona de contacto con el socio del negocio cliente es miembro de un proyecto.

![Campo Es Miembro de un Proyecto](/assets/img/docs/master-data/mad-master-proyect.png)

Imagen 68. Campo Es Miembro de un Proyecto

Seleccione el checklist **Usuario de Autenticación** para que sean reflejados los campos necesarios para crear el usuario del socio del negocio cliente.

![Usuario de Autenticación](/assets/img/docs/master-data/mad-master-user.png)

Imagen 69. Usuario de Autenticación

Seleccione el checklist **Usuario Interno**, para indicar que la persona de contacto con el socio del negocio cliente es usuario interno.

![Campo Usuario Interno](/assets/img/docs/master-data/mad-master-internal.png)

Imagen 70. Campo Usuario Interno

Introduzca en el campo **Código**, el usuario de la persona de contacto con el socio del negocio cliente para ingresar a ADempiere.

![Campo Código](/assets/img/docs/master-data/mad-master-code-2.png)

Imagen 71. Campo Código

Warning

ERPyA tiene establecido como estándar de creación de usuario y contraseña en ADempiere, la inicial del primer nombre en minúscula, seguido del primer apellido completo, con la primera letra del mismo en mayúscula.

Introduzca en el campo **Contraseña**, la contraseña de la persona de contacto con el socio del negocio cliente para ingresar a ADempiere.

![Campo Contraseña](/assets/img/docs/master-data/mad-master-password.png)

Imagen 72. Campo Contraseña

Warning

ERPyA tiene establecido como estándar de creación de usuario y contraseña en ADempiere, la inicial del primer nombre en minúscula, seguido del primer apellido completo, con la primera letra del mismo en mayúscula.

Seleccione el checklist **Usuario de Tienda Web**, para indicar que la persona de contacto con el socio del negocio es usuario de tienda web.

![Checklist Usuario de Tienda Web](/assets/img/docs/master-data/mad-master-web-2.png)

Imagen 73. Checklist Usuario de Tienda Web

Introduzca en el campo **Email**, el correo electrónico de la persona de contacto con el socio del negocio para las transacciones entre las empresas.

![Campo Email](/assets/img/docs/master-data/mad-master-email-2.png)

Imagen 74. Campo Email

Seleccione en el campo **Saludo**, la forma de saludar a la persona de contacto con el socio del negocio en los documentos a ser enviados.

![Campo Saludo](/assets/img/docs/master-data/mad-master-saludo.png)

Imagen 75. Campo Saludo

Seleccione en el campo **Dirección del Socio del Negocio**, la dirección de ubicación de la persona de contacto con el socio del negocio.

![Campo Dirección del Socio del Negocio](/assets/img/docs/master-data/mad-master-partner-2.png)

Imagen 76. Campo Dirección del Socio del Negocio

Introduzca en el campo **Título**, el nombre del socio del negocio cliente.

![Campo Título](/assets/img/docs/master-data/mad-master-title-3.png)

Imagen 77. Campo Título

Seleccione en el campo **Cumpleaños**, la fecha de nacimiento de la persona de contacto con el socio del negocio.

![Campo Cumpleaños](/assets/img/docs/master-data/mad-master-birthday.png)

Imagen 78. Campo Cumpleaños

Introduzca en el campo **Teléfono**, el teléfono para localizar a la persona de contacto con el socio del negocio para las transacciones entre las empresas.

![Campo Teléfono de Contacto](/assets/img/docs/master-data/mad-master-telephone-contact.png)

Imagen 79. Campo Teléfono de Contacto

Introduzca en el campo **Teléfono Móvil**, el teléfono móvil para localizar a la persona de contacto con el del socio del negocio.

![Campo Teléfono Móvil](/assets/img/docs/master-data/mad-master-movil.png)

Imagen 80. Campo Teléfono Móvil

Introduzca en el campo **Fax**, el fax de contacto del socio del negocio.

![Campo Fax](/assets/img/docs/master-data/mad-master-fax-2.png)

Imagen 81. Campo Fax

Seleccione en el campo **Tipo de Notificación**, la forma de enviar notificaciones a la persona de contacto con el socio del negocio.

![Campo Tipo de Notificación](/assets/img/docs/master-data/mad-master-notification.png)

Imagen 82. Campo Tipo de Notificación

Seleccione en el campo **Posición**, la posición de trabajo de la persona de contacto con el socio del negocio.

![Campo Posición](/assets/img/docs/master-data/mad-master-position.png)

Imagen 83. Campo Posición

Podrá apreciar el checklist **Acceso Total Socio del Negocio**, que al estar tildado indica que la persona de contacto con el socio del negocio cliente posee acceso total a su rol.

![Campo Acceso Total Socio del Negocio](/assets/img/docs/master-data/mad-master-access.png)

Imagen 84. Campo Acceso Total Socio del Negocio

Seleccione el icono **Guardar Cambios** en la barra de herramientras de ADempiere, para guardar el registro de los campos.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-save.png)

Imagen 85. Icono Guardar Cambios

Note

Este procedimiento realizado aplica solo para los Socios del Negocio que cumplan el rol de Cliente.

## Empleado

Un socio del negocio empleado es aquella persona que presta sus servicios como trabajador en una determinada empresa u organización, desempeñando un cargo y recibiendo un salario a cambio de sus servicios. En Venezuela los empleados de una organización se encuentra respaldados por la LOTTT, la forma de pago y condiciones de trabajo es acordada por ambas partes de acuerdo a lo establecido en dicha ley.

ADempiere permite realizar un registro único y detallado de toda la información que la organización requiere del empleado en su respectivo momento, ya sea para pagos, capacitaciones, retenciones o remuneraciones. De igual manera, permite registrar información referente a seguro, experiencia laboral, educación, familiares, dependientes, entre otros.

Dentro de sus funcionalidades, ADempiere permite a las organizaciones realizar de forma sencilla las operaciones necesarias para el cálculo de nómina, otorgando a los empleados de la organización su respectivo recibo de pago conforme a lo establecido en la ley. A continuación se define el proceso para la creación de socio del negocio empleado en ADempiere.

- Registro de Empleado
  - Pestaña Información de Contrato
  - Pestaña Atributo de Empleado
  - Pestaña Días Libres de la Semana
  - Pestaña Detalle de Pago
  - Pestaña Cuenta Bancaria
  - Pestaña Experiencia Laboral
  - Pestaña Educación
  - Pestaña Dependientes
  - Pestaña Localización
  - Pestaña Detalle de Seguro
  - Pestaña Detalle de Permiso

### Registro de Empleado

En el menú de ADempiere, ubique y seleccione la carpeta **Gestión de Recursos Humanos y Nómina**, luego seleccione la carpeta **Recursos Humanos**, por último seleccione la carpeta **Configuración de Empleado** y la ventana **Empleado (Todos)**.

![Menú de ADempiere](/assets/img/docs/master-data/mad-master-menu-2.png)

Imagen 1. Menú de ADempiere

En la ventana **Empleado (Todos)**, se registran todos los datos personales y laborales que la empresa requiere del socio del negocio empleado, los mismos son utilizados y actualizados a lo largo de su período laboral en dicha empresa. La información del empleado desde el momento en el que inicia su período laboral, hasta el momento actual o el momento en el que termina, se encuentra distribuida en la ventana principal **Empleado** y sus (11) once pestañas, explicadas a continuación.

Note

Cada uno de los campos con el símbolo (\*) son obligatorios para el registro.

A continuación podrá apreciar la ventana **Empleado (Todos)**, dónde debe seleccionar el icono de **Registro Nuevo** que se encuentra ubicado en la barra de herramientas de ADempiere.

![Ventana Principal Empleados (Todos)](/assets/img/docs/master-data/mad-master-employee.png)

Imagen 2. Ventana Principal Empleados (Todos)

Proceda al llenado de los campos necesarios que a continuación se detallan.

Seleccione en el campo **Compañía**, la compañía para la cual esta registrando el socio del negocio empleado.

![Campo Compañía](/assets/img/docs/master-data/mad-master-company.png)

Imagen 3. Campo Compañía

Seleccione en el campo **Organización**, la organización para la cual esta registrando el socio del negocio empleado.

![Campo Organización](/assets/img/docs/master-data/mad-master-organization-2.png)

Imagen 4. Campo Organización

Warning

Para que el socio del negocio este disponible para todas las organizaciones, el mismo deberá estar registrado con la organización en (\*), de lo contrario el socio del negocio solo estará disponible para una sola organización.

Introduzca el código de identificación, cédula o rif del socio del negocio en el campo **Código**, el valor introducido en este campo automáticamente se reflejará en el campo **Número Identificación**.

![Campo Código](/assets/img/docs/master-data/mad-master-code-20.png)

Imagen 5. Campo Código

Warning

Se recomienda que al ingresar el valor al campo **Código** no se ingrese ningún prefijo, punto, guion o cualquier otro carácter.

Introduzca los (2) dos nombres del socio del negocio empleado en el campo **Nombre**.

![Campo Nombre](/assets/img/docs/master-data/mad-master-name-20.png)

Imagen 6. Campo Nombre

Note

Si el socio del negocio que esta registrando posee solo un nombre, se debe ingresar solo ese nombre que posee.

Introduzca en el campo **Nombre 2**, los (2) dos apellidos del socio del negocio empleado.

![Campo Nombre 2](/assets/img/docs/master-data/mad-master-name-21.png)

Imagen 7. Campo Nombre 2

Note

Si el socio del negocio que esta registrando posee solo un apellido, se debe ingresar solo ese apellido que posee.

Introduzca en el campo **Descripción**, una descripción corta con respecto al socio del negocio empleado.

![Campo Descripción](/assets/img/docs/master-data/mad-master-description-20.png)

Imagen 8. Campo Descripción

Seleccione el grupo de socio del negocio al que pertenezca el socio del negocio que esta registrando, para este ejemplo el grupo utilizado es **Empleados**.

![Campo Grupo de Socio del Negocio](/assets/img/docs/master-data/mad-master-image1.png)

Imagen 9. Campo Grupo de Socio del Negocio

Seleccione en el campo **Regla de Pago** la forma de pago para las facturas, este campo indica de que forma serán pagadas las facturas al socio del negocio empleado.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-image2.png)

Imagen 10. Campo Regla de Pago

Introduzca en el campo **Dirección Web**, la dirección web para contactar al empleado, ya que es muy común que un empleado no posea una página web se puede ingresar una cuenta linkedin, bumeran, entre otros.

![Campo Dirección Web](/assets/img/docs/master-data/mad-master-image3.png)

Imagen 11. Campo Dirección Web

Seleccione en el campo **Genero**, el genero del socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el genero **Femenino**.

![Campo Genero](/assets/img/docs/master-data/mad-master-image4.png)

Imagen 12. Campo Genero

Seleccione en el campo **Grupo Sanguíneo**, el grupo sanguíneo del socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el grupo sanguíneo **B +**.

![Campo Sanguíneo](/assets/img/docs/master-data/mad-master-image5.png)

Imagen 13. Campo Grupo Sanguíneo

Seleccione en el campo **Cumpleaños**, la fecha de nacimiento del socio del negocio que esta registrando.

![Campo Cumpleaños](/assets/img/docs/master-data/mad-master-image6.png)

Imagen 14. Campo Cumpleaños

Ingrese en el campo **Lugar de Nacimiento (Localización)**, el lugar de nacimiento del socio del negocio que esta registrando, con ayuda del identificador.

![Campo Lugar de Nacimiento (Localización)](/assets/img/docs/master-data/mad-master-image7.png)

Imagen 15. Campo Lugar de Nacimiento (Localización)

Seleccione en el campo **País**, el país donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el país **Venezuela**.

![Campo País](/assets/img/docs/master-data/mad-master-image8.png)

Imagen 16. Campo País

Seleccione en el campo **Estado**, el estado donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el estado **Portuguesa**.

![Campo Estado](/assets/img/docs/master-data/mad-master-image9.png)

Imagen 17. Campo Estado

Seleccione en el campo **Ciudad**, la ciudad donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza la ciudad **Araure**.

![Campo Ciudad](/assets/img/docs/master-data/mad-master-image10.png)

Imagen 18. Campo Ciudad

Introduzca en el campo **Dirección 1**, la dirección detallada del lugar donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza la dirección **Av Dr Rafael Caldera**.

![Campo Dirección 1](/assets/img/docs/master-data/mad-master-image11.png)

Imagen 19. Campo Dirección 1

Introduzca en el campo **Dirección 2**, el nombre del lugar donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el nombre **Hospital J.M. Casal Ramos**.

![Campo Dirección 2](/assets/img/docs/master-data/mad-master-image12.png)

Imagen 20. Campo Dirección 2

Introduzca en el campo **Código Postal**, el código postal de la ciudad donde nació el socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el código **3301**.

![Campo Código Postal](/assets/img/docs/master-data/mad-master-image13.png)

Imagen 21. Campo Código Postal

Seleccione la opción **OK**, para cargar el registro al campo **Lugar de Nacimiento**.

![Opción OK](/assets/img/docs/master-data/mad-master-image14.png)

Imagen 22. Opción OK

Seleccione en el campo **Estado Marital**, el estado civil del socio del negocio que esta registrando. Para ejemplificar el registro se utiliza el estado marital **Casado**.

![Campo Estado Marital](/assets/img/docs/master-data/mad-master-image15.png)

Imagen 23. Campo Estado Marital

Seleccione el icono **Guardar Cambios** ubicado en la barra de herramientas para guardar los datos ingresados.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image16.png)

Imagen 24. Icono Guardar Cambios

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Información de Contrato

La información ingresada en esta pestaña puede variar al momento de la elaboración del contrato, dependiendo de la situación en la que se encuentre el socio del negocio que esta registrando. Un mismo socio del negocio puede tener un **Estado Marital** en un contrato y otro en su siguiente contrato, lo mismo sucede con cada uno de los grupos de campos que contiene la pestaña **Información de Contrato**.

Seleccione la pestaña **Información de Contrato** y proceda al llenado de los campos correspondientes.

![Pestaña Información de Contrato](/assets/img/docs/master-data/mad-master-image17.png)

Warning

La Información de Contrato se debe realizar con la Organización a la Pertenezca el empleado, por eso debe Cambiar La Organización de (\*) a la Organización Principal del Empleado.

Imagen 25. Pestaña Información de Contrato

Introduzca en el campo **Nombre**, los (2) dos nombres de la persona a quien va emitido el contrato.

![Campo Nombre](/assets/img/docs/master-data/mad-master-image18.png)

Imagen 26. Campo Nombre

Note

Se ingresa la información del representante legal del socio del negocio empleado, cuando este es menor de edad al momento de la elaboración del contrato de trabajo.

Introduzca en el campo **Nombre 2**, los (2) dos apellidos de la persona a quien va emitido el contrato.

![Campo Nombre 2](/assets/img/docs/master-data/mad-master-image19.png)

Imagen 27. Campo Nombre 2

Note

Se ingresa la información del representante legal del socio del negocio empleado, cuando este es menor de edad al momento de la elaboración del contrato de trabajo.

Introduzca en el campo **Código Nacional**, el código que identifica al socio del negocio empleado, este código es diferente a la cédula.

![Campo Código Nacional](/assets/img/docs/master-data/mad-master-image20.png)

Imagen 28. Campo Código Nacional

Warning

Se recomienda que al ingresar el valor al campo **Código Nacional** no se ingrese ningún prefijo, punto, guion o cualquier otro carácter.

Introduzca en el campo **Código Seguridad Social**, el código del seguro social de la persona a quien va emitido el contrato.

![Campo Código Seguridad Social](/assets/img/docs/master-data/mad-master-image21.png)

Imagen 29. Campo Código Seguridad Social

Note

El código de seguridad social se refiere al código del seguro social del empleado, es decir, la cédula del empleado.

Seleccione en el campo **Nacionalidad**, la nacionalidad de la persona a quien va emitido el contrato.

![Campo Nacionalidad](/assets/img/docs/master-data/mad-master-image22.png)

Imagen 30. Campo Nacionalidad

Introduzca en el campo **Marca de Identificación**, una descripción que identifica al socio del negocio empleado.

![Campo Marca de Identificación](/assets/img/docs/master-data/mad-master-image23.png)

Imagen 31. Campo Marca de Identificación

Introduzca en el campo **Estado Marital**, el estado marital de la persona a quien va emitido el contrato.

![Campo Estado Marital](/assets/img/docs/master-data/mad-master-image24.png)

Imagen 32. Campo Estado Marital

Introduzca en el campo **Nombre de Esposo(a)**, el nombre del esposo(a) de la persona a quien va emitido el contrato.

![Campo Nombre de Esposo(a)](/assets/img/docs/master-data/mad-master-image25.png)

Imagen 33. Campo Nombre de Esposo(a)

Seleccione en el campo **Fecha de Aniversario de Matrimonio**, la fecha en la que se realizó el matrimonio.

![Campo Fecha de Aniversario de Matrimonio](/assets/img/docs/master-data/mad-master-image26.png)

Imagen 34. Campo Fecha de Aniversario de Matrimonio

Seleccione en el campo **Fecha de Nacimiento de Esposo(a)**, la fecha en la que nació el esposo(a).

![Campo Fecha de Nacimiento de Esposo(a)](/assets/img/docs/master-data/mad-master-image27.png)

Imagen 35. Campo Fecha de Nacimiento de Esposo(a)

Introduzca en el campo **Código de Validación**, el código de marcaje del empleado en la empresa.

![Código de Validación](/assets/img/docs/master-data/mad-master-image28.png)

Imagen 36. Código de Validación

Seleccione en el campo **Nómina**, la nómina regular establecida para cada Empleado. Adempiere presenta las siguientes nóminas cuando el empleado posee un Salario Fijo (Nómina Semanal, Nómina Quincenal y Nómina Mensual), en cambio si el Empleado Posee un Salario Variable se encuentras disponibles (Nómina Semanal Mixta, Nómina Quincenal Mixta y Nómina Mensual Mixta)

![Campo Nómina](/assets/img/docs/master-data/mad-master-image29.png)

Imagen 37. Campo Nómina

Seleccione en el campo **Departamento Nómina**, el departamento al que pertenece el socio del negocio que esta resgistrando.

![Campo Departamento Nómina](/assets/img/docs/master-data/mad-master-image30.png)

Imagen 38. Campo Departamento Nómina

Seleccione en el campo **Puesto Nómina**, el puesto que tiene el socio del negocio que esta registrando.

![Campo Puesto Nómina](/assets/img/docs/master-data/mad-master-image31.png)

Imagen 39. Campo Puesto Nómina

Seleccione en el campo **Tipo de Trabajo**, el trabajo a desempeñar por el empleado en la empresa.

![Campo Tipo de Trabajo](/assets/img/docs/master-data/mad-master-image32.png)

Imagen 4. Campo Tipo de Trabajo

Introduzca en el campo **Fecha de Inicio**, la fecha de inicio del contrato que se esta creando.

![Campo Fecha de Inicio](/assets/img/docs/master-data/mad-master-image33.png)

Imagen 4. Campo Fecha de Inicio

Seleccione en el campo **Fecha Final**, la fecha de culminación del contrato del socio del negocio que esta registrando.

![Campo Fecha Final](/assets/img/docs/master-data/mad-master-image34.png)

Imagen 42. Campo Fecha Final

Warning

La fecha final del contrato depende del lapso de duración de contratos que las empresas tengan establecido como políticas de contratación.

Seleccione el checklist **Gerente**, para indicar que el socio del negocio que esta registrando es un gerente.

![Campo Gerente](/assets/img/docs/master-data/mad-master-image35.png)

Imagen 43. Campo Gerente

Seleccione en el campo **Grupo de Trabajo**, el grupo de trabajo al que pertenece el socio del negocio que esta registrando.

![Campo Grupo de Trabajo](/assets/img/docs/master-data/mad-master-image36.png)

Imagen 44. Campo Grupo de Trabajo

Seleccione en el campo **Tipo de Empleado**, el tipo de empleado al que pertenece el socio del negocio que esta registrando.

![Campon Tipo de Empleado](/assets/img/docs/master-data/mad-master-image37.png)

Imagen 45. Campon Tipo de Empleado

Seleccione en el campo **Grupo de Turno**, el grupo de turno al que pertenece el socio del negocio que esta registrando.

![Campo Grupo de Turno](/assets/img/docs/master-data/mad-master-image38.png)

Imagen 46. Campo Grupo de Turno

Seleccione en el campo **Estado del Empleado**, el estado en el que se encuentra el empleado durante la fecha de inicio y final del contrato.

![Campo Estado del Empleado](/assets/img/docs/master-data/mad-master-image39.png)

Imagen 47. Campo Estado del Empleado

Seleccione en el campo **Educación Laboral**, la educación laboral del socio del negocio que esta registrando.

![Campo Educación Laboral](/assets/img/docs/master-data/mad-master-image40.png)

Imagen 48. Campo Educación Laboral

Seleccione en el campo **Identificador de la Carrera**, la carrera del socio del negocio que esta registrando.

![Campo Identificador de la Carrera](/assets/img/docs/master-data/mad-master-image41.png)

Imagen 49. Campo Identificador de la Carrera

Seleccione en el campo **Grado**, el grado de instrucción del socio del negocio que esta registrando.

![Campo Grado](/assets/img/docs/master-data/mad-master-image42.png)

Imagen 50. Campo Grado

Seleccione en el campo **Designación**, la designación del socio del negocio que esta registrando.

![Campo Designación](/assets/img/docs/master-data/mad-master-image43.png)

Imagen 51. Campo Designación

Seleccione en el campo **Profesión**, la profesión del socio del negocio que esta registrando.

![Campo Profesión](/assets/img/docs/master-data/mad-master-image44.png)

Imagen 52. Campo Profesión

Seleccione en el campo **Grado Académico**, nivel de instrucción del socio del negocio que esta registrando.

![Campo Grado Académico](/assets/img/docs/master-data/mad-master-image45.png)

Imagen 53. Campo Grado Académico

Seleccione en el campo **Tipo de Habilidad**, el tipo de habilidad del socio del negocio que esta registrando.

![Campo Tipo de Habilidad](/assets/img/docs/master-data/mad-master-image46.png)

Imagen 54. Campo Tipo de Habilidad

Seleccione en el campo **Oferta de Empleo**, la oferta de empleo del socio del negocio que esta registrando.

![Campo Oferta de Empleo](/assets/img/docs/master-data/mad-master-image47.png)

Imagen 55. Campo Oferta de Empleo

Seleccione en el campo **Estructura Salarial**, la estructura salarial del socio del negocio que esta registrando.

![Campo Estructura Salarial](/assets/img/docs/master-data/mad-master-image48.png)

Imagen 56. Campo Estructura Salarial

Introduzca en el campo **Salario Diario**, el salario diario que le corresponde al socio del negocio que esta registrando.

![Campo Salario Diario](/assets/img/docs/master-data/mad-master-image49.png)

Imagen 57. Campo Salario Diario

Seleccione en el campo **Regla de Pago**, la regla de pago establecida para el socio del negocio que esta registrando.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-image50.png)

Imagen 58. Campo Regla de Pago

Seleccione en el campo **Rango Salarial**, el rango salarial del socio del negocio que esta registrando.

![Campo Rango Salarial](/assets/img/docs/master-data/mad-master-image51.png)

Imagen 59. Campo Rango Salarial

Introduzca en el campo **Salario Mensual**, el salario mensual del socio del negocio que esta registrando.

![Campo Salario Mensual](/assets/img/docs/master-data/mad-master-image52.png)

Imagen 60. Campo Salario Mensual

Seleccione en el campo **Organización de la Transacción**, la organización de la transacción.

![Campo Organización de la Transacción](/assets/img/docs/master-data/mad-master-image53.png)

Imagen 61. Campo Organización de la Transacción

Seleccione en el campo **Proyecto**, el proyecto financiero.

![Campo Proyecto](/assets/img/docs/master-data/mad-master-image54.png)

Imagen 62. Campo Proyecto

Seleccione en el campo **Región de Ventas**, la región de ventas asignada al socio del negocio empleado para cubrir las transacciones que la empresa posee en dicha región.

![Campo Región de Ventas](/assets/img/docs/master-data/mad-master-image55.png)

Imagen 63. Campo Región de Ventas

Seleccione la actividad en el campo **Actividad**.

![Campo Actividad](/assets/img/docs/master-data/mad-master-image56.png)

Imagen 64. Campo Actividad

Seleccione la campaña en el campo **Campaña**.

![Campo Campaña](/assets/img/docs/master-data/mad-master-image57.png)

Imagen 65. Campo Campaña

Seleccione en el campo **Imagen del Empleado**, la foto o imagen del socio del negocio empleado que esta registrando.

![Campo Imagen del Empleado](/assets/img/docs/master-data/mad-master-image58.png)

Imagen 66. Campo Imagen del Empleado

Introduzca en el campo **Dirección Web**, la dirección web de la foto o imagen del socio del negocio que esta registrando.

![Campo Dirección Web](/assets/img/docs/master-data/mad-master-image59.png)

Imagen 67. Campo Dirección Web

Seleccione en el campo **Imagen del Pulgar**, la imagen del pulgar del socio del negocio que esta registrando.

![Campo Imagen del Pulgar](/assets/img/docs/master-data/mad-master-image60.png)

Imagen 68. Campo Imagen del Pulgar

Seleccione en el campo **Logo**, el logo de la empresa.

![Logo](/assets/img/docs/master-data/mad-master-image61.png)

Imagen 69. Logo

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Atributo de Empleado

En una empresa los empleados poseen caracteristicas diferentes, Estas caracteristicas en Adempiere son llamadas Atributos. Un Atributo puede ser el Salario Diario de cada Empleado, El factor ARI, Una Deducción por un Préstamo, etc. Los mismos son definidos en la pestaña **Atributo de Empleado** para que sean aplicados a la nómina al momento de la ejecución. Los valores de estos atributos varian según el tipo de Concepto de Nómina. Cabe Destacar que un empleados puede poseer diferentes atributos.

Seleccione la pestaña **Atributo de Empleado** y proceda al llenado de los campos correspondientes.

![Pestaña Atributo de Empleado](/assets/img/docs/master-data/mad-master-image62.png)

Imagen 70. Pestaña Atributo de Empleado

Seleccione en el campo **Relación con Socios del Negocio**, el socio del negocio correspondiente.

![Campo Relación con Socios del Negocio](/assets/img/docs/master-data/mad-master-image63.png)

Imagen 71. Campo Relación con Socios del Negocio

Seleccione en el campo **Concepto Nómina**, el Concepto de Nómina con el cual le creará el atributo al empleado.

![Campo Concepto Nómina](/assets/img/docs/master-data/mad-master-image64.png)

Imagen 72. Campo Concepto Nómina

Warning

Al seleccionar cualquier valor en este campo podrá apreciar una serie de conceptos definidos por Adempiere y que se consideran atributos de cada empleado

Introduzca en el campo **Descripción**, una breve descripción del registro de concepto de nómina que esta realizando.

![Campo Descripción](/assets/img/docs/master-data/mad-master-image65.png)

Imagen 73. Campo Descripción

Introduzca en el campo **No. de Referencia**, el número de referencia del socio del negocio que esta registrando.

![Campo No. de Referencia](/assets/img/docs/master-data/mad-master-image66.png)

Imagen 74. Campo No. de Referencia

Introduzca en el campo **Monto**, el monto correspondiente al registro que esta realizando.

![Campo Monto](/assets/img/docs/master-data/mad-master-image67.png)

Imagen 75. Campo Monto

Introduzca en el campo **Valor Máximo**, el valor máximo para el registro que esta realizando.

![Campo Valor Máximo](/assets/img/docs/master-data/mad-master-image68.png)

Imagen 76. Campo Valor Máximo

Introduzca en el campo **Valor Mínimo**, el valor mínimo para el registro que esta realizando.

![Campo Valor Mínimo](/assets/img/docs/master-data/mad-master-image69.png)

Imagen 77. Campo Valor Mínimo

Seleccione en el campo **Válido Desde**, la fecha de inicio de aplicación del registro que esta realizando.

![Campo Válido Desde](/assets/img/docs/master-data/mad-master-image70.png)

Imagen 78. Campo Válido Desde

Seleccione en el campo **Válido Hasta**, la fecha final de aplicación del registro que se esta realizando.

![Campo Válido Hasta](/assets/img/docs/master-data/mad-master-image71.png)

Imagen 79. Campo Válido Hasta

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Días Libres de la Semana

Según lo establecido en el artículo 173 de la LOTTT, una jornada de trabajo no excederá de cinco días a la semana y el trabajador o trabajadora tendrá derecho a dos días de descanso, continuos y remunerados durante cada semana de labor.

En la pestaña **Días Libres de la Semana** se deben seleccionar los checklist de los días libres que le corresponden al socio del negocio empleado que esta registrando.

Seleccione la pestaña **Días Libres de la Semana** y proceda al llenado de los campos correspondientes.

![Pestaña Días Libres de la Semana](/assets/img/docs/master-data/mad-master-image72.png)

Imagen 80. Pestaña Días Libres de la Semana

Introduzca en el campo **Descripción**, una breve descripción de los días libres que le corresponden al socio del negocio que esta registrando. Este campo es opcional, sin embargo, sirve de referencia para el registro del socio del negocio empleado en la empresa cuando se utilizan turnos rotativos.

![Campo Descripción](/assets/img/docs/master-data/mad-master-image73.png)

Imagen 81. Campo Descripción

Seleccione los checklist correspondientes a los días libres del socio del negocio empleado que esta registrando. Para ejemplificar el registro se tildan los días **Sábado** y **Domingo**.

![Checklist Días Libres de la Semana](/assets/img/docs/master-data/mad-master-image74.png)

Imagen 82. Checklist Días Libres de la Semana

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Detalle de Pago

La pestaña **Detalle de Pago**, muestra de forma resumida la información de pago seleccionada para el socio del negocio empleado que esta registrando. Cualquier modificación que se realice en los campos de esta pestaña modificará el valor de esos campos en la pestaña **Información de Contrato** y viceversa.

Seleccione la pestaña **Detalle de Pago** y podrá apreciar la información de pago del socio del negocio empleado ingresada en la pestaña **Información de Contrato**.

![Pestaña Detalle de Pago](/assets/img/docs/master-data/mad-master-image75.png)

Imagen 83. Pestaña Detalle de Pago

Si es necesario modificar los campos que contiene la ventana, proceda a realizar el siguiente procedimiento.

Introduzca en el campo **Salario Mensual**, el salario mensual que le corresponde al socio del negocio empleado que esta registrando.

![Campo Salario Mensual](/assets/img/docs/master-data/mad-master-image76.png)

Imagen 84. Campo Salario Mensual

Introduzca en el campo **Salario Diario**, el salario diario que le corresponde al socio del negocio empleado que esta registrando.

![Campo Salario Diario](/assets/img/docs/master-data/mad-master-image77.png)

Imagen 85. Campo Salario Diario

Seleccione en el campo **Regla de Pago**, la forma de pago establecida para el socio del negocio empleado que esta registrando.

![Campo Regla de Pago](/assets/img/docs/master-data/mad-master-image78.png)

Imagen 86. Campo Regla de Pago

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

Regrese a la pestaña **Información de Contrato** para que pueda apreciar el comportamiento de los cambios realizados en la pestaña **Detalle de Pago**

![Pestaña Información de Contrato](/assets/img/docs/master-data/mad-master-image79.png)

Imagen 87. Pestaña Información de Contrato

### Pestaña Cuenta Bancaria

En esta pestaña se registran los datos bancarios del socio del negocio empleado, esta información es necesaria para cancelar al empleado las remuneraciones correspondientes por los servicios prestados a la empresa.

Seleccione la pestaña **Cuenta Bancaria** que se encuentra ubicada del lado izquierdo de la ventana socio del negocio y proceda al llenado de los campos correspondientes. Debe tildar la Opción que dice ACH para que aparezcan los campos que se describen a continuación. Recuerde que el llenado de está cuenta Bancaria es la Cuenta Nómina del empleado, utilizada para el pago de su nómina

![Pestaña Cuenta Bancaria](/assets/img/docs/master-data/mad-master-image80.png)

Imagen 88. Pestaña Cuenta Bancaria

En el campo **Banco** seleccione el banco a registrar con ayuda del ícono identificador (adjunto imagen).

![Campo Banco](/assets/img/docs/master-data/mad-master-image81.png)

Imagen 89. Campo Banco

A continuación podrá apreciar la siguiente ventana con los diferentes bancos, dónde debe seleccionar el banco que posee el socio del negocio empleado y la opción **OK** para cargar los datos al formulario.

![Opción OK](/assets/img/docs/master-data/mad-master-image82.png)

Imagen 90. Opción OK

Seleccione en el campo **Tipo de Cuenta Bancaria**, el tipo de cuenta bancaria correspondiente a la cuenta que esta registrando. Para ejemplificar el registro es utilizado el tipo de cuenta corriente.

![Campo Tipo de Cuenta Bancaria](/assets/img/docs/master-data/mad-master-image83.png)

Imagen 91. Campo Tipo de Cuenta Bancaria

Introduzca en el campo **No. De Cuenta**, el número de cuenta bancaria que esta registrando.

![Campo No. De Cuenta](/assets/img/docs/master-data/mad-master-image84.png)

Imagen 92. Campo No. De Cuenta

Introduzca el código de identificación, cédula o rif del titular de la cuenta bancaria que esta registrando, en el campo **No. Seguro Social**.

![Campo No. Seguro Social](/assets/img/docs/master-data/mad-master-image85.png)

Imagen 93. Campo No. Seguro Social

Warning

Se recomienda que al ingresar el valor al campo **No. Seguro Social** no se ingrese ningún prefijo, punto, guion o cualquier otro carácter.

Introduzca el nombre de referencia en el campo **Nombre**, en este campo va el nombre del titular de la cuenta bancaria que esta registrando.

![Campo Nombre Titular](/assets/img/docs/master-data/mad-master-image86.png)

Imagen 94. Campo Nombre Titular

Introduzca en el campo **Cta. Correo Electrónico**, el correo electrónico asociado a la cuenta bancaria que esta registrando.

![Campo Cta. Correo Electrónico](/assets/img/docs/master-data/mad-master-image87.png)

Imagen 95. Campo Cta. Correo Electrónico

Seleccione el icono **Guardar Cambios** en la barra de herramientas de ADempiere.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image88.png)

Imagen 96. Icono Guardar Cambios

Warning

Si el empleado posee otra cuenta bancaria para registrar, seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere en la pestaña **Cuenta Bancaria** y proceda al llenado de los campos explicados anteriormente.

### Pestaña Experiencia Laboral

La experiencia laboral de las personas forman su hoja de vida laboral, en cada empresa la persona adquiere conocimientos referente al entorno que las rodea y las actividades que en la misma se realizan. En la pestaña **Experiencia Laboral**, se registran las diferentes experiencias laborales que ha tenido el socio del negocio empleado que esta registrando.

Seleccione la pestaña **Experiencia Laboral** y proceda al llenado de los campos correspondientes.

![Pestaña Experiencia Laboral](/assets/img/docs/master-data/mad-master-image89.png)

Imagen 97. Pestaña Experiencia Laboral

Introduzca en el campo **Compañía**, el nombre de la empresa en la cual trabajo el socio del negocio empleado que esta registrando.

![Campo Compañía](/assets/img/docs/master-data/mad-master-image90.png)

Imagen 98. Campo Compañía

Seleccione en el campo **Desde Fecha**, la fecha en la cual comenzo a realizar sus actividades laborales en la empresa.

![Campo Desde Fecha](/assets/img/docs/master-data/mad-master-image91.png)

Imagen 99. Campo Desde Fecha

Seleccione en el campo **A Fecha**, la fecha en la cual termino de realizar sus actividades laborales en la empresa.

![Campo A Fecha](/assets/img/docs/master-data/mad-master-image92.png)

Imagen 100. Campo A Fecha

Introduzca en el campo **Designación (Enlazado)**,

![Campo Designación (Enlazado)](/assets/img/docs/master-data/mad-master-image93.png)

Imagen 101. Campo Designación (Enlazado)

Introduzca en el campo **Designación (Retirado)**,

![Campo Designación (Retirado)](/assets/img/docs/master-data/mad-master-image94.png)

Imagen 102. Campo Designación (Retirado)

Introduzca en el campo **Comentarios**, cualquier información relevante con respecto a la experiencia en la empresa.

![Campo Comentarios](/assets/img/docs/master-data/mad-master-image95.png)

Imagen 103. Campo Comentarios

Seleccione el icono **Guardar Cambios** en la barra de herramientas de ADempiere, para guardar los cambios realizados en la pestaña **Experiencia Laboral**.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image96.png)

Imagen 104. Icono Guardar Cambios

Warning

Si el empleado posee otras referencias laborales para registrar, seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere en la pestaña **Experiencia Laboral** y proceda al llenado de los campos explicados anteriormente.

### Pestaña Educación

La ley órganica de educación en su artículo 4 de educación y cultura, establece la educación como derecho humano y deber social fundamental orientada al desarrollo del potencial creativo de cada ser humano en condiciones históricamente determinadas, constituye el eje central en la creación, transmisión y reproducción de las diversas manifestaciones y valores culturales, invenciones, expresiones, representaciones y características propias para apreciar, asumir y transformar la realidad.

El Estado asume la educación como proceso esencial para promover, fortalecer y difundir los valores culturales de la venezolanidad.

Seleccione la pestaña **Educación** y proceda al llenado de los campos correspondientes.

![Pestaña Educación](/assets/img/docs/master-data/mad-master-image97.png)

Imagen 105. Pestaña Educación

Seleccione en el campo **Grado Académico**, del grado académico del socio del negocio empleado que esta registrando.

![Campo Grado Académico](/assets/img/docs/master-data/mad-master-image98.png)

Imagen 106. Campo Grado Académico

Introduzca en el campo **Colegio**, el nombre de la institución o colegio donde obtuvo el grado académico que esta registrando.

![Campo Colegio](/assets/img/docs/master-data/mad-master-image99.png)

Imagen 107. Campo Colegio

Introduzca en el campo **Dirección de Escuela / Colegio**, la dirección de la institución o colegio donde obtuvo el grado académico que esta registrando.

![Campo Dirección de Escuela / Colegio](/assets/img/docs/master-data/mad-master-image100.png)

Imagen 108. Campo Dirección de Escuela / Colegio

Introduzca en el campo **Duración**, el tiempo de duración para obtener el grado académico seleccionado.

![Campo Duración](/assets/img/docs/master-data/mad-master-image101.png)

Imagen 109. Campo Duración

Introduzca en el campo **Fecha de Finalización**, el año en el cual obtuvo el grado académico seleccionado.

![Campo Fecha de Finalización](/assets/img/docs/master-data/mad-master-image102.png)

Imagen 110. Campo Fecha de Finalización

Introduzca en el campo **Comentarios**, cualquier información relevante para el registro.

![Campo Comentarios](/assets/img/docs/master-data/mad-master-image103.png)

Imagen 111. Campo Comentarios

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Dependientes

En esta pestaña se registran los datos de cada uno de los familiares que dependen o no del socio del negocio empleado que esta registrando, esta información es utilizada por la empresa para asuntos de seguros, actividades recreativas y sociales, becas, donaciones, pagos, entre otros motivos.

Seleccione la pestaña **Dependientes** y proceda al llenado de los campos correspondientes.

![Pestaña Dependientes](/assets/img/docs/master-data/mad-master-image104.png)

Imagen 112. Pestaña Dependientes

Seleccione en el campo **Relación de Empleados**, la relación que tiene el dependiente con el socio del negocio empleado que esta registrando. Para ejemplificar el registro es utilizada la opción **Hijo (a)**.

![Campo Relación de Empleados](/assets/img/docs/master-data/mad-master-image105.png)

Imagen 113. Campo Relación de Empleados

Introduzca el código de identificación, cédula o rif del dependiente que esta registrando, en el campo **Código**.

![Campo Código](/assets/img/docs/master-data/mad-master-image106.png)

Imagen 114. Campo Código

Warning

Se recomienda que al ingresar el valor al campo **Código** no se ingrese ningún prefijo, punto, guion o cualquier otro carácter.

Introduzca en el campo **Nombre**, el nombre completo del dependiente que esta registrando.

![Campo Nombre Dependiente](/assets/img/docs/master-data/mad-master-image107.png)

Imagen 115. Campo Nombre Dependiente

Seleccione en el campo **Socio del Negocio Relacionado**, el socio del negocio empleado que esta registrando.

![Campo Socio del Negocio Relacionado](/assets/img/docs/master-data/mad-master-image108.png)

Imagen 116. Campo Socio del Negocio Relacionado

Warning

El campo **Socio del Negocio Relacionado**, es utilizado cuando se va a realizar algún pago a un dependiente del socio del negocio empleado que esta registrando. Se selecciona el socio del negocio empleado porque sus datos bancarios se encuentran registrados y validados.

Seleccione en el campo **Cumpleaños**, la fecha de nacimiento del dependiente que esta registrando.

![Campo Cumpleaños Dependiente](/assets/img/docs/master-data/mad-master-image109.png)

Imagen 117. Campo Cumpleaños Dependiente

Seleccione en el campo **Genero**, el genero del dependiente que esta registrando.

![Campo Genero](/assets/img/docs/master-data/mad-master-image110.png)

Imagen 118. Campo Genero

Seleccione en el campo **Profesión**, la profesión del dependiente que esta registrando. Esta opción no es obligatoria, debe ser seleccionada si el dependiente posee cualquiera de las opciones que contiene este campo.

![Campo Profesión](/assets/img/docs/master-data/mad-master-image111.png)

Imagen 119. Campo Profesión

Seleccione en el campo **Identificador de la Carrera**, la carrera del dependiente que esta registrando. Esta opción no es obligatoria, debe ser seleccionada si el dependiente posee cualquiera de las opciones que contiene este campo.

![Campo Identificador de la Carrera](/assets/img/docs/master-data/mad-master-image112.png)

Imagen 120. Campo Identificador de la Carrera

Seleccione en el campo **Grado Académico**, el grado académico del dependiente que esta registrando. Esta opción no es obligatoria, debe ser seleccionada si el dependiente posee cualquiera de las opciones que contiene este campo.

![Campo Grado Académico](/assets/img/docs/master-data/mad-master-image113.png)

Imagen 121. Campo Grado Académico

Seleccione en el campo **Grado**, el grado de instrucción del dependiente que esta registrando. Esta opción no es obligatoria, debe ser seleccionada si el dependiente posee cualquiera de las opciones que contiene este campo.

![Campo Grado Dependiente](/assets/img/docs/master-data/mad-master-image114.png)

Imagen 122. Campo Grado Dependiente

Tilde el checklist **Estudiante Activo**, si el dependiente que esta registrando se encuentra cursando estudios en la actualidad. Esta opción no es obligatoria, debe ser seleccionada solo si el dependiente se encuentra estudiando.

![Checklist Estudiante Activo](/assets/img/docs/master-data/mad-master-image115.png)

Imagen 123. Checklist Estudiante Activo

Tilde el checklist **Becado**, si el dependiente que esta registrando se encuentra becado. Esta opción no es obligatoria, debe ser seleccionada solo si el dependiente se encuentra becado.

![Checklist Becado](/assets/img/docs/master-data/mad-master-image116.png)

Imagen 124. Checklist Becado

Warning

Recuerde guardar el registro de los campos cada vez que se vaya a posicionar en una pestaña de la ventana empleado (todos).

### Pestaña Localización

La localización de un socio del negocio es muy importante para una empresa por diferentes motivos. Si el socio del negocio es un empleado de la misma, se deben registrar con exactitud los datos de la dirección por alguna situación fuera de control como una emergencia o otro suceso capaz de afectar el funcionamiento cotidiano de la empresa, así como también, el rendimiento del empleado en la misma.

Seleccione la pestaña **Localización** y proceda al llenado de los campos correspondientes.

![Pestaña Localización](/assets/img/docs/master-data/mad-master-image117.png)

Imagen 125. Pestaña Localización

Seleccione en el campo **Tipo de Contacto**, el tipo de contacto de la localización a registrar para el socio del negocio empleado. Para ejemplificar el registro es utilizada la opción **Primaria**.

![Campo Tipo de Contrato](/assets/img/docs/master-data/mad-master-image118.png)

Imagen 126. Campo Tipo de Contrato

Note

En esta pestaña el campo **Tipo de Contacto** posee dos opciones, la opción **Primaria** se utiliza para registrar la dirección principal del socio del negocio empleado que esta registrando, esta opción también es utilizada para registrar la dirección de residencia o hospedaje temporal del empleado cuando el mismo posee otra dirección fija. En el caso de la dirección fija, la misma es registrada con la opción **Emergencia**.

Introduzca en el campo **Persona de Contacto**, el nombre de la persona de contacto de la localización a registrar para el socio del negocio empleado.

![Campo Persona de Contacto](/assets/img/docs/master-data/mad-master-image119.png)

Imagen 127. Campo Persona de Contacto

Seleccione en el campo **Localización / Dirección** con ayuda del identificador, la localización referente al tipo de contacto seleccionado.

![Campo Localización / Dirección](/assets/img/docs/master-data/mad-master-image120.png)

Imagen 128. Campo Localización / Dirección

Seleccione en el campo **País**, el país donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo País Localización](/assets/img/docs/master-data/mad-master-image121.png)

Imagen 129. Campo País Localización

Seleccione en el campo **Estado**, el estado donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Estado Localización](/assets/img/docs/master-data/mad-master-image122.png)

Imagen 130. Campo Estado Localización

Seleccione en el campo **Ciudad**, la ciudad donde se encuentra domiciliado el socio del negocio que esta registrando.

![Campo Ciudad Localización](/assets/img/docs/master-data/mad-master-image123.png)

Imagen 131. Campo Ciudad Localización

Introduzca la dirección detallada del socio del negocio empleado en el campo **Dirección 1** y seleccione la opción **OK**.

![Campo Dirección 1 Localización](/assets/img/docs/master-data/mad-master-image124.png)

Imagen 132. Campo Dirección 1 Localización

Introduzca en el campo **Teléfono**, el número de teléfono local de la dirección seleccionada.

![Campo Teléfono](/assets/img/docs/master-data/mad-master-image125.png)

Imagen 133. Campo Teléfono

Introduzca en el campo **Teléfono Móvil**, el número de teléfono móvil de la persona de contacto.

![Campo Teléfono Móvil](/assets/img/docs/master-data/mad-master-image126.png)

Imagen 134. Campo Teléfono Móvil

Introduzca en el campo **Teléfono Móvil**, el número de teléfono móvil alternativo de la persona de contacto.

![Campo Teléfono Móvil Alternativo](/assets/img/docs/master-data/mad-master-image127.png)

Imagen 135. Campo Teléfono Móvil Alternativo

Introduzca en el campo **Fax**, el fax de la persona de contacto.

![Campo Fax Localización](/assets/img/docs/master-data/mad-master-image128.png)

Imagen 136. Campo Fax Localización

Introduzca en el campo **Email**, el email de la persona de contacto.

![Campo Email Localización](/assets/img/docs/master-data/mad-master-image129.png)

Imagen 137. Campo Email Localización

Seleccione el icono **Guardar Cambios** en la barra de herramientas de ADempiere, para guardar los cambios realizados en la pestaña **Localización**.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image130.png)

Imagen 138. Icono Guardar Cambios

Warning

Si el empleado posee otra dirección de localización para registrar, seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere en la pestaña **Localización** y proceda al llenado de los campos explicados anteriormente.

### Pestaña Detalle de Seguro

En esta pestaña se registra toda la información del socio del negocio empleado, con respecto a los diferentes seguros que pueda tener. En la misma se detallan los montos de cobertura, el saldo disponible del seguro y otros detalles de igual importancia.

Seleccione la pestaña **Detalle de Seguro** y proceda al llenado de los campos correspondientes.

![Pestaña Detalle de Seguro](/assets/img/docs/master-data/mad-master-image131.png)

Imagen 139. Pestaña Detalle de Seguro

Seleccione en el campo **Identificador del Tipo de Seguro**, el tipo de seguro que esta registrando al socio del negocio empleado. Para ejemplificar el registro es utilizado el tipo de seguro **Seguro de Salud o Enfermedad_SS-100005**.

![Campo Identificador del Tipo de Seguro](/assets/img/docs/master-data/mad-master-image132.png)

Imagen 140. Campo Identificador del Tipo de Seguro

Seleccione en el campo **Período Nómina**, el período de la nómina. Para ejemplificar el registro es utilizado el período de nómina **01/10/2019 Hacia 31/10/2019**.

![Campo Período Nómina](/assets/img/docs/master-data/mad-master-image133.png)

Imagen 141. Campo Período Nómina

Introduzca en el campo **Plan de Seguro**, el plan de seguro que esta registrando al socio del negocio empleado.

![Campo Plan de Seguro](/assets/img/docs/master-data/mad-master-image134.png)

Imagen 142. Campo Plan de Seguro

Introduzca en el campo **Referencia**, la referencia del seguro que esta registrando al socio del negocio empleado. Para ejemplificar el registro es utilizada la cédula del socio del negocio empleado.

![Campo Referencia](/assets/img/docs/master-data/mad-master-image135.png)

Imagen 143. Campo Referencia

Seleccione en el campo **Fecha Último Pago**, la fecha del último pago realizado al seguro.

![Campo Fecha Último Pago](/assets/img/docs/master-data/mad-master-image136.png)

Imagen 144. Campo Fecha Último Pago

Seleccione en el campo **Frecuencia de Pago**, la frecuencia establecida para pagar el seguro.

![Campo Frecuencia de Pago](/assets/img/docs/master-data/mad-master-image137.png)

Imagen 145. Campo Frecuencia de Pago

Seleccione en el campo **Última Fecha de Prima**, la última fecha de pago de la prima.

![Campo Última Fecha de Prima](/assets/img/docs/master-data/mad-master-image138.png)

Imagen 146. Campo Última Fecha de Prima

Introduzca en el campo **Nombre del Asegurador**, el nombre de la empresa que ofrece el seguro.

![Campo Nombre del Asegurador](/assets/img/docs/master-data/mad-master-image139.png)

Imagen 147. Campo Nombre del Asegurador

Seleccione en el campo **Fecha de Pago**, la proxima fecha establecida para pagar el seguro.

![Campo Fecha de Pago](/assets/img/docs/master-data/mad-master-image140.png)

Imagen 148. Campo Fecha de Pago

Introduzca en el campo **Descripción**, una breve descripción del registro del seguro.

![Campo Descripción](/assets/img/docs/master-data/mad-master-image141.png)

Imagen 149. Campo Descripción

Introduzca en el campo **Monto de Prima**, el monto establecido para pagar frecuentemente. El valor de este campo varía según el asegurador y el contrato de seguro.

![Campo Monto de Prima](/assets/img/docs/master-data/mad-master-image142.png)

Imagen 150. Campo Monto de Prima

Introduzca en el campo **Cantidad de Cobertura**, el monto total establecido por el seguro para la disposición del empleado cuando lo necesite. El valor de este campo varía según el asegurador y el contrato de seguro.

![Campo Cantidad de Cobertura](/assets/img/docs/master-data/mad-master-image143.png)

Imagen 151. Campo Cantidad de Cobertura

Introduzca en el campo **Cantidad Reclamada**, el monto total utilizado por el empleado.

![Campo Cantidad Reclamada](/assets/img/docs/master-data/mad-master-image144.png)

Imagen 152. Campo Cantidad Reclamada

Podrá apreciar en el campo **Saldo de Cuenta**, el monto total restante para la disposición del empleado cuando lo necesite. El valor de este campo es el resultante de la resta entre el valor del campo **Cantidad de Cobertura** y el valor del campo **Cantidad Reclamada**.

![Campo Saldo de Cuenta](/assets/img/docs/master-data/mad-master-image145.png)

Imagen 153. Campo Saldo de Cuenta

Seleccione el icono **Guardar Cambios** en la barra de herramientas de ADempiere para guardar el registro de la pestaña.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image146.png)

Imagen 154. Icono Guardar Cambios

Warning

Si el empleado posee otro seguro para registrar, seleccione el icono **Registro Nuevo** en la barra de herramientas de ADempiere en la pestaña **Detalle de Seguro** y proceda al llenado de los campos explicados anteriormente.

### Pestaña Detalle de Permiso

En esta pestaña se registran los diferentes permisos solicitados por el socio del negocio empleado, así como las suspenciones del mismo. En cada registro de permiso o suspención se detallan los días exactos para cada uno.

Seleccione la pestaña **Detalle de Permiso** y proceda al llenado de los campos correspondientes.

![Pestaña Detalle de Permiso](/assets/img/docs/master-data/mad-master-image147.png)

Imagen 155. Pestaña Detalle de Permiso

Seleccione en el campo **Tipo de Permiso**, el tipo de permiso solicitado por el socio del negocio empleado. Para ejemplificar el registro es utilizada la opción **Permiso por Paternidad_PPAT**.

![Campo Tipo de Permiso](/assets/img/docs/master-data/mad-master-image148.png)

Imagen 156. Campo Tipo de Permiso

Seleccione en el campo **Válido Desde**, la fecha de inicio del permiso solicitado por el socio del negocio empleado. Para ejemplificar el registro es utilizada la fecha **24/10/2019**.

![Campo Válido Desde](/assets/img/docs/master-data/mad-master-image149.png)

Imagen 157. Campo Válido Desde

Seleccione en el campo **Válido Hasta**, la fecha de culminación del permiso solicitado por el socio del negocio empleado. Para ejemplificar el registro es utilizada la fecha **06/11/2019**.

![Campo Válido Hasta](/assets/img/docs/master-data/mad-master-image150.png)

Imagen 158. Campo Válido Hasta

Podrá visualizar en el campo **Número de Permisos Asignados**, el número de permisos asignados al socio del negocio empleado.

![Campo Número de Permisos Asignados](/assets/img/docs/master-data/mad-master-image151.png)

Imagen 159. Campo Número de Permisos Asignados

Warning

Al seleccionar un tipo de permiso, el campo **Numero de Permisos Asignados** toma el valor **1** indicando que se esta asignando un permiso al empleado. Los campos **Total de Permisos** y **Balance**, toman automáticamente dicho valor.

De igual manera, los campos **Permisos Usados** y **Última Fecha de Ejecución** se definen como campos de sólo lectura y toman los valores desde la ventana **Solicitud del Permiso**.

Permisos Usados: Toma el valor **1** al completar el documento de la ventana **Solicitud del Permiso**.

**Última Fecha de Ejecución**: Toma el valor ingresado en el campo **Válido Desde**, de la ventana correspondiente al proceso **Crear Permisos**, ubicado en la pestaña **Detalle de Permiso**.

Seleccione el icono **Guardar Cambios**, para guardar el registro de la pestaña **Detalle de Permiso**.

![Icono Guardar Cambios](/assets/img/docs/master-data/mad-master-image152.png)

Imagen 160. Icono Guardar Cambios

Note

Este procedimiento realizado aplica solo para los Socios del Negocio que cumplan el rol de Empleado en una compañía.
