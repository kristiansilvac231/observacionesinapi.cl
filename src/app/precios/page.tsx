import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Precios y Planes | Observaciones de Marca INAPI | Observacionesinapi.cl',
  description:
    'Planes y precios para responder observaciones de marca ante INAPI. Desde $39.990 CLP. Observaciones de fondo, de forma y apelación de marca en Chile.',
  keywords: [
    'precios observación INAPI',
    'cuánto cuesta responder observación marca',
    'planes observación marca Chile',
    'tarifa abogado marca INAPI',
  ],
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

type Garantia = {
  title: string;
  description: string;
};

const planesFondo: Plan[] = [
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

const planesForma: Plan[] = [
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

const garantias: Garantia[] = [
  {
    title: '48 horas',
    description: 'Tu escrito listo en 48 horas desde que recibes tu observación.',
  },
  {
    title: 'Abogados especializados',
    description: 'Escritos redactados por abogados con experiencia en propiedad industrial.',
  },
  {
    title: 'Confidencialidad',
    description: 'Tu información y los datos de tu marca son tratados con total confidencialidad.',
  },
];

type TableRow = {
  feature: string;
  soloEscrito: boolean;
  representacion: boolean;
};

const tablaComparativa: TableRow[] = [
  { feature: 'Redacción escrito', soloEscrito: true, representacion: true },
  { feature: 'Jurisprudencia TDPI', soloEscrito: true, representacion: true },
  { feature: 'Entrega 48h', soloEscrito: true, representacion: true },
  { feature: 'Poder simple', soloEscrito: false, representacion: true },
  { feature: 'Presentación ante INAPI', soloEscrito: false, representacion: true },
  { feature: 'Seguimiento expediente', soloEscrito: false, representacion: true },
];

function PlanCard(props: { plan: Plan }) {
  return (
    <div
      className="flex flex-col rounded-lg p-8"
      style={{
        backgroundColor: props.plan.highlighted ? '#1B3A6B' : '#F0F4FA',
        borderTop: '3px solid #2557A7',
      }}
    >
      <p
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: props.plan.highlighted ? '#93B8E8' : '#2557A7' }}
      >
        {props.plan.name}
      </p>
      <p
        className="mt-3 text-3xl font-extrabold"
        style={{ color: props.plan.highlighted ? '#ffffff' : '#1B3A6B' }}
      >
        {props.plan.price}
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {props.plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span
              className="mt-0.5 text-sm font-bold"
              style={{ color: props.plan.highlighted ? '#93B8E8' : '#2557A7' }}
            >
              ✓
            </span>
            <span
              className="text-sm leading-relaxed"
              style={{ color: props.plan.highlighted ? 'rgba(255,255,255,0.8)' : '#4B5563' }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Link
        href={props.plan.href}
        className="mt-auto block rounded py-3 text-center text-xs font-bold tracking-widest text-white transition-colors hover:opacity-90"
        style={{
          marginTop: '2rem',
          backgroundColor: props.plan.highlighted ? '#2557A7' : '#1B3A6B',
        }}
      >
        {props.plan.cta}
      </Link>
    </div>
  );
}

export default function PreciosPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Planes y Precios
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Precios simples y transparentes. Sin sorpresas.
          </p>
        </div>
      </section>

      {/* 2 — OBSERVACIONES DE FONDO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Observaciones de Fondo
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {planesFondo.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 — OBSERVACIONES DE FORMA */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Observaciones de Forma
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {planesForma.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — APELACIÓN */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Apelación de Marca
          </h2>
          <div className="mt-8 flex justify-center">
            <div
              className="w-full max-w-sm rounded-lg p-8 text-center"
              style={{
                backgroundColor: '#1B3A6B',
                borderTop: '3px solid #2557A7',
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#93B8E8]">
                Representación ante el TDPI
              </p>
              <p className="mt-3 text-2xl font-extrabold text-white">
                Evaluación gratuita
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Cada caso de apelación es único. Evaluamos tu situación sin costo para recomendarte la mejor estrategia.
              </p>
              <Link
                href="/apelacion-de-marca"
                className="mt-8 inline-block rounded px-8 py-3 text-xs font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
                style={{ backgroundColor: '#ffffff' }}
              >
                Solicitar evaluación →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — TABLA COMPARATIVA */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué incluye cada plan?
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg" style={{ border: '1px solid #D1E3F8' }}>
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: '#1B3A6B' }}>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-white/70">
                    Característica
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white/70">
                    Solo Escrito
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-widest text-white/70">
                    Representación
                  </th>
                </tr>
              </thead>
              <tbody>
                {tablaComparativa.map((row, index) => (
                  <tr
                    key={row.feature}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#F8FAFD',
                      borderBottom: '1px solid #E5EDF8',
                    }}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#1B3A6B]">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {row.soloEscrito
                        ? <span className="font-bold text-[#2557A7]">✓</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                    <td className="px-6 py-4 text-center text-sm">
                      {row.representacion
                        ? <span className="font-bold text-[#2557A7]">✓</span>
                        : <span className="text-gray-300">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6 — GARANTÍAS */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {garantias.map((garantia) => (
              <div
                key={garantia.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">{garantia.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {garantia.description}
                </p>
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
