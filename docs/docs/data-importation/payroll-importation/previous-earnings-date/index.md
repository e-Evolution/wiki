---
title: Fecha de Utilidades Anteriores
category: Importación
star: 9
article: false
---

Representa a la última fecha de Utilidades Anteriores de los Empleados.

---

Registre los datos de la siguiente manera:

- Registre los datos siguiendo estrictamente los formatos detallados en el **“Comentario”** del encabezado de cada columna

- Registre a todos los **Empleados** utilizando el proceso de **Nómina de Utilidades (NU)**

- El Valor correspondiente para este concepto será de Tipo **“FECHA”**,  debe ingresar los datos en la Fecha en la Columna **(“Fecha de Servicio”)** con el **Formato Año/Mes/Día**.

### Consideraciones

- **Formato de Texto**: Ésta columna es únicamente en formato texto y contiene el valor de la cédula de identidad del empleado sin espacios ni caracteres especiales. Los caracteres permitidos son **`V`**.
- **Formato de Fecha**:
  - El formato de fecha debe contener únicamente como separador guión (`-`). Ejemplo: **yyyy-mm-dd** se colocaría de la siguiente manera `2023-11-29`
  - No se permite el uso de símbolos, formatos u otro tipo como espacios en blanco.

- La estructura de datos es:

|  |  |
| ------ | -------- |
|V00000000  | 2023-11-29|

---

## Exportar desde diferentes plataformas

- [Haz click aquí](./export-files/)

---

## Cargar archivo de nómina

- Dirigirse a **Gestión del Sistema** > **Datos** > **Importar Datos** > **Cargador de Archivos**

![cargador-de-archivos](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/c492d93d-d7b3-463b-91a6-fe1f54ca1b20)

**Imagen 2. Cargador de Archivos**

- Seleccionar el archivo a cargar

![seleccionar-archivo1](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/788a5201-dab6-48b0-9304-c8cd52669c84)

**Imagen 3. Seleccionar el archivo**

- Se despliega la ventana para subir el archivo. Seleccionar **Choose file**

![seleccionar-archivo](https://i.imgur.com/frdDggt.png)

**Imagen 4. Ventana para subir archivo**

- Seleccionar el archivo y **cargar archivo (upload)**

![archivo](https://i.imgur.com/lZLxKv8.png)

**Imagen 5. Archivo a Importar**

- Seleccionar el formato que coincida con el archivo.
![seleccion-formato](https://i.imgur.com/XXjD7Ix.png)

- Seleccionar próximo **registro**

![sig-registro](https://i.imgur.com/a6h1ROn.png)

- Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.

![verificar](https://i.imgur.com/ngFwxs2.png)

- Luego de ser verificado y este todo los campos correctamente, seleccionar **OK** para cargar el archivo.

![ok](https://i.imgur.com/2fYirND.png)

- Para verificar que el archivo se cargó correctamente ir a:

  - **Gestión del Sistema** > **Datos** > **Importar Datos** > **Importar Movimientos de Nómina** y buscar el archivo correspondiente.

![verificar-2](https://i.imgur.com/yoK5vZi.png)

![ok2](https://i.imgur.com/93Bgb3C.png)
