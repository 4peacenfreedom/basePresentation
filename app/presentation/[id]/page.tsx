'use client';

import { useEffect, useState, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import GeneratedPresentation from '@/components/presentation/GeneratedPresentation';
import { ArrowLeft, Download, Share2 } from 'lucide-react';
import Head from 'next/head';

function PresentationContent() {
  const params = useParams();
  const router = useRouter();
  const [presentationData, setPresentationData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = params.id as string;

    // Cargar la presentación desde localStorage
    const stored = localStorage.getItem(`presentation-${id}`);

    if (stored) {
      try {
        const data = JSON.parse(stored);
        setPresentationData(data);
      } catch (error) {
        console.error('Error parsing presentation data:', error);
      }
    }

    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Cargando presentación...</p>
        </div>
      </div>
    );
  }

  if (!presentationData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Presentación no encontrada</h1>
          <p className="text-xl text-gray-300 mb-8">La presentación que buscas no existe o ha sido eliminada.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <link rel="stylesheet" href="/reveal/reveal.css" />
      <div className="relative">
      {/* Toolbar */}
      <div className="fixed top-4 left-4 right-4 z-50 flex items-center justify-between">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Volver</span>
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => {
              const title = presentationData.title || 'presentacion';
              const filename = `${title.replace(/\s+/g, '-').toLowerCase()}.json`;
              const blob = new Blob([JSON.stringify(presentationData, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = filename;
              a.click();
              URL.revokeObjectURL(url);
            }}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors"
          >
            <Download className="w-5 h-5" />
            <span className="font-medium hidden sm:inline">Descargar</span>
          </button>

          <button
            onClick={() => {
              const url = window.location.href;
              navigator.clipboard.writeText(url);
              alert('¡Link copiado al portapapeles!');
            }}
            className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-colors"
          >
            <Share2 className="w-5 h-5" />
            <span className="font-medium hidden sm:inline">Compartir</span>
          </button>
        </div>
      </div>

      {/* Presentation */}
      <GeneratedPresentation data={presentationData} />
      </div>
    </>
  );
}

export default function PresentationPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <p className="text-white text-xl">Cargando presentación...</p>
        </div>
      </div>
    }>
      <PresentationContent />
    </Suspense>
  );
}
