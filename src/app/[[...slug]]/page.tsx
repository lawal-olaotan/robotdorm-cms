import React from "react";
import {loadLatestPosts} from "@/services/sanity/sanity.services";
import {Preview} from "@/components/posts/Preview";
import {DynamicPageProps} from "@/types/page.type";

export default async function Home({params}: DynamicPageProps) {
  const {slug} = await params;
  const category = slug ? slug[0] as string : undefined;
  const latestPosts = await loadLatestPosts(category);

  return (
    <div className={'2xl:w-360 m-auto  py-2 xl:px-24 lg:px-12 px-4 mt-16'}>
      <Preview slug={category} posts={latestPosts.result}/>
    </div>
  );
}
