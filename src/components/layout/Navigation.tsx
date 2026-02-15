
import {Login} from "@/components/layout/Login";
import {Logo} from "@/components/layout/Logo";

export const Navigation = () => {


  return(
    <nav className='fixed top-0 w-full bg-white to-blue-500 z-10'>
        <div className={'2xl:w-[1440px] m-auto flex items-center justify-between py-2 xl:px-24 lg:px-12 px-4'}>
          <Logo/>
          <Login/>
        </div>
    </nav>
  )
}
