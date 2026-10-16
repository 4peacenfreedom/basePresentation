'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const structureOptions = [
  { id: 'auto', label: 'Automática', description: 'Claude decide la mejor estructura', icon: '🤖' },
  { id: 'linear', label: 'Lineal', description: 'Secuencia paso a paso tradicional', icon: '➡️' },
  { id: 'non-linear', label: 'No Lineal', description: 'Navegación 2D flexible (recomendado)', icon: '🔀' },
];

export default function Step4Content() {
  const { data, updateData, nextStep, previousStep } = useWizard();
  const [sourceDocuments, setSourceDocuments] = useState(data.sourceDocuments || '');
  const [keyPointInput, setKeyPointInput] = useState('');
  const [keyPoints, setKeyPoints] = useState<string[]>(data.keyPoints || []);
  const [structure, setStructure] = useState(data.structure || 'auto');

  const handleAddKeyPoint = () => {
    if (keyPointInput.trim() && keyPoints.length < 10) {
      setKeyPoints([...keyPoints, keyPointInput.trim()]);
      setKeyPointInput('');
    }
  };

  const handleRemoveKeyPoint = (index: number) => {
    setKeyPoints(keyPoints.filter((_, i) => i !== index));
  };

  const handleContinue = () => {
    if (sourceDocuments.trim() || keyPoints.length > 0) {
      updateData({
        sourceDocuments: sourceDocuments.trim(),
        keyPoints,
        structure: structure as any,
      });
      nextStep();
    }
  };

  const canContinue = sourceDocuments.trim() || keyPoints.length > 0;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Contenido y Estructura
      </h2>
      <p className="text-slate-600 mb-8">
        Proporciona el material base para tu presentación
      </p>

      <div className="space-y-8">
        {/* Source Documents */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Documentos o textos fuente
            <span className="text-muted font-normal ml-2">(opcional)</span>
          </label>
          <textarea
            value={sourceDocuments}
            onChange={(e) => setSourceDocuments(e.target.value)}
            placeholder="Pega aquí el contenido de tus documentos, notas, o cualquier texto que quieras incluir en la presentación..."
            className="w-full px-4 py-3 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors text-foreground resize-none"
            rows={6}
          />
          <p className="text-xs text-muted mt-2">
            Claude analizará este contenido para generar los slides
          </p>
        </div>

        {/* Key Points */}
        <div>
          <label className="block text-sm font-semibold text-foreground mb-3">
            Puntos clave a comunicar
            <span className="text-muted font-normal ml-2">(opcional)</span>
          </label>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={keyPointInput}
              onChange={(e) => setKeyPointInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddKeyPoint())}
              placeholder="Ej: Incremento del 300% en ventas"
              className="flex-1 px-4 py-2 rounded-lg border-2 border-border focus:border-primary focus:outline-none transition-colors text-sm"
              maxLength={100}
            />
            <button
              onClick={handleAddKeyPoint}
              disabled={!keyPointInput.trim() || keyPoints.length >= 10}
              className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Agregar
            </button>
          </div>

          {keyPoints.length > 0 && (
            <div className="space-y-2">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-border group"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </span>
                  <p className="flex-1 text-sm text-slate-900">{point}</p>
                  <button
                    onClick={() => handleRemoveKeyPoint(index)}
                    className="flex-shrink-0 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {keyPoints.length === 0 && (
            <p className="text-xs text-slate-600 italic">
              Agrega los mensajes principales que quieres transmitir
            </p>
          )}
        </div>

        {/* Structure */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Tipo de navegación
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {structureOptions.map((option, index) => (
              <motion.button
                key={option.id}
                onClick={() => setStructure(option.id)}
                className={`
                  p-4 rounded-lg text-left transition-all duration-200
                  ${structure === option.id
                    ? 'bg-primary text-white shadow-md scale-[1.02]'
                    : 'bg-white border-2 border-gray-200 hover:border-primary hover:shadow-sm'
                  }
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-2xl mb-2">{option.icon}</div>
                <h4 className={`font-semibold mb-1 ${structure === option.id ? 'text-white' : 'text-slate-900'}`}>
                  {option.label}
                </h4>
                <p className={`text-sm ${structure === option.id ? 'text-white/90' : 'text-slate-600'}`}>
                  {option.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex gap-4">
        <button
          onClick={previousStep}
          className="px-6 py-3 rounded-lg border-2 border-gray-200 text-slate-900 font-medium hover:bg-gray-50 transition-colors"
        >
          Volver
        </button>
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          className="flex-1 px-6 py-3 rounded-lg bg-cta text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continuar al Preview
        </button>
      </div>
    </div>
  );
}
