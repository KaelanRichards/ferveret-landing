import React from "react";

type IVideoProps = {
  src: string;
  // delay?: number;
};

const Video = (props: IVideoProps) => {
  // const vidRef = useRef<HTMLVideoElement>(null);
  const { src } = props;
  // const handlePlayVideo = () => {
  //   setTimeout(() => {
  //     // eslint-disable-next-line
  //     vidRef?.current?.play() ?? console.log("Video not found");
  //   }, delay);
  // };

  return (
    // <Waypoint onEnter={() => handlePlayVideo()}>
    // ref={vidRef}
    <video className="mx-w-full h-full w-full" autoPlay muted loop>
      <source src={src} type="video/mp4" />
    </video>
    // </Waypoint>
  );
};

export { Video };
