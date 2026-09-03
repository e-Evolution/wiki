---
title: erpya-3.9.4-001-3.8.2
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.8.2"
  - "2026-01-29"
article: true
---

**Fecha de Liberación:** 2026-01-29

## Novedades

- **Actualización de Groovy a v2.4.21 para soporte óptimo de JDK 17**

## Contexto

Mejora de compatibilidad y estabilidad del runtime del sistema bajo entornos de ejecución modernos.

### Detalle Técnico:

Se actualizó la librería core de **Groovy** (de 2.4.15 a 2.4.21) para solucionar problemas de carga dinámica de clases (`ClassNotFoundException`) que surgieron con la migración a Java 17. Esta actualización estabiliza la ejecución de reportes iReport/JasperReports, procesos de nómina y permite el uso de APIs modernas de Java (como Streams) dentro de scripts personalizados en ADempiere.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
