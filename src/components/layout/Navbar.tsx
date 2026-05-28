import Link from 'next/link';
import { LogoMono } from '@/components/LogoMono';
import { NavbarScrollWrapper } from './NavbarScrollWrapper';
import { NavbarMobile } from './NavbarMobile';

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/observaciones-de-fondo', label: 'SERVICIOS' },
  { href: '/precios', label: 'PRECIOS' },
  { href: '/guia', label: 'GUÍA' },
  { href: '/como-funciona', label: '¿CÓMO FUNCIONA?' },
];

export function Navbar() {
  return (
    <NavbarScrollWrapper>
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Marca */}
        <Link href="/" className="flex items-center gap-3" aria-label="Observacionesinapi.cl inicio">
          <LogoMono />
          <span
            className="text-[1.12rem] leading-none text-ink"
            style={{ fontFamily: 'var(--font-hanken)', fontWeight: 300, letterSpacing: '-0.01em' }}
          >
            Observacionesinapi.cl
          </span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-[var(--r-sm)] px-[14px] py-[9px] text-[0.82rem] font-semibold tracking-[0.04em] text-ink-soft transition-colors duration-200 hover:bg-primary-tint hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/iniciar"
            className="ml-2 rounded-[var(--r-sm)] px-5 py-[11px] text-[0.82rem] font-bold tracking-[0.03em] text-white transition-[transform,background] duration-200 hover:-translate-y-px"
            style={{
              background: 'var(--primary)',
              boxShadow: '0 10px 24px -14px var(--primary)',
            }}
            onMouseEnter={undefined}
          >
            RESPONDER AHORA
          </Link>
        </nav>

        {/* Hamburger mobile */}
        <NavbarMobile />
      </div>
    </NavbarScrollWrapper>
  );
}
