import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import DefuncionContent from '@/components/pages/Defuncion';

export const metadata: Metadata = {
  title:
    'Traducción pública de partida/acta de defunción — inglés ↔ español | Buenos Aires',
  description:
    'Sucesiones, seguros, inscripción consular/Registro Civil de defunciones extranjeras. Orden del trámite: apostilla del ORIGINAL (Cancillería TAD), traducción pública y legalización CTPCBA opcional. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-partida-defuncion/',
    languages: {
      en: '/traduccion-partida-defuncion',
      es: '/traduccion-partida-defuncion',
    },
  },
  openGraph: {
    title:
      'Traducción pública de partida/acta de defunción — EN↔ES | Buenos Aires',
    description:
      'Sucesiones, seguros, inscripciones y trámites familiares. Apostilla del ORIGINAL (TAD), traducción pública y legalización CTPCBA a pedido.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-partida-defuncion/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <DefuncionContent />
      </main>
      <Footer />
    </>
  );
}

