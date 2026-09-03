---
title: erpya-3.9.4-001-3.5.7
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.5.7"
  - "2025-11-28"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-11-28

## Novedades

- Se agrega funcionalidad de Facturación Digital

## Contexto

- Funcionalidad Soportada con The FactoryHKA, [referencia tecnica](https://github.com/erpya/adempiere_digital_invoice)

- Configuracion en Adempiere
  - En el registro de aplicación se deben configurar los parametros para conectarse con la imprenta digital, los parametros obligatorios son los siguientes
    - `Servidor`: Definido en la cabecera del registro de aplicación
    - `TFHKA_USER`: usuario proporcionado por la imprenta digital
    - `TFHKA_PASS`: token proporcionado por la imprenta digital

  - La definición del Documento Digital espera de caracter obligatorio los siguientes parametros
    - `Nombre`: Identificador de la definición del documento digital
    - `Regitro de Aplicación:` Registro de Aplicacion previamente configurado
    - `Regla`: Logica que se encarga de parsear el documento en el modelo que lo espera la imprenta digital, [ejemplo](https://github.com/erpcya/adempiere_groovy/blob/main/src/tfhka/Document_ParseInvoice.java)
    - `Nombre de Clase`: Logica que se encarga de parsear el documento en el modelo que lo espera la imprenta digital, [ejemplo](https://github.com/erpya/adempiere_digital_invoice/blob/main/src/main/java/com/eca70/engine/thka/document/Invoice.java)

    `****NOTA IMPORTANTE: si se define la logica mediante una clase de una libreria del fuente no es necesario definir la regla y viceversa, estos dos campos son excluyentes****`

  - Configuración del Tipo de Documento
    - Se debe establecer en el campo `Definición de Documento Digital` la definición previamente configurada.

## Requerimientos

- Se requieren procesos adicionales por aplicar.
