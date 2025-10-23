export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? '';

export const isGaEnabled = GA_MEASUREMENT_ID.length > 0;

type GTag = {
  (command: 'config', targetId: string, config?: { page_path: string }): void;
  (command: 'event', eventName: string, params?: Record<string, unknown>): void;
};

declare global {
  interface Window {
    gtag: GTag;
    dataLayer: unknown[];
  }
}

export const pageview = (url: string) => {
  if (!isGaEnabled) {
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};
