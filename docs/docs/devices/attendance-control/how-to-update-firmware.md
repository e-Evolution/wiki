---
title: ¿Como se actualiza el Firmware al dispositivo?
category: Dispositivos
star: 9
tag:
  - Nosotros
  - Servicios
  - Asistencia
  - Configuración
  - Control
article: true
---

::: note Requerimientos

- **Unidad de memoria Flash USB**
- **Equipo con Windows 10 o Superior.**
- **Aplicación para configurar.**

- Archivos necesarios:

  - [**Descargar Aplicacion NetSet_Attendance**](http://ams3.digitaloceanspaces.com/erpya/restricted/Netset_Attendance.zip?AWSAccessKeyId=PU7FGBDI4QYBCOXDJVT4&Expires=1752169618&Signature=wzol8slp%2FvlYcKRu%2ByWpA4yy1vk%3D)

  - [**Descargar Firmware_Attendance V2.0.30**](http://ams3.digitaloceanspaces.com/erpya/restricted/Firmware_Attendance_V2.0.30.zip?AWSAccessKeyId=PU7FGBDI4QYBCOXDJVT4&Expires=1752087528&Signature=mITSZuHKCrn9hApqZm7KJH6yoZQ%3D)
:::

---

En primer lugar, se debe formatear la unidad USB con formato FAT32.

![FAT32](/assets/img/docs/devices/formatear-pendrive-a-fat32.png)

---

Descargue y descomprima el archivo `Firmware_Attendance_V2.0.30.zip`. Luego, copie el archivo "`WS545C.bin`", que es el firmware, en un pendrive vacío. Finalmente, inserte el pendrive en el dispositivo.

::: warning  Cabe mencionar que el archivo no debe estar dentro de ningún directorio.

:::

![Insertar Pendrive](/assets/img/docs/devices/insertar-pendrive-dispositivo.jpeg)

- Dirijase al **Menú** > **Setup**

![Setup](/assets/img/docs/devices/setup.jpeg)

- Una vez dentro, ingrese en la opción **Configuración Avanzada**

![Configuración Avanzada](/assets/img/docs/devices/advance-settings.jpeg)

::: tip Consejo

Recuerde tener el la unidad **USB** en el dispositivo antes de ejecutar este paso.
:::

Diríjase a la última opción, **Actualizar Firmware**. Notará que el dispositivo tomará su tiempo en actualizarse y se apagará. Una vez que se apague, enciéndalo nuevamente.

![Actualizar Firmware](/assets/img/docs/devices/upload-firmware.jpeg)

Para asegurarse de que se ha actualizado correctamente dirijase al **Menú** > **SysInfo**.

![Información del Sistema](/assets/img/docs/devices/Sysinfo.jpeg)

Ingrese a **Información del Producto**

![Información del producto](/assets/img/docs/devices/product-info.jpeg)

Seleccione la última opción **Firmware Ver**

![Versión de Firmware](/assets/img/docs/devices/firmware-ver.jpeg)

Mostrando la siguiente información se comprueba que se ha actualizado exitosamente.

![Actualización exitosa](/assets/img/docs/devices/update-succesfully.jpeg)

---

Ahora bien, conecte el dispositivo con un cable USB al equipo con Windows 10 o superior.

::: note Nota

Debe tener el dispositivo conectado a la fuente de energía y al mismo tiempo al USB. En caso contrario el equipo con Windows no reconocerá el USB.
:::

Ingrese al **Menú principal** > **SetComm**

![Cambiar modo de red](/assets/img/docs/devices/setcomm.jpeg)

Seleccione la segunda opción: **Red**

![Cambiar modo de red](/assets/img/docs/devices/network.jpeg)

Cambie el modo de red a **modo local**

![Cambiar modo de red](/assets/img/docs/devices/mode-local.jpeg)

Descargue y descomprima el archivo **`NetSet_Attendance.zip`**. Luego, ingrese a la carpeta, que es donde se encuentra la aplicación para terminar de hacer las configuraciones al dispositivo.

![NetSet](/assets/img/docs/devices/NetSet.png)

Ejecute como Administrador el programa **NetSet**

![NetSet](/assets/img/docs/devices/ejecutar-como-admin.png)

::: warning Importante
Esta parte es la más importante y si no configuró el número de serie, el
el dispositivo no podrá conectarse con el servidor en la nube. Siga los pasos a continuación...
:::

Pulse el botón **Get** para obtener la información requerida del dispositivo. Si a usted le genera error, asegurese de seguir los pasos indicados anteriormente.

![Obtener información del dispositivo](/assets/img/docs/devices/get.png)

Mostrando el siguiente mensaje una vez haya terminado:

![Mensaje](/assets/img/docs/devices/mensaje-get.png)

En el campo **Device ID** ingresará el serial del dispositivo. Para ello dirijase al dispositivo vaya a **Menú** > **SysInfo**

![Menú](/assets/img/docs/devices/Sysinfo.jpeg)

Ingrese en la cuarta opción: **Número de Serial**

![SysInfo](/assets/img/docs/devices/serial-number.jpeg)

![Número de Serial](/assets/img/docs/devices/number.jpeg)

Resultando de la siguiente manera

![ID de Dispositivo](/assets/img/docs/devices/device-id.png)

Ahora bien, los campos a configurar se muestran a continuación

- **Device Name**: Puede agregar el modelo del dispositivo o bien un nombre que lo identifique. Cabe resaltar que no contempla espacios.
- **Server Name**: Dominio del servidor
- **Server IP**: IP del servidor
- **Server Port**: Puerto del servicio

Los demás campos pueden ser omitidos o no son configurables.

![Configurar](/assets/img/docs/devices/config.png)

Después de haber configurado todo y este en orden, pulse el botón **Set**.

![Configurar](/assets/img/docs/devices/set.png)

Posterior a configurar el dispositivo, es importante cambiar el modo de red a **modo internet**. Asimismo, cambiar la zona horaria dependiendo de tu localización, en este caso, para Venezuela se usa la zona horaria -4. [Más información aquí](https://www.disfrutalasmatematicas.com/zonas-horarias-mundiales.html)