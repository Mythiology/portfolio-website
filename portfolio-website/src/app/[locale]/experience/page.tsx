import { getTranslations } from 'next-intl/server';
import { ExperienceHero } from '@components/Hero/ExperienceHero';

type MetadataProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Experience.title'),
    description: t('Experience.description'),
    keywords: t('Experience.keywords'),
    openGraph: {
      title: t('Experience.title'),
      description: t('Experience.description'),
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

const Experience = () => {
  return <ExperienceHero />;
};

export default Experience;
