import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Base Presentation
          </h1>
          <p className="text-3xl text-gray-300 mb-8">
            Presentaciones que conectan, convencen y convierten
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Sistema inteligente que combina excelencia técnica con principios de
            comunicación efectiva: copywriting, storytelling, design thinking,
            diseño gráfico y motion graphics.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/create"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-5 rounded-lg text-2xl font-bold transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              ✨ Crear mi Presentación
            </Link>
            <div className="flex gap-4">
              <Link
                href="/demo"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform hover:scale-105 border-2 border-white/30"
              >
                Ver Demo
              </Link>
              <a
                href="https://github.com/4peacenfreedom/basePresentation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-lg font-semibold transition-transform hover:scale-105 border-2 border-white/30"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            5 pasos simples para crear tu presentación profesional
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            <StepCard
              number="1"
              title="Objetivo"
              description="Define el tipo de presentación"
            />
            <StepCard
              number="2"
              title="Audiencia"
              description="Describe tu público y tono"
            />
            <StepCard
              number="3"
              title="Visual"
              description="Elige colores y estilo"
            />
            <StepCard
              number="4"
              title="Contenido"
              description="Agrega tus materiales"
            />
            <StepCard
              number="5"
              title="¡Listo!"
              description="IA genera tu presentación"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <FeatureCard
            icon="🎯"
            title="Navegación No Lineal"
            description="Salta a cualquier diapositiva según las preguntas de tu audiencia. No más presentaciones lineales aburridas."
          />
          <FeatureCard
            icon="📝"
            title="Copy Inteligente"
            description="Aplica principios de copywriting profesional: headlines que capturan, beneficios sobre features, CTAs que convierten."
          />
          <FeatureCard
            icon="📖"
            title="Storytelling"
            description="Narrativas que conectan emocionalmente. Hero's Journey, Problem-Solution-Impact, Before-After-Bridge y más."
          />
          <FeatureCard
            icon="💡"
            title="Design Thinking"
            description="Soluciones centradas en el usuario. Empatiza, define, idea, prototipa y testea cada presentación."
          />
          <FeatureCard
            icon="🎨"
            title="Diseño Profesional"
            description="34+ temas distintivos. Jerarquía visual, teoría del color, tipografía y composición fundamentadas."
          />
          <FeatureCard
            icon="🎬"
            title="Motion Graphics"
            description="Animaciones con propósito comunicativo. Timing, easing, staging y transiciones estratégicas."
          />
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-white">
            Stack Tecnológico
          </h2>
          <div className="flex justify-center items-center gap-12 flex-wrap">
            <TechBadge name="Next.js 15" />
            <TechBadge name="TypeScript" />
            <TechBadge name="Tailwind CSS" />
            <TechBadge name="reveal.js" />
            <TechBadge name="Framer Motion" />
          </div>
        </div>

        {/* Use Cases */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-12 text-white">
            Casos de Uso
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <UseCaseCard
              emoji="🚀"
              title="Startups"
              description="Pitch decks que cierran rondas"
            />
            <UseCaseCard
              emoji="🎓"
              title="Educadores"
              description="Clases memorables que se recuerdan"
            />
            <UseCaseCard
              emoji="💼"
              title="Empresas"
              description="Reportes que impulsan decisiones"
            />
            <UseCaseCard
              emoji="⛪"
              title="Iglesias"
              description="Sermones visuales inspiradores"
            />
            <UseCaseCard
              emoji="👥"
              title="Equipos"
              description="Workshops y talleres colaborativos"
            />
            <UseCaseCard
              emoji="📱"
              title="Products"
              description="Launches con impacto visual"
            />
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Empieza a crear presentaciones que importan
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Sigue 5 pasos simples y deja que la IA haga el resto
          </p>
          <Link
            href="/create"
            className="inline-block bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-12 py-5 rounded-lg text-2xl font-bold transition-transform hover:scale-105 shadow-xl"
          >
            🚀 Comenzar Ahora
          </Link>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all hover:transform hover:scale-105">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function TechBadge({ name }: { name: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg">
      {name}
    </div>
  );
}

function UseCaseCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
      <div className="text-4xl mb-3">{emoji}</div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-400/50 transition-all hover:transform hover:scale-105">
      <div className="absolute -top-4 left-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
        {number}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
