---
title: Ejecución
category: Documentation
star: 9
article: false
---

## Simulación

La simulación de préstamos es ideal para realizar cálculos rápidos y consultas de préstamos a solicitantes, generando una tabla simulada de amortización completa, además de monto total estimado de impuesto a pagar, monto total estimado de interés a pagar y cuota fija estimada.

Se creó un formulario o ventana personalizada convirtiendo a ADempiere en una herramienta eficiente y sumamente útil en cuanto a tomas de decisiones se trata tanto para la entidad (Prestamista) como para el solicitante sin ser necesario generar datos y guardar en nuestra base de datos, asimismo, reduce los tiempos de gestión del usuario con ADempiere.

A continuación se detalla las instrucciones para proceder a simular un préstamo de forma exitosa:

Vaya a la ventana de Simulador de Préstamo (Adjunto Imagen)

![Campo](/assets/img/docs/loan-management/lom-loan-image1.png)

Imagen 1. Menú de Préstamos

A continuación se desplegará la siguiente ventana disponible para simular un préstamo.

![Campo](/assets/img/docs/loan-management/lom-loan-image2.png)

Imagen 2. Simulador de Préstamo

Proceda a llenar los parámetros necesarios para la simulación de préstamo:

Socio del Negocio: Indique el socio del negocio solicitante previamente configurado (Vea Configuraciones Esenciales para el Proceso de Préstamo).

Producto Financiero: Seleccione el producto financiero o préstamo a aplicar previamente configurado (Vea Configuración de Producto Financiero (Préstamo)),este parámetro posee una validación, los préstamos disponibles en esta lista dependerá de el grupo de socio de negocio al cual pertenezca el socio de negocio seleccionado y la configuración del producto financiero en aplicación de producto.

Monto de Capital: Indique el monto del préstamo solicitado.

Frecuencia de Pago: ADempiere establece por herencia la frecuencia configurada en el producto financiero seleccionado, sin embargo puede modificarlo.

Fecha Inicio: Indique la fecha de inicio del préstamo.

Fecha Final: ADempiere calcula y establece la fecha basada en la frecuencia y la fecha de inicio, sin embargo puede modificarlo.

Nro de Cuotas: ADempiere establece por herencia el Nro de cuotas basadas en la cantidad mínima de cuotas configurada en el producto financiero seleccionado, sin embargo puede modificarlo.

Moneda: ADempiere establece por herencia la moneda basada en la configuración del producto financiero seleccionado, sin embargo puede modificarlo.

Tasa Financiera: ADempiere establece por herencia la tasa financiera basada en la configuración del producto financiero seleccionado, no puede ser modificado.

![Campo](/assets/img/docs/loan-management/lom-loan-image3.png)

Imagen 3. Simulador de Préstamo con Parámetros

Seleccione la opción procesar text

A continuación verá los siguientes resultados:

![Campo](/assets/img/docs/loan-management/lom-loan-image4.png)

Imagen 4. Ejecución de Simulador

## Interpretando la Ventana

Panel de resultados de Amortización Estimada:

La amortización estimada es generada basada en el sistema francés, el mismo consiste en mantener cuotas de amortización constantes, debido a esto, cada mes la entidad recibe intereses en función del capital pendiente, es decir, en los primeros períodos, la entidad percibe una cantidad mayor de intereses que de capital y en los períodos finales más capital e intereses menores, la frecuencia de las cuotas estimadas (Resultado) varía según la frecuencia de pago seleccionada como parámetro ó heredado desde el producto financiero, el número de cuotas dependerá del Nro de Cuota indicado en el simulador ó heredado desde el producto financiero.

![Campo](/assets/img/docs/loan-management/lom-loan-image5.png)

Imagen 5. Área de Simulación

Panel de resultados Totales Estimados:

Los totales estimados le indicarán al solicitante el Total de Interés, Total de Impuesto, y el Total General en la cual es sumado el Capital más el Total de Interés más Total de Impuesto, arrojando entonces el monto que definitivamente se estima cancelará el solicitante si es procesado el préstamo.

![Campo](/assets/img/docs/loan-management/lom-loan-image6.png)

Imagen 6. Área de Totales

## Generar Préstamo desde Simulación

Una vez procesada la simulación:

![Campo](/assets/img/docs/loan-management/lom-loan-image7.png)

Imagen 7. Ejecución de Simulador

Seleccione la opción ok Ok

![Campo](/assets/img/docs/loan-management/lom-loan-image8.png)

Imagen 8. Área de Acciones

A continuación se desplegará el siguiente dialogo

![Campo](/assets/img/docs/loan-management/lom-loan-image9.png)

Imagen 9. Área de Proceso

Si desea generar el préstamo seleccione la opción ok Ok, caso contrario seleccione la opción cancelar Cancelar

![Campo](/assets/img/docs/loan-management/lom-loan-image10.png)

Imagen 10. Área de Pregunta

Si seleccionó la opción OK el sistema generará el préstamo de forma exitosa generando el siguiente mensaje indicando el número del préstamo generado:

![Campo](/assets/img/docs/loan-management/lom-loan-image11.png)

Imagen 11. Área de Resultado
