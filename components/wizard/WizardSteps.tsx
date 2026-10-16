'use client';

import { useWizard } from '@/lib/contexts/WizardContext';
import Step1Objective from './steps/Step1Objective';
import Step2Audience from './steps/Step2Audience';
import Step3Visual from './steps/Step3Visual';
import Step4Content from './steps/Step4Content';
import Step5Preview from './steps/Step5Preview';

export default function WizardSteps() {
  const { currentStep } = useWizard();

  switch (currentStep) {
    case 1:
      return <Step1Objective />;
    case 2:
      return <Step2Audience />;
    case 3:
      return <Step3Visual />;
    case 4:
      return <Step4Content />;
    case 5:
      return <Step5Preview />;
    default:
      return <Step1Objective />;
  }
}
