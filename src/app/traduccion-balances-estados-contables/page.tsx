import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import BalancesEstadosContablesContent from '@/components/pages/BalancesEstadosContables';

export const metadata: Metadata = {
  title:
    'Traducción pública de balances y estados contables/financieros (inglés ↔ español)',
  description:
    'Balances, estados contables/financieros, informes de auditoría, memorias y certificaciones contables — traducción pública EN↔ES para casas matrices, bancos, IGJ, inversores y licitaciones. Legalización CTPCBA de firma/sello a pedido.',
  alternates: {
    canonical: '/traduccion-balances-estados-contables/',
    languages: {
      en: '/traduccion-balances-estados-contables',
      es: '/traduccion-balances-estados-contables',
    },
  },
  openGraph: {
    title:
      'Traducción pública de balances y estados contables/financieros — EN↔ES',
    description:
      'Para bancos, IGJ, casas matrices, inversores y licitaciones. Apostilla del ORIGINAL cuando van al exterior; traducción EN↔ES; legalización CTPCBA opcional.',
    type: 'article',
    locale: 'es_AR',
    url: 'https://www.ml-traducciones.com/traduccion-balances-estados-contables/',
    images: ['/favicon.svg'],
  },
};

export const dynamic = 'error'; // ensure static

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <BalancesEstadosContablesContent />
      </main>
      <Footer />
    </>
  );
}

