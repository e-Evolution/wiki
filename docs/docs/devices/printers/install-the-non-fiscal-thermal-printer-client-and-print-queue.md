---
title: ¿Cómo instalar el cliente de impresoras térmica no fiscal y cola de impresión?
category: Documentación
star: 9
article: true
tag:
- Servicios
- Impresoras
---


## Instalar Impresora Térmica no Fiscal

Requerimientos para instalar el cliente de cola de impresión

**Software:**

**Driver instalados en la PC de la Impresora a Configurar:**

**Para la configuración en cada estación con Windows donde se emplee la impresora fiscal**:

- Instalar el archivos de PDF ***FOXIT PDF READER.*** El cual puedes descargar en el siguiente Link:

  https://www.foxit.com/es-la/downloads/

- Configurar la impresora como Impresora Predeterminada esto lo realizamos de la siguiente manera:

  **Tecla “Win” ó Tecla “Inicio” + I.**

  Este atajo nos llevara al **Panel de Control** de Windows y ubicamos la opción **Dispositivos.**

  ![](/assets/img/docs/fiscal-printer/print-spooler1.1.png)

Una vez desplegada la ventana **Dispositivos** ubicamos y seleccionamos la Opción **Dispositivos e impresoras.**

  ![](/assets/img/docs/fiscal-printer/print-spooler2.png)

  Al presionar esta opción se nos despliega una ventana en la cual pueden observarse los diferentes dispositivos instalados en la Pc, ubicamos el dispositivo que deseamos configurar como Predeterminado.
  
  ![](/assets/img/docs/fiscal-printer/print-spooler3.png)

Al posicionarse en el dispositivo presionamos click derecho y seleccionamos **Establecer como impresora predeterminada.**

  ![](/assets/img/docs/fiscal-printer/print-spooler4.png)

Una vez realizado el paso anterior en el dispositivo quedara seleccionado con un Check color Verde, el cual nos indica que la configuración ha sido correcta.

  ![](/assets/img/docs/fiscal-printer/print-spooler5.png)
 
 **Descargar la versión adecuada del instalador del cliente de cola de impresión dependiendo del sistema operativo empleado:**

Para el sistema operativo Windows 10:

- Local-Printing-All-In-One-DotNet-x86-rs-6.4.exe para equipos de 32 bits

- Local-Printing-All-In-One-DotNet-x64-rs-6.4.exe para equipos de 64 bits

Dicho programa puedes descargarlo en el siguiente link:  

https://docs.adeos.business/downloads/updates/devices/printers/rs-6.4.html

Para conocer qué versión de sistema operativo de Windows tiene instalado la PC Instalada presionamos:

**Tecla “Win” ó Tecla “Inicio” + Tecla Pausa.**

Una vez presionadas las teclas te enviará a una pantalla donde podrás observar la versión de Windows Instalada en el ordenador.

![](/assets/img/docs/fiscal-printer/print-spooler6.png)

En caso de cumplir lo anteriormente descrito y una vez conectada la Impresora al Pc, además teniendo a disposición el dominio hacia el que va apuntar el cliente de cola de impresión es necesario conocer los siguientes valores.

![](/assets/img/docs/fiscal-printer/print-spooler7.png)

Una vez que cumplas los requerimientos descrito anteriormente procedemos al registro de la impresora por ADempiere y la instalación del programa de LocalPrinting.

**Para realizar el Registro de la Impresora no Fiscal a la Cola de Impresión en ADempiere puedes visitar el siguiente Link:**
https://docs.adeos.business/docs/devices/printers/how-to-register-a-non-Fiscal-printer-to-the-print-queue-in-adempiere.md

**Luego del registro de la impresora por ADempiere Ejecutamos Local-Printing-All-In-One-DotNet-x64-rs-6.4.exe con privilegios de Administrador:**

![](/assets/img/docs/fiscal-printer/print-spooler8.png)

![](/assets/img/docs/fiscal-printer/print-spooler9.png)

![](/assets/img/docs/fiscal-printer/print-spooler10.png)

![](/assets/img/docs/fiscal-printer/print-spooler11.png) 

## **Nota:**

Cambiar el Directorio de Instalación preferiblemente por el siguiente:

- **C:\\Program Files (x86)\\Local-Printing-All-In-One-DotNet**

![](/assets/img/docs/fiscal-printer/print-spooler12.png) 

![](/assets/img/docs/fiscal-printer/print-spooler13.png) 

![](/assets/img/docs/fiscal-printer/print-spooler14.png) 

## **Nota:**

- Luego de aplicar el instalador en el escritorio de Windows se creará un acceso directo **Local-Printing-All-In-One-DotNet**, el cual permite iniciar el cliente de cola de impresión al ejecutarlo, pero antes de realizar la ejecución debemos realizar el cambio de ruta de Destino y Cambio del Icono de este Acceso Directo, por lo cual presionamos click derecho en el acceso y nos posicionamos en Propiedades.

![](/assets/img/docs/fiscal-printer/print-spooler15.png) 

![](/assets/img/docs/fiscal-printer/print-spooler16.png) 

Reemplazar el Campo Destino por lo siguiente:

- **C:\\Program Files (x86)\\Local-Printing-All-In-One-DotNet\\rs-6.4-win-x86\\StartPrintService.bat**

Para el Cambio de Icono de la Aplicación nos dirigimos a Cambiar Icono en la misma ventana de propiedades:

![](/assets/img/docs/fiscal-printer/print-spooler17.png) 

![](/assets/img/docs/fiscal-printer/print-spooler18.png) 

![](/assets/img/docs/fiscal-printer/print-spooler19.png) 

## **Ubicación del Icono:**

- **C:\\Program Files (x86)\\Local-Printing-All-In-One-DotNet\\resources**

![](/assets/img/docs/fiscal-printer/print-spooler20.png)

![](/assets/img/docs/fiscal-printer/print-spooler21.png)

![](/assets/img/docs/fiscal-printer/print-spooler22.png)

Una vez realizado todo el procedimiento anteriormente descrito ubicamos el Archivo **printer.ymal.** el cual se le realizarán unas modificaciones de configuración este archivo se encuentra ubicado en la siguiente ruta:

- **C:\\Program Files (x86)\\Local-Printing-All-In-One-DotNet\\resources**

Para realizar las modificaciones correspondientes debemos iniciar el Bloc de Notas en modo Administrador, para luego ubicar y abrir el archivo (printer.ymal) descrito anteriormente:

![](/assets/img/docs/fiscal-printer/print-spooler23.png)

![](/assets/img/docs/fiscal-printer/print-spooler24.png)

![](/assets/img/docs/fiscal-printer/print-spooler25.png)


Nos posicionamos en **Documentos de texto(\*.txt)** y seleccionamos **Todos los archivos.**

![](/assets/img/docs/fiscal-printer/print-spooler26.png)

Seleccionamos el Documento printer y presionamos Abrir.

![](/assets/img/docs/fiscal-printer/print-spooler27.png)

![](/assets/img/docs/fiscal-printer/print-spooler28.png)

Líneas Editables para la configuración de impresora fiscal en el archivo printer.yaml

![](/assets/img/docs/fiscal-printer/print-spooler29.png)

Al realizar las configuraciones anteriormente descritas procedemos a ejecutar el programa el cual al momento de su ejecución debe ser con privilegio de Administrador.

![](/assets/img/docs/fiscal-printer/print-spooler30.png)

![](/assets/img/docs/fiscal-printer/print-spooler31.png)

- **Obtener Estado Actual de Impresora Fiscal**:

Ingresando en **ADempiere** como compañía ubicar el proceso **Registro de Aplicación** buscar Cola de Impresión Registrada al iniciar y posicionarse en **Proceso** (Botón del Engranaje) y seleccionar **Test Connection:**

![](/assets/img/docs/fiscal-printer/print-spooler32.png)

![](/assets/img/docs/fiscal-printer/print-spooler33.png)


