import Link from "next/link";

export const Login = () => {

  const mainWebsite = process.env.NEXT_PUBLIC_MAIN_WEBSITE_URL;

  return (
    <Link href={`${mainWebsite}/login`} className={'px-6 text-sm lg:text-base py-2 text-white bg-secondary'}>
      {"Login"}
    </Link>
  )
}
