/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública para convalidación/revalidación de título extranjero en Argentina (inglés → español)',
  intro:
    'Traducción pública al español de títulos, diplomas, certificados analíticos (transcripts) y programas/planes de estudio emitidos en inglés para presentar ante el Ministerio de Educación, universidades nacionales y otros organismos argentinos. Trabajo con firma y sello de traductora pública matriculada (CTPCBA).',
  docsTitle: '¿Qué documentos suelen pedirse?',
  docsList: [
    'Título o diploma universitario.',
    'Certificado analítico / transcript completo.',
    'Programas o syllabus de materias (cuando la universidad los solicita).',
    'Certificaciones, cartas de autenticidad y legalizaciones previas.',
  ],
  orderTitle: 'Orden general del trámite (verificá requisitos vigentes con tu universidad/organismo)',
  orderSteps: [
    'Apostilla o legalización consular del ORIGINAL en el país emisor (según tratados).',
    'Traducción pública al español realizada por una/uno traductora/or pública/o argentina/o matriculada/o.',
    'Legalización del CTPCBA de la firma y del sello de la traductora cuando el organismo lo requiere.',
  ],
  noteAbroad:
    'Las traducciones hechas en el exterior suelen necesitar ratificación por una/un traductora/or pública/o argentina/o para tener validez local. Por eso, para convalidación/revalidación en Argentina conviene realizar la traducción en el país.',
  guidanceTitle: 'Recomendaciones para cotizar y presentar',
  guidanceBody:
    'Enviá escaneos o PDFs legibles de todas las páginas (frente y dorso si corresponde). Indicá universidad/organismo de destino, si aceptan traducción con legalización digital del CTPCBA y si piden copias certificadas o cantidad de ejemplares. La cotización es sin cargo y los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná “Documentos Académicos”.',
  crossTitle: 'También puede interesarte',
  crossA: 'Traducción pública de título universitario y certificado analítico — EN↔ES',
  crossALink: '/traduccion-titulo-universitario-analitico',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation for recognition of foreign degrees in Argentina (English → Spanish)',
  intro:
    'Sworn Spanish translations of degrees, diplomas, academic transcripts and syllabi issued in English for submission to the Ministry of Education, national universities and other Argentine bodies. Prepared by a duly licensed sworn translator (CTPCBA).',
  docsTitle: 'Commonly requested documents',
  docsList: [
    'University degree/diploma.',
    'Full academic transcript.',
    'Course syllabi/programs (when required by the university).',
    'Prior legalizations, authenticity letters and certificates.',
  ],
  orderTitle: 'Typical order of steps (confirm current requirements with your institution)',
  orderSteps: [
    'Apostille or consular legalization of the ORIGINAL in the issuing country (per treaties).',
    'Sworn translation into Spanish by an Argentine sworn translator licensed by CTPCBA.',
    'CTPCBA legalization of the translator’s signature and seal when required by the recipient.',
  ],
  noteAbroad:
    'Translations produced abroad often need to be ratified by an Argentine sworn translator to be valid locally. For recognition in Argentina, it is advisable to obtain the translation within the country.',
  guidanceTitle: 'Guidance for quotes and filing',
  guidanceBody:
    'Please send clear scans/PDFs of all pages (front/back where applicable). Indicate the destination university/body, whether they accept CTPCBA digital legalization, and any requirements regarding certified copies or number of sets. Quotes are free and fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Academic Documents” in the form.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation of university degrees and transcripts — EN↔ES',
  crossALink: '/traduccion-titulo-universitario-analitico',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function ConvalidacionTituloExtranjeroContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-convalidacion-titulo-extranjero';
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

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.docsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.orderTitle}</h2>
      <ol className="list-decimal pl-6 text-gray-700">
        {t.orderSteps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.noteAbroad}</p>
      </div>

      <h2 className="heading-3 mt-10">{t.guidanceTitle}</h2>
      <p className="text-gray-700">{t.guidanceBody}</p>

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

