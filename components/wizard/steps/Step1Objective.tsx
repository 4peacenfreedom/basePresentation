'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mic2, BookOpen, BarChart3, Church, Rocket, Users, Sparkles } from 'lucide-react';

const presentationTypes = [
  {
    id: 'pitch',
    title: 'Pitch Deck',
    description: 'Vender o convencer inversionistas',
    Icon: Mic2,
  },
  {
    id: 'educational',
    title: 'Educativa',
    description: 'Enseñar o formar audiencia',
    Icon: BookOpen,
  },
  {
    id: 'executive',
    title: 'Reporte Ejecutivo',
    description: 'Presentar resultados y datos',
    Icon: BarChart3,
  },
  {
    id: 'sermon',
    title: 'Sermón Visual',
    description: 'Inspirar y conectar espiritualmente',
    Icon: Church,
  },
  {
    id: 'launch',
    title: 'Product Launch',
    description: 'Lanzar producto o servicio',
    Icon: Rocket,
  },
  {
    id: 'workshop',
    title: 'Workshop/Taller',
    description: 'Facilitar aprendizaje práctico',
    Icon: Users,
  },
];

export default function Step1Objective() {
  const { data, updateData, nextStep } = useWizard();
  const [showCustom, setShowCustom] = useState(false);
  const [customType, setCustomType] = useState('');

  const handleSelectType = (type: string) => {
    if (type === 'custom') {
      setShowCustom(true);
    } else {
      updateData({ presentationType: type as any });
      setTimeout(nextStep, 300);
    }
  };

  const handleCustomSubmit = () => {
    if (customType.trim()) {
      updateData({ presentationType: 'custom', customType: customType.trim() });
      setTimeout(nextStep, 300);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-foreground mb-2">
        ¿Qué tipo de presentación necesitas?
      </h2>
      <p className="text-muted mb-8">
        Selecciona el objetivo principal de tu presentación
      </p>

      {!showCustom ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {presentationTypes.map((type, index) => (
            <motion.button
              key={type.id}
              onClick={() => handleSelectType(type.id)}
              className={`
                relative p-6 rounded-xl text-left
                bg-white border-2 transition-all duration-200
                hover:shadow-lg hover:scale-[1.02] cursor-pointer
                ${data.presentationType === type.id ? 'border-primary shadow-md' : 'border-gray-200'}
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <type.Icon
                    className={`w-8 h-8 ${
                      data.presentationType === type.id ? 'text-primary' : 'text-slate-400'
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {type.description}
                  </p>
                </div>
              </div>

              {data.presentationType === type.id && (
                <motion.div
                  className="absolute top-3 right-3"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}

          {/* Custom Option */}
          <motion.button
            onClick={() => setShowCustom(true)}
            className="p-6 rounded-xl text-left bg-white border-2 border-dashed border-gray-200 hover:border-primary transition-all duration-200 hover:shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: presentationTypes.length * 0.05 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex items-center gap-4">
              <Sparkles className="w-8 h-8 text-slate-400" strokeWidth={1.5} />
              <div>
                <h3 className="font-semibold text-lg text-slate-900 mb-1">
                  Personalizado
                </h3>
                <p className="text-sm text-slate-600">
                  Define tu propio tipo de presentación
                </p>
              </div>
            </div>
          </motion.button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="max-w-md mx-auto">
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Describe tu tipo de presentación
            </label>
            <input
              type="text"
              value={customType}
              onChange={(e) => setCustomType(e.target.value)}
              placeholder="Ej: Presentación de ventas B2B"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-slate-900 placeholder:text-slate-400"
              autoFocus
              onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
            />
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => setShowCustom(false)}
                className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-200 text-slate-900 hover:bg-gray-50 transition-colors font-medium"
              >
                Volver
              </button>
              <button
                onClick={handleCustomSubmit}
                disabled={!customType.trim()}
                className="flex-1 px-6 py-3 rounded-lg bg-cta text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
