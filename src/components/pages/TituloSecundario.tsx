/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de título/certificado/analítico de estudios secundarios (inglés ↔ español)',
  intro:
    'Traducciones públicas EN↔ES de títulos de bachiller, certificados de estudios y analíticos de nivel secundario. Útiles para trámites de estudio/trabajo en el exterior o para presentar credenciales secundarias extranjeras en la Argentina. A pedido, puede gestionarse la legalización del CTPCBA de la firma y el sello.',
  scenariosTitle: 'Dos recorridos habituales del trámite',
  scenario1Title: '1) Título secundario argentino que se presenta en el exterior',
  scenario1Steps: [
    'Legalizaciones previas exigidas por la autoridad educativa competente.',
    'Apostilla del ORIGINAL (Cancillería por TAD o Colegio de Escribanos, según el caso).',
    'Traducción pública EN↔ES.',
    'Legalización del CTPCBA de la firma y el sello de la traductora (si la institución lo solicita).',
  ],
  scenario2Title: '2) Título/analítico secundario extranjero que se presenta en la Argentina',
  scenario2Steps: [
    'Apostilla o legalización en el país de origen (según tratados vigentes).',
    'Traducción pública al español (EN→ES).',
    'Legalización del CTPCBA de la firma y el sello de la traductora (si el organismo lo requiere).',
  ],
  noteApostille:
    'La apostilla la emite la autoridad competente. No se comercializan apostillas; se realiza la traducción y, a pedido, la legalización de firma ante el CTPCBA.',
  noteHomologation:
    'La traducción pública no sustituye trámites de convalidación, reválida u homologación. Consulte con la autoridad educativa correspondiente.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'La cotización suele ser por foja. El analítico puede ser extenso; esto impacta en el número de fojas. Envíe escaneos o PDFs legibles para presupuestar. Cotización sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
  docsTitle: 'Documentación necesaria',
  docsBody:
    'Para cotizar: título/certificado (frente y dorso si corresponde) y analítico completo. Adjunte legalizaciones/apostillas previas, si las hay. Documentos digitales con firma/verificación electrónica también se traducen con su validación.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Académicos”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública de título universitario y certificado analítico',
  crossALink: '/traduccion-titulo-universitario-analitico',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of secondary school diplomas/certificates/transcripts (English ↔ Spanish)',
  intro:
    'EN↔ES sworn translations of high‑school diplomas, certificates and transcripts. Useful when applying to study/work abroad or to submit foreign secondary credentials in Argentina. Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  scenariosTitle: 'Two common paths',
  scenario1Title: '1) Argentine secondary diploma to be used abroad',
  scenario1Steps: [
    'Any prior legalization required by the competent education authority.',
    'Apostille of the ORIGINAL (via Ministry of Foreign Affairs TAD or Notaries Association, as applicable).',
    'Sworn EN↔ES translation.',
    "CTPCBA legalization of the translator’s signature and seal (if requested by the institution).",
  ],
  scenario2Title: '2) Foreign secondary diploma/transcript to be used in Argentina',
  scenario2Steps: [
    'Apostille or legalization in the country of origin (per applicable treaties).',
    'Sworn translation into Spanish (EN→ES).',
    "CTPCBA legalization of the translator’s signature and seal (if the authority requires it).",
  ],
  noteApostille:
    'Apostilles are issued by the competent authority. I do not sell apostille services; I provide translations and can manage CTPCBA legalization upon request.',
  noteHomologation:
    'A sworn translation does not replace convalidation/recognition procedures. Please check with the relevant education authority.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Quotes are typically per page. Transcripts can be long, affecting page count. Please send clear scans or PDFs for an accurate estimate. Quotes are free and fees follow CTPCBA minimum tariffs.',
  docsTitle: 'Required documents',
  docsBody:
    'For quoting: diploma/certificate (front/back where applicable) and full transcript. Attach any prior legalizations/apostilles. Digital documents with electronic signature/verification can be translated with their validation.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Academic Documents” in the form.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation of university degrees and transcripts',
  crossALink: '/traduccion-titulo-universitario-analitico',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function TituloSecundarioContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-titulo-secundario-analitico';
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
        <p className="text-gray-800 text-sm mt-2">{t.noteHomologation}</p>
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

