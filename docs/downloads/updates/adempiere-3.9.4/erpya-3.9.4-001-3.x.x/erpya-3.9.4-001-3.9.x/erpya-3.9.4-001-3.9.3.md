---
title: erpya-3.9.4-001-3.9.3
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.9.3"
  - "2026-03-10"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-10

## Novedades

- **Mejoras estructurales en el importador avanzado y soporte CSV/TSV**

## Contexto

Actualización de la herramienta de infraestructura para facilitar la carga masiva de datos y mejorar la compatibilidad.

### Mejoras de Infraestructura:

- **Importación de Direcciones**: Nueva lógica que permite importar únicamente tablas hijas (ej. Direcciones de Socios) sin necesidad de modificar o insertar en la tabla raíz (Cabecera), alineándose con el comportamiento estándar de iDempiere.
- **Gestión de Contexto**: El sistema ahora infiere automáticamente la organización (`AD_Org_ID`) basándose en la sesión del usuario cuando no se especifica en el archivo, asegurando la integridad del multi-tenancy.
- **Formatos**: Soporte oficial y documentado para archivos delimitados por comas (CSV) y tabulaciones (TSV) con autodetección de separadores.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
