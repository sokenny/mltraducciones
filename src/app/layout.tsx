import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'María E. Lo Bianco | Sworn Translator EN↔ES | Traductora Pública',
  description: 'Professional sworn translation services English-Spanish. Certified by CTPCBA. Legal, corporate, academic and personal document translation. | Servicios de traducción pública Inglés-Español. Matriculada CTPCBA.',
  keywords: 'sworn translator, traductora pública, translation services, servicios de traducción, English Spanish, inglés español, CTPCBA, Buenos Aires, Argentina, legal translation, traducción legal',
  authors: [{ name: 'María E. Lo Bianco' }],
  openGraph: {
    title: 'María E. Lo Bianco | Sworn Translator',
    description: 'Professional sworn translation services English-Spanish. Certified by CTPCBA.',
    locale: 'es_AR',
    alternateLocale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    languages: {
      'en': '/',
      'es': '/',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${playfair.variable}`}>
      <head>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KDQEHHVPYJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KDQEHHVPYJ');
            `,
          }}
        />
        {/* End Google tag */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#FFE500" />
      </head>
      <body className="font-sans bg-white text-gray-900">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
