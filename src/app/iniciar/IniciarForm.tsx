'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvzrwqg';

type TipoKey = 'fondo' | 'forma';
type PlanKey = 'escrito' | 'correccion' | 'representacion';
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const tipoData: Record<TipoKey, {
  label: string;
  description: string;
  plans: Array<{ key: PlanKey; name: string; price: string }>;
}> = {
  fondo: {
    label: 'Observación de Fondo',
    description: 'Semejanza, distintividad, Art. 20 f), h) o e)',
    plans: [
      { key: 'escrito', name: 'Solo Escrito', price: '$69.990 CLP' },
      { key: 'representacion', name: 'Representación Completa', price: '$129.990 CLP' },
    ],
  },
  forma: {
    label: 'Observación de Forma',
    description: 'Poder, clasificación, documentos faltantes',
    plans: [
      { key: 'correccion', name: 'Solo Corrección', price: '$39.990 CLP' },
      { key: 'representacion', name: 'Representación Completa', price: '$89.990 CLP' },
    ],
  },
};

function isValidTipo(v: string | null): v is TipoKey {
  return v === 'fondo' || v === 'forma';
}

function isValidPlan(v: string | null): v is PlanKey {
  return v === 'escrito' || v === 'correccion' || v === 'representacion';
}

const inputClass =
  'w-full rounded border border-gray-300 px-4 py-3 text-sm text-[#0F1C35] placeholder-gray-400 outline-none focus:border-[#2557A7] focus:ring-1 focus:ring-[#2557A7]';

const labelClass = 'mb-1 block text-xs font-bold text-[#1B3A6B]';

const garantias = [
  'Respuesta en 48 horas hábiles',
  'Confidencialidad garantizada',
  'Te contactamos para confirmar el pago',
];

export function IniciarForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<FormStatus>('idle');
  const [successEmail, setSuccessEmail] = useState('');

  const rawTipo = searchParams.get('tipo');
  const rawPlan = searchParams.get('plan');
  const tipo: TipoKey | null = isValidTipo(rawTipo) ? rawTipo : null;
  const plan: PlanKey | null = isValidPlan(rawPlan) ? rawPlan : null;

  function goTo(params: Record<string, string>) {
    router.push(`/iniciar?${new URLSearchParams(params).toString()}`);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    const email = String(formData.get('email') ?? '');
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      setSuccessEmail(email);
      setStatus('success');
    } else {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg bg-[#F0F4FA] p-10 text-center">
        <p className="text-2xl font-extrabold text-[#1B3A6B]">¡Recibimos tu observación!</p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          Te escribiremos a{' '}
          <strong className="text-[#2557A7]">{successEmail}</strong>{' '}
          en las próximas horas con los datos de pago y la confirmación.
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Plazo de entrega: 48 horas hábiles desde tu pago.
        </p>
      </div>
    );
  }

  // PASO 1 — sin tipo
  if (!tipo) {
    return (
      <>
        <h1 className="text-3xl font-extrabold text-[#1B3A6B]">
          ¿Qué tipo de observación tienes?
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {(['fondo', 'forma'] as TipoKey[]).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => goTo({ tipo: t })}
              className="rounded-lg p-8 text-left transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#F0F4FA', borderTop: '3px solid #2557A7' }}
            >
              <p className="text-xs font-bold tracking-widest text-[#2557A7]">
                {tipoData[t].label.toUpperCase()}
              </p>
              <p className="mt-2 text-lg font-bold text-[#1B3A6B]">{tipoData[t].label}</p>
              <p className="mt-2 text-sm text-gray-500">{tipoData[t].description}</p>
              <p className="mt-4 text-xs font-bold text-[#2557A7]">Seleccionar →</p>
            </button>
          ))}
        </div>
      </>
    );
  }

  const tipoInfo = tipoData[tipo];

  // PASO 2 — sin plan
  if (!plan) {
    return (
      <>
        <button
          type="button"
          onClick={() => router.push('/iniciar')}
          className="mb-6 text-xs text-gray-400 hover:text-[#2557A7]"
        >
          ← Volver
        </button>
        <h1 className="text-3xl font-extrabold text-[#1B3A6B]">{tipoInfo.label}</h1>
        <p className="mt-2 text-sm text-gray-500">
          Elige el plan que mejor se adapta a tu caso.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tipoInfo.plans.map((p) => (
            <button
              key={p.key}
              type="button"
              onClick={() => goTo({ tipo, plan: p.key })}
              className="flex flex-col rounded-lg p-8 text-left transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#1B3A6B', borderTop: '3px solid #2557A7' }}
            >
              <p className="text-xs font-bold tracking-widest text-[#93B8E8]">
                {p.name.toUpperCase()}
              </p>
              <p className="mt-3 text-2xl font-extrabold text-white">{p.price}</p>
              <p className="mt-4 text-xs font-bold text-[#93B8E8]">Elegir este plan →</p>
            </button>
          ))}
        </div>
      </>
    );
  }

  // PASO 3 — formulario completo
  const planInfo = tipoInfo.plans.find((p) => p.key === plan);
  const planLabel = planInfo?.name ?? '';
  const precioLabel = planInfo?.price ?? '';

  return (
    <>
      <button
        type="button"
        onClick={() => goTo({ tipo })}
        className="mb-6 text-xs text-gray-400 hover:text-[#2557A7]"
      >
        ← Volver
      </button>

      <div
        className="mb-8 rounded-lg p-4 text-sm font-semibold text-[#1B3A6B]"
        style={{ backgroundColor: '#F0F4FA', borderLeft: '4px solid #2557A7' }}
      >
        {tipoInfo.label} — {planLabel} —{' '}
        <span className="font-extrabold">{precioLabel}</span>
      </div>

      <h1 className="text-3xl font-extrabold text-[#1B3A6B]">Completa tu solicitud</h1>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <input type="hidden" name="tipo" value={tipoInfo.label} />
        <input type="hidden" name="plan" value={planLabel} />
        <input type="hidden" name="precio" value={precioLabel} />

        <div>
          <label className={labelClass} htmlFor="nombre">Nombre completo</label>
          <input
            id="nombre" name="nombre" type="text" required
            placeholder="Ej. María González" className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass} htmlFor="email">Correo electrónico</label>
            <input
              id="email" name="email" type="email" required
              placeholder="correo@ejemplo.cl" className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass} htmlFor="telefono">
              Teléfono{' '}
              <span className="font-normal text-gray-400">(opcional)</span>
            </label>
            <input
              id="telefono" name="telefono" type="tel"
              placeholder="+56 9 1234 5678" className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className={labelClass} htmlFor="solicitud">Número de solicitud INAPI</label>
          <input
            id="solicitud" name="solicitud" type="text" required
            placeholder="Ej: 1234567-8" className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass} htmlFor="comentarios">
            Comentarios adicionales{' '}
            <span className="font-normal text-gray-400">(opcional)</span>
          </label>
          <textarea
            id="comentarios" name="comentarios" rows={4}
            placeholder="Cuéntanos el contexto de tu marca, nombre de la marca solicitada, cualquier detalle relevante..."
            className={`${inputClass} resize-none`}
          />
          <p className="mt-2 text-xs text-gray-400">
            Una vez que recibas el mail con las instrucciones, nos podrás enviar el PDF con la
            observación, o bien nosotros la buscamos por ti.
          </p>
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
          {status === 'submitting' ? 'ENVIANDO…' : 'ENVIAR MI OBSERVACIÓN →'}
        </button>

        <ul className="flex flex-col gap-1">
          {garantias.map((item) => (
            <li key={item} className="flex items-center gap-2 text-xs text-gray-500">
              <span className="font-bold text-[#2557A7]">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </form>
    </>
  );
}
