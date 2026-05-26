import Link from 'next/link';

type PricePlan = {
  label: string;
  price: string;
  detail: string;
};

type HeroCard = {
  number: string;
  title: string;
  description: string;
  plan1: PricePlan;
  plan2: PricePlan;
  ctaHref: string;
  ctaLabel: string;
  singlePlan?: boolean;
};

const cards: HeroCard[] = [
  {
    number: '1',
    title: 'OBSERVACIONES DE FONDO',
    description:
      'Para objeciones sustantivas de registrabilidad, similitud o distintividad.',
    plan1: {
      label: 'Solo Escrito',
      price: '$69.990 CLP',
      detail: 'redactamos, tú presentas',
    },
    plan2: {
      label: 'Representación',
      price: '$129.990 CLP',
      detail: '',
    },
    ctaHref: '/iniciar?tipo=fondo',
    ctaLabel: 'QUIERO RESPONDER FONDO',
  },
  {
    number: '2',
    title: 'OBSERVACIONES DE FORMA',
    description:
      'Para correcciones formales, clasificación, documentos o datos de solicitud.',
    plan1: {
      label: 'Solo Corrección',
      price: '$39.990 CLP',
      detail: 'corregimos, tú presentas',
    },
    plan2: {
      label: 'Representación',
      price: '$89.990 CLP',
      detail: '',
    },
    ctaHref: '/iniciar?tipo=forma',
    ctaLabel: 'QUIERO CORREGIR FORMA',
  },
  {
    number: '3',
    title: 'APELACIÓN DE MARCA',
    description:
      'Para rechazos o resoluciones que requieren estrategia de apelación.',
    plan1: {
      label: 'Evaluación jurídica',
      price: 'Sin precio fijo',
      detail: 'formulario de contacto → cotización personalizada',
    },
    plan2: {
      label: '',
      price: '',
      detail: '',
    },
    ctaHref: '/apelacion-de-marca',
    ctaLabel: 'SOLICITAR COTIZACIÓN',
    singlePlan: true,
  },
];

export default function Home() {
  return (
    <section
      className="px-4 py-16 sm:px-6 lg:px-8"
      style={{ background: '#ffffff' }}
    >
      <div className="mx-auto max-w-7xl">

        {/* H1 */}
        <h1
          className="mx-auto mt-5 max-w-3xl text-center text-[1.78rem] text-[#0F1C35] md:text-[3.56rem]"
          style={{ lineHeight: 1.2 }}
        >
          <span className="block font-normal text-[#1B3A6B]">Responde tu observación con</span>
          <span className="block font-extrabold text-[#2557A7]">el nivel de apoyo</span>
          <span className="block font-normal text-[#1B3A6B]">que tu <strong className="text-[#2557A7]">marca</strong> necesita</span>
        </h1>

        {/* Subtítulo */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-[#0F1C35]">
          <strong>Tres caminos simples para avanzar:</strong> escrito listo para presentar, representación
          completa o cotización personalizada si corresponde apelar.
        </p>

        {/* Tarjetas */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.number}
              className="flex flex-col rounded-lg p-6"
              style={{
                backgroundColor: '#F0F4FA',
                borderTop: '3px solid #2557A7',
              }}
            >
              {/* Título tarjeta */}
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#2557A7]">
                {card.number}. {card.title}
              </h2>

              {/* Descripción */}
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {card.description}
              </p>

              <div className="mt-6 flex flex-col gap-4">
                {/* Plan 1 */}
                <div>
                  <p className="text-xs font-bold text-[#0F1C35]">{card.plan1.label}</p>
                  <p
                    className="mt-1 font-bold text-[#0F1C35]"
                    style={{ fontSize: '1.1rem', lineHeight: 1.2 }}
                  >
                    {card.plan1.price}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{card.plan1.detail}</p>
                </div>

                {/* Separador + Plan 2 (solo si no es singlePlan) */}
                {!card.singlePlan && (
                  <>
                    <hr className="border-gray-300" />
                    <div>
                      <p className="text-xs font-bold text-[#0F1C35]">{card.plan2.label}</p>
                      <p
                        className="mt-1 font-bold text-[#0F1C35]"
                        style={{ fontSize: '1.1rem', lineHeight: 1.2 }}
                      >
                        {card.plan2.price}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">{card.plan2.detail}</p>
                    </div>
                  </>
                )}
              </div>

              {/* CTA */}
              <Link
                href={card.ctaHref}
                className="mt-auto block w-full rounded py-3 text-center text-xs font-bold tracking-widest text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#C62828' }}
              >
                {card.ctaLabel}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
