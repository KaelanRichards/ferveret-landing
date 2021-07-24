import React, { useRef } from "react";

import { Waypoint } from "react-waypoint";

type IVideoProps = {
  src: string;
  delay?: number;
};

const Video = (props: IVideoProps) => {
  const vidRef = useRef<HTMLVideoElement>(null);
  const { src, delay } = props;
  const handlePlayVideo = () => {
    setTimeout(() => {
      // eslint-disable-next-line
      vidRef?.current?.play() ?? console.log("Video not found");
    }, delay);
  };

  return (
    <Waypoint onEnter={() => handlePlayVideo()}>
      <video
        className="mx-w-full h-full w-full shoadow-md rounded-md"
        playsInline
        muted
        loop
        ref={vidRef}
      >
        <source src={src} type="video/mp4" />
      </video>
    </Waypoint>
  );
};

export { Video };
