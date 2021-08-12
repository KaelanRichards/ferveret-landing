/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "../components/button/Button";
import { MetricCard } from "../components/cards/MetricCard";
import { Video } from "../components/video/Video";

const VerticalFeatures = () => {
  const [email, setEmail] = React.useState("");

  // AOS animation library initialization
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: true,
    });
  }, []);

  const router = useRouter();

  const changeRoute = () => {
    router.push("/solution");
  };

  const submitEmail = (e: any) => {
    e.preventDefault();
    const req = { email };

    axios
      .post(
        "https://sheet.best/api/sheets/48e877a9-502b-409a-a5ba-607e190ab423",
        req
      )
      .then((response) => {
        if (response.status !== 200) return;
        alert("successfully subscribed!");
        setEmail("");
      });
  };

  return (
    <div className="md:grid-rows-10">
      <div className="flex lg:flex-row flex-col bg-gray-2400 ">
        <div className="lg:pl-20 lg:pr-6 lg:pt-48 px-4 pt-12">
          <div className="text-primary-1100 text-left lg:text-6xl text-4xl font-bold">
            <span className="gradient">ferveret</span> technology
          </div>
          <div className="text-primary-1100 text-left text-2xl pt-4">
            Saves data centers 96% in cooling costs, 68% on capital costs and
            reduce their carbon footprint by 40% while increasing chip
            performance by 2X
          </div>
          <div className="pt-12">
            <div className="cursor-pointer" onClick={() => changeRoute()}>
              <Link href="/solution" passHref>
                <Button primary>
                  <span style={{ fontSize: "16px" }}>Learn More</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img src="/assets/images/case.png" />
        </div>
      </div>
      <div className="flex flex-col items-center lg:py-60 pt-28 bg-primary-1100  px-4 sm:px-12 md:px-16 lg:px-48">
        <h1 className="lg:text-6xl text-3xl font-bold text-gray-1200 p-3 w-full text-center px-4">
          Data centers are dirty and expensive{" "}
        </h1>
        <p className="text-1xl md:text-2xl text-gray-1200 p-3 lg:px-36 text-center ">
          If nothing changes, data centers will generate about 14% of the total
          worldwide carbon emission by 2040. About 40% of these emissions is due
          to inefficient cooling, which is also expensive.
        </p>
        <div className="pt-12 w-full" data-aos-delay="1000">
          <img className="h-full w-full" src="/assets/images/lineCharts.png" />
          <div className="flex flex-row justify-between pt-4">
            <div className="w-1/2">
              <p className="text-xs break-all">
                {`These are the two references for the left figure (i.e. "Data that
                will be generated")`}
              </p>
              <p className="text-xs break-all">
                https://www.sciencedaily.com/releases/2013/05/130522085217.htm
              </p>
              <p className="text-xs break-all">
                https://www.hdfstutorial.com/blog/big-data-use-cases-in-banking-and-financial-services/
              </p>
            </div>
            <div className="w-1/2">
              <p className="text-xs break-all">
                {`These are the two references for the right figure (i.e. "Carbon
                emission by data centers")`}
              </p>
              <p className="text-xs break-all">
                https://www.computerworld.com/article/3431148/why-data-centres-are-the-new-frontier-in-the-fight-against-climate-change.html
              </p>
              <p className="text-xs break-all">
                https://www.theguardian.com/environment/2017/dec/11/tsunami-of-data-could-consume-fifth-global-electricity-by-2025
              </p>
            </div>
          </div>
        </div>

        <h1 className="md:text-4xl text-3xl font-bold text-gray-1200 w-full p-1 pt-12 text-center">
          <span className="gradient">ferveret</span> technology
        </h1>
        <p className="md:text-4xl text-3xl font-bold text-gray-1200 lg:px-36 p-1 w-full text-center">
          eliminates this waste of money and the associated emissions.
        </p>
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

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6 lg:px-48 pt-20 space-y-8">
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
          <p className="text-primary-1100 text-center font-bold lg:text-3xl text-2xl lg:px-48 pt-20">
            All these issues are consequence of the poor heat removal capability
            of air cooling
          </p>
        </div>
      </div>
      <div className="pt-6 px-4  bg-gray-2400 ">
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

          <ul className="flex flex-col text-left lg:text-2xl text-1xl py-6 lg:px-48 pt-20 space-y-8">
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
          <p className="text-primary-1100 text-center font-bold lg:text-3xl text-2xl lg:px-48 pt-20">
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
        <div className="text-center lg:text-6xl text-4xl font-bold lg:px-96 pt-40 ">
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
        <div className="text-center lg:text-6xl text-4xl font-bold">
          Backed by
        </div>
        <div className="flex lg:flex-row flex-col lg:space-x-56 justify-center items-center pt-36 pb-72">
          <img className="w-1/2" src="/assets/images/yc.png" />
          <img className="w-1/2" src="/assets/images/e14.png" />
        </div>
      </div>
      <div className="bg-gray-1100">
        <div className="lg:text-5xl text-4xl text-center font-bold pt-36 px-6">
          Get the latest ferveret news
        </div>
        <div className="text-center text-2xl pt-4">
          sign up below to get the latest news and updates:
        </div>
        <div className="lg:px-96 pt-8 flex justify-center">
          {" "}
          <input
            className="shadow appearance-none border rounded lg:w-full w-1/2 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="Company"
          />
        </div>
        <div className="flex justify-center items-center pb-36">
          <button
            className="bg-blue-500  hover:bg-blue-700 w-28 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={(e) => {
              submitEmail(e);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export { VerticalFeatures };
