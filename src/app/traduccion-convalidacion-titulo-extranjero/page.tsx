import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import ConvalidacionTituloExtranjeroContent from '@/components/pages/ConvalidacionTituloExtranjero';

export const metadata: Metadata = {
  title:
    'Traducción pública al español para convalidación/revalidación de título extranjero (inglés → español)',
  description:
    'Títulos, diplomas, certificados analíticos (transcripts) y programas en inglés → traducción pública al español para convalidar/revalidar en Argentina (Ministerio de Educación / universidades). Orden: apostilla o legalización en el país emisor; traducción por traductora pública argentina; legalización CTPCBA si la institución lo pide. Verificá requisitos vigentes con tu organismo.',
  alternates: {
    canonical: '/traduccion-convalidacion-titulo-extranjero/',
    languages: {
      en: '/traduccion-convalidacion-titulo-extranjero',
      es: '/traduccion-convalidacion-titulo-extranjero',
    },
  },
  openGraph: {
    title:
      'Traducción al español para convalidación/revalidación de título extranjero (inglés → español)',
    description:
      'Apostilla o legalización en el país emisor; traducción pública al español; legalización CTPCBA si corresponde. Verificá requisitos con el organismo.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-convalidacion-titulo-extranjero/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <ConvalidacionTituloExtranjeroContent />
      </main>
      <Footer />
    </>
  );
}

