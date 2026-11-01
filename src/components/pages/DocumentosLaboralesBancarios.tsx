/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de documentos laborales y bancarios (inglés ↔ español)',
  intro:
    'Traducciones EN→ES para trámites en Argentina y ES→EN para visas, residencias, estudios o trabajo en países de habla inglesa. Tipos frecuentes: certificados de trabajo, recibos de sueldo, constancias de ingresos/inscripción, extractos bancarios, cartas de referencia.',
  whenTitle: '¿Cuándo se requiere traducción pública?',
  whenBody:
    'Depende del destino. Embajadas, consulados, migraciones, universidades y bancos suelen pedir traducción pública (firmada por traductor/a público/a y, si corresponde, legalizada por el CTPCBA). Otros receptores pueden aceptar formatos no jurados. Verifique SIEMPRE con el organismo.',
  examplesTitle: 'Ejemplos de documentos',
  examplesList: [
    'Certificados de trabajo y cartas laborales.',
    'Recibos de sueldo y constancias de ingresos.',
    'Constancias de inscripción fiscal y/o categorización.',
    'Extractos y certificaciones bancarias.',
    'Cartas de referencia (bancarias y personales).',
  ],
  scopeTitle: 'Alcance y legalizaciones',
  scopeBody:
    'Traducción pública EN↔ES con firma y sello. A pedido del organismo, puede gestionarse la legalización del CTPCBA de mi firma y sello. Si se requiere apostilla, la tramita el/la cliente ante la autoridad competente; no ofrezco apostilla como servicio.',
  quoteTitle: 'Cómo solicitar cotización',
  quoteBody:
    'Para cotizar, envíe escaneos legibles o PDFs del documento completo. Indique país/autoridad de destino y requisitos (formato, cantidad de copias, si piden legalización CTPCBA). No se publican aquí aranceles ni plazos; la cotización es sin cargo.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná “Documentos Personales”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de antecedentes penales (RNR) — EN↔ES',
  crossBLink: '/traduccion-antecedentes-penales',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of employment and banking documents (English ↔ Spanish)',
  intro:
    'ES→EN for visas, residency, study or work abroad, and EN→ES for filings in Argentina. Common documents: employment letters, pay slips, proof of income/registration, bank statements, and reference letters.',
  whenTitle: 'When is a sworn translation required?',
  whenBody:
    'It depends on the recipient. Embassies, consulates, immigration, universities and banks often require a sworn translation (signed by a sworn translator and, where applicable, legalized by the CTPCBA). Other recipients may accept non-sworn formats. ALWAYS confirm with the authority.',
  examplesTitle: 'Document examples',
  examplesList: [
    'Employment letters and HR certificates.',
    'Pay slips and proof of income.',
    'Tax registration/status certificates.',
    'Bank statements and bank certifications.',
    'Reference letters (bank and personal).',
  ],
  scopeTitle: 'Scope and legalizations',
  scopeBody:
    'EN↔ES sworn translations bearing signature and seal. If requested by the recipient, CTPCBA legalization of my signature and seal can be arranged. Apostilles, when needed, are obtained by the client from the competent authority; I do not provide apostille services.',
  quoteTitle: 'How to request a quote',
  quoteBody:
    'Please send readable scans or PDFs of the full document. Include destination country/authority and filing requirements (format, number of copies, whether CTPCBA legalization is requested). Fees and timelines are not published here; quotes are free.',
  cta: 'Request a free quote',
  ctaHint: 'In the form, select “Personal Documents”.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of criminal record certificates (RNR) — EN↔ES',
  crossBLink: '/traduccion-antecedentes-penales',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function DocumentosLaboralesBancariosContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-documentos-laborales-bancarios';
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

      <h2 className="heading-3 mt-10">{t.whenTitle}</h2>
      <p className="text-gray-700">{t.whenBody}</p>

      <h2 className="heading-3 mt-10">{t.examplesTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.examplesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.scopeTitle}</h2>
      <p className="text-gray-700">{t.scopeBody}</p>

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

