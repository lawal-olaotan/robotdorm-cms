import {groq} from 'next-sanity'

export const videoDemosCollectionQuery = groq`
*[_type == "onBoardingDemoItem"]{
  _id,
  videoSet[]{
    _key,
    title,
    subTitle,
    thumbnail{ asset->{_id, url}, alt },
    video{ asset->{ playbackId, duration } }
  }
}`;

export const demoVideoQuery = `*[_type == "stream"] {
  _id,
    "title": demoVideo.title,
    "subTitle": demoVideo.subTitle,
    "thumbnailUrl": demoVideo.thumbnail.asset->url,
    "thumbnailAlt": demoVideo.thumbnail.alt,
    "playbackId": demoVideo.video.asset->playbackId
}`;
