import Link from 'next/link';
import Image from 'next/image';

export const Logo = () => (
  <Link href={'/'} className={'inline-flex lg:w-1/4 sm:w-100%'}>
    <Image height={50} width={160} src={'/robotdorm.png'} alt="robotdorm-logo" />
  </Link>
);
