'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, Sparkles, Smile, GraduationCap, Palette } from 'lucide-react';

const toneOptions = [
  { id: 'professional', label: 'Profesional', description: 'Formal y confiable', Icon: Briefcase },
  { id: 'inspirational', label: 'Inspirador', description: 'Motivador y emotivo', Icon: Sparkles },
  { id: 'casual', label: 'Casual', description: 'Amigable y cercano', Icon: Smile },
  { id: 'formal', label: 'Formal', description: 'Serio y corporativo', Icon: GraduationCap },
  { id: 'creative', label: 'Creativo', description: 'Innovador y audaz', Icon: Palette },
];

export default function Step2Audience() {
  const { data, updateData, nextStep, previousStep } = useWizard();
  const [audience, setAudience] = useState(data.audience || '');
  const [selectedTone, setSelectedTone] = useState(data.tone || '');

  const handleContinue = () => {
    if (audience.trim() && selectedTone) {
      updateData({ audience: audience.trim(), tone: selectedTone as any });
      nextStep();
    }
  };

  const canContinue = audience.trim() && selectedTone;

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-2">
        Audiencia y Tono
      </h2>
      <p className="text-muted mb-8">
        Define a quién va dirigida tu presentación y el estilo de comunicación
      </p>

      <div className="space-y-8">
        {/* Audience Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            ¿A quién va dirigida esta presentación?
          </label>
          <input
            type="text"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
            placeholder="Ej: Inversionistas tecnológicos, Estudiantes universitarios, Equipo ejecutivo..."
            className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
          />
          <p className="text-xs text-slate-600 mt-2">
            Describe el perfil de tu audiencia principal
          </p>
        </div>

        {/* Tone Selection */}
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-3">
            ¿Qué tono prefieres?
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {toneOptions.map((tone, index) => (
              <motion.button
                key={tone.id}
                onClick={() => setSelectedTone(tone.id)}
                className={`
                  p-4 rounded-lg text-left transition-all duration-200
                  ${selectedTone === tone.id
                    ? 'bg-primary text-white shadow-md scale-[1.02]'
                    : 'bg-white border-2 border-gray-200 hover:border-primary hover:shadow-sm'
                  }
                `}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <tone.Icon
                  className={`w-7 h-7 mb-2 ${selectedTone === tone.id ? 'text-white' : 'text-slate-400'}`}
                  strokeWidth={1.5}
                />
                <h4 className={`font-semibold mb-1 ${selectedTone === tone.id ? 'text-white' : 'text-slate-900'}`}>
                  {tone.label}
                </h4>
                <p className={`text-sm ${selectedTone === tone.id ? 'text-white/90' : 'text-slate-600'}`}>
                  {tone.description}
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
          Continuar
        </button>
      </div>
    </div>
  );
}
