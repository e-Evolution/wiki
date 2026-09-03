---
title: Herramienta de Importación Avanzada
category: Importación
star: 10
tag:
  - Importación
  - Herramientas
  - Técnico
  - Funcional
article: false
---

# Herramienta de Importación Avanzada de ADempiere

Esta documentación detalla el uso, funcionalidades y trucos de la **Herramienta de Importación de ADempiere** (Adempiere Importer Tool). Esta herramienta permite la carga masiva y actualización de datos mediante archivos CSV/TSV, utilizando el modelo de persistencia (PO) de ADempiere para asegurar que todas las validaciones, *callouts* y lógica de negocio se ejecuten correctamente.

## ¿Qué es y para qué sirve?

Es una utilidad flexible diseñada para importar datos al sistema sin necesidad de desarrollar procesos de carga personalizados para cada tabla. A diferencia de la importación estándar, esta herramienta:
- **Detecta automáticamente** el delimitador del archivo (coma, punto y coma, tabulador).
- **Ejecuta la lógica de negocio** de ADempiere (validadores, eventos, workflows).
- **Resuelve claves foráneas** automáticamente usando nombres o códigos en lugar de IDs.
- Permite **Insertar** nuevos registros o **Actualizar** existentes.

## Sintaxis Avanzada y "Trucos"

El poder de esta herramienta reside en la sintaxis especial que puedes usar en los encabezados de tu archivo CSV. A continuación se explican los "trucos" principales:

### 1. Búsqueda de Valores Referenciados `[...]`

Normalmente, las bases de datos requieren IDs numéricos (por ejemplo, `C_BPartner_ID = 1000045`). Sin embargo, en un CSV es mucho más fácil usar nombres comprensibles (por ejemplo, "Proveedor X").

Para lograr esto, se utilizan los corchetes `[]` en el nombre de la columna:

**Sintaxis:** `NombreColumnaID[ColumnaDeBusqueda]`

**Ejemplo:**
Si quieres asignar un Grupo de Socios de Negocio (`C_BP_Group_ID`) pero solo conoces su nombre, usa:
```csv
C_BP_Group_ID[Name]
```
Esto le dice al sistema: *"Busca en la tabla de grupos de socios de negocio el registro donde `Name` sea igual al valor de mi CSV, y usa su ID."*

### 2. Identificador Único `/K`

La bandera `/K` (Key) se utiliza para indicar qué columna(s) hacen único al registro. Esto es vital para:
- Evitar duplicados en el archivo.
- Identificar qué registro actualizar cuando se usa el modo **Actualización**.

**Sintaxis:** `NombreColumna/K`

**Ejemplo:**
Para un Socio de Negocio, la "Llave" o código único suele ser la columna `Value`.
```csv
Value/K
```

### 3. Insensibilidad a Mayúsculas/Minúsculas

¡No te preocupes por la exactitud de las mayúsculas! La herramienta es inteligente.
- `name`, `Name`, `NAME` → Todos funcionan igual.
- `c_bpartner_id[value]`, `C_BPartner_ID[Value]` → Ambos son válidos.

### 4. Fechas Dinámicas

Puedes usar palabras clave especiales para fechas, lo cual es muy útil para campos como "Fecha de Inicio" o "Fecha de Contrato":

| Palabra Clave | Descripción |
|--------------|-------------|
| `now` | Fecha y hora actual del sistema. |
| `today` | Fecha actual (sin hora). |

### 5. Tablas Relacionadas (hijas) con `>`

También puedes trabajar con tablas relacionadas sin cambiar el diccionario (ventanas/pestañas).

- **Idea básica**: en el encabezado, encadenas tablas con `>` hasta llegar a la columna final.
- El proceso resolverá las dependencias y creará/actualizará los registros en el orden correcto.

**Ejemplos de paths**:

- `C_BPartner_Location>Name` → Columna `Name` de la tabla `C_BPartner_Location`.
- `C_BPartner_Location>C_Location>Address1` → Columna `Address1` en la tabla `C_Location`, enlazada a `C_BPartner_Location`.
- `C_BPartner_Location>C_BPartner_ID[Value]` → El `C_BPartner_ID` se resuelve buscando el socio por su `Value`.

La herramienta es recursiva:

- Si encuentra una tabla hija que depende de otra por columna `_ID`, primero crea la dependencia.
- Luego asigna el ID en la tabla que lo referencia.

### 6. Modo "Tabla raíz desde el encabezado"

Cuando seleccionas una ventana/pestaña en la **Plantilla de Importación**, normalmente esa pestaña define la tabla "raíz" (por ejemplo, `C_BPartner`).

Sin embargo, hay casos donde quieres **usar esa pestaña solo como “contexto”** y realmente insertar en una tabla hija (por ejemplo, solo direcciones).

El proceso soporta esto:

- Si en la tabla raíz (ej. `C_BPartner`) **no hay ninguna columna marcada con `/K`** en el encabezado.
- Y **sí hay columnas que apuntan a tablas hijas** (`C_BPartner_Location`, `C_Location`, etc.).
- Entonces la herramienta:
  - **No inserta ni actualiza registros en la tabla raíz**.
  - Trata a las tablas hijas como “raíz lógica” y crea/actualiza ahí.

Esto permite, por ejemplo:

- Ventana: **Socio de Negocios**.
- Pestaña: la pestaña normal de `C_BPartner`.
- Archivo: solo define campos de `C_BPartner_Location` y `C_Location`, usando el socio (`C_BPartner_ID[Value]`) como lookup.

## Ejemplo Real: Creando un Socio de Negocio

Vamos a crear un archivo CSV para importar un nuevo **Socio de Negocio (Cliente)**.

**Requerimientos:**
1.  **Código (Value):** Debe ser único (Ej: `CLI-001`). usaremos `/K`.
2.  **Nombre (Name):** Nombre legal del cliente.
3.  **Grupo (C_BP_Group_ID):** Queremos asignarlo al grupo "Clientes Standard" buscando por su nombre `Name`.
4.  **País (C_Country_ID):** Asignar país "Venezuela" buscando por su nombre `Name`.
5.  **Activo (IsActive):** Indicar explícitamente que está activo (`Y`).

### Estructura del CSV (Ejemplo)

```csv
Value/K,Name,C_BP_Group_ID[Name],C_Country_ID[Name],IsCustomer,IsActive
CLI-001,Empresa Ejemplo S.A.,Clientes Standard,Venezuela,Y,Y
CLI-002,Tecnología Global C.A.,Grandes Clientes,Venezuela,Y,Y
```

### Desglose del Ejemplo

1.  **`Value/K`**:
    *   `Value`: Es el campo de la base de datos para el código del socio.
    *   `/K`: Indica que `CLI-001` es la llave. Si intentamos subir dos líneas con `CLI-001`, la herramienta dará error de duplicado.
2.  **`Name`**: Mapeo directo de texto.
3.  **`C_BP_Group_ID[Name]`**:
    *   El sistema irá a la tabla `C_BP_Group`.
    *   Buscará un registro donde `Name` sea "Clientes Standard".
    *   Tomará el ID de ese registro y lo guardará en `C_BP_Group_ID`.
4.  **`C_Country_ID[Name]`**: similar al anterior, busca el país "Venezuela" en la tabla `C_Country`.

## Ejemplo: Importar solo direcciones de un Socio de Negocio

Escenario típico:

- Ya existen los socios de negocio (clientes) en `C_BPartner`.
- Quieres cargar **solo nuevas direcciones** (`C_BPartner_Location` + `C_Location`) sin tocar la cabecera del socio.
- Sigues usando la ventana **Socio de Negocios** y la pestaña principal de `C_BPartner`.

### Encabezado de ejemplo (CSV)

```csv
Value,C_BPartner_Location>C_BPartner_ID[Value],C_BPartner_Location>Name/K,C_BPartner_Location>C_Location>Address1,C_BPartner_Location>C_Location>City,C_BPartner_Location>C_Location>C_Country_ID[Name],C_BPartner_Location>IsShipTo,C_BPartner_Location>IsBillTo
```

Explicación rápida:

- `Value`: código del socio (no lleva `/K` a nivel raíz).
- `C_BPartner_Location>C_BPartner_ID[Value]`: resuelve el `C_BPartner_ID` buscando por `Value`.
- `C_BPartner_Location>Name/K`: nombre de la localización y además **llave** para detectar si ya existe esa dirección para ese socio.
- `C_BPartner_Location>C_Location>Address1`, `...>City`, `...>C_Country_ID[Name]`: datos de la ubicación física.
- `IsShipTo` / `IsBillTo`: flags de envío y facturación.

### Datos de ejemplo

```csv
Value,C_BPartner_Location>C_BPartner_ID[Value],C_BPartner_Location>Name/K,C_BPartner_Location>C_Location>Address1,C_BPartner_Location>C_Location>City,C_BPartner_Location>C_Location>C_Country_ID[Name],C_BPartner_Location>IsShipTo,C_BPartner_Location>IsBillTo
V008117663,V008117663,DIR-TEST-1,CALLE PRUEBA 123,CARACAS,Venezuela,Y,Y
J403381860,J403381860,DIR-TEST-2,AV. DEMO 456,VALENCIA,Venezuela,Y,N
```

Qué hace la herramienta:

1. **No inserta ni actualiza `C_BPartner`** (no hay `/K` en la raíz).
2. Para cada fila:
   - Busca el socio por `Value` (`V008117663`, `J403381860`).
   - Crea (o actualiza) el `C_Location` correspondiente.
   - Crea (o actualiza) la `C_BPartner_Location` enlazada al socio y a la ubicación.

Así puedes trabajar **exactamente como iDempiere** cuando en la ventana seleccionas Socio de Negocios, pero el proceso termina insertando en la pestaña de Localización.

## Ejemplo: Importación de Listas de Precios (Múltiples Tablas Anidadas)

La herramienta permite cargar varias tablas jerárquicas en un solo paso gracias al uso de `>` y un sistema de caché inteligente de registros.

Por ejemplo, si necesitas importar la Cabecera de la Lista de Precio (`M_PriceList`), su Versión (`M_PriceList_Version`) y los Precios de los Productos (`M_ProductPrice`):

1. En la **Plantilla de Importación**, selecciona la pestaña "Lista de Precios" para dar el contexto base.
2. Tu archivo puede estructurarse de la siguiente manera:

### Encabezado de ejemplo (CSV/TSV)
```csv
Name,C_Currency_ID[ISO_Code],M_PriceList_Version>Name/K,M_PriceList_Version>M_ProductPrice>M_Product_ID[Value],M_PriceList_Version>M_ProductPrice>PriceList
```

### Explicación rápida:
- `Name`, `C_Currency_ID[ISO_Code]`: Estas columnas sin prefijo se procesan en la tabla raíz de la pestaña seleccionada (`M_PriceList`).
- `M_PriceList_Version>Name/K`: Crea (o actualiza) la Versión y la vincula automáticamente a la cabecera anterior.
- `M_PriceList_Version>M_ProductPrice>...`: Crea el Precio del Producto vinculándolo **directamente** a la Versión creada en el paso anterior.

**Ventaja de la Caché Automática**: Si tienes 100 productos (100 filas) para la misma lista y versión, la herramienta **no duplicará** las cabeceras. El sistema detecta que los datos principales son idénticos a los de la línea anterior y simplemente **reutiliza los registros** de `M_PriceList` y `M_PriceList_Version`, procesando y creando únicamente los precios en cascada.

### Soporte Flexible de Ventanas y Fechas
- **Pestaña Opcional/Flexible**: Si la Plantilla de Importación no tiene definida una Pestaña explícitamente, la herramienta intentará auto-detectarla basada en la "Ventana" o el "Nombre de la Plantilla", permitiendo una configuración mucho más relajada.
- **Conversión Automática de Fechas**: Campos estrictos de base de datos (`java.sql.Timestamp`, como `ValidFrom`) aceptan ahora fechas estándar automáticamente, formateándose y evitando bloqueos técnicos.

## ¿Cómo se usa en el Sistema?

1.  **Configuración (Plantilla de Importación)**:
    *   Ingresa a la ventana **Plantilla de Importación**.
    *   Crea un nuevo registro para definir tu carga.
    *   En el campo **Cabecera CSV**, debes colocar los nombres de las columnas tal cual vendrán en tu archivo (separados por coma).
        *   *Nota: Esto es útil si quieres validar la estructura o si el archivo no trae cabeceras, aunque la herramienta puede detectar las cabeceras automáticamente del archivo si se deja en blanco.*
2.  **Preparar el Archivo**: Crea tu archivo CSV o Excel (guardado como CSV/TSV) siguiendo la sintaxis explicada.
3.  **Formato de Archivo (CSV / TSV)**:
    - El proceso **detecta automáticamente** el separador usando la primera línea:
      - Si encuentra `;` → usa `;`.
      - Si no, si encuentra tabulador (`\t`) → usa tabulador (TSV).
      - En caso contrario → usa coma `,` (CSV).
    - El archivo puede ser `.csv` o `.tsv`, lo importante es el contenido.
4.  **Ejecutar el Proceso**:
    *   Navega a la ventana de proceso correspondiente (generalmente lanzada desde la misma Plantilla o un botón asignado).
    *   Selecciona tu registro de **Plantilla de Importación**.
    *   Selecciona tu archivo.
    *   Selecciona el modo: **Insertar** (para nuevos) o **Actualizar** (para modificar existentes).
5.  **Resultado**: El sistema procesará línea por línea.
    *   Si hay errores (ej: no encuentra el Grupo "Clientes Standard"), el proceso se detendrá o reportará el error.

## Recomendaciones Finales

## Comportamiento de Cliente, Organización y Auditoría

- **AD_Client_ID**:
  - Si el archivo **no lo trae**, el proceso usa **siempre** el cliente de contexto de la plantilla / sesión.
  - Solo necesitas incluirlo si quieres forzar un cliente específico.

- **AD_Org_ID**:
  - Para **registros nuevos (INSERT)**:
    - Si el archivo **no trae `AD_Org_ID`**, se usará la organización de la sesión (`#AD_Org_ID`, por ejemplo `0` si estás en `*`).
    - Si el archivo **sí trae `AD_Org_ID`**, se usa exactamente ese valor.
  - Para **registros existentes (UPDATE)**:
    - Si el archivo **no trae `AD_Org_ID`**, el proceso **no modifica** la organización del registro.
    - Si el archivo **sí trae `AD_Org_ID`**, se actualiza a ese valor.

- **Auditoría (`Created`, `CreatedBy`, `Updated`, `UpdatedBy`)**:
  - No necesitas incluirlos en el archivo.
  - ADempiere los mantiene automáticamente al hacer `save()`:
    - Usa el usuario actual de la sesión (`#AD_User_ID`).
    - Registra la fecha y hora del cambio.

- **Duplicados y `/K`**:
  - Las columnas marcadas con `/K` se validan para que **no se repitan en el mismo archivo**.
  - Si una columna **no** tiene `/K`, puede repetirse libremente.
  - En modo actualización, las columnas `/K` se usan para construir el `WHERE` y encontrar el registro que se debe modificar.

- **Seguridad**:
  - La herramienta valida que las columnas y tablas existan en el diccionario de datos de ADempiere.
  - Todos los accesos a base de datos se hacen a través del framework, aplicando las mismas reglas de seguridad que el resto del sistema.
