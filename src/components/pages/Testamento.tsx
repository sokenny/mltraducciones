/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de testamentos (wills) — sucesiones y herencias (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de testamentos para sucesión, probate y presentaciones ante escribanos/juzgados. Trabajo con firma y sello de traductora pública matriculada (CTPCBA). A pedido, puede gestionarse la legalización del CTPCBA de la firma y el sello.',
  whenTitle: 'Usos habituales',
  whenList: [
    'Herederos extranjeros o documentación emitida en el exterior.',
    'Protocolización ante escribano o presentación judicial.',
    'Requerimientos de bancos, registros o autoridades públicas.',
  ],
  docsTitle: 'Qué enviar para cotizar',
  docsBody:
    'Para cotizar con precisión, envíe el testamento completo (escaneo nítido/PDF, anverso y dorso si corresponde). Indique si requiere legalización CTPCBA y el organismo de destino. Si hay anexos/actas notariales, inclúyalos para evaluar fojas.',
  formatTitle: 'Fojas y formalidades',
  formatBody:
    'La cantidad de fojas se calcula por el cuerpo del testamento y cualquier certificación/anexo. Indique si el destinatario requiere copias certificadas o formato específico.',
  abroadTitle: 'Documentos para uso en el exterior',
  abroadBody:
    'Orden sugerido: (1) Apostillar el ORIGINAL por la autoridad competente (en Argentina, Cancillería por TAD o, según el caso, Colegio de Escribanos). (2) Realizar la traducción pública EN↔ES. (3) Opcional: legalización del CTPCBA de la firma y el sello de la traductora si el destinatario lo solicita. La apostilla no se vende; la emite la autoridad competente.',
  noteApostille:
    'El CTPCBA certifica la firma y el sello de la traductora, no el contenido del testamento. Las apostillas solo las emite la autoridad competente.',
  pricingTitle: 'Cotización y plazos',
  pricingBody:
    'Cotización sin cargo. Honorarios por foja según aranceles mínimos sugeridos por el CTPCBA. Envíe país/organismo de destino y plazos deseados.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccione “Documentos Legales” o “Personales”, según el caso.',
  crossTitle: 'También puede interesarle',
  crossA: 'Traducción pública de contratos — EN↔ES',
  crossALink: '/traduccion-contratos',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of wills for probate and inheritance (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translation of wills for succession/probate and filings before notaries/courts. Performed by a duly licensed sworn translator (CTPCBA). Upon request, CTPCBA legalization of my signature and seal can be arranged.',
  whenTitle: 'Common scenarios',
  whenList: [
    'Foreign heirs or documents issued abroad.',
    'Notarial protocolization or court filings.',
    'Bank, registry or public‑authority requirements.',
  ],
  docsTitle: 'What to send for a quote',
  docsBody:
    'Please share the complete will (clear scan/PDF, front/back where applicable). Indicate whether CTPCBA legalization is required and the receiving institution. Include annexes/notarial acts to assess page count.',
  formatTitle: 'Pages and formalities',
  formatBody:
    'Page count is based on the will’s body and any certificates/annexes. Share any requirements for certified copies or specific formats.',
  abroadTitle: 'For use abroad',
  abroadBody:
    'Suggested order: (1) Apostille the ORIGINAL by the competent authority (in Argentina, the Ministry of Foreign Affairs via TAD or, as applicable, the Notaries Association). (2) Sworn EN↔ES translation. (3) Optional: CTPCBA legalization of the translator’s signature and seal if requested by the recipient. Apostilles are not sold; they are issued by the competent authority.',
  noteApostille:
    'CTPCBA legalization certifies the translator’s signature and seal, not the content of the will. Apostilles are issued only by the competent authority.',
  pricingTitle: 'Quotes and timelines',
  pricingBody:
    'Quotes are free. Fees are per page following CTPCBA minimum tariffs. Please include destination country/authority and preferred timelines.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Legal Documents” or “Personal Documents”, as appropriate.',
  crossTitle: 'You may also like',
  crossA: 'Sworn translation of contracts — EN↔ES',
  crossALink: '/traduccion-contratos',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function TestamentoContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url = 'https://www.ml-traducciones.com/traduccion-testamento';
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

      <h2 className="heading-3 mt-10">{t.formatTitle}</h2>
      <p className="text-gray-700">{t.formatBody}</p>

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

