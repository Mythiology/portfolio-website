import Link from 'next/link';
import { Button } from '@components/Button';

export const HeaderMenu = () => {
  return (
    <div className='flex flex-row gap-4 items-center'>
      <Link href='/about' passHref>
        <Button>About</Button>
      </Link>
      <Link href='/experience' passHref>
        <Button>Experience</Button>
      </Link>
      <Link href='/projects' passHref>
        <Button>Projects</Button>
      </Link>
    </div>
  );
};
