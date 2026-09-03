---
title: Instalación de servicio de peso romana
category: Otros Servicios
star: 9
tag:
 - Nosotros
 - Servicios

article: false
---

Esta aplicación captura la Lectura de peso proveniente de una balanza conectada a un equipo por medio de una interfaz RS-232.

## Requisitos

- Sistema operativo Windows 10 o Superior

## Instalación

Para efectos demostrativos se instala la versión de ERP-Weight-Scale-Service-1.0.2-win-x64.exe para las versiones posteriores se deben seguir los mismos pasos.

Ejecutar el instalador como Administrador.

1. Ejecutar Instalador

![0](/assets/img/about/other-services/devices/roman-weight-service-facility12.png)

Permisos de Instalación

![0](/assets/img/about/other-services/devices/weight-sender-permisions.png)

Selección de Idioma

![0](/assets/img/about/other-services/devices/roman-weight-service-facility.png)

Ventana de Bienvenida

![0](/assets/img/about/other-services/devices/roman-weight-service-facility1.png)

2. Licencia de la aplicación

![0](/assets/img/about/other-services/devices/roman-weight-service-facility2.png)

3. Ruta de Instalación

La aplicación se instala por defecto en la siguiente ubicación:

~~~
C:\Program Files (x86)\ERP-Weight-Scale-Service
~~~

![0](/assets/img/about/other-services/devices/roman-weight-service-facility3.png)

4. Progreso Instalación

![0](/assets/img/about/other-services/devices/roman-weight-service-facility4.png)

5. Finalizar Instalación

![0](/assets/img/about/other-services/devices/roman-weight-service-facility5.png)

6. Configurar los parámetros de la romana

![0](/assets/img/about/other-services/devices/roman-weight-service-facility6.png)

7. Confirmar los parámetros de la romana

![0](/assets/img/about/other-services/devices/roman-weight-service-facility7.png)

8. Reiniciar el equipo para terminar con la configuración
![0](/assets/img/about/other-services/devices/roman-weight-service-facility13.png)

## Visualizar el Servicio creado Con el nombre **ERP Servicio de Romana**

Luego del reinicio de La máquina, Nos iremos al buscador de windows, Escribiremos **Servicio**
y daremos clic

![0](/assets/img/about/other-services/devices/roman-weight-service-facility8.png)

Y nos dirigirá a la pestaña servicio, Donde ubicamos **ERP Servicio de Romana** para confirmar que la instalación fue exitosa

![0](/assets/img/about/other-services/devices/roman-weight-service-facility9.png)

## Luego de esto y como último paso de instalación Iremos al visor de eventos

Volveremos al buscador de Windows y escribimos **Visor de eventos** y daremos clic

![0](/assets/img/about/other-services/devices/roman-weight-service-facility10.png)

Al abrirnos la pestaña ubicamos Registro de aplicaciones y servicios, y daremos clic, luego daremos clic en ERP_weight_scale_log  y podremos visualizar todos los eventos que envíe nuestro servicio de romana a Adempiere.

![0](/assets/img/about/other-services/devices/roman-weight-service-facility11.png)

## Con esto damos por finalizado la instalación Del servicio de Romana
