import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import DivorcioContent from '@/components/pages/Divorcio';

export const metadata: Metadata = {
  title:
    'Traducción pública de sentencia de divorcio — inglés ↔ español | Buenos Aires',
  description:
    'Rematrimonio, ciudadanía/inmigración y Registro Civil. Sentencia de divorcio o acta con anotación marginal: orientación práctica, apostilla del ORIGINAL (TAD), traducción pública y legalización CTPCBA opcional. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-sentencia-divorcio/',
    languages: {
      en: '/traduccion-sentencia-divorcio',
      es: '/traduccion-sentencia-divorcio',
    },
  },
  openGraph: {
    title:
      'Traducción pública de sentencia de divorcio — EN↔ES | Buenos Aires',
    description:
      'Para rematrimonio, inmigración/ciudadanía y actualizaciones registrales. Orden del trámite y CTPCBA a pedido.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-sentencia-divorcio/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <DivorcioContent />
      </main>
      <Footer />
    </>
  );
}

