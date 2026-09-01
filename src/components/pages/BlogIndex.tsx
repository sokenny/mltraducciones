/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';

export default function BlogIndexContent() {
  const { language } = useLanguage();
  const posts = [
    {
      href: '/traduccion-partida-nacimiento-matrimonio',
      title:
        language === 'en'
          ? 'Sworn translation of birth and marriage certificates (EN↔ES) in Buenos Aires'
          : 'Traducción pública de partidas de nacimiento y matrimonio (EN↔ES) en CABA',
      desc:
        language === 'en'
          ? 'When you need a sworn translation, CTPCBA legalization, and how to request a quote.'
          : 'Cuándo se requiere traducción pública, legalización CTPCBA y cómo cotizar.',
    },
    {
      href: '/traduccion-titulo-universitario-analitico',
      title:
        language === 'en'
          ? 'Sworn translation of university degrees and transcripts (EN↔ES)'
          : 'Traducción pública de título universitario y certificado analítico (EN↔ES)',
      desc:
        language === 'en'
          ? 'Degrees, diplomas, transcripts and syllabi. Apostille and CTPCBA legalization.'
          : 'Títulos, diplomas, analíticos y programas. Apostilla y legalización CTPCBA.',
    },
    {
      href: '/traduccion-publica-legalizacion-ctpcba',
      title:
        language === 'en'
          ? 'Sworn translation, CTPCBA legalization and apostille: order of steps'
          : 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
      desc:
        language === 'en'
          ? 'What CTPCBA certifies, digital vs paper legalization, apostille via TAD.'
          : 'Qué certifica el CTPCBA, legalización digital vs ológrafa y apostilla por TAD.',
    },
    {
      href: '/traduccion-antecedentes-penales',
      title:
        language === 'en'
          ? 'Sworn translation of criminal record certificates (RNR) — EN↔ES'
          : 'Traducción pública de antecedentes penales (RNR) — EN↔ES',
      desc:
        language === 'en'
          ? 'Visas, residency, citizenship and work. Order: apostille, sworn translation, optional CTPCBA legalization.'
          : 'Visas, residencia, ciudadanía y trabajo. Orden: apostilla, traducción pública y legalización CTPCBA opcional.',
    },
    {
      href: '/traduccion-poderes-estatutos-societarios',
      title:
        language === 'en'
          ? 'Sworn translation of powers of attorney and bylaws — EN↔ES'
          : 'Traducción pública de poderes y estatutos societarios — EN↔ES',
      desc:
        language === 'en'
          ? 'General/special PoAs, bylaws, incorporation and minutes for corporate/legal use.'
          : 'Poderes generales/especiales, estatutos, constitutivas y actas para uso societario/legal.',
    },
    {
      href: '/traduccion-contratos',
      title:
        language === 'en'
          ? 'Sworn translation of contracts — EN↔ES'
          : 'Traducción pública de contratos — EN↔ES',
      desc:
        language === 'en'
          ? 'Lease, services, distribution, sale and purchase. Commercial/legal intent.'
          : 'Alquiler, servicios, distribución, compraventa. Enfoque jurídico/comercial.',
    },
  ];

  return (
    <section className="container-width px-4 sm:px-6 lg:px-8">
      <h1 className="heading-1 mb-6">{language === 'en' ? 'Blog' : 'Blog'}</h1>
      <p className="text-gray-700 mb-10 max-w-3xl">
        {language === 'en'
          ? 'Practical guides about sworn translations (EN↔ES), CTPCBA legalization and apostilles.'
          : 'Guías prácticas sobre traducción pública (EN↔ES), legalización del CTPCBA y apostillas.'}
      </p>

      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            href={post.href}
            key={post.href}
            className="block rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow bg-white"
          >
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.desc}</p>
            <span className="inline-flex items-center mt-3 text-sunflower-700 font-medium">
              {language === 'en' ? 'Read more' : 'Leer más'}
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

