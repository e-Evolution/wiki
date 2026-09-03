---
title: Acceso Seguro con Keycloak
category: Documentation
star: 9
article: false
author: Jesús Albujas
---

Keycloak es una plataforma de código abierto que proporciona servicios de gestión de identidades y accesos, facilitando la autenticación y autorización en aplicaciones y servicios. Su propósito es garantizar un acceso seguro y controlado a recursos digitales, ofreciendo una solución integral para la gestión de identidades, single sign-on (SSO) y la federación de identidades.

**ERP Consultores y Asociados** ha decidido implementar Keycloak como parte de su infraestructura tecnológica para aprovechar los beneficios significativos que esta herramienta aporta a la gestión de identidades y accesos.

Si tu servicio tiene habilitado autenticación en dos pasos haz [clic aquí](./login-2fa.md)

---

Ingrese al servicio de ADempiere. En la zona inferior verá **Acceder con Keycloak**

![ADempiere](https://github.com/erpcya/docs/assets/134967453/291b156c-b169-474a-b444-c120619c2711)

## Acceder a tu cuenta

Lo redireccionará a la siguiente página. Donde debe ingresar:

- **Usuario o  Email** suminsitrado por el **Agente de Atención al Cliente**.

- **Contraseña** suminsitrada por el **Agente de Atención al Cliente**.

![image](https://github.com/erpcya/docs/assets/134967453/36baa53f-3b7a-4a05-9fc9-9e0fcccb87ae)

## Configuración de tu aplicación de identificación móvil

Posteriormente de haber ingresado los datos suminstrados, será redirigido al siguiente apartado.

![Configuración](https://github.com/erpcya/docs/assets/134967453/8fc5bd3f-49c2-4397-9d57-af64c5d4279f)

Donde usted debe descargar una de las aplicaciones sugeridas en su teléfono móvil para realizar el escaneo al código QR. Puede instalarlas haciendo click en uno de ellos:

- [**Google Authenticator**](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=es_VE&gl=US)

- [**Microsoft Authenticator**](https://play.google.com/store/search?q=microsoft+authenticator&c=apps&hl=es_VE&gl=US)

- [**FreeOTP**](https://play.google.com/store/search?q=Freeotp&c=apps&hl=es_VE&gl=US)

---

Una vez instalada la aplicación, escanee el código QR.

Luego de haber escaneado este le dejará un código de 6 cifras. **Importante**: debe ingresar el código antes de que caduque, si observa en la aplicación instalada en su teléfono móvil para obtener el código o si usted instaló el complemento [**Authenticator**](./login-2fa.md) en su navegador , tiene temporizador, debe ingresar el código antes de que este caduque.

Copie el código donde le indica **Keycloak**.

![Código](https://github.com/erpcya/docs/assets/134967453/6605b6fc-994c-49f3-a845-d8fb8430ec79)

## Modificar la contraseña

Ahora deberá modificar su contraseña inicial.

![Modificar](https://github.com/erpcya/docs/assets/134967453/63efef69-7d87-4e68-93cb-5fdbdd7fc70a)

Por otro lado, te solicitará que verifiques el correo electrónico.

![verificar-email](https://github.com/erpcya/docs/assets/134967453/1f21226f-c5aa-4519-9815-100db9fe888a)

Deberas ir a tu correo electrónico y seguir el enlace.

![gmail](https://github.com/erpcya/docs/assets/134967453/64f1d259-c5ff-4f88-a048-b33088c06b42)

El enlace te llevará a Keycloak, donde te estará confirmando la dirección de correo electrónico, haces **click para seguir**.

![confirmar](https://github.com/erpcya/docs/assets/134967453/f583bfd6-c026-4767-baaa-effb36eedd27)

Posteriormente, tu correo ya habrá sido confirmado.

![confirmado](https://github.com/erpcya/docs/assets/134967453/1644800e-b6b1-49a9-88dd-54df1bc98481)

Ahora bien, luego de haber realizado este proceso usted deberá actualizar la página y será redirigido hasta ADempiere, donde ingresará normalmente.
