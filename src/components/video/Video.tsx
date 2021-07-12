type IVideoProps = {
  src: string;
  autoPlay: boolean;
};

const Video = (props: IVideoProps) => {
  return (
    <div className="m-auto ">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className="mx-w-full w-full" autoPlay={props.autoPlay} loop>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};

export { Video };
