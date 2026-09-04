---
title: erpya-3.9.4-001-3.8.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.8"
  - "2026-02-12"
article: true
---

**Fecha de Liberación:** 2026-02-12

## Novedades

- **Prevención de importación duplicada de extractos conciliados y corrección en comisiones**

## Contexto

Este release refuerza la integridad de los procesos financieros y de cobranza.

### Cambios Destacados:

- **Model Validator Bancario**: Se implementó una restricción técnica que impide importar un extracto bancario si este ya se encuentra asociado a una conciliación bancaria activa, evitando la duplicidad de movimientos.
- **Comisiones de Cobranza**: Corrección en el filtro de **Región de Ventas**, asegurando que los cálculos apliquen estrictamente a la región seleccionada sin incluir registros fuera de alcance.
- **Importación Core**: Inferencia automática de AD_Org_ID/AD_Client_ID basándose en el contexto de login cuando no vienen definidos en el archivo.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
