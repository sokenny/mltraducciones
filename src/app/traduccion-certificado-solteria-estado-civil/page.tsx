import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import CertificadoSolteriaContent from '@/components/pages/CertificadoSolteria';

export const metadata: Metadata = {
  title:
    'Traducción pública de certificado de soltería / estado civil (inglés ↔ español)',
  description:
    'Certificados de soltería/estado civil EN↔ES por traductora pública matriculada. Para matrimonio en el exterior, embajadas y presentaciones civiles. Apostilla del ORIGINAL por autoridad competente. Legalización CTPCBA a pedido.',
  alternates: {
    canonical: '/traduccion-certificado-solteria-estado-civil/',
    languages: {
      en: '/traduccion-certificado-solteria-estado-civil',
      es: '/traduccion-certificado-solteria-estado-civil',
    },
  },
  openGraph: {
    title:
      'Traducción pública de certificado de soltería / estado civil (inglés ↔ español)',
    description:
      'Matrimonio en el exterior y trámites ante embajadas/consulados. Apostilla del ORIGINAL por autoridad competente; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-certificado-solteria-estado-civil/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <CertificadoSolteriaContent />
      </main>
      <Footer />
    </>
  );
}

