'use client';
import React, { Fragment } from 'react';
import {
  BlockContents,
  CtaField,
  PostBodyProps,
  PostIntroContentProps,
  PostMainContentProps,
} from '@/components/posts/posts.types';
import { VideoPlayer } from '@/components/posts/Video';
import Link from 'next/link';
import Image from 'next/image';

const BlockContent = ({ contents }: { contents: BlockContents[] }) =>
  contents && contents.length
    ? contents.map((content) => (
        <div key={content._key} className={'leading-7 not-first:mt-6'}>
          <span>{content.text}</span>
        </div>
      ))
    : null;

const CtaComponent = ({ cta }: { cta: CtaField | null }) => {
  if (!cta || !cta.text || !cta.url) {
    return null;
  }

  return (
    <div className={'my-8'}>
      <Link href={cta.url} className={'py-4 px-8 rounded-full text-white bg-primary'}>
        {cta.text}
      </Link>
    </div>
  );
};

const IntroContent = ({ contents, cta }: PostIntroContentProps) => {
  return (
    <Fragment>
      <BlockContent contents={contents} />
      {cta && <CtaComponent cta={cta} />}
    </Fragment>
  );
};

const MainContent = ({ contents, title }: PostMainContentProps) =>
  contents && contents.length ? (
    <div className={'my-20'}>
      {title && <h2 className={'text-2xl font-semibold mb-8'}>{title}</h2>}
      {contents.map((step, index) => (
        <div key={index} className={'mb-14'}>
          <h3 className={'text-xl font-medium mb-4'}>{step.title}</h3>
          <BlockContent contents={step.description} />
          {step?.videoUrl?.asset && (
            <Image
              src={step.videoUrl.asset}
              alt={step.videoUrl.alt}
              width={800}
              height={450}
              className={'object-cover rounded-md'}
              loading="lazy"
            />
          )}
          {step?.stepCta && <CtaComponent cta={step?.stepCta} />}
        </div>
      ))}
    </div>
  ) : null;

export const PostBody = (content: PostBodyProps) => {
  const { body: introContent, introductionCta, mainContentTitle, steps, video } = content;
  return (
    <div className={'lg:px-6 px-4 my-8'}>
      <IntroContent contents={introContent} cta={introductionCta} />
      <MainContent title={mainContentTitle} contents={steps || []} />
      {video && (
        <div className={'my-12'}>
          <VideoPlayer src={new URL(video).href ?? null} />
        </div>
      )}
    </div>
  );
};
