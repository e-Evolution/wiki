---
title: erpya-3.9.4-001-3.9.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.9.4"
  - "2026-03-11"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-11

## Novedades

- **Autoasignación de acuerdos y cuentas financieras en órdenes de compra**

## Contexto

Mejora de automatización en el Programa de Asistencia Técnica para garantizar que las órdenes de compra autofinanciadas cuenten con las referencias necesarias para su compleción.

### Lógica Implementada:

- **Creación Automática**: El sistema busca o crea automáticamente un **Acuerdo Financiero** y su **Cuenta** asociada al Socio de Negocio y Organización antes de permitir completar la orden de compra.
- **Configuración Global**: Prioriza la búsqueda de convenios ya completados o los genera basándose en el tipo de financiamiento configurado en el tipo de documento.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
