'use client';

import { useEffect } from 'react';

export default function RevealStyles() {
  useEffect(() => {
    // Cargar estilos de reveal.js dinámicamente
    const loadStyles = () => {
      // Verificar si ya están cargados
      if (document.getElementById('reveal-css')) return;

      // Crear links para los estilos
      const revealCSS = document.createElement('link');
      revealCSS.id = 'reveal-css';
      revealCSS.rel = 'stylesheet';
      revealCSS.href = '/reveal.js/reveal.css';
      document.head.appendChild(revealCSS);

      const themeCSS = document.createElement('link');
      themeCSS.id = 'reveal-theme-css';
      themeCSS.rel = 'stylesheet';
      themeCSS.href = '/reveal.js/theme/black.css';
      document.head.appendChild(themeCSS);

      // Agregar clase al HTML para estilos full-page
      document.documentElement.classList.add('reveal-full-page');
      document.body.classList.add('reveal-full-page');
    };

    loadStyles();

    return () => {
      // Limpiar al desmontar
      document.documentElement.classList.remove('reveal-full-page');
      document.body.classList.remove('reveal-full-page');
    };
  }, []);

  return null;
}
