import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Abandono de Solicitud de Marca INAPI | Qué Hacer | Recuperar tu Marca',
  description:
    '¿Tu solicitud de marca quedó abandonada en INAPI? Qué significa, cuándo ocurre y qué opciones tienes. Actúa antes de que sea demasiado tarde.',
  keywords: [
    'abandono solicitud marca INAPI',
    'marca abandonada Chile',
    'recuperar marca abandonada INAPI',
    'plazo vencido observación marca',
    'qué pasa si no respondo INAPI',
  ],
};

type CuandoCard = {
  title: string;
  description: string;
};

type Opcion = {
  number: string;
  title: string;
  description: string;
};

type Consejo = string;

const cuandoCards: CuandoCard[] = [
  {
    title: 'No respondiste la observación de fondo',
    description:
      'Recibiste una observación por Art. 20 f), h) o e) y no presentaste respuesta dentro de los 30 días hábiles.',
  },
  {
    title: 'No subsanaste la observación de forma',
    description:
      'INAPI pidió corregir documentos, el poder o la clasificación y no lo hiciste dentro del plazo.',
  },
  {
    title: 'No pagaste la tasa complementaria',
    description:
      'Existen otros supuestos de abandono por incumplimiento de requisitos administrativos durante el proceso.',
  },
];

const opciones: Opcion[] = [
  {
    number: '1',
    title: 'Presentar una nueva solicitud',
    description:
      'La alternativa más directa es iniciar el proceso desde cero con una nueva solicitud de marca ante INAPI. Perderás la fecha de prioridad original pero podrás seguir adelante con tu marca. Si la marca fundante que generó la observación sigue vigente, deberás desarrollar una estrategia diferente.',
  },
  {
    number: '2',
    title: 'Evaluar si conviene apelar',
    description:
      'En casos excepcionales, cuando el abandono ocurrió por causas ajenas al titular o por errores del sistema, es posible explorar recursos administrativos. Esto requiere evaluación caso a caso por un abogado especializado.',
  },
  {
    number: '3',
    title: 'Rediseñar la marca y reiniciar',
    description:
      'Si la observación original tenía mérito — por ejemplo, tu marca era muy similar a una registrada — puede ser el momento de ajustar el signo, el diseño o las clases solicitadas para aumentar las probabilidades de éxito en una nueva presentación.',
  },
];

const consejos: Consejo[] = [
  'Monitorea el Estado Diario de INAPI regularmente — las observaciones se notifican ahí y el plazo corre desde esa fecha.',
  'Actúa apenas recibas la notificación — no esperes al último momento. Con nuestro servicio tienes el escrito listo en 48 horas.',
  'Si tienes representante, asegúrate de que esté atento a los plazos de tu expediente.',
];

export default function AbandonoSolicitudMarcaPage() {
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
            ¿Tu Solicitud de Marca Quedó Abandonada?
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Qué significa el abandono, cuándo ocurre y qué opciones reales tienes para proteger tu marca.
          </p>
        </div>
      </section>

      {/* 2 — QUÉ ES EL ABANDONO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué significa que una solicitud quede abandonada?
          </h2>
          <div
            className="mt-8 rounded-r-lg p-6 text-sm leading-relaxed text-[#7F1D1D]"
            style={{
              backgroundColor: '#FFF5F5',
              borderLeft: '4px solid #C62828',
            }}
          >
            Cuando una solicitud de marca queda abandonada, INAPI da por terminado el proceso.
            Pierdes el número de solicitud, la fecha de prioridad y todos los derechos asociados
            a esa presentación. No hay notificación adicional — el abandono opera de pleno derecho.
          </div>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            El abandono ocurre automáticamente cuando vence el plazo para responder una
            observación sin que el titular haya presentado ningún escrito. En el caso de
            observaciones de fondo y forma, ese plazo es de{' '}
            <strong className="text-[#2557A7]">30 días hábiles</strong>{' '}
            desde la notificación en el Estado Diario.
          </p>
        </div>
      </section>

      {/* 3 — CUÁNDO OCURRE */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Cuándo ocurre el abandono?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cuandoCards.map((card) => (
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

      {/* 4 — QUÉ OPCIONES TIENES */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            ¿Qué puedes hacer si tu solicitud ya quedó abandonada?
          </h2>
          <div className="mt-10 flex flex-col gap-8">
            {opciones.map((opcion) => (
              <div key={opcion.number} className="flex items-start gap-6">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {opcion.number}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#1B3A6B]">{opcion.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {opcion.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — CÓMO EVITARLO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Cómo evitar el abandono
          </h2>
          <div
            className="mt-8 rounded-lg p-8"
            style={{ backgroundColor: '#F0F4FA' }}
          >
            <ul className="flex flex-col gap-4">
              {consejos.map((consejo) => (
                <li key={consejo} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm font-bold"
                    style={{ color: '#2557A7' }}
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-gray-600">{consejo}</p>
                </li>
              ))}
            </ul>
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
            ¿Todavía estás a tiempo?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Si no ha vencido el plazo, actúa ahora. Respondemos en 48 horas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/como-funciona"
              className="rounded px-8 py-3 text-sm font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
              style={{ backgroundColor: '#ffffff' }}
            >
              Verificar mi plazo →
            </Link>
            <Link
              href="/observaciones-de-fondo"
              className="rounded border border-white/40 px-8 py-3 text-sm font-bold tracking-widest text-white/80 transition-colors hover:border-white hover:text-white"
            >
              Tengo una nueva solicitud →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
