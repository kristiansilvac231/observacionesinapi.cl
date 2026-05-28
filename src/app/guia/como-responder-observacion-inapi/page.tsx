import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cómo Responder una Observación INAPI | Guía Paso a Paso 2026',
  description:
    'Aprende cómo responder una observación de marca ante INAPI en Chile. Guía paso a paso con plazos, argumentos y opciones para salvar tu solicitud de marca.',
  keywords: [
    'cómo responder observación INAPI',
    'responder observación marca Chile',
    'guía observación INAPI 2026',
    'escrito respuesta INAPI marca',
  ],
};

type CheckCard = {
  title: string;
  description: string;
};

type Opcion = {
  number: string;
  title: string;
  description: string;
};

type Paso = {
  number: string;
  label: string;
};

type Error = {
  text: string;
};

const checks: CheckCard[] = [
  {
    title: 'Identifica el tipo',
    description:
      '¿Es una observación de fondo (art. 20) o de forma (documentos, poder, clasificación)? La estrategia es completamente distinta.',
  },
  {
    title: 'Verifica el plazo',
    description:
      'Cuenta desde la fecha del Estado Diario. Tienes 30 días hábiles. Si quedan menos de 5, actúa hoy.',
  },
  {
    title: 'Lee la causal exacta',
    description:
      'Identifica qué artículo citó INAPI y cuál es la marca o motivo que fundamenta la observación.',
  },
];

const opciones: Opcion[] = [
  {
    number: '1',
    title: 'Responder tú mismo',
    description:
      'Puedes presentar el escrito directamente en inapi.cl con tu clave única. Requiere conocimientos jurídicos para argumentar correctamente.',
  },
  {
    number: '2',
    title: 'Usar nuestro servicio',
    description:
      'Nosotros redactamos el escrito por ti en 48 horas, basado en jurisprudencia del TDPI. Tú lo presentas con tu clave INAPI. Desde $39.990 CLP.',
  },
  {
    number: '3',
    title: 'Representación completa',
    description:
      'Nosotros redactamos, te enviamos el poder simple y tramitamos todo ante INAPI en tu nombre. Desde $89.990 CLP.',
  },
];

const pasos: Paso[] = [
  { number: '1', label: 'Recibe la notificación en el Estado Diario de INAPI' },
  { number: '2', label: 'Identifica la causal y la marca fundante' },
  { number: '3', label: 'Redacta el escrito con argumentos de diferenciación' },
  { number: '4', label: 'Ingresa al portal INAPI con tu clave única' },
  { number: '5', label: 'Presenta el escrito antes del vencimiento del plazo' },
];

const errores: Error[] = [
  { text: 'No responder a tiempo — el abandono es automático e irreversible' },
  { text: 'Responder sin argumentos jurídicos — una respuesta genérica tiene pocas probabilidades de éxito' },
  { text: 'Confundir observación de fondo con de forma — la estrategia y los argumentos son distintos' },
  { text: 'No identificar la marca fundante — sin saber contra qué marca te comparan, no puedes argumentar diferenciación' },
];

export default function ComoResponderObservacionInapiPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#93B8E8]">
            GUÍA PRÁCTICA
          </p>
          <h1 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Cómo Responder una Observación de Marca ante INAPI
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Guía paso a paso para responder correctamente y maximizar tus probabilidades de éxito.
          </p>
        </div>
      </section>

      {/* 2 — LO PRIMERO QUE DEBES HACER */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Lo primero que debes hacer
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {checks.map((card) => (
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

      {/* 3 — TUS OPCIONES */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Tus opciones para responder
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

      {/* 4 — PROCESO PASO A PASO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Proceso completo de respuesta
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-5">
            {pasos.map((paso) => (
              <div key={paso.number} className="flex flex-col items-start">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {paso.number}
                </span>
                <p className="mt-4 text-sm font-semibold leading-snug text-[#1B3A6B]">
                  {paso.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — ERRORES FRECUENTES */}
      <section className="bg-white px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Errores que debes evitar
          </h2>
          <div
            className="mt-8 rounded-lg p-8"
            style={{
              backgroundColor: '#FFF5F5',
              border: '1px solid #FECACA',
            }}
          >
            <ul className="flex flex-col gap-4">
              {errores.map((error) => (
                <li key={error.text} className="flex items-start gap-3">
                  <span className="mt-0.5 text-sm font-bold text-red-500">✗</span>
                  <span className="text-sm leading-relaxed text-gray-700">{error.text}</span>
                </li>
              ))}
            </ul>
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
            ¿Necesitas ayuda para responder?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Escrito listo en 48 horas. Tú eliges si presentas o nosotros tramitamos.
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
