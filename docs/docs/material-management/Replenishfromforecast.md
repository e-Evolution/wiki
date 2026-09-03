---
title: Reabastecimiento desde Pronóstico de Venta
category: Documentation
star: 9
article: false
---

Las estrategias de reabastecimiento son esenciales para optimizar los niveles de inventario y garantizar la satisfacción del cliente. ayudan a las empresas a evitar desabastecimientos, excesos de existencias y desperdicios, al tiempo que maximizan el rendimiento en la producción, ganancias y la eficiencia. Las estrategias de reabastecimiento pueden variar según el tipo de inventario, los patrones de demanda, los plazos de entrega y la distribución del almacén. 

No existe una solución única para el reabastecimiento, sino más bien una variedad de métodos y políticas que pueden adaptarse a diferentes situaciones.En esta oportunidad ADempiere le brindará una solición basada en el reabastecimiento de empresas manufactureras, esta estrategia consiste en estimar cantidades necesarias para dar cumplimiento a un pronóstico de ventas en un periodo determinado.

## Configuración Esencial

- **Almacén:** Es necesario que exista al menos un almacén con el check **Reabastecimiento desde Pronostico** en estado **verdadero**, dicho(s) almacén es instrumento de evaluación en cantidades en compromiso de recibo, existencia, demanda y cantidad a reabastecer para el reabastecimiento
  
- **Producto:** Es necesario que los productos que van a ser evaluados contenga al menos una lista de materiales, con los productos de tipo insumos/matería prima para su producción.

- **Lista de Materiales:** Es necesario que exista al menos una lista de materiales en el producto a producir(Producto Terminado o Semielaborado) con el check **Reabastecimiento desde Pronostico** en estado **verdadero**, dicho registro es utilizado para calcular las cantidades y productos necesarios en base a demanda.
  
- **Pronóstico de Ventas:** La base de cálculo para la demanda en la cantidad estimada para la venta de producto terminado, por lo que es necesario un pronóstico valido dentro del período de ejecución del plan de reabastecimiento.

## Formulación de Demanda

- **Cantidad en Existencia:** Cantidad existente de producto en almacenes con el check **Reabastecimiento desde Pronostico** en estado **verdadero**.

- **Cantidad en Demanda:** Cantidad necesaria para dar cumplimiento a un plan de reabastecimiento basado en pronóstico, esta es resultante de la siguiente fórmula:
  
          Variables:
    
          CNLDM= CANTIDAD NECESARIA(LDM)
          CNPT= CANTIDAD NECESARIA PARA PRODUCIR PT
          CEP= CANTIDAD ESTIMADA PARA VENTA(PRONÓSTICO)
  
                INSUMOS DE PRODUCTO SEMIELABORADO = CNLDM*CNPT*CEP
                INSUMOS PRODUCTO TERMINADO = CNLDM*CEP

- **Cantidad a Reabastecer:** Cantidad necesaria para dar cumplimiento a un plan de reabastecimiento basado en pronóstico, esta toma en cuenta las cantidades existentes en inventario, esta es resultante de la siguiente fórmula:
  
          Variables:
    
          CD= CANTIDAD EN DEMANDA
          CE= CANTIDAD EXISTENTE
  
                CANTIDAD A REABASTECER = CD-CE

  
## Ejecución de Plan de Reabastecimiento en Base a Pronóstico

- Vaya al menú **Gestión de Materiales**->**Reabastecimiento desde Pronóstico**
  
![image](https://github.com/erpcya/docs/assets/9578152/8c1d321a-5c03-44e2-9360-6ea3e8ffa493)

- Seleccione la opción **Procesar Reabastecimiento(Basado en Pronóstico)**
  
![image](https://github.com/erpcya/docs/assets/9578152/8fcd0068-2107-4972-8c60-fc6c1c1257d4)

- A continuación veremos la siguiente pantalla
  
![image](https://github.com/erpcya/docs/assets/9578152/22b21d38-41be-4e03-8f87-c737fe4fe385)

- Indique el **Calendario operacional**, se refiere a la definición del calendario de planificación productiva en una empresa.
  
![image](https://github.com/erpcya/docs/assets/9578152/f09a52f9-bf73-46f2-8910-7a723fc36192)

- Indique la **Definición de período**. se refiere a la forma en la que según la unidad (Trimestre, Mes, Año u otro) en la que puede ver expresado los períodos.
  
![image](https://github.com/erpcya/docs/assets/9578152/455ce076-d9aa-465a-a407-c630346af083)

- Seleccione el rango del **Período operacional**, dependerá de la definición, para este ejemplo por ser mensual podemos ver desde qué mes hasta qué mes se ejecutará el plan de reabastecimiento.
  
![image](https://github.com/erpcya/docs/assets/9578152/73034f78-a47e-4e0d-b667-f2e2278e0b29)

- Seleccione la opción **OK** para ejecutar el proceso, si el resultado es satisfactorio, se visualizará la siguiente pantalla.
  
![image](https://github.com/erpcya/docs/assets/9578152/46ffe594-0c35-46ec-b241-aeaf2acd8c1f)

### Resultado de la Ejecución

- Para ver el resultado vaya a la ventana **Plan de Reabastecimiento (Basado en Pronóstico)**.
  
![image](https://github.com/erpcya/docs/assets/9578152/d928a10a-0410-4f4f-bc17-38d29a56a4a6)

- Genera registros con los siguientes productos partes de la estimación:
  - **Materia Prima:** Perimite generar una Requisición o una Orden de Compras.
  - **Semielaborados:** Perimite generar una orden de producción.
  - **Producto Terminado:** Perimite generar una orden de producción.

## Generar Requisición a Partir del Plan de Reabastecimiento

- Vaya al menú **Gestión de Materiales**->**Reabastecimiento desde Pronóstico**

![image](https://github.com/erpcya/docs/assets/9578152/8c1d321a-5c03-44e2-9360-6ea3e8ffa493)

- Seleccione la opción **Reabastecimiento desde Pronóstico (Requisición a Compras)**

![image](https://github.com/erpcya/docs/assets/9578152/a0b176f7-9927-4148-b9a5-ca1f6ba5dce7)

- A continuación veremos la siguiente pantalla

![image](https://github.com/erpcya/docs/assets/9578152/5cc05828-8012-4567-a625-f3fc165de38f)

- Proceda a seleccionar el plan de reabastecimiento para generar la estimación del reabastecimiento.

![image](https://github.com/erpcya/docs/assets/9578152/3ff2317f-6a71-43e3-b6d6-55dfb252ec97)

- Seleccionar el producto en caso de querer filtrar el producto a reabastecer.

![image](https://github.com/erpcya/docs/assets/9578152/080299ba-8ead-4cf3-bc29-f60c877f1e28)

- Seleccionar **Comenzar la búsqueda**

![image](https://github.com/erpcya/docs/assets/9578152/44031afc-f67c-44d5-b923-364140e67a66)

- Seleccionar los productos a reabastecer.
- Seleccionar el tipo de documento para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/44110194-ed3f-404a-9102-d4a742408d5e)

- Seleccionar la fecha para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/7e157375-1440-4e25-b73c-2a275c2fad5e)

- Seleccionar la Lista de Precios para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/cc269959-f3b7-42bb-a574-b53a10637897)

- Seleccionar el almacén para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/6edd3ff2-1056-492c-83ed-8b2a4ec76c26)

- Seleccionar el proyecto para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/43165140-0492-451e-aed3-5b6e17933064)

- Seleccionar la Actividad para la requisición

![image](https://github.com/erpcya/docs/assets/9578152/fb059eb0-4307-424e-835f-74d3d9dbf6cc)


- Seleccionar la Organización para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/280e233c-1e88-4df5-bf12-3bf31c595f99)

- Seleccionar el centro de costo para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/d4fbfa83-fcf7-4578-af78-cc29d08a5b2c)

- Seleccionar la acción de documento para la requisición.

![image](https://github.com/erpcya/docs/assets/9578152/fa5b7933-0741-4994-bb3d-ea09dd60b015)

- Seleccionar la opción **OK**

![image](https://github.com/erpcya/docs/assets/9578152/af6e3a4b-0137-4dbd-9d58-787e36ca4c97)


### Resultado de la Ejecución

- Para ver el resultado vaya a la ventana **Requisiciones**.






