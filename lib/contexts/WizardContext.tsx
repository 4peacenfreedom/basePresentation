'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface PresentationData {
  // Paso 1: Objetivo
  presentationType?: 'pitch' | 'educational' | 'executive' | 'sermon' | 'launch' | 'workshop' | 'custom';
  customType?: string;

  // Paso 2: Audiencia y Tono
  audience?: string;
  tone?: 'professional' | 'inspirational' | 'casual' | 'formal' | 'creative';

  // Paso 3: Identidad Visual
  brandColors?: string[];
  visualStyle?: 'minimalist' | 'bold' | 'corporate' | 'creative' | 'elegant';
  references?: string[];

  // Paso 4: Contenido
  sourceDocuments?: string;
  keyPoints?: string[];
  structure?: 'auto' | 'linear' | 'non-linear';

  // Paso 5: Opciones adicionales
  includeAnimations?: boolean;
  theme?: string;
}

interface WizardContextType {
  currentStep: number;
  data: PresentationData;
  setCurrentStep: (step: number) => void;
  updateData: (newData: Partial<PresentationData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  resetWizard: () => void;
}

const WizardContext = createContext<WizardContextType | undefined>(undefined);

export function WizardProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<PresentationData>({});

  const updateData = (newData: Partial<PresentationData>) => {
    setData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 5));
  };

  const previousStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setData({});
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        data,
        setCurrentStep,
        updateData,
        nextStep,
        previousStep,
        resetWizard,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

export function useWizard() {
  const context = useContext(WizardContext);
  if (context === undefined) {
    throw new Error('useWizard must be used within a WizardProvider');
  }
  return context;
}
