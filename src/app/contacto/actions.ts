'use server';

export type ContactFormState = {
  status: 'idle' | 'success' | 'error';
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const nombre = formData.get('nombre');
  const email = formData.get('email');
  const mensaje = formData.get('mensaje');

  if (!nombre || !email || !mensaje) {
    return { status: 'error' };
  }

  // Connect email service here (e.g. Resend, Nodemailer)
  return { status: 'success' };
}
