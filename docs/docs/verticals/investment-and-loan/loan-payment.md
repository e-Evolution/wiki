---
title: Generar Pagos de Préstamo
category: Documentation
star: 9
article: false
---

Una vez generada la selección de pago, podrá generar los pagos de los préstamos (Desembolso), el pago generado como se explicó anteriormente, hereda el cargo seleccionado en la definición del producto financiero (Vea Configuración de Producto Financiero (Préstamo)).

Vaya a la ventana de Imprimir/Exporta Pago (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image30.png)

Imagen 1. Menú de Pagos

A continuación se desplegará la siguiente ventana (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image31.png)

Imagen 2. Imprimir y Exportar Pagos

Ingrese la selección de pagos generada en la sección Generar Selección de Pago, seleccionando la opción de búsqueda selección

![Campo](/assets/img/docs/loan-management/lom-loan-image32.png)

Imagen 3. Búsqueda de Selección de Pagos

A continuación se desplegará la siguiente ventana (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image33.png)

Imagen 4. Búsqueda de Pagos

Seleccione la Selección de pago generada en la sección Generar Selección de Pago

![Campo](/assets/img/docs/loan-management/lom-loan-image34.png)

Imagen 5. Generar Selección de Pagos

Seleccione la opción imprimir text

![Campo](/assets/img/docs/loan-management/lom-loan-image35.png)

Imagen 6. Imprimir Pago

A continuación ADempiere habrá generado el pago y usted verá el siguiente reporte (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image36.png)

Imagen 7. Reporte de Impresión de Pago

## Consulta de Pagos de Préstamo

Existen dos posibles formas de consultar los pagos generados asociadas a un préstamo, a continuación serán explicadas.

## Pago/Cobro

Si el pago generado desde el proceso Generar Selección de Pago es generado con una cuenta bancaria podrá consultar con esta opción.

Vaya a la ventana **Pago/Cobro** (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image37.png)

Imagen 8. Menú de Pago

A continuación se desplegará la siguiente ventana (Adjunto Imagen).

![Campo](/assets/img/docs/loan-management/lom-loan-image38.png)

Imagen 9. Ventana de Pago

Busque el registro desde la opción **Encontrar Registro** ubicada en la barra de herramientas.

![Campo](/assets/img/docs/loan-management/lom-loan-image39.png)

Imagen 10. Búsqueda de Pago

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image40.png)

Imagen 11. Ventana de Búsqueda de Pago

Ingrese el número de la selección generada en el proceso Generar Selección de Pago

## Caja

Si el pago generado desde el proceso Generar Selección de Pago es generado con una cuenta de caja podrá consultar con esta opción.

Vaya a la ventana Caja (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image41.png)

Imagen 12. Menú de Caja

A continuación se desplegará la siguiente ventana (Adjunto Imagen).

![Campo](/assets/img/docs/loan-management/lom-loan-image42.png)

Imagen 13. Ventana de Caja

Busque el registro desde la opción **Encontrar Registro** ubicada en la barra de herramientas.

![Campo](/assets/img/docs/loan-management/lom-loan-image43.png)

Imagen 14. Ventana de Caja

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image44.png)

Imagen 15. Búsqueda de Caja

Ingrese el número de la selección generada en el proceso Generar Selección de Pago.

## Ventana de Préstamo:

Una vez en la ventana de Préstamo

Vaya a la opción **Visualiza Detalle(Donde es Usado)** ubicada en la barra de herramientas.

![Campo](/assets/img/docs/loan-management/lom-loan-image45.png)

Imagen 16. Búsqueda de Referencia de Préstamo

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image46.png)

Imagen 17. Referencia de Préstamo

Seleccione la opción **Pagos de Préstamos**

![Campo](/assets/img/docs/loan-management/lom-loan-image47.png)

Imagen 18. Referencia de Préstamo Seleccionada

Esta opción lo llevará automáticamente a los pagos asociados a este préstamo.

## Contabilidad del Proceso

ADempiere contabilizará el préstamo dependiendo de la contabilidad configurada en el cargo heredado desde la definición del producto financiero (Vea Configuración de Producto Financiero (Préstamo)).

| Cuenta                                    | Débito Contabilizado | Crédito Contabilizado |
| ----------------------------------------- | -------------------- | --------------------- |
| 12410 - Prestamos por Cobrar              | 20.000,00            | 0,00                  |
| 89900 - Cheques y Depósito en Circulación | 0,00                 | 20.000,00             |
| Total                                     | 20.000,00            | 20.000,00             |
