import Link from 'next/link';
import { NavbarMobile } from './NavbarMobile';

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/observaciones-de-fondo', label: 'SERVICIOS' },
  { href: '/guia', label: 'GUÍA' },
  { href: '/como-funciona', label: '¿CÓMO FUNCIONA?' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--borde)] bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded bg-azul-primario text-sm font-bold text-white">
            OI
          </span>
          <span className="text-base font-bold text-azul-primario">
            Observacionesinapi.cl
          </span>
        </Link>

        {/* Links centro — desktop */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-wide text-[var(--texto-secundario)] hover:text-azul-primario"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger — mobile */}
        <NavbarMobile />
      </div>
    </header>
  );
}
