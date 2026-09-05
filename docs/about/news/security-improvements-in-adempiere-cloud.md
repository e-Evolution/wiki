---
title: Mejoras de seguridad en ADempiere Cloud
category: Noticias
star: 9
author: Jesús Albujas
tag:
  - "ADempiere 3.9.4"
  - "Noticias"
  - "Keycloak"
  - "2FA"
  - "OpenID"
  - "Seguridad"
article: true
---

![Keycloak is Here!](/assets/img/about/news/keycloak-is-here.png)

### Introducción

Nos complace anunciar la incorporación de importantes mejoras de seguridad en ADempiere Cloud, diseñadas para proteger mejor sus datos y su infraestructura. Estas mejoras incluyen:

- Autenticación de dos factores (2FA)
- Integración con Keycloak
- Uso de HTTPS como protocolo seguro

## Beneficios de las mejoras de seguridad

### Autenticación de dos factores (2FA)

- **Mayor seguridad:** La 2FA agrega una capa adicional de seguridad al requerir un segundo factor de autenticación, como un código de un solo uso, además de su contraseña. Esto dificulta que los piratas informáticos accedan a su cuenta, incluso si tienen su contraseña.
- **Protección contra ataques de relleno de credenciales:** La 2FA ayuda a proteger contra ataques de relleno de credenciales, en los que los piratas informáticos obtienen una lista de nombres de usuario y contraseñas robadas y las prueban en diferentes sitios web.
- **Mayor tranquilidad:** La 2FA le brinda la tranquilidad de saber que su cuenta está mejor protegida contra accesos no autorizados.

### Integración con Keycloak

- **Gestión de identidades y accesos centralizada:** Keycloak es un proveedor de identidad y gestión de accesos (IAM) que le permite centralizar la gestión de usuarios y permisos en ADempiere Cloud.
- **Mayor flexibilidad:** Keycloak le permite utilizar una variedad de métodos de autenticación, incluidos SAML, OpenID Connect y LDAP.
- **Mejora de la seguridad**: Keycloak puede ayudar a mejorar la seguridad al reducir la cantidad de contraseñas que necesitan los usuarios y al proporcionar un control más granular sobre los permisos de acceso.

**Uso de HTTPS como protocolo seguro**

**Comunicación segura**:

HTTPS cifra la comunicación entre su navegador y ADempiere Cloud, protegiendo sus datos de miradas indiscretas.

- Protección contra ataques de intermediario: HTTPS ayuda a proteger contra ataques de intermediario, donde un pirata informático intercepta la comunicación entre su navegador y ADempiere Cloud.
- Mayor confianza: El uso de HTTPS contribuye a crear confianza en los usuarios al garantizar la seguridad de sus datos.

**Riesgos de seguridad sin 2FA o Keycloak**:

- Robo de contraseñas: Las contraseñas pueden ser robadas mediante ataques de phishing, malware o ingeniería social.
- Ataques de fuerza bruta: Los atacantes pueden utilizar herramientas automatizadas para adivinar la contraseña del usuario.
- Acceso no autorizado: Los usuarios con permisos elevados pueden acceder a información confidencial sin autorización.
- Suplantación de identidad: Los atacantes pueden suplantar la identidad de un usuario legítimo para acceder a la cuenta.

### Conclusión 

La 2FA y Keycloak son herramientas fundamentales para mejorar la seguridad informática de las organizaciones. La 2FA añade una capa adicional de seguridad al proceso de autenticación, mientras que Keycloak facilita la gestión de usuarios, roles y permisos. La omisión de estas medidas, junto con la falta de protocolo HTTPS, puede exponer a las organizaciones a un alto riesgo de ataques informáticos.

**Compatibilidad con métodos de autenticación tradicionales**

Los métodos de autenticación tradicionales, como el uso de un nombre de usuario y contraseña, se mantendrán hasta el **31/12/2024**. A partir de esa fecha, se requerirá el uso de 2FA y/o Keycloak para acceder a ADempiere Cloud.

**Disclaimer**

El uso de las nuevas funcionalidades de seguridad es opcional. Sin embargo, le recomendamos encarecidamente que las utilice para proteger mejor sus datos y su infraestructura. Si decide no utilizar estas funcionalidades, será responsable de los riesgos de seguridad que puedan surgir. 

### Para más información 

Para obtener más información sobre las mejoras de seguridad en ADempiere Cloud, consulte la siguiente documentación:

- Documentación de ADempiere Cloud: https://docs.adeos.business/

**Recursos adicionales**:

- https://support.microsoft.com/es-es/topic/qu%C3%A9-es-autenticaci%C3%B3n-multifactor-e5e39437-121c-be60-d123-eda06bddf661
- https://www.keycloak.org/: https://www.keycloak.org/
- https://www.cloudflare.com/es-es/learning/ssl/what-is-https/:
- https://es.wikipedia.org/wiki/HTTPS 

**Nota**: Este documento es una guía general y no sustituye la necesidad de realizar una evaluación de riesgos específica para cada organización.

### Contacto

Si tiene alguna pregunta sobre las mejoras de seguridad en ADempiere Cloud, no dude en contactarnos a través de nuestro **Soporte ADempiere ERP**

### Detalles

- Esto se encuentra disponible a partir de la versión: [erpya-3.9.4-001-1.3.4](https://docs.adeos.business/downloads/updates/adempiere-3.9.4/erpya-3.9.4-001-1.3.x/erpya-3.9.4-001-1.3.4.html#novedades)

- Para realizar las debidas configuraciones puede ver los siguientes artículos:

  - [Acceso Seguro con Keycloak](https://docs.adeos.business/docs/basic-rules/login-keycloak.html)
  - [Keycloak 2FA](https://docs.adeos.business/docs/basic-rules/login-2fa.html)
