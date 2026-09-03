---
title: erpya-3.9.4-001-3.7.9
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.7.9"
  - "2026-01-23"
article: true
---

**Fecha de Liberación:** 2026-01-23

## Novedades

- **Mejoras en compatibilidad y estabilidad de loaders bancarios XLS/XLSX/TXT**

## Contexto

Actualización técnica de los procesos de importación de extractos bancarios para asegurar compatibilidad con formatos modernos y reducir errores de parseo.

### Mejoras Realizadas:

- **Infraestructura**: Alineación con versiones recientes de Apache POI para un mejor manejo de archivos Excel (Office 2007+).
- **Consistencia**: Se corrigió el parseo de tipos de celda numéricos y de texto, asegurando la integridad de referencias numéricas y montos.
- **Loaders Actualizados**: Ajustes específicos en loaders de Banco Activo, BFC, Venezuela, Bancrecer, Banesco, Banplus, BNC, Exterior, Mercantil, Plaza y Provincial.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
