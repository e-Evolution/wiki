---
title: erpya-3.9.4-001-3.8.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.1"
  - "2026-01-28"
article: true
---

**Fecha de Liberación:** 2026-01-28

## Novedades

- **Nuevo importador avanzado CSV/TSV basado en el modelo de objetos persistentes (PO)**

## Contexto

Introducción de una herramienta de importación robusta diseñada para garantizar la integridad total de los datos mediante el motor nativo de ADempiere.

### Ventajas de la Herramienta:

- **Validación Estricta**: Al utilizar el modelo PO, el sistema ejecuta automáticamente validadores, callouts y eventos de negocio durante la carga, asegurando que los registros cumplan todas las reglas operativas del ERP.
- **Inteligencia en Cabecera**: Soporte para lookups por valor (ej. `C_BPartner_ID[Value]`) y definición de claves (`/K`) para identificar duplicados o realizar actualizaciones (UPSERT).
- **Detección Automática**: Identificación inteligente de separadores y soporte para keywords dinámicas como `now` o `@Date@` para campos temporales.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
