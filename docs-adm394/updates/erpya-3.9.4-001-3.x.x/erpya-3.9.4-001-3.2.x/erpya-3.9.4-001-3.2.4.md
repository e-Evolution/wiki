---
title: erpya-3.9.4-001-3.2.4
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.2.4"
  - "2025-08-19"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-08-19

## Novedades

- Programa de Asistencia a Agricultores

## Contexto

### Lógica de solo lectura en pestañas de Hoja Técnica

Se agrega lógica de solo lectura en las siguientes pestañas:

- Línea de Hoja Técnica
- Productos a Aplicar

### Validación en Hoja Técnica

Ahora, al intentar Anular o Reactivar una Hoja Técnica, se valida si existe una Orden de Venta asociada a sus líneas:

- Si la Orden de Venta está en estado Borrador o Completada, se bloquea la acción y se muestra un mensaje de error.
- Si la Orden de Venta está en estado Anulada o Cerrada, se permite continuar con la acción.

Ejemplo del mensaje al intentar anular o reactivar una Hoja Técnica vinculada a una Orden de Venta en estado Completo:

![Smart Browser](/assets/img/downloads/updates/resources/adempiere-patch-zk-3.2.4-img1.png)

### Unidad de Medida automática en líneas de Hoja Técnica

Se agrega lógica para que, al guardar una Línea de Hoja Técnica, se asigne automáticamente la Unidad de Medida en función del producto seleccionado.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
