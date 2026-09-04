---
title: erpya-3.9.4-001-2.6.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.6.8"
  - "2024-12-26"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-12-26

## Novedades

- Se agrega validación en Producción para no permitir cantidades en Movimiento positivas al guardar una linea de producción y al completar una producción.


## Contexto

- Evita que se guarden o completen líneas de producción con cantidades no válidas en el sistema.

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.6.8-img1.png)


- Asegura que no se utilicen productos si la cantidad disponible es insuficiente, considerando las producciones no completadas.

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.6.8-img2.png)


## Detalle Técnico

- Prevención de Errores. Mejora de Control.

## Enlaces relacionados

- [ERPYA v2.6.8](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.6.8)

## Requerimientos

- Se requieren procesos adicionales por aplicar.
