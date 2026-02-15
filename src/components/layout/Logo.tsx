import Link from "next/link";
import Image from 'next/image'

export const Logo = () => {

  const MainWebsite = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL || "https://www.robotdorm.com";
  return (
    <Link href={MainWebsite} className={'inline-flex lg:w-1/4 sm:w-1/5'}>
      <Image height={50} width={160} src={"/robotdorm.png"} alt="robotdorm-logo" />
    </Link>
  )
}
