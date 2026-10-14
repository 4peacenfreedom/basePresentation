'use client';

import { useEffect, useRef } from 'react';
import RevealStyles from './RevealStyles';

interface RevealPresentationProps {
  children: React.ReactNode;
  theme?: 'black' | 'white' | 'league' | 'beige' | 'sky' | 'night' | 'serif' | 'simple' | 'solarized';
  transition?: 'none' | 'fade' | 'slide' | 'convex' | 'concave' | 'zoom';
  controls?: boolean;
  progress?: boolean;
  center?: boolean;
  hash?: boolean;
  navigationMode?: 'default' | 'linear' | 'grid';
}

export default function RevealPresentation({
  children,
  theme = 'black',
  transition = 'slide',
  controls = true,
  progress = true,
  center = true,
  hash = true,
  navigationMode = 'default',
}: RevealPresentationProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<any>(null);

  useEffect(() => {
    // Importar Reveal.js dinámicamente solo en el cliente
    let mounted = true;

    const initReveal = async () => {
      if (!deckRef.current || !mounted) return;

      // Esperar un tick para asegurar que los estilos estén cargados
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Importar Reveal.js dinámicamente
      const Reveal = (await import('reveal.js')).default;

      // Inicializar Reveal.js
      revealRef.current = new Reveal(deckRef.current, {
        embedded: false,
        controls,
        progress,
        center,
        hash,
        transition,
        navigationMode,

        // Configuración de teclado
        keyboard: true,

        // Overview mode
        overview: true,

        // Responsive
        width: 1920,
        height: 1080,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,

        // Plugins
        plugins: [],
      });

      await revealRef.current.initialize();
      console.log('Reveal.js initialized successfully!');
    };

    initReveal();

    return () => {
      mounted = false;
      if (revealRef.current) {
        revealRef.current.destroy();
      }
    };
  }, [theme, transition, controls, progress, center, hash, navigationMode]);

  return (
    <>
      <RevealStyles />
      <div className="reveal" ref={deckRef}>
        <div className="slides">{children}</div>
      </div>
    </>
  );
}
