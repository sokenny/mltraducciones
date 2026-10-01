/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de certificado de soltería / estado civil (inglés ↔ español)',
  intro:
    'Traducciones públicas EN↔ES de certificados de soltería/estado civil para matrimonio en el exterior, trámites ante embajadas/consulados y presentaciones civiles. Traductora pública matriculada (CTPCBA). A pedido, legalización de firma y sello ante el CTPCBA.',
  whenTitle: 'Usos habituales',
  whenList: [
    'Matrimonio en el exterior o ante consulados en la Argentina.',
    'Acreditación de estado civil ante organismos públicos y privados.',
    'Trámites migratorios y de residencia.',
  ],
  docsTitle: 'Documentación y formato',
  docsBody:
    'Para cotizar con precisión, envíe el certificado completo (anverso y dorso si corresponde) y cualquier declaración jurada o constancia relacionada. Incluya apostillas o legalizaciones previas si existen. Documentos digitales con firma/verificación electrónica también se traducen con su validación.',
  abroadTitle: 'Orden del trámite cuando interviene el exterior',
  abroadBody:
    'Primero se apostilla el ORIGINAL por la autoridad competente (en Argentina, Cancillería por TAD o, según el caso, Colegio de Escribanos). Luego se realiza la traducción pública EN↔ES. Si el destinatario lo exige, se puede gestionar la legalización del CTPCBA de la firma y el sello de la traductora.',
  noteApostille:
    'La apostilla la emite siempre la autoridad competente. No se comercializan apostillas; se realiza la traducción y, a pedido, la legalización del CTPCBA.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'La cotización suele ser por foja. Indique país/organismo de destino y requisitos de presentación (copias certificadas, cantidad de ejemplares). Cotización sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
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
  h1: 'Sworn translation of certificates of single status / civil status (English ↔ Spanish)',
  intro:
    'EN↔ES sworn translations of certificates of single status/civil status for marriage abroad, consular procedures and civil filings. Performed by a duly licensed sworn translator (CTPCBA). Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  whenTitle: 'Common uses',
  whenList: [
    'Marriage abroad or at consulates in Argentina.',
    'Proving civil status before public or private bodies.',
    'Immigration and residency procedures.',
  ],
  docsTitle: 'Documents and format',
  docsBody:
    'For an accurate quote, please send the full certificate (front/back where applicable) and any related affidavits or records. Include any apostilles or prior legalizations. Digital documents with electronic signature/verification can also be translated with their validation.',
  abroadTitle: 'Order of steps when used abroad',
  abroadBody:
    'Apostille the ORIGINAL first with the competent authority (in Argentina, the Ministry of Foreign Affairs via TAD or, where applicable, the Notaries Association). Next comes the sworn EN↔ES translation. If required by the recipient, I can arrange CTPCBA legalization of my signature and seal.',
  noteApostille:
    'Apostilles are issued by the competent authority. I do not sell apostille services; I provide translations and can manage CTPCBA legalization upon request.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Pricing is typically per page. Please indicate the destination country/authority and any filing requirements (certified copies, number of sets). Quotes are free and fees follow CTPCBA minimum tariffs.',
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

export default function CertificadoSolteriaContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-certificado-solteria-estado-civil';
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

