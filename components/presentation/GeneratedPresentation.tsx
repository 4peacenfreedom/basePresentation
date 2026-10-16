'use client';

import { useEffect, useRef } from 'react';
import Reveal from 'reveal.js';

interface Slide {
  type: 'title' | 'content' | 'quote' | 'visual' | 'cta';
  title?: string;
  subtitle?: string;
  content?: string[];
  quote?: string;
  author?: string;
  message?: string;
  action?: string;
  visual?: string;
  description?: string;
  background?: string;
  layout?: string;
  position: { h: number; v: number };
}

interface PresentationData {
  title: string;
  slides: Slide[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

interface GeneratedPresentationProps {
  data: PresentationData;
}

export default function GeneratedPresentation({ data }: GeneratedPresentationProps) {
  const deckRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Reveal.Api | null>(null);

  useEffect(() => {
    if (deckRef.current && !revealRef.current) {
      const deck = new Reveal(deckRef.current, {
        embedded: false,
        width: 1920,
        height: 1080,
        margin: 0.04,
        minScale: 0.2,
        maxScale: 2.0,
        controls: true,
        progress: true,
        center: true,
        hash: true,
        transition: 'slide',
        backgroundTransition: 'fade',
      });

      deck.initialize().then(() => {
        revealRef.current = deck;
      });
    }

    return () => {
      if (revealRef.current) {
        revealRef.current.destroy();
        revealRef.current = null;
      }
    };
  }, []);

  // Organizar slides en estructura 2D
  const organizedSlides = organizeSlides(data.slides);

  return (
    <>
      <style>{generateCustomCSS(data.theme)}</style>
      <div className="reveal" ref={deckRef}>
        <div className="slides">
          {organizedSlides.map((row, vIndex) => (
            <section key={vIndex}>
              {row.map((slide, hIndex) => (
                <section key={`${vIndex}-${hIndex}`}>
                  {renderSlide(slide, data.theme)}
                </section>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}

function organizeSlides(slides: Slide[]): Slide[][] {
  const maxV = Math.max(...slides.map(s => s.position.v));
  const organized: Slide[][] = [];

  for (let v = 0; v <= maxV; v++) {
    const rowSlides = slides
      .filter(s => s.position.v === v)
      .sort((a, b) => a.position.h - b.position.h);
    if (rowSlides.length > 0) {
      organized.push(rowSlides);
    }
  }

  return organized;
}

function renderSlide(slide: Slide, theme: any) {
  const { type } = slide;

  switch (type) {
    case 'title':
      return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary to-secondary text-white p-16">
          <h1 className="text-8xl font-bold mb-8 text-center">{slide.title}</h1>
          {slide.subtitle && (
            <p className="text-4xl text-white/90 text-center max-w-4xl">{slide.subtitle}</p>
          )}
        </div>
      );

    case 'content':
      return (
        <div className="p-16">
          <h2 className="text-6xl font-bold mb-12 text-slate-900">{slide.title}</h2>
          {slide.layout === 'bullets' && (
            <ul className="space-y-6 text-4xl text-slate-700">
              {slide.content?.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-primary text-5xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {slide.layout === 'centered' && (
            <div className="flex items-center justify-center h-full">
              <p className="text-5xl text-slate-700 text-center max-w-4xl leading-relaxed">
                {slide.content?.join(' ')}
              </p>
            </div>
          )}
        </div>
      );

    case 'quote':
      return (
        <div className="flex flex-col items-center justify-center h-full p-16 bg-slate-50">
          <blockquote className="text-5xl italic text-slate-800 text-center max-w-5xl mb-8 relative">
            <span className="text-primary text-9xl absolute -top-12 -left-8">"</span>
            {slide.quote}
            <span className="text-primary text-9xl absolute -bottom-16 -right-8">"</span>
          </blockquote>
          {slide.author && (
            <cite className="text-3xl text-slate-600 not-italic">— {slide.author}</cite>
          )}
        </div>
      );

    case 'visual':
      return (
        <div className="p-16">
          <h2 className="text-6xl font-bold mb-12 text-slate-900 text-center">{slide.title}</h2>
          <div className="flex items-center justify-center h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl">
            <p className="text-3xl text-slate-600 text-center px-12">
              {slide.description || `Visualización: ${slide.visual}`}
            </p>
          </div>
        </div>
      );

    case 'cta':
      return (
        <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-cta to-green-600 text-white p-16">
          <h2 className="text-7xl font-bold mb-8 text-center">{slide.title}</h2>
          {slide.message && (
            <p className="text-4xl mb-12 text-center max-w-4xl text-white/90">{slide.message}</p>
          )}
          {slide.action && (
            <button className="bg-white text-cta px-16 py-6 rounded-2xl text-4xl font-bold hover:scale-105 transition-transform shadow-2xl">
              {slide.action}
            </button>
          )}
        </div>
      );

    default:
      return (
        <div className="p-16">
          <h2 className="text-6xl font-bold text-slate-900">Slide</h2>
        </div>
      );
  }
}

function generateCustomCSS(theme: any): string {
  return `
    .reveal {
      --r-main-color: #1E293B;
      --r-heading-color: #0F172A;
      --r-background-color: #FFFFFF;
      --r-link-color: ${theme.primaryColor};
      --r-link-color-hover: ${theme.secondaryColor};
      --r-selection-background-color: ${theme.accentColor};
      min-height: 100vh !important;
      height: 100vh !important;
    }

    .reveal .slides section {
      height: 100%;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    .reveal .controls {
      color: ${theme.primaryColor};
    }

    .reveal .progress {
      background: rgba(0, 0, 0, 0.1);
      color: ${theme.primaryColor};
    }

    .bg-primary {
      background-color: ${theme.primaryColor};
    }

    .bg-secondary {
      background-color: ${theme.secondaryColor};
    }

    .bg-cta {
      background-color: ${theme.accentColor};
    }

    .text-primary {
      color: ${theme.primaryColor};
    }

    .text-cta {
      color: ${theme.accentColor};
    }

    .from-primary {
      --tw-gradient-from: ${theme.primaryColor};
    }

    .to-secondary {
      --tw-gradient-to: ${theme.secondaryColor};
    }

    .from-cta {
      --tw-gradient-from: ${theme.accentColor};
    }

    .to-green-600 {
      --tw-gradient-to: #059669;
    }
  `;
}
