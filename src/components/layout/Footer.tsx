import Link from 'next/link';
import { LogoMono } from '@/components/LogoMono';
import { AppConfig } from '@/utils/AppConfig';

const serviceLinks = [
  { href: '/observaciones-de-fondo', label: 'Observación de Fondo' },
  { href: '/observaciones-de-forma', label: 'Observación de Forma' },
  { href: '/apelacion-de-marca', label: 'Apelación' },
  { href: '/como-funciona', label: '¿Cómo funciona?' },
  { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
];

export function Footer() {
  return (
    <footer style={{ background: 'var(--footer-bg)', color: 'var(--footer-ink)' }}>
      <div className="mx-auto max-w-[1180px] px-4 pt-16 pb-8 sm:px-6 lg:px-8">

        {/* Grid 3 columnas */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1fr]">

          {/* Col 1 — Marca */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Observacionesinapi.cl inicio">
              <LogoMono ringStroke="var(--footer-bg)" />
              <span
                className="text-[1.12rem] leading-none"
                style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300, color: 'var(--footer-ink)', letterSpacing: '-0.01em' }}
              >
                Observacionesinapi.cl
              </span>
            </Link>
            <p
              className="mt-4 text-[0.95rem] leading-relaxed"
              style={{ color: 'var(--footer-faint)', maxWidth: '38ch' }}
            >
              Responde tu observación de marca ante INAPI con el respaldo de abogados especializados en propiedad industrial.
            </p>
          </div>

          {/* Col 2 — Servicios */}
          <div>
            <h4
              className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.14em]"
              style={{ color: 'var(--footer-faint)' }}
            >
              Servicios
            </h4>
            <ul className="flex flex-col gap-[11px]">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[0.95rem] opacity-90 transition-colors duration-200 hover:opacity-100"
                    style={{ color: 'var(--footer-ink)' }}
                    onMouseEnter={undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div>
            <h4
              className="mb-4 text-[0.78rem] font-bold uppercase tracking-[0.14em]"
              style={{ color: 'var(--footer-faint)' }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-[11px]">
              <li>
                <Link
                  href="/contacto"
                  className="text-[0.95rem] opacity-90 transition-colors duration-200 hover:opacity-100"
                  style={{ color: 'var(--footer-ink)' }}
                >
                  Formulario de contacto
                </Link>
              </li>
              <li
                className="text-[0.95rem]"
                style={{ color: 'var(--footer-faint)' }}
              >
                Somos parte del holding Innova-Legal
              </li>
            </ul>
          </div>
        </div>

        {/* Franja inferior */}
        <div
          className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t pt-6 text-[0.85rem]"
          style={{ borderColor: 'color-mix(in oklch, var(--footer-faint) 30%, transparent)', color: 'var(--footer-faint)' }}
        >
          <span>© {new Date().getFullYear()} {AppConfig.name} — Todos los derechos reservados</span>
          <Link
            href="/privacidad"
            className="transition-colors duration-200 hover:text-accent"
            style={{ color: 'var(--footer-faint)' }}
          >
            Política de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
