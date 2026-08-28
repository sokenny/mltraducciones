import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TramiteOrdenCtpcbaContent from '@/components/pages/TramiteOrdenCtpcba';

export const metadata: Metadata = {
  title:
    'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite en Argentina',
  description:
    'En Argentina la figura legal es traducción pública (Ley 20.305 / CTPCBA). Diferencias con “traducción jurada”, legalización digital vs ológrafa y apostilla. Cómo es el orden del trámite.',
  alternates: {
    languages: {
      en: '/traduccion-publica-legalizacion-ctpcba',
      es: '/traduccion-publica-legalizacion-ctpcba',
    },
  },
  openGraph: {
    title:
      'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite en Argentina',
    description:
      'Qué certifica el CTPCBA, pública vs simple, legalización digital/ológrafa y apostilla. Sin vender apostillas.',
    type: 'article',
    locale: 'es_AR',
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <TramiteOrdenCtpcbaContent />
      </main>
      <Footer />
    </>
  );
}

