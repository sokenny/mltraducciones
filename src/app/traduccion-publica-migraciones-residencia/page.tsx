import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import MigracionesResidenciaContent from '@/components/pages/MigracionesResidencia';

export const metadata: Metadata = {
  title:
    'Traducción pública para residencia / Migraciones — inglés ↔ español | Buenos Aires',
  description:
    'Documentación extranjera para residencias en Argentina: traducción pública por traductora matriculada y, a pedido, legalización CTPCBA. Enlaces a guías para partidas, divorcio, defunción, antecedentes y títulos. Cotización gratuita.',
  alternates: {
    canonical: '/traduccion-publica-migraciones-residencia/',
    languages: {
      en: '/traduccion-publica-migraciones-residencia',
      es: '/traduccion-publica-migraciones-residencia',
    },
  },
  openGraph: {
    title:
      'Traducción pública para residencia / Migraciones — EN↔ES | Buenos Aires',
    description:
      'Qué documentos suelen requerir traducción pública y cuándo se legaliza en el CTPCBA. Enlaces a guías específicas.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-publica-migraciones-residencia/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <MigracionesResidenciaContent />
      </main>
      <Footer />
    </>
  );
}

