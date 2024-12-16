import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

type MetadataProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('NotFound.title'),
    description: t('NotFound.description'),
    keywords: t('NotFound.keywords'),
    openGraph: {
      title: t('NotFound.title'),
      description: t('NotFound.description'),
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

export default function CatchAllPage() {
  notFound();
}
