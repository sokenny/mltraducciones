import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import ContratosContent from '@/components/pages/Contratos';

export const metadata: Metadata = {
  title: 'Traducción pública de contratos (inglés ↔ español)',
  description:
    'Contratos de alquiler, servicios, distribución y compraventa EN↔ES por traductora pública matriculada. Orden del trámite cuando circulan en el exterior y legalización CTPCBA a pedido.',
  alternates: {
    canonical: '/traduccion-contratos/',
    languages: {
      en: '/traduccion-contratos',
      es: '/traduccion-contratos',
    },
  },
  openGraph: {
    title: 'Traducción pública de contratos (inglés ↔ español)',
    description:
      'Jurídicos y comerciales. Apostilla del ORIGINAL por autoridad competente; traducción pública EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-contratos/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <ContratosContent />
      </main>
      <Footer />
    </>
  );
}

