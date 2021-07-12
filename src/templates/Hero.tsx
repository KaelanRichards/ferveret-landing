import { Button } from "../components/button/Button";
import { Logo } from "../components/logo/Logo";
import { Video } from "../components/video/Video";

const Hero = () => (
  <div className="bg-gray-1300">
    <div className="flex flex-row pl-24">
      <div className="p-10 flex-1 flex flex-col">
        <div className="">
          <Logo />
        </div>
        <div className="text-left  mr-12 pt-28">
          <h1 className="text-6xl leading-normal text-gray-1200 font-bold whitespace-pre-line leading-hero ">
            The most advanced and sustainable data center ever made.
          </h1>
          <div className="text-3xl mt-20 mb-16 mr-12 text-gray-1200">
            Enabling the most advanced, efficient, cost-competitive and
            sustainable data center ever made.
          </div>
          <div className="flex flex-row justify-start">
            <Button xl primary>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-1100 flex-1">
        <Video autoPlay src="/assets/videos/Landing_page_video.mp4" />
      </div>
    </div>
  </div>
);

export { Hero };
