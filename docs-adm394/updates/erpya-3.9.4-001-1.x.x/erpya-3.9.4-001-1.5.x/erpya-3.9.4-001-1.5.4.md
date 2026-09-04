---
title: erpya-3.9.4-001-1.5.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.4"
  - "2024-04-12"
article: false
---

**Fecha de Liberación:** 2024-04-12

## Novedades

- Este release implementa el procesamiento paralelo de nómina por empleado así como la persistencia de conceptos de manera paralela.

En promedio, para un cliente con 296 empleados el tiempo de procesamiendo se encuentra entre 35 y 45 minutos. Después de aplicar el procesamiento paralelo se reduce a entre 1 y 2 minutos

```
ParallelEngine.run: Calculation for createParallelMovements # Time elapsed: 01:07.444
```

## Contexto

- Ejecución de la Nómina

## Detalle Técnico

- With this release, payroll execution time is considerably reduced.

## Enlaces Relacionados

- [ERPYA v1.5.4](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.5.4)

## Requerimientos
