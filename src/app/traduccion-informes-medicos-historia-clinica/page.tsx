import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import InformesMedicosHistoriaClinicaContent from '@/components/pages/InformesMedicosHistoriaClinica';

export const metadata: Metadata = {
  title:
    'Traducción pública de informes médicos e historia clínica (inglés ↔ español)',
  description:
    'Historias clínicas, informes y certificados médicos, resultados de estudios y certificados de vacunación — traducción pública EN↔ES para tratamientos en el exterior, seguros/reintegros, visas, estudios y trámites. Legalización CTPCBA a pedido.',
  alternates: {
    canonical: '/traduccion-informes-medicos-historia-clinica/',
    languages: {
      en: '/traduccion-informes-medicos-historia-clinica',
      es: '/traduccion-informes-medicos-historia-clinica',
    },
  },
  openGraph: {
    title:
      'Traducción pública de informes médicos e historia clínica — EN↔ES',
    description:
      'Para tratamientos en el exterior, seguros/reintegros, visas y trámites. Apostilla del ORIGINAL si circula afuera; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-informes-medicos-historia-clinica/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <InformesMedicosHistoriaClinicaContent />
      </main>
      <Footer />
    </>
  );
}

