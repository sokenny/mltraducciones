/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de licencia de conducir extranjera y certificado de legalidad (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de licencias de conducir extranjeras y certificados de legalidad para canje o renovación en CABA, y de licencias argentinas/certificados al inglés para uso en el exterior. Trabajo con firma y sello de traductora pública matriculada (CTPCBA).',
  guidanceTitle: 'Requisitos habituales y recomendaciones',
  guidanceList: [
    'Según normativa y comunicaciones públicas de CABA (Boletín Oficial, DGHC), la documentación extranjera suele requerir apostilla o validación consular.',
    'Los documentos emitidos en otro idioma deben presentarse con traducción hecha por traductor/a público/a nacional.',
    'En algunos casos, el permiso internacional de conducir puede suplir o complementar el certificado de legalidad (verifique con el organismo).',
    'Confirme SIEMPRE los requisitos vigentes con la sede/organismo donde presenta el trámite.',
  ],
  scopeTitle: 'Alcance del servicio',
  scopeBody:
    'Traducciones públicas EN↔ES de licencias y certificados de legalidad. A pedido del organismo receptor, puede gestionarse la legalización del CTPCBA de mi firma y sello. La apostilla SIEMPRE la tramita el/la cliente ante la autoridad competente del país emisor o mediante su consulado; no ofrezco servicio de apostilla.',
  directionsTitle: 'Ambos sentidos',
  directionsList: [
    'Licencia de conducir extranjera y certificado de legalidad → traducción pública al español para canje/renovación en CABA.',
    'Licencia de conducir argentina y certificado de legalidad → traducción pública al inglés para presentar en EE.UU., Reino Unido, Canadá, Australia, etc.',
  ],
  docsTitle: 'Cómo cotizar rápido',
  docsBody:
    'Envíe escaneos nítidos o PDFs del documento completo (anverso y dorso si corresponde) y detalle país/autoridad de destino, requisitos de presentación (formato, cantidad de copias) y si solicitan legalización CTPCBA.',
  noteApostille:
    'La apostilla la emite la autoridad competente del país de origen (o el consulado). No comercializo apostillas; realizo traducciones públicas EN↔ES y, si corresponde, la legalización del CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná “Documentos Personales”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de pasaporte, DNI e identidad — EN↔ES',
  crossBLink: '/traduccion-pasaporte-dni-identidad',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of foreign driver’s licenses and certificates of legal status (English ↔ Spanish)',
  intro:
    'EN↔ES sworn translations of foreign driver’s licenses and certificates of legal status for exchange/renewal in Buenos Aires, and of Argentine licenses/certificates into English for use abroad. Performed by a licensed sworn translator (CTPCBA).',
  guidanceTitle: 'Common requirements and guidance',
  guidanceList: [
    'Per City of Buenos Aires publications (Official Gazette, DGHC), foreign documents typically require apostille or consular validation.',
    'Documents in another language must be translated by a national sworn translator.',
    'In some cases, the International Driving Permit may serve as or complement the certificate of legal status (confirm with the authority).',
    'ALWAYS verify current requirements with the specific office/authority handling your filing.',
  ],
  scopeTitle: 'Service scope',
  scopeBody:
    'Sworn EN↔ES translations of licenses and certificates of legal status. If required by the recipient, CTPCBA legalization of my signature and seal can be arranged. Apostilles are ALWAYS obtained by the client from the competent authority in the issuing country (or via its consulate); I do not offer apostille services.',
  directionsTitle: 'Both directions',
  directionsList: [
    'Foreign driver’s license and certificate of legal status → sworn translation into Spanish for exchange/renewal in Buenos Aires.',
    'Argentine driver’s license and certificate of legal status → sworn translation into English for use in the U.S., UK, Canada, Australia, etc.',
  ],
  docsTitle: 'How to get a fast quote',
  docsBody:
    'Please send clear scans or PDFs of the full document (front/back if applicable) and include the destination country/authority, filing requirements (format, number of copies) and whether CTPCBA legalization is requested.',
  noteApostille:
    'Apostilles are issued by the competent authority in the issuing country (or the consulate). I do not sell apostilles; I provide EN↔ES sworn translations and, if applicable, CTPCBA legalization.',
  cta: 'Request a free quote',
  ctaHint: 'In the form, select “Personal Documents”.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of passports and IDs — EN↔ES',
  crossBLink: '/traduccion-pasaporte-dni-identidad',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function LicenciaConducirExtranjeraContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-licencia-conducir-extranjera';
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

      <h2 className="heading-3 mt-10">{t.guidanceTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.guidanceList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.scopeTitle}</h2>
      <p className="text-gray-700">{t.scopeBody}</p>

      <h2 className="heading-3 mt-10">{t.directionsTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.directionsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

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

