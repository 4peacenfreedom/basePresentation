import { WizardProvider } from '@/lib/contexts/WizardContext';
import Wizard from '@/components/wizard/Wizard';
import WizardSteps from '@/components/wizard/WizardSteps';

export const metadata = {
  title: 'Crear Presentación | Base Presentation',
  description: 'Crea tu presentación personalizada con inteligencia artificial',
};

export default function CreatePage() {
  return (
    <WizardProvider>
      <Wizard>
        <WizardSteps />
      </Wizard>
    </WizardProvider>
  );
}
