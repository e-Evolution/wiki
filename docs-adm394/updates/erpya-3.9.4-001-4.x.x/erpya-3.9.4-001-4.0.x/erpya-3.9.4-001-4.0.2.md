---
title: erpya-3.9.4-001-4.0.2
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.2"
  - "2026-03-25"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-25

## Novedades

- **Corrección en la validación de órdenes auto-financiadas (Asistencia Técnica)**

## Contexto

Ajuste crítico en el flujo de trabajo del Programa de Asistencia Técnica.

### Mejora Realizada:

- Se corrigió el orden de validación en las órdenes de compra autofinanciadas. Anteriormente, la marca de validación podía activarse antes de la persistencia total de los datos de la cuenta financiera, lo que generaba campos nulos. Con este cambio se asegura la integridad de los datos financieros antes de permitir completar el documento.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
