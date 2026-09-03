---
title: erpya-3.9.4-001-1.5.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-1.5.8"
  - "2024-04-15"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-04-15

## Novedades

- Con este cambio se agrega una funcionalidad que permite validar la Cédula y RIF al momento de crear o actualizar un socio de negocio, específicamente su **cédula** o **rif**.

Con este cambio se agrega una funcionalidad que permite validar la Cédula y RIF al momento de crear o actualizar un socio de negocio, específicamente su cédula o rif.

### Valores Permitidos

- J: Jurídico
- V: Venezolano
- E: Extranjero
- G: Gobierno
- X: Aplica para Extranjeros sin documento venezolado (para importar)
- El tamaño máximo del texto debe ser 10 dígitos incluyendo la primera letra

### Dónde se encuentra la validación?

Ésta validación se dispara cuando se está creando un socio de negocio o cuando se está modificando el campo Cédula(Value) o RIF(TaxID)

Si los datos que se intentan colocar no cumplen con los requisitos mínimos el usuario recibirá el siguiente mensaje:

Inglés:

```
Invalid Business Partner Value Format
You should use the format [V, J, G, E, X (External unkow)][00000000]
Example: V20000000 / J400000000
```

Español

```
Formato de C.I./R.I.F No Válido
Debería usar el formato [V, J, G, E, X (Para Extranjeros sin Documento)][00000000]
Ejemplo: V20000000 / J400000000
```

## Contexto

- Se agrega validación al momento de crear socios de negocio

## Detalle Técnico

- Validation is added when creating business partners

## Enlaces Relacionados

- [Configuración del campo Número de Identificación para que sólo reciba caracteres números (9 caracteres XXX.XXX.XXX) #600](https://github.com/erpcya/Control-PROSEIN/issues/600)

- [ERPYA v1.5.8](https://github.com/erpya/adempiere_patch_zk/releases/tag/1.5.8)

## Requerimientos

- Se requiere aplicar proceso.
