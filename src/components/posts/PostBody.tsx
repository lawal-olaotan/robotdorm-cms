'use client';
import React from 'react';
import {PostBodyProps, PostMainBody, PostStep} from "@/components/posts/posts.types";
import {VideoPlayer} from "@/components/posts/Video";

const IntroContent = ({ contents }: { contents: PostMainBody[] }) => (
  contents && contents.length ? contents.map((content) => (
    <div key={content._key} className={"leading-7 not-first:mt-6"}>
      <span>{content.text}</span>
    </div>
  )) : null
)

export const MainContent = ({contents}: {contents:  PostStep[]}) => (
  contents && contents.length ? (
    <div className={'my-12'}>
      {contents.map((step, index) => (
        <div key={index} className={'mb-8'}>
          <h3 className={'text-xl font-medium mb-4'}>{step.title}</h3>
          <p className={'text-gray-700 mb-4'}>{step.description}</p>
          {step.videoUrl && (
            <VideoPlayer
              src={new URL(step?.videoUrl).href ?? null}
            />
          )}
        </div>
      ))}
    </div>
  ) : null
)


export const PostBody = (content: PostBodyProps) => {

  const {body: introContent, steps, video} = content;

  return (
    <div className={'lg:px-6 px-4 my-8'}>
      <IntroContent contents={introContent}/>
      <MainContent contents={steps || []}/>
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
