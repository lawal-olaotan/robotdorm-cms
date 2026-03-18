'use server';

import React from 'react';
import { DynamicPageProps } from '@/types/page.type';
import { loadPostBySlug } from '@/services/sanity/sanity.services';
import { PostView } from '@/components/posts/PostView';

export default async function Post({ params }: DynamicPageProps) {
  const response = await params;

  if (!response) {
    return null;
  }

  const { slug } = response;
  if (!slug || !slug.length) {
    // TODO: return content not found page
    return null;
  }

  const [postSlug] = slug;
  const postPayload = await loadPostBySlug(postSlug);

  if (!postPayload || !postPayload.result || !postPayload.result.length) {
    return null;
  }

  const post = postPayload.result[0];

  return <PostView {...post} />;
}
