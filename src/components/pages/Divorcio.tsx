/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de sentencia de divorcio (inglés ↔ español) en CABA',
  intro:
    'Para contraer nuevas nupcias, trámites de ciudadanía/inmigración y actualizaciones ante el Registro Civil (CABA), a menudo se requiere la traducción pública de la sentencia de divorcio o, según el caso, del acta de matrimonio con anotación marginal de divorcio. La traducción debe ser realizada por una traductora pública matriculada (firma y sello). A pedido, se puede gestionar la legalización ante el CTPCBA.',
  whenTitle: '¿Qué documento se traduce en cada caso?',
  whenList: [
    'Sentencia de divorcio: suele requerirse para trámites judiciales y algunos procesos de inmigración/ciudadanía.',
    'Acta de matrimonio con anotación marginal de divorcio: en ciertos trámites registrales puede bastar traducir esa hoja.',
    'Siempre confirme con el organismo de destino cuál documento corresponde presentar. Esta página brinda orientación práctica, no asesoramiento legal.',
  ],
  docsTitle: 'Formato y envío para cotización',
  docsBody:
    'Para un presupuesto preciso, envíe escaneos nítidos o PDFs legibles de la sentencia completa (con sellos/firmas y legalizaciones) o del acta con la nota marginal, según corresponda. Si hubiera apostilla o legalizaciones previas, incluya esas páginas.',
  abroadTitle: '¿Circula en el exterior? Orden sugerido del trámite',
  abroadBody:
    '1) Apostilla del ORIGINAL emitida por la autoridad competente del país emisor (en Argentina, Cancillería mediante TAD o, según el caso, el Colegio de Escribanos). 2) Traducción pública EN↔ES. 3) Opcional: legalización de la firma y del sello de la traductora ante el CTPCBA si la institución de destino lo solicita. La apostilla no se vende; la emite siempre la autoridad competente.',
  abroadLinksIntro: 'Recursos oficiales:',
  ctpcbaLegal:
    'La legalización del CTPCBA certifica la firma y el sello de la traductora pública, no el contenido de la sentencia ni de la anotación marginal. Puede ser digital (con verificación online) u ológrafa (en papel).',
  quoteTitle: 'Cómo solicitar una cotización',
  quoteBody:
    'Cargue imágenes o PDFs a través del formulario, indicando el país y el organismo de destino y si requiere legalización CTPCBA. La cotización es sin cargo y los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  postCtaNote: 'En el formulario, seleccione “Documentos Personales”.',
  crossTitle: 'Páginas relacionadas',
  crossA: 'Partidas de nacimiento y matrimonio (anotación marginal)',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of divorce judgments/decrees (EN↔ES) in Buenos Aires',
  intro:
    'For remarriage, citizenship/immigration and Civil Registry updates (CABA), a sworn translation is often required either of the divorce judgment/decree or, in some cases, of the marriage certificate bearing the marginal divorce annotation. Translations are prepared by a duly licensed sworn translator (signature and seal). Upon request, CTPCBA legalization can be arranged.',
  whenTitle: 'Which document is translated?',
  whenList: [
    'Divorce judgment/decree: commonly requested for court-related procedures and some immigration/citizenship processes.',
    'Marriage certificate with marginal divorce annotation: in certain registry procedures, translating that annotated page may suffice.',
    'Always confirm with the receiving authority which document applies. This page provides practical guidance, not legal advice.',
  ],
  docsTitle: 'File format for quoting',
  docsBody:
    'For an accurate quote, please send clear scans or readable PDFs of the full judgment (with stamps/seals and legalizations) or the marriage certificate with the marginal note, as applicable. Include any prior legalizations or apostille.',
  abroadTitle: 'Used abroad: recommended order of steps',
  abroadBody:
    '1) Apostille the ORIGINAL issued by the competent authority in the issuing country (in Argentina, the Ministry of Foreign Affairs via TAD or, as applicable, the Notaries Association). 2) Sworn EN↔ES translation. 3) Optional: CTPCBA legalization of the translator’s signature and seal if required by the receiving institution. Apostilles are issued by the competent authority; translators do not sell apostille services.',
  abroadLinksIntro: 'Official resources:',
  ctpcbaLegal:
    'CTPCBA legalization certifies the translator’s signature and seal, not the content of the judgment or the marginal annotation. It may be digital (with online verification) or on paper.',
  quoteTitle: 'Requesting a quote',
  quoteBody:
    'Upload images or PDFs via the form, indicate the country and receiving authority, and whether CTPCBA legalization is requested. Quotes are free and professional fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  postCtaNote: 'Select “Personal Documents” in the form.',
  crossTitle: 'Related pages',
  crossA: 'Birth and marriage certificates (marginal annotations)',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function DivorcioContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url = 'https://www.ml-traducciones.com/traduccion-sentencia-divorcio';
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

      <h2 className="heading-3 mt-10">{t.whenTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.whenList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsBody}</p>

      <h2 className="heading-3 mt-10">{t.abroadTitle}</h2>
      <p className="text-gray-700 whitespace-pre-line">{t.abroadBody}</p>
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

