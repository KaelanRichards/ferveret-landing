type IVideoProps = {
  src: string;
  autoPlay: boolean;
};

const Video = (props: IVideoProps) => {
  return (
    <div className="w-1/2 m-auto">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video autoPlay={props.autoPlay} loop>
        <source src={props.src} type="video/mp4" />
      </video>
    </div>
  );
};

export { Video };
