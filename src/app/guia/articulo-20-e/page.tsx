import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artículo 20 e) Ley 19.039 | Falta de Distintividad de Marca | INAPI',
  description:
    '¿Te observaron por falta de distintividad? Art. 20 e) Ley 19.039. Qué significa, por qué INAPI rechaza marcas genéricas y cómo responder esta observación.',
  keywords: [
    'artículo 20 e ley 19039',
    'falta de distintividad marca Chile',
    'marca genérica INAPI',
    'marca descriptiva observación',
    'cómo responder falta distintividad',
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
    title: 'Genericidad',
    description:
      'La marca es el nombre común del producto o servicio. Ejemplo: llamar a una panadería "PAN" o a un estudio de abogados "ABOGADOS".',
  },
  {
    title: 'Descriptividad',
    description:
      'La marca describe una característica o cualidad del producto. Ejemplo: "FRESCO" para alimentos o "RÁPIDO" para servicios de delivery.',
  },
  {
    title: 'Uso general',
    description:
      'La expresión ha pasado al dominio público y el consumidor la asocia a una categoría, no a un origen comercial específico.',
  },
];

const argumentos: Argumento[] = [
  {
    number: '1',
    title: 'Secondary meaning o significado secundario',
    description:
      'Demostrar que la marca, aunque originalmente descriptiva, ha adquirido un significado distintivo en el mercado por su uso prolongado y exclusivo. Se acredita con publicidad, ventas, testimonios y reconocimiento del público.',
  },
  {
    number: '2',
    title: 'Distintividad adquirida',
    description:
      'Presentar evidencia de uso previo en el mercado chileno: registros de ventas, publicidad, redes sociales, contratos o cualquier elemento que demuestre que los consumidores ya asocian esa marca a tu empresa.',
  },
  {
    number: '3',
    title: 'Combinación de elementos',
    description:
      'Si la marca combina elementos descriptivos con elementos figurativos, colores o tipografías especiales, el conjunto puede ser suficientemente distintivo para ser registrado.',
  },
  {
    number: '4',
    title: 'Interpretación restrictiva',
    description:
      'Argumentar que la expresión no es tan genérica como INAPI sostiene, y que en el contexto específico de los productos o servicios solicitados, la marca sí cumple función diferenciadora.',
  },
];

export default function Articulo20EPage() {
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
            Art. 20 e) Ley 19.039: Falta de Distintividad
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Cuando INAPI considera que tu marca es demasiado genérica o descriptiva. Qué hacer y cómo responder.
          </p>
        </div>
      </section>

      {/* 2 — ¿QUÉ DICE LA LEY? */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué dice el Art. 20 e)?
          </h2>
          <blockquote
            className="mt-8 rounded-r-lg p-6 text-sm leading-relaxed text-[#1B3A6B] italic"
            style={{
              backgroundColor: '#F0F4FA',
              borderLeft: '4px solid #2557A7',
            }}
          >
            "No podrán registrarse como marcas: e) Las palabras, frases u otros signos que hayan
            pasado al uso general y aquellos que se utilicen para designar tipos, clases o géneros
            de los productos, servicios o actividades."
          </blockquote>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            En términos simples: si tu marca es una palabra de uso común, describe directamente el
            producto que vendes o es el nombre genérico de una categoría, INAPI puede rechazarla
            por falta de distintividad.
          </p>
        </div>
      </section>

      {/* 3 — CÓMO EVALÚA INAPI */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo evalúa INAPI la distintividad?
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
            ¿Cómo responder una observación por Art. 20 e)?
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

      {/* 5 — CRITERIOS TDPI */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Criterios del TDPI en casos de Art. 20 e)
          </h2>
          <div
            className="mt-8 rounded-lg p-8"
            style={{ backgroundColor: '#F0F4FA' }}
          >
            <p className="text-sm leading-relaxed text-gray-600">
              El Tribunal de Propiedad Industrial ha señalado que la distintividad debe evaluarse
              en relación con los productos o servicios específicos de la solicitud, no en
              abstracto. Una palabra descriptiva para una categoría puede ser distintiva en otra.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              El TDPI también ha reconocido el secondary meaning como argumento válido para marcas
              con uso intenso y prolongado en el mercado, incluso cuando el signo es originalmente
              descriptivo.
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
            ¿Recibiste una observación por falta de distintividad?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Evaluamos tu caso y respondemos en 48 horas.
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
