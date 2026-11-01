import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import LicenciaConducirExtranjeraContent from '@/components/pages/LicenciaConducirExtranjera';

export const metadata: Metadata = {
  title:
    'Traducción pública de licencia de conducir extranjera y certificado de legalidad (inglés ↔ español)',
  description:
    'Canje/renovación en CABA y uso en el exterior. Requisitos: apostilla/validación consular cuando corresponde; traducción por traductor/a público/a. Cotización sin cargo.',
  alternates: {
    canonical: '/traduccion-licencia-conducir-extranjera/',
    languages: {
      en: '/traduccion-licencia-conducir-extranjera',
      es: '/traduccion-licencia-conducir-extranjera',
    },
  },
  openGraph: {
    title:
      'Traducción pública de licencia de conducir extranjera y certificado de legalidad (inglés ↔ español)',
    description:
      'Canje/renovación en CABA y uso en el exterior. Documentación extranjera: apostilla o validación consular y traducción por traductor/a público/a.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-licencia-conducir-extranjera/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <LicenciaConducirExtranjeraContent />
      </main>
      <Footer />
    </>
  );
}

