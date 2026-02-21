'use client'


import {Logo} from "@/components/layout/Logo";
import {Login} from "@/components/layout/Login";
import {Button} from "@/components/ui/Button";
import {Menu, X} from "lucide-react";
import {useState} from "react";

interface NavigationLayoutProps {
  children?: React.ReactNode
}

export const NavigationLayout = ({children}: NavigationLayoutProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={'2xl:w-360 m-auto flex items-center justify-between py-2 xl:px-24 lg:px-12 px-4'}>
      <Logo/>

      <div className='items-center space-x-6 w-fit flex'>
        <div className={'space-x-6 items-center h-fit hidden lg:flex relative text-sky-600'}>
          {children}
          <Login/>
        </div>
        <div
          className={`${active ? 'flex' : 'hidden'} lg:hidden flex-col items-center space-x-6 justify-start p-4 h-screen bg-white absolute top-0 left-0 py-20 text-2xl text-black z-10 w-full`}>
          <div className='lg:hidden flex items-center'>
            <Button variant={'ghost'} className='absolute top-6 right-6 text-base' onClick={() => {
              setActive(!active)
            }}>
              <X/>
            </Button>
          </div>
          {children}
          <Login/>
        </div>
      </div>


      <Button variant={'ghost'} className={'lg:hidden outline-none text-secondary ml-6 p-0'} onClick={() => {
        setActive(!active);
      }}>
        <Menu size={120}/>
      </Button>
    </div>
  )
}
