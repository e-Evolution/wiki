---
title: erpya-3.9.4-001-2.0.6
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-2.0.6"
  - "2024-07-25"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2024-07-25

## Novedades

- Se agrega cálculo basado en [Activación: Clientes Atendidos vs Asignados](https://github.com/erpcya/Control-NATULAC/issues/82)
- Se agrega cálculo basado en [Cobranza Efectiva: Total Cobranza](https://github.com/erpcya/Control-NATULAC/issues/79)
- Se agrega cálculo basado en [Volumen: Forecast Vs Ventas](https://github.com/erpcya/Control-NATULAC/issues/80)
- Se agrega funcionalidad para permitir jerarquías entre puestos de trabajo (referencia `legacy` de adempiere en el usuario)
- Se agrega funcionalidad para cálculo de comisiones sobre jefes, directivos entre otros

### ¿Cómo se Configura la Jerarquía?

La jerarquía se encuentra por **Posición**, para agregar la **Posición** simplemente lo puede asignar en el usuario desde la ventana **Socio de Negocio**

![Configurar Jerarquía](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.6-img1.png)

---

La jerarquía define los niveles que se encuentran entre los vendedores y sus supervisores, realmente son puestos de trabajos y la relación entre ellos es a través de un campo que se llama **Supervisor**.

![Supervisor](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.6-img2.png)

---

### ¿Dónde se define el Monto del Vendedor?

Hay dos maneras de hacerlo:

- Por Vendedor en las comisiones: Esto únicamente aplicará para la comisión a la que se asigna

![Vendedor](/assets/img/downloads/updates/resources/adempiere-patch-zk-2.0.6-img3.png)

- Por Posición: Esto aplica para todas las comisiones a las que se asigne el vendedor y lo sobrescribe el monto por comisión si existe

El valor del **monto** se expresa en la moneda de la comisión que se está ejecutando

## Contexto

- Comisiones

## Detalle Técnico

- Commissions

## Enlaces relacionados

- [ERPYA v2.0.6](https://github.com/erpya/adempiere_patch_zk/releases/tag/2.0.6)

## Requerimientos

- No se requieren procesos adicionales por aplicar.
