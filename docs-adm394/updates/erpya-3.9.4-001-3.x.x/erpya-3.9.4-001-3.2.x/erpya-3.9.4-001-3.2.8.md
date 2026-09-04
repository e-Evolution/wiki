---
title: erpya-3.9.4-001-3.2.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.2.8"
  - "2025-08-31"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-08-31

## Novedades

- Transaccion abierta sin uso al Contabilizar Forzado
- Ajustes Dinamicos en Configuracion de HIKARI CP
- Correccion en Metodo before save en linea de orden

## Contexto

- Referencia [adempiere/adempiere#4351](https://github.com/adempiere/adempiere/pull/4351)

- Para la configuración de conexiones del ZK debemos vamos a probar reemplazar el archivo de conexiones al levantar el servicio para ajustar todos los valores, incluso los que no estan definidos en el archivo properties de ADempiere

- Se agrega condicion en linea de la orden para que solo contemple re-calcular el precio al guardar si es una orden de venta

## Requerimientos

- No se requieren procesos adicionales por aplicar.
