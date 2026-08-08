'use client';

import { MutableRefObject, useEffect, useRef } from 'react';

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

type TurnstileApi = {
  render: (element: HTMLElement, options: Record<string, unknown>) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadTurnstileScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();

  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = () => {
        scriptPromise = null;
        reject(new Error('Failed to load Cloudflare Turnstile'));
      };
      document.head.appendChild(script);
    });
  }

  return scriptPromise;
}

type TurnstileProps = {
  siteKey: string;
  language: string;
  /** Populated with a function that clears the current token so the form can be submitted again. */
  resetRef?: MutableRefObject<(() => void) | null>;
};

/**
 * Renders the Turnstile widget, which injects a `cf-turnstile-response` input into the
 * surrounding form. Formspree verifies that token server-side once CAPTCHA is enabled
 * in the form settings.
 */
export default function Turnstile({ siteKey, language, resetRef }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let widgetId: string | undefined;
    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !window.turnstile) return;

        widgetId = window.turnstile.render(container, {
          sitekey: siteKey,
          language,
          theme: 'light',
        });

        if (resetRef) {
          resetRef.current = () => window.turnstile?.reset(widgetId);
        }
      })
      .catch(() => {
        // Without the widget the form still submits; Formspree decides whether to accept it.
      });

    return () => {
      cancelled = true;
      if (widgetId) window.turnstile?.remove(widgetId);
      if (resetRef) resetRef.current = null;
    };
  }, [siteKey, language, resetRef]);

  return <div ref={containerRef} />;
}
