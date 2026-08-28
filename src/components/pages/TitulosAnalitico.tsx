/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de título universitario y certificado analítico (inglés ↔ español)',
  intro:
    'Traducciones públicas EN↔ES de títulos, diplomas, certificados analíticos y programas de estudio para trámites de estudio o trabajo en el exterior, o para validez local de títulos extranjeros. A pedido, puede gestionarse la legalización de la firma y del sello de la traductora ante el CTPCBA.',
  scenariosTitle: 'Dos recorridos habituales del trámite',
  scenario1Title: '1) Título argentino que se presenta en el exterior',
  scenario1Steps: [
    'Legalizaciones previas exigidas por el Ministerio de Educación u organismo competente.',
    'Apostilla del ORIGINAL (Cancillería por TAD o Colegio de Escribanos, según el caso).',
    'Traducción pública al idioma requerido (EN↔ES).',
    'Legalización del CTPCBA de la firma y el sello de la traductora.',
    'Opcional del cliente: “segunda apostilla” vía TAD sobre la firma del Colegio.',
  ],
  scenario2Title: '2) Título extranjero que se presenta en la Argentina',
  scenario2Steps: [
    'Apostilla o legalización en el país de origen (según tratados vigentes).',
    'Traducción pública al español (EN→ES).',
    'Legalización del CTPCBA de la firma y el sello de la traductora.',
  ],
  noteApostille:
    'La apostilla siempre la emite la autoridad competente. No se comercializan apostillas; se realiza la traducción y puede gestionarse la legalización de la firma ante el CTPCBA.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'La cotización suele ser por foja. Los certificados analíticos y programas son extensos: esto impacta en el número de fojas. Envíe escaneos o PDFs legibles para presupuestar con precisión. La cotización es sin cargo y los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA.',
  docsTitle: 'Documentación necesaria',
  docsBody:
    'Para cotizar: título/diploma (frente y dorso si corresponde), certificado analítico completo, programas si los pide la institución y toda legalización/apostilla previa. Los documentos digitales con firma/verificación electrónica también se traducen con su validación.',
  crossTitle: 'También puede interesarle',
  crossA: 'Partidas de nacimiento y matrimonio: traducción pública EN↔ES en CABA',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Académicos”.',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of university degrees and transcripts (English ↔ Spanish)',
  intro:
    'I provide EN↔ES sworn translations of university degrees, diplomas, academic transcripts and syllabi for study or work abroad, or to use a foreign degree in Argentina. I can arrange CTPCBA legalization of my signature upon request.',
  scenariosTitle: 'Two common paths',
  scenario1Title: '1) Argentine degree to be used abroad',
  scenario1Steps: [
    'Any prior legalization required by the Ministry of Education or competent body.',
    'Apostille of the ORIGINAL (via Ministry of Foreign Affairs TAD platform or Notaries Association, as applicable).',
    'Sworn translation into the required language (EN↔ES).',
    'CTPCBA legalization of the translator’s signature and seal.',
    'Optional by client: a “second apostille” via TAD on the Association’s signature.',
  ],
  scenario2Title: '2) Foreign degree to be used in Argentina',
  scenario2Steps: [
    'Apostille or legalization in the country of origin (per applicable treaties).',
    'Sworn translation into Spanish (EN→ES).',
    'CTPCBA legalization of the translator’s signature and seal.',
  ],
  noteApostille:
    'Apostilles are always issued by the competent authority. I do not sell apostille services; I provide translations and can manage CTPCBA legalization of my signature.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Quotes are typically per page. Transcripts and syllabi are long documents, which affects page count. Please send clear scans or PDFs for an accurate estimate. Quotes are free and professional fees follow CTPCBA minimum tariffs.',
  docsTitle: 'Required documents',
  docsBody:
    'For quoting: degree/diploma (front and back where applicable), full transcript, syllabi if required by the institution, and any prior legalization/apostille. Digital documents with electronic signature/verification can also be translated with their validation.',
  crossTitle: 'You may also like',
  crossA: 'Birth and marriage certificates: sworn translation EN↔ES in Buenos Aires',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  cta: 'Request a free quote',
  ctaHint: 'Select “Academic Documents” in the form.',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function TitulosAnaliticoContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-titulo-universitario-analitico';
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
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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

      <h2 className="heading-3 mt-10">{t.scenariosTitle}</h2>
      <h3 className="heading-4 mt-6">{t.scenario1Title}</h3>
      <ol className="list-decimal pl-6 text-gray-700">
        {t.scenario1Steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h3 className="heading-4 mt-6">{t.scenario2Title}</h3>
      <ol className="list-decimal pl-6 text-gray-700">
        {t.scenario2Steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.noteApostille}</p>
      </div>

      <h2 className="heading-3 mt-10">{t.pricingTitle}</h2>
      <p className="text-gray-700">{t.pricingBody}</p>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsBody}</p>

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
          <Link
            className="text-sunflower-700 underline"
            href="/traduccion-partida-nacimiento-matrimonio"
          >
            {t.crossA}
          </Link>
        </li>
        <li>
          <Link
            className="text-sunflower-700 underline"
            href="/traduccion-publica-legalizacion-ctpcba"
          >
            {t.crossB}
          </Link>
        </li>
      </ul>
    </article>
  );
}

