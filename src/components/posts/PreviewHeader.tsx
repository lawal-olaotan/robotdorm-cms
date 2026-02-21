import {tabsConstant} from "@/constants/tabs";
import {useState} from "react";
import {Tabs} from "@/components/posts/Tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {ChevronDown, ChevronUp} from "lucide-react";

interface PreviewHeaderProps {
  slug: string | undefined;
  sortCallback?: (sortDirection: string) => void;
  direction: string;
}


export const PreviewHeader = ({slug, sortCallback, direction}: PreviewHeaderProps) => {

  const currentTab = tabsConstant.find(tab => tab.slug === slug) ?? tabsConstant[0];
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className={'w-full mt-8'}>
      <h1 className="scroll-m-20 pb-2 text-3xl font-base my-2">
        {currentTab?.title}
      </h1>
      <div className={'flex items-center justify-between w-full'}>
        <Tabs currentPath={currentTab?.url}/>
        <DropdownMenu onOpenChange={(open: boolean) => setIsOpen(open)}>
          <DropdownMenuTrigger
            className={'hidden outline-none border-none lg:flex items-center space-x-2 mr-4 text-sm '}>
            <p>{'Sort'}</p>
            {isOpen ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
          </DropdownMenuTrigger>
          <DropdownMenuContent className={'bg-gray-200 p-2 rounded-md shadow-md border-none'}>
            <DropdownMenuRadioGroup value={direction} onValueChange={sortCallback}>
              <DropdownMenuRadioItem value="desc">{'Newest → Oldest'}</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="asc">{'Oldest → Newest'}</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </div>
  )
}
