import React, { useEffect } from "react";

import Aos from "aos";

import { Button } from "../components/button/Button";

const Hero = () => {
  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);

  return (
    <div
      className="bg-home-hero  lg:w-full lg:h-full"
      style={{ fontFamily: "Mulish" }}
    >
      <div className="flex flex-col w-1/2 pt-16 px-14">
        <div className="w-full">
          <img alt="logo" src="/assets/images/logo.png" />;{" "}
        </div>
        <hr
          className="mt-6  bg-gray-1300"
          style={{
            height: "3px",
            border: "none",
            // background: "rgb(255,255,255)",
          }}
        />
        <div className="lg:w-full lg:h-full lg:pr-4 pb-4 flex flex-col">
          <div
            data-aos="fade-up"
            className="text-left  xl:pt-12 xl:px-12 p-6 pt-4"
          >
            <h1 className="lg:text-2xl text-2xl text-primary-1100 font-black">
              /fervēret/
            </h1>
            <p className="text-primary-1100">
              ferveret is a Latin word for boiling, which is what we believe
              will revolutionize the future of data centers.
            </p>

            <div className="xl:text-4xl lg:text-3xl  text-2xl w-full  mt-6 mb-16 mr-12 text-left text-primary-1100 font-black">
              <p>
                <span className="gradient">ferveret</span> develops liquid
                cooling technology enabling the most advanced, efficient,
                cost-competitive and sustainable data center ever made
              </p>
            </div>
            <div className="flex flex-row justify-start pb-60 ">
              <Button primary>
                <span style={{ fontSize: "16px" }}>Learn More</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
