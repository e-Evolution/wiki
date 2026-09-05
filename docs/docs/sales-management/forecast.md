---
title: Pronostico de Ventas
category: Documentation
star: 9
article: false
---

Para cargar un pronóstico de ventas en ADempiere, se puede cargar importando el archivo de pronóstico o simplemente agregando las líneas manualmente. 

Para el primer caso se quiere que el archivo a importar cuente con las siguientes columnas en el orden que se indica a continuación:

::: note

  Al momento de descargar el archivo excel en formato `.tsv` se debe descargar sin la fila del encabezado (primera fila).

:::

ID Pronóstico | Código Organización | Código Producto | Código Almacén | Cantidad | Fecha Prometida | Nombre de Vendedor
-- | -- | -- | -- | -- | -- | --
1000011 | Org-Adm | PT1000002 | A0001 | 1548 | 15/05/2024 |  
1000011 | Org-Adm | PT1000003 | A0001 | 2000 | 15/05/2024 |  
1000011 | Org-Adm | PT1000004 | A0001 | 2400 | 15/05/2024 |  
1000011 | Org-Adm | PT1000005 | A0001 | 250 | 15/05/2024 |  
1000011 | Org-Adm | PT1000006 | A0001 | 2548 | 15/05/2024 |  
1000011 | Org-Adm | PT1000007 | A0001 | 5000 | 15/05/2024 |  
1000011 | Org-Adm | PT1000008 | A0001 | 4500 | 15/05/2024 |  
1000011 | Org-Adm | PT1100001 | A0001 | 6700 | 15/05/2024 |  
1000011 | Org-Adm | PT1100002 | A0001 | 4500 | 15/05/2024 |  
1000011 | Org-Adm | PT1100003 | A0001 | 2000 | 15/05/2024 |  
1000011 | Org-Adm | PT1100004 | A0001 | 1578 | 15/05/2024 |  

Para cargar el pronóstico con el segundo caso, puede realizar lo indicado en el procedimiento [Crear Pronóstico de Ventas Manual](https://docs.adeos.business/docs/sales-management/forecast.html#crear-pronostico-de-ventas-manual)

## Crear Encabezado o Pestaña Principal de la Ventana Pronóstico de Ventas

- Seleccione en el menú de ADempiere la carpeta **Gestión de Manufactura**, luego la carpeta **Gestión de Pronóstico** y finalmente la ventana **Pronóstico de Venta**.

  ![image](https://github.com/erpcya/docs/assets/52334433/8a5f4d1d-8cad-4a5c-ad4d-cf09dc526243)

  Imagen 1. Menú de ADempiere
  
- Podrá visualizar la ventana **Pronóstico de Venta**.
  
  ![image](https://github.com/erpcya/docs/assets/52334433/73b54e98-528c-47e0-821b-fb661d62d324)

  Imagen 2. Ventana Pronóstico de Venta
  
- Seleccione el icono **Registro Nuevo**, para crear el encabezado del pronóstico.

  ![image](https://github.com/erpcya/docs/assets/52334433/72403fbc-549f-476d-a390-87619c81a8b6)

  Imagen 3. Icono Registro Nuevo

- Seleccione en el campo **Organización**, la organización para la cual esta realizando el pronóstico de venta.

  ![image](https://github.com/erpcya/docs/assets/52334433/92cfad81-18ed-492b-899e-f905db1c9eaa)
  
  Imagen 4. Campo Organización
  
- Introduzca en el campo **Nombre**, el nombre del pronóstico de ventas que se encuentra realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/8dc7993a-6963-49d2-848d-e12e309701b0)
  
  Imagen 5. Campo Nombre

- Introduzca en el campo **Descripción**, una descripción específica del pronóstico de ventas que se encuentra realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/ab5ee1c2-89aa-4666-b3e5-ec5c61525229)

  Imagen 6. Campo Descripción

- Introduzca en el campo **Ayuda**, alguna información que sirva de ayuda para justificar el pronóstico de ventas que se encuentra realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/233dcf76-971d-4672-b889-7e5dc4b5d9ad)

  Imagen 7. Campo Ayuda

- Seleccione en el campo **Lista de Precios**, la lista de precios con la que requiera realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/3044c1d0-7144-463d-b4a1-62af2fb103b7)

  Imagen 8. Campo Lista de Precios

- Seleccione en el campo **Campaña**, la campaña con la que requiere realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/312cf1ea-d5d3-471c-adcc-e883b583c5df)

  Imagen 9. Campo Campaña

- Seleccione en el campo **Calendario Operacional**, el calendario operacional con el que requiere realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/b9b1fb1d-27ad-4c86-9e5d-086704b0bffd)

  Imagen 10. Campo Calendario Operacional

- Seleccione en el campo **Definición Periodo**, el periodo con el que requiere realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/004e531c-b9c0-4629-a171-6b7c8736cd7f)
  
  Imagen 11. Campo Definición Periodo

- Seleccione en el campo **Proyecto**, el proyecto con el cual requiere realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/66cac70d-f499-4a53-a52d-ec31e80c28ef)

  Imagen 12. Campo Proyecto

- Seleccione en el campo **Fase del Proyecto**, la fase del proyecto con la cual requiere realizar el registro.

  ![image](https://github.com/erpcya/docs/assets/52334433/0677af1b-5756-4f55-b1eb-30c95578e649)

  Imagen 13. Campo Fase del Proyecto

- Seleccione el icono **Guardar Cambios**, para guardar el registro del encabezado o pestaña principal de la ventana.

  ![image](https://github.com/erpcya/docs/assets/52334433/37dccdc7-6c22-4e9c-8464-c193471771b0)

  Imagen 14. Icono Guardar Cambios

- Seleccione en la parte inferior derecha de la ventana para abrir la ventana **Información de Registro**.

  ![image](https://github.com/erpcya/docs/assets/52334433/af6a22cd-1c58-47ef-a409-4d2f9e82a7c4)

  Imagen 15. Ventana Información de Registro

- Seleccione el ID del registro creado y copielo (Ctrl+C)

  ![image](https://github.com/erpcya/docs/assets/52334433/21d9c53e-f0c0-4804-93fc-5197589bccd0)

  Imagen 16. ID del Registro

- En el archivo excel de pronóstico de ventas que requiere importar, debe pegar (Ctrl+V) el ID copiado en la primera columna.

  ![image](https://github.com/erpcya/docs/assets/52334433/5f5b2961-7c8a-42e1-874f-e0b735ba725c)

  Imagen 17. ID del Pronóstico en el Excel

## Importar Pronóstico de Ventas

### Cargar Archivo al Importador

- Seleccione la carpeta **Gestión del Sistema**, luego seleccione la carpeta **Datos**, finalmente seleccione la carpeta **Importar Datos** y por último la ventana **Cargador de Archivo**.

  ![image](https://github.com/erpcya/docs/assets/52334433/b9eb9e07-6fa0-4f18-bc4f-02e5bceb1e3f)

  Imagen 1. Menú de ADempiere

- Cambie el valor de la códificación **UFT-8** en el campo **Códificación del Archivo**, por el valor **ISO-8859-9**.

  ![image](https://github.com/erpcya/docs/assets/52334433/999f5496-60a6-4c60-80d3-43075c685f99)

  Imagen 2. Codificación del Archivo

- Seleccione el botón `<Seleccionar Archivos a Cargar>` y luego seleccione el archivo del pronostico previamente descargado en formato `.tsv`. Finalmente seleccione el botón Cargar Archivo (Upload).

  ![image](https://github.com/erpcya/docs/assets/52334433/f65357eb-4743-45a0-9362-9e2781d28622)

  Imagen 3. Botón Seleccionar Archivos a Cargar

- Seleccione el formato de importación **Pronóstico de Ventas**

  ![image](https://github.com/erpcya/docs/assets/52334433/2c399f9d-35c2-4d1f-8462-c0c2cebd49f9)

  Imagen 4. Formato de Importación Pronóstico de Ventas

- Puede verificar si la información fue cargada correctamente al importador seleccionando las flechas direccionales de derecha e izquierda. 

  ![image](https://github.com/erpcya/docs/assets/52334433/21d31b24-7923-468d-8dc9-6ec95b85eb54)

  Imagen 5. Flechas Direccionales de Derecha e Izquierda

- Al seleccionar la flecha direccional derecha puede ver como se muestra en los campos que estan en la parte inferior de la ventana, la información cargada.

  ![image](https://github.com/erpcya/docs/assets/52334433/da8f41d0-f8f5-4a7e-b96a-77838dc7d779)

  Imagen 6. Verificación de Información en el Cargador

- Para ejecutar el porceso debe seleccionar la opción **OK**, ADempiere le mostrara la siguiente ventana indicando las filas del archivo cargadas al importador

  ![image](https://github.com/erpcya/docs/assets/52334433/00138c3e-d540-403c-9c88-7b39073fbd1d)

  Imagen 7. Confirmación de Carga de Pronóstico

### Importar Pronóstico de Ventas Cargado

- Seleccione en el menú de ADempiere la carpeta **Gestión del Sistema**, luego seleccione la carpeta **Datos**, por último seleccione la carpeta **Importar Datos** y la ventana **Importar Pronóstico**.

  ![image](https://github.com/erpcya/docs/assets/52334433/8a5f4d1d-8cad-4a5c-ad4d-cf09dc526243)

  Imagen 1. Menú de ADempiere

- Verifique la información y seleccione el botón **Importar Pronóstico**.

  ![image](https://github.com/erpcya/docs/assets/52334433/59c9927c-3f12-47f0-b8e5-152f1f71796b)
  
  Imagen 2. Botón Importar Pronóstico

- ADempiere le muestra la siguiente ventana, donde debe seleccionar la opción **OK** para ejecutar el proceso.

  ![image](https://github.com/erpcya/docs/assets/52334433/81b51eec-555f-4da6-8027-ae52482c21d8)

  Imagen 3. Opción OK
  
## Crear Pronóstico de Ventas Manual

- Crear el encabezado el pronóstico siguiendo el procedimiento explicado en [Crear Encabezado o Pestaña Principal de la Ventana Pronóstico de Ventas](https://docs.adeos.business/docs/sales-management/forecast.html#crear-encabezado-o-pestana-principal-de-la-ventana-pronostico-de-ventas)

  ![image](https://github.com/erpcya/docs/assets/52334433/eac28ced-45e5-4756-8c3f-e194e5332311)

  Imagen 1. Encabezado de Pronostico Creado

- Seleccione la pestaña **Línea del pronóstico** para crear las líneas de manera manual.

  ![image](https://github.com/erpcya/docs/assets/52334433/d025986a-9367-4830-8dc3-93ab8e3452d1)

  Imagen 2. Pestaña Línea del Pronóstico

- Seleccione en el campo **Almacén**, el almacén que requiere asociar al pronóstico de ventas que esta realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/6b3a6b75-7ce6-402e-ab6a-389d8607ada1)

  Imagen 3. Campo Almacén

- Seleccione en el campo **Producto**, el producto que requiere asociar al pronóstico de ventas que esta realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/f6ec3ccd-14a3-4341-9de0-8b5c9773de7a)

  Imagen 4. Campo Producto

- Introduzca en el campo **Cantidad**, la cantidad del producto que requiere asociar al pronóstico de ventas que esta realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/0d9b2694-9677-43d4-8b31-8543da10e113)

  Imagen 5. Campo Cantidad

- Seleccione en el campo **Periodo Operacional**, el periodo al cual requiere asociar el pronóstico de ventas que esta realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/da1ee4da-9ab7-439a-9e28-2bc1332f1dca)

  Image 6. Campo Periodo Peracional

- Seleccione en el campo **Fecha Prometica**, la fecha a la cual requiere cumplir con el pronóstico que esta realizando.

  ![image](https://github.com/erpcya/docs/assets/52334433/2f65b174-d1e7-4a11-b90f-7a3a46bc02b0)

  Imagen 7. Campo Fecha Prometida

- Seleccione el icono **Guardar Cambios**, para guardar el registro de la línea.

  ![image](https://github.com/erpcya/docs/assets/52334433/bc91d3a6-4a0a-4265-8e51-1eb22ef256b4)

  Imagen 8. Icono Guardar Cambios

::: note

  Para registrar otra línea dentro del mismo pronóstico, debe seleccionar el icono **Registro Nuevo** y repetir el proceso de carga de datos manual.
  
:::
