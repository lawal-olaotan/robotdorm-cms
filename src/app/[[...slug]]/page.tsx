import React from 'react';
import { loadLatestPosts } from '@/services/sanity/sanity.services';
import { DynamicPageProps } from '@/types/page.type';
import { Preview } from '@/components/postsPreview/Preview';

export default async function Home({ params }: DynamicPageProps) {
  const { slug } = await params;
  const category = slug ? (slug[0] as string) : undefined;
  const latestPosts = await loadLatestPosts(category);
  console.log('latestPosts', latestPosts.result[0].thumbnail);

  return <Preview slug={category} posts={latestPosts.result} />;
}
