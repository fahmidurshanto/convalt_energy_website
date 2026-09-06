import { Metadata } from 'next';

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.convaltenergy.com';

export function constructMetadata({
  title,
  description,
  path = '',
  ogImage = '/og-image.jpg',
}: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const url = `${BASE_URL}${path}`;

  return {
    title: `${title} | Convalt Energy`,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | Convalt Energy`,
      description,
      url,
      siteName: 'Convalt Energy',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Convalt Energy`,
      description,
      images: [ogImage],
    },
  };
}
