/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de contratos (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de contratos comerciales y jurídicos por traductora pública matriculada (CTPCBA). Se respeta la terminología legal y el formato de cada cláusula. A pedido, se gestiona la legalización de la firma y del sello ante el CTPCBA.',
  typesTitle: 'Tipos de contratos habituales',
  typesList: [
    'Contratos de alquiler y locación.',
    'Contratos de servicios y mantenimiento.',
    'Contratos de distribución y agencia.',
    'Contratos de compraventa y suministro.',
    'Acuerdos de confidencialidad (NDAs) y anexos.',
  ],
  guidanceTitle: 'Aspectos formales',
  guidanceBody:
    'Si el contrato se presentará ante organismos públicos o privados (bancos, escribanías, juzgados), indique los requisitos de presentación (copias certificadas, cantidades de fojas, visados).',
  abroadTitle: 'Contratos para uso en el exterior',
  abroadBody:
    'Orden sugerido: (1) Apostilla del ORIGINAL por la autoridad competente (en Argentina, Cancillería por TAD o, según corresponda, Colegio de Escribanos). (2) Traducción pública EN↔ES. (3) Opcional: legalización del CTPCBA de la firma y del sello de la traductora si el destinatario lo requiere. La apostilla no se vende; la emite la autoridad competente.',
  abroadLinksIntro: 'Recursos oficiales:',
  ctpcbaLegal:
    'El CTPCBA certifica la firma y el sello de la traductora pública, no el contenido del contrato. Modalidad digital (con verificación) u ológrafa (papel).',
  quoteTitle: 'Cotización y envío',
  quoteBody:
    'Para cotizar con precisión, envíe el contrato completo (escaneo/PDF) indicando el organismo de destino y si solicita legalización CTPCBA. Cotización sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  postCtaNote: 'En el formulario, seleccione “Documentos Legales”.',
  crossTitle: 'Otras páginas relacionadas',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de poderes y estatutos societarios',
  crossBLink: '/traduccion-poderes-estatutos-societarios',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of contracts (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translation of commercial and legal agreements by a duly licensed sworn translator (CTPCBA). Legal terminology and clause structure are carefully preserved. Upon request, CTPCBA legalization of signature and seal can be arranged.',
  typesTitle: 'Common agreement types',
  typesList: [
    'Lease and rental agreements.',
    'Service and maintenance agreements.',
    'Distribution and agency agreements.',
    'Sale and purchase, and supply agreements.',
    'NDAs and related addenda.',
  ],
  guidanceTitle: 'Formal considerations',
  guidanceBody:
    'If the agreement will be submitted to public or private bodies (banks, notaries, courts), please share any filing requirements (certified copies, page counts, visas).',
  abroadTitle: 'Agreements for use abroad',
  abroadBody:
    'Suggested order: (1) Apostille the ORIGINAL issued by the competent authority (in Argentina, the Ministry of Foreign Affairs via TAD or, where applicable, the Notaries Association). (2) Sworn EN↔ES translation. (3) Optional: CTPCBA legalization of the translator’s signature and seal if required by the recipient. Apostilles are issued by the competent authority.',
  abroadLinksIntro: 'Official resources:',
  ctpcbaLegal:
    'CTPCBA legalization certifies the translator’s signature and seal, not the content of the agreement. Digital (with online verification) or paper-based.',
  quoteTitle: 'Quote and submission',
  quoteBody:
    'Please send the full agreement (scan/PDF), indicate the receiving institution and whether CTPCBA legalization is requested. Quotes are free; fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  postCtaNote: 'Select “Legal Documents” in the form.',
  crossTitle: 'Related pages',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of powers of attorney and bylaws',
  crossBLink: '/traduccion-poderes-estatutos-societarios',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function ContratosContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url = 'https://www.ml-traducciones.com/traduccion-contratos';
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

      <h2 className="heading-3 mt-10">{t.typesTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.typesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.guidanceTitle}</h2>
      <p className="text-gray-700">{t.guidanceBody}</p>

      <h2 className="heading-3 mt-10">{t.abroadTitle}</h2>
      <p className="text-gray-700">{t.abroadBody}</p>
      <p className="text-gray-700">
        {t.abroadLinksIntro}{' '}
        <a
          href="https://www.argentina.gob.ar/cancilleria/servicios/apostilla"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunflower-600 underline"
        >
          Cancillería – Apostilla TAD
        </a>{' '}
        ·{' '}
        <a
          href="https://www.traductores.org.ar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunflower-600 underline"
        >
          CTPCBA / Traductores.org.ar
        </a>
      </p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.ctpcbaLegal}</p>
      </div>

      <div className="mt-10">
        <a href="/#contact" className="btn-primary">
          {t.cta}
        </a>
        <p className="text-sm text-gray-600 mt-2">{t.postCtaNote}</p>
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

