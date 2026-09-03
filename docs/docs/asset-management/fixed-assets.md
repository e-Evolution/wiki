---
title: Activos Fijos
category: Documentation
star: 9
article: false
---

El activo fijo se refiere a los bienes que poseen las empresas, estos pueden ser tangibles, intangibles e inversiones en compañías.

La vida util de los activos fijos se representa en la utilidad que tienen para la empresa. Estos pueden ser vendidos, luego del año fiscal, cuando ya no sean de utilidad para la misma o se encuentren obsoletos.

Las empresas aplican a los activos fijos un método de depreciación para reconocer el desgaste sufrido por el activo en un determinado tiempo. Dicho desgaste puede deberse al uso que se le haya dado al activo, el tiempo que tenga el activo y la obsolescencia del mismo.

En ADempiere la gestión de activos fijos favorece la labor contable, registrando mediante movimientos administrativos el valor de compra y vida útil de la activo fijo, en este sentido, permite realizar la depreciación o amortización contable, este proceso genera los asientos contables automáticamente.

Los activos son agrupados mediante el **Grupo de Activo Fijo**, con la finalidad de parametrizar mediante una categoría la contabilidad de dichos activos, al momento de registrar un movimiento de **Activo Fijo**.

- Grupo de Activos Fijos
  - Grupo de Activos Fijos

## Grupo de Activos Fijos

El grupo de activo permite calificar a los productos como activos y definir su forma de contabilizar asociando el grupo a la categoria de productos, en este sentido podría tener varias categorias de productos asociadas a un grupo. Esto implicaría de igual manera, que al crear un producto cuya categoría esté asociado a un grupo de activo, este evento generará una transacción de activo, en este caso una adición de activo, que a su vez genera un hecho contable en la cuenta contable correspondiente.

## Grupo de Activos Fijos

Ubique y seleccione en el menú de ADempiere, la carpeta **Gestión de Activos**, luego seleccione la ventana **Grupo de Activo Fijo**.

![Campo](/assets/img/docs/asset-management/asm-asset-image19.png)

Imagen 1. Menú de ADempiere

Podrá visualizar la ventana **Grupo de Activo**, con el registro de los grupos de activos que la empresa posee en ADempiere.

![Campo](/assets/img/docs/asset-management/asm-asset-image20.png)

Imagen 2. Ventana Principal Grupo de Activo

Seleccione el icono **Registro Nuevo**, ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/asset-management/asm-asset-image21.png)

Imagen 3. Icono Registro Nuevo

Seleccione en el campo **Organización**, la organización para la cual esta realizando el registro de grupo de activo fijo.

![Campo](/assets/img/docs/asset-management/asm-asset-image22.png)

Imagen 4. Campo Organización

Introduzca en el campo **Nombre**, el nombre correspondiente al grupo de activo fijo que esta registrando. Para ejemplificar el registro es utilizado el grupo de activo fijo **Mobiliario**.

![Campo](/assets/img/docs/asset-management/asm-asset-image23.png)

Imagen 5. Campo Nombre

Introduzca en el campo **Descripción**, una breve descripción referente al grupo de activo fijo que esta registrando.

![Campo](/assets/img/docs/asset-management/asm-asset-image24.png)

Imagen 6. Campo Descripción

Tilde el checklist **Propio**, si el grupo de activo fijo que esta registrando pertenece a la organización seleccionada.

![Campo](/assets/img/docs/asset-management/asm-asset-image25.png)

Imagen 7. Checklist Propio

Tilde el checklist **Depreciar** para que ADempiere realice la depreciación del grupo de activos fijos que esta registrando.

![Campo](/assets/img/docs/asset-management/asm-asset-image26.png)

Imagen 8. Checklist Depreciar

Para guardar el registro de los campos, seleccione el icono **Guardar Cambios **ubicado en la barra de herramientas de ADempiere.

![Campo](/assets/img/docs/asset-management/asm-asset-image27.png)

Imagen 9. Icono Guardar Cambios

## Grupo Cuenta

Seleccione la pestaña **Grupo Cuenta** y proceda al llenado de los campos correspondientes.

![Campo](/assets/img/docs/asset-management/asm-asset-image28.png)

Imagen 10. Grupo Cuenta

Seleccione en el campo **Organización**, la organización para la cual esta realizando la configuración contable del grupo de activo fijo.

![Campo](/assets/img/docs/asset-management/asm-asset-image29.png)

Imagen 11. Campo Organización de la Pestaña

Note

ADempiere permite que una compañía que posee más de una organización, registre la configuración contable del grupo de activo fijo por organización. El registro podría ser:

Grupo Activo Fijo **Mobiliario** de la Empresa Estándar con Organización (\*):

Configuaración contable del grupo **Mobiliario**, con organización Estándar.

Configuración contable del grupo **Mobiliario**, con organización Org1.

Seleccione en el campo **Esquema Contable**, el esquema a utilizar para la configuración contable del grupo activo.

![Campo](/assets/img/docs/asset-management/asm-asset-image30.png)

Imagen 12. Esquema Contable

Seleccione en el campo **Tipo de Aplicación**, generalmente actual, ver el documento **Tipo de Aplicación**, para tener una visión más clara.

![Campo](/assets/img/docs/asset-management/asm-asset-image31.png)

Imagen 13. Campo Tipo de Aplicación

Seleccione en el campo **Tipo de Depreciación** Línea recta, este tipo de depreciación supone una cuota constante e invariable en función de la vida útil del activo objeto de depreciación.,

![Campo](/assets/img/docs/asset-management/asm-asset-image32.png)

Imagen 14. Campo Tipo de Depreciación

Seleccione en el campo **Depreciación (Fiscal)** Línea recta, este tipo de depreciación supone una cuota constante e invariable en función de la vida útil del activo objeto de depreciación.

![Campo](/assets/img/docs/asset-management/asm-asset-image33.png)

Imagen 15. Campo Depreciación (Fiscal)

Introduzca en el campo **Vida Útil - Años**, la cantidad de años de vida útil del grupo de activos fijos que esta registrando.

![Campo](/assets/img/docs/asset-management/asm-asset-image34.png)

Imagen 16. Campo Vida Útil - Años

Note

Al ingresar un valor en el campo **Vida Útil - Años**, ADempiere refleja en los campos **Vida Útil - Años (Fiscal)**, **Vida Útil - Meses** y **Vida Útil - Meses (Fiscal)**, el equivalente al campo correspondiente.

Seleccione en el campo **Cuenta Costo Activo**, se refiere a la cuenta de activo del plan de cuentas en la que desea reflejar el costo del activo fijo.

![Campo](/assets/img/docs/asset-management/asm-asset-image35.png)

Imagen 17. Campo Cuenta Costo Activo

Seleccione en el campo **Depreciación Acumulada**, se refiere a la cuenta compensatoria que reduce o disminuye la cuenta activos fijos.

![Campo](/assets/img/docs/asset-management/asm-asset-image36.png)

Imagen 18. Campo Depreciación Acumulada

Seleccione en el campo **Cuenta Gastos Depreciación**, se refiere a una cuenta de gasto por concepto de desgaste resultante del uso o el deterioro físico del activo fijo.

![Campo](/assets/img/docs/asset-management/asm-asset-image37.png)

Imagen 19. Campo Cuenta Gastos Depreciación

Seleccione en el campo **Ingresos por Disposición**, se refiere a la cuenta de ingreso por concepto de disposición del activo o venta del mismo.

![Campo](/assets/img/docs/asset-management/asm-asset-image38.png)

Imagen 20. Campo Ingresos por Disposición

Seleccione en el campo **Perdidas por Disposición**, se refiere a la cuenta de gasto o perdida por concepto de disposición del activo o dar de baja.

![Campo](/assets/img/docs/asset-management/asm-asset-image39.png)

Imagen 21. Campo Perdidas por Disposición

## Categoría de Producto

Ubique o cree de manera regular la categoría de producto a la que desea asociar el grupo de activo fijo, de esta manera podrá con los productos bajo esta categoría realizar operaciones de activo fijo, y seleccione en el campo **Grupo de Activo Fijos**, el grupo de activo previamente configurado.

Note

Al ingresar un valor en el campo **Grupo de Activo Fijos**, ADempiere generará un activo fijo al crear una recepción de un producto asociado a esta categoría.

## Producto

Ubique o cree de manera regular el producto al que desea asociar la categoría previamente configurado.
