import Link from "next/link";

export const Login = () => {

  const mainWebsite = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL;

  return (
    <Link href={`${mainWebsite}/login`} className={'px-12 lg:px-6 text-sm lg:text-base py-2 text-white bg-secondary my-4 lg:my-0  font-bold hover:bg-secondary/80 transition duration-300 ease-in-out'}>
      {"Login"}
    </Link>
  )
}
