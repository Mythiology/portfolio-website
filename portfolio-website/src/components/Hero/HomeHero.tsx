'use client';

import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useContext } from 'react';
import { MediaQueryContext } from '@providers/MediaQueryProvider';

export const HomeHero = () => {
  const [typeEffect] = useTypewriter({
    words: ['Full Stack developer', 'AI Engineer', 'Data Engineer', 'Cybersecurity Enthusiast'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40,
  })

  const { isMedium, isLarge, isXLarge, isSmall } = useContext(MediaQueryContext);

  let outerHeroClass: string;
  let innerHeroClass: string;
  let serviceClass: string;
  let gridClass: string;
  let projectImagesClass: string;

  if (isXLarge) {
    serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-24';
    outerHeroClass = 'flex flex-row gap-48 items-start';
    innerHeroClass = 'flex flex-col gap-4 items-start';
    gridClass = 'grid grid-cols-2 grid-rows-2 gap-4';
    projectImagesClass = 'flex flex-row justify-start items-start gap-16';
  } else if (isLarge) {
      serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-24';
      outerHeroClass = 'flex flex-row gap-12 items-start';
      innerHeroClass = 'flex flex-col gap-4 items-start';
      gridClass = 'grid grid-cols-2 grid-rows-2 gap-4';
      projectImagesClass = 'flex flex-row justify-start items-start gap-16';
  } else if (isMedium) {
      serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16';
      outerHeroClass = 'flex flex-col gap-12 items-start';
      innerHeroClass = 'flex flex-col gap-4 text-left';
      gridClass = 'grid grid-cols-2 grid-rows-2 gap-4';
      projectImagesClass = 'flex flex-row justify-start items-start gap-8';
  } else {
      serviceClass = 'w-4/5 flex flex-col mx-auto mb-32 mt-12 gap-16';
      outerHeroClass = 'flex flex-col gap-12 items-start';
      innerHeroClass = 'flex flex-col gap-4 text-left';
      gridClass = 'flex flex-col text-left justify-start items-start gap-8';
      projectImagesClass = 'flex flex-row justify-start items-start gap-8';
  }

  return (
      <div className={serviceClass}>
        <div className={outerHeroClass}>
          <div className={innerHeroClass}>
          <h2>root@portfolio:</h2>
          <h1>Welcome to my Portfolio Website!</h1>
          <h1>I am a <span style = {{fontWeight: 'bold', marginLeft: '20p', fontSize: '40px'}}> {typeEffect}</span></h1>
          </div>
        </div>
      </div>
  );
};
