import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Construir el prompt basado en los datos del wizard
    const prompt = buildPrompt(data);

    // Llamar a Claude para generar la presentación
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 8000,
      temperature: 1,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Extraer el contenido generado
    const content = message.content[0];
    const generatedSlides = content.type === 'text' ? content.text : '';

    // Parsear el JSON de slides
    const slides = parseSlides(generatedSlides);

    return NextResponse.json({
      success: true,
      slides,
      presentationId: generateId(),
    });
  } catch (error) {
    console.error('Error generating presentation:', error);
    return NextResponse.json(
      { success: false, error: 'Error al generar la presentación' },
      { status: 500 }
    );
  }
}

function buildPrompt(data: any): string {
  const {
    presentationType,
    customType,
    audience,
    tone,
    visualStyle,
    brandColors,
    sourceDocuments,
    keyPoints,
    structure,
  } = data;

  return `Eres un experto en crear presentaciones profesionales que combinan copywriting, storytelling, design thinking, diseño gráfico y motion graphics.

**CONTEXTO DE LA PRESENTACIÓN:**
- Tipo: ${presentationType === 'custom' ? customType : presentationType}
- Audiencia: ${audience}
- Tono: ${tone}
- Estilo visual: ${visualStyle}
- Paleta de colores: ${brandColors?.join(', ') || 'No especificada'}
- Estructura: ${structure}

${sourceDocuments ? `**DOCUMENTOS FUENTE:**\n${sourceDocuments}\n` : ''}

${keyPoints?.length > 0 ? `**PUNTOS CLAVE A COMUNICAR:**\n${keyPoints.map((p: string, i: number) => `${i + 1}. ${p}`).join('\n')}\n` : ''}

**TU TAREA:**
Genera una presentación profesional en formato JSON con la siguiente estructura. La presentación debe:

1. **Aplicar principios de copywriting**:
   - Headlines que capturan atención
   - Beneficios sobre features
   - Mensajes claros y concisos
   - CTAs efectivos

2. **Usar storytelling efectivo**:
   - Crear una narrativa coherente
   - Generar arcos emocionales
   - Usar frameworks apropiados (Hero's Journey, Problem-Solution-Impact, etc.)

3. **Seguir el tono seleccionado**: ${tone}

4. **Estructura de navegación**: ${structure === 'non-linear' ? 'Crear navegación 2D con secciones verticales y horizontales' : structure === 'linear' ? 'Secuencia lineal paso a paso' : 'Decidir la mejor estructura'}

**FORMATO DE SALIDA (JSON):**
\`\`\`json
{
  "title": "Título de la presentación",
  "slides": [
    {
      "type": "title",
      "title": "Título principal",
      "subtitle": "Subtítulo opcional",
      "background": "gradient" | "solid" | "image",
      "position": { "h": 0, "v": 0 }
    },
    {
      "type": "content",
      "title": "Título del slide",
      "content": ["Punto 1", "Punto 2", "Punto 3"],
      "layout": "bullets" | "columns" | "centered",
      "position": { "h": 1, "v": 0 }
    },
    {
      "type": "quote",
      "quote": "Cita inspiradora",
      "author": "Autor",
      "position": { "h": 2, "v": 0 }
    },
    {
      "type": "visual",
      "title": "Título",
      "visual": "chart" | "diagram" | "icon",
      "description": "Descripción de qué mostrar",
      "position": { "h": 0, "v": 1 }
    },
    {
      "type": "cta",
      "title": "Call to Action",
      "message": "Mensaje motivador",
      "action": "Texto del botón",
      "position": { "h": 3, "v": 0 }
    }
  ],
  "theme": {
    "primaryColor": "${brandColors?.[0] || '#6366F1'}",
    "secondaryColor": "${brandColors?.[1] || '#818CF8'}",
    "accentColor": "${brandColors?.[2] || '#10B981'}"
  }
}
\`\`\`

**IMPORTANTE:**
- Genera entre 8-15 slides según la complejidad del contenido
- Para navegación no-lineal: usa posiciones h,v para crear una estructura 2D
- Para navegación lineal: incrementa solo h (horizontal)
- Cada slide debe tener un propósito claro
- Usa variedad de tipos de slides para mantener interés
- El contenido debe ser conciso y visual
- Aplica los principios de la base de conocimiento

Responde SOLO con el JSON, sin texto adicional antes ni después.`;
}

function parseSlides(content: string): any {
  try {
    // Intentar extraer JSON del contenido
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]);
    }

    // Si no hay JSON, intentar parsear directamente
    return JSON.parse(content);
  } catch (error) {
    console.error('Error parsing slides:', error);
    // Retornar una presentación de ejemplo si falla el parsing
    return {
      title: 'Presentación Generada',
      slides: [
        {
          type: 'title',
          title: 'Bienvenido',
          subtitle: 'Tu presentación está lista',
          background: 'gradient',
          position: { h: 0, v: 0 },
        },
      ],
      theme: {
        primaryColor: '#6366F1',
        secondaryColor: '#818CF8',
        accentColor: '#10B981',
      },
    };
  }
}

function generateId(): string {
  return `pres-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
