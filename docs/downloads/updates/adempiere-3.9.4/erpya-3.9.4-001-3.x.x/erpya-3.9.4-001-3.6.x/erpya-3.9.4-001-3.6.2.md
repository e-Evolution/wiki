---
title: erpya-3.9.4-001-3.6.2
category: Actualizaciones
star: 9
tag:
  - "Actualizaciones"
  - "Versiones"
  - "erpya-3.9.4-001-3.6.2"
  - "2025-12-16"
  - "Noticias"
article: true
---

**Fecha de Liberación:** 2025-12-16

## Novedades

- **Migración JDK 11 → JDK 17 (LTS)**

## Contexto

### 🔄 Componentes Actualizados

| Componente | Antes | Ahora | Motivo |
|----------|------|-------|-------|
| Java (JDK) | 11 (LTS) | **17 (LTS)** | Soporte a largo plazo, seguridad y rendimiento |
| Servidor App | Jetty 10 / variado | **Tomcat 9 / Jetty 9.4** | Compatibilidad `javax` |
| JasperReports | Versiones previas | **6.20.6** | Compatibilidad Java 17 |
| Motor PDF (Jasper) | iText legacy | **OpenPDF (Jaspersoft)** | Licencia y compatibilidad |
| Motor PDF (Adempiere) | iText embebido | **iText 5.5.13.3** | Soporte reportes clásicos |
| REST Client | javax.ws.rs | **jakarta.ws.rs** | Eliminación Java EE del JDK |
| JSON (Jackson) | Versiones mixtas | **2.19.x** | Estabilidad y fixes |
| Build Tooling | Gradle antiguo | **Gradle 7+** | Soporte Java 17 |

---

### 🚀 Mejoras Obtenidas

| Área | Mejora |
|----|-------|
| Rendimiento | Mejor GC (G1), menor latencia y mejor uso de memoria |
| Estabilidad | Classloading más estricto y menos errores silenciosos |
| Seguridad | Parches de seguridad actualizados |
| Mantenibilidad | Dependencias alineadas y explícitas |
| Compatibilidad | Base preparada para Java 21 |
| Operación | Mejor comportamiento en Docker y servidores modernos |

📈 **Mejora estimada de rendimiento:** 5–15% en carga real (ERP).

---

### ⚠️ Cambios Técnicos Relevantes

| Cambio | Impacto |
|------|--------|
| Eliminación Java EE del JDK | Dependencias `javax` deben declararse |
| Jakarta EE | No compatible binariamente con `javax` |
| PDF Engines | Separación estricta iText / OpenPDF |
| Classloader | Más estricto en Java 17 |

---

## Requerimientos

- No se requieren procesos adicionales por aplicar.
