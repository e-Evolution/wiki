---
title: erpya-3.9.4-001-3.6.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.6.3"
  - "2025-12-17"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-12-17

## Novedades

- **Migración del stack de correo electrónico (`javax.mail` → `jakarta.mail`)**

## Contexto

Como parte del proceso de modernización y compatibilidad con **Java 17**, se ha iniciado la transición del stack de correo electrónico hacia **Jakarta Mail**, alineándose con los estándares actuales de Jakarta EE.

### Cambios realizados:
- **Migración de clases clave**: Se actualizaron las clases `EMail` y `MClient` para soportar `jakarta.mail`.
- **Actualización de dependencias**: Reemplazo de JavaMail clásico por `jakarta.mail-api`, `angus-mail` (implementación oficial) y `jakarta.activation-api`.
- **Configuración de Handlers**: Ajuste de Mailcap handlers de Angus para prevenir errores de `DataContentHandler`.
- **Actualización de Imports**: Transición de los paquetes `javax.mail.*` y `javax.activation.*` a sus respectivos homólogos en `jakarta.*`.

### Notas de Compatibilidad:
- No es posible mezclar ambas librerías en el mismo flujo.
- El cambio será definitivo una vez finalizada la migración total del flujo de correo en el core del sistema.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
