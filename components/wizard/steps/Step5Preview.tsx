'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const presentationTypeLabels: Record<string, string> = {
  pitch: 'Pitch Deck',
  educational: 'Educativa',
  executive: 'Reporte Ejecutivo',
  sermon: 'Sermón Visual',
  launch: 'Product Launch',
  workshop: 'Workshop/Taller',
  custom: 'Personalizado',
};

const toneLabels: Record<string, string> = {
  professional: 'Profesional',
  inspirational: 'Inspirador',
  casual: 'Casual',
  formal: 'Formal',
  creative: 'Creativo',
};

const styleLabels: Record<string, string> = {
  minimalist: 'Minimalista',
  bold: 'Bold',
  corporate: 'Corporativo',
  creative: 'Creativo',
  elegant: 'Elegante',
};

const structureLabels: Record<string, string> = {
  auto: 'Automática (Claude decide)',
  linear: 'Lineal',
  'non-linear': 'No Lineal (2D)',
};

export default function Step5Preview() {
  const { data, previousStep, resetWizard } = useWizard();
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);

    try {
      // Llamar a la API para generar la presentación
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error al generar la presentación');
      }

      const result = await response.json();

      if (result.success) {
        // Guardar la presentación en localStorage
        localStorage.setItem(
          `presentation-${result.presentationId}`,
          JSON.stringify(result.slides)
        );

        // Redirigir a la presentación generada
        router.push(`/presentation/${result.presentationId}`);
      } else {
        alert('Error al generar la presentación. Por favor, intenta de nuevo.');
        setIsGenerating(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al generar la presentación. Por favor, intenta de nuevo.');
      setIsGenerating(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Revisión Final
      </h2>
      <p className="text-slate-600 mb-8">
        Verifica que toda la información sea correcta antes de generar
      </p>

      <div className="space-y-6">
        {/* Objetivo */}
        <motion.div
          className="p-6 rounded-xl bg-white border-2 border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 mb-1">Tipo de Presentación</h3>
              <p className="text-lg font-semibold text-slate-900">
                {data.presentationType ? presentationTypeLabels[data.presentationType] : 'No definido'}
                {data.customType && ` - ${data.customType}`}
              </p>
            </div>
            <button
              onClick={() => previousStep()}
              className="text-primary hover:underline text-sm font-medium"
            >
              Editar
            </button>
          </div>
        </motion.div>

        {/* Audiencia y Tono */}
        <motion.div
          className="p-6 rounded-xl bg-white border-2 border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-500">Audiencia y Tono</h3>
            <button
              onClick={() => previousStep()}
              className="text-primary hover:underline text-sm font-medium"
            >
              Editar
            </button>
          </div>
          <div className="space-y-2">
            <div>
              <span className="text-sm text-slate-600">Audiencia: </span>
              <span className="text-slate-900 font-medium">{data.audience || 'No definida'}</span>
            </div>
            <div>
              <span className="text-sm text-slate-600">Tono: </span>
              <span className="text-slate-900 font-medium">
                {data.tone ? toneLabels[data.tone] : 'No definido'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Identidad Visual */}
        <motion.div
          className="p-6 rounded-xl bg-white border-2 border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-500">Identidad Visual</h3>
            <button
              onClick={() => previousStep()}
              className="text-primary hover:underline text-sm font-medium"
            >
              Editar
            </button>
          </div>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-slate-600">Estilo: </span>
              <span className="text-slate-900 font-medium">
                {data.visualStyle ? styleLabels[data.visualStyle] : 'No definido'}
              </span>
            </div>
            {data.brandColors && data.brandColors.length > 0 && (
              <div>
                <span className="text-sm text-slate-600 block mb-2">Paleta de colores:</span>
                <div className="flex gap-2 flex-wrap">
                  {data.brandColors.map((color) => (
                    <div key={color} className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-50">
                      <div
                        className="w-5 h-5 rounded border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs font-mono text-slate-900">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Contenido */}
        <motion.div
          className="p-6 rounded-xl bg-white border-2 border-gray-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-500">Contenido y Estructura</h3>
            <button
              onClick={() => previousStep()}
              className="text-primary hover:underline text-sm font-medium"
            >
              Editar
            </button>
          </div>
          <div className="space-y-3">
            {data.sourceDocuments && (
              <div>
                <span className="text-sm text-slate-600 block mb-1">Documentos fuente:</span>
                <p className="text-sm text-slate-900 bg-gray-50 p-3 rounded-lg line-clamp-3">
                  {data.sourceDocuments}
                </p>
              </div>
            )}
            {data.keyPoints && data.keyPoints.length > 0 && (
              <div>
                <span className="text-sm text-slate-600 block mb-2">Puntos clave ({data.keyPoints.length}):</span>
                <ul className="space-y-1">
                  {data.keyPoints.slice(0, 3).map((point, index) => (
                    <li key={index} className="text-sm text-slate-900 flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                  {data.keyPoints.length > 3 && (
                    <li className="text-sm text-slate-600 italic">
                      Y {data.keyPoints.length - 3} más...
                    </li>
                  )}
                </ul>
              </div>
            )}
            <div>
              <span className="text-sm text-slate-600">Estructura: </span>
              <span className="text-slate-900 font-medium">
                {data.structure ? structureLabels[data.structure] : 'No definida'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Actions */}
      <div className="mt-10 flex gap-4">
        <button
          onClick={previousStep}
          disabled={isGenerating}
          className="px-6 py-3 rounded-lg border-2 border-gray-200 text-slate-900 font-medium hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Volver
        </button>
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              <span>Generando tu presentación...</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Generar Presentación con IA</span>
            </>
          )}
        </button>
      </div>

      {/* Reset Option */}
      <div className="mt-6 text-center">
        <button
          onClick={resetWizard}
          disabled={isGenerating}
          className="text-sm text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
        >
          Comenzar de nuevo
        </button>
      </div>
    </div>
  );
}
