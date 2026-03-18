import { PostHeader, PostHeaderMetaData } from '@/components/posts/posts.types';
import { formatLongDate } from '@/formatters/date';
import Link from 'next/link';

export const MetaDataHeader = ({ category, created }: PostHeaderMetaData) => {
  const formattedCreatedByDate = formatLongDate(created);

  return (
    <div className="flex items-center justify-center text-sm leading-none font-medium space-x-4">
      <span className="text-black">{formattedCreatedByDate}</span>
      <Link href={`/${category?.slug}`} className="text-gray-600">
        {category?.title}
      </Link>
    </div>
  );
};

export const PostsHeader = (postHeader: PostHeader) => {
  const { title, category, created, description } = postHeader;
  return (
    <div className="my-4 border-b border-gray-300 text-center lg:px-6 px-2">
      <MetaDataHeader category={category} created={created} />
      <h1 className="scroll-m-20 text-center text-5xl font-medium tracking-tight text-balance my-10">
        {title}
      </h1>
      <p className={'text-md text-gray-700 my-8'}>{description}</p>
    </div>
  );
};
