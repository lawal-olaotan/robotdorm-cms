'use client'
import React from "react";
import {PostDetail} from "@/components/posts/posts.types";
import {PostsHeader} from "@/components/posts/PostsHeader";


export const PostView = (postDetails: PostDetail) => {

  const {title, description, created} = postDetails;

  const category = postDetails?.categories && postDetails?.categories?.length ? postDetails.categories[0] : null;

  return (

    <div className={'lg:w-160 sm:w-full mx-auto my-8 px-4 mt-18'}>
      <PostsHeader
        title={title}
        description={description}
        category={category}
        created={created}
      />
    </div>
  )
}
