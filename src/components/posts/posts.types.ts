
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

export interface PostIntroContents {
  _key?: string;
  text: string;
}

export interface CtaField {
  text: string;
  url: string;
}

export interface PostMainContents {
  description: string;
  title: string;
  videoUrl: string | null;
  stepCta: CtaField | null;
}

export interface PostDetail {
  _id: string;
  body: PostIntroContents[];
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

export type PostBodyProps = Omit<PostDetail,  '_id' | 'title' | 'description' | 'created' | 'categories' | 'slug'>;

export interface PostIntroContentProps {
  contents: PostIntroContents[];
  cta: CtaField | null;
}

export interface PostMainContentProps {
  title: string | null;
  contents: PostMainContents[];
}
