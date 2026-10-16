import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import PasaporteDniIdentidadContent from '@/components/pages/PasaporteDniIdentidad';

export const metadata: Metadata = {
  title:
    'Traducción pública de pasaporte, DNI y documentos de identidad (inglés ↔ español)',
  description:
    'Pasaportes, DNI, cédulas e IDs EN↔ES por traductora pública matriculada. Copias: suele requerirse certificación notarial previa a apostilla; traducción EN↔ES; legalización CTPCBA opcional. Cotización sin cargo.',
  alternates: {
    canonical: '/traduccion-pasaporte-dni-identidad/',
    languages: {
      en: '/traduccion-pasaporte-dni-identidad',
      es: '/traduccion-pasaporte-dni-identidad',
    },
  },
  openGraph: {
    title:
      'Traducción pública de pasaporte, DNI y documentos de identidad (inglés ↔ español)',
    description:
      'Visas, bancos y autoridades del exterior. Copia certificada por escribano antes de apostillar; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-pasaporte-dni-identidad/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <PasaporteDniIdentidadContent />
      </main>
      <Footer />
    </>
  );
}

