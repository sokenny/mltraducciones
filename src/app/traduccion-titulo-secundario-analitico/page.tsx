import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TituloSecundarioContent from '@/components/pages/TituloSecundario';

export const metadata: Metadata = {
  title:
    'Traducción pública de título/certificado/analítico de estudios secundarios (inglés ↔ español)',
  description:
    'Bachiller y analítico EN↔ES por traductora pública matriculada. Para trámites de estudio/trabajo en el exterior o para uso local de credenciales extranjeras. Apostilla del ORIGINAL por autoridad competente. Legalización CTPCBA a pedido. No es homologación.',
  alternates: {
    canonical: '/traduccion-titulo-secundario-analitico/',
    languages: {
      en: '/traduccion-titulo-secundario-analitico',
      es: '/traduccion-titulo-secundario-analitico',
    },
  },
  openGraph: {
    title:
      'Traducción pública de título/certificado/analítico de estudios secundarios (inglés ↔ español)',
    description:
      'Argentino para usar en el exterior o extranjero para usar en la Argentina. Apostilla del ORIGINAL; traducción EN↔ES; legalización CTPCBA opcional. La traducción no reemplaza homologación/convalidación.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-titulo-secundario-analitico/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <TituloSecundarioContent />
      </main>
      <Footer />
    </>
  );
}

