import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guía de Observaciones INAPI | Todo sobre Marcas y Observaciones en Chile',
  description:
    'Guía completa sobre observaciones de marca ante INAPI. Art. 20 f), 20 h), 20 e), plazos, causales y cómo responder. Información actualizada para Chile.',
  keywords: [
    'guía observaciones INAPI',
    'Art 20 ley 19039',
    'plazos INAPI marca Chile',
    'cómo responder observación marca',
  ],
};

type ArticleCard = {
  category: string;
  title: string;
  description: string;
  href: string;
  soon?: boolean;
};

const articles: ArticleCard[] = [
  {
    category: 'GUÍA GENERAL',
    title: 'Observación de Fondo INAPI: Guía Completa',
    description:
      'Todo lo que necesitas saber sobre las observaciones de fondo, qué son, causales frecuentes, plazos y cómo responderlas.',
    href: '/guia/observacion-de-fondo-inapi',
  },
  {
    category: 'GUÍA PRÁCTICA',
    title: 'Cómo Responder una Observación ante INAPI',
    description:
      'Guía paso a paso para responder correctamente y maximizar tus probabilidades de éxito.',
    href: '/guia/como-responder-observacion-inapi',
  },
  {
    category: 'OBSERVACIÓN DE FONDO',
    title: 'Art. 20 f) — Semejanza Fonética o Gráfica',
    description:
      'La causal más frecuente. Qué significa, cómo evalúa INAPI la semejanza y qué argumentos funcionan.',
    href: '/guia/articulo-20-f',
  },
  {
    category: 'OBSERVACIÓN DE FONDO',
    title: 'Art. 20 e) — Falta de Distintividad',
    description:
      'Cuándo INAPI considera que tu marca es genérica o descriptiva y cómo rebatirlo.',
    href: '/guia/articulo-20-e',
  },
  {
    category: 'PLAZOS',
    title: '¿Cuánto tiempo tienes para responder?',
    description:
      'El plazo de 30 días hábiles, cómo contarlo y qué pasa si vence sin respuesta.',
    href: '/guia/plazo-observacion-inapi',
  },
  {
    category: 'URGENTE',
    title: 'Abandono de Solicitud de Marca',
    description:
      'Qué significa el abandono, cuándo ocurre y qué opciones tienes si ya venció el plazo.',
    href: '/guia/abandono-solicitud-marca',
  },
  {
    category: 'OBSERVACIÓN DE FONDO',
    title: 'Art. 20 h) — Semejanza que Induce a Confusión',
    description:
      'Diferencias con el Art. 20 f) y cómo argumentar cuando INAPI invoca esta causal.',
    href: '/guia/articulo-20-h',
  },
];

export default function GuiaPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#93B8E8]">
            RECURSOS LEGALES
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-6xl">
            Guía de Observaciones de Marca INAPI
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Todo lo que necesitas saber sobre las observaciones de fondo y forma ante INAPI.
            Información técnica redactada por abogados especializados.
          </p>
        </div>
      </section>

      {/* 2 — ARTÍCULOS */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Artículos disponibles
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <div
                key={article.href}
                className="flex flex-col rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                  opacity: article.soon ? 0.7 : 1,
                }}
              >
                <div className="flex items-center gap-3">
                  <p className="text-xs font-bold tracking-widest text-[#2557A7]">
                    {article.category}
                  </p>
                  {article.soon && (
                    <span
                      className="rounded px-2 py-0.5 text-xs font-bold text-white"
                      style={{ backgroundColor: '#2557A7' }}
                    >
                      Próximamente
                    </span>
                  )}
                </div>
                <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {article.description}
                </p>
                {article.soon
                  ? (
                      <span className="mt-6 text-xs font-bold text-gray-400">
                        Disponible pronto
                      </span>
                    )
                  : (
                      <Link
                        href={article.href}
                        className="mt-6 text-xs font-bold text-[#2557A7] hover:underline"
                      >
                        Leer artículo →
                      </Link>
                    )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — CTA FINAL */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Recibiste una observación?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Nuestros abogados responden por ti en 48 horas
          </p>
          <Link
            href="/iniciar"
            className="mt-8 inline-block rounded px-8 py-3 text-sm font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffffff' }}
          >
            Iniciar ahora →
          </Link>
        </div>
      </section>
    </>
  );
}
