import Link from 'next/link';
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
    <footer className="bg-azul-primario text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Columna 1 — Identidad */}
          <div>
            <p className="text-lg font-bold">{AppConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Responde tu observación de marca ante INAPI con el respaldo de abogados
              especializados en propiedad industrial.
            </p>
          </div>

          {/* Columna 2 — Links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Servicios
            </p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-white/50">
              Contacto
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/contacto"
                  className="text-sm text-white/80 hover:text-white"
                >
                  Formulario de contacto
                </Link>
              </li>
              <li className="text-sm text-white/60">Somos parte del holding Innova-Legal</li>
            </ul>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Observacionesinapi.cl — Todos los derechos reservados
        </div>
      </div>
    </footer>
  );
}
