---
title: erpya-3.9.4-001-3.6.5
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.6.5"
  - "2025-12-22"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-12-22

## Novedades

- Lector de Peso Desde Báscula

## Contexto

- Se corrige error de NullPointerException al actualizar display de peso desde hilo de fondo
  - Soluciona error "Cannot invoke addAuResponse because Executions.getCurrent() is null"
  - Implementa activación de Desktop usando Executions.activate() cuando no hay contexto de ejecución
  - Permite actualizar la UI correctamente cuando los eventos de balanza llegan desde hilos de fondo
  - Mantiene compatibilidad con el comportamiento original cuando hay contexto de ejecución disponible

## Requerimientos

- No se requieren procesos adicionales por aplicar.
