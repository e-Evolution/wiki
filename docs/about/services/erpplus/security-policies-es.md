---
title: Políticas de Seguridad - ERP+ Mobile App
category: Producto
star: 9
tag:
  - Servicios
  - Producto
  - Seguridad
  - ERP+

article: false
---

# Políticas de Seguridad - ERP+ Mobile App

---

## 1. Política de Autenticación y Autorización

### 1.1 Control de Acceso
- Solo usuarios autorizados con permisos específicos pueden acceder a las funcionalidades de marcaje
- Los permisos se validan en tiempo real contra el servidor ADempiere
- Acceso diferenciado según roles: Administrador, Supervisor, Operador

---

## 2. Protección de Datos Biométricos

### 2.1 Almacenamiento de Huellas Dactilares
- Las huellas dactilares se almacenan únicamente en el dispositivo de marcaje
- No se transmiten ni almacenan huellas dactilares en el servidor
- Solo se transmiten identificadores únicos y resultados de verificación
- Los datos biométricos se encriptan localmente en el dispositivo

### 2.2 Transmisión de Datos
- Todas las comunicaciones entre la app móvil y el servidor utilizan HTTPS/TLS 1.3
- Los datos sensibles se encriptan en tránsito usando algoritmos AES-256
- Certificados SSL válidos y actualizados en todas las comunicaciones

---

## 3. Gestión de Comandos y Operaciones

### 3.1 Comandos Autorizados
- **Enviar Empleado**: Solo usuarios con permisos de administración
- **Leer Huellas**: Operación de solo lectura, sin modificación de datos
- **Borrar Empleados**: Requiere confirmación y registro de auditoría
- **Limpiar Registros**: Solo administradores del sistema

### 3.2 Registro de Auditoría
- Todas las operaciones se registran con timestamp y usuario
- Logs de auditoría se almacenan por un mínimo de 2 años
- Acceso a logs restringido a administradores del sistema

---

## 4. Protección de Información de Empleados

### 4.1 Datos Personales
- Cumplimiento con leyes de protección de datos personales
- Información de empleados accesible solo a personal autorizado
- Contratos de empleados protegidos con encriptación adicional
- Acceso a información personal limitado por necesidad de conocimiento

### 4.2 Almacenamiento Local
- Datos sensibles no se almacenan permanentemente en el dispositivo
- Cache temporal se limpia automáticamente al cerrar sesión
- Información de empleados se descarga bajo demanda

---

## 5. Seguridad del Dispositivo

### 5.1 Requisitos del Dispositivo
- Sistema operativo actualizado (Android 8.0+ / iOS 12+)
- Aplicación instalada desde tiendas oficiales únicamente
- Dispositivo no rooteado/jailbreak
- Antivirus activo recomendado

### 5.2 Protección de la Aplicación
- Código ofuscado para prevenir ingeniería inversa
- Detección de dispositivos comprometidos
- Bloqueo automático tras múltiples intentos fallidos de acceso
- Capacidad de borrado remoto en caso de pérdida del dispositivo

---

## 6. Monitoreo y Respuesta a Incidentes

### 6.1 Monitoreo Continuo
- Monitoreo 24/7 de accesos y operaciones
- Alertas automáticas para actividades sospechosas
- Análisis de patrones de uso para detectar anomalías

### 6.2 Respuesta a Incidentes
- Protocolo de respuesta inmediata a incidentes de seguridad
- Notificación a usuarios afectados en caso de brecha de datos
- Procedimientos de recuperación y restauración de servicios
- Análisis post-incidente y mejora de medidas de seguridad

---

## 7. Cumplimiento Legal

### 7.1 Normativas Aplicables
- Cumplimiento con leyes de protección de datos locales
- Regulaciones de seguridad de la información
- Estándares de la industria para aplicaciones móviles empresariales

### 7.2 Certificaciones
- Auditorías de seguridad regulares
- Certificaciones de cumplimiento según industria
- Evaluaciones de vulnerabilidades periódicas

---

## 8. Contacto de Seguridad

Para reportar incidentes de seguridad o consultas relacionadas con la seguridad de la aplicación ERP+:

**Email**: info@adeos.business
**Teléfono**: +58 414-5697183
**Horario**: Lunes a Viernes 08:00 - 17:00 (GMT-4) 