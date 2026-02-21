'use client'

import Link from "next/link";
import Image from "next/image";
import {formatDate} from "@/formatters/date";
import React, {Activity, useState, useTransition, ViewTransition} from "react";
import {PostsPreview} from "@/services/sanity/sanity.types";
import {loadLatestPosts} from "@/services/sanity/sanity.services";
import {Button} from "@/components/ui/Button";
import {PreviewHeader} from "@/components/posts/PreviewHeader";


interface PostsPreviewProps {
  posts: PostsPreview[];
  slug: string | undefined;

}


const PAGE_SIZE = 6;


export const Preview = ({posts, slug}: PostsPreviewProps) => {

  const [loadedPosts, setPosts] = useState<PostsPreview[]>(posts);
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();
  const [isMorePosts, setIsMorePosts] = useState(posts.length === PAGE_SIZE);
  const [selectedDirection, setSelectedDirection] = useState('desc');

  const postAction = async () => {
    const newPosts = await loadLatestPosts(slug, page + 1, selectedDirection);

    if (newPosts?.result && newPosts?.result.length < PAGE_SIZE) {
      setIsMorePosts(false);
    }

    setPosts((prev) => [...prev, ...newPosts.result]);
    setPage((prev) => prev + 1);

  }

  const sortAction = async (sortDirection: string) => {
    setSelectedDirection(sortDirection);
    const sortedPosts = await loadLatestPosts(slug, 1, sortDirection);
    setPosts(sortedPosts.result);
    setIsMorePosts(true);
  }


  return (

    <div>
      <PreviewHeader direction={selectedDirection} sortCallback={sortAction} slug={slug}/>
      <ViewTransition enter="slide-in">
        <div className={'flex flex-col'}>
          <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'}>
            {
              loadedPosts.map((post: PostsPreview) => (
                <Link href={`/post/${post.slug}`} key={post._id} className={'flex flex-col relative'}>
                  <Image
                    src={post.thumbnail.asset}
                    alt={post.thumbnail.alt}
                    width={500}
                    height={500}
                    className={'object-cover rounded-md'}
                    loading="eager"
                  />
                  <h3 className={'text-lg font-medium my-2 text-wrap'}>{post.title}</h3>
                  <p className={'text-sm text-muted-foreground flex items-center space-x-4'}>
                    <span>{post.categories[0]}</span>
                    <span className={'text-gray-600'}>{formatDate(post.created)}</span>
                  </p>
                </Link>
              ))
            }
          </div>
          <Activity mode={isMorePosts ? 'visible' : 'hidden'}>
            <div className={'flex items-center justify-center'}>
              <Button disabled={isPending}
                      className={'bg-gray-200 hover:bg-gray-300 text-black w-fit my-20 py-6 px-8 rounded-2xl'}
                      onClick={() => startTransition(postAction)}>
                {'Load more'}
              </Button>
            </div>
          </Activity>
        </div>
      </ViewTransition>
    </div>

  )

}



