/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de poderes y estatutos societarios (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de poderes (generales y especiales), estatutos sociales, actas constitutivas y actas societarias para uso corporativo y legal. Traductora pública matriculada (CTPCBA). A pedido, se gestiona la legalización de la firma y del sello ante el CTPCBA.',
  scopeTitle: 'Documentos frecuentes',
  scopeList: [
    'Poderes generales y especiales, cartas poder y autorizaciones.',
    'Estatutos y contratos sociales, actas constitutivas.',
    'Actas de asamblea y de directorio, designación de autoridades.',
    'Mandatos, proxies, permisos y certificaciones notariales asociadas.',
  ],
  qualityTitle: 'Criterios y presentaciones',
  qualityBody:
    'Se respeta la terminología societaria y el formato del documento. Si la traducción se presentará ante organismos públicos o bancos, indique cualquier requisito formal específico (p. ej., apostilla previa, copias certificadas, número de fojas).',
  abroadTitle: 'Documentación que circula en el exterior',
  abroadBody:
    'Cuando los documentos se presentan fuera de la Argentina: (1) Apostille del ORIGINAL por la autoridad competente (en Argentina, Cancillería vía TAD u organismo correspondiente). (2) Traducción pública EN↔ES. (3) Opcional: legalización de firma y sello ante el CTPCBA si el destinatario lo solicita. La apostilla no se comercializa; la emite la autoridad competente.',
  abroadLinksIntro: 'Recursos oficiales:',
  ctpcbaLegal:
    'La legalización del CTPCBA certifica la firma y el sello de la traductora, no el contenido del documento. Puede ser digital (con verificación online) u ológrafa (en papel).',
  quoteTitle: 'Solicitar cotización',
  quoteBody:
    'Envíe escaneos nítidos o PDFs de los documentos completos para cotizar por foja o por extensión. Indique país y organismo de destino y si requiere legalización CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  postCtaNote: 'En el formulario, seleccione “Documentos Societarios”.',
  crossTitle: 'Otras páginas útiles',
  crossA: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Traducción pública de contratos',
  crossBLink: '/traduccion-contratos',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of powers of attorney and corporate bylaws (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translation of powers of attorney (general/special), bylaws, articles of incorporation and corporate minutes for legal and business purposes. Duly licensed sworn translator (CTPCBA). CTPCBA legalization of signature and seal can be arranged upon request.',
  scopeTitle: 'Common documents',
  scopeList: [
    'General and special powers of attorney, letters of authorization.',
    'Bylaws and articles of incorporation, incorporation deeds.',
    'Shareholders’ and board minutes, appointment of officers.',
    'Mandates, proxies, permits and associated notarial certifications.',
  ],
  qualityTitle: 'Standards and formatting',
  qualityBody:
    'Corporate terminology and document layout are carefully preserved. If the translation will be filed with public agencies or banks, please share any formal requirements (e.g., prior apostille, certified copies, page counts).',
  abroadTitle: 'Documents used abroad',
  abroadBody:
    'For documents to be used outside Argentina: (1) Apostille the ORIGINAL issued by the competent authority (in Argentina, the Ministry of Foreign Affairs via TAD or other competent body). (2) Sworn EN↔ES translation. (3) Optional: CTPCBA legalization of the translator’s signature and seal if requested by the recipient. Apostilles are issued solely by the competent authority.',
  abroadLinksIntro: 'Official resources:',
  ctpcbaLegal:
    'CTPCBA legalization certifies the translator’s signature and seal, not the document’s content. It can be digital (with online verification) or on paper.',
  quoteTitle: 'Request a quote',
  quoteBody:
    'Please send clear scans or PDFs of the complete documents to obtain a precise quote (page-based or by length). Indicate the destination country and authority and whether CTPCBA legalization is required.',
  cta: 'Request a free quote',
  postCtaNote: 'Select “Corporate Documents” in the form.',
  crossTitle: 'You may also find these helpful',
  crossA: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossALink: '/traduccion-publica-legalizacion-ctpcba',
  crossB: 'Sworn translation of contracts',
  crossBLink: '/traduccion-contratos',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function PoderesEstatutosContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url = 'https://www.ml-traducciones.com/traduccion-poderes-estatutos-societarios';
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
      <ul className="list-disc pl-6 text-gray-700">
        {t.scopeList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.qualityTitle}</h2>
      <p className="text-gray-700">{t.qualityBody}</p>

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

