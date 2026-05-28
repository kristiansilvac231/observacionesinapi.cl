import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import '@/styles/global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.url),
  title: {
    default: 'Responde tu Observación de Marca INAPI en 48 Horas',
    template: `%s | ${AppConfig.name}`,
  },
  description: AppConfig.description,
  keywords: [
    'observación de fondo INAPI',
    'observación de forma INAPI',
    'responder observación marca Chile',
    'plazo observación INAPI',
    'Art. 20 Ley 19.039',
    'registro de marca Chile',
    'INAPI marca observación',
  ],
  alternates: {
    canonical: AppConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: AppConfig.locale,
    url: AppConfig.url,
    siteName: AppConfig.name,
    title: 'Responde tu Observación de Marca INAPI en 48 Horas',
    description: AppConfig.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Responde tu Observación de Marca INAPI en 48 Horas',
    description: AppConfig.description,
  },
  icons: [
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'icon', url: '/favicon.ico' },
  ],
  verification: {
    google: 'I3gXQ41u13CEe9B_ipmLCcQ42HTxiJN97iIZKBXKuX8',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: AppConfig.name,
  url: AppConfig.url,
  description: AppConfig.description,
  parentOrganization: {
    '@type': 'Organization',
    name: 'Innova-Legal',
  },
  areaServed: 'Chile',
  serviceType: 'Propiedad Industrial',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-[family-name:var(--font-inter)] text-[var(--texto-principal)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8C4Z8T0CR6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8C4Z8T0CR6');
          `}
        </Script>
      </body>
    </html>
  );
}
