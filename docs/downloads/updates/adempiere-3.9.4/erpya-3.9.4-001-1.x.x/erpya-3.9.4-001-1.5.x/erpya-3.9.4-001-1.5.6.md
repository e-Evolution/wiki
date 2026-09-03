---
title: erpya-3.9.4-001-1.5.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.6"
  - "2024-04-15"
article: false
---

**Fecha de Liberación:** 2024-04-15

## Novedades

- Este release implementa el procesamiento paralelo de nómina por empleado así como la persistencia de conceptos de manera paralela.

Sumado a las validaciones que permiten que la ejecución de un empleado se detenga si no cumple con las validaciones de nómina.

En promedio, para un cliente con 296 empleados el tiempo de procesamiendo se encuentra entre 35 y 45 minutos. Después de aplicar el procesamiento paralelo se reduce a 1 minuto

`ParallelEngine.run: Calculation for createParallelMovements # Time elapsed: 01:04.576`

## Contexto

- Nómina

## Detalle Técnico

- With this release, payroll execution time is considerably reduced to just minutes.

## Enlaces Relacionados

- [ERPYA v1.5.6](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.5.6)

## Requerimientos
