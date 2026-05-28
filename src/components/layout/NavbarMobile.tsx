'use client';

import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { href: '/', label: 'INICIO' },
  { href: '/observaciones-de-fondo', label: 'SERVICIOS' },
  { href: '/precios', label: 'PRECIOS' },
  { href: '/guia', label: 'GUÍA' },
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
          className={`block h-0.5 w-6 transition-transform duration-200 ${open ? 'translate-y-2 rotate-45' : ''}`}
          style={{ background: 'var(--ink)' }}
        />
        <span
          className={`block h-0.5 w-6 transition-opacity duration-200 ${open ? 'opacity-0' : ''}`}
          style={{ background: 'var(--ink)' }}
        />
        <span
          className={`block h-0.5 w-6 transition-transform duration-200 ${open ? '-translate-y-2 -rotate-45' : ''}`}
          style={{ background: 'var(--ink)' }}
        />
      </button>

      {open && (
        <div
          className="absolute top-full left-0 w-full border-t shadow-lg md:hidden"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--line)' }}
        >
          <nav className="flex flex-col px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b py-3 text-xs font-semibold tracking-[0.04em] last:border-0"
                style={{ borderColor: 'var(--line)', color: 'var(--ink-soft)' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iniciar"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-[var(--r-sm)] px-4 py-2.5 text-center text-xs font-bold tracking-widest text-white"
              style={{ background: 'var(--primary)' }}
            >
              RESPONDER AHORA
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
