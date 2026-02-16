import Link from "next/link";

interface NavigationItemProps {
  name: string;
  href: string;
}

const NavigationItem = ({name, href}: NavigationItemProps) => {

  return (
    <Link className='flex items-center justify-between text-base sm:font-bold lg:font-normal text-center px-6 py-2 lg:hover:font-bold  sm:hover:bg-sky-100 hover:text-primary sm:mb-8 lg:mb-0' href={href}>{name}
    </Link>)
}


export const NavigationItems = () => {

  const baseUrl = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL;
  return (
    <div className={'flex flex-col lg:flex-row w-full'}>
        <NavigationItem name="Pricing" href={`${baseUrl}/pricing`}/>
        <NavigationItem name="Blog" href={"/"} />
    </div>
  )
}
