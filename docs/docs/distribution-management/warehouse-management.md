---
title: Gestión de Almacén Avanzado
category: Documentation
star: 9
article: false
---

## ¿Qué es WMS?
Las siglas WMS (Warehouse Management System) responden a la gestión avanzada de almacenes, que deberá brindar un soporte eficiente a las operaciones realizadas en un almacén y ofrecer una amplia visión de todos los recursos de la organización.

Sin importar el nivel de inventario que cada compañía posea, el WMS resulta funcional debido a que mejora la organización de los procesos y el manejo de los inventarios en tiempo real. Es por ello, que hoy es importante la inversión en herramientas técnologicas de gestión de almacenes.

Su funcionalidad basicamente deber dar a conocer el lugar de almacenamiento de cada material, y mover de manera automática a el área de ventas los paquetes que deben ser generados con regla FIFO(First In, First Out) o en español **primero en entrar, primero en salir**.

## ¿Qué ofrece ADempiere?

ADempiere ofrece en su gestión de WMS(Warehouse Management Systems) o en español sistema para la gestión de almacenes una herramienta que apoya las operaciones logísticas del almacén de una empresa:

- Control de inventarios.
- Ubicación de las existencias.
- La distribución de un almacén.
- Coordinación y optimización de los movimientos con método FIFO (First In, First Out)

En general ADempiere satisfacen las necesidades de operaciones logísticas internas de la compañía.

Pero su principio básico es proveer la información para permitir el control eficiente del movimiento de materiales en el almacén. La secuencia operativa de un WMS incluye entre otras tareas:

- Diseño y estructura de almacén
- Seguimiento de Inventario
- Recepción y almacenamiento
- Lista de preparación de Pedido (Picking List)
- Envío a Puerta de Embarque

![image](https://github.com/erpcya/docs/assets/9578152/80054ea0-78c6-4706-b485-b4f4a3c7a177)


## ¿De qué servirá en tu Empresa?

1. Te da el control que necesitas en entradas, salidas y localización de productos en tus almacenes.
2. Más precisión del inventario y estado actual.
3. Optimización en la asignación de tareas de tus colaboradores.
4. Disminución de errores en las notas de entrega de tus clientes.
   
![image](https://github.com/erpcya/docs/assets/9578152/891618f6-428d-4aa9-ae2a-4c516f0e7c63)


##  Ejecución en ADempiere

Ahora bien, en Adempiere existen dos formas en las que se puede ejecutar este proceso, de forma automática bajo la siguiente estructura:

- Orden de Venta
- Generación de Orden de Salida Automática
- Generación de Orden de Distribución Automática
- Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque
- Reporte de Planificación de Embarque (Picking List)

También puede generarse de manera manual permitiendo así una agrupación de ordne de venta y planificación de orden de flete, bajo la siguiente estructura:

- Orden de Venta
- Orden de Salida
- Generación de Orden de Distribución Automática
- Generación de Movimiento de Inventario desde Almacén Origen a Puerta de Embarque
- Orden de Flete
- Reporte de Orden de Flete
- Reporte de Planificación de Embarque

###  Orden de Salida Manual

![image](https://github.com/erpcya/docs/assets/9578152/e3676964-a07c-4dc9-843b-a0627013b290)

1. Cree una [orden de Venta](https://docs.erpya.com/docs/sales-management/order.html) de manera habitual. 
2. Vaya a la sección gestión Avanzada de Almacén
3. Luego seleccione la opción Operación de Salida   
4. Luego seleccione la opción Generar Orden de Salida desde orden de Venta/Distribución   
5. En este formulario se procede a colocar los datos de filtro para la búsqueda
6. Procedemos a selecionar las órdenes de ventas que vamos a enviar a salida
7. Luego las lineas de las órdenes de ventas (Productos)
8. Finalmente seleccionamos la opción ok.

::: info Nota

En este punto de manera automática, se genera la orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.

:::

9. Finalmente vaya a la opción Gestión de Distribución->Gestión de Flete-> Generar Orden de Flete    
10. Seleccione la Orden de Salida previamente generada.
11. Seleccione la fecha en la que se realizará el envío de la mercancia.
12. De igual modo coloque el transporte, Vehículo, y conductor responsable de la carga.


###  Orden de Salida Automática

![image](https://github.com/erpcya/docs/assets/9578152/45d9943b-6e1e-4ab5-813e-453b53f48482)

1. Cree una [orden de Venta](https://docs.erpya.com/docs/sales-management/order.html) de manera habitual.

::: info Nota

En este punto de manera automática, se genera la orden de Salida,orden de distribución y movimiento de inventario para mover la mercancia a la puerta de embarque o almacén de venta.

:::

