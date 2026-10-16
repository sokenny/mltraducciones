import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import TestamentoContent from '@/components/pages/Testamento';

export const metadata: Metadata = {
  title:
    'Traducción pública de testamentos (wills) — sucesiones y herencias (inglés ↔ español)',
  description:
    'Testamentos para sucesión/probate y presentaciones notariales/judiciales EN↔ES. Cotización por foja; legalización CTPCBA de firma/sello a pedido. Apostilla del ORIGINAL por autoridad competente.',
  alternates: {
    canonical: '/traduccion-testamento/',
    languages: {
      en: '/traduccion-testamento',
      es: '/traduccion-testamento',
    },
  },
  openGraph: {
    title:
      'Traducción pública de testamentos (wills) — sucesiones y herencias (inglés ↔ español)',
    description:
      'Para herederos en el exterior, protocolización y presentaciones ante escribanos/juzgados. Orden: apostilla del ORIGINAL; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-testamento/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <TestamentoContent />
      </main>
      <Footer />
    </>
  );
}

