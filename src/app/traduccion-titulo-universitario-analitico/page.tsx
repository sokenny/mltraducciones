import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TitulosAnaliticoContent from '@/components/pages/TitulosAnalitico';

export const metadata: Metadata = {
  title:
    'Traducción pública de título universitario y certificado analítico (inglés ↔ español)',
  description:
    'Traducción pública de títulos, diplomas, certificados analíticos y programas. EN↔ES. Legalización CTPCBA a pedido. Cotización por foja. No se homologa el título.',
  alternates: {
    canonical: '/traduccion-titulo-universitario-analitico/',
    languages: {
      en: '/traduccion-titulo-universitario-analitico',
      es: '/traduccion-titulo-universitario-analitico',
    },
  },
  openGraph: {
    title:
      'Traducción pública de título universitario y certificado analítico (inglés ↔ español)',
    description:
      'Pack académico: título, diploma, analítico y programas. EN↔ES. Legalización CTPCBA a pedido. Cotiza por foja.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-titulo-universitario-analitico/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <TitulosAnaliticoContent />
      </main>
      <Footer />
    </>
  );
}

