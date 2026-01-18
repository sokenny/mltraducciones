'use client';

import { useLanguage } from '@/i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunflower-400 to-gold-500 flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">M</span>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg">María E. Lo Bianco</h3>
                <p className="text-gray-400 text-sm">{t.hero.title}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#about" className="text-gray-400 hover:text-sunflower-400 transition-colors">
                {t.nav.about}
              </a>
              <a href="#services" className="text-gray-400 hover:text-sunflower-400 transition-colors">
                {t.nav.services}
              </a>
              <a href="#fees" className="text-gray-400 hover:text-sunflower-400 transition-colors">
                {t.nav.fees}
              </a>
              <a href="#contact" className="text-gray-400 hover:text-sunflower-400 transition-colors">
                {t.nav.contact}
              </a>
            </nav>
          </div>

          {/* Location */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm flex items-center justify-center md:justify-end gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.footer.location}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} María E. Lo Bianco. {t.footer.rights}</p>
            <p className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sunflower-500" />
              CTPCBA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
