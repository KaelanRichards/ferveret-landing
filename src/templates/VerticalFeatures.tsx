import React from "react";

import { FounderCard } from "../components/cards/FounderCard";
import { MetricCard } from "../components/cards/MetricCard";
import { Video } from "../components/video/Video";

const VerticalFeatures = () => (
  <div className="md:grid-rows-10">
    <div className="flex flex-col items-center pt-40 bg-gray-1300 px-6 sm:px-12 md:px-16 lg:px-60">
      <h1 className="text-4xl font-bold text-gray-1200 pt- p-12 text-center">
        Data is Dirty and Expensive
      </h1>
      <p className="text-2xl text-gray-1200 font-bold text-center">
        A simple google search consumes the same amount of energy as turning on
        a 60W light bulb for 17 seconds
      </p>
      <div className="pt-36  pb-32">
        <img className="h-full w-full" src="/assets/images/lineCharts.png" />
      </div>
    </div>
    <div className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 lg:px-60">
      <div className="text-center pt-36 pb-5">
        <h2 className="text-4xl text-gray-200 font-bold">
          Air Cooled Data Centers Today
        </h2>
        <div className="m-auto text-gray-200 text-2xl py-12">
          About 40% of the total electricity consumed in a data center is used
          for cooling.
        </div>
        <div className="m-auto w-4/6 py-36 bg-gray-1100">
          <Video autoPlay src="/assets/videos/video1.mp4" />
        </div>
      </div>
    </div>
    <div className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 lg:px-60">
      <div className="text-center pt-32 pb-5 flex flex-col space-y-12">
        <h2 className="text-4xl text-gray-200 font-bold">
          FERVERET Technology
        </h2>
        <div className="mt-4 text-gray-200 text-2xl">
          FERVERET tank can turn your air-cooled data center into an immersion
          cooled data center over night
        </div>
        <div className="m-auto w-5/6 py-30 bg-gray-1100">
          <Video autoPlay src="/assets/videos/video2.mp4" />
        </div>
      </div>
    </div>
    <div className="bg-gray-1100 flex flex-wrap justify-evenly pt-20 pb-48 px-6 sm:px-12 md:px-16 lg:px-60">
      <MetricCard
        title="Energy"
        description="Reduces the electricity consumption, due to
        cooling, by 96%."
        icon={<img src="/assets/icons/energyIcon.png" />}
      />
      <MetricCard
        title="Footprint"
        description="Reduces the footprint of the data center by 75%"
        icon={<img src="/assets/icons/footPrint.png" />}
      />
      <MetricCard
        title="Cost"
        description="Reduces the cost of operation of the data center by 50%"
        icon={<img src="/assets/icons/costIcon.png" />}
      />
      <MetricCard
        title="Performance"
        description="Immersion cooling allows 2x higher performance"
        icon={<img src="/assets/icons/performanceIcon.png" />}
      />
    </div>

    <div className="flex md:flex-row flex-col  bg-gray-2000 ">
      <div className="flex flex-col w-1/2 space-y-72 justify-start pt-32 pl-6 sm:pl-12 md:pl-16 lg:pl-60">
        <div className="font-bold md:text-right text-gray-1900 text-3xl text-center md:text-5xl">
          Immersion Cooling
        </div>
        <div className="text-gray-1900 text-2xl md:text-center w-full">
          palceholder
        </div>
        <div className="text-gray-1900 text-2xl md:text-center">
          palceholder
        </div>
        <div className="text-gray-1900 text-2xl md:text-center">
          palceholderpa
        </div>
      </div>
      <div className="bg-immersion-cooling w-full max-w-7xl z-10" />
    </div>

    <div className="flex xl:flex-row flex-col space-x-40 bg-gray-1300 py-36 px-6 sm:px-12 md:px-16 lg:px-60">
      <div className="flex flex-col md:flex-1 space-y-12 justify-start md:p-6 m:pr-12">
        <div className="font-black text-left text-gray-1200 text-5xl">
          Air cooling vs Immersion cooling
        </div>
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
        <div className="text-gray-1200 md:text-2xl text-left">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>

        <div className="text-gray-1200 md:text-2xl text-left">
          palceholder palceholder palceholder palceholderpalceholder
        </div>
      </div>
      <div className="bg-gray-1300 md:w-6/12 m-auto md:pt-12">
        <img src="/assets/images/verticalBarChart.png" />
      </div>
    </div>
    <div className="flex flex-col bg-gray-1300 pt-12 text-center px-6 sm:px-12 md:px-16 lg:px-60">
      <div className="text-gray-1200 text-3xl font-black">
        Co2 emission reduction
      </div>
      <div className="pt-8 text-gray-1200 md:text-2xl m-auto w-7/12">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
      </div>
    </div>
    <div className="bg-gray-1300 pt-24 px-6 sm:px-12 md:px-16 lg:px-60">
      <img
        src="/assets/images/horizontalBarChart.png"
        className="m-auto md:w-11/12  pt-5"
      />
    </div>
    <div className="bg-gray-1300 pt-44 flex flex-col  m-auto items-center px-6 sm:px-12 md:px-16 lg:px-60">
      <hr
        style={{
          borderTop: "7px solid #DCDCDC",
          width: "70%",
        }}
      />
    </div>
    <div className="bg-gray-1300 text-center pt-40 pb-36 px:8 sm:px-12 md:px-16 lg:px-60">
      <div className="m-auto text-5xl font-black text-gray-1800">
        Our Founders
      </div>
    </div>
    <div className="bg-gray-1300 flex flex-wrap justify-evenly pb-40 pt-8 px:8 sm:px-12 md:px-16 lg:px-60">
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
  </div>
);

export { VerticalFeatures };
