'use client';

import { useState, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import SunflowerIcon from './SunflowerIcon';

// IMPORTANT: Replace this with your actual Formspree form ID
// 1. Go to https://formspree.io/ and create a free account
// 2. Create a new form and get your form ID (looks like: xyzabc123)
// 3. Replace 'YOUR_FORMSPREE_ID' below with your actual form ID
const FORMSPREE_ID = 'xgooaqpe';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check for 'gracias' parameter in URL on mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('search_term')?.includes('gracias') || urlParams.get('gracias')) {
      setSubmitStatus('success');
      // Scroll to form section
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();

        // Add 'search_term=gracias' parameter to URL for GA4 event tracking
        // This matches the GA4 custom event condition: search_term contains "gracias"
        const url = new URL(window.location.href);
        url.searchParams.set('search_term', 'gracias');
        window.history.pushState({}, '', url.toString());

        // Trigger page_view event for GA4 to capture the URL change
        // This ensures the custom event 'solicitud_de_contacto' fires
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'page_view', {
            page_path: url.pathname + url.search,
            page_location: url.toString(),
          });
        }

        // Scroll to success message
        setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-sunflower" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <SunflowerIcon size={120} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <SunflowerIcon size={80} />
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 flex items-center justify-center gap-3 mb-4">
              <SunflowerIcon size={32} />
              {t.contact.title}
            </h2>
            <p className="text-body">{t.contact.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-5">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2 bg-gray-900 text-white p-8 lg:p-10">
                <h3 className="text-xl font-display font-semibold mb-6">
                  María E. Lo Bianco
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sunflower-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-sm mb-1">
                        {language === 'en' ? 'Profession' : 'Profesión'}
                      </span>
                      <span className="text-white">{t.hero.title}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sunflower-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-sm mb-1">
                        {language === 'en' ? 'Languages' : 'Idiomas'}
                      </span>
                      <span className="text-white">{t.hero.languages}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sunflower-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-sm mb-1">
                        {language === 'en' ? 'Location' : 'Ubicación'}
                      </span>
                      <span className="text-white">{t.footer.location}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-sunflower-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-gray-400 text-sm mb-1">
                        {language === 'en' ? 'Certification' : 'Matriculación'}
                      </span>
                      <span className="text-white">CTPCBA</span>
                    </div>
                  </div>
                </div>

                {/* Decorative sunflower */}
                <div className="mt-12 flex justify-center opacity-20">
                  <SunflowerIcon size={100} />
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden field for language */}
                  <input type="hidden" name="_language" value={language} />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sunflower-500 focus:ring-2 focus:ring-sunflower-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sunflower-500 focus:ring-2 focus:ring-sunflower-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.phone}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sunflower-500 focus:ring-2 focus:ring-sunflower-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        {t.contact.form.service} *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sunflower-500 focus:ring-2 focus:ring-sunflower-500 transition-colors bg-white"
                      >
                        <option value="">{t.contact.form.serviceOptions.placeholder}</option>
                        <option value="personal">{t.contact.form.serviceOptions.personal}</option>
                        <option value="academic">{t.contact.form.serviceOptions.academic}</option>
                        <option value="corporate">{t.contact.form.serviceOptions.corporate}</option>
                        <option value="legal">{t.contact.form.serviceOptions.legal}</option>
                        <option value="court">{t.contact.form.serviceOptions.court}</option>
                        <option value="other">{t.contact.form.serviceOptions.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-sunflower-500 focus:ring-2 focus:ring-sunflower-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t.contact.form.success}
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      {t.contact.form.error}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t.contact.form.sending}
                      </>
                    ) : (
                      <>
                        {t.contact.form.submit}
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
