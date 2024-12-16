import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://himari.sg',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://himaa.me/en',
        },
      },
    },
    {
      url: 'https://himari.sg/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://himaa.me/en/about',
        },
      },
    },
    {
      url: 'https://himari.sg/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://himaa.me/en/contact',
        },
      },
    },
    {
      url: 'https://himari.sg/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: 'https://himaa.me/en/services',
        },
      },
    },
  ];
}
