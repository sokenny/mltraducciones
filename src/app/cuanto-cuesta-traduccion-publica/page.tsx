import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import CuantoCuestaTraduccionPublicaContent from '@/components/pages/CuantoCuestaTraduccionPublica';

export const metadata: Metadata = {
  title: '¿Cuánto cuesta una traducción pública en Buenos Aires?',
  description:
    'Guía de factores de precio: extensión/fojas, tipo de documento, complejidad, urgencia, legalización CTPCBA y copias. Cómo cotizar rápido por formulario. Sin publicar importes.',
  alternates: {
    canonical: '/cuanto-cuesta-traduccion-publica/',
    languages: {
      en: '/cuanto-cuesta-traduccion-publica',
      es: '/cuanto-cuesta-traduccion-publica',
    },
  },
  openGraph: {
    title: '¿Cuánto cuesta una traducción pública en Buenos Aires?',
    description:
      'Qué factores inciden en el precio y cómo solicitar cotización rápida. Sin publicar precios ni plazos.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/cuanto-cuesta-traduccion-publica/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <CuantoCuestaTraduccionPublicaContent />
      </main>
      <Footer />
    </>
  );
}

