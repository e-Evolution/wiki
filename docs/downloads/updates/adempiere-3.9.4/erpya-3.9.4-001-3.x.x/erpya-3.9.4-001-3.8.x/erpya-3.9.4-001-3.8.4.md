---
title: erpya-3.9.4-001-3.8.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.4"
  - "2026-02-06"
article: true
---

**Fecha de Liberación:** 2026-02-06

## Novedades

- **Nueva experiencia de carga Banco Mercantil y automatización de tipos de conversión**

## Contexto

Mejoras en la conciliación bancaria y consistencia monetaria multimoneda.

### Mejoras Implementadas:

- **Banca**: Introducción del loader `MercantilNewExperience_XLSX_Loader`, diseñado para procesar el nuevo formato oficial de extractos en Excel de Banco Mercantil de forma altamente consistente.
- **Currency Convert**: El sistema ahora puede establecer automáticamente el tipo de conversión desde el encabezado del documento cuando este se encuentra vacío, asegurando que los procesos de conversión respeten la tasa vigente al momento de la creación.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
