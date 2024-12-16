'use client';

import { useContext } from 'react';
import { HeaderMenu } from '@components/Header/HeaderMenu';
import { Dropdown } from '@components/Header/Dropdown';
import { MediaQueryContext } from '@providers/MediaQueryProvider';
// import { LanguageToggleButton } from './LanguageToggleButton';

export const MenuView = () => {
  const { isMedium } = useContext(MediaQueryContext);

  return (
    <>
      {isMedium ? (
        <HeaderMenu />
      ) : (
        <div className='flex items-center ml-auto mr-0'>
          <Dropdown />
        </div>
      )}
    </>
  );
};
