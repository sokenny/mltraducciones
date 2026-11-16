/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de balances y estados contables/financieros (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de balances, estados contables/financieros, informes de auditoría, memorias y certificaciones contables para casas matrices, bancos, IGJ, inversores y licitaciones. Trabajo con firma y sello de traductora pública matriculada (CTPCBA).',
  docsTitle: 'Documentos habituales',
  docsList: [
    'Estados de situación patrimonial y de resultados, flujo de efectivo y notas.',
    'Balances generales y estados financieros auditados.',
    'Informes y dictámenes de auditoría (independiente/interna).',
    'Memorias, reportes de gestión y cuadros anexos.',
    'Certificaciones contables y constancias emitidas por estudio/CPA.',
  ],
  destTitle: 'Destinos y usos frecuentes',
  destList: [
    'Presentación ante bancos, IGJ y organismos de contralor.',
    'Envío a casas matrices, inversores y licitaciones públicas/privadas.',
    'Requisitos de due diligence o compliance.',
  ],
  orderTitle: 'Si circulan en el exterior: orden sugerido',
  orderBody:
    '1) Apostilla o legalización consular del ORIGINAL por autoridad competente (en Argentina, Cancillería por TAD o, según el caso, Colegio de Escribanos). 2) Traducción pública EN↔ES. 3) Opcional: legalización del CTPCBA de la firma y del sello de la traductora si el receptor lo exige. La apostilla siempre la emite la autoridad competente; no se comercializan apostillas.',
  guidanceTitle: 'Cómo cotizar y presentar',
  guidanceBody:
    'Enviá archivos completos y legibles (PDF/escaneos). Indicá destinatario, si solicitan legalización digital del CTPCBA y plazos internos de presentación. La cotización es sin cargo; honorarios según aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná “Documentos Legales”.',
  crossTitle: 'Páginas relacionadas',
  crossA: 'Traducción pública de poderes y estatutos societarios',
  crossALink: '/traduccion-poderes-estatutos-societarios',
  crossB: 'Traducción pública de contratos — EN↔ES',
  crossBLink: '/traduccion-contratos',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of financial statements and audit reports (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translations of financial statements, audit reports, management reports and accountant certifications for headquarters, banks, IGJ, investors and tenders. Prepared by a duly licensed sworn translator (CTPCBA).',
  docsTitle: 'Typical documents',
  docsList: [
    'Balance sheet, income statement, cash flow and notes.',
    'Audited financial statements.',
    'Independent/internal audit reports.',
    'Management reports and annex tables.',
    'CPA certifications and attestations.',
  ],
  destTitle: 'Common destinations/uses',
  destList: [
    'Filing with banks, IGJ and regulatory bodies.',
    'Submission to HQs, investors and public/private tenders.',
    'Due diligence or compliance requirements.',
  ],
  orderTitle: 'If used abroad: suggested order',
  orderBody:
    '1) Apostille or consular legalization of the ORIGINAL by the competent authority (in Argentina, Ministry of Foreign Affairs via TAD or, as applicable, the Notaries Association). 2) Sworn EN↔ES translation. 3) Optional: CTPCBA legalization of the translator’s signature and seal if the recipient requires it. Apostilles are issued by the competent authority.',
  guidanceTitle: 'Quoting and filing',
  guidanceBody:
    'Please send complete readable files (PDF/scans). Indicate the receiving body, whether CTPCBA digital legalization is required, and any internal timelines. Quotes are free and fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Legal Documents” in the form.',
  crossTitle: 'Related pages',
  crossA: 'Sworn translation of powers of attorney and bylaws',
  crossALink: '/traduccion-poderes-estatutos-societarios',
  crossB: 'Sworn translation of contracts — EN↔ES',
  crossBLink: '/traduccion-contratos',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function BalancesEstadosContablesContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-balances-estados-contables';
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

      <h2 className="heading-3 mt-10">{t.docsTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.docsList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.destTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.destList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2 className="heading-3 mt-10">{t.orderTitle}</h2>
      <p className="text-gray-700">{t.orderBody}</p>

      <h2 className="heading-3 mt-10">{t.guidanceTitle}</h2>
      <p className="text-gray-700">{t.guidanceBody}</p>

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

