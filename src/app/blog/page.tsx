import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import BlogIndexContent from '@/components/pages/BlogIndex';

export const metadata: Metadata = {
  title: 'Blog | Traducción pública EN↔ES en Buenos Aires',
  description:
    'Guías prácticas sobre traducción pública (EN↔ES), legalización del CTPCBA y apostilla. Solicite cotización gratuita.',
  alternates: {
    languages: {
      en: '/blog',
      es: '/blog',
    },
  },
  robots: { index: true, follow: true },
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

