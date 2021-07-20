import React, { useEffect } from "react";

import Aos from "aos";

import { Button } from "../components/button/Button";
import { Logo } from "../components/logo/Logo";
import { Video } from "../components/video/Video";

const Hero = () => {
  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);

  return (
    <div className="bg-gray-1300">
      <div className="flex flex-col md:flex-row md:pl-5">
        <div className="md:p-10 md:w-6/12  flex flex-col">
          <div className="p-4">
            <Logo />
          </div>
          <div className="md:text-left md:mr-12 mt-12 p-6">
            <h1
              className="lg:text-4xl text-2xl text-gray-1200 font-bold"
              data-aos="fade-up"
            >
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
              data-aos="fade-up"
            />
            <div
              className="text-1xl mt-12 mb-16 mr-12 text-gray-1200"
              data-aos="fade-up"
            >
              Enabling the most advanced, efficient, cost-competitive and
              sustainable data center ever made.
            </div>
            <div
              className="flex flex-row justify-start mt-20"
              data-aos="fade-up"
            >
              <Button primary>Learn More</Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-1100 md:w-7/12  h-full">
          <Video src="/assets/videos/video3.mp4" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
