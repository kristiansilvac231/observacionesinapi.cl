import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Plazo para Responder Observación INAPI | 30 Días Hábiles | Qué Hacer',
  description:
    '¿Cuánto tiempo tienes para responder una observación de INAPI? 30 días hábiles desde la notificación. Qué pasa si no respondes y cómo actuar rápido.',
  keywords: [
    'plazo observación INAPI',
    '30 días hábiles marca Chile',
    'cuánto tiempo responder INAPI',
    'vencimiento plazo observación marca',
    'abandono solicitud marca Chile',
  ],
};

type InfoCard = {
  title: string;
  description: string;
};

type PasoUrgente = {
  number: string;
  title: string;
  description: string;
};

const infoCards: InfoCard[] = [
  {
    title: 'Estado Diario INAPI',
    description:
      'Revisa el Estado Diario en inapi.cl. La fecha de publicación de tu observación es el punto de partida del plazo. Puedes suscribirte para recibir alertas.',
  },
  {
    title: 'Tu expediente online',
    description:
      'En el portal de INAPI puedes revisar el estado de tu solicitud ingresando con tu RUT y clave única. Ahí aparece la fecha exacta de notificación.',
  },
  {
    title: 'Cuenta los días hábiles',
    description:
      'Desde la fecha de notificación, cuenta solo los días de lunes a viernes excluyendo festivos. El día 30 es tu último día para presentar.',
  },
];

const pasosUrgentes: PasoUrgente[] = [
  {
    number: '1',
    title: 'No esperes más',
    description:
      'Sube tu PDF hoy y elige tu plan. Con 48 horas de entrega tienes margen si te quedan al menos 3 días hábiles.',
  },
  {
    number: '2',
    title: 'Verifica el plazo exacto',
    description:
      'Revisa la fecha de notificación en el Estado Diario o tu expediente INAPI antes de calcular.',
  },
  {
    number: '3',
    title: 'Contacta de inmediato',
    description:
      'Si te quedan menos de 3 días hábiles escríbenos directamente a contacto@mpd-intelectual.cl indicando urgencia.',
  },
];

export default function PlazoObservacionInapiPage() {
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
            ¿Cuánto Tiempo Tienes para Responder una Observación INAPI?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            El plazo es de 30 días hábiles y no se prorroga. Lo que necesitas saber antes de que sea tarde.
          </p>
        </div>
      </section>

      {/* 2 — EL PLAZO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            30 días hábiles — ni uno más
          </h2>

          <div
            className="mt-8 rounded-lg p-8 text-center"
            style={{
              backgroundColor: '#F0F4FA',
              borderLeft: '4px solid #2557A7',
            }}
          >
            <p
              className="font-extrabold text-[#2557A7]"
              style={{ fontSize: '4rem', lineHeight: 1 }}
            >
              30
            </p>
            <p className="mt-1 text-lg font-bold text-[#1B3A6B]">días hábiles</p>
          </div>

          <p className="mt-6 text-base leading-relaxed text-gray-600">
            Desde la fecha de notificación en el Estado Diario de INAPI, tienes exactamente{' '}
            <strong className="text-[#2557A7]">30 días hábiles</strong> para presentar tu
            respuesta. Este plazo es fatal — no existe prórroga, no hay excepciones y vencido el
            plazo, tu solicitud queda abandonada de pleno derecho.
          </p>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Los días hábiles no incluyen sábados, domingos ni festivos. En la práctica, 30 días
            hábiles equivalen a aproximadamente 6 semanas calendario.
          </p>
        </div>
      </section>

      {/* 3 — CÓMO SABER TU PLAZO */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cómo saber tu plazo exacto?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {infoCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#F0F4FA',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — QUÉ PASA SI VENCE */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué pasa si no respondo a tiempo?
          </h2>
          <div
            className="mt-8 rounded-r-lg p-6 text-sm leading-relaxed text-[#7F1D1D]"
            style={{
              backgroundColor: '#FFF5F5',
              borderLeft: '4px solid #C62828',
            }}
          >
            <p className="font-bold">Tu solicitud queda abandonada automáticamente.</p>
            <p className="mt-3">
              Pierdes: el número de solicitud, la fecha de prioridad, los derechos asociados a
              esa presentación. Tendrías que iniciar el proceso desde cero con una nueva
              solicitud y nuevo pago.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — CÓMO ACTUAR RÁPIDO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué hacer si te quedan pocos días?
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {pasosUrgentes.map((paso) => (
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

      {/* 6 — CTA URGENTE */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿Te está corriendo el plazo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Respondemos en 48 horas. No arriesgues el abandono de tu marca.
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
