'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/observaciones-de-fondo', label: 'SERVICIOS' },
  { href: '/guia/articulo-20-f', label: 'GUÍA' },
  { href: '/como-funciona', label: '¿CÓMO FUNCIONA?' },
];

export function NavbarMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center gap-1.5 p-2 md:hidden"
      >
        <span
          className={`block h-0.5 w-6 bg-azul-primario transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
        />
        <span
          className={`block h-0.5 w-6 bg-azul-primario transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
        />
        <span
          className={`block h-0.5 w-6 bg-azul-primario transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 w-full border-t border-[var(--borde)] bg-white shadow-lg md:hidden">
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--borde)] py-3 text-xs font-semibold tracking-wide text-[var(--texto-secundario)] last:border-0 hover:text-azul-primario"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setOpen(false)}
              className="mt-3 rounded bg-azul-secundario px-4 py-2.5 text-center text-xs font-bold tracking-widest text-white"
            >
              CONTÁCTENOS
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
