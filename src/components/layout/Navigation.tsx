import {NavigationLayout} from "@/components/layout/NavigationLayout";
import {NavigationItems} from "@/components/layout/NavigationItem";

export const Navigation = () => {


  return(
    <nav className='fixed top-0 w-full bg-white to-secondary z-10 overflow-x-hidden'>
      <NavigationLayout>
        <NavigationItems/>
      </NavigationLayout>
    </nav>
  )
}
