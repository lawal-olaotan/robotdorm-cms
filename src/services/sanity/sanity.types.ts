
export interface PostThumbnail {
  alt: string;
  asset: string;
}

export interface PostsPreview {
  _id: string;
  categories: string[];
  created: string;
  slug: string;
  thumbnail: PostThumbnail;
  title: string;
}
