---
title: Fecha de Vacaciones Anteriores
category: Importación
star: 9
article: false
---

Representa a la última fecha de Inicio de Vacaciones de los empleados.

---

Registre los datos de la siguiente manera:

- Registre los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna

- Registre a todos los Empleados utilizando el proceso de Nómina de Vacaciones (NV)

- El Valor correspondiente para este concepto será de Tipo “FECHA”, por lo tanto debe ingresar los datos en la Columna (“Fecha de Servicio”) con el Formato Año/Mes/Día.

### Consideraciones

- **Formato de Texto**: Ésta columna es únicamente en formato texto y contiene el valor de la cédula de identidad del empleado sin espacios ni caracteres especiales. Los caracteres permitidos son **`V`**.
- **Formato de Fecha**:
  - El formato de fecha debe contener únicamente como separador guión (`-`). Ejemplo: **yyyy-mm-dd** se colocaría de la siguiente manera `2023-11-29`
  - No se permite el uso de símbolos, formatos u otro tipo como espacios en blanco.

- La estructura de datos es

|  |  |
| ------ | -------- |
|V00000000  | 2023-11-29 |

---

## Exportar desde diferentes plataformas

- [Haz click aquí](./export-files/)

## Cargar archivo de nómina

- Dirigirse a **Gestión del Sistema** > **Datos** > **Importar Datos** > **Cargador de Archivos**

![cargador-de-archivos](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/c492d93d-d7b3-463b-91a6-fe1f54ca1b20)

**Imagen 2. Cargador de Archivos**

- Seleccionar el archivo a cargar

![seleccionar-archivo1](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/788a5201-dab6-48b0-9304-c8cd52669c84)

**Imagen 3. Seleccionar el archivo**

- Se despliega la ventana para subir el archivo. Seleccionar **Choose file**

![seleccionar-archivo](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/23296f33-5698-45e2-a2f4-ed76f985ddb7)

**Imagen 4. Ventana para subir archivo**

- Seleccionar el archivo y **cargar archivo (upload)**

![image](https://github.com/erpcya/docs/assets/134967453/8d39e59c-cfa8-462c-adc2-228ecc2b854b)

**Imagen 5. Archivo a Importar**

- Seleccionar el formato que coincida con el archivo.
![seleccion-formato](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/cb1fbe3f-7ef9-44b2-873d-3c9178bd9769)

- Seleccionar próximo **registro**

![sig-registro](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/f9a058b6-2ff4-450b-81c7-d9f90bd9b85d)

- Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.

![verificar](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/54ebb58b-afb4-405f-88cd-7ac57a0bea5d)

- Luego de ser verificado y este todo los campos correctamente, seleccionar **OK** para cargar el archivo.

![ok](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/592ca84a-768d-4147-9ac5-c81c189957b0)

- Para verificar que el archivo se cargó correctamente ir a:

  - **Gestión del Sistema** > **Datos** > **Importar Datos** > **Importar Movimientos de Nómina** y buscar el archivo correspondiente.

![verificar-2](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/14a25ebe-b100-41ff-a6b5-35ae1fa80819)

![ok2](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/1a2d847a-880d-45a2-8846-7afee2464958)
