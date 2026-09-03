---
title: erpya-3.9.4-001-3.9.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.9.8"
  - "2026-03-23"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-03-23

## Novedades

- **Consolidación de soporte para extractos bancarios multiformato**

## Contexto

Mejoras exhaustivas en la importación de estados de cuenta, soportando variaciones reales de archivos bancarios en diversos layouts (XLS, XLSX, TXT, CSV, OFC, OFX).

### Bancos y Mejoras Soportadas:

| Banco / Formato      | Clase Ajustada / Loader                               |
| -------------------- | ----------------------------------------------------- |
| Banco de Venezuela   | BancoVenezuela_XLS_Loader / BancoVenezuela_TXT_Loader |
| BNC                  | BNC_XLS_Loader / BNC_TXT_Loader                       |
| Provincial / Banesco | Provincial_XLS_Loader / Banesco Panana_XLS_Loader     |
| Banplus / IFB        | Banplus_TXT_Loader / IFB_OFX_Loader                   |
| Mercantil Panamá     | MercantilPanama_XLSX_Loader                           |

### Consideraciones Técnicas:

- **Compatibilidad**: Se ajustó la lectura para archivos ambiguos (SpreadsheetML XML o HTML con extensión .xls).
- **Consistencia**: Se implementaron validaciones de conteo real por archivo y generación de identificadores únicos para evitar colisiones en ADempiere.

## Requerimientos

- No se requieren procesos adicionales por aplicar.
