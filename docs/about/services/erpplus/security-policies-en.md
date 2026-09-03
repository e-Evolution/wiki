---
title: Security Policies - ERP+ Mobile App
category: Producto
star: 9
tag:
  - Servicios
  - Producto
  - Seguridad
  - ERP+

article: false
---

# Security Policies - ERP+ Mobile App

---

## 1. Authentication and Authorization Policy

### 1.1 Access Control
- Only authorized users with specific permissions can access time tracking features
- Permissions are validated in real-time against ADempiere server
- Differentiated access according to roles: Administrator, Supervisor, Operator

---

## 2. Biometric Data Protection

### 2.1 Fingerprint Storage
- Fingerprints are stored only on the time tracking device
- Fingerprints are not transmitted or stored on the server
- Only unique identifiers and verification results are transmitted
- Biometric data is locally encrypted on the device

### 2.2 Data Transmission
- All communications between mobile app and server use HTTPS/TLS 1.3
- Sensitive data is encrypted in transit using AES-256 algorithms
- Valid and updated SSL certificates in all communications

---

## 3. Command and Operations Management

### 3.1 Authorized Commands
- **Send Employee**: Only users with administration permissions
- **Read Fingerprints**: Read-only operation, no data modification
- **Delete Employees**: Requires confirmation and audit logging
- **Clear Records**: System administrators only

### 3.2 Audit Logging
- All operations are logged with timestamp and user
- Audit logs are stored for a minimum of 2 years
- Log access restricted to system administrators

---

## 4. Employee Information Protection

### 4.1 Personal Data
- Compliance with personal data protection laws
- Employee information accessible only to authorized personnel
- Employee contracts protected with additional encryption
- Access to personal information limited by need-to-know basis

### 4.2 Local Storage
- Sensitive data is not permanently stored on the device
- Temporary cache is automatically cleared when closing session
- Employee information is downloaded on-demand

---

## 5. Device Security

### 5.1 Device Requirements
- Updated operating system (Android 8.0+ / iOS 12+)
- Application installed from official stores only
- Device not rooted/jailbroken
- Active antivirus recommended

### 5.2 Application Protection
- Obfuscated code to prevent reverse engineering
- Detection of compromised devices
- Automatic lockout after multiple failed access attempts
- Remote wipe capability in case of device loss

---

## 6. Monitoring and Incident Response

### 6.1 Continuous Monitoring
- 24/7 monitoring of access and operations
- Automatic alerts for suspicious activities
- Usage pattern analysis to detect anomalies

### 6.2 Incident Response
- Immediate response protocol for security incidents
- Notification to affected users in case of data breach
- Recovery and service restoration procedures
- Post-incident analysis and security measure improvement

---

## 7. Legal Compliance

### 7.1 Applicable Regulations
- Compliance with local data protection laws
- Information security regulations
- Industry standards for enterprise mobile applications

### 7.2 Certifications
- Regular security audits
- Industry compliance certifications
- Periodic vulnerability assessments

---

## 8. Security Contact

To report security incidents or queries related to ERP+ application security:

**Email**: info@erpya.com
**Phone**: +58 414-5697183
**Hours**: Monday to Friday 08:00 - 17:00 (GMT-4) 