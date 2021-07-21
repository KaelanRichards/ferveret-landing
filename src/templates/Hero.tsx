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
    <div className="bg-gray-1300" style={{ fontFamily: "Mulish" }}>
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
              /fervēret/ Ferveret is a Latin word for boiling, which is what we
              believe will revolutionize the future of data centers.
            </h1>
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
              className="text-1xl mt-12 mb-16 mr-12 text-gray-1200"
              data-aos="fade-up"
            >
              <p style={{ lineHeight: "2" }}>
                Ferveret develops liquid cooling technology enabling the most
                advanced, efficient, costcompetitive and sustainable data center
                ever made. We use the same cooling technology as nuclear power
                plants to save data centers ~96% in cooling cost and reduce
                their carbon footprint by 40% while increasing computer chip
                performance by ~2X.
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

        <div className="bg-gray-1100 md:w-7/12  h-full">
          <Video src="/assets/videos/video4.mp4" />
        </div>
      </div>
    </div>
  );
};

export { Hero };
