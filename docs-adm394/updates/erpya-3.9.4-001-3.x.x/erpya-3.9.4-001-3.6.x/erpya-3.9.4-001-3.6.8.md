---
title: erpya-3.9.4-001-3.6.8
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.6.8"
  - "2026-01-05"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2026-01-05

## Novedades

- **Soporte de Carga de Estados de Cuenta Bancarios (Librería: Personalización de Pagos)**

## Contexto

En esta versión se incorpora y consolida el soporte para la **importación de estados de cuenta bancarios** provenientes de múltiples bancos venezolanos, mediante implementaciones específicas de **Loaders** y **Transactions**.

### 🏦 Bancos Soportados

| Banco            | Clase Loader                 | Clase Transaction                 |
|------------------|------------------------------|-----------------------------------|
| Banco Activo     | `BancoActivo_XLS_Loader`     | `BancoActivo_Transaction`         |
| Banco BFC        | `BancoBFC_XLS_Loader`        | `BancoBFC_Transaction`            |
| Banco Venezuela  | `BancoVenezuela_XLS_Loader`  | `BancoVenezuela_Transaction`      |
| Bancrecer        | `Bancrecer_XLS_Loader`       | `Bancrecer_Transaction`           |
| Banesco          | `Banesco_XLS_Loader`         | `Banesco_Transaction`             |
| Banplus          | `Banplus_XLS_Loader`         | `Banplus_Transaction`             |
| BNC              | `BNC_XLS_Loader`             | `BNC_Transaction`                 |
| Exterior         | `Exterior_XLS_Loader`             | `Exterior_Transaction`                 |
| Mercantil        | `Mercantil_TXT_Loader`       | `Mercantil_Transaction`           |
| Plaza            | `Plaza_XLS_Loader`           | `Plaza_Transaction`               |
| Provincial       | `Provincial_TXT_Loader`      | `Provincial_Transaction`          |

---

### 🧩 Clases Incluidas en el Release

#### Transacciones

- `BancoActivo_Transaction.java`

- `BancoBFC_Transaction.java`
- `BancoVenezuela_Transaction.java`
- `Bancrecer_Transaction.java`
- `Banesco_Transaction.java`
- `Banplus_Transaction.java`
- `BNC_Transaction.java`
- `Exterior_Transaction.java`
- `Mercantil_Transaction.java`
- `Plaza_Transaction.java`
- `Provincial_Transaction.java`

#### Loaders

- `BancoActivo_XLS_Loader.java`

- `BancoBFC_XLS_Loader.java`
- `BancoVenezuela_XLS_Loader.java`
- `Bancrecer_XLS_Loader.java`
- `Banesco_XLS_Loader.java`
- `Banplus_XLS_Loader.java`
- `BNC_XLS_Loader.java`
- `EXT_XLS_Loader.java`
- `Mercantil_TXT_Loader.java`
- `Plaza_XLS_Loader.java`
- `Provincial_TXT_Loader.java`

---

### ⚙️ Consideraciones Técnicas

- Compatibilidad con **Apache POI 3.17**, evitando APIs modernas no soportadas.
- Uso de `DataFormatter` y validaciones defensivas para prevenir errores por celdas corruptas o tipos inválidos.
- Ignorado automático de filas de **Totales**, **Saldos** o encabezados no transaccionales.
- Normalización de fechas para trabajar únicamente con la **fecha contable**, descartando la hora cuando no es relevante.
- Manejo consistente de montos débito/crédito según convención de cada banco.

---

## Requerimientos

- No se requieren procesos adicionales por aplicar.
