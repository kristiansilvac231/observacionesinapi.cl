import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Observación de Fondo INAPI | Respuesta en 48 Horas | Abogados Especializados',
  description:
    '¿Recibiste una observación de fondo de INAPI? Respondemos tu escrito en 48 horas. Abogados especializados en Art. 20 Ley 19.039. Desde $69.990 CLP.',
  keywords: [
    'observación de fondo INAPI',
    'Art. 20 Ley 19.039',
    'responder observación marca Chile',
    'semejanza fonética marca',
    'semejanza gráfica marca',
    'distintividad marca Chile',
  ],
};

type Causal = {
  art: string;
  title: string;
  description: string;
};

type PlanFeature = string;

type Plan = {
  name: string;
  price: string;
  features: PlanFeature[];
  highlighted: boolean;
  cta: string;
  href: string;
};

type Step = {
  number: string;
  label: string;
};

const causales: Causal[] = [
  {
    art: 'Art. 20 f)',
    title: 'Semejanza fonética o gráfica',
    description:
      'Tu marca suena o se escribe similar a una ya inscrita.',
  },
  {
    art: 'Art. 20 h)',
    title: 'Semejanza que induce a confusión',
    description:
      'El consumidor podría confundir tu marca con una existente.',
  },
  {
    art: 'Art. 20 e)',
    title: 'Falta de distintividad',
    description:
      'Tu marca es demasiado genérica o descriptiva del producto o servicio.',
  },
];

const plans: Plan[] = [
  {
    name: 'Solo Escrito',
    price: '$69.990 CLP',
    features: [
      'Redactamos el escrito de respuesta',
      'Basado en jurisprudencia TDPI 2015–2024',
      'Entrega en 48 horas',
      'Tú lo presentas con tu clave INAPI',
    ],
    highlighted: false,
    cta: 'Elegir este plan →',
    href: '/iniciar?tipo=fondo&plan=escrito',
  },
  {
    name: 'Representación Completa',
    price: '$129.990 CLP',
    features: [
      'Todo lo del plan anterior',
      'Poder simple sin notario (por mail)',
      'Nosotros presentamos ante INAPI',
      'Seguimiento del expediente',
    ],
    highlighted: true,
    cta: 'Elegir este plan →',
    href: '/iniciar?tipo=fondo&plan=representacion',
  },
];

const steps: Step[] = [
  { number: '1', label: 'Sube tu PDF de observación' },
  { number: '2', label: 'Elige tu plan' },
  { number: '3', label: 'Recibe el escrito en 48 horas' },
  { number: '4', label: 'Preséntalo en INAPI con tu clave' },
];

export default function ObservacionesDeFondoPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Observación de Fondo INAPI
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Respondemos tu escrito ante INAPI en 48 horas. Sin reuniones, sin burocracia.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#planes"
              className="rounded px-7 py-3 text-sm font-bold tracking-widest text-white transition-colors"
              style={{ backgroundColor: '#2557A7' }}
            >
              Ver planes →
            </a>
            <a
              href="#que-es"
              className="rounded border border-white/40 px-7 py-3 text-sm font-bold tracking-widest text-white/80 transition-colors hover:border-white hover:text-white"
            >
              ¿Qué es una observación de fondo?
            </a>
          </div>
        </div>
      </section>

      {/* 2 — ¿QUÉ ES? */}
      <section id="que-es" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué es una Observación de Fondo?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Una observación de fondo es una objeción sustantiva que INAPI formula contra tu
            solicitud de registro de marca. Significa que un examinador detectó que tu marca
            podría infringir derechos de terceros o carecer de los requisitos legales para ser
            registrada.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Tienes{' '}
            <strong className="text-[#2557A7]">30 días hábiles</strong>
            {' '}para responder desde la notificación. Si no respondes, tu solicitud queda
            abandonada.
          </p>
        </div>
      </section>

      {/* 3 — CAUSALES */}
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

      {/* 4 — PLANES */}
      <section id="planes" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Elige tu plan
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col rounded-lg p-8"
                style={{
                  backgroundColor: plan.highlighted ? '#1B3A6B' : '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <p
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: plan.highlighted ? '#93B8E8' : '#2557A7' }}
                >
                  {plan.name}
                </p>
                <p
                  className="mt-3 text-3xl font-extrabold"
                  style={{ color: plan.highlighted ? '#ffffff' : '#1B3A6B' }}
                >
                  {plan.price}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span
                        className="mt-0.5 text-sm font-bold"
                        style={{ color: plan.highlighted ? '#93B8E8' : '#2557A7' }}
                      >
                        ✓
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: plan.highlighted ? 'rgba(255,255,255,0.8)' : '#4B5563' }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className="mt-auto block rounded py-3 text-center text-xs font-bold tracking-widest text-white transition-colors"
                  style={{
                    marginTop: '2rem',
                    backgroundColor: plan.highlighted ? '#2557A7' : '#1B3A6B',
                  }}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CÓMO FUNCIONA */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo funciona?
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

      {/* 6 — CTA FINAL */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Tienes tu observación a mano?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Inicia ahora y resuelve tu caso en 48 horas
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
