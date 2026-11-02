import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import DocumentosLaboralesBancariosContent from '@/components/pages/DocumentosLaboralesBancarios';

export const metadata: Metadata = {
  title:
    'Traducción pública de documentos laborales y bancarios (inglés ↔ español)',
  description:
    'Certificados de trabajo, recibos de sueldo, constancias de ingresos/inscripción, extractos y cartas. EN→ES para Argentina y ES→EN para visas/residencias/estudios/trabajo. Cotización sin cargo.',
  alternates: {
    canonical: '/traduccion-documentos-laborales-bancarios/',
    languages: {
      en: '/traduccion-documentos-laborales-bancarios',
      es: '/traduccion-documentos-laborales-bancarios',
    },
  },
  openGraph: {
    title:
      'Traducción pública de documentos laborales y bancarios (inglés ↔ español)',
    description:
      'Embajadas, migraciones, universidades y bancos pueden exigir traducción pública y, si corresponde, legalización CTPCBA. Verificá requisitos con el organismo.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-documentos-laborales-bancarios/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <DocumentosLaboralesBancariosContent />
      </main>
      <Footer />
    </>
  );
}

