---
title: erpya-3.9.4-001-1.4.2
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.2"
  - "2024-03-23"
article: false
---

**Fecha de Liberación:** 2024-03-23

## Novedades

- Se agrega validación en el empleado para que no pueda ser registrado un contrato si no tiene el Estado de Empleado y la Definición de Nómina.
- Se agrega validación en el proceso de nómina para que no pueda ser procesada si la Definición de Nómina a la que pertenece maneja control de período y el proceso de nómina que se está procesando no tiene Período Asignado.
- Se agrega manejo de permisos para el control operativo de vacaciones con las siguientes características:
  - Cálculo de Fecha final del Permiso (Licencia) en función de los días que le corresponden al empleado.
  - Cálculo de los días de vacaciones en función de la fecha de inicio del contrato actual del empleado.
  - Mínimo de antigüedad requerida para incremento de días de vacaciones.
  - Máximo de días de disfrute de vacaciones.
- Se agrega manejo de revocación o suspensión de permisos con otros:
  - Esto aplica para la suspensión de vacaciones por enfermedad, reposo u otro tipo.
  - Con esta característica ya se puede controlar la suspensión de las vacaciones de manera automática cuando existe un reposo en medio; de igual manera, se reinician las vacaciones al terminar el permiso con los días que le quedaban por disfrutar.
- Se agregan permisos recurrentes de manera automática al empleado cuando se selecciona el tipo de empleado: esto es muy útil para los permisos como vacaciones o condiciones especiales.

### Permisos Recurrentes

En el siguiente video se muestra cómo, al establecer el tipo de empleado, se asigna automáticamente un permiso recurrente. Para lograr este funcionamiento, es necesario configurar el tipo de empleado en la sección correspondiente del tipo de permiso, ubicado en la pestaña "Tipo de Empleado por Tipo de Permiso". Esta configuración garantiza que cada vez que se asigne un tipo de empleado específico, se otorguen los permisos correspondientes de manera automática.

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Tipo_de_empleado_Tipo_de_Permiso.mp4" type="video/mp4">
    </video>
</div>

### Suspensión de Permisos

Para configurar que un permiso suspenda otro, sigue estos pasos:

- Ve a la ventana "Tipo de Permiso".
- Dirígete a la pestaña "Combinaciones Permitidas por Tipos de Permiso".
- Agrega el tipo de permiso que deseas permitir.
- Marca la opción "Revocar Permiso".

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Suspension_de_Permisos.mp4" type="video/mp4">
    </video>
</div>

### Validación de Empleado

![Validación de Empleado](/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Validación_de_Empleado.png)

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Validación_de_Empleado.mp4" type="video/mp4">
    </video>
</div>

### Validación de Proceso de Nómina

![Validación de Proceso de Nómina](/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Validación_de_Proceso_Nómina.png)

<style>
    .video-container {
        display: flex;
        justify-content: center;
    }
</style>

<div class="video-container">
    <video width="640" height="480" controls>
        <source src="/assets/img/downloads/updates/resources/erpya-3.9.4-001-1.4.2_Validación_de_Nómina.mp4" type="video/mp4">
    </video>
</div>

## Contexto

- Se agrega funcionalidad para manejo de permisos de manera operativa

## Detalle Técnico

- Functionality is added to manage permissions operationally

## Enlaces relacionados

- [ERPYA v1.4.2](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.4.2)

## Requerimientos

- Se requiere aplicar contenido.
