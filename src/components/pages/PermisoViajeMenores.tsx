/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de autorización/permiso de viaje de menores (inglés ↔ español)',
  intro:
    'Traducciones públicas EN↔ES de autorizaciones y consentimientos para viaje de menores (formularios de aerolíneas, poderes ante escribano, modelos consulares y civiles). Trabajo con firma y sello de traductora pública matriculada (CTPCBA). A pedido, puede gestionarse la legalización del CTPCBA de la firma y el sello.',
  whenTitle: '¿Cuándo se requiere traducción pública?',
  whenList: [
    'Cuando el formulario de autorización es extranjero o está en otro idioma (EN↔ES).',
    'Cuando la autorización se presenta ante organismos en el exterior o ante consulados.',
    'Cuando el destinatario exige traducción pública (aerolíneas, migraciones, juzgados).',
    'Cuando se requiere acompañar la autorización con documentación respaldatoria (por ej., partida de nacimiento).',
  ],
  docsTitle: 'Documentación y formato',
  docsBody:
    'Para cotizar, envíe escaneos nítidos o PDFs del formulario completo (anverso y dorso si corresponde), identificaciones de madre/padre/tutor y cualquier indicación del destinatario. Si le solicitaron partida de nacimiento como respaldo, también puedo traducirla.',
  abroadTitle: 'Uso en el exterior o formularios extranjeros: orden del trámite',
  abroadBody:
    'Cuando el documento va a circular fuera de la Argentina, primero se apostilla el ORIGINAL en el país emisor (en Argentina, Cancillería por TAD o, según el caso, Colegio de Escribanos). Luego se realiza la traducción pública EN↔ES y, si lo solicita el destinatario, puede gestionarse la legalización del CTPCBA de la firma y el sello de la traductora.',
  noteApostille:
    'La apostilla siempre la emite la autoridad competente. No se comercializan apostillas; se realiza la traducción y, a pedido, la legalización de firma ante el CTPCBA.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'La cotización suele ser por foja. Envíe los archivos legibles y detalle país de destino y requisitos del organismo. Cotización sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Personales”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Partidas de nacimiento y matrimonio: traducción pública EN↔ES en CABA',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of parental travel authorizations for minors (English ↔ Spanish)',
  intro:
    'EN↔ES sworn translations of parental travel authorizations and consent forms for minors (airline forms, notarial powers, consular/civil templates). Performed by a duly licensed sworn translator (CTPCBA). Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  whenTitle: 'When is a sworn translation required?',
  whenList: [
    'When the authorization form is foreign or in another language (EN↔ES).',
    'When filing abroad or before consulates/authorities outside Argentina.',
    'When the recipient requires a sworn translation (airlines, immigration, courts).',
    'When supporting documents are needed (e.g., a birth certificate).',
  ],
  docsTitle: 'Documents and format',
  docsBody:
    'For an accurate quote, please send clear scans or PDFs of the full form (front/back where applicable), IDs for the parents/guardians, and any recipient requirements. If a birth certificate is required as support, I can translate that as well.',
  abroadTitle: 'For use abroad or foreign forms: order of steps',
  abroadBody:
    'If the document will circulate outside Argentina, apostille the ORIGINAL first in the issuing country (in Argentina, via the Ministry of Foreign Affairs TAD platform or, where applicable, the Notaries Association). The sworn EN↔ES translation follows; if requested, I can arrange CTPCBA legalization of my signature and seal.',
  noteApostille:
    'Apostilles are always issued by the competent authority. I do not sell apostille services; I provide translations and can manage CTPCBA legalization of my signature upon request.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Pricing is typically per page. Please share readable files and specify destination country and recipient requirements. Quotes are free and fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Personal Documents” in the form.',
  crossTitle: 'You may also like',
  crossA: 'Birth and marriage certificates: sworn translation EN↔ES in Buenos Aires',
  crossALink: '/traduccion-partida-nacimiento-matrimonio',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function PermisoViajeMenoresContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-permiso-viaje-menores';
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
      <ul className="list-disc pl-6 text-gray-700">
        {t.whenList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsBody}</p>

      <h2 className="heading-3 mt-10">{t.abroadTitle}</h2>
      <p className="text-gray-700">{t.abroadBody}</p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.noteApostille}</p>
      </div>

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

