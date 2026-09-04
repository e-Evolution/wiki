---
title: Salario Normal
category: Importación
star: 9
article: false
---

Se utiliza para promediar el salario normal de los empleados, Cabe destacar que los datos de este formulario son necesarios para los Procesos de Nómina Semanal Mixta (NSM), Nómina Quincenal Mixta (NQM) o Nómina Mensual Mixta (NMM).  Sí su proceso de nómina es Nómina Semanal (NS), Nómina Quincenal (NM) o Nómina Mensual (NM), debe suministrar los datos solamente del mes anterior al momento de la implementación del sistema

- Registre de los datos siguiendo estrictamente los formatos detallados en el “Comentario” del encabezado de cada columna

- Registre los Empleados agrupados por procesos de Nóminas. Es decir utilice una Hoja de cálculo para Agrupar los empleados por proceso de nómina. Ej: Nómina Semanal Mixta (NSM), Nómina Quincenal Mixta (NQM) o Nómina Mensual Mixta (NMM), Nómina Semanal (NS), Nómina Quincenal (NQ), Nómina Mensual (NM).

- Si el Empleado Posee más de 3 meses trabajando en la Empresa debe cargar el Valor del Salario Normal a partir de los 3 Meses anteriores. (Nómina por Nómina debe cargar cual fué su Salario Normal) (Indique en el Nombre de la Pestaña la fecha correspondiente a esa carga de datos)

- Si el Empleado Posee menos de 3 meses trabajando en la Empresa debe cargar el Valor del Salario Normal de los meses que tenga laborando el empleado. (Nómina por Nómina debe cargar cual fué su Salario Normal) (Indique en el Nombre de la Pestaña la fecha correspondiente a esa carga de datos)

- Si el empleado posee un proceso de Nómina Semanal (NS), Nómina Quincenal (NQ), Nómina Mensual (NM), debe suministrar solamente los datos del mes anterior del empleado.

- El Valor correspondiente para este concepto será de Tipo “MONTO” por lo tanto registre el valor en la Columna Monto.

#### Campo de Cédula de Identidad:

- **Formato de Texto**: La columna destinada a la cédula de identidad del empleado debe contener únicamente caracteres alfabéticos del tipo `V` seguidos por un número.
  - No se permiten espacios ni caracteres especiales.


- **Campo de Monto**:
  - **Formato de Número**: Para campos que representan montos, utilice el punto decimal (.) como separador de decimales. Ejemplo: `1.296,39` debería ser expresado como 1296.39.

  - **Símbolos de Moneda**: No se permiten símbolos de moneda, como `$` o `Bs.`, en los campos de monto.
  - **Formatos Adicionales**: No deben incluirse espacios en blanco ni otros formatos en los campos de monto.

- La estructura de datos es

| Cédula | Monto |
| ------ | -------- |
|V00000000  | 1296.39

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

![subir](https://i.imgur.com/GubBh00.png)

**Imagen 4. Ventana para subir archivo**

- Seleccionar el archivo **cargar archivo (upload)**

![dtn](https://i.imgur.com/VCRter6.png)

**Imagen 5. Archivo a Importar**

- Seleccionar el formato que coincida con el archivo.
![seleccionar-formato](https://i.imgur.com/ZVtHEjw.png)

- Seleccionar próximo **registro**

![prox-registro](https://i.imgur.com/aajUxUn.png)

- Una vez seleccionado el próximo registro es fundamental verificar que coincidan los datos con el formato.

![formato-verificacion](https://i.imgur.com/ANDuhlE.png)

- Luego de ser verificado y este todo los campos correctamente, seleccionar **OK** para cargar el archivo.

![carga-de-archivo](https://i.imgur.com/bTM1v6V.png)

- Para verificar que el archivo se cargó correctamente ir a:

  - **Gestión del Sistema** > **Datos** > **Importar Datos** > **Importar Movimientos de Nómina** y buscar el archivo correspondiente.

![seleccion-del-archivo](https://i.imgur.com/095ZnJh.png)

![formato](https://i.imgur.com/gnjuIxj.png)