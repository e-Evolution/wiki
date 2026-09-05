---
title: erpya-3.9.4-001-1.6.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.6.1"
  - "2024-04-25"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-25

## Novedades

- Con este cambio ya es posible personalizar la firma de correos enviados desde ADempiere.

## Uso

Después de aplicar los cambios y las configuraciones necesarias, por defecto se enviará una firma como la que se ve a continuación

![adempiere-patch-zk-1.6.1-img1](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img1.png)

Como opciones válidas se puede configurar la firma personalizada en la información de compañía y se sobrescribe con la información de la organización

En orden de prioridades, la firma será tomada de la siguiente manera:

### Por Usuario

Toma la firma del usuario si la tiene configurada

![adempiere-patch-zk-1.6.1-img2](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img2.png)

### Por Organización

Toma la firma de la organización si la tiene configurada

![adempiere-patch-zk-1.6.1-img3](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img3.png)

### Por Compañía

Toma la firma de la compañía si la tiene configurada

![adempiere-patch-zk-1.6.1-img4](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img4.png)

---

Si no tiene configurada ninguna firma configurada tomará por defecto el siguiente mensaje:

En Inglés:

```
Sent by @AD_Client.Name@ using <a href=\"https://www.adeos.business\">ADempiere ERP</a>
```

En Español:

```
Sent by @AD_Client.Name@ using <a href=\"https://www.adeos.business\">ADempiere ERP</a>
```

## Corrección de Parámetros en Reportes

Se corrige problema con los valores a visualizar en los parámetros de reportes ejecutados desde un programador de procesos, esto se encuentra reportado en la sección [**Enlaces relacionados**](https://docs.adeos.business/downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-1.6.x/erpya-3.9.4-001-1.6.1.html#enlaces-relacionados)

## Corrección de Lógica contable de diferencias contables inter-compañia

En la contabilidad de la asignacion de pagos cuando existe una diferencia contable intercompañia los montos que asienta intercompañia son distintos a los originales

- Muestra actual

![adempiere-patch-zk-1.6.1-img5](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img5.jpeg)

- Muestra corregida

![adempiere-patch-zk-1.6.1-img6](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img6.jpeg)

## Se agrega soporte a Sobreescribir Instancia de Atributos en Acción de Análisis de Calidad

![adempiere-patch-zk-1.6.1-img7](/assets/img/downloads/updates/resources/adempiere-patch-zk-1.6.1-img7.png)

## Contexto

- Se Agrega firma de correos basado en notificaciones de ERPYA.
- Corrección de parámetros en reportes.
- Corrección de Lógica contable de diferencias contables inter-compañia
- Se agrega soporte a Sobreescribir Instancia de Atributos en Acción de Análisis de Calidad

## Detalle Técnico

- Custom Email Signature
- Parameter Correction in Reports
- Correction of accounting logic for inter-company accounting differences
- Added support for Overriding Attribute Instance in Quality Analysis Action

## Enlaces relacionados

[(Bug Report) Reportes ejecutados desde el Programador de Procesos no muestran los valores de parámetros #60](https://github.com/erpcya/adempiere/issues/60)

- [ERPYA v1.6.1](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.6.1)

## Requerimientos

- Se requiere aplicar contenido.
