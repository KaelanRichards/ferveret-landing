import { Button } from "../components/button/Button";
import { Logo } from "../components/logo/Logo";

const Hero = () => (
  <div className="bg-gray-1300">
    <div className="flex flex-col md:flex-row md:pl-5">
      <div className="p-10 w-6/12  flex flex-col">
        <div className="">
          <Logo />
        </div>
        <div className="text-left  md:mr-12 mt-36">
          <h1 className="md:text-5xl text-5xl text-gray-1200 font-extrabold">
            The most advanced and sustainable data center ever made.
          </h1>
          <hr
            className="mt-20"
            style={{
              height: "3px",
              border: "none",
              // background: "rgb(255,255,255)",
              background:
                "linear-gradient(90deg, rgba(255,255,255,1) 4%, rgba(78,129,249,1) 51%, rgba(255,255,255,1) 98%)",
            }}
          />
          <div className="text-2xl mt-12 mb-16 mr-12 text-gray-1200">
            Enabling the most advanced, efficient, cost-competitive and
            sustainable data center ever made.
          </div>
          <div className="flex flex-row justify-start mt-20">
            <Button xl primary>
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-gray-1100 w-7/12  h-auto">
        <img src="/assets/images/hero-placeholder.png" />
        {/* <Video autoPlay src="/assets/videos/Landing_page_video.mp4" /> */}
      </div>
    </div>
  </div>
);

export { Hero };
