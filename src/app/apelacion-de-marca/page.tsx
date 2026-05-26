import type { Metadata } from 'next';
import { ApelacionForm } from './ApelacionForm';

export const metadata: Metadata = {
  title: 'Apelación de Marca INAPI | Rechazaron tu Marca | Abogados TDPI',
  description:
    '¿INAPI rechazó tu marca? Podemos apelar ante el Tribunal de Propiedad Industrial. Evaluamos tu caso y definimos la mejor estrategia. Cotización personalizada.',
  keywords: [
    'apelación marca INAPI',
    'recurso de apelación marca Chile',
    'TDPI Tribunal de Propiedad Industrial',
    'marca rechazada INAPI',
    'apelar rechazo marca Chile',
  ],
};

type Causal = {
  title: string;
  description: string;
};

type Step = {
  number: string;
  label: string;
};

const causales: Causal[] = [
  {
    title: 'Semejanza cuestionable',
    description:
      'El examinador aplicó criterios subjetivos de similitud que pueden ser rebatidos con argumentos técnicos y jurisprudencia del TDPI.',
  },
  {
    title: 'Marca con historia',
    description:
      'Tu marca tiene uso previo en el mercado, registro internacional o elementos que no fueron considerados por INAPI.',
  },
  {
    title: 'Causal debatible',
    description:
      'La causal invocada por INAPI no se ajusta claramente a los hechos o existe jurisprudencia favorable del TDPI.',
  },
];

const steps: Step[] = [
  { number: '1', label: 'Completas el formulario con tu caso' },
  { number: '2', label: 'Evaluamos sin costo y te respondemos en 24 horas' },
  { number: '3', label: 'Si conviene apelar, coordinamos estrategia y honorarios' },
  { number: '4', label: 'Presentamos el recurso ante el TDPI' },
];

export default function ApelacionDeMarcaPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            ¿Rechazaron tu Marca en INAPI?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Podemos apelar ante el Tribunal de Propiedad Industrial. Evaluamos tu caso sin costo.
          </p>
          <div className="mt-8">
            <a
              href="#formulario"
              className="inline-block rounded px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: '#2557A7' }}
            >
              Solicitar evaluación gratuita →
            </a>
          </div>
        </div>
      </section>

      {/* 2 — ¿QUÉ PUEDES HACER? */}
      <section id="que-puedes-hacer" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Tienes opciones. No todo está perdido.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Cuando INAPI rechaza una solicitud de marca, la resolución puede ser impugnada ante el
            Tribunal de Propiedad Industrial (TDPI). Este tribunal es independiente de INAPI y en
            muchos casos revierte las decisiones del examinador.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            El plazo para apelar es de{' '}
            <strong className="text-[#2557A7]">15 días hábiles</strong>
            {' '}desde la notificación del rechazo.
          </p>
        </div>
      </section>

      {/* 3 — CUÁNDO CONVIENE APELAR */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cuándo conviene apelar?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {causales.map((causal) => (
              <div
                key={causal.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">{causal.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {causal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PROCESO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo funciona la apelación?
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col items-start">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {step.number}
                </span>
                <p className="mt-4 text-sm font-semibold leading-snug text-[#1B3A6B]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — FORMULARIO */}
      <section id="formulario" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Cuéntanos tu caso
          </h2>
          <p className="mt-3 text-sm text-gray-500">
            Evaluación gratuita. Te respondemos en 24 horas.
          </p>
          <div className="mt-8">
            <ApelacionForm />
          </div>
        </div>
      </section>

      {/* 6 — CTA FINAL */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Tienes 15 días hábiles para actuar?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            No pierdas tu oportunidad de revertir el rechazo.
          </p>
          <a
            href="#formulario"
            className="mt-8 inline-block rounded px-8 py-3 text-sm font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffffff' }}
          >
            Solicitar evaluación gratuita →
          </a>
        </div>
      </section>
    </>
  );
}
