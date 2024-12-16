'use client';

import {useTypewriter, Cursor} from 'react-simple-typewriter'
import { useContext } from 'react';
import { MediaQueryContext } from '@providers/MediaQueryProvider';


export const AboutHero = () => {
  
  const { isMedium, isLarge } = useContext(MediaQueryContext);

  let outerHeroClass: string;
  let innerHeroClass: string;

  if (isLarge) {
    outerHeroClass = 'flex flex-row gap-48 items-center';
    innerHeroClass = 'flex flex-col gap-4 items-start';
  } else if (isMedium) {
    outerHeroClass = 'flex flex-row gap-32 items-center';
    innerHeroClass = 'flex flex-col gap-4 items-start';
  } else {
    outerHeroClass = 'flex flex-col gap-16 items-center';
    innerHeroClass = 'flex flex-col gap-4 text-center';
  }

  return (
    <div className='w-4/5 flex flex-col mx-auto mb-32 mt-16 gap-32'>
      <div className={outerHeroClass}>
        <div className={innerHeroClass}>
          <h1>root@portfolio: </h1>
          <h2>Hello! I am Chen Di, currently a student in marticulation for Nanyang Technology University (NTU) Computer Science course!</h2>
        </div>
      </div>
    </div>
  );
};
