import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";
import { Button } from "../components/button/Button";
import { MetricCard } from "../components/cards/MetricCard";
import { Video } from "../components/video/Video";

const VerticalFeatures = () => {
  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <div className="md:grid-rows-10">
      <div className="flex lg:flex-row flex-col bg-gray-2400 ">
        <div className="pl-20 pr-6 pt-48">
          <div className="text-primary-1100 text-left text-6xl font-bold">
            <span className="gradient">ferveret</span> technology
          </div>
          <div className="text-primary-1100 text-left text-2xl pt-4">
            reduces the chip temperature by a factor 2 enabling more powerful
            (~2X) CPUs and GPUs.
          </div>
          <div className="pt-12">
            {" "}
            <Button primary>
              <span style={{ fontSize: "16px" }}>Learn More</span>
            </Button>
          </div>
        </div>
        <div>
          <img src="/assets/images/case.png" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:py-60 pt-28 bg-primary-1100  px-4 sm:px-12 md:px-16 lg:px-48">
        <div data-aos="fade-up" className="p-6 	bg-primary-1100">
          <h1 className="lg:text-6xl text-3xl font-bold text-gray-1200 p-3 w-full text-center">
            Data centers are dirty and expensive{" "}
          </h1>
          <p className="text-1xl md:text-2xl text-gray-1200 p-3 px-48 text-center ">
            If nothing changes, data centers will generate about 14% of the
            total worldwide carbon emission by 2040. About 40% of these
            emissions is due to inefficient cooling, which is also expensive.
          </p>
          <div className="" data-aos-delay="1000">
            <img
              className="h-full w-full"
              src="/assets/images/lineCharts.png"
            />
          </div>
          <h1 className="md:text-4xl text-3xl font-bold text-gray-1200 w-full p-1 text-center">
            <span className="gradient">ferveret</span> technology
          </h1>
          <p className="md:text-4xl text-3xl font-bold text-gray-1200 px-48 p-1 w-full text-center">
            Eliminates this waste of money and the associated emissions.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xlg bg-gray-2400 lg:pt-36 pt-24 px-4 sm:px-12 md:px-16 xl:px-60">
        <div
          className="text-center lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-gray-2400"
          data-aos="fade-up"
        >
          <h2
            className="lg:text-5xl text-3xl text-primary-1100 font-bold text-center"
            // eslint-disable-next-line
          >
            Data centers today – Air cooled
          </h2>

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6 px-48 pt-20 space-y-8">
            <li className="text-gray-1500 ">
              • 40% of the total electricity in a typical data centers today is
              wasted for cooling the servers.
            </li>
            <li className="text-gray-1500 ">
              • Air cooling results in a waste of space.
            </li>
            <li className="text-gray-1500 ">
              • Air cooling has high maintenance and labor costs
            </li>
          </ul>
          <p className="text-primary-1100 text-center font-bold lg:text-3xl text-2xl px-48 pt-20">
            All these issues are consequence of the poor heat removal capability
            of air cooling
          </p>
        </div>
      </div>
      <div className="pt-6 px-4  bg-gray-2400">
        <div
          className="m-auto w-full lg:pb-64 pb-32 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Video src="/assets/videos/video1.mp4" delay={1500} />
        </div>
      </div>

      <div className="max-w-screen-xlg bg-gray-2400 px-4 sm:px-12 md:px-16 xl:px-60">
        <div
          className="text-center lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-gray-2400"
          data-aos="fade-up"
        >
          <h2 className="lg:text-5xl text-3xl text-primary-1100 font-bold text-center">
            <span className="gradient">ferveret</span> technology – Subcooled
            boiling
          </h2>

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6 px-48 pt-20 space-y-8">
            <li className="text-gray-1500">
              • Will save 96% of the energy wasted for cooling in air-cooled
              data center.
            </li>
            <li className="text-gray-1500">
              • Same IT power as air-cooled data centers in a 75% smaller
              footprint.
            </li>
            <li className="text-gray-1500">
              • Minimum maintenance and labor costs.
            </li>
          </ul>
          <p className="text-primary-1100 text-center font-bold lg:text-3xl text-2xl px-48 pt-20">
            <span className="gradient">ferveret</span> technology reduces the
            chip temperature by a factor 2 enabling more powerful (~2X) CPUs and
            GPUs.
          </p>
        </div>
      </div>
      <div className="px-4 pt-6  bg-gray-2400">
        <div
          className="m-auto w-full pb-36  "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Video src="/assets/videos/video2.mp4" delay={1500} />
        </div>
      </div>
      <div className="flex flex-col bg-gray-1100">
        <div className="text-center text-6xl font-bold px-96 pt-40 ">
          Benefits of working with <span className="gradient">ferveret</span>
        </div>
        <div className="bg-gray-1100 flex flex-wrap justify-evenly pt-20 pb-48 px-6 sm:px-12 md:px-16 lg:px-60">
          <MetricCard
            title="Energy"
            description="Saves 96% of the energy wasted for cooling in air-cooled data
          center."
            icon={<img src="/assets/icons/energyIcon.png" />}
          />
          <MetricCard
            title="Footprint"
            description="Same IT power as air-cooled data centers in a 75% smaller
          footprint."
            icon={<img src="/assets/icons/footPrint.png" />}
          />
          <MetricCard
            title="Cost"
            description="Minimumize maintenance and labor costs."
            icon={<img src="/assets/icons/costIcon.png" />}
          />
          <MetricCard
            title="Performance"
            description="Reduces the chip temperature by a factor 2
          enabling more powerful (~2X) CPUs and GPUs"
            icon={<img src="/assets/icons/performanceIcon.png" />}
          />
        </div>
      </div>
      <div className="flex flex-col bg-primary-1100 pt-16">
        <div className="text-center text-6xl font-bold">Our Supporters</div>
        <div className="flex flex-row space-x-56 justify-center pt-36 pb-72">
          <img src="/assets/images/yc.png" />
          <img src="/assets/images/e14.png" />
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatures };
