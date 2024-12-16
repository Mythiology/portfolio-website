import { getTranslations } from 'next-intl/server';
import { ProjectsHero } from '@components/Hero/ProjectsHero';

type MetadataProps = {
  params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('Projects.title'),
    description: t('Projects.description'),
    keywords: t('Projects.keywords'),
    openGraph: {
      title: t('Projects.title'),
      description: t('Projects.description'),
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

const Projects = () => {
  return <ProjectsHero/>;
};

export default Projects;
