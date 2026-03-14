'use client'
import React from "react";
import {PostDetail} from "@/components/posts/posts.types";
import {PostsHeader} from "@/components/posts/PostsHeader";
import {PostBody} from "@/components/posts/PostBody";


export const PostView = (postDetails: PostDetail) => {

  const {title, description, created, ...postContent} = postDetails;

  const category = postDetails?.categories && postDetails?.categories?.length ? postDetails.categories[0] : null;

  return (

    <div className={'lg:w-180 sm:w-full mx-auto my-8 mt-18'}>
      <PostsHeader
        title={title}
        description={description}
        category={category}
        created={created}
      />
      <PostBody {...postContent}/>
    </div>
  )
}
