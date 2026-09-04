---
title: Configuración del servicio para impresoras no fiscales y cola de impresión
category: Documentación
star: 9
article: true
tag:
- Servicios
- Impresoras
---
## Requerimientos

Para la configuración del servicio de impresora tendremos que tener en cuenta los siguientes parámetros:

- **Nombre de la cuenta con la que iniciamos sesión en la pc**

- **clave de la cuenta con la que desbloqueamos la sesión en la pc**

Cumpliendo con esto, puede continuar con la instalación, en tal caso de no tener esto a su alcance,
aca le dejamos una breve explicación de cómo obtener su usuario de inicio de sesión:

Nos iremos al buscador de windows y escribiremos **Administrar tu cuenta**
![](/assets/img/docs/fiscal-printer/printing-service10.png)

Luego de este paso, encontraremos en Grande la palabra **tu información** donde tendremos los datos de usuario que estamos buscando, en el ejemplo mostrado en la imagen se puede observar que nuestro nombre de usuario en este caso es **ERP**
![](/assets/img/docs/fiscal-printer/printing-service11.png)

Ya obteniendo cual es nuestro nombre de usuario,lo apuntamos, ya que en la configuración lo vamos a necesitar.

## Pasos de configuración

Seguimos con la Configuración del servicio

Nos iremos al buscador de windows de nuevo y buscaremos **servicios**
![](/assets/img/docs/fiscal-printer/image.png)

Ya estando dentro de el panel de servicios, Ubicamos y lo tildamos **Servicio de impresión ERP**
![](/assets/img/docs/fiscal-printer/printing-service.png)

## Detener el servicio
Luego de esto en el lado superior izquierdo vamos a detener el servicio, para poder continuar con la configuración
![](/assets/img/docs/fiscal-printer/printing-service1.png)
Saldrá un panel donde nos indique que windows está deteniendo un servicio local
![](/assets/img/docs/fiscal-printer/printing-service2.png)

Luego de esto nos vamos a el servicio **Servicio de impresión ERP** y le hacemos click derecho y tildamos donde dice **propiedades**
![](/assets/img/docs/fiscal-printer/printing-service3.png)

Aquí se nos abrirá una ventana, donde nos saldrá como iniciar sesion, si como cuenta local del sistema  o esta cuenta, Seleccionaremos **esta cuenta** y tildamos en examinar
![](/assets/img/docs/fiscal-printer/printing-service4.png)
![](/assets/img/docs/fiscal-printer/printing-service5.png)

Después se nos abrirá otra ventana, donde nos iremos a la casilla que dice: **escriba el nombre de objeto para seleccionar(ejemplos)** Y en esta ventana colocaremos el nombre de usuario que obtuvimos al principio de la configuración, y le daremos donde nos dice comprobar nombres
![](/assets/img/docs/fiscal-printer/printing-service6.png)

Al comprobar dicho usuario nos mandará a la ventana anterior, donde vamos a colocar la contraseña con la que iniciamos sesión en nuestra computadora, y le damos en aplicar.
![](/assets/img/docs/fiscal-printer/printing-service7.png)

**Luego de todos estos pasos Nuestro servicio queda exitosamente configurado**

## Iniciar el Servicio de nuevo
Ya configurado nuestro servicio procedemos a iniciarlo de nuevo para así poder darle un uso exitoso.

Nos vamos al lado superior izquierdo de nuevo y tildamos donde dice iniciar el servicio
![](/assets/img/docs/fiscal-printer/printing-service8.png)

Nos saldrá una ventana donde dira **Windows está intentando iniciar el siguiente servicio en el equipo local...**

Esperamos que cargue y tendremos exitosamente nuestro servicio **Servicio de impresión ERP** Funcionando correctamente.
