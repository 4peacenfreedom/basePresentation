import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - Base Presentation',
  description: 'Demostración interactiva de Base Presentation',
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
