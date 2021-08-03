import React from "react";

import { Video } from "../components/video/Video";
import { Meta } from "../layout/Meta";
import { Footer } from "../templates/Footer";
import Navbar from "../templates/Navbar";
import { AppConfig } from "../utils/AppConfig";

const solution = () => {
  return (
    <div className="antialiased bg-gray-1300" style={{ fontFamily: "Mulish" }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      {/* todo fix opacity */}
      <div className="flex flex-col items-center bg-solution-hero bg-opacity-25	">
        <div className="text-6xl font-bold text-primary-1100 pt-80">
          How ferveret technology works
        </div>
        <div className="text-3xl text-center text-primary-1100 px-56 pt-24 pb-96">
          Our technology uses a cooling process called subcooled nucleate
          boiling. This is the cooling process used in nuclear reactors, by
          which our tank design is inspired.
        </div>
      </div>
      <div className="xl:w-full p-14 bg-black ">
        <Video src="/assets/videos/video3.mp4" delay={100} />
      </div>
      <div className="max-w-screen-xlg bg-gray-2400 pt-24 px-4 sm:px-12 md:px-16 xl:px-60">
        <div
          className="text-center lg:p-12 p-6 flex-shrink-0 bg-gray-2400"
          data-aos="fade-up"
        >
          <h2 className="lg:text-6xl text-3xl text-primary-1100 font-bold text-center">
            <span className="gradient">ferveret</span> technology – Subcooled
            boiling
          </h2>

          <p className="text-primary-1100 pt-12 text-center lg:px-28 lg:text-3xl text-2xl">
            Ferveret technology reduces the chip temperature by a factor 2
            enabling more powerful (~2X) CPUs and GPUs.
          </p>
        </div>
      </div>
      <div className="px-4 pt-32 sm:px-12 md:px-16 bg-gray-2400">
        <div
          className="m-auto w-full pb-36  "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <Video src="/assets/videos/video2.mp4" delay={1500} />
        </div>
      </div>

      <div className="flex xl:flex-row flex-col justify-center bg-primary-1100 pt-32 pb-52 px:8 sm:px-12 md:px-16 lg:px-96 py-8">
        <div className="lg:p-40 p-6 space-y-8 flex-shrink-0 shadow-lg	bg-primary-1100 w-full">
          <div className="font-bold md:text-center text-gray-1200 text-3xl text-center md:text-5xl ">
            How our technology is different than our competitors
          </div>
          <p className="pt-4 lg:text-2xl text-1xl text-center">
            There are many companies in the immersion cooling space. Their
            technology is either based on single phase immersion cooling or two
            phase immersion cooling. Each company tries to make the case that
            one is better than the other one.
          </p>
          <p className="pt-4 lg:text-2xl text-1xl text-center">
            At Ferveret, we understand pro and cons of both techniques, so our
            technology combines both. We take advantages of their pros, and
            eliminate the cons
          </p>
          <p className="pt-4 lg:text-2xl text-1xl text-center">
            Subcooled nucleate boiling allows removing exceptionally high heat
            fluxes from processors or other heat generating components. While we
            take advantage of the phase change (i.e., boiling) on top of the
            heat source, everything looks like a single phase immersion cooling
            solution from outside. With our solution there is no vapor plenum on
            top of our tank, which helps reducing fluid losses significantly
            compared to conventional two phase immersion cooling.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default solution;
