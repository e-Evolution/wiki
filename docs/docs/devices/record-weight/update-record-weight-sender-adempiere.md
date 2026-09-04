---
title: Actualizar el Cliente de Lectura de Peso
category: Otros Servicios
star: 9
tag:
  - Nosotros
  - Servicios

article: false
---

Esta aplicación captura la lectura de peso proveniente de una balanza conectada a un equipo por medio de una interfaz RS-232.

- Requisitos

Instalador [Record-Weight-Sender-DotNet-x86](https://erpya.ams3.digitaloceanspaces.com/public/Record-Weight-Sender-DotNet-x86-rs-1.8.exe) ó [Record-Weight-Sender-DotNet-x64](https://erpya.ams3.digitaloceanspaces.com/public/Record-Weight-Sender-DotNet-x64-rs-1.8.exe)

Para efectos demostrativos se instala la versión de **Record-Weight-Sender-DotNet-x64-rs-1.8**, para las versiónes posteriores se deben seguir los mismos pasos, es importante recalcar que al actualizar se mantienen los datos de configuración previos, por esa razon no es necescario configurar nuevamente la aplicación.

## Instalación

Para efectos demostrativos se instala la versión de Record-Weight-Sender-DotNet-x64-rs-1.8, para las versiónes posteriores se deben seguir los mismos pasos, es importante recalcar que al actualizar se mantienen los datos de configuración previos, por esa razon no es necescario configurar nuevamente la aplicación.

1. Ejecutar el instalador

![0](/assets/img/about/other-services/devices/weight-sender-start-installer.png)

Permisos de Instalación

![0](/assets/img/about/other-services/devices/weight-sender-permisions.png)

Ventana de Bienvenida

![0](/assets/img/about/other-services/devices/weight-sender-welcome.png)

2. Licencia de la aplicación

![0](/assets/img/about/other-services/devices/weight-sender-license.png)

3. Ruta de Instalación

La aplicación se instala por defecto en la siguiente ubicación:

~~~
C:\Users\(Usuario de Windows)\AppData\Local\Record-Weight-Sender-DotNet
~~~

![0](/assets/img/about/other-services/devices/weight-sender-install-path.png)

4. Progreso Instalación

![0](/assets/img/about/other-services/devices/weight-sender-progress-install.png)

5. Finalizar Instalación

![0](/assets/img/about/other-services/devices/weight-sender-install-finish.png)

6. Icono creado en el Escritorio de Windows.

![0](/assets/img/about/other-services/devices/weight-sender-desktop-shortcut.png)

Al Finalizar la instalación se actualizara automaticamente el servio de Windows.

![0](/assets/img/about/other-services/devices/weight-sender-folder-service.png)

![0](/assets/img/about/other-services/devices/weight-sender-folder-service-properties.png)

Modificando la **Ruta de Acceso al Ejecutable** con la siguiente ruta:

~~~
C:\Users\(Usuario de Windows)\AppData\Local\Record-Weight-Sender-DotNet\rs-1.8-win-x64\Local-Printing-Service-DotNet-win-x64.exe
~~~
