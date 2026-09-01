import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import AntecedentesPenalesContent from '@/components/pages/AntecedentesPenales';

export const metadata: Metadata = {
  title:
    'Traducción pública de certificado de antecedentes penales (RNR) — inglés ↔ español',
  description:
    'Certificado de antecedentes penales (RNR) para visas, residencia, ciudadanía y trabajo. Orden del trámite: apostilla del ORIGINAL (Cancillería TAD), traducción pública y, si corresponde, legalización CTPCBA de firma y sello. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-antecedentes-penales/',
    languages: {
      en: '/traduccion-antecedentes-penales',
      es: '/traduccion-antecedentes-penales',
    },
  },
  openGraph: {
    title:
      'Traducción pública de certificado de antecedentes penales (RNR) — EN↔ES',
    description:
      'Visas, residencia, ciudadanía y trabajo. Apostilla del ORIGINAL (TAD), traducción pública y legalización CTPCBA a pedido.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-antecedentes-penales/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <AntecedentesPenalesContent />
      </main>
      <Footer />
    </>
  );
}

