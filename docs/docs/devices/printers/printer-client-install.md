---
title: Manual de Instalación de Cliente de Impresión
category: Documentación
star: 9
article: true
tag:
  - Servicios
  - Impresoras
---

## Requerimientos

Para instalar el cliente de impresión se debe tener como mínimo lo siguiente:

- Windows 10 64 bits o superior
- Instalador de [cliente de impresión](../../../downloads/updates/devices/printers)

## Pasos de Instalación

### Descarga del Instalador

Para descargar el **Archivo** a instalar, puedes usar el siguiente [link](../../../downloads/updates/devices/printers)

![Página de Descarga](/assets/img/docs/fiscal-printer/download-page.png)

Una vez descargado dicho **Archivo** procedemos a la **Instalación**

Ubica el archivo previamente descargado

![Archivo](/assets/img/docs/fiscal-printer/previously-downloaded-file.png)

### Ejecutando el Instalador

Al intentar ejecutar el instalador te solicitará la ejecución en modo administrador, debes aceptar para continuar la instalación.

![Instalación](/assets/img/docs/fiscal-printer/setup.png)

### Seleccionando el Idioma

Seleccione el idioma con el cual desea continuar la instalación.

::: info Nota

El idioma seleccionado determinará el nombre del servicio a instalar.

- Si selecciona Español el servicio se llamará "Servicio de Impresión ERP"
- Si selecciona Inglés el servicio se llamará "ERP Printing Service"

:::

![Selección de Lenguaje](/assets/img/docs/fiscal-printer/select-language.png)

Luego de seleccionar el idioma de instalación se presiona **Siguiente** para ir al siguiente formulario.

![Formulario](/assets/img/docs/fiscal-printer/setup-2.png)

### Aceptando los Términos y Condiciones

Es importante que lea bien los términos y condiciones del contrato de instalación, al aceptarlo estará de acuerdo con todo lo que establece nuestro contrato de instalación.

![Acuerdo de Licencia](/assets/img/docs/fiscal-printer/terms-and-conditions.png)

### Seleccionando la Ruta de Instalación

La ruta de instalación es el lugar donde estarán los archivos necesarios para que la aplicación funcione correctamente, de igual manera se usará en adelante para aplicar las actualizaciones o desinstalar la aplicación.

Trate de usar una ruta que no contenga caracteres especiales como `()*#$+`

![Ruta](/assets/img/docs/fiscal-printer/path.png)

Para efectos de este ejemplo usaremos la ruta `C:\Users\ERP-Printing-Service`

![Ruta](/assets/img/docs/fiscal-printer/path-2.png)

![Ruta](/assets/img/docs/fiscal-printer/path-3.png)

![Ruta](/assets/img/docs/fiscal-printer/path-4.png)

Al seleccionar la ruta presionamos el botón **Instalar** para que se inicie el proceso de instalación

![Instalar](/assets/img/docs/fiscal-printer/install.png)

### Configurando la Impresora

Al terminar la instalación aparecerá un diálogo preguntando si desea configurar la impresora. Presione la opción **Si** para configurarla.

::: info Nota

La opción para configurar impresora puede ser ignorada si ya se encuentra instalado y configurado y únicamente está actualizando la aplicación

:::

![Instalar](/assets/img/docs/fiscal-printer/installation.png)

![Instalar](/assets/img/docs/fiscal-printer/question.png)

---

Configure los datos necesarios para que la impresora pueda ser administrada desde las aplicaciones de [E.R.P. Consultores y Asociados, C.A.](http://erpya.com). Si tiene alguna duda con respecto a este punto puede solicitar los datos a nuestro servicio de atención al cliente.

- **Servidor**: Coloque aquí la dirección del servidor de colas de impresión donde se conectará su dispositivo, tome en cuenta que la dirección puede variar si su instalación es cloud o es On Premise
- **Puerto**: Defina el puerto de conexión para el servicio de colas de impresión
- **Tiempo de Espera**: Este valor se puede dejar por defecto y únicamente deberá ser cambiado si algún técnico de atención al cliente lo solicita
- **Nombre de Impresora**: Coloque el nombre de la impresora. Este nombre debe ser único y debe coincidir con el nombre configurado en la aplicación desde la que se intenta enviar documentos a su iompresora
- **Modo de Inicio**: Este campo lo puede dejar vacio a menos que un técnico de atención al cliente le solicite cambiarlo

![Configuración](/assets/img/docs/fiscal-printer/print-config.png)

![Configuración](/assets/img/docs/fiscal-printer/print-config-2.png)

Al finalizar con la carga de datos presione el botón **Siguiente**, al hacerlo aparecerá un diálogo con los datos que previamente configuró. Simplemente presione aceptar para ir al siguiente formulario.

![Configuración](/assets/img/docs/fiscal-printer/print-config-3.png)

Después de configurar los datos de la impresora y conexión al servicio de colas de impresión aparecerá un diálogo preguntando si desea reiniciar el equipo.

::: info Nota

Es importante que acepte para que se reinicie el equipo y todo funcione correctamente.

:::

![Reiniciar](/assets/img/docs/fiscal-printer/restart.png)

### Luego de Reiniciar vamos a verificar que el programa se inicie como un servicio

Para ubicar el servicio iremos al buscador de windows y pondremos **servicios**

![Servicios](/assets/img/docs/fiscal-printer/image.png)

Al llegar a la pestaña de servicios ubicamos el **servicio de impresión ERP**

![Servicio de impresión ERP](/assets/img/docs/fiscal-printer/image1.png)

Al llegar a **Servicio de impresión ERP** este debe estar en **en ejecución-automatico**

![En ejecución automatico](/assets/img/docs/fiscal-printer/image2.png)

### Después de verificar que ya el programa esté Funcionando como un servicio, Iremos al visor de Eventos, y así confirmar que no arroje algún error, y este en perfecta funcionalidad para imprimir

De la misma manera iremos al buscador de windows y escribiremos **visor de eventos**

![Visor de eventos](/assets/img/docs/fiscal-printer/image3.png)

Al estar en la pestaña del visor de eventos, en la parte superior izquierda ubicamos **registros de aplicaciones y servicios** y haremos click sobre el mismo

![Registros de aplicaciones y servicios](/assets/img/docs/fiscal-printer/image4.png)

Al llegar al registro de aplicaciones y servicios, daremos click sobre **ERP_Printer_log**

![ERP_Printer_log](/assets/img/docs/fiscal-printer/image5.png)

Se nos abrirán los eventos creados por dicho servicio y aca comprobaremos si tenemos errores o no
### Nota
**Uno de los errores más comunes es hacer una mala configuración de los parámetros al momento de la instalación, y como ejemplo nos arrojaría el siguiente error:**

![Error en configuracion](/assets/img/docs/fiscal-printer/image7.png)

**Aquí nos detalla la causa del error**

![Error en configuracion](/assets/img/docs/fiscal-printer/image8.png)

###  Finalizado el ejemplo de dicho error, Mostraremos cómo deberían aparecer los eventos creados por el servicio

De esta manera deben aparecer los eventos creados cada vez que manda información el sistema al servicio

![Evento de manera correcta](/assets/img/docs/fiscal-printer/image6.png)

**Así damos por finalizada la instalación del programa y tenemos la Impresora lista para su uso correcto**
