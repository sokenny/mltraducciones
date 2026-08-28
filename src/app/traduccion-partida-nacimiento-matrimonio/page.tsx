import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import PartidasMatrimonioContent from '@/components/pages/PartidasMatrimonio';

export const metadata: Metadata = {
  title:
    'Traducción pública de partidas de nacimiento y matrimonio (inglés ↔ español) en CABA | EN↔ES',
  description:
    'Traductora pública UBA/CTPCBA. Partidas de nacimiento y matrimonio EN↔ES con firma y sello. Legalización ante el CTPCBA a pedido. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-partida-nacimiento-matrimonio/',
    languages: {
      en: '/traduccion-partida-nacimiento-matrimonio',
      es: '/traduccion-partida-nacimiento-matrimonio',
    },
  },
  openGraph: {
    title:
      'Traducción pública de partidas de nacimiento y matrimonio (inglés ↔ español) en CABA',
    description:
      'Partidas de nacimiento y matrimonio EN↔ES con firma y sello por traductora pública matriculada (CTPCBA). Legalización a pedido. Cotización gratuita.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-partida-nacimiento-matrimonio/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <PartidasMatrimonioContent />
      </main>
      <Footer />
    </>
  );
}

