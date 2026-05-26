import type { MetadataRoute } from 'next';

const baseUrl = 'https://observacionesinapi.cl';

const routes: { path: string; priority: number }[] = [
  { path: '/', priority: 1.0 },
  { path: '/observaciones-de-fondo', priority: 0.9 },
  { path: '/observaciones-de-forma', priority: 0.9 },
  { path: '/apelacion-de-marca', priority: 0.8 },
  { path: '/como-funciona', priority: 0.7 },
  { path: '/preguntas-frecuentes', priority: 0.7 },
  { path: '/guia/articulo-20-f', priority: 0.6 },
  { path: '/guia/articulo-20-h', priority: 0.6 },
  { path: '/guia/articulo-20-e', priority: 0.6 },
  { path: '/guia/plazo-observacion-inapi', priority: 0.6 },
  { path: '/guia/abandono-solicitud-marca', priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    priority,
  }));
}
