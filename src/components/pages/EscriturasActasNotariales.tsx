/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de escrituras y actas notariales (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de escrituras y actas de escribano: compraventa, hipotecas, certificaciones y diligencias notariales. Trabajo con firma y sello de traductora pública matriculada (CTPCBA). A pedido, puede gestionarse la legalización del CTPCBA de la firma y el sello.',
  scopeNote:
    'Esta página complementa las de poderes/estatutos y contratos, sin duplicarlas. Si su documento es un poder, estatuto o contrato, consulte esas guías específicas.',
  typesTitle: 'Documentos habituales',
  typesList: [
    'Escrituras de compraventa e hipoteca.',
    'Actas notariales (presencia, constatación, notificación).',
    'Certificaciones y testimonios notariales.',
    'Protocolizaciones y copias certificadas.',
  ],
  docsTitle: 'Qué enviar para cotizar',
  docsBody:
    'Envíe el documento completo (escaneo nítido/PDF) e indique organismo de destino y requisitos (si solicitan legalización CTPCBA, cantidad de copias o formato).',
  abroadTitle: 'Uso en el exterior: orden del trámite',
  abroadBody:
    'Orden sugerido: (1) Apostillar el ORIGINAL por la autoridad competente (en Argentina, Cancillería por TAD o, según el caso, Colegio de Escribanos). (2) Traducción pública EN↔ES. (3) Opcional: legalización del CTPCBA de la firma y el sello de la traductora si el destinatario lo requiere. La apostilla no se vende; la emite la autoridad competente.',
  ctpcbaNote:
    'El CTPCBA certifica la firma y el sello de la traductora pública, no el contenido del documento. Puede ser digital (con verificación) u ológrafa (papel).',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'Cotización sin cargo. Honorarios por foja según aranceles mínimos sugeridos por el CTPCBA. Indique país/organismo de destino y plazos deseados.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Legales / Societarios”.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública de poderes y estatutos societarios',
  crossALink: '/traduccion-poderes-estatutos-societarios',
  crossB: 'Traducción pública de contratos',
  crossBLink: '/traduccion-contratos',
  crossC: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossCLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of notarial deeds and acts (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translation of notarial deeds and acts: sale/purchase, mortgages, certificates and notarial proceedings. Performed by a duly licensed sworn translator (CTPCBA). Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  scopeNote:
    'This page complements the powers/bylaws and contracts pages without duplicating them. For powers of attorney, bylaws or contracts, see those dedicated guides.',
  typesTitle: 'Common documents',
  typesList: [
    'Deeds of sale/purchase and mortgage deeds.',
    'Notarial acts (presence, findings/statements, notices).',
    'Notarial certificates and testimonies.',
    'Protocolizations and certified copies.',
  ],
  docsTitle: 'What to send for a quote',
  docsBody:
    'Please share the full document (clear scan/PDF) and specify the receiving body and requirements (whether CTPCBA legalization is requested, number of copies or format).',
  abroadTitle: 'For use abroad: order of steps',
  abroadBody:
    'Suggested order: (1) Apostille the ORIGINAL by the competent authority (in Argentina, the Ministry of Foreign Affairs via TAD or, where applicable, the Notaries Association). (2) Sworn EN↔ES translation. (3) Optional: CTPCBA legalization of the translator’s signature and seal if requested by the recipient. Apostilles are not sold; they are issued by the competent authority.',
  ctpcbaNote:
    'CTPCBA legalization certifies the translator’s signature and seal, not the content of the document. Digital (with online verification) or paper-based.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Quotes are free. Fees are per page following CTPCBA minimum tariffs. Include destination country/authority and your preferred timelines.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Legal / Corporate Documents” in the form.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation of powers of attorney and bylaws',
  crossALink: '/traduccion-poderes-estatutos-societarios',
  crossB: 'Sworn translation of contracts',
  crossBLink: '/traduccion-contratos',
  crossC: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossCLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function EscriturasActasNotarialesContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-escrituras-actas-notariales';
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
      <p className="text-gray-700">{t.scopeNote}</p>

      <h2 className="heading-3 mt-10">{t.typesTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.typesList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <p className="text-gray-700">{t.docsBody}</p>

      <h2 className="heading-3 mt-10">{t.abroadTitle}</h2>
      <p className="text-gray-700">{t.abroadBody}</p>

      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-6">
        <p className="text-gray-800 text-sm">{t.ctpcbaNote}</p>
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
        <li>
          <Link className="text-sunflower-700 underline" href={t.crossCLink}>
            {t.crossC}
          </Link>
        </li>
      </ul>
    </article>
  );
}

