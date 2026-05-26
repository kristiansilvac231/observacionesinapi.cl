import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Observación de Forma INAPI | Corrección en 48 Horas | Abogados Especializados',
  description:
    '¿Recibiste una observación de forma de INAPI? Corregimos tu solicitud en 48 horas. Abogados especializados en propiedad industrial. Desde $39.990 CLP.',
  keywords: [
    'observación de forma INAPI',
    'corregir observación marca Chile',
    'poder mandatario INAPI',
    'clasificación de Niza marca',
    'documentos INAPI marca',
  ],
};

type TipoFrecuente = {
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

const tipos: TipoFrecuente[] = [
  {
    title: 'Poder o mandato',
    description:
      'Falta o defecto en el poder que autoriza al representante a actuar ante INAPI.',
  },
  {
    title: 'Clasificación incorrecta',
    description:
      'Los productos o servicios no corresponden a la clase de Niza indicada o la descripción es imprecisa.',
  },
  {
    title: 'Documentos faltantes',
    description:
      'Falta documentación requerida: personería jurídica, traducción, certificados u otros antecedentes.',
  },
];

const plans: Plan[] = [
  {
    name: 'Solo Corrección',
    price: '$39.990 CLP',
    features: [
      'Corregimos el escrito de subsanación',
      'Revisión completa de los documentos requeridos',
      'Entrega en 48 horas',
      'Tú lo presentas con tu clave INAPI',
    ],
    highlighted: false,
    cta: 'Elegir este plan →',
    href: '/iniciar?tipo=forma&plan=correccion',
  },
  {
    name: 'Representación Completa',
    price: '$89.990 CLP',
    features: [
      'Todo lo del plan anterior',
      'Poder simple sin notario (por mail)',
      'Nosotros presentamos ante INAPI',
      'Seguimiento del expediente',
    ],
    highlighted: true,
    cta: 'Elegir este plan →',
    href: '/iniciar?tipo=forma&plan=representacion',
  },
];

const steps: Step[] = [
  { number: '1', label: 'Sube tu PDF de observación de forma' },
  { number: '2', label: 'Elige tu plan' },
  { number: '3', label: 'Recibe la corrección en 48 horas' },
  { number: '4', label: 'Preséntala en INAPI con tu clave' },
];

export default function ObservacionesDeFormaPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Observación de Forma INAPI
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Corregimos tu solicitud ante INAPI en 48 horas. Sin reuniones, sin burocracia.
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
              ¿Qué es una observación de forma?
            </a>
          </div>
        </div>
      </section>

      {/* 2 — ¿QUÉ ES? */}
      <section id="que-es" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué es una Observación de Forma?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Una observación de forma es un reparo administrativo que INAPI formula por defectos
            en la presentación de tu solicitud de marca. No cuestiona el fondo de tu marca, sino
            aspectos formales como documentos, poderes, clasificación o datos del solicitante.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Tienes{' '}
            <strong className="text-[#2557A7]">30 días hábiles</strong>
            {' '}para subsanar desde la notificación. Si no corriges, tu solicitud queda
            abandonada.
          </p>
        </div>
      </section>

      {/* 3 — TIPOS FRECUENTES */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Tipos más frecuentes
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {tipos.map((tipo) => (
              <div
                key={tipo.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">
                  {tipo.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {tipo.description}
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
                  className="mt-auto block rounded py-3 text-center text-xs font-bold tracking-widest text-white transition-colors hover:opacity-90"
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
            ¿Tienes tu observación de forma a mano?
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
