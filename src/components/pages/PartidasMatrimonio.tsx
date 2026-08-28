/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de partidas de nacimiento y matrimonio (inglés ↔ español) en CABA',
  intro:
    'Si tenés que presentar una partida de nacimiento o de matrimonio en la Argentina o en el exterior, necesitás una traducción pública: realizada por una traductora pública matriculada que certifica su fidelidad con firma y sello. Trabajo del inglés al español y del español al inglés, con legalización ante el CTPCBA a pedido.',
  whenTitle: '¿Cuándo se requiere traducción pública?',
  whenList: [
    'Trámites de migraciones, ciudadanía y visas.',
    'Matrimonio, divorcio, adopción o inscripción de hijos nacidos en el exterior.',
    'Inscripción escolar o universitaria, becas o beneficios.',
    'Gestiones ante registros civiles, juzgados u organismos públicos.',
  ],
  docsTitle: 'Documentación y formato',
  docsBody:
    'Para cotizar con precisión, enviá escaneos nítidos o fotos legibles de las partidas completas (anverso y reverso si corresponde). Si hay apostilla o legalizaciones previas, incluí esas páginas también. Las partidas digitales con firma y validación electrónica también se traducen con su verificación.',
  abroadTitle: '¿El documento va al exterior? Orden del trámite (apostilla y legalización)',
  abroadBody:
    'Si la partida se va a presentar fuera de la Argentina, primero se apostilla el ORIGINAL en el país emisor (en Argentina, a través de la Cancillería por TAD o en el Colegio de Escribanos según el caso). Luego se realiza la traducción pública y, si lo necesitás, gestiono la legalización de mi firma y sello ante el CTPCBA. Recordá que la apostilla la emite la autoridad competente; yo no vendo apostillas.',
  abroadLinksIntro: 'Recursos oficiales:',
  ctpcbaLegal:
    'Legalización del CTPCBA: certifica la firma y el sello de la traductora, no el contenido del documento. Puede ser digital (con verificación online) u ológrafa (en papel).',
  verifyTitle: 'Cómo verificar la matrícula',
  verifyBody:
    'En la página principal vas a encontrar el código QR del CTPCBA para verificar la matrícula activa. También podés buscar por nombre y matrícula en el sitio del Colegio.',
  quoteTitle: '¿Cómo pido una cotización?',
  quoteBody:
    'Enviá las imágenes o PDFs por el formulario con tu nombre, email y una breve descripción del trámite. Respondé con claridad si necesitás legalización del CTPCBA. Las partidas suelen cotizarse por foja. Las cotizaciones son sin cargo y los honorarios siguen los aranceles mínimos del CTPCBA.',
  deathNote:
    'Nota: también traduzco partidas de defunción cuando corresponda al trámite. Consultame por tu caso puntual.',
  cta: 'Solicitar cotización gratuita',
  crossTitle: 'Otras páginas que te pueden servir',
  crossA: 'Traducción pública de título universitario y certificado analítico',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of birth and marriage certificates (English ↔ Spanish) in Buenos Aires',
  intro:
    'If you need to submit a birth or marriage certificate in Argentina or abroad, you will need a sworn translation (traducción pública): prepared by a duly licensed sworn translator who certifies accuracy with signature and seal. I work EN↔ES and can handle CTPCBA legalization of my signature upon request.',
  whenTitle: 'When is a sworn translation required?',
  whenList: [
    'Immigration processes, citizenship and visas.',
    'Marriage, divorce, adoption or registering children born abroad.',
    'School or university enrollment, grants and benefits.',
    'Filings before civil registries, courts or public agencies.',
  ],
  docsTitle: 'Documents and format',
  docsBody:
    'For an accurate quote, please send clear scans or readable photos of the full certificates (front and back where applicable). If there is an apostille or prior legalizations, include those pages too. Digital certificates with electronic signature/verification can also be translated with their validation.',
  abroadTitle: 'Documents going abroad: order of steps (apostille and legalization)',
  abroadBody:
    'If the certificate will be used outside Argentina, apostille the ORIGINAL first in the issuing country (in Argentina, via the Ministry of Foreign Affairs TAD platform or, in some cases, through the Notaries Association). The sworn translation comes afterward and, if needed, I can arrange CTPCBA legalization of my signature and seal. Apostilles are issued by the competent authority; I do not sell apostille services.',
  abroadLinksIntro: 'Official resources:',
  ctpcbaLegal:
    'CTPCBA legalization certifies the translator’s signature and seal, not the facts stated in the document. It may be digital (with online verification) or on paper.',
  verifyTitle: 'How to verify credentials',
  verifyBody:
    'On the homepage you will find a CTPCBA QR code to verify the active registration. You can also search by name and license on the Association’s website.',
  quoteTitle: 'How to request a quote',
  quoteBody:
    'Upload images or PDFs via the form with your name, email and a brief description. Please indicate whether you require CTPCBA legalization. Certificates are usually priced per page. Quotes are free and professional fees follow CTPCBA minimum tariffs.',
  deathNote:
    'Note: I also translate death certificates when required by the process. Feel free to ask about your specific case.',
  cta: 'Request a free quote',
  crossTitle: 'You may also find these useful',
  crossA: 'Sworn translation of university degrees and transcripts',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function PartidasMatrimonioContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-partida-nacimiento-matrimonio';
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

      <h2 className="heading-3 mt-10">{t.whenTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.whenList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsBody}</p>

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

      <h2 className="heading-3 mt-10">{t.verifyTitle}</h2>
      <p className="text-gray-700">{t.verifyBody}</p>

      <p className="text-gray-700 mt-6 italic">{t.deathNote}</p>

      <div className="mt-10">
        <a href="/#contact" className="btn-primary">
          {t.cta}
        </a>
        <p className="text-sm text-gray-600 mt-2">
          {language === 'en'
            ? 'Select “Personal Documents” in the form.'
            : 'En el formulario, elegí “Documentos Personales”.'}
        </p>
      </div>

      <hr className="my-10" />
      <h3 className="heading-4 mb-4">{t.crossTitle}</h3>
      <ul className="list-disc pl-6">
        <li>
          <Link
            className="text-sunflower-700 underline"
            href="/traduccion-titulo-universitario-analitico"
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

