import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import BlogIndexContent from '@/components/pages/BlogIndex';

export const metadata: Metadata = {
  title: 'Blog | Traducción pública EN↔ES en Buenos Aires',
  description:
    'Guías prácticas sobre traducción pública (EN↔ES), legalización del CTPCBA y apostilla. Solicite cotización gratuita.',
  alternates: {
    canonical: '/blog/',
    languages: {
      en: '/blog',
      es: '/blog',
    },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Blog | Traducción pública EN↔ES en Buenos Aires',
    description:
      'Guías prácticas sobre traducción pública (EN↔ES), legalización del CTPCBA y apostilla.',
    url: 'https://www.ml-traducciones.com/blog/',
    type: 'website',
    locale: 'es_AR',
    images: ['/favicon.svg'],
  },
};

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <BlogIndexContent />
      </main>
      <Footer />
    </>
  );
}

