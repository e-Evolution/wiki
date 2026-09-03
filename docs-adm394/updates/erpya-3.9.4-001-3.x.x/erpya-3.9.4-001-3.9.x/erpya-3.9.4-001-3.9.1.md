---
title: erpya-3.9.4-001-3.9.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.9.1"
  - "2026-02-22"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-02-22

## Novedades

- **Corrección en el registro del controlador JDBC para SQL Server en ZK WebUI**

## Contexto

Mejora de infraestructura para la conectividad de base de datos en entornos de ejecución web.

### Solución Técnica:

- Se solventó el error `No suitable driver found` que ocurría al intentar conectar con SQL Server en entornos Tomcat/Gretty. Se implementó la carga y el registro explícito del controlador JDBC (`com.microsoft.sqlserver.jdbc.SQLServerDriver`) durante el arranque del servlet principal, garantizando su disponibilidad independientemente del aislamiento de clases del servidor.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
