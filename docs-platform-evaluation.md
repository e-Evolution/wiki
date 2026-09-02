# Informe de evaluación de plataforma documental para un sistema ERP

> **Estado:** Recomendación arquitectónica  
> **Fecha de evaluación:** 2026-09-02  
> **Proyecto:** Wiki ERP  
> **Sitio de referencia:** [Documentación ERPya](https://docs.erpya.com/docs/)  
> **Objetivo:** seleccionar una solución open source, Markdown/Git-first, preparada para usuarios humanos, contribuidores y agentes AI operados mediante Pi.

## Resumen ejecutivo

La evaluación concluye que **no existe actualmente una aplicación open source, madura y única que cubra de forma nativa todos los requisitos del proyecto**.

Las plataformas disponibles se dividen en dos familias:

1. Las plataformas con edición visual, comentarios y colaboración madura utilizan una base de datos como fuente principal del contenido.
2. Las plataformas que conservan Markdown dentro de Git como fuente de verdad necesitan componentes externos para edición visual, revisión, comentarios o atribución.

Además, existen dos capacidades específicas del proyecto que requieren desarrollo propio con independencia de la plataforma seleccionada:

- La extracción determinista de ayuda desde el Application Dictionary del ERP.
- La automatización de capturas de pantalla mediante Pi, Chrome DevTools o Playwright.

La recomendación es implementar una **plataforma compuesta alrededor de una única autoridad Git**, en lugar de delegar la autoridad del contenido a un CMS o wiki con almacenamiento interno.

### Recomendación principal

| Necesidad | Componente recomendado |
| --- | --- |
| Publicación documental | Astro Starlight o Docusaurus |
| Fuente canónica | Markdown en Git |
| Editor web | Sveltia CMS o Decap CMS |
| Revisión | Pull/Merge Requests |
| Preview definitivo | Deploy preview generado por CI |
| Búsqueda local | Pagefind, o búsqueda compatible con Docusaurus |
| Comentarios públicos | Remark42 |
| Referencias del ERP | Generador específico del Application Dictionary |
| Capturas automatizadas | Pi + Playwright/CDP |
| Atribución | Ledger versionado por documento y contribución |
| Consumo por agentes | Markdown raw, `llms.txt` e índices JSON versionados |

Si la documentación debe publicar varias versiones simultáneas del ERP, se recomienda **Docusaurus**. Si sólo se mantiene una versión vigente, se recomienda **Astro Starlight** por su menor complejidad y su búsqueda local con Pagefind.

---

## 1. Alcance y requisitos

### 1.1 Requisitos funcionales

La plataforma debe permitir:

- Publicar manuales funcionales para un sistema ERP.
- Manejar una cantidad significativa de imágenes y capturas de pantalla.
- Organizar la documentación mediante navegación jerárquica, índice y búsqueda.
- Mantener procedimientos, casos de uso, ejemplos y solución de problemas.
- Publicar documentación técnica con bloques de código y ejemplos verificables.
- Recibir comentarios y aportes de la comunidad.
- Permitir que editores no técnicos modifiquen contenido desde un navegador.
- Mostrar un preview de la documentación antes de publicarla.
- Revisar y aprobar cambios antes de incorporarlos.
- Dar crédito visible a toda persona cuya mejora sea aceptada.

### 1.2 Requisitos de arquitectura

- Markdown debe ser el formato canónico.
- Git debe ser la fuente de verdad y el registro de cambios.
- No debe existir sincronización bidireccional ambigua entre Git y una base de datos editorial.
- La publicación debe poder autohospedarse.
- Los componentes principales deben usar licencias open source verificables.
- Los archivos deben seguir siendo utilizables si se reemplaza el generador del sitio.
- Los agentes AI deben poder leer el contenido sin depender del DOM renderizado.

### 1.3 Requisitos de integración

- Extraer ayuda desde el Application Dictionary de ADempiere o sistemas compatibles.
- Conservar IDs, versión, idioma, procedencia y hash del registro fuente.
- Separar contenido generado de contenido redactado por personas.
- Automatizar capturas mediante Pi y un navegador controlable.
- Generar cambios automáticos como PR/MR revisables, nunca como publicación directa.

### 1.4 Requisitos de gobernanza

- Ningún editor o agente debe publicar directamente en la rama protegida.
- Toda modificación debe pasar por controles automáticos y revisión.
- Los comentarios no deben convertirse automáticamente en documentación.
- Debe registrarse el autor original de un caso de uso o mejora promovida desde un comentario.
- Los cambios generados por agentes deben distinguirse de las contribuciones humanas.

---

## 2. Metodología de evaluación

La investigación combinó:

1. Scraping acotado del sitio ERPya mediante navegador real y Chrome DevTools.
2. Inspección del HTML renderizado, sitemap, imágenes y metadatos.
3. Inspección del repositorio público [`erpcya/docs`](https://github.com/erpcya/docs).
4. Revisión de documentación y repositorios oficiales de más de veinte plataformas.
5. Clasificación de capacidades según el siguiente criterio:

| Código | Significado |
| --- | --- |
| N | Capacidad nativa en el producto principal |
| O | Integración o extensión oficial |
| M | Componente comunitario mantenido |
| C | Desarrollo propio requerido |
| P | Dependencia de servicio propietario |
| — | Ausente o incompatible con el requisito |

Una plataforma sólo se considera una solución completa si satisface los requisitos obligatorios mediante capacidades nativas u oficiales open source. Una función que requiere desarrollo propio no se cuenta como cobertura completa.

---

## 3. Auditoría del sitio ERPya

### 3.1 Stack identificado

El sitio utiliza:

- VuePress `2.0.0-beta.68`.
- VuePress Theme Hope `2.0.0-beta.252`.
- Vue 3.
- Contenido Markdown almacenado en Git.
- Plugin de búsqueda de VuePress.
- Waline como proveedor declarado para comentarios.
- Plugins para feeds, PWA, imágenes y Markdown enriquecido.

Fuentes verificadas:

- [`package.json`](https://github.com/erpcya/docs/blob/main/package.json)
- [`src/.vuepress/theme.ts`](https://github.com/erpcya/docs/blob/main/src/.vuepress/theme.ts)
- [`src/.vuepress/config.ts`](https://github.com/erpcya/docs/blob/main/src/.vuepress/config.ts)

### 3.2 Resultados del scraping de prueba

| Evidencia | Resultado |
| --- | ---: |
| URLs totales en el sitemap | 1.284 |
| URLs bajo `/docs/` | 344 |
| Páginas representativas analizadas | 8 |
| Imágenes encontradas en la muestra | 364 |
| Imágenes en `Socio del Negocio` | 309 |
| Texto aproximado en esa página | 97.000 caracteres |
| Tamaño del HTML de esa página | 231.939 bytes |
| Encabezados H1-H3 | 29 |
| Bloques tipo código | 6 |
| Imágenes en `Interfaz de Usuario` | 20 |
| Imágenes rotas en esa página | 0 |
| Imágenes sin texto alternativo | 0 |

Páginas representativas:

- `/docs/`
- `/docs/basic-rules/user-interface.html`
- `/docs/basic-rules/login.html`
- `/docs/master-data/business-partner.html`
- `/docs/data-importation/adempiere-importer-tool.html`
- `/docs/material-management/material-management-reports.html`
- `/docs/lve/procedures/payroll/procedure-to-process-payroll/mixed-biweekly-payroll.html`
- `/docs/devices/record-weight/`

### 3.3 Fortalezas observadas

- Sidebar jerárquico.
- Tabla de contenidos.
- Enlaces profundos a encabezados.
- Enlace para editar cada página en GitHub.
- Información de última actualización.
- Lista visible de contribuidores.
- Imágenes con texto alternativo.
- Lazy loading de imágenes.
- Feeds y sitemap.
- Búsqueda integrada.
- Markdown almacenado en Git.

### 3.4 Problemas identificados

#### Páginas monolíticas

Una página con 309 imágenes y aproximadamente 97.000 caracteres presenta problemas para:

- Lectura humana.
- Navegación móvil.
- Rendimiento.
- Indexación.
- Edición colaborativa.
- Contexto de agentes AI.
- Automatización de capturas.
- Revisión de cambios.

La documentación debe dividirse por intención o tarea, no por una ventana completa del ERP.

#### Comentarios no configurados

La configuración declara:

```ts
comment: {
  provider: "Waline",
  serverURL: "https://<to-be-defined>",
}
```

La interfaz de comentarios aparece, pero no existe un servidor productivo configurado en el repositorio.

#### Editor insuficiente

El enlace de edición abre el archivo Markdown en GitHub. Esto no proporciona:

- Preview fiel del sitio.
- Gestión editorial.
- Estado de borrador.
- Flujo de aprobación.
- Control estructurado de frontmatter.
- Validación visual de imágenes.

#### Dominio canónico inconsistente

El sitio observado utiliza `docs.erpya.com`, mientras que la configuración, sitemap, robots y feeds apuntan a `docs-md.erpya.com`. No se encontraron enlaces `canonical` en las páginas inspeccionadas.

#### Salidas AI incompletas

La ruta `/llms.txt` devuelve una página HTML 404, no un índice para agentes.

#### Licenciamiento ambiguo

El archivo `LICENSE` actual acredita a MrHope y parece provenir del tema original. No establece claramente:

- Licencia del contenido ERP.
- Licencia de capturas.
- Licencia de ejemplos de código.
- Condiciones para contribuciones comunitarias.
- Reglas de atribución.

---

## 4. Implicaciones de documentar un ERP

La documentación de un ERP no debe modelarse como una colección plana de páginas.

### 4.1 Tipos de contenido

| Tipo | Propósito | Fuente principal |
| --- | --- | --- |
| Manual funcional | Enseñar una tarea de negocio | Redacción humana |
| Referencia de ventana | Describir estructura y campos | Application Dictionary |
| Caso de uso | Mostrar escenarios reales | Comunidad y consultores |
| Solución de problemas | Diagnosticar síntomas y errores | Soporte y comunidad |
| Documentación técnica | Explicar arquitectura y extensiones | Equipo de desarrollo |
| Ejemplo de código | Demostrar integraciones | Archivos verificables |
| Captura | Evidencia visual de una versión | Automatización controlada |
| Nota de versión | Explicar cambios por release | Proceso de release |

### 4.2 Principio de separación

```text
Reference generated from ERP != Human-authored manual
```

La ayuda generada desde el ERP debe conservarse en rutas de sólo generación. Los manuales deben referenciarla o anotarla, pero no copiarla y editarla manualmente.

### 4.3 División de contenido extenso

Una entidad como “Socio del Negocio” debería organizarse así:

```text
Business Partner
├── Overview
├── Create a business partner
├── Customer configuration
├── Vendor configuration
├── Locations
├── Contacts
├── Bank accounts
├── Credit management
├── Tax configuration
├── Validation messages
└── Troubleshooting
```

El objetivo inicial debe ser mantener cada página enfocada en una tarea y limitar el número de capturas a un conjunto revisable. El umbral definitivo debe establecerse durante el prototipo.

---

## 5. Panorama de plataformas evaluadas

### 5.1 Wikis y CMS con base de datos

- Wiki.js
- XWiki
- BookStack
- Docmost
- Payload CMS
- Vrite

Fortaleza común:

- Edición visual.
- Usuarios y permisos.
- Historial.
- Comentarios o colaboración.
- Gestión de imágenes.

Debilidad decisiva:

- La base de datos es la autoridad del contenido.
- Git se usa como exportación, sincronización o backup.
- Un PR no representa necesariamente el estado transaccional publicado.

### 5.2 Wikis y CMS basados en archivos o Git

- Gollum
- Gitit
- Ikiwiki
- Grav
- DokuWiki
- SilverBullet

Fortaleza común:

- Contenido legible fuera de la aplicación.
- Mejor alineación con archivos y control de cambios.

Debilidad común:

- Flujo editorial insuficiente.
- Comentarios y aprobación mediante plugins o desarrollo propio.
- Versionado documental e i18n limitados.
- Experiencia editorial menos madura.

### 5.3 CMS Git-first modernos

- Nuxt Studio
- TinaCMS
- Sveltia CMS
- Decap CMS
- Keystatic
- Pages CMS
- Front Matter CMS

Fortaleza común:

- Markdown o MDX en Git.
- Editor amigable.
- Gestión de media.

Debilidad común:

- No incluyen por sí mismos el portal, comentarios, gobernanza y versionado.
- Algunas funciones colaborativas dependen de servicios propietarios.

### 5.4 Generadores y portales documentales

- Astro Starlight
- Docusaurus
- Fumadocs
- VitePress
- Zensical
- Read the Docs Community
- Backstage TechDocs
- Antora
- Sphinx/MyST
- MkDocs

Fortaleza común:

- Publicación, navegación, búsqueda y código.
- Fuente Markdown/Git.

Debilidad común:

- Carecen de editor y workflow editorial integrados.
- Comentarios, atribución y outputs AI requieren componentes adicionales.

### 5.5 Proyectos emergentes integrados

- Osnova
- InkLoom
- markupmarkdown
- Kherad
- editorzero
- 0docs

Estos proyectos intentan cerrar la brecha entre Git, edición visual, revisión y agentes, pero presentan riesgos significativos de madurez, comunidad o arquitectura.

---

## 6. Matriz comparativa consolidada

| Plataforma | Licencia declarada | Markdown canónico en Git | Editor visual | Review/aprobación | Comentarios | Portal público | Versiones/i18n | Agentes | Madurez | Veredicto |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| Wiki.js | AGPL-3.0 | — | N | — | O | N | Parcial | API | Alta | Git no es autoridad |
| XWiki | LGPL-2.1 | — | N | M | N | N | Parcial | REST | Alta | Base de datos canónica |
| BookStack | MIT | — | N | — | N | N | — | API/export | Alta | Sin Git ni workflow |
| Docmost | AGPL-3.0 core | — | N | Parcial | N | N | — | Export | Media | Base de datos canónica |
| Gollum | MIT | N | Básico | — | — | Básico | — | Raw Markdown | Alta | Gobernanza insuficiente |
| Grav | MIT | N/externo | O | — | M | N | Parcial | Archivos | Alta | Requiere plugins y Git externo |
| Nuxt Studio | MIT | N | N | Futuro | — | O | Parcial | Extensible | Media-alta | Mejor editor integrado, sin PR |
| TinaCMS | Apache-2.0 | N | N | P | — | Requiere sitio | Parcial | API | Alta | Workflow completo depende de cloud |
| Sveltia CMS | MIT | N | N | N con GitHub/GitLab | — | Requiere sitio | Parcial | Extensible | Media | Excelente capa editorial |
| Decap CMS | MIT | N | N | N con GitHub/GitLab | — | Requiere sitio | Parcial | Extensible | Alta | Capa editorial madura |
| Osnova | MIT | N | N | N | N | — | — | AI review | Muy baja | Candidato más cercano |
| InkLoom | Apache-2.0 | — | N | N | N interno | N | N/parcial | `llms.txt` | Muy baja | Completo, pero D1/R2 canónico |
| markupmarkdown | MIT | Parcial | N | N | N | — | — | MCP nativo | Muy baja | Revisor, no portal ERP |
| Starlight | MIT | N | — | Externo | M | N | i18n N/versiones C | M/C | Alta | Mejor base simple |
| Docusaurus | MIT | N | — | Externo | M | N | N | M/C | Alta | Mejor para versiones ERP |
| Fumadocs | MIT | N/MDX | — | Externo | C | N | Parcial | Fuerte | Media | Mayor complejidad Next.js |
| Zensical | MIT | N | — | Externo | C | N | Emergente | C | Baja-media | No adoptar aún |

> Las licencias y límites de edición open-core deben verificarse contra la versión exacta antes de adoptar una plataforma.

---

## 7. Evaluación detallada de candidatos cercanos

### 7.1 Wiki.js

#### Capacidades

- Editor Markdown y editor visual.
- Imágenes y assets.
- Navegación y búsqueda.
- Historial y rollback.
- Autenticación y permisos.
- Módulo oficial de almacenamiento Git.

#### Brecha decisiva

La documentación oficial describe un flujo donde el contenido se guarda en la base de datos y posteriormente se sincroniza con Git. Los commits se sincronizan periódicamente y existen acciones para exportar contenido no rastreado desde la base hacia el repositorio.

Esto convierte Git en réplica, no en la autoridad transaccional única.

#### Veredicto

No recomendado para una arquitectura AI-first donde PR, fuente Markdown y estado publicado deben coincidir exactamente.

### 7.2 XWiki

#### Capacidades

- WYSIWYG maduro.
- Comentarios.
- Versiones y diffs.
- Traducciones.
- REST API.
- Extensiones de publicación.

#### Brecha decisiva

Los documentos y objetos estructurados viven en base de datos. Markdown es formato importable/renderizable, no fuente canónica en Git.

#### Veredicto

Excelente plataforma colaborativa, incompatible con el requisito central de almacenamiento.

### 7.3 BookStack

#### Capacidades

- Editor visual y Markdown.
- Estructura de estantes, libros, capítulos y páginas.
- Comentarios.
- Historial.
- API y exportación.

#### Brechas

- Base de datos canónica.
- Sin workflow formal de aprobación.
- Sin versiones públicas del producto.
- Git requiere scripts o integración externa.

#### Veredicto

Adecuado para conocimiento interno, no para docs-as-code ERP.

### 7.4 Gollum

#### Capacidades

- Repositorio Git como almacenamiento real.
- Markdown.
- Editor web.
- Preview e historial.
- Imágenes y código.

#### Brechas

- Sin draft-review-approval.
- Sin comentarios públicos modernos.
- Sin i18n/versionado documental.
- Navegación menos controlada.
- Sin atribución pública por mejora.

#### Veredicto

Es la alternativa clásica más cercana al almacenamiento requerido, pero insuficiente en gobernanza.

### 7.5 Nuxt Content + Nuxt Studio

#### Capacidades verificadas

- TipTap visual.
- Monaco Markdown/MDC.
- Formularios desde esquemas.
- Preview en tiempo real sobre producción.
- Gestión de imágenes.
- OAuth GitHub/GitLab/Google y autenticación personalizada.
- Commits directos a Git.
- Licencia MIT y self-hosting.

#### Brecha decisiva

El roadmap declara como futuro:

- Generación de pull requests.
- Resolución avanzada de conflictos.
- Optimización de media.

No incorpora comentarios editoriales ni aprobación.

#### Veredicto

Es el mejor editor visual integrado con un sitio moderno, pero todavía no debe tener autoridad para escribir directamente en la rama principal.

### 7.6 TinaCMS

#### Capacidades

- Markdown/MDX/JSON como fuente principal.
- Edición visual contextual.
- Esquemas y media.
- Backend self-hostable.
- Data layer con base utilizada como caché/índice.

#### Brecha decisiva

El Editorial Workflow completo con ramas, draft PR, merge y previews corresponde a TinaCloud en planes seleccionados. Self-hosting no tiene paridad total en búsqueda y media Git.

#### Veredicto

Buen editor, pero una adopción completamente open source necesitaría reconstruir parte del workflow.

### 7.7 Osnova

[Repositorio oficial](https://github.com/hycomsa/osnova)

#### Capacidades

- Markdown y assets en Git como fuente única.
- WYSIWYG y Markdown raw.
- Carga de imágenes y adjuntos.
- Árbol y búsqueda de texto completo.
- Comentarios inline y por documento.
- Menciones, reacciones y presencia.
- Aprobación y rechazo.
- Historial, diff, blame y restauración.
- Resolución guiada de conflictos.
- Frontmatter estructurado.
- AI para incorporar comentarios aceptados.
- Licencia MIT.

#### Evidencia de inmadurez

Su `package.json` declara:

```json
{
  "version": "0.1.0",
  "description": "git-native collaboration platform (walking skeleton)"
}
```

#### Brechas

- Sin publicación estática pública.
- Sin acceso público/anónimo documentado.
- Sin versiones públicas del ERP.
- Sin `llms.txt` o exportación normalizada.
- Sin contribución pública mediante fork/PR.
- Comunidad extremadamente pequeña.
- Sin evidencia independiente de operación productiva.

#### Veredicto

Es el candidato conceptual más alineado y debe mantenerse en observación. Puede evaluarse como cockpit editorial experimental, pero no como fundamento productivo actual.

### 7.8 InkLoom

[Repositorio oficial](https://github.com/inkloom-io/inkloom)

#### Capacidades

- Editor visual por bloques.
- Imágenes, código, tabs, callouts y OpenAPI.
- Ramas, merge requests y conflictos.
- Comentarios inline.
- Generación estática.
- i18n.
- Sitemap, robots y `llms.txt`.
- Licencia Apache-2.0.

#### Brechas decisivas

- Fuente transaccional en Cloudflare D1/R2.
- MDX se intercambia mediante `push/pull`.
- GitHub Sync aparece asociado a la oferta Cloud.
- Sin autenticación multiusuario en el core descrito.
- Atribución pública no resuelta.
- Proyecto extremadamente pequeño y en desarrollo activo.

#### Veredicto

Es el prototipo “todo en uno” más completo, pero su modelo de almacenamiento y madurez contradicen los requisitos de gobernanza.

### 7.9 markupmarkdown

[Repositorio oficial](https://github.com/jonradoff/markupmarkdown)

#### Capacidades

- Comentarios anclados a texto Markdown.
- Edición Markdown con preview.
- Estados de review.
- Sugerencias aplicables.
- Sincronización con cambios upstream.
- Creación de PR en GitHub.
- MCP server y herramientas para agentes.
- Aprobación humana obligatoria para revisiones de agentes.
- Licencia MIT.

#### Brechas

- Mantiene copias de trabajo y comentarios en MongoDB.
- No es un CMS de imágenes para manuales extensos.
- No genera un portal documental ERP.
- No ofrece i18n/versiones del producto.
- No sustituye búsqueda, navegación y publicación.

#### Veredicto

Es una referencia importante para revisión humana+agente, no una plataforma de publicación completa.

---

## 8. Razones por las que no existe una única solución completa

### 8.1 La extracción ERP es específica del dominio

Una herramienta genérica no conoce:

- Relaciones entre ventanas, pestañas y campos.
- Precedencia entre `AD_Field`, `AD_Column` y `AD_Element`.
- Reglas de traducción `_Trl`.
- Scope por Client/Organization.
- Diferencias entre versiones y localizaciones.
- Qué metadata puede publicarse sin exponer datos del cliente.

### 8.2 Las capturas dependen del ERP concreto

La plataforma no puede determinar por sí sola:

- Cómo autenticarse.
- Qué fixture usar.
- Qué ventana y registro abrir.
- Cuándo la UI está estable.
- Qué información ocultar.
- Qué viewport, idioma o tema utilizar.
- Qué captura corresponde con qué documento.

### 8.3 El crédito no se deriva correctamente sólo desde Git

Git conserva autores, pero:

- Un CMS puede usar identidad de bot.
- Un squash puede reducir múltiples autores a un commit.
- Un comentario promovido tiene autor diferente del editor.
- La metadata del forge puede perderse al migrar.
- Los autores Git no aparecen automáticamente en el portal.

Se necesita un registro de contribuciones propio.

---

## 9. Arquitectura recomendada

### 9.1 Vista general

```text
Application Dictionary export
        │
        ▼
Normalizer + sanitizer
        │
        ├── reference/generated/
        └── data/source-manifest.json

Human editors
        │
        ├── manuals/
        ├── use-cases/
        ├── troubleshooting/
        └── technical/

Pi + Playwright/CDP
        │
        ├── automation/screenshot-recipes/
        └── assets/screenshots/

All changes
        │
        ▼
Pull/Merge Request
        │
        ├── validation
        ├── contributor ledger
        ├── image checks
        ├── link checks
        ├── code example tests
        └── deploy preview
        │
        ▼
Static documentation build
        │
        ├── public HTML
        ├── local search index
        ├── raw Markdown routes
        ├── llms indexes
        ├── content-index.json
        ├── image-manifest.json
        └── contributions.json
```

### 9.2 Configuración para una sola versión vigente

- Astro Starlight.
- Pagefind.
- Sveltia o Decap.
- Remark42.
- GitLab CE, Forgejo o GitHub.
- CI para previews.

### 9.3 Configuración para múltiples versiones ERP

- Docusaurus.
- Sveltia o Decap.
- Remark42.
- GitLab CE o GitHub.
- CI para previews y versiones.

Docusaurus se recomienda cuando los usuarios necesitan consultar simultáneamente documentación de distintas versiones o localizaciones del ERP.

---

## 10. Modelo de repositorio

```text
content/
├── manuals/
├── use-cases/
├── troubleshooting/
├── technical/
├── release-notes/
└── reference/
    ├── generated/
    └── annotations/

assets/
├── screenshots/
├── diagrams/
└── attachments/

examples/
├── java/
├── scala/
├── sql/
└── api/

automation/
└── screenshot-recipes/

data/
├── contributions.jsonl
├── source-manifest.json
├── content-index.json
└── image-manifest.json
```

### 10.1 Reglas de propiedad

| Ruta | Autoridad | Edición CMS |
| --- | --- | ---: |
| `content/reference/generated/` | Generador ERP | No |
| `content/reference/annotations/` | Editores humanos | Sí |
| `content/manuals/` | Editores humanos | Sí |
| `content/use-cases/` | Comunidad revisada | Sí |
| `content/technical/` | Equipo técnico | Preferiblemente Git/IDE |
| `examples/` | Código verificable | No desde CMS |
| `assets/screenshots/` | Pipeline de capturas | Carga manual controlada |
| `data/contributions.jsonl` | CI/maintainers | No |

---

## 11. Extracción desde el Application Dictionary

### 11.1 Tablas candidatas

- `AD_Menu`
- `AD_Window`
- `AD_Tab`
- `AD_Field`
- `AD_Process`
- `AD_Process_Para`
- `AD_Form`
- `AD_Element`
- `AD_Message`
- `AD_Reference`
- `AD_Ref_List`
- `AD_Workflow`
- `AD_WF_Node`
- Tablas de traducción `_Trl`

La disponibilidad exacta de columnas y UUID debe verificarse contra la versión concreta del ERP.

### 11.2 Identidad de fragmentos

```text
product
+ product version
+ source table
+ source ID or UUID
+ locale
+ client
+ organization
```

### 11.3 Metadata recomendada

```yaml
schema: adempiere-doc-fragment/v1
source:
  product: ADempiere
  version: "product-version"
  table: AD_Window
  id: "123"
  uuid: "optional-uuid"
  locale: es
  clientId: "0"
  orgId: "0"
  sourceHash: "sha256:..."
  extractedAt: "timestamp"
content:
  name: "..."
  description: "..."
  helpMarkdown: "..."
```

### 11.4 Pipeline

1. Leer desde un snapshot o exportación consistente.
2. Usar una cuenta de sólo lectura.
3. Restringir tablas y columnas mediante allowlist.
4. Normalizar texto e identidad.
5. Sanitizar HTML y enlaces.
6. Detectar secretos y datos personales.
7. Calcular hashes canónicos.
8. Generar staging tree.
9. Comparar con el estado Git.
10. Crear PR con agregados, cambios y posibles huérfanos.
11. No eliminar un huérfano hasta confirmarlo en dos extracciones completas.

Una extracción fallida o parcial nunca debe convertirse en una eliminación masiva.

---

## 12. Automatización de imágenes con Pi

### 12.1 Principio

Pi debe orquestar automatización reproducible. No debe improvisar clics en producción y reemplazar imágenes directamente.

- Chrome DevTools: exploración y diagnóstico.
- Playwright: ejecución repetible.
- Pi: análisis, mantenimiento de recetas y apertura de PR.
- Persona revisora: aceptación final.

### 12.2 Receta de captura

```yaml
id: business-partner.customer-tab
route: /app/window/business-partner
windowId: "123"
tabId: "456"
locale: es
theme: light
viewport:
  width: 1440
  height: 900
fixture: documentation-demo
mask:
  - customer-name
  - tax-id
output: assets/screenshots/business-partner/customer-tab.png
```

### 12.3 Flujo

1. Preparar un tenant documental con datos ficticios.
2. Autenticar con un usuario dedicado.
3. Navegar mediante IDs o selectores semánticos.
4. Fijar versión, idioma, tema y viewport.
5. Esperar condiciones verificables.
6. Ocultar PII y valores dinámicos.
7. Capturar.
8. Optimizar durante el build.
9. Comparar antes/después.
10. Crear PR con evidencia visual.
11. Requerir aprobación humana.

### 12.4 Metadata de imagen

Cada captura debería registrar:

- ID estable.
- Documento consumidor.
- Receta.
- Versión del ERP.
- Idioma.
- Viewport.
- Hash.
- Fecha de generación.
- Estado de revisión.
- Texto alternativo.
- Caption.

---

## 13. Editor y flujo editorial

### 13.1 Dos carriles de edición

#### Contenido funcional

- CMS web.
- Formularios estructurados.
- Editor Markdown visual.
- Gestión de imágenes.
- Preview rápido.
- Pull/Merge Request automático.

#### Contenido técnico

- Git y editor de código.
- Snippets provenientes de archivos reales.
- Pruebas en CI.
- Revisión técnica.

### 13.2 Dos niveles de preview

1. Preview inmediato del CMS.
2. Deploy preview autoritativo construido por CI.

El segundo debe ser obligatorio. Sólo ese preview incluye el tema, plugins, rutas, imágenes optimizadas, búsqueda y configuración definitiva.

### 13.3 Estados

```text
Draft
→ In Review
→ Changes Requested
→ Ready
→ Merged
→ Published
```

Direct-to-main debe permanecer deshabilitado.

---

## 14. Comentarios y comunidad

### 14.1 Herramienta recomendada

Remark42 ofrece:

- Licencia MIT.
- Autohospedaje.
- Moderación.
- Markdown.
- Usuarios anónimos u OAuth configurable.
- Votos y discusiones.

### 14.2 Separación de canales

Cada página debería incluir:

- Discutir esta página.
- Reportar un error.
- Proponer una mejora.
- Agregar un caso de uso.
- Editar mediante CMS.

### 14.3 Promoción de comentarios

```text
Comment
→ triage
→ structured proposal
→ contributor consent
→ editorial change
→ pull request
→ review
→ publication with credit
```

Un comentario no debe copiarse a la documentación sin consentimiento y sin conservar el crédito de la persona autora.

---

## 15. Atribución y licenciamiento

### 15.1 Ledger de contribuciones

```json
{
  "documentId": "sales/business-partner/customer-tab",
  "contributor": {
    "id": "forge:user",
    "displayName": "Contributor name",
    "profileUrl": "https://..."
  },
  "change": "PR-143",
  "type": "use-case",
  "acceptedAt": "2026-09-02"
}
```

El portal debe mostrar:

- Contribuidores por página.
- Historial de mejoras.
- Tipo de contribución.
- Enlace al cambio aceptado.
- Página general de contribuidores.

CI debería bloquear cambios humanos en documentación cuando falte el registro de atribución correspondiente.

### 15.2 Licencias sugeridas

Sujeto a revisión legal:

| Material | Licencia propuesta |
| --- | --- |
| Documentación | CC BY-SA 4.0 |
| Código y snippets | Apache-2.0 o MIT |
| Herramientas del portal | MIT o Apache-2.0 |
| Contribuciones | DCO o aceptación explícita |
| Capturas | Política específica de producto y marcas |

Debe aclararse que los comentarios sólo pueden promoverse a documentación bajo condiciones de contribución explícitas.

---

## 16. Salidas para agentes AI

Pi y otros agentes no deberían depender de scrapear el sitio renderizado.

### 16.1 Artefactos

- `/llms.txt`
- `/llms/<module>.txt`
- `/docs/<path>.md`
- `/content-index.json`
- `/image-manifest.json`
- `/contributions.json`
- `/source-manifest.json`
- `/sitemap.xml`

### 16.2 Índice documental

```json
{
  "schemaVersion": "1.0",
  "documentId": "sales/order-entry",
  "kind": "manual",
  "locale": "es",
  "productVersion": "...",
  "title": "Order Entry",
  "sourcePath": "content/manuals/sales/order-entry.md",
  "canonicalUrl": "/es/sales/order-entry/",
  "markdownUrl": "/es/sales/order-entry.md",
  "headings": [],
  "images": [],
  "codeBlocks": [],
  "contributors": [],
  "generatedReferences": [],
  "sourceHash": "sha256:..."
}
```

No se recomienda un único `llms-full.txt` con todo el ERP. Las exportaciones deben dividirse por módulo, versión, idioma y tipo de contenido.

---

## 17. Documentación técnica y snippets

Los ejemplos técnicos no deberían copiarse como bloques sin verificar.

### Recomendación

```text
examples/
├── java/
├── scala/
├── sql/
└── api/
```

El generador documental debe incluir o renderizar esos archivos. CI debe:

- Compilar cuando corresponda.
- Ejecutar pruebas.
- Validar sintaxis.
- Comprobar compatibilidad con la versión documentada.
- Rechazar snippets desactualizados.

Cada bloque debe declarar lenguaje, versión y contexto.

---

## 18. Registro de riesgos

| Riesgo | Probabilidad | Impacto | Mitigación |
| --- | --- | --- | --- |
| Adoptar proyecto emergente sin comunidad | Alta | Alto | Usar componentes maduros; prototipo aislado |
| Sincronización DB ↔ Git divergente | Alta | Alto | Git como única autoridad |
| Página con cientos de imágenes | Alta | Alto | División por tarea y budgets editoriales |
| Capturas con PII | Media | Crítico | Fixtures, masking y revisión |
| Agente publica cambios incorrectos | Media | Alto | PR obligatorio y aprobación humana |
| Pérdida de crédito por squash/bots | Alta | Medio | Ledger de contribuciones |
| Ayuda ERP parcial elimina contenido | Media | Crítico | Dos snapshots y fail-closed |
| Plugin comunitario abandonado | Media | Alto | Contrato de salida independiente del plugin |
| Dependencia de GitHub SaaS | Variable | Medio | GitLab CE o Forgejo según estrategia |
| CMS preview distinto a producción | Alta | Medio | Deploy preview de CI |
| Licencias ambiguas | Alta | Alto | Política y revisión legal antes de contribuciones |
| Imágenes inflan el repositorio | Alta | Medio | Optimización, deduplicación y evaluación de LFS |

---

## 19. Prueba de concepto recomendada

### 19.1 Contenido de la prueba

1. Manual “Inicio de sesión” con aproximadamente 20 imágenes.
2. Reestructuración de “Socio del Negocio” a partir de una página de 309 imágenes.
3. Una ventana generada desde el Application Dictionary.
4. Una página técnica con snippets ejecutados en CI.
5. Una captura regenerada mediante Pi y Playwright.
6. Una contribución externa con atribución.
7. Un comentario promovido a caso de uso con consentimiento.

### 19.2 Escenarios de validación

- Editor no técnico crea un borrador.
- Editor carga y describe una imagen.
- El sistema abre un PR/MR.
- CI genera un preview exacto.
- Una persona revisora solicita cambios.
- La contribución conserva el crédito original.
- Pi consume el índice JSON y Markdown raw.
- Pi actualiza una captura sin publicar directamente.
- El extractor ERP cambia un fragmento generado sin tocar narrativa humana.
- La búsqueda encuentra contenido funcional, técnico y generado.

### 19.3 Criterios de aceptación

- Markdown continúa siendo legible fuera del portal.
- El build es reproducible.
- No existe escritura directa a la rama principal.
- El CMS no puede editar rutas generadas.
- Todos los enlaces e imágenes son válidos.
- El preview coincide con producción.
- El contenido generado registra procedencia y hash.
- Los agentes pueden recuperar contenido sin interpretar JavaScript.
- Cada mejora aceptada tiene una identidad humana o automatizada explícita.
- El proyecto puede migrar de generador sin migrar el contenido canónico.

---

## 20. Opciones de implementación

### Opción A: menor complejidad

```text
Forge/Git
+ Astro Starlight
+ Sveltia/Decap
+ Pagefind
+ Remark42
+ custom ERP/Pi pipelines
```

Elegir cuando se publica una única versión vigente.

### Opción B: versiones e idiomas como requisito principal

```text
GitLab CE or GitHub
+ Docusaurus
+ Sveltia/Decap
+ Remark42
+ custom ERP/Pi pipelines
```

Elegir cuando se mantienen varias versiones públicas del ERP.

### Opción C: prototipo experimental con Osnova

```text
Osnova as editorial cockpit
+ external static publisher
+ public comment layer
+ custom ERP/Pi pipelines
```

Sólo debe evaluarse como experimento. No sustituye actualmente el portal público ni elimina las integraciones propias.

---

## 21. Conclusión

La investigación no identificó una aplicación única que satisfaga simultáneamente:

- Markdown canónico.
- Git como autoridad.
- Editor visual.
- Review y aprobación.
- Comentarios públicos.
- Publicación estática.
- i18n y versiones.
- Atribución completa.
- Salidas para agentes.
- Extracción del ERP.
- Automatización de imágenes.
- Madurez y comunidad suficientes.

Los proyectos que más se acercan son Osnova e InkLoom, pero su madurez y sus brechas arquitectónicas los convierten en apuestas de alto riesgo.

Una plataforma compuesta no representa complejidad accidental: refleja responsabilidades diferentes que deben permanecer desacopladas. La clave es evitar múltiples autoridades. Markdown y Git deben conservar el control del contenido; el editor, comentarios, generador, ERP y agentes deben operar alrededor de esa autoridad mediante cambios revisables.

### Decisión recomendada

1. Mantener Git como única fuente de verdad.
2. Seleccionar Starlight o Docusaurus según la necesidad de versiones.
3. Incorporar Sveltia o Decap como interfaz editorial, nunca como autoridad paralela.
4. Utilizar Remark42 para comentarios públicos.
5. Construir pipelines específicos y acotados para Application Dictionary, Pi, imágenes y atribución.
6. Ejecutar una prueba de concepto antes de comprometer la arquitectura definitiva.

---

## Apéndice A. Fuentes principales

### Sitio y repositorio ERPya

- [Documentación ERPya](https://docs.erpya.com/docs/)
- [Repositorio erpcya/docs](https://github.com/erpcya/docs)
- [package.json](https://github.com/erpcya/docs/blob/main/package.json)
- [theme.ts](https://github.com/erpcya/docs/blob/main/src/.vuepress/theme.ts)
- [config.ts](https://github.com/erpcya/docs/blob/main/src/.vuepress/config.ts)

### Wikis y CMS

- [Wiki.js](https://js.wiki/)
- [Wiki.js Git storage](https://docs.requarks.io/storage/git)
- [XWiki](https://www.xwiki.org/)
- [BookStack](https://www.bookstackapp.com/)
- [Docmost](https://github.com/docmost/docmost)
- [Gollum](https://github.com/gollum/gollum)
- [Grav](https://getgrav.org/)

### Editores Git-first

- [Nuxt Studio](https://github.com/nuxt-content/nuxt-studio)
- [TinaCMS self-hosting](https://tina.io/docs/self-hosted/overview/)
- [Sveltia CMS](https://sveltiacms.app/)
- [Decap CMS](https://decapcms.org/)
- [Keystatic](https://keystatic.com/)

### Candidatos emergentes

- [Osnova](https://github.com/hycomsa/osnova)
- [InkLoom](https://github.com/inkloom-io/inkloom)
- [markupmarkdown](https://github.com/jonradoff/markupmarkdown)

### Generadores documentales

- [Astro Starlight](https://starlight.astro.build/)
- [Docusaurus](https://docusaurus.io/)
- [Fumadocs](https://www.fumadocs.dev/)
- [VitePress](https://vitepress.dev/)
- [Zensical](https://zensical.org/)
- [Read the Docs](https://docs.readthedocs.com/)
- [Backstage TechDocs](https://backstage.io/docs/features/techdocs/)
- [Antora](https://antora.org/)

### Comentarios y automatización

- [Remark42](https://remark42.com/)
- [Playwright screenshots](https://playwright.dev/docs/screenshots)
- [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots)

---

## Apéndice B. Evidencia local

Durante la evaluación se generó una captura completa de la página “Interfaz de Usuario” en:

```text
.atl/erpya-user-interface.png
```

El directorio `.atl/` corresponde a estado local y está excluido mediante `.gitignore`; esta captura sirve como evidencia de investigación, no como asset documental definitivo.
