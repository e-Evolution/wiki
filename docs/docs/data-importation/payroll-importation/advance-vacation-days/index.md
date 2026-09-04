---
title: Días Anticipo de Vacaciones
category: Importación
star: 9
article: false
---

Representa los días otorgados a los empleados por concepto de anticipo de sus vacaciones

---

Registre los datos de la siguiente manera:

- Registre los datos siguiendo estrictamente los formatos detallados en el **“Comentario”** del encabezado de cada columna

- Registre a todos los **Empleados** utilizando el proceso de **Nómina de Anticipo de Vacaciones  (NAV)**.

- El Valor correspondiente para este concepto será de Tipo **“CANTIDAD”**, por lo tanto registre los datos en la columna **"CANTIDAD"**

---

### Consideraciones

- **Formato de Texto**: Ésta columna es únicamente en formato texto y contiene el valor de la cédula de identidad del empleado sin espacios ni caracteres especiales. Los caracteres permitidos son `V`.
- **Formato de Número**:
  - El formato de número debe contener únicamente punto decimal (`.`) como separador de decimales. Ejemplo: **1.296,39** se colocaría de la siguiente manera `1296.39`
  - No se permite el uso de símbolos de moneda, formatos u otro tipo como espacios en blanco.

- La estructura de datos es

| Cédula    | Cantidad |
| ------    | -------- |
|V00000000  | 1234.56  |

- Como se muestra en la imagen:

![ejemplo](https://i.imgur.com/QBTwQFd.png)

---

## Exportar archivo desde diferentes plataformas

[Haz click aquí](./export-files/)

---

## Cargar archivo de nómina

- Dirigirse a **Gestión del Sistema** > **Datos** > **Importar Datos** > **Cargador de Archivos**

![cargador-de-archivos](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/c492d93d-d7b3-463b-91a6-fe1f54ca1b20)

**Imagen 2. Cargador de Archivos**

- Seleccionar el archivo a cargar

![seleccionar-archivo1](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/788a5201-dab6-48b0-9304-c8cd52669c84)

**Imagen 3. Seleccionar el archivo**

- Se despliega la ventana para subir el archivo. Seleccionar **Choose file**

![subir](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/ab71f9b8-8045-4113-a8ed-b3dc3877eec6)

**Imagen 4. Ventana para subir archivo**

- Seleccionar el archivo y **cargar archivo (upload)**

![select](https://github.com/erpcya/docs/assets/134967453/47abb326-c61d-4305-ab39-3137d402dbc7)

**Imagen 5. Archivo a Importar**

- Seleccionar el formato que coincida con el archivo.
![image](https://github.com/erpcya/docs/assets/134967453/5d3ddd31-a917-428d-87f2-8be003fc8786)

- Seleccionar próximo **registro**

![image](https://github.com/erpcya/docs/assets/134967453/d7e1a9f7-3b37-41b3-8b67-646df4f5a3fe)

- Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.

![image](https://github.com/erpcya/docs/assets/134967453/19b439cb-7a2a-41c7-b327-9473abf24eba)

- Luego de ser verificado y este todo los campos correctamente, seleccionar **OK** para cargar el archivo.

![carga-de-archivo](https://i.imgur.com/f0EXxwU.png)

- Para verificar que el archivo se cargó correctamente ir a:

  - **Gestión del Sistema** > **Datos** > **Importar Datos** > **Importar Movimientos de Nómina** y buscar el archivo correspondiente.

![seleccion-del-archivo](https://i.imgur.com/PXbq4fd.png)

![formato](https://i.imgur.com/j9EVt2E.png)
