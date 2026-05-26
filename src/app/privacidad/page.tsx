import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad y Protección de Datos | Observacionesinapi.cl',
  description:
    'Política de privacidad y tratamiento de datos personales de Observacionesinapi.cl conforme a la Ley 21.719 de Chile. Uso exclusivo para la gestión encargada.',
};

type Section = {
  number: string;
  title: string;
  content: React.ReactNode;
};

const proseP = 'mt-3 text-sm leading-relaxed text-gray-600';
const proseUl = 'mt-2 space-y-1 pl-4 text-sm leading-relaxed text-gray-600 list-disc';

const sections: Section[] = [
  {
    number: '1.',
    title: 'Identidad del responsable',
    content: (
      <p className={proseP}>
        Observacionesinapi.cl es un servicio operado por el holding Innova-Legal. Para efectos
        de la legislación de protección de datos personales, actuamos como responsable del
        tratamiento de los datos que usted nos proporciona. Puede contactarnos en{' '}
        <span className="font-semibold text-[#2557A7]">contacto@mpd-intelectual.cl</span>{' '}
        para cualquier consulta relativa a sus datos.
      </p>
    ),
  },
  {
    number: '2.',
    title: 'Marco legal aplicable',
    content: (
      <p className={proseP}>
        El tratamiento de sus datos personales se rige por la Ley N° 19.628 sobre Protección
        de la Vida Privada y por la Ley N° 21.719 que regula la protección y el tratamiento
        de los datos personales y crea la Agencia de Protección de Datos Personales. Aplicamos
        estándares conformes a las mejores prácticas internacionales en la materia.
      </p>
    ),
  },
  {
    number: '3.',
    title: 'Datos que recopilamos',
    content: (
      <>
        <p className={proseP}>
          Recopilamos únicamente los datos necesarios para prestar nuestro servicio:
        </p>
        <ul className={proseUl}>
          <li><strong>Datos de identificación:</strong> nombre completo.</li>
          <li><strong>Datos de contacto:</strong> correo electrónico y, opcionalmente, número telefónico.</li>
          <li>
            <strong>Datos del caso:</strong> número de solicitud de marca ante INAPI, documentos
            de observación que usted decida adjuntar y los comentarios que proporcione.
          </li>
        </ul>
        <p className={proseP}>
          No recopilamos datos sensibles. No utilizamos los datos para fines de perfilamiento
          ni los sometemos a decisiones automatizadas.
        </p>
      </>
    ),
  },
  {
    number: '4.',
    title: 'Finalidad del tratamiento',
    content: (
      <>
        <p className={proseP}>
          Sus datos se utilizan de forma <strong>exclusiva</strong> para la gestión encargada,
          es decir, para responder, redactar o tramitar la observación de marca ante INAPI que
          usted nos solicita. Específicamente:
        </p>
        <ul className={proseUl}>
          <li>Analizar su caso y elaborar el escrito correspondiente.</li>
          <li>
            Contactarlo para confirmar el servicio, coordinar el pago y entregar el resultado.
          </li>
          <li>Cumplir obligaciones legales asociadas a la prestación del servicio.</li>
        </ul>
        <p className={proseP}>
          No usamos sus datos para publicidad de terceros, no los vendemos ni los cedemos con
          fines comerciales.
        </p>
      </>
    ),
  },
  {
    number: '5.',
    title: 'Base de licitud',
    content: (
      <p className={proseP}>
        El tratamiento se fundamenta en su consentimiento libre, informado y específico,
        otorgado al momento de enviar el formulario, y en la necesidad de ejecutar el servicio
        que usted contrata.
      </p>
    ),
  },
  {
    number: '6.',
    title: 'Conservación de los datos',
    content: (
      <p className={proseP}>
        Conservamos sus datos durante el tiempo necesario para prestar el servicio y cumplir
        las obligaciones legales y de respaldo profesional asociadas. Transcurrido ese plazo,
        los datos se eliminan o anonimizan de forma segura.
      </p>
    ),
  },
  {
    number: '7.',
    title: 'Comunicación de datos a terceros',
    content: (
      <p className={proseP}>
        Para prestar el servicio podemos comunicar los datos estrictamente necesarios a INAPI,
        en el contexto de la gestión que usted nos encarga. Asimismo, podemos utilizar
        proveedores tecnológicos (por ejemplo, servicios de formularios, correo y alojamiento)
        que actúan como encargados de tratamiento bajo nuestras instrucciones y con compromisos
        de confidencialidad. No realizamos transferencias de datos con fines distintos a la
        gestión encargada.
      </p>
    ),
  },
  {
    number: '8.',
    title: 'Medidas de seguridad',
    content: (
      <p className={proseP}>
        Aplicamos medidas técnicas y organizativas razonables para proteger sus datos contra
        el acceso no autorizado, la pérdida o la alteración. El acceso a su información está
        restringido al equipo legal a cargo de su caso.
      </p>
    ),
  },
  {
    number: '9.',
    title: 'Sus derechos',
    content: (
      <p className={proseP}>
        Usted puede ejercer en cualquier momento sus derechos de acceso, rectificación,
        cancelación (supresión) y oposición respecto de sus datos personales, así como el
        derecho a la portabilidad cuando corresponda. Para ejercerlos, escriba a{' '}
        <span className="font-semibold text-[#2557A7]">contacto@mpd-intelectual.cl</span>{' '}
        identificándose adecuadamente. Responderemos su solicitud en los plazos que establece
        la ley.
      </p>
    ),
  },
  {
    number: '10.',
    title: 'Confidencialidad profesional',
    content: (
      <p className={proseP}>
        Como servicio operado por un holding legal, su información está además amparada por
        el deber de reserva y confidencialidad profesional que rige la relación entre abogado
        y cliente.
      </p>
    ),
  },
  {
    number: '11.',
    title: 'Cambios a esta política',
    content: (
      <p className={proseP}>
        Podemos actualizar esta política para reflejar cambios legales o en nuestros servicios.
        Publicaremos la versión vigente en esta misma página, indicando la fecha de última
        actualización.
      </p>
    ),
  },
  {
    number: '12.',
    title: 'Contacto',
    content: (
      <p className={proseP}>
        Para cualquier consulta sobre esta política o sobre el tratamiento de sus datos,
        escríbanos a{' '}
        <span className="font-semibold text-[#2557A7]">contacto@mpd-intelectual.cl</span>.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <>
      {/* HERO */}
      <section
        className="px-4 py-20 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-extrabold text-white md:text-5xl">
            Política de Privacidad y Protección de Datos Personales
          </h1>
          <p className="mt-4 text-sm text-white/60">Última actualización: mayo de 2026</p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.number}>
                <h2 className="text-base font-bold text-[#1B3A6B]">
                  {section.number} {section.title}
                </h2>
                {section.content}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
