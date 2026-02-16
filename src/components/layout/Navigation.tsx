import {NavigationLayout} from "@/components/layout/NavigationLayout";
import {NavigationItems} from "@/components/layout/NavigationItem";

export const Navigation = () => {


  return(
    <nav className='fixed top-0 w-full bg-white to-blue-500 z-10'>
      <NavigationLayout>
        <NavigationItems/>
      </NavigationLayout>
    </nav>
  )
}
