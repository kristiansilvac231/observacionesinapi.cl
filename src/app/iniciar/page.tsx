import type { Metadata } from 'next';
import { Suspense } from 'react';
import { IniciarForm } from './IniciarForm';

export const metadata: Metadata = {
  title: 'Iniciar — Responde tu Observación INAPI | Observacionesinapi.cl',
  robots: { index: false, follow: false },
};

export default function IniciarPage() {
  return (
    <section className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Suspense fallback={<p className="text-center text-sm text-gray-400">Cargando…</p>}>
          <IniciarForm />
        </Suspense>
      </div>
    </section>
  );
}
