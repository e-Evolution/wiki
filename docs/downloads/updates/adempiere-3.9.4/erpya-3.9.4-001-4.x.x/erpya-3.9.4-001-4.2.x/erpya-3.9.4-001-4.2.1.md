---
title: erpya-3.9.4-001-4.2.1
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-4.2.1"
  - "2026-05-05"
  - "Noticias"
article: true
---

# Fecha de Liberación: 2026-05-05

## Novedades
Hemos optimizado el motor de importación masiva para garantizar mayor precisión en los cálculos financieros y proteger la integridad de sus documentos contables.

## Contexto
Con el objetivo de hacer su gestión diaria más eficiente y libre de errores, hemos renovado las herramientas de importación de datos. Estos ajustes aseguran que la información cargada desde archivos externos sea procesada con la misma exactitud que si fuera ingresada manualmente en el sistema.

### 📂 Gestión de Archivos y Formatos
- Eliminación automática de comillas innecesarias en los títulos de sus archivos, permitiendo que el sistema reconozca correctamente los nombres de las columnas sin importar cómo se exportaron desde Excel.
- Mayor flexibilidad en la lectura de encabezados para evitar errores de formato en la carga masiva de información.

### 🧮 Precisión en Cálculos y Precios
- Ajuste en el motor de cálculo para asegurar que los precios y cantidades se procesen correctamente, evitando totales en cero y garantizando que las facturas reflejen los montos netos y totales exactos.
- Normalización del manejo de tarifas: ahora el sistema distingue mejor entre el precio de venta y las listas de precios, evitando confusiones en la creación de saldos iniciales o registros especiales.

### 🛡️ Integridad y Seguridad de Documentos
- Protección contra modificaciones accidentales: el sistema ahora impide añadir nuevos registros a facturas que ya han sido finalizadas, anuladas o cerradas, protegiendo así la integridad de su contabilidad.
- Mensajes de error claros y adaptados a su idioma, que le informarán inmediatamente si se intenta realizar una operación no permitida sobre un documento ya procesado.

## Requerimientos
- No se requieren procesos adicionales por aplicar.
