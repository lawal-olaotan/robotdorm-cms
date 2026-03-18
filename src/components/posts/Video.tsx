'use client';

import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => {
  return <ReactPlayer src={src} loop controls width={'100%'} height={'400px'} />;
};
