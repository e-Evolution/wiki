---
title: erpya-3.9.4-001-2.3.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.3.3"
  - "2024-08-24"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-08-24

## Novedades

### Comisiones Bancarias

Se agrega mejora para identificar ingresos provenientes de puntos de venta mercantil, ahora la búsqueda de los movimientos de ingreso lo hace sin importar dónde se encuentran ubicados los dígitos del pago dentro del extracto bancario.

### Flujo de Producción

Se ha añadido una nueva funcionalidad que permite gestionar un flujo completo, comenzando desde una orden de venta, pasando por la orden de producción, y finalizando con la producción. Esta característica, muy solicitada por nuestros clientes, facilita un control más eficiente de las órdenes de producción y su seguimiento diario.

#### ¿Qué tiene de nuevo la funcionalidad?

- Generación de Orden de Producción

Ya se puede tener una configuración en el tipo de documento de **Orden de Venta** para que se generen de manera automática las órdenes de producción decesarias dependiendo de los productos que tenga la orden de venta y si los mismos tienen listas de materiales válidas.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img1.png)

Esto es ideal para empresas que realizan maquila o que venden productos antes de su producción. La orden de producción se genera en estado de borrador, delegando la responsabilidad del proceso siguiente al encargado de producción.

- Explosión de Órdenes Multi-Niveles

En el proceso productivo siempre se tienen niveles de producción, esto permite tener productos en proceso y tambien definir listas de materiales a distintos niveles. Ejemplo:

- Bulto de Pasta (Nivel 1)
  - Mezcla para Pasta (Nivel 2)
  - Sémola de Trigo (Nivel 3)

Anteriormente, si alguien necesitaba generar una orden de producción para bultos de pasta, tenía que crear manualmente una orden para cada nivel: primero para el nivel 1, luego para el nivel 2 y así sucesivamente.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img2.png)

Ahora es posible definir un atributo en el tipo de documento que determina si una orden de producción puede generar automáticamente las órdenes de producción necesarias para satisfacer la demanda inicial. Además, se valida si parte de las cantidades requeridas están disponibles en el inventario, lo que permite generar la orden de producción total o parcialmente según sea necesario.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img3.png)

Además de los cambios realizados, ahora es posible ver la referencia a la orden de producción original, lo que permite una navegación más intuitiva. El número de documento de las órdenes hijas se compone del número de documento de la orden padre más el número de la orden hija, facilitando así la localización de cualquier orden de producción.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img4.png)

### Reporte de Explosión de LDM de Orden de Producción

Este reporte permite visualizar de manera integral los insumos necesarios para cumplir con una orden de producción. Está diseñado para manejar múltiples niveles y desglosa todos los LDM (Lista de Materiales) asociados a la orden de producción y sus niveles inferiores.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img5.png)

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img6.png)

### Reporte de Seguimiento de Producción

Este reporte permite verificar cómo se generan las producciones a partir de la orden inicial hasta completar la cantidad requerida. Ofrece un mejor control al planificador y es capaz de manejar múltiples niveles.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img7.png)

### Consideraciones Importantes

Para asegurar el correcto funcionamiento, es crucial que los productos con **Lista de Materiales** (LDM) cumplan con lo siguiente:

- **Validación de LDM**: La Lista de Materiales debe estar validada.
- **Fecha Válido Desde**: La fecha "Válido Desde" en la Lista de Materiales y en cada línea de la LDM debe ser menor o igual a la fecha del pedido o de la orden de producción.
- **Ubicación Asociada**: Los productos deben tener una ubicación asociada para determinar dónde se llevará a cabo la producción.

### Reporte de Lista de Selección

Se ha modificado el comportamiento del reporte para que no esté estrictamente condicionado a que la **Lista de Materiales** (LDM) tenga el mismo código que el producto. Ahora es posible generar una explosión simulada de **LDM** sin problemas, ofreciendo mayor flexibilidad en el uso del reporte.

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img8.png)

![2.3.3](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.3.3-img9.png)

## Contexto

- Esta actualización optimiza la gestión de ingresos por comisiones bancarias y automatiza procesos en el flujo de producción, especialmente en la generación y manejo de órdenes de producción multi-niveles.

## Detalle Técnico

- Mejora en la búsqueda de movimientos de ingresos para las comisiones bancarias.
- Implementación de atributos en documentos para la automatización de órdenes de producción.
- Ajustes en informes para manejar múltiples niveles en la explosión de listas de materiales.

## Enlaces relacionados

- [ERPYA v2.3.3](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.3.3)

- [Conciliaciones automáticas #630](https://github.com/erpcya/Control-PROSEIN/issues/630)
- [Algoritmo: Banco de Venezuela #682](https://github.com/erpcya/Control-PROSEIN/issues/682)
- [Algoritmo: Banco Provincial #683](https://github.com/erpcya/Control-PROSEIN/issues/683)
- [Algoritmo: Banco Nacional de Crédito #684](https://github.com/erpcya/Control-PROSEIN/issues/684)
- [Algoritmo: Banco del Tesoro #685](https://github.com/erpcya/Control-PROSEIN/issues/685)
- [Algoritmo: Banco del Caribe #686](https://github.com/erpcya/Control-PROSEIN/issues/686)
- [Algoritmo: Banesco #688](https://github.com/erpcya/Control-PROSEIN/issues/688)
- [Algoritmo: Banco del Mercantil #738](https://github.com/erpcya/Control-PROSEIN/issues/738)

## Requerimientos

- Se requieren procesos adicionales por aplicar
