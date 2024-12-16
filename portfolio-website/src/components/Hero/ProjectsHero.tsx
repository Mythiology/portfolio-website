'use client';

import { useContext } from 'react';
import { MediaQueryContext } from '@providers/MediaQueryProvider';

import { Icon } from '@components/Icon';

// Import JSON data from the messages folder
import projectData from './edit/ProjectData.json';

interface ProjectItemProps {
  src: string;
  alt: string;
  url: string;
  date: string;
  title: string;
  description: string[];
  centerIcon: boolean;
}

const ProjectItem = ({ src, alt, url, date, title, description, centerIcon }: ProjectItemProps) => {
  return (
    <div className={`flex flex-col gap-2 ${centerIcon ? 'items-center' : 'items-start'}`}>
      <div className="flex flex-row items-start gap-4">
        <Icon src={src} alt={alt} />
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold"><a href= {url}>{title}</a></h3>
          <p className="text-sm text-gray-400">{date}</p>
        </div>
      </div>
      {description.map((paragraph, index) => (
            <p key={index}>• {paragraph}</p>
          ))}
    </div>
  );
};

export const ProjectsHero = () => {
  const { isMedium, isLarge, isXLarge } = useContext(MediaQueryContext);

  const serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16';
  const outerHeroClass = 'flex flex-col gap-12 items-center';
  const innerHeroClass = 'flex flex-col gap-4 text-center';

  // Responsive grid layout
  const gridClass = `
    grid
    gap-8
    grid-cols-1
    ${isLarge || isXLarge ? 'lg:grid-cols-2' : 'grid-cols-1'}
  `;

  return (
    <div className={serviceClass}>
      <div className={outerHeroClass}>
        <div className={innerHeroClass}>
          <h1 className="text-2xl font-bold">My Projects!</h1>
          <p className="text-lg">
            Some cool projects that I have made or been apart of!
          </p>
        </div>
      </div>
      <div className={gridClass}>
        {Object.entries(projectData).map(([title, [src, alt, url, date, description]]) => (
          <ProjectItem
            key={title}
            src={src}
            alt={alt}
            url = {url}
            date = {date}
            title={title}
            description={description}
            centerIcon={!isMedium}
          />
        ))}
      </div>
    </div>
  );
};
