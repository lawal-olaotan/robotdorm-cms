export interface Category {
  slug: string;
  title: string;
}

export interface PostHeaderMetaData {
  category?: Category | null;
  created: string;
}

export interface PostHeader extends PostHeaderMetaData {
  title: string;
  description: string;
}

export interface BlockContents {
  _key?: string;
  text: string;
}

export interface CtaField {
  text: string;
  url: string;
}

export interface PostMainContents {
  description: BlockContents[];
  title: string;
  videoUrl: {
    asset: string;
    alt: string;
  };
  stepCta: CtaField | null;
}

export interface PostDetail {
  _id: string;
  body: BlockContents[];
  categories: Category[];
  mainContentTitle: string | null;
  introductionCta: CtaField | null;
  created: string;
  description: string;
  slug: string;
  steps: PostMainContents[] | null;
  title: string;
  video: string | null;
}

export type PostBodyProps = Omit<
  PostDetail,
  '_id' | 'title' | 'description' | 'created' | 'categories' | 'slug'
>;

export interface PostIntroContentProps {
  contents: BlockContents[];
  cta: CtaField | null;
}

export interface PostMainContentProps {
  title: string | null;
  contents: PostMainContents[];
}
