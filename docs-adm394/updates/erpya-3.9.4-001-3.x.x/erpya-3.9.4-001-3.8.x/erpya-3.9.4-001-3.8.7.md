---
title: erpya-3.9.4-001-3.8.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.7"
  - "2026-02-10"
article: true
---

**Fecha de Liberación:** 2026-02-10

## Novedades

- **Nueva funcionalidad de importación anidada y recursiva en ADempiere Import Tool**

## Contexto

Evolución significativa de la herramienta de importación, permitiendo procesar estructuras de datos complejas en una sola operación.

### Características Principales:

- **Importación Anidada**: Uso de la sintaxis `>` (ej. `C_BPartner_Location > C_Location > City`) para crear jerarquías de Padre-Hijo en un solo paso.
- **Smart Lookups**: Las búsquedas de referencias ahora son insensibles a mayúsculas y espacios en blanco (`UPPER(TRIM())`), mejorando la tolerancia a fallos en los archivos de carga.
- **Validación Estricta**: El sistema valida automáticamente las dependencias de tablas, asegurando que los registros se guarden en el orden jerárquico correcto.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
