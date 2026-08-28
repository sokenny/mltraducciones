/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite en Argentina',
  intro:
    'En la Argentina, la figura legal es la traducción pública (Ley 20.305). Las traducciones públicas las realizan traductores/as públicos/as matriculados/as y se certifican con firma y sello. El CTPCBA legaliza esa firma y ese sello. Si el documento –o la legalización del Colegio– viaja al exterior, puede requerir apostilla por TAD. A continuación, una guía práctica.',
  publicVsSwornTitle: '“Pública” en Argentina vs “jurada” en España',
  publicVsSwornBody:
    'En Argentina la denominación es traducción pública (Ley 20.305, CTPCBA en CABA). “Traducción jurada” es el término usado en España (MAEC). Si bien ambos conceptos refieren a traducciones con efectos legales, no son lo mismo. Yo soy traductora pública matriculada en el CTPCBA (no MAEC) para pares inglés ↔ español.',
  publicVsSimpleTitle: 'Traducción pública vs traducción simple',
  publicVsSimpleBody:
    'La traducción pública es la que se presenta ante organismos públicos o debe tener validez legal. Lleva firma y sello del traductor público y, si corresponde, la legalización del CTPCBA. La traducción simple es para usos privados o informativos y no requiere legalización.',
  whatCtpcbaTitle: '¿Qué certifica el CTPCBA?',
  whatCtpcbaBody:
    'El CTPCBA certifica la autenticidad de la firma y del sello de la traductora o del traductor público. No certifica el contenido ni los hechos del documento. La legalización puede ser digital (con verificación online) u ológrafa (en papel).',
  orderTitle: 'Orden sugerido del trámite',
  orderSteps: [
    'Si el documento salió de Argentina y va al exterior: apostillá primero el ORIGINAL (Cancillería TAD o Colegio de Escribanos, según corresponda).',
    'Traducción pública (inglés ↔ español).',
    'Legalización del CTPCBA de la firma y el sello de la traductora.',
    'Si la legalización del Colegio viaja al exterior: el/la cliente puede apostillarla por TAD (la llamada “segunda apostilla”).',
  ],
  resourcesTitle: 'Enlaces oficiales',
  ctpcbaSearch: 'Buscador del CTPCBA y aranceles mínimos',
  cancilleriaApostille: 'Apostilla TAD – Ministerio de Relaciones Exteriores',
  quoteTitle: 'Honorarios y cotización',
  quoteBody:
    'Trabajo con los aranceles mínimos sugeridos por el CTPCBA. No copio aquí las grillas oficiales porque cambian con el tiempo. Para cotizar, enviá escaneos o PDFs legibles del documento (y de sus legalizaciones) por el formulario. La cotización es sin cargo.',
  crossTitle: 'Leé también',
  crossA: 'Partidas de nacimiento y matrimonio: traducción pública EN↔ES en CABA',
  crossB: 'Títulos universitarios, diplomas y analíticos: traducción pública EN↔ES',
  cta: 'Solicitar cotización gratuita',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation, CTPCBA legalization and apostille: order of steps in Argentina',
  intro:
    'In Argentina, the legal figure is the “traducción pública” (Law 20.305). Sworn translations are performed by licensed sworn translators and certified with signature and seal. The CTPCBA legalizes that signature and seal. If the document—or the Association’s legalization—will be used abroad, it may require apostille via TAD. Here is a practical guide.',
  publicVsSwornTitle: '“Pública” in Argentina vs “jurada” in Spain',
  publicVsSwornBody:
    'Argentina uses the term “traducción pública” (Law 20.305, CTPCBA in Buenos Aires). “Traducción jurada” is the term used in Spain (MAEC). Both have legal effect but are different credentials. I am registered with the CTPCBA (not MAEC) for EN↔ES.',
  publicVsSimpleTitle: 'Public (sworn) vs simple translations',
  publicVsSimpleBody:
    'A public (sworn) translation is required when filing before public bodies or where legal validity is needed. It bears the translator’s signature and seal and, where applicable, CTPCBA legalization. A simple translation is for private or informational use and does not require legalization.',
  whatCtpcbaTitle: 'What does the CTPCBA certify?',
  whatCtpcbaBody:
    'The CTPCBA certifies the authenticity of the translator’s signature and seal. It does not certify the facts stated in the document. Legalization may be digital (with online verification) or on paper.',
  orderTitle: 'Suggested order of steps',
  orderSteps: [
    'If the Argentine document goes abroad: apostille the ORIGINAL first (Ministry of Foreign Affairs TAD platform or Notaries Association, as applicable).',
    'Sworn translation (English ↔ Spanish).',
    'CTPCBA legalization of the translator’s signature and seal.',
    'If the Association’s legalization is used abroad: the client may apostille it via TAD (the “second apostille”).',
  ],
  resourcesTitle: 'Official links',
  ctpcbaSearch: 'CTPCBA search and minimum tariffs',
  cancilleriaApostille: 'Apostille TAD – Ministry of Foreign Affairs',
  quoteTitle: 'Fees and quotes',
  quoteBody:
    'I follow CTPCBA minimum tariffs. I do not reproduce the official grids here since they change over time. For a quote, please send clear scans or PDFs of the document (and legalizations) via the form. Quotes are free.',
  crossTitle: 'Related reading',
  crossA: 'Birth and marriage certificates: sworn translation EN↔ES in Buenos Aires',
  crossB: 'University degrees, diplomas and transcripts: sworn translation EN↔ES',
  cta: 'Request a free quote',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function TramiteOrdenCtpcbaContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-publica-legalizacion-ctpcba';
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

      <h2 className="heading-3 mt-10">{t.publicVsSwornTitle}</h2>
      <p className="text-gray-700">{t.publicVsSwornBody}</p>

      <h2 className="heading-3 mt-10">{t.publicVsSimpleTitle}</h2>
      <p className="text-gray-700">{t.publicVsSimpleBody}</p>

      <h2 className="heading-3 mt-10">{t.whatCtpcbaTitle}</h2>
      <p className="text-gray-700">{t.whatCtpcbaBody}</p>

      <h2 className="heading-3 mt-10">{t.orderTitle}</h2>
      <ol className="list-decimal pl-6 text-gray-700">
        {t.orderSteps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <h2 className="heading-3 mt-10">{t.resourcesTitle}</h2>
      <ul className="list-disc pl-6">
        <li>
          <a
            href="https://www.traductores.org.ar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunflower-700 underline"
          >
            {t.ctpcbaSearch}
          </a>
        </li>
        <li>
          <a
            href="https://www.argentina.gob.ar/cancilleria/servicios/apostilla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sunflower-700 underline"
          >
            {t.cancilleriaApostille}
          </a>
        </li>
      </ul>

      <h2 className="heading-3 mt-10">{t.quoteTitle}</h2>
      <p className="text-gray-700">{t.quoteBody}</p>

      <div className="mt-10">
        <a href="/#contact" className="btn-primary">
          {t.cta}
        </a>
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
            href="/traduccion-titulo-universitario-analitico"
          >
            {t.crossB}
          </Link>
        </li>
      </ul>
    </article>
  );
}

