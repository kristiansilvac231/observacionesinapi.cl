import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Observación de Fondo INAPI | Qué es y Cómo Responderla | Guía Completa',
  description:
    'Guía completa sobre la observación de fondo ante INAPI. Qué es, causales más frecuentes, plazos y cómo responder para salvar tu registro de marca en Chile.',
  keywords: [
    'observación de fondo INAPI',
    'qué es observación de fondo marca',
    'responder observación fondo Chile',
    'causales observación marca INAPI',
  ],
};

type Causal = {
  art: string;
  title: string;
  description: string;
};

type Paso = {
  number: string;
  title: string;
  description: string;
};

type ArticleCard = {
  title: string;
  href: string;
};

const causales: Causal[] = [
  {
    art: 'Art. 20 f)',
    title: 'Semejanza fonética o gráfica',
    description:
      'Semejanza fonética o gráfica con una marca ya registrada. La más frecuente — representa más del 60% de las observaciones de fondo.',
  },
  {
    art: 'Art. 20 h)',
    title: 'Semejanza que induce a confusión',
    description:
      'Semejanza que induce a confusión al consumidor sobre el origen o características del producto.',
  },
  {
    art: 'Art. 20 e)',
    title: 'Falta de distintividad',
    description:
      'Falta de distintividad — la marca es genérica, descriptiva o de uso común.',
  },
];

const pasos: Paso[] = [
  {
    number: '1',
    title: 'Lee detenidamente la causal invocada',
    description:
      'Identifica exactamente qué artículo citó INAPI y cuál es la marca fundante.',
  },
  {
    number: '2',
    title: 'Analiza las diferencias',
    description:
      'Compara tu marca con la fundante en términos fonéticos, gráficos y conceptuales.',
  },
  {
    number: '3',
    title: 'Construye los argumentos',
    description:
      'Basándote en la Ley 19.039 y jurisprudencia del TDPI, desarrolla los fundamentos de diferenciación.',
  },
  {
    number: '4',
    title: 'Presenta el escrito',
    description:
      'Ingresa tu respuesta en el portal INAPI con tu clave única antes del vencimiento del plazo.',
  },
];

const articulosRelacionados: ArticleCard[] = [
  {
    title: 'Art. 20 f) Semejanza Fonética o Gráfica',
    href: '/guia/articulo-20-f',
  },
  {
    title: 'Art. 20 h) Semejanza que Induce a Confusión',
    href: '/guia/articulo-20-h',
  },
  {
    title: 'Art. 20 e) Falta de Distintividad',
    href: '/guia/articulo-20-e',
  },
];

export default function ObservacionDeFondoInapiPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#93B8E8]">
            GUÍA DE OBSERVACIONES
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Observación de Fondo INAPI: Guía Completa
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Todo lo que necesitas saber sobre las observaciones de fondo, desde qué son hasta cómo responderlas efectivamente.
          </p>
        </div>
      </section>

      {/* 2 — ¿QUÉ ES? */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué es una observación de fondo?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Una observación de fondo es una objeción sustantiva que el examinador de INAPI formula cuando considera que tu marca no cumple los requisitos legales de registrabilidad. A diferencia de las observaciones de forma, que son reparos administrativos subsanables, las observaciones de fondo cuestionan el derecho mismo a registrar la marca.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Son más complejas que las de forma y requieren argumentación jurídica sólida basada en la Ley 19.039 y la jurisprudencia del Tribunal de Propiedad Industrial (TDPI).
          </p>
        </div>
      </section>

      {/* 3 — CAUSALES FRECUENTES */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Causales más frecuentes
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {causales.map((causal) => (
              <div
                key={causal.art}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <p className="text-xs font-bold tracking-widest text-[#2557A7]">
                  {causal.art}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">
                  {causal.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {causal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — EL PLAZO */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Plazo para responder
          </h2>
          <div
            className="mt-8 rounded-lg p-8"
            style={{
              backgroundColor: '#EBF2FF',
              border: '2px solid #2557A7',
            }}
          >
            <p className="text-base font-bold text-[#1B3A6B]">
              30 días hábiles desde la notificación en el Estado Diario de INAPI.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#2557A7]">
              El plazo es fatal y no se prorroga.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — CÓMO RESPONDER */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo responder una observación de fondo?
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {pasos.map((paso) => (
              <div key={paso.number} className="flex items-start gap-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {paso.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1B3A6B]">{paso.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {paso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 — ARTÍCULOS RELACIONADOS */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Artículos relacionados
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {articulosRelacionados.map((article) => (
              <div
                key={article.href}
                className="flex flex-col rounded-lg p-6"
                style={{
                  backgroundColor: '#ffffff',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <p className="text-xs font-bold tracking-widest text-[#2557A7]">
                  OBSERVACIÓN DE FONDO
                </p>
                <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">
                  {article.title}
                </h3>
                <Link
                  href={article.href}
                  className="mt-6 text-xs font-bold text-[#2557A7] hover:underline"
                >
                  Leer artículo →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CTA FINAL */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Recibiste una observación de fondo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Respondemos tu escrito en 48 horas con argumentos basados en jurisprudencia del TDPI.
          </p>
          <Link
            href="/iniciar?tipo=fondo"
            className="mt-8 inline-block rounded px-8 py-3 text-sm font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffffff' }}
          >
            Responder ahora →
          </Link>
        </div>
      </section>
    </>
  );
}
