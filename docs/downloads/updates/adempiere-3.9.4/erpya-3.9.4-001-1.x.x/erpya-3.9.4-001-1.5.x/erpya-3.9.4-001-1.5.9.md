---
title: erpya-3.9.4-001-1.5.9
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.9"
  - "2024-04-17"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-17

## Novedades

- Ahora al agregar un bloqueo por acceso a datos de rol en un almacen al ingresar en ADempiere en la ventana de login va a filtrar por los almacenes que el rol o el usuario tienen permiso.

- Fórmula Alemana para cálculo de prestamos al Completar un prestamo o en el simulador de prestamos

### ¿Dónde se encuentra la validación?

- En la ventana del login si existe permiso a datos de rol por almacen configurados
- Al completar un prestamo.
- Al simular un prestamo.

## Contexto

- Se Agrega soporte a Filtro de Acceso a Datos de Rol en la Seleccion de Almacen al hacer login
- Se Agrega soporte a calculo de prestamo con el Metodo Aleman

## Detalle Técnico

- Added support for Role Data Access Filter in Warehouse Selection when logging in
- Added support for loan calculation with the German Method

## Enlaces Relacionados

- [Soporte a Bloqueo de Almacén #35](https://github.com/erpcya/Control-NATULAC/issues/35)

- [Revalorización de Pagaré #17](https://github.com/erpcya/Control-NATULAC/issues/17)

- [ERPYA v1.5.9](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.5.9)

## Requerimientos

- Se requiere aplicar proceso.
