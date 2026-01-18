'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import SunflowerIcon from './SunflowerIcon';

export default function Fees() {
  const { t, language } = useLanguage();

  const feeItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      text: t.fees.quote,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      text: t.fees.calculation,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: t.fees.rates,
    },
  ];

  return (
    <section id="fees" className="bg-white relative overflow-hidden">
      <div className="container-width section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Fees */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="heading-2 flex items-center gap-3 mb-8">
              <SunflowerIcon size={32} />
              {t.fees.title}
            </h2>

            <div className="space-y-6">
              {feeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-sunflower-100 text-sunflower-600 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 pt-3">{item.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Legalization Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 p-6 bg-gradient-to-br from-sunflower-50 to-gold-50 rounded-xl border border-sunflower-200"
            >
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-sunflower-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t.fees.legalization.title}
              </h3>
              <p className="text-gray-600">{t.fees.legalization.text}</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Portfolio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
              {/* Decorative sunflower */}
              <div className="absolute -right-12 -top-12 opacity-10">
                <SunflowerIcon size={200} />
              </div>

              <h3 className="heading-3 text-white mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sunflower-500 flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {t.portfolio.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                {t.portfolio.text}
              </p>

              {/* Client types grid */}
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {[
                  { icon: '🏦', label: language === 'en' ? 'Banks' : 'Bancos' },
                  { icon: '🏛️', label: language === 'en' ? 'Ministries' : 'Ministerios' },
                  { icon: '🎓', label: language === 'en' ? 'Universities' : 'Universidades' },
                  { icon: '⚖️', label: language === 'en' ? 'Law Firms' : 'Estudios Jurídicos' },
                  { icon: '🚢', label: language === 'en' ? 'Maritime' : 'Marítimas' },
                  { icon: '🏥', label: language === 'en' ? 'Healthcare' : 'Salud' },
                  { icon: '📚', label: language === 'en' ? 'Publishers' : 'Editoriales' },
                  { icon: '🏢', label: language === 'en' ? 'Corporations' : 'Empresas' },
                ].map((client, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-2"
                  >
                    <span className="text-lg">{client.icon}</span>
                    <span className="text-sm text-gray-200">{client.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
