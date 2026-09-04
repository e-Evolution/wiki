---
title: erpya-3.9.4-001-4.0.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.0.8"
  - "2026-04-14"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-04-14

## Novedades

- **Actualización de dependencias y mejora en la visualización de resultados de procesos**

## Contexto

Esta actualización se centra en el mantenimiento de la infraestructura y la mejora de la experiencia de usuario en la interfaz web (ZK).

### Cambios Realizados:

- **Infraestructura**: Actualización de librerías core (`erpya_libs` a 4.2.3 y `patch_swing` a 3.3.2) para incorporar correcciones de estabilidad.
- **ZK WebUI**: Se implementó el soporte para el método `openResult` con `WindowID` en la clase `ProcessPanel`. Esto permite que los procesos abran automáticamente ventanas específicas al finalizar, basándose en una consulta (`MQuery`) y un ID de ventana definido.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
