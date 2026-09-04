---
title: erpya-3.9.4-001-3.7.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.6"
  - "2026-01-15"
article: true
---

**Fecha de Liberación:** 2026-01-15

## Novedades

- **Refactorización de eventos de compleción en procesos de pesaje y calidad**

## Contexto

Mejora en la estabilidad y orden de ejecución de procesos críticos de recepción de materia prima.

### Cambios Técnicos:

- **Record Weight**: La validación de peso incompleto se movió al evento final de compleción (`Completed`), asegurando que todos los validadores de modelo se ejecuten con datos finales.
- **Calidad**: El evento de generación de la orden de salida se trasladó del estado "Prepare" al estado "Completed" del proceso de registro de peso, garantizando que el inventario se mueva solo tras la validación total.
- **FAP**: El método de creación de peso de acondicionamiento ahora se ejecuta justo antes de la compleción (`Before Completed`) para reflejar los últimos ajustes de análisis.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
