import React, { useEffect } from "react";

import Aos from "aos";

import { Button } from "../components/button/Button";
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
    <div className="bg-gray-1300" style={{ fontFamily: "Mulish" }}>
      <div className="flex flex-col lg:flex-row md:pl-5 ">
        <div className="md:px-10 px-6 lg:w-6/12  flex flex-col ">
          <div className="md:text-left md:mr-12 xl:pt-12 xl:px-12 pt-4 flex-shrink-0">
            <h1
              className="lg:text-2xl text-2xl text-gray-1200 font-bold"
              data-aos="fade-up"
            >
              /fervēret/
            </h1>
            <p data-aos="fade-up">
              Ferveret is a Latin word for boiling, which is what we believe
              will revolutionize the future of data centers.
            </p>
            <hr
              className="mt-20"
              style={{
                height: "3px",
                border: "none",
                // background: "rgb(255,255,255)",
                background: "grey",
              }}
              data-aos="fade-up"
            />
            <div
              className="text-4xl mt-12 mb-16 mr-12 text-gray-1200"
              data-aos="fade-up"
            >
              <p>
                Ferveret develops{" "}
                <span className="text-logo-100">liquid cooling technology</span>{" "}
                enabling the most advanced, efficient, cost-competitive and
                sustainable data center ever made
              </p>
            </div>
            <div
              className="flex flex-row justify-start mt-20"
              data-aos="fade-up"
            >
              <input
                style={{ width: "80%", padding: "2%" }}
                placeholder="email"
                type="text"
                className="text-line"
              />

              <Button primary>
                <span style={{ fontSize: "16px" }}>Learn More</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-1100 lg:w-7/12  h-full">
          <Video src="/assets/videos/video4.mp4" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
