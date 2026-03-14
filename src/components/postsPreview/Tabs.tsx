import Link from "next/link";
import {tabsConstant} from "@/constants/tabs";

interface TabsProps {
  currentPath: string;
}

export const Tabs = ({ currentPath }: TabsProps) => {

  return (
    <div className={'flex items-center justify-start gap-4 w-full  mb-6'}>
      {
        tabsConstant.map((tab) => (
          <Link key={tab.title.toLowerCase()} href={tab.url} className={`${tab.url === currentPath ? 'border-b-2 border-black': ''} text-base font-medium text-gray-600 hover:text-primary py-2 hover:border-b  hover:border-primary transition-colors duration-300`}>
            {tab.title}
          </Link>
        ))
      }
    </div>
  )
}
