import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '¿Cómo Funciona? | Responde tu Observación INAPI en 48 Horas',
  description:
    'Proceso simple en 4 pasos para responder tu observación de marca ante INAPI. Sube tu PDF, elige tu plan y recibe el escrito listo en 48 horas.',
  keywords: [
    'cómo responder observación INAPI',
    'proceso respuesta marca Chile',
    'plazo observación INAPI',
    'abogados marca Chile online',
  ],
};

type Paso = {
  number: string;
  title: string;
  description: string;
};

type PasoRep = {
  label: string;
  title: string;
  description: string;
};

type Garantia = {
  title: string;
  description: string;
};

type Faq = {
  question: string;
  answer: string;
};

const pasos: Paso[] = [
  {
    number: '1',
    title: 'Sube tu observación',
    description:
      'Adjunta el PDF de tu observación de fondo o de forma emitido por INAPI. También puedes incluir tu número de solicitud y cualquier contexto adicional que consideres relevante.',
  },
  {
    number: '2',
    title: 'Elige tu plan',
    description:
      'Selecciona entre Solo Escrito (tú presentas) o Representación Completa (nosotros tramitamos). Ambos incluyen respuesta en 48 horas.',
  },
  {
    number: '3',
    title: 'Confirmación y pago',
    description:
      'Recibes un correo de confirmación con los datos de transferencia. Una vez confirmado el pago, nuestro equipo legal comienza a trabajar en tu caso inmediatamente.',
  },
  {
    number: '4',
    title: 'Recibes tu escrito listo',
    description:
      'En máximo 48 horas hábiles recibes el escrito redactado por abogados especializados, listo para presentar en INAPI con tu clave única.',
  },
];

const pasosRep: PasoRep[] = [
  {
    label: 'Paso A',
    title: 'Recibes el poder por mail',
    description:
      'Te enviamos un poder simple que puedes firmar sin notario. Solo necesitas tu firma.',
  },
  {
    label: 'Paso B',
    title: 'Nosotros presentamos',
    description:
      'Con el poder firmado, nuestros abogados presentan el escrito ante INAPI en tu nombre.',
  },
  {
    label: 'Paso C',
    title: 'Seguimiento incluido',
    description:
      'Te mantenemos informado del estado de tu expediente hasta la resolución final.',
  },
];

const garantias: Garantia[] = [
  {
    title: '48 horas hábiles',
    description:
      'Tu escrito estará listo en 48 horas hábiles desde la confirmación del pago. Sin excepciones.',
  },
  {
    title: 'Abogados especializados',
    description:
      'Cada escrito es redactado y revisado por abogados con experiencia en propiedad industrial y jurisprudencia TDPI.',
  },
  {
    title: 'Confidencialidad total',
    description:
      'Tu información y documentos son tratados con estricta confidencialidad. Nunca compartimos datos con terceros.',
  },
];

const faqs: Faq[] = [
  {
    question: '¿Qué pasa si no respondo la observación?',
    answer:
      'Si no respondes dentro del plazo de 30 días hábiles, tu solicitud de marca queda abandonada automáticamente. Perderás el número de solicitud y los derechos de prioridad asociados.',
  },
  {
    question: '¿Puedo presentar el escrito yo mismo?',
    answer:
      'Sí. Con el Plan Solo Escrito te entregamos el documento listo para que tú lo presentes usando tu clave única INAPI en el portal oficial inapi.cl.',
  },
  {
    question: '¿Qué incluye el poder simple?',
    answer:
      'Es un mandato especial que nos autoriza a actuar en tu nombre ante INAPI. No requiere notario — solo tu firma. Te lo enviamos por correo electrónico junto con las instrucciones.',
  },
  {
    question: '¿Cuánto tarda INAPI en resolver?',
    answer:
      'Una vez presentada la respuesta, INAPI generalmente demora entre 3 y 6 meses en resolver. Nosotros te mantenemos informado si elegiste el Plan Representación Completa.',
  },
];

export default function ComoFuncionaPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Simple. Rápido. Sin reuniones.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Resuelve tu observación de marca en 48 horas desde cualquier lugar de Chile.
          </p>
        </div>
      </section>

      {/* 2 — PROCESO COMPLETO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Así funciona el proceso
          </h2>
          <div className="mt-10 flex flex-col gap-10">
            {pasos.map((paso) => (
              <div key={paso.number} className="flex items-start gap-6">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {paso.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">{paso.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {paso.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — PLAN REPRESENTACIÓN */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Si eliges Representación Completa
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pasosRep.map((paso) => (
              <div
                key={paso.label}
                className="rounded-lg bg-white p-6"
                style={{ borderTop: '3px solid #2557A7' }}
              >
                <p className="text-xs font-bold tracking-widest text-[#2557A7]">
                  {paso.label}
                </p>
                <h3 className="mt-2 text-base font-bold text-[#1B3A6B]">{paso.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {paso.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — GARANTÍAS */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Lo que garantizamos
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {garantias.map((g) => (
              <div
                key={g.title}
                className="rounded-lg p-6"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderTop: '3px solid #2557A7',
                }}
              >
                <h3 className="text-base font-bold text-[#1B3A6B]">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — PREGUNTAS FRECUENTES */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#F0F4FA' }}
      >
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-8 flex flex-col gap-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-lg bg-white"
                style={{ border: '1px solid #e5e7eb' }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between px-6 py-4 text-sm font-bold text-[#1B3A6B]">
                  {faq.question}
                  <span className="ml-4 shrink-0 text-[#2557A7] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="px-6 pb-5 pt-1 text-sm leading-relaxed text-gray-500">
                  {faq.answer}
                </p>
              </details>
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
            ¿Listo para resolver tu observación?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Inicia ahora y recibe tu escrito en 48 horas
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
