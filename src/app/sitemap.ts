import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.ml-traducciones.com';
  const lastmod = new Date().toISOString().split('T')[0];
  return [
    { url: `${base}/`, lastModified: lastmod, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog/`, lastModified: lastmod, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${base}/traduccion-partida-nacimiento-matrimonio/`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/traduccion-titulo-universitario-analitico/`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/traduccion-publica-legalizacion-ctpcba/`,
      lastModified: lastmod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}

