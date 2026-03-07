
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

export interface PostStep {
  description: string;
  title: string;
  videoUrl: string | null;
}

export interface PostDetail {
  _id: string;
  body: unknown | null;
  categories: Category[];
  created: string;
  description: string;
  slug: string;
  steps: PostStep[] | null;
  title: string;
  video: string | null;
}
