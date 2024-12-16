import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
}
export const Icon = ({ src, alt }: IconProps) => {
  return <Image src={src} alt={alt} width={48} height={48} />;
};
