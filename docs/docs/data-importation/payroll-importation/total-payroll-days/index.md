---
title: Días Totales de la Nómina
category: Importación
star: 9
article: false
---

El Concepto Días Totales de la Nómina **(Días Hábiles Laborados)** se utiliza para calcular el promedio del **Salario en las Vacaciones**.  Cabe destacar que los datos de este formulario son necesarios los **3 Meses Anteriores** para los **Procesos de Nómina Semanal Mixta (NSM)**, **Nómina Quincenal Mixta (NQM)** o **Nómina Mensual Mixta (NMM)**.  Sí su proceso de nómina es **Nómina Semanal (NS)**, **Nómina Quincenal (NM)** o **Nómina Mensual (NM)**, debe suministrar los datos solamente del mes anterior al momento de la implementación del sistema.

---

### Registre los datos de la siguiente manera

- Registre los datos siguiendo estrictamente los formatos detallados en el **“Comentario”** del encabezado de cada columna

- Registre los Empleados agrupados por procesos de Nóminas. Es decir utilice una Hoja de cálculo para Agrupar los empleados por proceso de nómina. **Ej: Nómina Semanal Mixta (NSM), Nómina Quincenal Mixta (NQM) o Nómina Mensual Mixta (NMM).**

- Si el Empleado posee más de 3 meses trabajando en la **Empresa** debe cargar el Valor de los **Días Hábiles Laborados** durante el periodo de nómina a partir de los 3 Meses anteriores. (Nómina por Nómina debe cargar cuántos días Laboró) (Indique en el Nombre de la Pestaña la fecha correspondiente a esa carga de datos)

- Si el Empleado posee menos de 3 meses trabajando en la **Empresa** debe cargar el Valor de los **Días Hábiles Laborados** durante el periodo de nómina desde el ingreso del empleado. (Nómina por Nómina debe cargar cuántos días Laboró) (Indique en el Nombre de la Pestaña la fecha correspondiente a esa carga de datos)

- El Valor correspondiente para este concepto será de tipo **“Cantidad”**

---

### Consideraciones

- **Formato de Texto**: Ésta columna es únicamente en formato texto y contiene el valor de la cédula de identidad del empleado sin espacios ni caracteres especiales. Los caracteres permitidos son `V`.
- **Formato de Número**:
  - El formato de número debe contener únicamente punto decimal (`.`) como separador de decimales. Ejemplo: **1.296,39** se colocaría de la siguiente manera `1296.39`.
  - No se permite el uso de símbolos de moneda, formatos u otro tipo como espacios en blanco.

- La estructura de datos es

| Cédula    | Cantidad |
| ------    | -------- |
|V00000000  | 1234.56  |

- Como se muestra en la imagen:

![ejemplo](https://i.imgur.com/QBTwQFd.png)

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

![subir](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/ab71f9b8-8045-4113-a8ed-b3dc3877eec6)

**Imagen 4. Ventana para subir archivo**

- Seleccionar el archivo y **cargar archivo (upload)**

![dtn](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/6ccc8191-2f38-4b9f-ada9-d8694da9617d)

**Imagen 5. Archivo a Importar**

- Seleccionar el formato que coincida con el archivo.
![seleccionar-formato](https://github.com/JesusAlbujas/jupyter-compose-sudo/assets/134967453/934ea937-67fe-43d3-8aef-1b90903513c4)

- Seleccionar próximo **registro**

![prox-registro](https://i.imgur.com/jMXwD8J.png)

- Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.

![formato-verificacion](https://i.imgur.com/m9K8mtc.png)

- Luego de ser verificado y este todo los campos correctamente, seleccionar **OK** para cargar el archivo.

![carga-de-archivo](https://i.imgur.com/f0EXxwU.png)\


- Para verificar que el archivo se cargó correctamente ir a:

  - **Gestión del Sistema** > **Datos** > **Importar Datos** > **Importar Movimientos de Nómina** y buscar el archivo correspondiente.
 
![seleccion-del-archivo](https://i.imgur.com/Xpnt8gM.png)

![formato](https://i.imgur.com/j9EVt2E.png)