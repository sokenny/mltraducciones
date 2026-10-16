import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import EscriturasActasNotarialesContent from '@/components/pages/EscriturasActasNotariales';

export const metadata: Metadata = {
  title:
    'Traducción pública de escrituras y actas notariales (inglés ↔ español)',
  description:
    'Escrituras de compraventa, hipotecas y actas notariales EN↔ES por traductora pública matriculada. Orden: apostilla del ORIGINAL por autoridad competente; traducción EN↔ES; legalización CTPCBA opcional.',
  alternates: {
    canonical: '/traduccion-escrituras-actas-notariales/',
    languages: {
      en: '/traduccion-escrituras-actas-notariales',
      es: '/traduccion-escrituras-actas-notariales',
    },
  },
  openGraph: {
    title: 'Traducción pública de escrituras y actas notariales (inglés ↔ español)',
    description:
      'Complemento de poderes/estatutos y contratos. Apostilla por autoridad competente; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-escrituras-actas-notariales/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <EscriturasActasNotarialesContent />
      </main>
      <Footer />
    </>
  );
}

