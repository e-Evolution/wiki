---
title: Errores Comunes en Impresora Fiscal
category: Dispositivos
star: 9
tag:
  - Nosotros
  - Servicios

article: false
---

A continuación se presentan las fallas o incidentes comunes, que debe considerar durante la configuración de la Impresora fiscal VMAX 220, cubriendo así los incidentes que afecten el funcionamiento de esta.

## No se imprimen los archivos en la Impresora

Puede ocurrir por varias razones, las principales son conexión por Hardware a la impresora Fiscal y la configuración de la aplicación Spooler.

Para hacer un diagnostico de lo que ocurre lo principal es iniciar desde la conexión por Hardware, esta tiene 3 puntos a tener en cuenta:

- Adaptador USB-SERIAL:

![Imagen 1. Adaptador USB-Serial](/assets/img/docs/fiscal-printer/usb-serial-adapter.jpg)

Verificar Drivers del dispositivo al conectar el Adaptador, esto se hace desde el administrador de dispositivos, allí verificar que se conecto un nuevo puerto COM ejemplo: **“COM1”**.

![Imagen 2. Driver Instalado Correctamente](/assets/img/docs/fiscal-printer/com-port.png)

Si se conecto y no se puede identificar un dispositivo, es decir, ningún dispositivo posee **“COM”** en su nombre, debe instalarse nuevamente los controladores para la correcta comunicación con el Hardware.

- Conexión de Cable Serie:

![Imagen 3. Cable Conexión Serial](/assets/img/docs/fiscal-printer/ciscoconsolecable.jpg)

En esté caso observar si la conexión entre el adaptador y el cable, a través del conector DB9 este hecha de manera correcta.

- Posición en la que esta el conector RJ45:

![Imagen 4. Parte Posterior de La Impresora](/assets/img/docs/fiscal-printer/rear-view-printer.png)

Comprobar que el conector RJ45 este en el puerto de la impresora marcado con las Siglas “PC” en la parte posterior de la impresora.

Si lo anterior esta Correcto Proceder a verificar la aplicación Spooler, en esté caso se debe revisar lo siguiente:

- Comprobar Instalación de Spooler

Ingresar al Panel de Control e ingresar a Programas y Características, comprobar si en la lista existe el nombre “Spooler de impresión VMAX”, si existe esto quiere decir que la aplicación esta instalada, caso contrario es necesario instalar el Spooler tal como se indica en el manual del fabricante.

- Comprobar Directorio de instalación

Para ello basta con ingresar al disco duro donde se encuentre instalado Windows, entrar en la carpeta “Archivos de Programas”, debe existir un directorio con el Nombre “SpoolerVmax”.

Comúnmente se mueve el directorio de instalación de la aplicación. Esto se hace para evitar la necesidad de ejecutar con privilegios de administrador, para casos en los que no se tiene la seguridad conocer la ruta de instalación, se puede buscar con el buscador de archivos de Windows colocando el nombre “epsSpoolerVmax.exe”

- Verificar archivo “config.dat” dentro del Directorio de instalación

Este archivo contiene los datos necesarios para que la impresora interactue con la PC, Tales como puerto de conexión (COMX) y el documento a través del cual recibe los comandos (Document.txt).