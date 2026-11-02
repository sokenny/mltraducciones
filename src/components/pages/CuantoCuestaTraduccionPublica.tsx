/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: '¿Cuánto cuesta una traducción pública en Buenos Aires?',
  intro:
    'Guía práctica sobre cómo se determina el precio de una traducción pública (inglés ↔ español) en CABA. No se publican importes, plazos ni descuentos: los aranceles mínimos del CTPCBA cambian con el tiempo. La forma más rápida de obtener un presupuesto es enviar los documentos por el formulario.',
  factorsTitle: 'Factores que inciden en el precio',
  factorsList: [
    'Extensión y cantidad de fojas.',
    'Tipo de documento y complejidad temática/terminológica.',
    'Urgencia solicitada.',
    'Legalización del CTPCBA (si el organismo la pide) como instancia separada de la traducción.',
    'Número de copias o ejemplares requeridos por el organismo receptor.',
  ],
  whatToSendTitle: 'Qué enviar para cotizar rápido',
  whatToSendList: [
    'Escaneos nítidos o PDFs del documento completo (y sus legalizaciones/ apostillas si existieran).',
    'País/autoridad de destino y requisitos de presentación (formato, cantidad de copias, legalización CTPCBA, etc.).',
  ],
  noteTariffs:
    'Los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA. Por buenas prácticas, no se listan aquí valores ni plazos exactos.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná la opción que mejor describa tu trámite.',
  crossTitle: 'Leé también',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de pasaporte, DNI e identidad — EN↔ES',
  crossBLink: '/traduccion-pasaporte-dni-identidad',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'How much does a sworn translation cost in Buenos Aires?',
  intro:
    'A practical guide to how EN↔ES sworn translation pricing is determined in Buenos Aires. No specific fees, timelines or discounts are published here: CTPCBA minimum tariffs change over time. The fastest way to get an estimate is to send your documents via the form.',
  factorsTitle: 'Pricing factors',
  factorsList: [
    'Length and page count.',
    'Document type and subject-matter complexity/terminology.',
    'Requested urgency.',
    'CTPCBA legalization (when requested) as a step separate from the translation.',
    'Number of copies required by the recipient.',
  ],
  whatToSendTitle: 'What to send for a fast quote',
  whatToSendList: [
    'Clear scans or PDFs of the full document (and any legalizations/apostilles, if present).',
    'Destination country/authority and filing requirements (format, number of copies, CTPCBA legalization, etc.).',
  ],
  noteTariffs:
    'I follow CTPCBA minimum tariffs. As a best practice, exact amounts and timelines are not published here.',
  cta: 'Request a free quote',
  ctaHint: 'In the form, select the option that best describes your filing.',
  crossTitle: 'Related reading',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of passports and IDs — EN↔ES',
  crossBLink: '/traduccion-pasaporte-dni-identidad',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function CuantoCuestaTraduccionPublicaContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/cuanto-cuesta-traduccion-publica';
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: t.h1,
      inLanguage: language,
      author: {
        '@type': 'Person',
        name: t.metaAuthor,
      },
      publisher: {
        '@type': 'Organization',
        name: 'María E. Lo Bianco',
      },
      mainEntityOfPage: url,
      url,
    };
  }, [language, t]);

  return (
    <article className="container-width px-4 sm:px-6 lg:px-8 prose max-w-3xl prose-slate">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav className="mb-6 text-sm">
        <Link href="/" className="text-gray-500 hover:text-gray-900">
          {language === 'en' ? 'Home' : 'Inicio'}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link href="/blog" className="text-gray-500 hover:text-gray-900">
          {t.breadcrumbBlog}
        </Link>
      </nav>

      <h1 className="heading-1 mb-4">{t.h1}</h1>
      <p className="text-lg text-gray-700 mb-6">{t.intro}</p>

      <h2 className="heading-3 mt-10">{t.factorsTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.factorsList.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.whatToSendTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.whatToSendList.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.noteTariffs}</p>
      </div>

      <div className="mt-10">
        <a href="/#contact" className="btn-primary">
          {t.cta}
        </a>
        <p className="text-sm text-gray-600 mt-2">{t.ctaHint}</p>
      </div>

      <hr className="my-10" />
      <h3 className="heading-4 mb-4">{t.crossTitle}</h3>
      <ul className="list-disc pl-6">
        <li>
          <Link className="text-sunflower-700 underline" href={t.crossALink}>
            {t.crossA}
          </Link>
        </li>
        <li>
          <Link className="text-sunflower-700 underline" href={t.crossBLink}>
            {t.crossB}
          </Link>
        </li>
      </ul>
    </article>
  );
}

