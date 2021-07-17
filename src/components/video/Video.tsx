/*eslint-disable */

type IVideoProps = {
  src: string;
  autoPlay: boolean;
};

const Video = (props: IVideoProps) => {
  return (
    <video className="mx-w-full h-full w-full" autoPlay={props.autoPlay} loop>
      <source src={props.src} type="video/mp4" />
    </video>
  );
};

export { Video };
