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
      <div className="flex flex-col items-center pt-60 bg-gray-1300 px-6 sm:px-12 md:px-16 lg:px-60">
        <h1 className="lg:text-5xl text-4xl font-bold text-gray-1200 p-12 text-center">
          Data centers are dirty and expensive{" "}
        </h1>
        <p className="text-1xl text-gray-1200 text-center" data-aos="fade-up">
          If nothing changes, data centers will generate about 14% of the total
          worldwide carbon emission by 2040. About 40% of these emissions is due
          to inefficient cooling, which is also expensive.
        </p>
        <div className="pt-16  pb-12" data-aos="fade-up" data-aos-delay="1000">
          <img className="h-full w-full" src="/assets/images/lineCharts.png" />
        </div>
      </div>
      <div
        className="flex flex-col items-center pt-30 bg-gray-1300 px-6 sm:px-6 md:px-16 lg:px-60 "
        style={{ paddingBottom: "15%" }}
      >
        <h1
          className="md:text-5xl text-3xl font-bold text-gray-1200  p-12 text-center"
          data-aos="fade-up"
        >
          <span className="gradient">ferveret</span> technology
        </h1>
        <p
          className="md:text-2xl text-1xl text-gray-1200 text-center"
          data-aos="fade-up"
        >
          Eliminates this waste of money and the associated emissions.
        </p>
      </div>
      <div className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 xl:px-60">
        <div className="text-center pt-36 pb-5">
          <h2
            className="lg:text-6xl text-4xl text-gray-200 font-bold pt-8"
            // eslint-disable-next-line
            style={{ fontWeight: "bolder" }}
          >
            Data centers today – Air cooled
          </h2>
          <div className="m-auto text-gray-200 pb-12 text-center">
            <p
              className="xl:px-60 xl:text-3xl text-2xl space-y-2 xl:pt-28 pt-12"
              style={{ fontWeight: "bolder" }}
            >
              Air cooling inefficiencys in heat removal lead to the following
              consequences
            </p>
          </div>
          <ul className="flex flex-col text-left xl:pl-56 text-1xl">
            <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
              • 40% of the total electricity in a typical data centers today is
              wasted for cooling the servers.
            </li>
            <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
              • Air cooling results in a waste of space.
            </li>
            <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
              • Air cooling has high maintenance and labor costs
            </li>
          </ul>
          <div
            className="m-auto w-full py-36 bg-gray-1100"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Video src="/assets/videos/video1.mp4" delay={1500} />
          </div>
        </div>
      </div>
      <div
        className="max-w-screen-xlg bg-gray-1100 px-6 sm:px-12 md:px-16 xl:px-60"
        style={{ paddingTop: "5%" }}
      >
        <div className="text-center pt-32 pb-5 flex flex-col space-y-12">
          <h2
            className="lg:text-6xl text-4xl text-gray-200 font-bold"
            // eslint-disable-next-line
            style={{ fontWeight: "bolder" }}
          >
            <span className="gradient">ferveret</span> technology – Subcooled
            boiling
          </h2>
          <div
            className="mt-4 text-gray-200 text-1xl"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="m-auto text-gray-200 pb-12 text-center">
              <p
                className="xl:px-36 xl:text-3xl text-2xl pt-6"
                style={{ fontWeight: "bolder" }}
              >
                Eliminates this waste of money and the associated emissions.
              </p>
            </div>
            <ul className="flex flex-col text-left xl:text-1xl space-y-2 xl:px-36 md:px-16 sm:px-12 ">
              <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
                • Will save 96% of the energy wasted for cooling in air-cooled
                data center.
              </li>
              <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
                • Same IT power as air-cooled data centers in a 75% smaller
                footprint.
              </li>
              <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
                • Minimum maintenance and labor costs.
              </li>
              <li className="text-gray-200 sm:px-12 md:px-16 lg:px-30">
                • Ferveret technology reduces the chip temperature by a factor 2
                enabling more powerful (~2X) CPUs and GPUs.
              </li>
            </ul>
          </div>
          <div
            className="m-auto w-full py-16 xl:py-32 bg-gray-1100"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <Video src="/assets/videos/video2.mp4" delay={1500} />
          </div>
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
        className="font-bold lg:text-left text-gray-1200 bg-gray-1300 text-3xl text-center md:text-6xl pt-44 pb-12 px-6 sm:pl-12 md:pl-16 lg:pl-35 "
        style={{ fontWeight: "bolder" }}
      >
        <h2>
          How does <span className="gradient">ferveret</span> technology work?
        </h2>
      </div>
      <div className="flex xl:flex-row flex-col bg-gray-1300  pb-48 ">
        <div
          className="flex flex-col xl:w-1/2 w-full justify-center xl:justify-start px-6 sm:pl-12 md:pl-16 lg:pl-35"
          data-aos="fade-right"
        >
          <div className="text-gray-1200 text-1xl md:text-left text-center w-full lg:px-10">
            <p
              className="lg:pr-10"
              style={{ lineHeight: "1.5", fontSize: "1.1rem" }}
            >
              • Our technology uses a cooling process called subcooled nucleate
              boiling. This is the cooling process used in nuclear reactors, by
              which our tank design is inspired.
            </p>
          </div>
          <div className="text-gray-1200 text-1xl md:text-left text-center lg:px-10 pt-10">
            <p style={{ lineHeight: "1.5" }}>
              {" "}
              • Our tanks can turn your air-cooled data center into a
              Ferveret-cooled data center. overnight.
            </p>
          </div>
          <div className="font-bold md:text-left text-gray-1200 text-3xl text-center md:text-4xl pt-10">
            How are technology is different than our competitors?
          </div>
          <div className="text-gray-1200 text-1xl md:text-left md:px-10 text-center pt-5">
            <p style={{ lineHeight: "1.5", fontSize: "1.1rem" }}>
              • There are many companies in the immersion cooling space. Their
              technology is either based on single The picture of Ferveret data
              center Video of air cooled racked and how boards will go to our
              tank phase immersion cooling or two phase immersion cooling. Each
              company tries to make the case that one is better than the other
              one.
            </p>
          </div>
          <div className="text-logo-100  md:text-left md:px-10 text-center pt-5">
            <p style={{ paddingTop: "15px", fontSize: "1.1rem" }}>
              • At Ferveret, we understand pro and cons of both techniques, so
              our technology combines both. We take advantages of their pros,
              and eliminate the cons
            </p>
          </div>
          <div className="text-gray-1200 text-1xl md:text-left md:px-10 text-center pb-7 pt-5">
            <p style={{ paddingTop: "15px", fontSize: "1.1rem" }}>
              • Subcooled nucleate boiling allows removing exceptionally high
              heat fluxes from processors or other heat generating components.
              While we take advantage of the phase change (i.e., boiling) on top
              of the heat source, everything looks like a single phase immersion
              cooling solution from outside. With our solution there is no vapor
              plenum on top of our tank, which helps reducing fluid losses
              significantly compared to conventional two phase immersion
              cooling.
            </p>
          </div>
        </div>
        <div className="xl:w-7/12 h-full">
          <Video src="/assets/videos/video3.mp4" delay={100} />
        </div>
      </div>

      <div className="bg-gray-1700 flex flex-col space-y-3  px:8 sm:px-12 md:px-16 lg:px-60 py-8">
        <div
          className="m-auto lg:text-3xl text-2xl text-gray-1800 pt-10"
          style={{ textAlign: "center" }}
        >
          <h1 className=" font-bold">
            PLEASE CONTACT US IF YOU WANT TO KNOW MORE
          </h1>
          <p style={{ fontSize: "1.5rem" }}>info@ferveret</p>
        </div>
      </div>
      <div className="bg-gray-1300 pt-44 flex flex-col  m-auto items-center px-6 sm:px-12 md:px-16 lg:px-60">
        <hr
          style={{
            borderTop: "7px solid #DCDCDC",
            width: "70%",
          }}
        />
      </div>
      <div className="bg-gray-1300 text-center pt-40 pb-16 px:8 sm:px-12 md:px-16 lg:px-60">
        <div className="m-auto text-4xl font-bold text-gray-1800">
          Our Founders
        </div>
      </div>
      <div className="bg-gray-1300 flex flex-col xl:flex-row xl:space-x-3 justify-evenly pb-40 pt-8 px:2 sm:px-12 md:px-16 lg:px-60 items-center">
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
