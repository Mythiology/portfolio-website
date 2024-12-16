import { getTranslations } from 'next-intl/server';
import { AboutHero } from '@components/Hero/AboutHero';

type MetadataProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('About.title'),
    description: t('About.description'),
    keywords: t('About.keywords'),
    openGraph: {
      title: t('About.title'),
      description: t('About.description'),
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

const About = () => {
  return <AboutHero />;
};

export default About;
