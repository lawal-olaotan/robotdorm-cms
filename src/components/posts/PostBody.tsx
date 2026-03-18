'use client';
import React, {Fragment} from 'react';
import {CtaField, PostBodyProps, PostIntroContentProps, PostMainContentProps} from "@/components/posts/posts.types";
import {VideoPlayer} from "@/components/posts/Video";
import Link from "next/link";


const CtaComponent = ({cta}: { cta: CtaField | null }) => {

  if (!cta || !cta.text || !cta.url) {
    return null;
  }

  return (<div className={'my-8'}>
    <Link href={cta.url} className={'py-4 px-8 rounded-full text-white bg-primary'}>
      {cta.text}
    </Link>
  </div>)
}

const IntroContent = ({contents, cta}: PostIntroContentProps) => {

  return (
    <Fragment>
      {contents && contents.length ? contents.map((content) => (
        <div key={content._key} className={"leading-7 not-first:mt-6"}>
          <span>{content.text}</span>
        </div>
      )) : null}
      {
        cta && <CtaComponent cta={cta}/>
      }
    </Fragment>
  )
}

const MainContent = ({contents, title}: PostMainContentProps) => (
  contents && contents.length ? (
    <div className={'my-12'}>
      {title && <h2 className={'text-2xl font-semibold mb-8'}>{title}</h2>}
      {contents.map((step, index) => (
        <div key={index} className={'mb-8'}>
          <h3 className={'text-xl font-medium mb-4'}>{step.title}</h3>
          <p className={'text-gray-700 mb-4'}>{step.description}</p>
          {/*{step.videoUrl && (*/}
          {/*  <VideoPlayer*/}
          {/*    src={new URL(step?.videoUrl).href ?? null}*/}
          {/*  />*/}
          {/*)}*/}
          { step?.stepCta && (
            <CtaComponent cta={step?.stepCta}/>
          )}
        </div>
      ))}
    </div>
  ) : null
)

export const PostBody = (content: PostBodyProps) => {

  const {body: introContent, introductionCta, mainContentTitle, steps, video} = content;

  console.log('PostBody content:', steps);

  return (
    <div className={'lg:px-6 px-4 my-8'}>
      <IntroContent contents={introContent} cta={introductionCta}/>
      <MainContent title={mainContentTitle} contents={steps || []}/>
      {video && (
        <div className={'my-12'}>
          <VideoPlayer
            src={new URL(video).href ?? null}
          />
        </div>
      )}
    </div>
  );
};
