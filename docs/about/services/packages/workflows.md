---
title: Flujos de Trabajo
category: Paquete de Servicio
star: 9
tag:
  - Servicios
  - Producto

article: false
---
# Flujos de Trabajo

Esta funcionalidad permite manejar la aprobación de documentos según su monto y el monto autorizado de las firmas de aprobación.
Puede manejar validación de otro tipo como carácterísticas del documento o estados de campos personalzados.

El flujo de trabajo puede ser configurado dependiendo de la cantidad de nodos de aprobación y las firmas relacionadas.

Un ejemplo de un flujo de trabajo con un nodo de aprobación es el que se encuentra cuando se completa una requisición y dependiendo del monto se desea configurar.

## Ejemplo básico

Se requiere que una requisición esté sujeta a aprobación cuando la misma exceda los **USD 2.000,00**. Su aprobación deberá tener tres niveles:

- Supervisor: entre **USD 2.000,00** y **USD 3.500,00**
- Gerente de Area: entre **USD 3.501,00** y **USD 4.500,00**
- Gerente General: monto mayor a **USD 4.500,00**

Si el documento tiene productos que corresponden a la categoría **Materia Prima** debe enviar un correo al Gerente de planta con los datos del mismo.

El ejemplo muestra tres niveles de aprobación y dos nodos (Aprobación y Envío de Reporte).

## ¿Qué se necesita para iniciar la configuración?

- Un bosquejo detallado de lo que se requiere
- Un caso de uso por cada comportamiento esperado
- La aprobación de la cotización enviada al cliente

## Entregable

- Un flujo de trabajo con los nodos solicitados
- Los niveles de aprobación solicitados
- Capacitación sobre el uso y aprobación del flujo de trabajo
- Un instructivo para futura referencia en la plataforma [ERP Docs](https://docs.adeos.business/) o en nuestro [Knowledge Base](https://stackoverflow.com/c/erpya-customers/questions)

## Condiciones del Servicio

- La configuración de la funcionalidad sólo estará limitada al manejo de flujos de trabajo de acuerdo con las herramientas que ofrece ADempiere
- El precio del servicio varía en función de la cantidad de nodos y niveles de aprobación
- Si existe alguna funcionalidad solicitada que requiera algún desarrollo, el mismo será estimado aparte como un documento de desarrollo de alcance
