'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  { number: 1, title: 'Objetivo', description: 'Tipo de presentación' },
  { number: 2, title: 'Audiencia', description: 'Público y tono' },
  { number: 3, title: 'Visual', description: 'Identidad visual' },
  { number: 4, title: 'Contenido', description: 'Materiales fuente' },
  { number: 5, title: 'Preview', description: 'Revisión final' },
];

interface WizardProps {
  children: React.ReactNode;
}

export default function Wizard({ children }: WizardProps) {
  const { currentStep } = useWizard();

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 flex items-center">
                <div className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      currentStep >= step.number
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-white text-slate-400 border-2 border-gray-300'
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {currentStep > step.number ? (
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </motion.div>

                  {/* Step Label */}
                  <div className="mt-2 text-center hidden sm:block">
                    <p className={`text-sm font-semibold ${currentStep >= step.number ? 'text-slate-900' : 'text-slate-500'}`}>
                      {step.title}
                    </p>
                    <p className="text-xs text-slate-500">{step.description}</p>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="h-0.5 flex-1 mx-2 relative top-[-20px]">
                    <div className="h-full bg-gray-300" />
                    <motion.div
                      className="h-full bg-primary absolute top-0 left-0"
                      initial={{ width: '0%' }}
                      animate={{ width: currentStep > step.number ? '100%' : '0%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Wizard Content */}
        <motion.div
          className="bg-card rounded-2xl shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
