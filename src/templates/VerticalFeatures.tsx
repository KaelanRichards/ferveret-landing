import React, { useEffect } from "react";

import Aos from "aos";

import "aos/dist/aos.css";
import { FounderCard } from "../components/cards/FounderCard";
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
      <div className="flex flex-col items-center lg:pt-60 pt-28 bg-gray-1300 px-4 sm:px-12 md:px-16 lg:px-60">
        <div
          data-aos="fade-up"
          className="p-6 flex-shrink-0 shadow rounded-md	bg-primary-1100"
        >
          <h1 className="lg:text-5xl text-3xl font-bold text-gray-1200 p-3 w-full text-left">
            Data centers are dirty and expensive{" "}
          </h1>
          <p className="text-1xl md:text-2xl text-gray-1200 p-3 text-left ">
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
          <h1 className="md:text-4xl text-3xl font-bold text-gray-1200 w-full p-1 text-left">
            <span className="gradient">ferveret</span> technology
          </h1>
          <p className="md:text-2xl text-1xl text-gray-1200 p-1 w-full text-left">
            Eliminates this waste of money and the associated emissions.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xlg bg-gray-1300 lg:pt-56 pt-24 px-4 sm:px-12 md:px-16 xl:px-60">
        <div
          className="text-center lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-primary-1100"
          data-aos="fade-up"
        >
          <h2
            className="lg:text-5xl text-3xl text-gray-1200 font-bold text-left"
            // eslint-disable-next-line
          >
            Data centers today – Air cooled
          </h2>

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6">
            <li className="text-gray-1200 ">
              • 40% of the total electricity in a typical data centers today is
              wasted for cooling the servers.
            </li>
            <li className="text-gray-1200 ">
              • Air cooling results in a waste of space.
            </li>
            <li className="text-gray-1200 ">
              • Air cooling has high maintenance and labor costs
            </li>
          </ul>
          <p className="text-gray-1200 text-left lg:text-3xl text-2xl">
            All these issues are consequence of the poor heat removal capability
            of air cooling
          </p>
        </div>
      </div>
      <div className="pt-6 px-4 sm:px-12 md:px-16 xl:px-60 bg-gray-1300">
        <div
          className="m-auto w-full lg:pb-64 pb-32 "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Video src="/assets/videos/video1.mp4" delay={1500} />
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="max-w-screen-xlg bg-gray-1300 px-4 sm:px-12 md:px-16 xl:px-60"
      >
        <div className="text-center lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-primary-1100">
          <h2 className="lg:text-5xl text-3xl text-gray-1200 font-bold text-left">
            <span className="gradient">ferveret</span> technology – Subcooled
            boiling
          </h2>

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6">
            <li className="text-gray-1200">
              • Will save 96% of the energy wasted for cooling in air-cooled
              data center.
            </li>
            <li className="text-gray-1200">
              • Same IT power as air-cooled data centers in a 75% smaller
              footprint.
            </li>
            <li className="text-gray-1200">
              • Minimum maintenance and labor costs.
            </li>
          </ul>
          <p className="text-gray-1200 text-left lg:text-3xl text-2xl">
            Ferveret technology reduces the chip temperature by a factor 2
            enabling more powerful (~2X) CPUs and GPUs.
          </p>
        </div>
      </div>
      <div className="px-4 pt-6 sm:px-12 md:px-16 xl:px-60 bg-gray-1300">
        <div
          className="m-auto w-full pb-36  "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Video src="/assets/videos/video2.mp4" delay={1500} />
        </div>
      </div>
      {/* <div className="bg-gray-1100 flex flex-wrap justify-evenly pt-20 pb-48 px-6 sm:px-12 md:px-16 lg:px-60">
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
      </div> */}
      <div
        data-aos="fade-down"
        className="font-bold lg:text-left text-gray-1200 bg-gray-1300 text-4xl text-center md:text-6xl lg:pt-44 pt:12 pt-8 px-4 sm:pl-12 md:pl-16 lg:pl-35 "
      >
        <h2>
          <span className="gradient">ferveret</span> technology
        </h2>
      </div>
      <div className="flex xl:flex-row flex-col justify-center bg-gray-1300 pt-4 pb-52 ">
        <div
          className="flex flex-col xl:w-1/2 w-full justify-center space-y-6 px-4 sm:pl-12 md:pl-16 lg:pl-35"
          data-aos="fade-right"
        >
          <div className="lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-primary-1100">
            <div className="font-bold md:text-left text-gray-1200 text-3xl text-center md:text-4xl">
              How ferveret technology works
            </div>
            <p className="pt-4 lg:text-2xl text-1xl">
              Our technology uses a cooling process called subcooled nucleate
              boiling. This is the cooling process used in nuclear reactors, by
              which our tank design is inspired.
            </p>

            <p className="pt-4 lg:text-2xl text-1xl">
              Our tanks can turn your air-cooled data center into a
              Ferveret-cooled data center. overnight.
            </p>
          </div>
          <div className="lg:p-12 p-6 flex-shrink-0 shadow rounded-md	bg-primary-1100">
            <div className="font-bold md:text-left text-gray-1200 text-3xl text-center md:text-4xl">
              How our technology is different than our competitors
            </div>
            <p className="pt-4 lg:text-2xl text-1xl">
              There are many companies in the immersion cooling space. Their
              technology is either based on single phase immersion cooling or
              two phase immersion cooling. Each company tries to make the case
              that one is better than the other one.
            </p>
            <p className="pt-4 lg:text-2xl text-1xl">
              At Ferveret, we understand pro and cons of both techniques, so our
              technology combines both. We take advantages of their pros, and
              eliminate the cons
            </p>
            <p className="pt-4 lg:text-2xl text-1xl">
              Subcooled nucleate boiling allows removing exceptionally high heat
              fluxes from processors or other heat generating components. While
              we take advantage of the phase change (i.e., boiling) on top of
              the heat source, everything looks like a single phase immersion
              cooling solution from outside. With our solution there is no vapor
              plenum on top of our tank, which helps reducing fluid losses
              significantly compared to conventional two phase immersion
              cooling.
            </p>
          </div>
        </div>

        <div className="xl:w-7/12 xl:p-0 xl:pr-4 h-full sm:px-12 md:px-16 p-4 pt-4">
          <Video src="/assets/videos/video3.mp4" delay={100} />
        </div>
      </div>

      <div className="shadow rounded-md	bg-logo-100 flex flex-col space-y-3  px:8 sm:px-12 md:px-16 lg:px-60 py-8">
        <div
          className="m-auto lg:text-3xl text-2xl text-primary-1100 pt-10"
          style={{ textAlign: "center" }}
        >
          <h1 className=" font-extrabold">
            PLEASE CONTACT US IF YOU WANT TO KNOW MORE
          </h1>
          <p style={{ fontSize: "1.5rem" }}>info@ferveret</p>
        </div>
      </div>
      <div className="bg-gray-1300 pt-44 flex flex-col  m-auto items-center px-6 sm:px-12 md:px-16 lg:px-60">
        <hr
          className=""
          style={{
            borderTop: "7px solid gradient",
            width: "70%",
          }}
        />
      </div>
      <div className="bg-gray-1300 text-center pt-40 pb-16 px:8 sm:px-12 md:px-16 xl:px-60">
        <div className="m-auto text-4xl font-bold text-gray-1200">
          Our Founders
        </div>
      </div>
      <div className="bg-gray-1300 flex flex-col xl:flex-row xl:space-x-3 justify-evenly pb-40 pt-8 px:2 sm:px-12 md:px-16 xl:px-60 items-center">
        <FounderCard
          name="Reza Azizian"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`}
          image="/assets/images/founder1.png"
        />
        <FounderCard
          name="Matteo Bucci"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
          image="/assets/images/founder2.png"
        />
      </div>

      <div className="h-48 bg-gray-1300" />
    </div>
  );
};

export { VerticalFeatures };
