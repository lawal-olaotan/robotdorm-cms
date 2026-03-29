'use client';

import React, { Fragment } from 'react';
import { BlockContents, BlockTextContent } from '@/components/posts/posts.types';

enum ContentMarksType {
  Strong = 'strong',
  Emphasis = 'em',
  Code = 'code',
  Underline = 'underline',
  StrikeThrough = 'strike-through',
}

interface BlockContentProps {
  contents: BlockContents[];
}

interface ContentChildrenProps {
  child: BlockTextContent;
}

const contentMarksMapper = (marksType: string[]) => {
  const marksMap: Record<ContentMarksType, string> = {
    [ContentMarksType.Strong]: 'font-semibold',
    [ContentMarksType.Emphasis]: 'italic',
    [ContentMarksType.Code]: 'bg-gray-100 px-1 rounded',
    [ContentMarksType.Underline]: 'underline',
    [ContentMarksType.StrikeThrough]: 'line-through',
  };

  const markStyles = marksType.reduce((acc, mark) => {
    const cssClass = marksMap[mark as ContentMarksType];
    if (cssClass) {
      acc.push(cssClass);
    }
    return acc;
  }, [] as string[]);

  return markStyles.join(' ');
};

const ContentChildren = ({ child }: ContentChildrenProps) => {
  if (!child || !child.text) {
    return null;
  }
  const marksClass = child.marks && child.marks.length ? contentMarksMapper(child.marks) : '';

  return (
    <span key={child._key} className={marksClass}>
      {child.text}
    </span>
  );
};

export const BlockContent = ({ contents }: BlockContentProps) => {
  return contents && contents.length
    ? contents.map((content) => (
        <div key={content._key} className={'leading-7 not-first:mt-2'}>
          {content.children && content.children.length > 0 && (
            <Fragment>
              {content.children.map((child) => (
                <ContentChildren key={child._key} child={child} />
              ))}
            </Fragment>
          )}
        </div>
      ))
    : null;
};
