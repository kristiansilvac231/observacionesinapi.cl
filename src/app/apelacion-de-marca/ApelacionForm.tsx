'use client';

import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/PLACEHOLDER';

const inputClass =
  'w-full rounded border border-gray-300 px-4 py-3 text-sm text-[#0F1C35] placeholder-gray-400 outline-none focus:border-[#2557A7] focus:ring-1 focus:ring-[#2557A7]';

const labelClass = 'mb-1 block text-xs font-bold text-[#1B3A6B]';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function ApelacionForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    });

    setStatus(res.ok ? 'success' : 'error');
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-[#F0F4FA] p-10 text-center">
        <p className="text-xl font-bold text-[#1B3A6B]">Evaluación recibida</p>
        <p className="mt-2 text-sm text-gray-500">
          Revisaremos tu caso y te responderemos en menos de 24 horas.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="nombre">
            Nombre completo
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            placeholder="Ej. María González"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="correo@ejemplo.cl"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="telefono">
            Teléfono{' '}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <input
            id="telefono"
            name="telefono"
            type="tel"
            placeholder="+56 9 1234 5678"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="solicitud">
            Número de solicitud INAPI
          </label>
          <input
            id="solicitud"
            name="solicitud"
            type="text"
            required
            placeholder="Ej. 1234567-8"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="causal">
          ¿Cuál fue la causal de rechazo?
        </label>
        <textarea
          id="causal"
          name="causal"
          rows={4}
          required
          placeholder="Describe brevemente la observación o causal indicada por INAPI…"
          className={`${inputClass} resize-none`}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="uso">
          ¿Tienes marca en uso en el mercado?
        </label>
        <select id="uso" name="uso" required className={inputClass}>
          <option value="">Selecciona una opción</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
          <option value="en-desarrollo">En desarrollo</option>
        </select>
      </div>

      {status === 'error' && (
        <p className="text-xs text-red-500">
          Ocurrió un error al enviar. Inténtalo nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded py-3 text-sm font-bold tracking-widest text-white transition-colors hover:opacity-90 disabled:opacity-60"
        style={{ backgroundColor: '#2557A7' }}
      >
        {status === 'submitting' ? 'ENVIANDO…' : 'ENVIAR EVALUACIÓN →'}
      </button>

      <p className="text-center text-xs text-gray-400">
        Sin costo. Sin compromiso. Confidencialidad garantizada.
      </p>
    </form>
  );
}
