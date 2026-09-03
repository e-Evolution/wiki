---
title: erpya-3.9.4-001-3.7.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.1"
  - "2026-01-12"
article: true
---

**Fecha de Liberación:** 2026-01-12

## Novedades

- **Generación automática de registros de tasas de cambio mediante Model Validator**

## Contexto

Mejora de automatización para asegurar la disponibilidad de tipos de cambio en transacciones multimoneda.

### Funcionamiento:

Se incorporó un Model Validator que completa automáticamente los registros faltantes en la tabla `C_Conversion_Rate` cuando existe un flag de generación activo. Dependiendo de la configuración (`ECA13_MODE_RATE_GENERATE`), el sistema puede usar el último tipo de cambio existente (`last`) o el nuevo ingresado (`next`) para llenar los huecos en el periodo, respetando un límite de iteraciones definido para proteger la performance.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
