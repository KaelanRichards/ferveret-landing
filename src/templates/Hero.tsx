/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";

import Aos from "aos";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../components/button/Button";

const Hero = () => {
  const router = useRouter();

  const changeRoute = () => {
    router.push("/solution");
  };

  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 3000,
      delay: 200,
    });
  }, []);

  return (
    <div style={{ fontFamily: "Mulish" }} className="bg-home-hero">
      <div className="flex flex-col lg:w-1/2 pt-16 lg:px-20 px-6">
        <div className="lg:text-7xl text-6xl  font-bold text-gray-1200 w-full p-1 text-left">
          <span className="gradient">ferveret</span>
        </div>
        <hr
          className="mt-6  bg-gray-1300"
          style={{
            height: "3px",
            border: "none",
            // background: "rgb(255,255,255)",
          }}
        />
        <div className="lg:w-full lg:h-full pb-4 flex flex-col">
          <div data-aos="fade-up" className="text-left  xl:pt-12 pt-4">
            <h1 className="lg:text-2xl text-2xl text-primary-1100 font-black">
              /fervēret/
            </h1>
            <p className="text-primary-1100">
              ferveret is a Latin word for boiling, which is what we believe
              will revolutionize the future of data centers.
            </p>

            <div className="xl:text-4xl lg:text-3xl leading-11 text-2xl w-full pt-12 mb-16  text-left text-primary-1100 font-black">
              <p>
                We develop liquid cooling technology for data centers inspired
                by nuclear power plant cooling.
              </p>
            </div>
            <div className="flex flex-row justify-start pb-60 ">
              <div className="cursor-pointer	" onClick={() => changeRoute()}>
                <Link href="/solution" passHref>
                  <Button primary>
                    <span style={{ fontSize: "16px" }}>Learn More</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Hero };
