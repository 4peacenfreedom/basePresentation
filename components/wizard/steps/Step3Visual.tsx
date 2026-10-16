'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

const visualStyles = [
  { id: 'minimalist', label: 'Minimalista', description: 'Limpio y simple', gradient: 'from-gray-100 to-gray-200' },
  { id: 'bold', label: 'Bold', description: 'Audaz y llamativo', gradient: 'from-purple-500 to-pink-500' },
  { id: 'corporate', label: 'Corporativo', description: 'Profesional y formal', gradient: 'from-blue-600 to-blue-800' },
  { id: 'creative', label: 'Creativo', description: 'Innovador y único', gradient: 'from-orange-400 to-red-500' },
  { id: 'elegant', label: 'Elegante', description: 'Sofisticado y refinado', gradient: 'from-indigo-900 to-purple-900' },
];

const suggestedPalettes = [
  { name: 'Indigo & Emerald', colors: ['#6366F1', '#10B981', '#818CF8'] },
  { name: 'Ocean Blue', colors: ['#0EA5E9', '#06B6D4', '#3B82F6'] },
  { name: 'Sunset', colors: ['#F59E0B', '#EF4444', '#EC4899'] },
  { name: 'Forest', colors: ['#059669', '#10B981', '#84CC16'] },
  { name: 'Purple Haze', colors: ['#8B5CF6', '#A78BFA', '#C084FC'] },
  { name: 'Monochrome', colors: ['#1F2937', '#6B7280', '#9CA3AF'] },
];

export default function Step3Visual() {
  const { data, updateData, nextStep, previousStep } = useWizard();
  const [visualStyle, setVisualStyle] = useState(data.visualStyle || '');
  const [brandColors, setBrandColors] = useState<string[]>(data.brandColors || []);
  const [customColor, setCustomColor] = useState('');

  const handleSelectPalette = (colors: string[]) => {
    setBrandColors(colors);
  };

  const handleAddCustomColor = () => {
    if (customColor && /^#[0-9A-Fa-f]{6}$/.test(customColor)) {
      if (!brandColors.includes(customColor) && brandColors.length < 5) {
        setBrandColors([...brandColors, customColor]);
        setCustomColor('');
      }
    }
  };

  const handleRemoveColor = (color: string) => {
    setBrandColors(brandColors.filter(c => c !== color));
  };

  const handleContinue = () => {
    if (visualStyle && brandColors.length > 0) {
      updateData({ visualStyle: visualStyle as any, brandColors });
      nextStep();
    }
  };

  const canContinue = visualStyle && brandColors.length > 0;

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Identidad Visual
      </h2>
      <p className="text-muted mb-8">
        Define el estilo y colores de tu presentación
      </p>

      <div className="space-y-8">
        {/* Visual Style */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Estilo Visual
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {visualStyles.map((style, index) => (
              <motion.button
                key={style.id}
                onClick={() => setVisualStyle(style.id)}
                className={`
                  relative p-4 rounded-lg text-left overflow-hidden transition-all duration-200
                  ${visualStyle === style.id ? 'ring-2 ring-primary shadow-md scale-[1.02]' : 'hover:shadow-sm'}
                `}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-${visualStyle === style.id ? '100' : '80'}`} />
                <div className="relative z-10">
                  <h4 className="font-semibold text-white mb-1">
                    {style.label}
                  </h4>
                  <p className="text-sm text-white/90">
                    {style.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Color Palette */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            Paleta de Colores
          </label>

          {/* Suggested Palettes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
            {suggestedPalettes.map((palette, index) => (
              <motion.button
                key={palette.name}
                onClick={() => handleSelectPalette(palette.colors)}
                className="p-3 rounded-lg border-2 border-border hover:border-primary transition-all"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -2 }}
              >
                <div className="flex gap-1 mb-2">
                  {palette.colors.map((color) => (
                    <div
                      key={color}
                      className="flex-1 h-8 rounded"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <p className="text-xs text-muted text-center">{palette.name}</p>
              </motion.button>
            ))}
          </div>

          {/* Custom Color Input */}
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={customColor}
              onChange={(e) => setCustomColor(e.target.value)}
              placeholder="#6366F1"
              className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm text-slate-900 placeholder:text-slate-400"
              maxLength={7}
            />
            <button
              onClick={handleAddCustomColor}
              disabled={!customColor || !/^#[0-9A-Fa-f]{6}$/.test(customColor) || brandColors.length >= 5}
              className="px-4 py-2 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm"
            >
              Agregar
            </button>
          </div>

          {/* Selected Colors */}
          {brandColors.length > 0 && (
            <div className="p-4 rounded-lg bg-gray-50 border-2 border-gray-200">
              <p className="text-sm font-medium text-slate-900 mb-3">Colores seleccionados:</p>
              <div className="flex flex-wrap gap-2">
                {brandColors.map((color) => (
                  <div
                    key={color}
                    className="group relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200"
                  >
                    <div
                      className="w-6 h-6 rounded border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-xs font-mono text-slate-900">{color}</span>
                    <button
                      onClick={() => handleRemoveColor(color)}
                      className="ml-1 text-red-500 hover:text-red-700 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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
          Continuar
        </button>
      </div>
    </div>
  );
}
