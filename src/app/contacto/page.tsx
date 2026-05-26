'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from './actions';

const initialState: ContactFormState = { status: 'idle' };

const inputClass =
  'w-full rounded border border-gray-300 px-4 py-3 text-sm text-[#0F1C35] placeholder-gray-400 outline-none focus:border-[#2557A7] focus:ring-1 focus:ring-[#2557A7]';

export default function ContactoPage() {
  const [state, action, pending] = useActionState(submitContactForm, initialState);

  return (
    <section className="min-h-screen bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-xl">
        <p className="text-center text-xs font-semibold tracking-[0.3em] text-[#2557A7]">
          ── OBSERVACIONES INAPI ──
        </p>

        <h1 className="mt-5 text-center text-3xl font-extrabold text-[#0F1C35] md:text-4xl">
          Contáctenos
        </h1>

        <p className="mt-4 text-center text-sm leading-relaxed text-gray-500">
          Cuéntenos su caso y le responderemos en menos de 24 horas hábiles.
        </p>

        {state.status === 'success'
          ? (
              <div className="mt-10 rounded-lg bg-[#F0F4FA] p-8 text-center">
                <p className="text-lg font-bold text-[#0F1C35]">Mensaje enviado</p>
                <p className="mt-2 text-sm text-gray-500">
                  Nos pondremos en contacto con usted a la brevedad.
                </p>
              </div>
            )
          : (
              <form action={action} className="mt-10 flex flex-col gap-5">
                <div>
                  <label className="mb-1 block text-xs font-bold text-[#0F1C35]" htmlFor="nombre">
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
                  <label className="mb-1 block text-xs font-bold text-[#0F1C35]" htmlFor="email">
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

                <div>
                  <label className="mb-1 block text-xs font-bold text-[#0F1C35]" htmlFor="telefono">
                    Teléfono
                    {' '}
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
                  <label className="mb-1 block text-xs font-bold text-[#0F1C35]" htmlFor="mensaje">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    placeholder="Describa brevemente su caso o consulta…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {state.status === 'error' && (
                  <p className="text-xs text-red-500">
                    Complete todos los campos obligatorios.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={pending}
                  className="rounded py-3 text-xs font-bold tracking-widest text-white transition-colors hover:bg-azul-primario disabled:opacity-60"
                  style={{ backgroundColor: '#2557A7' }}
                >
                  {pending ? 'ENVIANDO…' : 'ENVIAR MENSAJE'}
                </button>
              </form>
            )}
      </div>
    </section>
  );
}
