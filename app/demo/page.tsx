import RevealPresentation from '@/components/presentation/RevealPresentation';
import Slide from '@/components/presentation/Slide';

export default function DemoPage() {
  return (
    <RevealPresentation
      theme="black"
      transition="slide"
      navigationMode="default"
    >
      {/* Slide 1: Hero */}
      <Slide backgroundColor="#1a1a2e">
        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Base Presentation
        </h1>
        <p className="text-3xl text-gray-300 mb-12">
          Presentaciones que conectan, convencen y convierten
        </p>
        <p className="text-xl text-gray-400">
          Presiona → o espacio para continuar
        </p>
      </Slide>

      {/* Slide 2: El Problema */}
      <Slide backgroundColor="#16213e">
        <h2 className="text-6xl font-bold mb-8 text-red-400">El Problema</h2>
        <div className="text-left max-w-4xl mx-auto space-y-6">
          <p className="text-3xl text-gray-200">
            <span className="text-5xl font-bold text-red-500">87%</span> de las
            presentaciones fallan en capturar atención
          </p>
          <ul className="text-2xl text-gray-300 space-y-4 list-disc list-inside">
            <li>Slides genéricos sin personalidad</li>
            <li>Copy aburrido que no persuade</li>
            <li>Diseño amateur que distrae</li>
            <li>Navegación lineal que limita</li>
          </ul>
        </div>
      </Slide>

      {/* Slide 3: Nuestra Solución */}
      <Slide backgroundColor="#0f3460">
        <h2 className="text-6xl font-bold mb-8 text-green-400">La Solución</h2>
        <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-3xl font-bold mb-4">Navegación Inteligente</h3>
            <p className="text-xl text-gray-300">
              Salta a cualquier tema según las preguntas de tu audiencia
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl mb-4">📝</div>
            <h3 className="text-3xl font-bold mb-4">Copy Persuasivo</h3>
            <p className="text-xl text-gray-300">
              Aplica principios de copywriting y storytelling
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-3xl font-bold mb-4">Diseño Profesional</h3>
            <p className="text-xl text-gray-300">
              34+ temas distintivos, sin AI-slop
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-3xl font-bold mb-4">Motion Graphics</h3>
            <p className="text-xl text-gray-300">
              Animaciones con propósito comunicativo
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 4: Navegación No Lineal (Demo) */}
      <Slide>
        <h2 className="text-6xl font-bold mb-8">Navegación No Lineal</h2>
        <p className="text-2xl mb-12 text-gray-300">
          Usa las flechas para navegar libremente:
        </p>
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto text-xl">
          <div className="col-span-3 text-center">
            <div className="inline-block bg-blue-500/20 px-8 py-4 rounded-lg border-2 border-blue-500">
              ↑ Arriba
            </div>
          </div>
          <div className="text-right">
            <div className="inline-block bg-blue-500/20 px-8 py-4 rounded-lg border-2 border-blue-500">
              ← Anterior
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-purple-500/20 px-8 py-4 rounded-lg border-2 border-purple-500">
              Tú estás aquí
            </div>
          </div>
          <div className="text-left">
            <div className="inline-block bg-blue-500/20 px-8 py-4 rounded-lg border-2 border-blue-500">
              Siguiente →
            </div>
          </div>
          <div className="col-span-3 text-center">
            <div className="inline-block bg-blue-500/20 px-8 py-4 rounded-lg border-2 border-blue-500">
              ↓ Abajo (profundiza)
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 4.1: Subsección (Vertical) */}
      <section>
        <Slide backgroundColor="#1e3a5f">
          <h3 className="text-5xl font-bold mb-6">Profundiza en temas</h3>
          <p className="text-2xl text-gray-300 mb-8">
            Las flechas verticales te permiten explorar detalles sin romper el
            flujo principal
          </p>
          <div className="bg-white/10 p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-xl text-left">
              💡 <strong>Tip:</strong> Usa ↑ para volver al flujo principal
            </p>
          </div>
        </Slide>
      </section>

      {/* Slide 5: Casos de Uso */}
      <Slide backgroundColor="#2d4059">
        <h2 className="text-6xl font-bold mb-8">¿Para quién?</h2>
        <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto text-left">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🚀 Startups</h3>
            <p className="text-lg text-gray-300">
              Pitch decks que cierran rondas de inversión
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">🎓 Educadores</h3>
            <p className="text-lg text-gray-300">
              Clases memorables para universidades y colegios
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">💼 Empresas</h3>
            <p className="text-lg text-gray-300">
              Reportes ejecutivos que impulsan decisiones
            </p>
          </div>
          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">⛪ Iglesias</h3>
            <p className="text-lg text-gray-300">
              Sermones visuales que inspiran congregaciones
            </p>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">👥 Equipos</h3>
            <p className="text-lg text-gray-300">
              Workshops y talleres colaborativos
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">📱 Products</h3>
            <p className="text-lg text-gray-300">
              Launches con impacto visual memorable
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Stack Técnico */}
      <Slide backgroundColor="#1a1a2e">
        <h2 className="text-6xl font-bold mb-8">Stack Técnico</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-6xl mb-4">⚛️</div>
            <p className="text-2xl font-bold">Next.js 15</p>
            <p className="text-gray-400">App Router</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <p className="text-2xl font-bold">Tailwind CSS</p>
            <p className="text-gray-400">Styling</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📽️</div>
            <p className="text-2xl font-bold">reveal.js</p>
            <p className="text-gray-400">Presentations</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">✨</div>
            <p className="text-2xl font-bold">Framer Motion</p>
            <p className="text-gray-400">Animations</p>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">📘</div>
            <p className="text-2xl font-bold">TypeScript</p>
            <p className="text-gray-400">Type Safety</p>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Call to Action */}
      <Slide backgroundColor="#16213e">
        <h2 className="text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Empieza Ahora
        </h2>
        <p className="text-3xl mb-12 text-gray-300">
          Crea presentaciones que realmente importan
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/4peacenfreedom/basePresentation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 rounded-lg text-2xl font-bold transition-transform hover:scale-105"
          >
            Ver en GitHub
          </a>
          <a
            href="/"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-12 py-6 rounded-lg text-2xl font-bold transition-transform hover:scale-105 border-2 border-white/30"
          >
            Documentación
          </a>
        </div>
        <p className="text-gray-400 mt-8 text-xl">
          Presiona ESC para ver el overview de toda la presentación
        </p>
      </Slide>
    </RevealPresentation>
  );
}
