import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import PermisoViajeMenoresContent from '@/components/pages/PermisoViajeMenores';

export const metadata: Metadata = {
  title:
    'Traducción pública de autorización/permiso de viaje de menores (inglés ↔ español)',
  description:
    'Autorizaciones parentales y formularios de viaje para menores EN↔ES por traductora pública matriculada. Apostilla del ORIGINAL por autoridad competente. Legalización CTPCBA de firma/sello a pedido. Cotización sin cargo.',
  alternates: {
    canonical: '/traduccion-permiso-viaje-menores/',
    languages: {
      en: '/traduccion-permiso-viaje-menores',
      es: '/traduccion-permiso-viaje-menores',
    },
  },
  openGraph: {
    title:
      'Traducción pública de autorización/permiso de viaje de menores (inglés ↔ español)',
    description:
      'Consentimientos parentales y modelos consulares/aerolíneas. Apostilla del ORIGINAL por autoridad competente; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-permiso-viaje-menores/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <PermisoViajeMenoresContent />
      </main>
      <Footer />
    </>
  );
}

