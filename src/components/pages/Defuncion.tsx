/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de partida/acta de defunción (inglés ↔ español) en CABA',
  intro:
    'Para sucesiones, seguros, inscripciones consulares/Registro Civil de defunciones ocurridas en el exterior y otros trámites familiares, con frecuencia se solicita la traducción pública de la partida o acta de defunción. La traducción debe ser realizada por una traductora pública matriculada (firma y sello). A pedido, puede gestionarse la legalización de la firma y del sello ante el CTPCBA.',
  whenTitle: '¿Cuándo se requiere traducción pública?',
  whenList: [
    'Sucesiones y procesos judiciales vinculados.',
    'Reclamos o pólizas de seguros.',
    'Inscripción de defunciones extranjeras en el Registro Civil o ante consulados.',
    'Gestiones bancarias y previsionales.',
  ],
  docsTitle: 'Formato y envío para cotización',
  docsBody:
    'Para cotizar con precisión, envíe escaneos nítidos o fotos legibles del acta completa (anverso y reverso si corresponde). Si fue emitida digitalmente (con firma o validación electrónica), incluya también la página de verificación. Adjunte toda legalización previa o apostilla, si la hubiera.',
  abroadTitle: '¿El documento se usará en el exterior? Orden sugerido del trámite',
  abroadBody:
    '1) Apostilla del ORIGINAL emitida por la autoridad competente del país emisor (en Argentina, Cancillería mediante TAD o, según el caso, el Colegio de Escribanos). 2) Traducción pública EN↔ES. 3) Opcional: legalización de la firma y del sello de la traductora ante el CTPCBA si la institución de destino lo solicita. La apostilla siempre la emite la autoridad competente; no se comercializan apostillas.',
  abroadLinksIntro: 'Recursos oficiales:',
  ctpcbaLegal:
    'La legalización del CTPCBA certifica la firma y el sello de la traductora pública, no el contenido del documento. Puede ser digital (con verificación online) u ológrafa (en papel).',
  verifyTitle: 'Verificar matrícula',
  verifyBody:
    'En la página principal encontrará el código QR para verificar la matrícula activa en el CTPCBA. También puede buscar por nombre y matrícula en el sitio del Colegio.',
  quoteTitle: 'Cómo solicitar una cotización',
  quoteBody:
    'Cargue imágenes o PDFs a través del formulario, con su nombre, email y una breve descripción del trámite (país y organismo de destino). Indique si requiere legalización CTPCBA. La cotización es sin cargo y los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  postCtaNote: 'En el formulario, seleccione “Documentos Personales”.',
  crossTitle: 'Puede interesarle también',
  crossA: 'Traducción pública de partidas de nacimiento y matrimonio',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of death certificates (English ↔ Spanish) in Buenos Aires',
  intro:
    'For probate/succession matters, insurance claims, and registering foreign death records at consulates or the Civil Registry, a sworn translation of the death certificate is often required. The translation must be prepared by a duly licensed sworn translator (signature and seal). Upon request, CTPCBA legalization of the translator’s signature and seal can be arranged.',
  whenTitle: 'When is a sworn translation required?',
  whenList: [
    'Probate/succession and related court filings.',
    'Insurance claims.',
    'Consular/Civil Registry inscription of foreign death records.',
    'Banking and social security procedures.',
  ],
  docsTitle: 'File format for quoting',
  docsBody:
    'For an accurate quote, please send clear scans or readable photos of the full record (front and back where applicable). If it was issued digitally (with electronic signature/verification), include the verification page. Attach any prior legalizations or apostille, if available.',
  abroadTitle: 'Documents used abroad: recommended order of steps',
  abroadBody:
    '1) Apostille the ORIGINAL issued by the competent authority in the issuing country (in Argentina, the Ministry of Foreign Affairs via TAD or, in some cases, the Notaries Association). 2) Sworn EN↔ES translation. 3) Optional: CTPCBA legalization of the translator’s signature and seal if the receiving institution requires it. Apostilles are issued by the competent authority; translators do not sell apostille services.',
  abroadLinksIntro: 'Official resources:',
  ctpcbaLegal:
    'CTPCBA legalization certifies the translator’s signature and seal, not the content of the document. It may be digital (with online verification) or on paper.',
  verifyTitle: 'Verifying credentials',
  verifyBody:
    'On the homepage you will find a CTPCBA QR code to verify the active registration. You can also search by name and license on the Association’s website.',
  quoteTitle: 'Requesting a quote',
  quoteBody:
    'Upload images or PDFs via the form with your name, email and a brief description (country and receiving authority). Indicate whether you require CTPCBA legalization. Quotes are free and professional fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  postCtaNote: 'Select “Personal Documents” in the form.',
  crossTitle: 'You may also find these useful',
  crossA: 'Sworn translation of birth and marriage certificates',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function DefuncionContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url = 'https://www.ml-traducciones.com/traduccion-partida-defuncion';
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

