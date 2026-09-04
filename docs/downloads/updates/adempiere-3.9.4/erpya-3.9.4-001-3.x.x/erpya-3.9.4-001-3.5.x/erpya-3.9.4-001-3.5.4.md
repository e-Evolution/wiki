---
title: erpya-3.9.4-001-3.5.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.5.4"
  - "2025-11-24"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-11-24

## Novedades

- Personalizaciones de Pago
- Tipo de Conversión por Documento
- Configurador del Sistema

## Contexto

- Se modifica el comportamiento del proceso **Crear desde Selección de Pago**.
- Se implementó soporte para el Tipo de Conversión por Documento usando la variable `ECA13_CONVERSION_TYPE_USE_DOCUMENT_ORG`.
  - El proceso ahora recupera correctamente la Organización desde el documento de origen (Orden, Factura, Pago, Adición de Activo...) para asignar el Tipo de Conversión Negociado a dicha Organización específica, en lugar de utilizar la organización predeterminada del sistema (*).
- La variable `ECA13_CONVERSION_TYPE_USE_DOCUMENT_ORG`:
  - Si es `Y`, tomará la organización del documento. Si es `N`, usará la organización del sistema (*).
  - El **Configurador del Sistema debe crearse por organización**. Es decir, si el configurador fue creado para la organización 1000000, ese valor se usará al evaluar la configuración y al determinar la organización correcta para el nuevo Tipo de Conversión.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
