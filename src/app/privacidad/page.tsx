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
        <span className="font-semibold text-[#2557A7]">contacto@observacionesinapi.cl</span>{' '}
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
        <span className="font-semibold text-[#2557A7]">contacto@observacionesinapi.cl</span>{' '}
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
        <span className="font-semibold text-[#2557A7]">contacto@observacionesinapi.cl</span>.
      </p>
    ),
  },
];

type TermsSection = {
  number: string;
  title: string;
  content: React.ReactNode;
};

const termsSections: TermsSection[] = [
  {
    number: '1.',
    title: 'NATURALEZA DEL SERVICIO',
    content: (
      <p className={proseP}>
        Los servicios ofrecidos en esta plataforma consisten en asesoría jurídica especializada en
        propiedad industrial, redacción de escritos de respuesta a observaciones de forma y de fondo,
        y representación administrativa ante INAPI. En ningún caso constituyen una garantía de
        resultado, promesa de registro, ni seguridad de éxito en el procedimiento de obtención de
        marca u otro derecho de propiedad industrial.
      </p>
    ),
  },
  {
    number: '2.',
    title: 'AUSENCIA DE GARANTÍA DE RESULTADO',
    content: (
      <>
        <p className={proseP}>
          El ejercicio de los derechos de propiedad industrial ante INAPI y el TDPI implica la
          intervención de organismos públicos independientes, cuyas resoluciones son de carácter
          discrecional dentro del marco legal vigente. Este estudio jurídico no garantiza, en
          ninguna circunstancia, la concesión del registro de marca, la aceptación de la observación
          respondida, ni el resultado favorable de recurso alguno.
        </p>
        <p className={proseP}>
          La calidad técnica y jurídica de los escritos que elaboramos es el único compromiso que
          asumimos. El resultado final depende exclusivamente de la autoridad competente.
        </p>
      </>
    ),
  },
  {
    number: '3.',
    title: 'FACTORES EXTERNOS FUERA DE NUESTRO CONTROL',
    content: (
      <>
        <p className={proseP}>
          El resultado de un procedimiento marcario puede verse afectado por circunstancias ajenas
          a la voluntad y diligencia de este estudio, entre las cuales se incluyen, sin carácter
          taxativo:
        </p>
        <ul className={proseUl}>
          <li>
            Cambios de criterio jurisprudencial o administrativo de INAPI o el TDPI con
            posterioridad a la contratación del servicio;
          </li>
          <li>
            Existencia de marcas anteriores no detectadas al momento de la prestación del servicio,
            ya sea por actualización tardía de bases de datos o por solicitudes en trámite no
            publicadas;
          </li>
          <li>
            Modificaciones legislativas o reglamentarias que alteren las condiciones de
            registrabilidad del signo;
          </li>
          <li>
            Resoluciones administrativas o jurisdiccionales fundadas en criterios de apreciación
            técnica propios de la autoridad;
          </li>
          <li>Oposiciones de terceros presentadas durante o después de la tramitación;</li>
          <li>
            Deficiencias, imprecisiones u omisiones en la información y documentación proporcionada
            por el cliente al momento de contratar el servicio;
          </li>
          <li>
            Incumplimiento de plazos imputables al cliente, incluyendo la demora en la firma y
            remisión del poder, en la entrega de documentos solicitados o en la presentación del
            escrito ante INAPI con su propia clave única cuando corresponda al plan sin
            representación.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '4.',
    title: 'RESPONSABILIDAD LIMITADA',
    content: (
      <p className={proseP}>
        En caso de resultado adverso en el procedimiento, la responsabilidad de este estudio quedará
        limitada, en todo evento, al monto efectivamente pagado por el servicio contratado. No
        seremos responsables por daños directos, indirectos, consecuenciales, lucro cesante, pérdida
        de oportunidades comerciales, perjuicios derivados del no registro de la marca ni por ningún
        otro daño patrimonial o extrapatrimonial que el cliente alegue como consecuencia del
        resultado del procedimiento ante INAPI o el TDPI.
      </p>
    ),
  },
  {
    number: '5.',
    title: 'PLAZO DE ENTREGA Y CONTINGENCIAS',
    content: (
      <p className={proseP}>
        El plazo de entrega del escrito se cuenta desde la recepción íntegra de todos los
        antecedentes requeridos y la confirmación del pago. Circunstancias de fuerza mayor, caso
        fortuito, fallas en los sistemas de INAPI, interrupciones en los servicios de comunicación
        o factores técnicos ajenos a este estudio podrán afectar los plazos comprometidos, sin que
        ello genere responsabilidad de nuestra parte, salvo el deber de informar al cliente con la
        mayor brevedad posible.
      </p>
    ),
  },
  {
    number: '6.',
    title: 'ALCANCE DEL PODER DE REPRESENTACIÓN',
    content: (
      <p className={proseP}>
        El mandato que el cliente suscribe tiene por objeto la representación administrativa ante
        INAPI en los términos específicamente indicados en el documento. No habilita a este estudio
        para comprometer fondos adicionales del mandante, interponer acciones judiciales ante el
        TDPI u otros tribunales, ni realizar actuaciones que excedan el alcance del plan contratado,
        sin autorización expresa y por escrito del cliente.
      </p>
    ),
  },
  {
    number: '7.',
    title: 'INFORMACIÓN PROPORCIONADA POR EL CLIENTE',
    content: (
      <p className={proseP}>
        El cliente es el único responsable de la veracidad, exactitud y completitud de la
        información y documentos que entregue a esta plataforma. Este estudio no verificará de forma
        independiente la titularidad, origen, licitud ni autenticidad de los antecedentes aportados.
        Cualquier consecuencia derivada de información falsa, incompleta o errónea provista por el
        cliente será de exclusiva responsabilidad de este.
      </p>
    ),
  },
  {
    number: '8.',
    title: 'NO CONSTITUYE ASESORÍA LEGAL CONTINUA',
    content: (
      <p className={proseP}>
        La contratación de un plan en esta plataforma no genera una relación de asesoría jurídica
        permanente ni continua. La relación profesional queda limitada al servicio específicamente
        contratado y concluye con la entrega del escrito o con la gestión administrativa comprometida
        según el plan elegido.
      </p>
    ),
  },
  {
    number: '9.',
    title: 'JURISDICCIÓN Y LEY APLICABLE',
    content: (
      <p className={proseP}>
        Los presentes términos se rigen por las leyes de la República de Chile. Para cualquier
        controversia derivada de la prestación de los servicios, las partes se someten a la
        jurisdicción de los tribunales ordinarios de justicia con asiento en la ciudad de Santiago
        de Chile, renunciando expresamente a cualquier otro fuero o domicilio que pudiere
        corresponderles.
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

      {/* CONTENIDO — POLÍTICA DE PRIVACIDAD */}
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

      {/* DIVISOR — TÉRMINOS Y CONDICIONES */}
      <section
        className="px-4 py-16 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#1B3A6B' }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Términos y Condiciones
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/60">
            Disclaimer Legal — Alcances, Limitaciones y Exclusiones de Responsabilidad
          </p>
        </div>
      </section>

      {/* AVISO LEGAL INTRO */}
      <section className="bg-white px-4 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="rounded-lg p-6 text-sm leading-relaxed text-[#1B3A6B]"
            style={{ backgroundColor: '#F0F4FA', borderLeft: '4px solid #2557A7' }}
          >
            <p className="font-bold">AVISO LEGAL IMPORTANTE — LEA DETENIDAMENTE ANTES DE CONTRATAR</p>
            <p className={proseP}>
              El presente aviso legal establece los alcances, limitaciones y exclusiones de
              responsabilidad aplicables a todos los servicios prestados a través de esta plataforma
              en materia de propiedad industrial ante el Instituto Nacional de Propiedad Industrial
              (INAPI) y el Tribunal de Propiedad Industrial (TDPI).
            </p>
          </div>
        </div>
      </section>

      {/* CONTENIDO — TÉRMINOS Y CONDICIONES */}
      <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-10">
            {termsSections.map((section) => (
              <div key={section.number}>
                <h3 className="text-base font-bold text-[#1B3A6B]">
                  {section.number} {section.title}
                </h3>
                {section.content}
              </div>
            ))}
          </div>

          {/* Cierre legal */}
          <div
            className="mt-12 rounded-lg p-6 text-xs leading-relaxed text-gray-600"
            style={{ backgroundColor: '#F0F4FA', borderLeft: '4px solid #2557A7' }}
          >
            Este aviso legal forma parte integral de los Términos y Condiciones de uso de la
            plataforma. La contratación de cualquier plan implica la aceptación total e irrevocable
            de las limitaciones aquí descritas.
          </div>
        </div>
      </section>
    </>
  );
}
