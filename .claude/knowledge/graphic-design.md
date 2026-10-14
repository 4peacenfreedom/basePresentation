# Graphic Design Principles

Fundamentos de diseño visual para crear presentaciones que comunican efectivamente.

## Principios Fundamentales

### 1. Jerarquía Visual

**Definición**: Guiar el ojo del espectador en el orden correcto

**Herramientas de jerarquía:**

**A. Tamaño**
- Más grande = más importante
- Variación de 2-3x entre niveles

```
Headline: 72px
Subheadline: 36px
Body: 24px
Caption: 18px
```

**B. Peso (Weight)**
- Bold para statements principales
- Regular para supporting info
- Light para metadata

**C. Contraste**
- Color brillante vs. neutral
- Oscuro vs. claro
- Saturado vs. desaturado

**D. Posición**
- Top-left = primera lectura (culturas occidentales)
- Centro = focal point
- Bottom-right = última lectura

**E. Espacio negativo**
- Más espacio alrededor = más importante

**Ejemplo de jerarquía correcta:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━
  El Problema que Nadie Ve
  ────────────────────────
  87% de las startups fallan por
  problemas de comunicación
  
  No por falta de producto.
  Por falta de claridad.
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Jerarquía:
1. "El Problema..." (72px, bold)
2. "87%..." (36px, color accent)
3. "No por falta..." (24px, regular)
```

### 2. Teoría del Color

**A. Psicología del color**

| Color | Asociación | Uso ideal |
|-------|-----------|-----------|
| Azul | Confianza, profesionalismo, calma | Corporativo, finanzas, tech |
| Rojo | Urgencia, pasión, energía | Sales, call-to-action, alertas |
| Verde | Crecimiento, salud, naturaleza | Sustentabilidad, wellness, éxito |
| Naranja | Creatividad, entusiasmo, amigable | Startups, educación, innovación |
| Púrpura | Lujo, creatividad, sabiduría | Premium brands, creativos |
| Amarillo | Optimismo, atención, calidez | Highlights, educación infantil |
| Negro | Sofisticación, poder, elegancia | Lujo, minimalismo, tech |
| Blanco | Limpieza, simplicidad, pureza | Minimalismo, médico, tech |

**B. Armonías de color**

**Monocromático**: Variaciones de un solo color
- Cohesivo, profesional, fácil de lograr
- Riesgo: puede ser aburrido
- Solución: Variar saturación y brillo

**Análogo**: Colores adyacentes en el círculo cromático
- Armonioso, natural
- Ejemplo: Azul → Azul-verde → Verde

**Complementario**: Colores opuestos
- Alto contraste, vibrante
- Ejemplo: Azul ↔ Naranja
- Usar uno dominante (70%) + otro de acento (30%)

**Triádico**: Tres colores equidistantes
- Balanceado, vibrante
- Difícil de ejecutar bien
- Ejemplo: Rojo + Amarillo + Azul

**C. Regla 60-30-10**

Para cualquier slide:
- **60%**: Color dominante (usualmente neutral - fondo)
- **30%**: Color secundario (brand color, secciones)
- **10%**: Color de acento (CTAs, highlights)

**Ejemplo:**
```
60% → Blanco/crema (background)
30% → Azul marino (headers, shapes)
10% → Naranja (CTAs, key numbers)
```

**D. Contraste y accesibilidad**

**WCAG Standards:**
- **AA** (mínimo): Ratio 4.5:1 para texto normal
- **AAA** (ideal): Ratio 7:1 para texto normal

**Herramienta**: WebAIM Contrast Checker

**Ejemplos:**
❌ Gris claro (#999) sobre blanco (#FFF): 2.8:1 (fail)
✅ Gris oscuro (#333) sobre blanco: 12.6:1 (AAA)
✅ Blanco sobre azul marino (#003366): 8.6:1 (AAA)

### 3. Tipografía

**A. Anatomía de fuentes**

**Serif** (con "patitas"):
- Tradicional, formal, confiable
- Ejemplos: Georgia, Times New Roman, Playfair Display
- Uso: Corporativo, legal, editorial

**Sans-serif** (sin "patitas"):
- Moderno, limpio, directo
- Ejemplos: Helvetica, Arial, Inter, Roboto
- Uso: Tech, startups, web

**Display** (decorativa):
- Personalidad, impacto visual
- Ejemplos: Bebas Neue, Archivo Black
- Uso: Solo headlines, nunca body text

**Script** (manuscrita):
- Elegante, personal, creativa
- Ejemplos: Pacifico, Dancing Script
- Uso: Invitaciones, luxury brands, acentos

**B. Reglas de tipografía**

**Máximo 2 fuentes por presentación**
- 1 para headlines
- 1 para body (o usar la misma en weights diferentes)

**Excepción**: Display font para title slide + Sans-serif para resto

**Pairings que funcionan:**
```
Serif headline + Sans body:
  Playfair Display + Roboto
  Lora + Open Sans
  Merriweather + Montserrat

Sans headline + Sans body:
  Poppins (bold) + Inter (regular)
  Raleway (bold) + Source Sans (regular)

Display + Sans:
  Bebas Neue + Lato
  Archivo Black + Work Sans
```

**C. Legibilidad**

**Tamaño mínimo:**
- Presentación en vivo: 24px minimum
- Compartida por email/PDF: 18px minimum

**Line height (interlineado):**
- Body text: 1.5x el tamaño de fuente
- Headlines: 1.2x

**Line length (ancho de línea):**
- Óptimo: 50-75 caracteres por línea
- En slides: Máximo 10-12 palabras por línea

**Alineación:**
- Left-aligned: Más fácil de leer para bloques largos
- Center-aligned: Para headlines y quotes cortos
- Right-aligned: Rara vez (solo efectos específicos)
- Justified: EVITAR (crea ríos de espacio)

**D. Hierarchy con tipografía**

```
━━━━━━━━━━━━━━━━━━━━━
  H1: POPPINS BOLD 72PX
  ──────────────────────
  H2: Poppins Semibold 48px
  
  H3: Poppins Medium 36px
  
  Body: Inter Regular 24px con line-height 1.5
  
  Caption: Inter Regular 18px, opacity 0.7
━━━━━━━━━━━━━━━━━━━━━
```

### 4. Composición y Layout

**A. Regla de tercios**

Divide el slide en 9 partes iguales (3x3 grid)
Coloca elementos importantes en las intersecciones

```
┌─────┬─────┬─────┐
│     │  ●  │     │ ← Puntos focales óptimos
├─────┼─────┼─────┤
│  ●  │     │  ●  │
├─────┼─────┼─────┤
│     │  ●  │     │
└─────┴─────┴─────┘
```

**B. Balance**

**Simétrico**: Formal, estable, tradicional
- Elementos iguales a ambos lados
- Uso: Corporativo, institucional

**Asimétrico**: Dinámico, moderno, interesante
- Elementos diferentes pero balanceados por "peso visual"
- Uso: Creativo, startups, diseño moderno

**C. Espacio negativo (whitespace)**

**No es "espacio vacío" - es espacio activo que:**
- Da respiración al contenido
- Crea jerarquía
- Mejora legibilidad
- Comunica elegancia

**Regla**: Si un slide se siente "lleno", quita elementos, no los hagas más pequeños

**Ejemplo:**
❌ 8 bullets amontonados en un slide
✅ 2-3 bullets con espacio generoso = más impacto

**D. Alineación**

**TODO debe estar alineado con ALGO**

Usa grids invisibles:
- Márgenes consistentes
- Elementos alineados entre sí
- Espaciado uniforme

**Herramientas:**
- Guides en software de diseño
- CSS Grid en web
- 12-column grid system

### 5. Imágenes y Visuales

**A. Tipos de imágenes**

**Fotografías**
- Auténticas > Stock genérico
- Alta resolución (mínimo 1920x1080 para presentaciones)
- Evitar: Handshake stock photos, fake-smiling office workers

**Ilustraciones**
- Personalidad de marca
- Explican conceptos abstractos
- Consistencia de estilo importante

**Iconos**
- Simplificación de conceptos
- Navegación visual
- Mismo style set (outline vs. filled)

**B. Tratamiento de imágenes**

**Full-bleed**: Imagen ocupa todo el slide
- Alto impacto visual
- Asegurar contraste para texto overlay

**Shapes + Images**
- Círculos para fotos de personas
- Rectángulos para productos
- Formas custom para destacar

**Filtros y overlays**
- Darkener overlay para mejorar contraste de texto
- Filtros de color para brand consistency
- Blur backgrounds para focus

**C. Data visualization**

**Cuando usar cada tipo:**

**Line chart**: Tendencia en el tiempo
**Bar chart**: Comparar categorías
**Pie chart**: Partes de un todo (EVITAR si >5 categorías)
**Area chart**: Volumen en el tiempo
**Scatter plot**: Correlación entre variables
**Heatmap**: Patrones en matriz de datos

**Reglas de data viz:**
- Eliminar gridlines innecesarias
- Empezar eje Y en 0 (o indicar claramente)
- Limitar colores (1-3 máximo)
- Labels directos > leyendas separadas
- Highlight el insight, no solo mostrar datos

### 6. Sistemas de diseño

**A. Consistencia visual**

Definir y mantener:
- **Color palette**: 2-3 colores principales + neutrales
- **Typography system**: Tamaños y weights definidos
- **Spacing system**: Múltiplos de 8px (8, 16, 24, 32, 48...)
- **Icon style**: Mismo set/estilo
- **Photo treatment**: Mismos filtros/crops

**B. Grid systems**

**12-column grid**: Estándar web, muy flexible
**8-column**: Más simple, para presentaciones
**Modular grid**: Para layouts complejos

**En presentaciones:**
```
Márgenes: 80px top/bottom, 120px left/right
Columns: 12 @ 60px width, 40px gutters
Baseline: 8px grid para spacing vertical
```

### 7. Tendencias vs. Principios

**Principios atemporales** (siempre aplican):
- Jerarquía clara
- Contraste suficiente
- Alineación precisa
- Consistencia

**Tendencias actuales** (2026):
- Glassmorphism (efecto cristal)
- Neubrutalism (bordes gruesos, sombras duras)
- 3D elements sutiles
- Variable fonts
- Dark mode first

**Regla**: Usa tendencias con moderación, fundamentado en principios sólidos

## Templates de layouts

### Layout 1: Hero Statement
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
│                           │
│    [IMAGEN FULL BLEED]    │
│                           │
│    STATEMENT PODEROSO     │
│    EN 1-2 LÍNEAS          │
│                           │
━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Layout 2: Split Screen
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
│           │               │
│  VISUAL   │  • Bullet 1   │
│  ELEMENT  │  • Bullet 2   │
│           │  • Bullet 3   │
│           │               │
━━━━━━━━━━━━━━━━━━━━━━━━━━━
50/50 o 60/40 split
```

### Layout 3: Card Grid
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
│  ┌───────┐  ┌───────┐    │
│  │ Card  │  │ Card  │    │
│  │   1   │  │   2   │    │
│  └───────┘  └───────┘    │
│  ┌───────┐  ┌───────┐    │
│  │ Card  │  │ Card  │    │
│  │   3   │  │   4   │    │
│  └───────┘  └───────┘    │
━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Layout 4: F-Pattern
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
│  HEADLINE ─────────────   │
│                           │
│  Sub-headline ────        │
│                           │
│  Body text starts here... │
│  and continues...         │
│                           │
│  [Visual element]         │
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sigue patrón natural de lectura
```

### Layout 5: Central Focus
```
━━━━━━━━━━━━━━━━━━━━━━━━━━
│                           │
│         ┌─────┐           │
│         │     │           │
│         │  ●  │           │
│         │     │           │
│         └─────┘           │
│       KEY METRIC          │
│                           │
━━━━━━━━━━━━━━━━━━━━━━━━━━━
Para números/estadísticas clave
```

## Checklist de diseño

Antes de finalizar, verificar:

### Jerarquía
- [ ] Elemento más importante es visualmente dominante
- [ ] Orden de lectura es intencional y claro
- [ ] Contraste suficiente entre niveles

### Color
- [ ] Palette es cohesiva (2-4 colores)
- [ ] Contraste pasa WCAG AA mínimo
- [ ] Colores refuerzan mensaje (psicología)
- [ ] Regla 60-30-10 aplicada

### Tipografía
- [ ] Máximo 2 font families
- [ ] Tamaño mínimo 24px
- [ ] Line height adecuado (1.5x body)
- [ ] Alineación consistente

### Composición
- [ ] Todo está alineado con algo
- [ ] Balance visual (simétrico o asimétrico intencional)
- [ ] Espacio negativo generoso
- [ ] Grid system aplicado

### Consistencia
- [ ] Márgenes uniformes en todos los slides
- [ ] Spacing system consistente
- [ ] Tratamiento de imágenes uniforme
- [ ] Brand elements presentes

### Accesibilidad
- [ ] Contraste de color suficiente
- [ ] Texto legible desde lejos
- [ ] Funciona sin color (para daltonismo)
- [ ] Alternativas a elementos solo visuales

## Recursos y herramientas

**Inspiración:**
- Dribbble: Diseños de presentación
- Behance: Proyectos completos
- SlidesGo / Slidesmania: Templates de referencia

**Color:**
- Coolors.co: Generador de palettes
- Adobe Color: Rueda cromática
- Contrast Checker: WCAG validation

**Tipografía:**
- Google Fonts: Fuentes gratuitas
- Fontpair.co: Combinaciones
- Type Scale: Jerarquía tipográfica

**Imágenes:**
- Unsplash: Fotos libres alta calidad
- unDraw: Ilustraciones customizables
- Noun Project: Iconos

**Referencias:**
- **"The Non-Designer's Design Book"** - Robin Williams
- **"Refactoring UI"** - Adam Wathan & Steve Schoger
- **"Designing for the Web"** - Mark Boulton
