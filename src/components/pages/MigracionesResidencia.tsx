/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública para residencia / Migraciones (inglés ↔ español)',
  intro:
    'En trámites de residencia ante la Dirección Nacional de Migraciones, los documentos en idioma extranjero suelen requerir traducción pública realizada por traductoras/es públicas/os matriculadas/os. En muchos casos, la firma y el sello de la traducción deben ser legalizados por el CTPCBA (CABA).',
  scopeTitle: 'Alcance del servicio',
  scopeBody:
    'Se realiza la traducción pública EN↔ES de la documentación requerida y, a pedido, la gestión de la legalización de la firma y del sello ante el CTPCBA. No se realizan presentaciones ni gestiones ante Migraciones: esta página brinda orientación para la etapa de traducción.',
  docsTitle: 'Documentos habituales para residencias',
  docsListIntro: 'Estos son ejemplos frecuentes (con enlaces a páginas específicas):',
  docsList: [
    { text: 'Partidas de nacimiento y matrimonio', href: '/traduccion-partida-nacimiento-matrimonio' },
    { text: 'Sentencia de divorcio o acta con anotación marginal', href: '/traduccion-sentencia-divorcio' },
    { text: 'Acta/partida de defunción', href: '/traduccion-partida-defuncion' },
    { text: 'Certificados de antecedentes penales', href: '/traduccion-antecedentes-penales' },
    { text: 'Títulos, diplomas y certificados analíticos', href: '/traduccion-titulo-universitario-analitico' },
  ],
  orderTitle: 'Si la documentación se presenta en el exterior: orden del trámite',
  orderBody:
    '1) Apostilla del ORIGINAL por la autoridad competente (en Argentina: Cancillería por TAD o, según el caso, Colegio de Escribanos). 2) Traducción pública EN↔ES. 3) Opcional: legalización CTPCBA de la firma y del sello de la traductora si la institución receptora lo solicita. La apostilla la emite siempre la autoridad competente; no se comercializan apostillas.',
  officialTitle: 'Recursos oficiales',
  cta: 'Solicitar cotización gratuita',
  postCtaNote: 'En el formulario, seleccione “Residencia/Migraciones”.',
  crossTitle: 'Guías relacionadas',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translations for residency / immigration (EN↔ES)',
  intro:
    'For residency applications before the National Directorate of Migration in Argentina, foreign-language documents typically require a sworn translation prepared by a licensed sworn translator. In many cases, the translator’s signature and seal must be legalized by the CTPCBA (Buenos Aires).',
  scopeTitle: 'Service scope',
  scopeBody:
    'I provide EN↔ES sworn translations of required documents and, upon request, arrange CTPCBA legalization of my signature and seal. I do not process filings before Migration; this page offers guidance for the translation step.',
  docsTitle: 'Common documents for residency',
  docsListIntro: 'Frequent examples (with links to dedicated pages):',
  docsList: [
    { text: 'Birth and marriage certificates', href: '/traduccion-partida-nacimiento-matrimonio' },
    { text: 'Divorce judgments or marriage certificates with marginal note', href: '/traduccion-sentencia-divorcio' },
    { text: 'Death certificates', href: '/traduccion-partida-defuncion' },
    { text: 'Criminal record certificates', href: '/traduccion-antecedentes-penales' },
    { text: 'University degrees and transcripts', href: '/traduccion-titulo-universitario-analitico' },
  ],
  orderTitle: 'When documents are used abroad: order of steps',
  orderBody:
    '1) Apostille the ORIGINAL issued by the competent authority (in Argentina: the Ministry of Foreign Affairs via TAD or, as applicable, the Notaries Association). 2) Sworn EN↔ES translation. 3) Optional: CTPCBA legalization of the translator’s signature and seal if requested by the recipient. Apostilles are issued by the competent authority; translators do not sell apostille services.',
  officialTitle: 'Official resources',
  cta: 'Request a free quote',
  postCtaNote: 'Select “Residency/Immigration” in the form.',
  crossTitle: 'Related guides',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function MigracionesResidenciaContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-publica-migraciones-residencia';
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

      <h2 className="heading-3 mt-10">{t.scopeTitle}</h2>
      <p className="text-gray-700">{t.scopeBody}</p>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsListIntro}</p>
      <ul className="list-disc pl-6 text-gray-700">
        {t.docsList.map((item) => (
          <li key={item.href}>
            <Link className="text-sunflower-700 underline" href={item.href}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.orderTitle}</h2>
      <p className="text-gray-700 whitespace-pre-line">{t.orderBody}</p>
      <p className="text-gray-700">
        {t.officialTitle}:{' '}
        <a
          href="https://www.argentina.gob.ar/interior/migraciones"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sunflower-600 underline"
        >
          Argentina.gob.ar – Migraciones
        </a>{' '}
        ·{' '}
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
      </ul>
    </article>
  );
}

