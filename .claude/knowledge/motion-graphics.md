# Motion Graphics Principles

Principios de animación y motion design para presentaciones que comunican con movimiento estratégico.

## Filosofía del Motion Design

**"Animate with purpose, not decoration"**

Cada animación debe:
1. **Dirigir atención** al elemento correcto
2. **Revelar jerarquía** en el orden adecuado
3. **Comunicar relaciones** entre elementos
4. **Reforzar el mensaje** del contenido
5. **Mantener engagement** sin distraer

❌ Animación decorativa: "Se ve cool"
✅ Animación funcional: "Ayuda a entender"

## Los 12 Principios de Animación (Disney/Pixar)

Originalmente para animación tradicional, aplicables a motion graphics:

### 1. Squash and Stretch
**Concepto**: Objetos se deforman según velocidad/impacto

**En presentaciones:**
- Botones que se "presionan" ligeramente al click
- Elementos que "respiran" sutilmente
- Cards que se "estiran" al entrar

**Ejemplo:**
```
Botón hover:
Scale: 1.0 → 1.05 (crece)
Squash: ScaleY 1.0 → 0.98 (se aplana ligeramente)
Duración: 200ms
```

### 2. Anticipation
**Concepto**: Preparar al espectador para la acción principal

**En presentaciones:**
- Elemento se mueve ligeramente hacia atrás antes de deslizarse
- Fade in comienza con ligero scale down
- Hover state previo al click

**Ejemplo:**
```
Slide transition:
1. Slide actual se mueve 20px a la derecha (100ms)
2. Luego sale completamente (300ms)
3. Nuevo slide entra desde izquierda
```

### 3. Staging
**Concepto**: Dirigir atención al elemento más importante

**En presentaciones:**
- Animar elementos uno a la vez, no todos juntos
- Spotlight/highlight en data point clave
- Blur background cuando algo es critical

**Ejemplo:**
```
Revelar stats:
1. Headline entra (800ms)
2. Pausa (200ms)
3. Stat 1 entra (400ms)
4. Pausa (200ms)
5. Stat 2 entra (400ms)
6. Pausa (200ms)
7. Stat 3 entra (400ms)

Total: 3 segundos, atención dirigida
```

### 4. Straight Ahead vs. Pose to Pose
**Concepto**: Planificar keyframes vs. animar fluidamente

**En presentaciones:**
- Pose to Pose: Define estados clave (inicio, mitad, fin)
- Straight: Deja que el easing maneje la transición

**Preferir**: Pose to Pose para control preciso

### 5. Follow Through and Overlapping Action
**Concepto**: Partes diferentes terminan su movimiento en tiempos diferentes

**En presentaciones:**
- Card entra, luego su sombra se intensifica (delay 100ms)
- Texto entra, luego underline se dibuja (delay 200ms)
- Logo entra, luego tagline aparece (delay 300ms)

**Ejemplo:**
```css
.card {
  animation: slideIn 500ms ease-out;
}
.card-shadow {
  animation: shadowGrow 300ms ease-out 200ms; /* delay */
}
```

### 6. Slow In and Slow Out
**Concepto**: Movimientos naturales aceleran/desaceleran gradualmente

**En presentaciones:**
- NUNCA usar `linear` easing
- Preferir `ease-out` para entrances
- Preferir `ease-in` para exits
- Usar `ease-in-out` para transiciones

**Curvas de easing:**
```
Linear:        ────────  (robótico)
Ease-out:      ╱──────  (natural entrance)
Ease-in:       ─────╲  (natural exit)
Ease-in-out:   ╱────╲  (suave ambos lados)
```

### 7. Arc
**Concepto**: Movimientos naturales siguen arcos, no líneas rectas

**En presentaciones:**
- Elementos que "caen" siguen parábola
- Rotaciones siguen arco natural
- Transiciones pueden seguir path curvo

### 8. Secondary Action
**Concepto**: Acción secundaria que refuerza la principal

**En presentaciones:**
- Número incrementa MIENTRAS el gráfico crece
- Background cambia color MIENTRAS el slide transiciona
- Partículas sutiles MIENTRAS aparece el logo

### 9. Timing
**Concepto**: Velocidad de la animación comunica peso/importancia

**En presentaciones:**

| Duración | Uso | Sensación |
|----------|-----|-----------|
| 100-200ms | Micro-interactions, hover | Instantáneo, responsivo |
| 300-500ms | Standard transitions, slide changes | Natural, confortable |
| 600-1000ms | Animaciones complejas, reveals | Dramático, importante |
| 1000ms+ | Storytelling, buildups | Épico, climático |

### 10. Exaggeration
**Concepto**: Exagerar para claridad, no realismo

**En presentaciones:**
- Bounce puede ser más pronunciado que en vida real
- Scale hover puede ser 10% (en lugar de 2%)
- Color shift puede ser dramático

### 11. Solid Drawing
**Concepto**: Elementos deben sentirse con volumen/peso

**En presentaciones:**
- Sombras sugieren profundidad
- Gradientes sutiles dan dimensión
- Overlays crean capas

### 12. Appeal
**Concepto**: Diseño debe ser agradable de observar

**En presentaciones:**
- Movimientos suaves, no bruscos
- Timings placenteros
- Transiciones que se sienten "right"

## Tipos de Animaciones para Presentaciones

### 1. Entrance Animations

**Fade In**
- Uso: Suave, no distrae, universal
- Timing: 300-500ms
- Easing: ease-out

**Slide In**
- Uso: Direccional, energético
- Direcciones: From left (natural lectura), from bottom (foundation), from top (importante)
- Timing: 400-600ms
- Easing: ease-out

**Scale In**
- Uso: Llamar atención, impacto
- Scale: 0 → 1 o 0.8 → 1
- Timing: 400ms
- Easing: ease-out o back-out (ligero overshoot)

**Zoom & Fade**
- Uso: Dramático, heroico
- Scale: 0.95 → 1 con opacity 0 → 1
- Timing: 600ms
- Easing: ease-out

### 2. Exit Animations

**Regla general: Exits más rápidos que entrances**

**Fade Out**
- Timing: 200-300ms (más rápido que fade in)
- Easing: ease-in

**Slide Out**
- Timing: 300-400ms
- Easing: ease-in
- Dirección: Opposite de entrada, o hacia donde va la atención

**Scale Out**
- Scale: 1 → 0.95 con fade
- Timing: 300ms
- Easing: ease-in

### 3. Attention Animations

**Pulse**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
Duration: 1s
Iteration: 2-3x (no infinito)
```

**Wiggle/Shake**
```css
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
}
Uso: Llamar atención a error o nuevo elemento
```

**Glow**
```css
@keyframes glow {
  0%, 100% { box-shadow: 0 0 10px rgba(color, 0.3); }
  50% { box-shadow: 0 0 20px rgba(color, 0.6); }
}
Uso: CTAs, elementos importantes
```

### 4. Transition Animations

**Slide Transition**
```
Current slide: translateX(0) → translateX(-100%)
Next slide: translateX(100%) → translateX(0)
Timing: 500ms
Easing: ease-in-out
```

**Fade Transition**
```
Current: opacity 1 → 0
Next: opacity 0 → 1 (delay 200ms)
Timing: 300ms each
```

**Zoom Transition**
```
Current: scale(1) → scale(1.1) + opacity 0
Next: scale(0.9) → scale(1) + opacity 1
Timing: 600ms
Creates depth perception
```

### 5. Data Visualizations

**Bar Chart Grow**
```css
.bar {
  height: 0;
  animation: growBar 800ms ease-out forwards;
}
@keyframes growBar {
  to { height: var(--final-height); }
}
```

**Number Counter**
```javascript
// Incrementa número desde 0 hasta valor final
function animateValue(start, end, duration) {
  // Easing: ease-out
  // Hace que los números sean "reales"
}
```

**Line Chart Draw**
```css
.chart-line {
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: drawLine 2s ease-out forwards;
}
@keyframes drawLine {
  to { stroke-dashoffset: 0; }
}
```

## Motion Design Systems

### Velocidades consistentes

Define una escala de velocidades:

```javascript
const timing = {
  instant: 100,   // Micro-interactions
  fast: 200,      // Hovers, clicks
  normal: 300,    // Standard transitions
  slow: 500,      // Slide changes
  slower: 800,    // Complex animations
  slowest: 1200   // Storytelling moments
}
```

### Easing system

```javascript
const easing = {
  // Entrances
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  
  // Exits
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  
  // Transitions
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  
  // Emphasis
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  
  // Smooth
  smooth: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
}
```

## Patterns de Animación

### Pattern 1: Stagger (Secuencial)

Animar múltiples elementos con delay incremental

```javascript
items.forEach((item, index) => {
  item.style.animationDelay = `${index * 100}ms`;
});
```

**Uso**: Lists, grids, bullets

**Ejemplo:**
```
Bullet 1: delay 0ms
Bullet 2: delay 100ms
Bullet 3: delay 200ms
Bullet 4: delay 300ms
```

### Pattern 2: Orchestration

Coordinar múltiples animaciones para un efecto cohesivo

```
t=0ms:    Background fade in
t=200ms:  Logo slide in from left
t=500ms:  Tagline fade in below logo
t=800ms:  CTA button scale in
t=1000ms: Subtle particles start floating
```

### Pattern 3: Responsive Animation

Ajustar según contexto

```css
/* Desktop: animaciones completas */
@media (min-width: 768px) {
  .element { animation: complexEntry 800ms; }
}

/* Mobile: animaciones más simples */
@media (max-width: 767px) {
  .element { animation: simpleFade 400ms; }
}

/* Reduced motion: respetar preferencias */
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; }
}
```

### Pattern 4: State Machines

Definir estados claros con transiciones

```
States:
- Idle (default)
- Hover (cursor over)
- Active (clicked)
- Loading (processing)
- Success (completed)
- Error (failed)

Transitions:
Idle → Hover: scale 1 → 1.05 (200ms)
Hover → Active: scale 1.05 → 0.98 (100ms)
Active → Loading: rotate 0 → 360deg loop
Loading → Success: checkmark draw animation
Loading → Error: shake + red color
```

## Performance Considerations

### Animaciones que NO afectan performance

**Transform properties** (GPU accelerated):
- `translateX`, `translateY`, `translateZ`
- `scale`, `scaleX`, `scaleY`
- `rotate`, `rotateX`, `rotateY`, `rotateZ`
- `skew`

**Opacity**:
- `opacity`

### Animaciones que SÍ afectan performance (evitar)

❌ `width`, `height` (causa reflow)
❌ `top`, `left`, `right`, `bottom` (causa reflow)
❌ `margin`, `padding` (causa reflow)
❌ `background-position` (repaint)

**Mejor alternativa:**
```css
/* ❌ Malo */
.element:hover { width: 300px; }

/* ✅ Bueno */
.element:hover { transform: scaleX(1.5); }
```

### Optimización

```css
/* Habilitar GPU acceleration */
.animated-element {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU layer */
}

/* Pero remover will-change después de la animación */
.animated-element.animation-complete {
  will-change: auto;
}
```

## Casos de Uso Específicos

### Revelar estadísticas clave

```
Sequence:
1. Headline fade in (300ms)
2. Wait 200ms
3. Big number count from 0 to value (1000ms, ease-out)
4. Supporting text fade in below (300ms, delay 800ms)
5. Chart/graph draw (1200ms, delay 1000ms)
```

### Call to Action animation

```css
.cta-button {
  /* Estado base */
  transform: scale(1);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 300ms ease-out;
}

.cta-button:hover {
  transform: scale(1.05) translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

.cta-button:active {
  transform: scale(0.98) translateY(0);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

/* Pulse periódico para atención */
.cta-button.pulse {
  animation: ctaPulse 2s ease-in-out 3; /* 3 veces */
}

@keyframes ctaPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.08); }
}
```

### Slide transitions storytelling

```
Story beat:
"El problema es grande" → Slide con color oscuro, texto pesado
  Transition: Fade + scale down (sentimiento de "peso")

"Pero hay esperanza" → Slide con color vibrante
  Transition: Scale up + brightness (sentimiento de "apertura")

"Aquí está la solución" → Slide con producto/solución
  Transition: Slide from right (movimiento hacia "adelante")
```

## Librería de Microinteractions

### Hover states

```css
/* Link hover: underline draw */
.link {
  position: relative;
}
.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 300ms ease-out;
}
.link:hover::after {
  width: 100%;
}
```

### Loading states

```css
/* Spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}
.spinner {
  animation: spin 1s linear infinite;
}

/* Skeleton loading */
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 0%,
    #e0e0e0 50%,
    #f0f0f0 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}
```

## Checklist de Motion Design

Antes de implementar animaciones:

- [ ] **Cada animación tiene un propósito** comunicativo claro
- [ ] **Timing es consistente** con el motion system
- [ ] **Easing es apropiado** (ease-out para entrances, ease-in para exits)
- [ ] **Performance es buena** (solo transform/opacity)
- [ ] **Respeta prefers-reduced-motion** para accesibilidad
- [ ] **No distrae** del mensaje principal
- [ ] **Secuencia es lógica** (elementos importantes primero)
- [ ] **Duración total razonable** (slide completo < 3 segundos)
- [ ] **Funciona en mobile** (más simple si es necesario)
- [ ] **Se puede saltar** (usuario puede avanzar sin esperar)

## Anti-patterns a evitar

❌ **Animaciones infinitas** que distraen
❌ **Demasiadas animaciones** simultáneas
❌ **Duraciones muy largas** (>2s para elementos simples)
❌ **Linear easing** (se siente robótico)
❌ **Animar todo** (overkill, sin jerarquía)
❌ **Ignorar reduced-motion** preferences
❌ **Animaciones que bloquean** interacción
❌ **Movement sin dirección** (random, caótico)

## Recursos y Referencias

**Librerías:**
- Framer Motion: React animations
- GSAP: JavaScript animation platform
- Anime.js: Lightweight JS animation
- Lottie: After Effects to web

**Inspiración:**
- Dribbble (Motion tag)
- CodePen (Animation tag)
- Awwwards (Sites of the day)

**Learning:**
- **"The Animator's Survival Kit"** - Richard Williams
- **"Motion Design"** - Spencer Drate
- **CSS Animation Rocks** - Online course
- **UI Animation Newsletter** - Val Head

**Tools:**
- Easings.net: Visualizar easing curves
- Cubic-bezier.com: Custom easing creator
- Animista: CSS animation generator
