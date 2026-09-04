---
title: Generar Videos Comprimidos como GIF
category: Procedimientos Estándares
star: 9
tag:
  - Nosotros
  - Servicios

article: false
---

## Instalando Kazam

Para grabar la pantalla de la computadora se puede usar cualquier grabador, en este caso se usa Kazam como ejemplo. Puede consultar los detalles de la aplicación en [Kazam](https://launchpad.net/kazam).

### Desde el Terminal de Linux

Para instalar Kazam simplemente abra el terminal de linux (Como root) y ejecute el siguiente comando:

```shell
apt-get install kazam
```

Luego de instalar Kazam puede abrir la aplicación desde el menú y se mostrará algo como la siguiente imagen:

![kazam](/assets/img/about/standard-procedures/Kazam.png)

---

## Instalación y uso de FFMPEG

### Instalando FFMPEG

El ffmpeg es una aplicación que puede ser utilizada para comprimir videos o convertirlos a gif, para instalarlo simplemente abra el terminal de linux (Como root) y ejecute el siguiente comando:

```shell
apt-get install ffmpeg
```

## Comprimiendo un Vídeo

Para comprimir un video siga los siguientes pasos:

- Vaya al directorio donde se encuentra el video.

- Presione la tecla especial **F4** (Se abrirá un terminal en la parte inferior, esto dependiendo del sistema linux que tenga en su computadora). 

- A continuación ejecute el siguiente comando (**Note que la propiedad vid indica el nombre del archivo**):

```shell
vid=Current.mp4
start_time=00:00:01
height=ih/2      # input height halved , can replace with pixils .
width=-2         # keeps aspect ratio . can replace with pixils .
fps=40           # frames per a second .

filters="fps=$fps,scale=$width:$height:flags=lanczos"

ffmpeg -ss $start_time                             \
    -i  "$vid"                                  \
    -vf "$filters,palettegen"                   \
    -y  palette.png                             &&
ffmpeg -ss $start_time                             \
    -i  "$vid"                                  \
    -i  palette.png                                \
    -lavfi "$filters [x]; [x][1:v] paletteuse"  \
    -y  "$vid".gif                              &&
rm palette.png
```

## Convirtiendo desde SH

Para evitar abrir la consola simplemente descargue el archivo que se encuentra en [convert.sh](/assets/img/about/standard-procedures/convert.sh) y coloque el mismo dentro del directorio donde se encuentran los archivos a convertir.

Tome en cuenta que el archivo a convertir debe tener el siguiente nombre: **Current.ogv**

A continuación se encuentra un demo del recorrido:

![current.ogv](/assets/img/about/standard-procedures/Current.ogv.gif)

## Crear gif utilizando Peek

Peek es un grabador de pantalla simple con una interfaz fácil de usar.

![peek-recording](/assets/img/about/standard-procedures/peek-recording-itself.gif)

### Instalando Peek

```shel
apt install peek
```

### Instalando key-mon

Key-mon es un plugin que permite dibujar pequeños círculos alrededor de los clics del mouse.

- Dirigirse a la pagina oficial de descargas de este plugin [key-mon](https://code.google.com/archive/p/key-mon/downloads).

- Elegir de la siguiente lista la version y la extensión del archivo deseado.

::: info Nota:

En este caso particular se utiliza la versión 1.17 con la extensión del archivo .zip

![key-mon-list](/assets/img/about/standard-procedures/key-mon-list.png)

:::

- Una vez descargado el paquete debemos ejecutar los siguientes comandos para instalarlo

  - Si el formato es .deb debemos usar el siguiente comando:

    ```
    dpkg -i key-mon*.deb
    ```

- Si el formato es .zip debemos usar los siguientes comandos:

    ```
    unzip key-mon*.zip
    ```

    ```
    cd key-mon*
    ```

    ```
    python setup.py install
    ```

- Al finalizar la instalación exitosamente debemos ejecutar el siguiente comando:

    ```
    key-mon --visible_click
    ```

Esto permitira que al grabar un gif se pueda vizualizar un pequeño circulo de color rojo cada vez que se clickea, esto permite al usuario o receptor del archivo saber si debe hacer click en una opción o no.
