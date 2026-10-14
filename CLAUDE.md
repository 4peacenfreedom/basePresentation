# Base Presentation

Sistema inteligente de generación de presentaciones que combina excelencia técnica con principios de comunicación efectiva.

## 🎯 Visión del Proyecto

Crear una herramienta que genere presentaciones profesionales, no lineales e interactivas, aplicando principios fundamentados de:
- **Copywriting**: Mensajes claros, persuasivos y memorables
- **Storytelling**: Narrativas que conectan emocionalmente y mantienen la atención
- **Design Thinking**: Soluciones centradas en las necesidades reales del usuario
- **Graphic Design**: Decisiones visuales fundamentadas en principios de composición, jerarquía y color
- **Motion Graphics**: Animaciones con propósito comunicativo, no decorativo

## 🏗️ Arquitectura Técnica

### Stack Principal
- **Framework**: Next.js 15 con App Router
- **Presentaciones**: reveal.js (navegación no lineal, multimedia, animaciones)
- **Styling**: Tailwind CSS + CSS Modules para temas personalizados
- **Animaciones**: Framer Motion + reveal.js transitions
- **TypeScript**: Type safety en toda la aplicación

### Estructura de Directorios

```
basepresentation/
├── .claude/
│   └── knowledge/          # Base de conocimiento del agente
│       ├── copywriting.md
│       ├── storytelling.md
│       ├── design-thinking.md
│       ├── graphic-design.md
│       └── motion-graphics.md
├── app/                    # Next.js App Router
│   ├── api/               # API routes para generación
│   └── presentation/      # Rutas de presentación
├── components/
│   └── presentation/      # Componentes de slides
├── lib/
│   └── presentation/
│       ├── themes/        # Temas visuales (inspirados en frontend-slides)
│       ├── templates/     # Templates de slides
│       └── utils/         # Utilidades de generación
└── public/
    └── assets/            # Multimedia (imágenes, videos, fonts)
```

## 🎨 Características Clave

### 1. Navegación No Lineal
- Navegación 2D (horizontal y vertical)
- Saltos programáticos a cualquier slide
- Vistas generales (overview mode)
- Navegación por teclado, mouse y touch

### 2. Multimedia Integrada
- Videos embebidos (YouTube, Vimeo, locales)
- Iframes para contenido interactivo
- Imágenes optimizadas
- Audio background opcional

### 3. Generación Inteligente
El sistema analiza las necesidades del cliente y:
1. **Identifica el objetivo** (vender, educar, inspirar, reportar)
2. **Estructura la narrativa** usando storytelling frameworks
3. **Selecciona el tono y estilo** visual apropiado
4. **Genera copy efectivo** para cada slide
5. **Aplica motion graphics** estratégicamente
6. **Crea navegación personalizada** según el flujo de contenido

### 4. Temas Profesionales
Inspirados en frontend-slides, con 34+ diseños distintivos:
- Dark themes (Bold Signal, Electric Studio, Creative Voltage, etc.)
- Light themes (Notebook Tabs, Pastel Geometry, Vintage Editorial, etc.)
- Specialty (Neon Cyber, Terminal Green, Swiss Modern, Paper & Ink, etc.)

## 🧠 Base de Conocimiento

El agente generador consulta estos principios antes de crear cada presentación:

### Copywriting (`.claude/knowledge/copywriting.md`)
- Claridad sobre todo
- Headlines que capturan atención
- Beneficios > Features
- Llamados a la acción efectivos
- Reducción de fricción cognitiva

### Storytelling (`.claude/knowledge/storytelling.md`)
- Estructura de tres actos
- Hero's Journey para narrativas inspiracionales
- Problem-Solution-Impact framework
- Arcos emocionales
- Hooks y payoffs

### Design Thinking (`.claude/knowledge/design-thinking.md`)
- Empatizar con la audiencia
- Definir el problema real
- Idear soluciones creativas
- Prototipar rápido
- Testear y validar

### Graphic Design (`.claude/knowledge/graphic-design.md`)
- Jerarquía visual
- Teoría del color (psicología y armonía)
- Tipografía (legibilidad, personalidad)
- Composición (regla de tercios, balance, espacio negativo)
- Consistencia de marca

### Motion Graphics (`.claude/knowledge/motion-graphics.md`)
- Animación con propósito
- Timing y easing
- Dirección de atención
- Transiciones suaves
- Performance considerations

## 🚀 Workflow de Generación

1. **Intake**: Claude recibe los requerimientos del cliente
2. **Análisis**: Aplica design thinking para entender necesidades
3. **Estrategia**: Define estructura narrativa y tono
4. **Generación**: Crea slides con copy + diseño + animaciones
5. **Refinamiento**: Ajusta según feedback
6. **Deploy**: Publica en Vercel o exporta

## 🎯 Casos de Uso

- **Pitch Decks** para startups e inversionistas
- **Presentaciones educativas** para universidades y colegios
- **Reportes ejecutivos** para empresas
- **Sermones visuales** para iglesias
- **Workshops y talleres** para equipos
- **Product launches** con impacto

## 📝 Notas de Desarrollo

- Priorizar **simplicidad** sobre complejidad
- Cada animación debe **servir un propósito** comunicativo
- Los temas deben ser **accesibles** (contraste, legibilidad)
- El código debe estar **bien documentado** para mantenibilidad
- Las presentaciones deben funcionar en **cualquier dispositivo**

## 🔗 Referencias

- [reveal.js Docs](https://revealjs.com)
- [frontend-slides](https://github.com/zarazhangrui/frontend-slides) - Inspiración visual
- [beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates) - Temas base
