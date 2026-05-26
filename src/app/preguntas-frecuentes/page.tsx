import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Observaciones de Marca INAPI | Observacionesinapi.cl',
  description:
    'Resuelve tus dudas sobre observaciones de fondo y forma ante INAPI. Plazos, costos, proceso y todo lo que necesitas saber para responder tu observación de marca.',
  keywords: [
    'preguntas frecuentes observación INAPI',
    'plazo respuesta observación marca',
    'qué es observación de fondo',
    'qué es observación de forma',
    'abandono solicitud marca Chile',
  ],
};

type Faq = {
  question: string;
  answer: string;
};

type FaqSection = {
  id: string;
  title: string;
  faqs: Faq[];
};

const sections: FaqSection[] = [
  {
    id: 'fondo',
    title: 'Sobre Observaciones de Fondo',
    faqs: [
      {
        question: '¿Qué es una observación de fondo?',
        answer:
          'Es una objeción sustantiva que INAPI formula cuando detecta que tu marca podría infringir derechos de terceros o no cumple los requisitos legales de registrabilidad. Las causales más frecuentes son el Art. 20 f) por semejanza fonética o gráfica con una marca registrada, y el Art. 20 e) por falta de distintividad.',
      },
      {
        question: '¿Cuánto tiempo tengo para responder?',
        answer:
          'Tienes 30 días hábiles contados desde la fecha de notificación en el Estado Diario de INAPI. Este plazo no se prorroga y si vence sin respuesta, tu solicitud queda abandonada automáticamente.',
      },
      {
        question: '¿Qué pasa si no respondo a tiempo?',
        answer:
          'Tu solicitud de marca queda abandonada. Pierdes el número de solicitud, la fecha de prioridad y todos los derechos asociados. Tendrías que iniciar el proceso desde cero con una nueva solicitud.',
      },
      {
        question: '¿Puedo responder yo mismo sin abogado?',
        answer:
          'Sí, legalmente puedes presentar la respuesta por tu propia cuenta usando tu clave única INAPI. Sin embargo, una respuesta técnicamente deficiente puede resultar en el rechazo de tu solicitud. Nuestro servicio te entrega el escrito listo, redactado con fundamentos legales y jurisprudencia del TDPI.',
      },
      {
        question: '¿Qué posibilidades tengo de que acepten mi respuesta?',
        answer:
          'Depende de la causal. En casos de semejanza fonética o gráfica (Art. 20 f y h), una respuesta bien fundamentada con argumentos de diferenciación tiene altas probabilidades de éxito. En casos de falta de distintividad (Art. 20 e), las posibilidades varían según la marca. Te informamos nuestra evaluación antes de que pagues.',
      },
    ],
  },
  {
    id: 'forma',
    title: 'Sobre Observaciones de Forma',
    faqs: [
      {
        question: '¿Qué es una observación de forma?',
        answer:
          'Es un reparo administrativo por defectos en la presentación de tu solicitud. No cuestiona el fondo de tu marca sino aspectos formales como documentos faltantes, poder del representante, clasificación incorrecta o datos del solicitante.',
      },
      {
        question: '¿Son más fáciles de resolver que las de fondo?',
        answer:
          'En general sí, porque no cuestionan la registrabilidad de tu marca sino aspectos subsanables. Sin embargo, una respuesta incompleta o fuera de plazo tiene las mismas consecuencias: abandono de la solicitud.',
      },
      {
        question: '¿Qué documentos suelen pedir?',
        answer:
          'Los más frecuentes son: poder o mandato del representante, personería jurídica de la empresa, traducciones oficiales de documentos extranjeros, y correcciones en la clasificación de productos o servicios según la Clasificación de Niza.',
      },
    ],
  },
  {
    id: 'servicio',
    title: 'Sobre nuestro servicio',
    faqs: [
      {
        question: '¿Cómo funciona el pago?',
        answer:
          'Una vez que envías tu formulario, te confirmamos la recepción por correo con los datos de transferencia bancaria. Cuando confirmamos el pago, comenzamos a trabajar en tu caso inmediatamente.',
      },
      {
        question: '¿En cuánto tiempo recibo el escrito?',
        answer:
          'En máximo 48 horas hábiles desde la confirmación del pago. En la mayoría de los casos entregamos antes.',
      },
      {
        question: '¿Qué es el poder simple y para qué sirve?',
        answer:
          'Es un mandato especial que nos autoriza a actuar en tu nombre ante INAPI. Con él podemos presentar escritos y hacer seguimiento de tu expediente. No requiere notario ni firma electrónica avanzada — solo tu firma simple. Te lo enviamos por correo electrónico.',
      },
      {
        question: '¿Qué pasa si INAPI rechaza igual después de mi respuesta?',
        answer:
          'Puedes apelar ante el Tribunal de Propiedad Industrial (TDPI), que es un tribunal independiente de INAPI. En ese caso te ofrecemos nuestro servicio de apelación con evaluación previa gratuita.',
      },
      {
        question: '¿Atienden a todo Chile?',
        answer:
          'Sí. El servicio es 100% digital. Puedes contratarlo desde cualquier ciudad de Chile sin necesidad de reuniones presenciales.',
      },
    ],
  },
];

export default function PreguntasFrecuentesPage() {
  return (
    <>
      {/* 1 — HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-extrabold text-white md:text-6xl">
            Preguntas Frecuentes
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/70">
            Todo lo que necesitas saber sobre las observaciones de marca ante INAPI.
          </p>
        </div>
      </section>

      {/* 2-4 — SECCIONES DE ACORDEONES */}
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          className="px-4 py-16 sm:px-6 lg:px-8"
          style={{ backgroundColor: sectionIndex % 2 === 0 ? '#ffffff' : '#F0F4FA' }}
        >
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-extrabold text-[#1B3A6B] md:text-4xl">
              {section.title}
            </h2>
            <div className="mt-8 flex flex-col gap-3">
              {section.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-lg"
                  style={{
                    backgroundColor: sectionIndex % 2 === 0 ? '#F0F4FA' : '#ffffff',
                    border: '1px solid #e5e7eb',
                  }}
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
      ))}

      {/* 5 — CTA FINAL */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Escríbenos y te respondemos en menos de 24 horas
          </p>
          <Link
            href="/contacto"
            className="mt-8 inline-block rounded px-8 py-3 text-sm font-bold tracking-widest text-[#1B3A6B] transition-colors hover:opacity-90"
            style={{ backgroundColor: '#ffffff' }}
          >
            Ir al formulario de contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
