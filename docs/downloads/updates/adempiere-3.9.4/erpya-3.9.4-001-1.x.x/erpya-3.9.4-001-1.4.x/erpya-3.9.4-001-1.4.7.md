---
title: erpya-3.9.4-001-1.4.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.4.7"
  - "2024-04-04"
article: false
---

**Fecha de Liberación:** 2024-04-04

## Novedades

- En el permiso se agregaron varios campos informativos y de operación como son:

  - Fecha de Regreso: Fecha efectiva de regreso a trabajar
  - Tiempo Restante: en caso de cerrar el permiso antes de tiempo quedará un saldo a favor del empleado
  - Duración del Permiso
  - Duración Hábil del Permiso
  - Duración Completa del Permiso

En el proceso de nómina se puede procesar paralelamente cada empleado. Para que esto funcione debe existir una variable en el configurador del sistema para la compañía con la clave `USE_PAYROLL_PARALLEL_PROCESSING` con el valor Y como se muestra en la imagen

![news](/assets/img/downloads/updates/resources/USE_PAYROLL_PARALLEL_PROCESSING.png)

## Contexto

- Con este cambio ya se puede gestionar las vacaciones en ADempiere como un permiso o licencia.

## Detalle Técnico

- Permission management is incorporated into ADempiere to:

- Vacation
- Rests
- General Permissions
- Added functionality for parallel payroll processing

## Enlaces relacionados

- [ERPYA v1.4.7](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.4.7)

## Requerimientos

- Se requiere procesos por aplicar.
