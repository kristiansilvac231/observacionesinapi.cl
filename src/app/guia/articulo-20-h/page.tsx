import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artículo 20 h) Ley 19.039 | Semejanza que Induce a Confusión | INAPI',
  description:
    '¿Te observaron por el Art. 20 h)? Semejanza que induce a confusión en el mercado. Diferencias con el Art. 20 f) y cómo responder esta observación ante INAPI.',
  keywords: [
    'artículo 20 h ley 19039',
    'semejanza confusión marca Chile',
    'observación fondo Art 20 h INAPI',
    'cómo responder Art 20 h marca',
    'confusión consumidor marca Chile',
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
    title: 'Error sobre el origen',
    description:
      'El consumidor podría creer que ambos productos provienen de la misma empresa o de empresas relacionadas.',
  },
  {
    title: 'Error sobre la naturaleza',
    description:
      'La similitud podría llevar al consumidor a creer que los productos tienen características similares cuando no las tienen.',
  },
  {
    title: 'Contexto del mercado',
    description:
      'INAPI considera el canal de distribución, el tipo de consumidor y el nivel de atención que este presta al momento de la compra.',
  },
];

const argumentos: Argumento[] = [
  {
    number: '1',
    title: 'Ausencia de riesgo de confusión real',
    description:
      'Demostrar que en el contexto específico del mercado, los consumidores objetivo no confundirían ambas marcas. El nivel de atención del consumidor especializado es mayor que el del consumidor promedio.',
  },
  {
    number: '2',
    title: 'Canales de distribución distintos',
    description:
      'Si los productos se venden en canales completamente diferentes — por ejemplo, uno en farmacias y otro en ferreterías — el riesgo de confusión en la práctica es mínimo.',
  },
  {
    number: '3',
    title: 'Diferenciación en el mercado',
    description:
      'Acreditar con evidencia que ambas marcas coexisten en el mercado sin que se hayan reportado casos reales de confusión entre consumidores.',
  },
  {
    number: '4',
    title: 'Público especializado',
    description:
      'Si el producto está dirigido a profesionales o compradores especializados, el estándar de confusión es más alto y más difícil de acreditar por INAPI.',
  },
];

export default function Articulo20HPage() {
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
            Art. 20 h) Ley 19.039: Semejanza que Induce a Confusión
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Cuándo INAPI considera que tu marca puede confundir al consumidor y cómo argumentar en tu defensa.
          </p>
        </div>
      </section>

      {/* 2 — QUÉ DICE LA LEY */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué dice el Art. 20 h)?
          </h2>
          <blockquote
            className="mt-8 rounded-r-lg p-6 text-sm leading-relaxed text-[#1B3A6B] italic"
            style={{
              backgroundColor: '#F0F4FA',
              borderLeft: '4px solid #2557A7',
            }}
          >
            "No podrán registrarse como marcas: h) Los signos que sean idénticos o semejantes a
            una marca inscrita o solicitada, cuando su uso pueda inducir al público a error,
            especialmente sobre la naturaleza, la procedencia, las características o la aptitud
            para el uso de los productos o servicios."
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            A diferencia del Art. 20 f) que evalúa la semejanza formal entre signos, el Art. 20 h)
            se enfoca en el efecto que esa semejanza produce en el consumidor — específicamente si
            puede llevarlo a error sobre el origen o características del producto.
          </p>
        </div>
      </section>

      {/* 3 — DIFERENCIA CON EL ART. 20 f) */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Diferencia con el Art. 20 f)
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: '#F0F4FA',
                borderTop: '3px solid #2557A7',
              }}
            >
              <p className="text-xs font-bold tracking-widest text-[#2557A7]">ART. 20 f)</p>
              <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">Semejanza formal</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Evalúa la semejanza formal: si los signos suenan o se ven parecidos. El análisis
                es más objetivo y se centra en los signos mismos.
              </p>
            </div>
            <div
              className="rounded-lg p-6"
              style={{
                backgroundColor: '#F0F4FA',
                borderTop: '3px solid #2557A7',
              }}
            >
              <p className="text-xs font-bold tracking-widest text-[#2557A7]">ART. 20 h)</p>
              <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">Efecto en el mercado</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Evalúa el efecto en el mercado: si esa semejanza puede inducir a error al
                consumidor sobre el origen, naturaleza o características del producto. El análisis
                incluye el contexto comercial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — CÓMO EVALÚA INAPI */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo evalúa INAPI el Art. 20 h)?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {criterios.map((criterio) => (
              <div
                key={criterio.title}
                className="rounded-lg bg-white p-6"
                style={{ borderTop: '3px solid #2557A7' }}
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

      {/* 5 — CÓMO RESPONDER */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo responder una observación por Art. 20 h)?
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

      {/* 6 — CRITERIOS TDPI */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Criterios del TDPI en casos de Art. 20 h)
          </h2>
          <div className="mt-8 rounded-lg bg-white p-8">
            <p className="text-sm leading-relaxed text-gray-600">
              El Tribunal de Propiedad Industrial ha señalado que el Art. 20 h) requiere un
              análisis más amplio que el Art. 20 f), considerando no solo los signos en sí mismos
              sino también el contexto comercial en que se usan. La mera semejanza formal no es
              suficiente — debe existir un riesgo real y concreto de confusión en el mercado.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              El TDPI ha rechazado argumentos de confusión cuando los productos están claramente
              diferenciados por su precio, canal de distribución o público objetivo.
            </p>
          </div>
        </div>
      </section>

      {/* 7 — CTA */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Recibiste una observación por Art. 20 h)?
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
