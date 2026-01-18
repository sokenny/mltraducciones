'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import SunflowerIcon from './SunflowerIcon';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 sunflower-pattern" />

      <div className="container-width section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-sunflower-100 to-sunflower-200 shadow-xl">
              {/* Professional photo */}
              <Image
                src="/melobianco-traductora.png"
                alt="María E. Lo Bianco - Sworn Translator"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Subtle gradient overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

              {/* Corner decoration */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sunflower-500 rounded-full opacity-30" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-500 rounded-full opacity-30" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 lg:right-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-full bg-sunflower-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-sunflower-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wide">Certified</span>
                <span className="block font-semibold text-gray-900">CTPCBA</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="heading-2 flex items-center gap-3">
              <SunflowerIcon size={32} />
              {t.about.title}
            </h2>

            <p className="text-body">
              {t.about.registration}
            </p>

            <div className="bg-sunflower-50 border-l-4 border-sunflower-500 p-5 rounded-r-lg">
              <p className="text-gray-700 italic">
                {t.about.legalNote}
              </p>
            </div>

            <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-sunflower-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-sunflower-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{t.about.confidentiality}</h3>
                <p className="text-gray-600">{t.about.confidentialityText}</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-flex">
              {t.cta.contact}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
