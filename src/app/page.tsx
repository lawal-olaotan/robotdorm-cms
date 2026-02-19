 'use client'

import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Tab, tabsTitle} from "@/types/tabs";
 import React from "react";

export default function Home() {

  const [selectedTab, setSelectedTab] = React.useState<string>(tabsTitle.Home);

  const handleTabChange = (value:string)=> {
    const selected = tabsTitle[value as Tab]
    if(selected) {
      setSelectedTab(selected)
    }

  }

  const tabKeys = Object.keys(tabsTitle) as Tab[];
  return (
    <div className={'2xl:w-[1440px] m-auto  py-2 xl:px-24 lg:px-12 px-4 mt-16'}>
      <div className={'w-full mt-20'}>
        <h2 className="scroll-m-20  pb-2 text-3xl font-base my-2">
          {selectedTab}
        </h2>
        <Tabs onValueChange={handleTabChange} defaultValue={Tab.Home}>
          <TabsList className={'bg-transparent border-none outline-none w-fit mx-auto'}>
            {
              tabKeys.map((tabKey) => (
                <TabsTrigger key={tabKey} value={tabKey} className="border-none overview active:border-none">{tabsTitle[tabKey]}</TabsTrigger>
              ))
            }
          </TabsList>
          <TabsContent value={Tab.Home}>
            <p className={'text-center text-lg mt-10'}>This is the home tab content.</p>
          </TabsContent>
        </Tabs>

      </div>

    </div>
  );
}
