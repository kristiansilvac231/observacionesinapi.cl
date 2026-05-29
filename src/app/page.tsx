import Link from 'next/link';
import { Reveal } from '@/components/Reveal';

/* ── Datos de tarjetas (sin cambios de contenido) ── */
type PricePlan = {
  label: string;
  price: string;
  detail?: string;
  pre?: string;
};

type ServiceCard = {
  number: string;
  title: string;
  description: string;
  plan1: PricePlan;
  plan2?: PricePlan;
  ctaHref: string;
  ctaLabel: string;
  ctaGhost?: boolean;
};

const cards: ServiceCard[] = [
  {
    number: '1',
    title: 'Observaciones de Fondo',
    description: 'Para objeciones sustantivas de registrabilidad, similitud o distintividad.',
    plan1: { label: 'Solo Escrito', price: '$69.990', detail: 'redactamos, tú presentas' },
    plan2: { label: 'Representación Completa', price: '$129.990' },
    ctaHref: '/iniciar?tipo=fondo',
    ctaLabel: 'Quiero responder Fondo',
  },
  {
    number: '2',
    title: 'Observaciones de Forma',
    description: 'Para correcciones formales, clasificación, documentos o datos de solicitud.',
    plan1: { label: 'Solo Corrección', price: '$39.990', detail: 'corregimos, tú presentas' },
    plan2: { label: 'Representación Completa', price: '$89.990' },
    ctaHref: '/iniciar?tipo=forma',
    ctaLabel: 'Quiero corregir Forma',
  },
  {
    number: '3',
    title: 'Apelación de Marca',
    description: 'Para rechazos o resoluciones que requieren estrategia de apelación.',
    plan1: {
      label: 'Representación ante el TDPI',
      price: 'Desde $299.990',
      pre: 'según complejidad del caso',
      detail: 'Te representamos en todo el proceso de Apelación.',
    },
    ctaHref: '/apelacion-de-marca',
    ctaLabel: 'Solicitar cotización',
    ctaGhost: true,
  },
];

/* ── Datos banda de respaldo ── */
const stats = [
  { num: '15 años', label: 'de experiencia en propiedad industrial' },
  { num: '+500', label: 'clientes atendidos' },
  { num: '48 hrs', label: 'entrega garantizada' },
];

const testimonials = [
  {
    quote: 'Recibí una observación de fondo y no sabía por dónde partir. En 48 horas tenían el escrito listo y mi marca quedó registrada sin problemas.',
    delay: 1 as const,
  },
  {
    quote: 'Pensé que perdería el nombre de mi empresa. El equipo respondió la observación con un argumento sólido y ganamos. Totalmente recomendados.',
    delay: 2 as const,
  },
  {
    quote: 'Claros con los plazos y con el precio. Me explicaron todo sin tecnicismos y resolvieron la observación de forma muy rápido. Volvería a confiar en ellos.',
    delay: 3 as const,
  },
];

/* ── Ícono estrella ── */
function Star() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
      <path d="M12 2l2.9 6.1 6.6.9-4.8 4.6 1.2 6.6L12 17.7 6.1 20.8l1.2-6.6L2.5 9.6l6.6-.9z" />
    </svg>
  );
}

/* ── Ícono reloj ── */
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="19" height="19" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

/* ── Ícono flecha ── */
function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section
        className="hero-bg relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ padding: 'clamp(72px, 12vh, 140px) 1rem clamp(56px, 9vh, 96px)' }}
      >
        <div className="relative mx-auto max-w-[1180px]" style={{ maxWidth: '920px' }}>

          {/* Eyebrow */}
          <Reveal>
            <span
              className="inline-flex items-center gap-[10px] rounded-[100px] border px-4 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.14em]"
              style={{
                background: 'var(--primary-tint)',
                borderColor: 'var(--line)',
                color: 'var(--ink-soft)',
                marginBottom: '28px',
                display: 'inline-flex',
              }}
            >
              <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
                <span
                  className="pulse-ring absolute inset-0 rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
                <span className="relative h-2 w-2 rounded-full" style={{ background: 'var(--accent)' }} />
              </span>
              Tienes una observación de INAPI
            </span>
          </Reveal>

          {/* H1 */}
          <Reveal delay={1}>
            <h1
              className="font-display max-w-[16ch]"
              style={{
                fontSize: 'clamp(2.7rem, 6.2vw, 5.1rem)',
                fontWeight: 800,
                letterSpacing: '-0.035em',
                lineHeight: 1.05,
                color: 'var(--ink)',
              }}
            >
              Nosotros la respondemos por ti en{' '}
              <span
                className="relative whitespace-nowrap"
                style={{ color: 'var(--primary)' }}
              >
                48 horas
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute rounded-[4px]"
                  style={{
                    left: '-2%',
                    right: '-2%',
                    bottom: '0.06em',
                    height: '0.34em',
                    zIndex: -1,
                    background: 'color-mix(in oklch, var(--accent) 55%, transparent)',
                    transform: 'rotate(-0.6deg)',
                  }}
                />
              </span>
            </h1>
          </Reveal>

          {/* Lede */}
          <Reveal delay={2}>
            <p
              className="mt-6"
              style={{
                fontSize: 'clamp(1.05rem, 1.6vw, 1.28rem)',
                color: 'var(--ink-soft)',
                maxWidth: '48ch',
                lineHeight: 1.55,
              }}
            >
              Abogados especializados en propiedad industrial redactan y presentan tu respuesta — sin burocracia, sin perder tiempo.
            </p>
          </Reveal>

          {/* Pill de plazo */}
          <Reveal delay={2}>
            <div
              className="mt-[30px] inline-flex items-center gap-3 rounded-[100px] border px-5 py-[13px] text-[0.98rem] font-semibold"
              style={{
                background: 'var(--alert-tint)',
                borderColor: 'color-mix(in oklch, var(--alert) 35%, transparent)',
                color: 'var(--alert)',
              }}
            >
              <ClockIcon />
              <span>Tienes <strong style={{ fontWeight: 700 }}>30 días hábiles</strong> para responder. No los pierdas.</span>
            </div>
          </Reveal>

          {/* Botones */}
          <Reveal delay={3}>
            <div className="mt-[34px] flex flex-wrap gap-[14px]">
              <Link
                href="/iniciar"
                className="inline-flex items-center gap-[10px] rounded-[var(--r-sm)] px-7 py-[15px] text-[0.96rem] font-bold transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'var(--accent)',
                  color: 'var(--on-accent)',
                  boxShadow: '0 14px 30px -14px var(--accent-deep)',
                }}
              >
                Responder mi observación
                <ArrowRight />
              </Link>
              <Link
                href="/precios"
                className="inline-flex items-center gap-[10px] rounded-[var(--r-sm)] border px-7 py-[15px] text-[0.96rem] font-bold transition-[transform,border-color,background] duration-200 hover:-translate-y-0.5 hover:border-primary hover:bg-primary-tint"
                style={{
                  background: 'transparent',
                  color: 'var(--primary)',
                  borderColor: 'var(--line)',
                }}
              >
                Ver precios
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICIOS
      ══════════════════════════════════════ */}
      <section
        id="servicios"
        className="px-4 sm:px-6 lg:px-8"
        style={{ padding: 'clamp(48px,7vh,86px) 1rem clamp(64px,9vh,110px)' }}
      >
        <div className="mx-auto max-w-[1180px]">

          {/* Encabezado */}
          <Reveal className="mb-[46px]" style={{ maxWidth: '640px' }}>
            <p
              className="text-[0.8rem] font-bold uppercase tracking-[0.16em]"
              style={{ color: 'var(--accent-deep)' }}
            >
              Servicios
            </p>
            <h2
              className="font-display mt-3"
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
              }}
            >
              Elige cómo respondemos por ti
            </h2>
            <p className="mt-[14px] text-[1.05rem]" style={{ color: 'var(--ink-soft)' }}>
              Tres caminos según el tipo de observación o resolución que recibiste de INAPI.
            </p>
          </Reveal>

          {/* Grid tarjetas */}
          <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
            {cards.map((card, i) => (
              <Reveal key={card.number} delay={i > 0 ? (i as 1 | 2) : undefined}>
                <article
                  className="service-card flex h-full flex-col rounded-[var(--r)] border p-[30px_28px_28px]"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: 'var(--line)',
                    boxShadow: 'var(--shadow)',
                  }}
                >
                  {/* Top */}
                  <div className="mb-[18px] flex items-center gap-[14px]">
                    <span
                      className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-[12px] border text-[1.18rem] font-bold"
                      style={{
                        fontFamily: 'var(--font-bricolage)',
                        color: 'var(--primary)',
                        background: 'var(--primary-tint)',
                        borderColor: 'color-mix(in oklch, var(--primary) 22%, transparent)',
                      }}
                    >
                      {card.number}
                    </span>
                    <h3
                      className="font-display text-[1.18rem] leading-[1.15]"
                      style={{ letterSpacing: '-0.01em', color: 'var(--ink)' }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-[0.97rem] leading-relaxed" style={{ color: 'var(--ink-soft)', minHeight: '3.2em' }}>
                    {card.description}
                  </p>

                  {/* Divisor */}
                  <div className="my-[22px] h-px" style={{ background: 'var(--line)' }} />

                  {/* Plan 1 */}
                  <div>
                    <p className="text-[0.78rem] font-bold uppercase tracking-[0.07em]" style={{ color: 'var(--ink-faint)' }}>
                      {card.plan1.label}
                    </p>
                    <div className="mt-1 flex items-baseline gap-2">
                      <span
                        className="font-display text-[1.7rem] font-bold leading-none"
                        style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}
                      >
                        {card.plan1.price}
                      </span>
                      <span className="text-[0.82rem] font-semibold" style={{ color: 'var(--ink-faint)' }}>CLP</span>
                    </div>
                    {card.plan1.pre && (
                      <p className="mt-[2px] text-[0.86rem] font-semibold" style={{ color: 'var(--accent-deep)' }}>
                        {card.plan1.pre}
                      </p>
                    )}
                    {card.plan1.detail && (
                      <p className="mt-[3px] text-[0.86rem]" style={{ color: 'var(--ink-faint)' }}>
                        {card.plan1.detail}
                      </p>
                    )}
                  </div>

                  {/* Plan 2 */}
                  {card.plan2 && (
                    <div className="mt-[18px]">
                      <p className="text-[0.78rem] font-bold uppercase tracking-[0.07em]" style={{ color: 'var(--ink-faint)' }}>
                        {card.plan2.label}
                      </p>
                      <div className="mt-1 flex items-baseline gap-2">
                        <span
                          className="font-display text-[1.7rem] font-bold leading-none"
                          style={{ letterSpacing: '-0.02em', color: 'var(--ink)' }}
                        >
                          {card.plan2.price}
                        </span>
                        <span className="text-[0.82rem] font-semibold" style={{ color: 'var(--ink-faint)' }}>CLP</span>
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-auto pt-[26px]">
                    <Link
                      href={card.ctaHref}
                      className={`block w-full rounded-[var(--r-sm)] py-[13px] text-center text-[0.96rem] font-bold transition-[transform,box-shadow,border-color,background] duration-200 hover:-translate-y-0.5 ${
                        card.ctaGhost ? 'border' : ''
                      }`}
                      style={
                        card.ctaGhost
                          ? {
                              background: 'transparent',
                              color: 'var(--primary)',
                              borderColor: 'var(--line)',
                            }
                          : {
                              background: 'var(--accent)',
                              color: 'var(--on-accent)',
                              boxShadow: '0 10px 24px -12px var(--accent-deep)',
                            }
                      }
                    >
                      {card.ctaLabel}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          BANDA DE RESPALDO (stats + testimonios)
      ══════════════════════════════════════ */}
      <section
        className="trust-bg relative overflow-hidden px-4 sm:px-6 lg:px-8"
        style={{ padding: 'clamp(56px,8vh,90px) 1rem' }}
      >
        <div className="relative mx-auto max-w-[1180px]">

          {/* Encabezado */}
          <Reveal className="mb-8">
            <p className="text-[0.8rem] font-bold uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>
              Respaldo
            </p>
            <h2
              className="font-display mt-3 text-white"
              style={{
                fontSize: 'clamp(1.9rem, 3.4vw, 2.7rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
              }}
            >
              Resultados que protegen tu marca
            </h2>
          </Reveal>

          {/* Stats */}
          <Reveal delay={1}>
            <div
              className="grid grid-cols-1 overflow-hidden rounded-[var(--r)] lg:grid-cols-3"
              style={{
                border: '1px solid color-mix(in oklch, #fff 16%, transparent)',
                background: 'color-mix(in oklch, #fff 5%, transparent)',
              }}
            >
              {stats.map((stat, i) => (
                <div
                  key={stat.num}
                  className={`px-7 py-[34px] text-center${i > 0 ? ' border-t lg:border-t-0 lg:border-l' : ''}`}
                  style={{ borderColor: 'color-mix(in oklch, #fff 14%, transparent)' }}
                >
                  <span
                    className="font-display block font-extrabold leading-none"
                    style={{
                      fontSize: 'clamp(2.4rem, 4.6vw, 3.4rem)',
                      letterSpacing: '-0.03em',
                      color: 'var(--accent)',
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    className="mx-auto mt-3 block max-w-[24ch] text-[0.95rem]"
                    style={{ color: 'color-mix(in oklch, #fff 78%, transparent)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Testimonios */}
          <div className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={t.delay}>
                <figure
                  className="trust-quote flex h-full flex-col gap-[14px] rounded-[var(--r)] p-[26px_24px]"
                  style={{
                    background: 'color-mix(in oklch, #fff 7%, transparent)',
                    border: '1px solid color-mix(in oklch, #fff 14%, transparent)',
                  }}
                >
                  {/* Nota de opinión */}
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.1em]" style={{ color: 'color-mix(in oklch, #fff 50%, transparent)' }}>
                    Opinión de cliente
                  </p>

                  {/* Estrellas */}
                  <div className="flex gap-[3px]" style={{ color: 'var(--accent)' }} aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, j) => <Star key={j} />)}
                  </div>

                  {/* Cita */}
                  <p className="flex-1 text-[1rem] leading-[1.55]" style={{ color: 'color-mix(in oklch, #fff 92%, transparent)' }}>
                    {t.quote}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
