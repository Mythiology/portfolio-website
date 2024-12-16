'use client';

import { useContext } from 'react';
import { MediaQueryContext } from '@providers/MediaQueryProvider';
import { Icon } from '@components/Icon';

// Import JSON data
import experienceData from './edit/ExperienceData.json';

interface ExperienceItemProps {
  src: string;
  alt: string;
  title: string;
  position: string;
  duration: string;
  description: string[];
  centerIcon: boolean;
}

const ExperienceItem = ({ src, alt, title, position, duration, description, centerIcon }: ExperienceItemProps) => {
  return (
    <div className={`flex flex-col gap-4 ${centerIcon ? 'items-center' : 'items-start'}`}>
      <div className="flex flex-row items-start gap-4">
        {/* Icon on the left */}
        <Icon src={src} alt={alt} />

        {/* Text content */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-bold">{position} ({title})</h3>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>
      </div>

      {/* Description below */}
      <div className="flex flex-col gap-2">
        {description.map((paragraph, index) => (
          <p key={index} className="text-sm">• {paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export const ExperienceHero = () => {
  const { isMedium, isLarge, isXLarge } = useContext(MediaQueryContext);

  const serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16';
  const outerHeroClass = 'flex flex-col gap-12 items-center';
  const innerHeroClass = 'flex flex-col gap-4 text-center';

  // Define grid layout for Experience items
  const gridClass = `
    grid 
    gap-8 
    grid-cols-1 
    ${isLarge || isXLarge ? 'md:grid-cols-2' : 'grid-cols-1'}
  `; // Adjust columns based on screen size

  return (
    <div className={serviceClass}>
      <div className={outerHeroClass}>
        <div className={innerHeroClass}>
          <h1 className="text-2xl font-bold">My Working Experience!</h1>
          <p className="text-lg">Some of the organizations that I have been a part of!</p>
        </div>
      </div>
      <div className={gridClass}>
        {experienceData.map((item, index) => (
          <ExperienceItem
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
            position={item.position}
            duration={item.duration}
            description={item.description}
            centerIcon={!isMedium}
          />
        ))}
      </div>
    </div>
  );
};
