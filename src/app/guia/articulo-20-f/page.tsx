import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artículo 20 f) Ley 19.039 | Semejanza Fonética y Gráfica de Marcas | INAPI',
  description:
    '¿Te observaron por el Art. 20 f) de la Ley 19.039? Semejanza fonética o gráfica con marca registrada. Cómo responder y qué argumentos funcionan ante INAPI.',
  keywords: [
    'artículo 20 f ley 19039',
    'semejanza fonética marca Chile',
    'semejanza gráfica marca INAPI',
    'observación fondo Art 20 f',
    'cómo responder semejanza fonética marca',
  ],
};

type Criterio = {
  title: string;
  description: string;
};

type Argumento = {
  number: string;
  title: string;
  description: string;
};

const criterios: Criterio[] = [
  {
    title: 'Semejanza fonética',
    description:
      'INAPI compara cómo suenan ambas marcas al pronunciarlas. Se analiza la estructura silábica, el acento, la terminación y la impresión sonora global.',
  },
  {
    title: 'Semejanza gráfica',
    description:
      'Se compara la forma escrita de las marcas. INAPI analiza la longitud, las letras que las componen, su disposición visual y si el consumidor podría confundirlas al leerlas.',
  },
  {
    title: 'Riesgo de confusión',
    description:
      'El factor decisivo es si el consumidor medio podría confundir ambas marcas en el mercado. Se considera el tipo de producto o servicio y el grado de atención del comprador.',
  },
];

const argumentos: Argumento[] = [
  {
    number: '1',
    title: 'Diferenciación fonética objetiva',
    description:
      'Demostrar con análisis silábico que las marcas suenan distinto. Identificar diferencias en el acento, número de sílabas, letras iniciales o finales y la impresión auditiva global.',
  },
  {
    number: '2',
    title: 'Diferenciación gráfica y visual',
    description:
      'Argumentar diferencias en la extensión, composición de letras, elementos figurativos y la apariencia visual general. Una marca más larga o con elementos gráficos propios tiene más argumentos.',
  },
  {
    number: '3',
    title: 'Productos o servicios distintos',
    description:
      'Si las marcas cubren clases de Niza diferentes o productos sin relación comercial, el riesgo de confusión disminuye significativamente. Este argumento es muy efectivo cuando las clases no son complementarias.',
  },
  {
    number: '4',
    title: 'Coexistencia en el mercado',
    description:
      'Si la marca solicitada tiene uso previo y comprobable en el mercado sin generar confusión, este antecedente puede fundamentar la solicitud de coexistencia.',
  },
];

export default function Articulo20FPage() {
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
            Art. 20 f) Ley 19.039: Semejanza Fonética o Gráfica
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            La causal de observación más frecuente en INAPI. Qué significa, cómo funciona y cómo responderla.
          </p>
        </div>
      </section>

      {/* 2 — ¿QUÉ DICE LA LEY? */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué dice el Art. 20 f)?
          </h2>

          <blockquote
            className="mt-8 rounded-r-lg p-6 text-sm leading-relaxed text-[#1B3A6B] italic"
            style={{
              backgroundColor: '#F0F4FA',
              borderLeft: '4px solid #2557A7',
            }}
          >
            "No podrán registrarse como marcas: f) Los signos que sean idénticos o semejantes,
            gráfica o fonéticamente, a una marca inscrita o solicitada con anterioridad para los
            mismos productos, servicios o actividades, o para productos, servicios o actividades
            relacionados, en cuyo caso podrá haber lugar a confusión en el mercado."
          </blockquote>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            En términos simples: si tu marca suena parecido o se escribe parecido a una marca que
            ya está registrada, INAPI puede objetar tu solicitud invocando esta causal.
          </p>
        </div>
      </section>

      {/* 3 — CÓMO EVALÚA INAPI */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo evalúa INAPI la semejanza?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {criterios.map((criterio) => (
              <div
                key={criterio.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">{criterio.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {criterio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — CÓMO RESPONDER */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo responder una observación por Art. 20 f)?
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {argumentos.map((arg) => (
              <div key={arg.number} className="flex items-start gap-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {arg.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1B3A6B]">{arg.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {arg.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — JURISPRUDENCIA */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Criterios del TDPI en casos de Art. 20 f)
          </h2>
          <div
            className="mt-8 rounded-lg p-8"
            style={{ backgroundColor: '#F0F4FA' }}
          >
            <p className="text-sm leading-relaxed text-gray-600">
              El Tribunal de Propiedad Industrial ha establecido en su jurisprudencia que la
              semejanza debe evaluarse desde la perspectiva del consumidor medio, con atención
              normal y no especializada. No basta con que existan algunas letras en común — lo
              relevante es la impresión de conjunto que producen ambos signos.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              El TDPI también ha señalado que cuando las marcas coexisten en clases distintas y
              no relacionadas, el riesgo de confusión se reduce considerablemente.
            </p>
          </div>
        </div>
      </section>

      {/* 6 — CTA */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Recibiste una observación por Art. 20 f)?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Respondemos tu escrito en 48 horas con argumentos basados en jurisprudencia del TDPI.
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
