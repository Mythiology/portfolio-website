import Link from 'next/link';
import Image from 'next/image';
import { MenuView } from '@components/Header/MenuView';

export const Header = () => {
  return (
    <header className='flex flex-row bg-[#222222] w-full justify-center pt-8 pb-8'>
      <div className='flex w-4/5 justify-between'>
        <div>
          <Link href='/' passHref>
            <Image
              src='/buttons.png'
              alt='buttons!'
              height='128'
              width='128'
              className='w-full h-auto'
              priority={true}
            />
          </Link>
        </div>
        <MenuView />
      </div>
    </header>
  );
};
