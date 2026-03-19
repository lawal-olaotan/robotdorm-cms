import { groq } from 'next-sanity';

interface QueryPayload {
  start: number;
  end: number;
  sortDirection?: string;
  category?: string;
}

const validateQueryPayload = (payload: QueryPayload) => {
  if (payload.start < 0 || payload.end <= payload.start) {
    throw new Error(
      `Invalid pagination parameters: start (${payload.start}) must be >= 0 and end (${payload.end}) must be > start`,
    );
  }

  const validSortDirections = ['asc', 'desc'];
  if (payload.sortDirection && !validSortDirections.includes(payload.sortDirection)) {
    throw new Error(
      `Invalid sort direction: ${payload.sortDirection}. Allowed values are: ${validSortDirections.join(', ')}`,
    );
  }

  const allowedCategories = ['blog', 'releases', undefined];
  if (payload.category && !allowedCategories.includes(payload.category)) {
    throw new Error(
      `Invalid category: ${payload.category}. Allowed categories are: ${allowedCategories.join(', ')}`,
    );
  }
};

export const getAllPosts = (queryPayload: QueryPayload): string => {
  validateQueryPayload(queryPayload);

  const categoryFilter = queryPayload.category
    ? ` && references(*[_type == "category" && slug.current == "${queryPayload.category}"]._id)`
    : '';

  return groq`*[_type == "post"${categoryFilter}] | order(created ${queryPayload.sortDirection}) [${queryPayload.start}...${queryPayload.end}]{
      _id,
      title,
      "categories": categories[]->title,
      "slug": slug.current,
      created,
      "thumbnail": { "asset": thumbnail.asset->url, "alt": thumbnail.alt }
      }`;
};

export const getPostsBySlug = (
  slug: string,
) => groq`*[_type == "post" && slug.current == "${slug}"]{
    _id,
    title,
    "slug": slug.current,
    "categories": categories[] ->
    {
      "title": title,
      "slug": slug.current
    },
    "introductionCta": introductionCta {
      "text": ctaText,
      "url": ctaUrl
    },
    created,
    description,
    video,
    "body": body[]{ _key, "text": array::join(children[].text, " ") },
    mainContentTitle,
    "steps": steps[]{
      "title": stepTitle,
      "description": stepDescription[]{ _key, "text": array::join(children[].text, " ") },
      "videoUrl": { "asset": stepVideo.asset->url, "alt": stepVideo.alt },
      "stepCta": stepCta {
        "text": ctaText,
        "url": ctaUrl
      }
    }}`;

export const getSanityBaseUrl = () => {
  const { PROJECT_ID, SANITY_DATASET } = process.env;

  if (!PROJECT_ID || !SANITY_DATASET) {
    throw new Error('Missing environment variables: PROJECT_ID and SANITY_DATASET are required');
  }

  return `https://${PROJECT_ID}.api.sanity.io/v2025-08-23/data/query/${SANITY_DATASET}`;
};
