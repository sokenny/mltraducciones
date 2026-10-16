/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de pasaporte, DNI y documentos de identidad (inglés ↔ español)',
  intro:
    'Traducciones públicas EN↔ES de pasaportes, DNI, cédulas y licencias/ID cuando corresponde. Trabajo con firma y sello de traductora pública matriculada (CTPCBA). A pedido, puede gestionarse la legalización del CTPCBA de la firma y el sello.',
  whenTitle: '¿Cuándo se requiere traducción pública?',
  whenList: [
    'Para trámites de visados, bancos, universidades y autoridades del exterior.',
    'Cuando la autoridad receptora así lo exige (consulados, migraciones, juzgados).',
    'Cuando el documento es extranjero o está en otro idioma (EN↔ES).',
  ],
  docsTitle: 'Documentación y recomendaciones',
  docsBody:
    'Para cotizar, envíe escaneos nítidos o PDFs del documento completo (anverso y dorso si corresponde). Indique país/autoridad de destino y requisitos de presentación (cantidad de copias, formato, si piden legalización CTPCBA).',
  notaryTitle: 'Copias certificadas y apostilla: orden del trámite',
  notaryBody:
    'Por práctica habitual de Cancillería, cuando se apostilla copia de DNI / pasaporte, primero debe certificarse la copia ante escribano/colegio de escribanos. Luego se apostilla el ORIGINAL (o la copia certificada, según el caso) por la autoridad competente. Después se realiza la traducción pública EN↔ES y, si el destinatario lo pide, puede gestionarse la legalización del CTPCBA de la firma y el sello de la traductora.',
  noteApostille:
    'La apostilla siempre la emite la autoridad competente (en Argentina, Cancillería por TAD o, según el caso, el Colegio de Escribanos). No se comercializan apostillas; se realiza la traducción y, a pedido, la legalización de firma ante el CTPCBA.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'La cotización suele ser por foja. Envíe los archivos legibles y detalle país de destino y requisitos del organismo. Cotización sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Personales”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de antecedentes penales (RNR) — EN↔ES',
  crossBLink: '/traduccion-antecedentes-penales',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of passports, national IDs and identity documents (English ↔ Spanish)',
  intro:
    'EN↔ES sworn translations of passports, national IDs, ID cards and driver’s licenses where applicable. Performed by a duly licensed sworn translator (CTPCBA). Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  whenTitle: 'When is a sworn translation required?',
  whenList: [
    'For visas, banking, university admissions, and foreign authorities.',
    'When the receiving body requires it (consulates, immigration, courts).',
    'When the document is foreign or in another language (EN↔ES).',
  ],
  docsTitle: 'Documents and guidance',
  docsBody:
    'For an accurate quote, please send clear scans or PDFs of the full document (front/back if applicable). Share the destination country/authority and any filing requirements (number of copies, format, whether CTPCBA legalization is requested).',
  notaryTitle: 'Certified copies and apostille: order of steps',
  notaryBody:
    'As a common practice at the Argentine Ministry of Foreign Affairs, when apostilling a copy of a DNI/passport, the copy is typically notarized first (notary public/notaries association). Then the ORIGINAL (or the certified copy, as applicable) is apostilled by the competent authority. After that, the sworn EN↔ES translation is produced and, if required by the recipient, CTPCBA legalization of the translator’s signature and seal can be arranged.',
  noteApostille:
    'Apostilles are always issued by the competent authority (in Argentina, via the Ministry of Foreign Affairs TAD platform or, where applicable, the Notaries Association). I do not sell apostille services; I provide translations and can arrange CTPCBA legalization of my signature upon request.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Pricing is typically per page. Please share readable files and specify destination country and recipient requirements. Quotes are free and fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Personal Documents” in the form.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of criminal record certificates (RNR) — EN↔ES',
  crossBLink: '/traduccion-antecedentes-penales',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function PasaporteDniIdentidadContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-pasaporte-dni-identidad';
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

      <h2 className="heading-3 mt-10">{t.notaryTitle}</h2>
      <p className="text-gray-700">{t.notaryBody}</p>

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

