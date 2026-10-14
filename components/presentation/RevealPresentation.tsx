'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';
import 'reveal.js/dist/reveal.css';

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
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (!deckRef.current) return;

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

    revealRef.current.initialize().then(() => {
      console.log('Reveal.js initialized');
    });

    // Importar tema dinámicamente
    import(`reveal.js/dist/theme/${theme}.css`);

    return () => {
      revealRef.current?.destroy();
    };
  }, [theme, transition, controls, progress, center, hash, navigationMode]);

  return (
    <div className="reveal" ref={deckRef}>
      <div className="slides">{children}</div>
    </div>
  );
}
