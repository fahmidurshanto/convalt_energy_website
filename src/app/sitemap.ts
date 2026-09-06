import { BASE_URL } from '@/lib/seo';
import { PROJECTS_DATA } from '@/content/projects';
import { PRESS_RELEASES_DATA } from '@/content/press-releases';

export default function sitemap() {
  const routes = [
    '',
    '/projects',
    '/team',
    '/media',
    '/press-releases',
    '/resources',
    '/contact',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const projectRoutes = PROJECTS_DATA.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const prRoutes = PRESS_RELEASES_DATA.map((pr) => ({
    url: `${BASE_URL}/press-releases/${pr.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...projectRoutes, ...prRoutes];
}
