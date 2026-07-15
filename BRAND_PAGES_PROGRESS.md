# Brand Pages Loop — Estado del sistema
**Última actualización:** 2026-06-27 · **Build:** ✅ 607.14 kB sin errores
**Refinamiento 2 completado:** ✅ 10 páginas auditadas · contaminación cruzada eliminada · datos inventados removidos · build limpio
**NanoPage agregada 2026-06-27:** ✅ 11 páginas totales — marca raíz / marca personal de Orlando Ramírez Olivier incluida

## Misión
Construir páginas individuales de marca para orlandoramirez.com — una por cada marca del hub.
Patrón: CimovesPage.jsx y OroConstructoresPage.jsx son el template de referencia.

## Estado de páginas
| Página | Ruta | Archivo | Estado | Refinada con datos reales |
|--------|------|---------|--------|--------------------------|
| **Nano** | /marcas/nano | src/pages/NanoPage.jsx | ✅ DONE | ✅ Marca raíz — Historia real (3.000km, 18 puntos, €12 en Madrid), dualidad, 5 meta-crisis, 6 metodologías, ecosistema completo |
| Cimoves | /marcas/cimoves | src/pages/CimovesPage.jsx | ✅ DONE | ✅ Auditor+Research+Spaces, JL Ruedas, hero "Transformamos ideas en impacto" |
| Oro Constructores | /marcas/oro-constructores | src/pages/OroConstructoresPage.jsx | ✅ DONE | ✅ 14 verticales, 141 micro-servicios verificados, Oro Corp = visión futura |
| Ricae | /marcas/ricae | src/pages/RicaePage.jsx | ✅ DONE | ✅ ELIT3, 18 dimensiones, FOR_WHOM corregido (individuos, no empresas) |
| Nanotecks | /marcas/nanotecks | src/pages/NanotecksPage.jsx | ✅ DONE | ✅ 3 fases teoría, 4 sistemas, paper quote, sin contaminación cruzada |
| Transfórmalo | /marcas/transformalo | src/pages/TransformaloPage.jsx | ✅ DONE | ✅ MR13 completo, proceso 5 pasos, diferenciadores, extensión Nanotecks confirmada |
| Lifeming | /marcas/lifeming | src/pages/LifemingPage.jsx | ✅ DONE | ✅ TIERS inventados eliminados → Estado actual honesto; timeline corregido |
| Sulting | /marcas/sulting | src/pages/SultingPage.jsx | ✅ DONE | ✅ 30 min (no 45) en hero+problema+CTA; 5 fases; Zulting origin |
| Fundesing | /marcas/fundesing | src/pages/FundesingPage.jsx | ✅ DONE | ✅ Badge/hero/problema/para-quién/servicios corregidos — "diseña, no funda" |
| Huésped | /marcas/huesped | src/pages/HuespedPage.jsx | ✅ DONE | ✅ Wespet origin, €28k inversión, €9k/mes, 24 camas (3×8) |
| Comduce | /marcas/comduce | src/pages/ComducePage.jsx | ✅ DONE | ✅ Quote real primer guion, tagline "Un vehículo. O su propia vida." |

## Cómo construir cada página (proceso exacto)

### 1. Research
Buscar en Drive_Backup, carpetas /Documents/[Marca]/, CLAUDE.md de Nano, Indice_Ecosistema_Nano.html
```bash
ls /Users/orlandoramirezolivier/Documents/Nano/Drive_Backup/Nano_Memory_Drive/ | grep -i "MARCA"
# Extraer docx con:
python3 -c "
import zipfile, re, sys
with zipfile.ZipFile(sys.argv[1], 'r') as z:
    with z.open('word/document.xml') as f:
        txt = f.read().decode('utf-8')
txt = re.sub('<[^>]+>', ' ', txt)
txt = re.sub(r'\s+', ' ', txt)
print(txt[:5000])
" "ARCHIVO.docx"
```

### 2. Carpeta de marca
```bash
mkdir -p /Users/orlandoramirezolivier/Documents/MARCA/{investigacion,estrategia,brand}
```

### 3. Construir página
- Archivo: `web-app/src/pages/MarcaPage.jsx`
- Template: mismo patrón que CimovesPage.jsx / OroConstructoresPage.jsx
- Color de marca: usar el documentado, o negro #0A0A0A si no hay
- Secciones: Hero → El problema → Para quién → Diferenciadores → Historia → Estado actual → CTA
- Si la marca es "Concepto": página más corta con sección "En construcción" honesta

### 4. Cablear ruta en App.jsx
```jsx
import MarcaPage from './pages/MarcaPage'
// En Routes:
<Route path="/marcas/marca-id" element={<MarcaPage />} />
// ANTES de: <Route path="/marcas/:id" element={<MarcasPage />} />
```

### 5. Build de verificación
```bash
cd /Users/orlandoramirezolivier/Documents/Nano/web-app && npm run build
```

## Cómo detectar si la página ya existe
```bash
ls /Users/orlandoramirezolivier/Documents/Nano/web-app/src/pages/ | grep -E "Ricae|Nanotecks|Transformalo|Lifeming|Sulting|Fundesing|Huesped|Comduce"
```

## Files de investigación conocidos en Drive_Backup
- Ricae: "Chat de Gemini_ Business IA.docx" + buscar "ricae"
- Nanotecks: "079 Investigaciones en Nanotecks.docx"
- Sulting: "018 Investigaciones en Sulting.docx"
- Fundesing: "019 Investigaciones en Fundesing.docx" + "Dossier Completo_ Fundesing_.docx"
- Lifeming: "028 Investigaciones en Lifeming.docx"
- Comduce: "034 Investigaciones en Comduce.docx"
- Transfórmalo: "/Documents/Cimoves/research/MR13_Transformalo_Marca_IA_B2B_2026-06-23.html"
- Huésped: buscar "huesped", "hospedaje", "piso tur"
- Veneficios/Ricae: "027 Investigaciones en Veneficios.docx" + "033 Investigaciones en Veneficios.docx"

## Colores de marca conocidos
- Cimoves: #8C52FF (purple)
- Oro Constructores: #FDBF00 (gold) sobre #0A0A0A
- Resto: usar #0A0A0A (negro) como base hasta tener info confirmada

## Instrucción para contexto continuado
Si ves este archivo y hay páginas PENDIENTES en la tabla de arriba:
1. Verifica qué páginas faltan: `ls web-app/src/pages/`
2. Toma la primera pendiente
3. Busca research en Drive_Backup y carpeta de la marca
4. Construye la página
5. Cablea la ruta
6. Build de verificación
7. Actualiza la tabla arriba a ✅ DONE
8. Continúa con la siguiente
9. Cuando todo sea ✅ DONE → auditor final + commit
