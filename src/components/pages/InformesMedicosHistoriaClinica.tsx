/* eslint-disable react/no-unescaped-entities */
'use client';

import { useLanguage } from '@/i18n/LanguageContext';
import Link from 'next/link';
import { useMemo } from 'react';

const ES = {
  h1: 'Traducción pública de informes médicos e historia clínica (inglés ↔ español)',
  intro:
    'Traducción pública EN↔ES de historias clínicas, informes y cartas médicas, certificados, resultados de estudios y certificados de vacunación para tratamientos en el exterior, seguros/reintegros, visas, estudios y otros trámites. Trabajo con firma y sello de traductora pública matriculada (CTPCBA).',
  docsTitle: 'Qué se traduce habitualmente',
  docsList: [
    'Historia clínica y resúmenes de alta.',
    'Informes y cartas médicas, indicaciones y prescripciones.',
    'Certificados médicos, certificados de apto, reposo y tratamientos.',
    'Resultados de laboratorio e informes de estudios (imágenes, análisis).',
    'Carnets y certificados de vacunación.',
  ],
  useTitle: 'Usos frecuentes',
  useList: [
    'Tratamientos o interconsultas en el exterior.',
    'Reintegros y reclamos ante compañías de seguros.',
    'Visas, estudios y presentaciones ante organismos.',
  ],
  orderTitle: 'Presentación en el exterior o en Argentina: orden del trámite',
  orderBody:
    'Cuando la documentación circula en el exterior: 1) Apostilla o legalización consular del ORIGINAL por autoridad competente (según el país). 2) Traducción pública EN↔ES. 3) Opcional: legalización del CTPCBA de la firma y del sello de la traductora si el destinatario lo solicita. La apostilla siempre la emite la autoridad competente; no se comercializan apostillas.',
  guidanceTitle: 'Recomendaciones de presentación y cotización',
  guidanceBody:
    'Enviá PDFs o escaneos nítidos y completos. Indicá el organismo de destino y si aceptan traducciones con legalización digital del CTPCBA. La cotización es sin cargo y los honorarios siguen los aranceles mínimos sugeridos por el CTPCBA.',
  cta: 'Solicitar cotización gratuita',
  ctaHint: 'En el formulario, seleccioná “Documentos Personales”.',
  crossTitle: 'Páginas relacionadas',
  crossA: 'Traducción pública de pasaporte, DNI e identidad — EN↔ES',
  crossALink: '/traduccion-pasaporte-dni-identidad',
  crossB: 'Traducción pública, legalización CTPCBA y apostilla: el orden del trámite',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

const EN = {
  h1: 'Sworn translation of medical records and reports (English ↔ Spanish)',
  intro:
    'Sworn EN↔ES translations of medical records, doctors’ letters, medical certificates, test results and vaccination certificates for treatment abroad, insurance/reimbursements, visas, studies and other procedures. Prepared by a duly licensed sworn translator (CTPCBA).',
  docsTitle: 'Common items',
  docsList: [
    'Medical records and discharge summaries.',
    'Doctors’ reports/letters, indications and prescriptions.',
    'Medical certificates, fitness notes and treatment certificates.',
    'Lab results and imaging/diagnostic reports.',
    'Vaccination cards and certificates.',
  ],
  useTitle: 'Frequent uses',
  useList: [
    'Treatment or second opinions abroad.',
    'Insurance reimbursements and claims.',
    'Visa, study and official procedures.',
  ],
  orderTitle: 'For use abroad or in Argentina: order of steps',
  orderBody:
    'When documents will circulate abroad: 1) Apostille or consular legalization of the ORIGINAL by the competent authority (depending on the country). 2) Sworn EN↔ES translation. 3) Optional: CTPCBA legalization of the translator’s signature and seal if required by the recipient. Apostilles are issued by the competent authority.',
  guidanceTitle: 'Submission and quoting tips',
  guidanceBody:
    'Please send clear, complete PDFs/scans. Indicate the receiving body and whether CTPCBA digital legalization is accepted. Quotes are free and fees follow CTPCBA minimum tariffs.',
  cta: 'Request a free quote',
  ctaHint: 'Select “Personal Documents” in the form.',
  crossTitle: 'Related pages',
  crossA: 'Sworn translation of passports and IDs — EN↔ES',
  crossALink: '/traduccion-pasaporte-dni-identidad',
  crossB: 'Sworn translation, CTPCBA legalization and apostille: order of steps',
  crossBLink: '/traduccion-publica-legalizacion-ctpcba',
  breadcrumbBlog: 'Blog',
  metaAuthor: 'María E. Lo Bianco',
};

export default function InformesMedicosHistoriaClinicaContent() {
  const { language } = useLanguage();
  const t = language === 'en' ? EN : ES;

  const jsonLd = useMemo(() => {
    const url =
      'https://www.ml-traducciones.com/traduccion-informes-medicos-historia-clinica';
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

      <h2 className="heading-3 mt-10">{t.useTitle}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {t.useList.map((item) => (
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

