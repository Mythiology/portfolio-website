'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useContext } from 'react';
import { MediaQueryContext } from '@providers/MediaQueryProvider';

interface SectionProps {
  isMedium: boolean;
}

const RightSection = ({ isMedium }: SectionProps) => {
  return (
    <div className={`flex flex-col ${isMedium && 'mx-auto'}`}>
      <div className={`flex ${isMedium ? 'gap-12' : 'flex-col gap-4'} `}>
        <div>
          <h5 className='mb-4 font-bold text-xl'>CONTACT</h5>
          <p>themythiology@gmail.com</p>
        </div>
        <div>
          <h5 className='mb-4 font-bold text-xl'>THIS WEBSITE</h5>
          <div className='flex flex-col'>
            <Link href='/' passHref>
              Home
            </Link>
            <Link href='/about' passHref>
              About
            </Link>
            <Link href='/experience' passHref>
              Experience
            </Link>
            <Link href='/projects' passHref>
              Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  const { isMedium, isXLarge } = useContext(MediaQueryContext);

  return (
    <footer className={`flex flex-col w-full mx-auto items-center mb-16 mt-16`}>
      <div
        className={`flex ${
          isXLarge ? 'flex-row' : 'flex-col gap-16'
        } w-4/5 justify-between items-start`}
      >
        <RightSection isMedium={isMedium} />
      </div>
    </footer>
  );
};
