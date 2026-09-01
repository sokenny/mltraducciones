import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import PoderesEstatutosContent from '@/components/pages/PoderesEstatutos';

export const metadata: Metadata = {
  title:
    'Traducción pública de poderes y estatutos societarios (inglés ↔ español)',
  description:
    'Poderes (generales/especiales), estatutos, actas constitutivas y societarias EN↔ES por traductora pública matriculada. A pedido: legalización CTPCBA de firma y sello. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-poderes-estatutos-societarios/',
    languages: {
      en: '/traduccion-poderes-estatutos-societarios',
      es: '/traduccion-poderes-estatutos-societarios',
    },
  },
  openGraph: {
    title:
      'Traducción pública de poderes y estatutos societarios (inglés ↔ español)',
    description:
      'EN↔ES para uso corporativo y legal. Apostilla por autoridad competente; CTPCBA legaliza firma y sello de la traductora.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-poderes-estatutos-societarios/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <PoderesEstatutosContent />
      </main>
      <Footer />
    </>
  );
}

