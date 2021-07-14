import React from "react";

import { MetricCard } from "../components/cards/MetricCard";
import { BarChartWrapper } from "../components/charts/BarChart";
import { Video } from "../components/video/Video";

const VerticalFeatures = () => (
  <div className="md:grid-rows-10">
    <div className="max-w-screen-xlg bg-gray-1100">
      <div className="text-center pt-32 pb-5">
        <h2 className="text-4xl text-gray-200 font-bold">
          Air Cooled Data Centers Today
        </h2>
        <div className="m-auto text-gray-200 text-2xl py-12 md:px-20">
          About 40% of the total electricity consumed in a data center is used
          for cooling.
        </div>
        <div className="m-auto w-4/6 py-36 bg-gray-1100">
          <Video autoPlay src="/assets/videos/video1.mp4" />
        </div>
      </div>
    </div>
    <div className="max-w-screen-xlg bg-gray-1100">
      <div className="text-center pt-32 pb-5 flex flex-col space-y-12">
        <h2 className="text-4xl text-gray-200 font-bold">
          FERVERET Technology
        </h2>
        <div className="mt-4 text-gray-200 text-2xl md:px-20">
          FERVERET tank can turn your air-cooled data center into an immersion
          cooled data center over night
        </div>
        <div className="m-auto w-4/6 py-36 bg-gray-1100">
          <Video autoPlay src="/assets/videos/video2.mp4" />
        </div>
      </div>
    </div>
    <div className="flex flex-col space-y-4 md:flex-row justify-center md:space-x-12 bg-gray-1100 pt-28 pb-96">
      <MetricCard
        title="Energy"
        description="Reduces the electricity consumption, due to
        cooling, by 96%."
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34.877"
            height="67.949"
            viewBox="0 0 34.877 67.949"
          >
            <g id="noun_bolt_1158146" transform="translate(-29.147 -6.791)">
              <g
                id="Group_1"
                data-name="Group 1"
                transform="translate(29.147 6.79)"
              >
                <path
                  id="Path_1"
                  data-name="Path 1"
                  d="M40.947,6.8H62.292a1.63,1.63,0,0,1,1.584,2.279L52.37,34.309l9.255-.314a1.623,1.623,0,0,1,1.417,2.594L34.11,74.4c-.5.707-1.751.236-1.5-.629L38.863,43.9l-7.921.314a1.682,1.682,0,0,1-1.751-2.044L39.28,7.977A1.6,1.6,0,0,1,40.947,6.8Z"
                  transform="translate(-29.147 -6.79)"
                  fill="#2870de"
                />
              </g>
            </g>
          </svg>
        }
      />
      <MetricCard
        title="Footprint"
        description="Reduces the footprint of the data center by 75%"
        icon={
          <svg
            id="Group_3"
            data-name="Group 3"
            xmlns="http://www.w3.org/2000/svg"
            width="70.598"
            height="70.672"
            viewBox="0 0 70.598 70.672"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M72.529,62.486l-6.844-6.844a2.262,2.262,0,0,0-3.2,3.2l2.976,2.976H13.908V10.337l2.976,2.976a2.335,2.335,0,0,0,3.273,0,2.245,2.245,0,0,0,0-3.2L13.312,3.27a2.245,2.245,0,0,0-3.2,0L3.27,10.114a2.262,2.262,0,1,0,3.2,3.2l2.976-2.976V64.122a2.318,2.318,0,0,0,2.306,2.306H65.387L62.411,69.4a2.245,2.245,0,0,0,0,3.2,2.335,2.335,0,0,0,3.273,0l6.844-6.844A2.335,2.335,0,0,0,72.529,62.486Z"
              transform="translate(-2.6 -2.6)"
              fill="#c53733"
            />
            <path
              id="Path_7"
              data-name="Path 7"
              d="M36.306,10.612h2.306a2.306,2.306,0,0,0,0-4.612H36.306a2.306,2.306,0,0,0,0,4.612Z"
              transform="translate(-10.641 -3.471)"
              fill="#c53733"
            />
            <path
              id="Path_8"
              data-name="Path 8"
              d="M51.906,10.612h3.72a2.306,2.306,0,0,0,0-4.612h-3.72a2.306,2.306,0,1,0,0,4.612Z"
              transform="translate(-14.636 -3.471)"
              fill="#c53733"
            />
            <path
              id="Path_9"
              data-name="Path 9"
              d="M69.506,10.612h3.72a2.306,2.306,0,0,0,0-4.612h-3.72a2.306,2.306,0,0,0,0,4.612Z"
              transform="translate(-19.143 -3.471)"
              fill="#c53733"
            />
            <path
              id="Path_10"
              data-name="Path 10"
              d="M87.006,10.612a2.306,2.306,0,1,0,4.612,0V8.306A2.318,2.318,0,0,0,89.312,6H87.006A2.318,2.318,0,0,0,84.7,8.306,2.368,2.368,0,0,0,87.006,10.612Z"
              transform="translate(-23.624 -3.471)"
              fill="#c53733"
            />
            <path
              id="Path_11"
              data-name="Path 11"
              d="M92.412,23.906a2.306,2.306,0,1,0-4.612,0v3.72a2.306,2.306,0,1,0,4.612,0Z"
              transform="translate(-24.418 -7.466)"
              fill="#c53733"
            />
            <path
              id="Path_12"
              data-name="Path 12"
              d="M92.412,41.506a2.306,2.306,0,0,0-4.612,0v3.72a2.306,2.306,0,0,0,4.612,0Z"
              transform="translate(-24.418 -11.972)"
              fill="#c53733"
            />
            <path
              id="Path_13"
              data-name="Path 13"
              d="M90.106,56.8A2.318,2.318,0,0,0,87.8,59.106v2.306a2.306,2.306,0,1,0,4.612,0V59.106A2.271,2.271,0,0,0,90.106,56.8Z"
              transform="translate(-24.418 -16.479)"
              fill="#c53733"
            />
            <path
              id="Path_14"
              data-name="Path 14"
              d="M35.006,56.98H60.374a2.318,2.318,0,0,0,2.306-2.306V29.306A2.318,2.318,0,0,0,60.374,27H35.006A2.318,2.318,0,0,0,32.7,29.306V54.674A2.318,2.318,0,0,0,35.006,56.98Zm2.232-25.368h20.83v20.83H37.238V31.612Z"
              transform="translate(-10.308 -8.848)"
              fill="#c53733"
            />
          </svg>
        }
      />
      <MetricCard
        title="Cost"
        description="Reduces the cost of operation of the data center by 50%"
        icon={
          <svg
            id="Group_8"
            data-name="Group 8"
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="89"
            viewBox="0 0 89 89"
          >
            <g id="Group_7" data-name="Group 7">
              <rect
                id="Rectangle_14"
                data-name="Rectangle 14"
                width="89"
                height="89"
                fill="none"
              />
              <g
                id="Group_4"
                data-name="Group 4"
                transform="translate(11.161 11.158)"
              >
                <path
                  id="Path_15"
                  data-name="Path 15"
                  d="M469.092,66.582a27.9,27.9,0,1,1,6.794-6.794A2.789,2.789,0,0,0,480.448,63a33.487,33.487,0,1,0-8.144,8.144,2.789,2.789,0,0,0-3.211-4.562Z"
                  transform="translate(-419.583 -10.279)"
                  fill="#a5c168"
                  fillRule="evenodd"
                />
              </g>
              <g
                id="Group_5"
                data-name="Group 5"
                transform="translate(31.828 27.898)"
              >
                <path
                  id="Path_16"
                  data-name="Path 16"
                  d="M1.842,2.406A2.774,2.774,0,0,1,2.119-.135,2.884,2.884,0,0,1,4.29-1.475a1.23,1.23,0,0,1,.554-.139A3.292,3.292,0,0,1,8.217.373,5.327,5.327,0,0,0,9.88,2.914,7.047,7.047,0,0,0,14.73,4.484,7.237,7.237,0,0,0,19.581,3.1,4.075,4.075,0,0,0,21.244-.089a2.975,2.975,0,0,0-.693-1.986,5.78,5.78,0,0,0-2.4-1.432c-.785-.277-2.587-.785-5.359-1.432-3.557-.924-6.1-1.986-7.53-3.28a8.682,8.682,0,0,1-3.049-6.652A8.453,8.453,0,0,1,3.643-19.63a8.972,8.972,0,0,1,4.111-3.326,16.264,16.264,0,0,1,6.514-1.155c4.158,0,7.3.924,9.378,2.726a9.3,9.3,0,0,1,2.91,4.573,2.164,2.164,0,0,1-.323,1.848,2.272,2.272,0,0,1-1.663.924,8.448,8.448,0,0,1-1.524.092,3.749,3.749,0,0,1-3.511-1.986,3.13,3.13,0,0,0-1.109-1.524,6.715,6.715,0,0,0-4.2-1.109,7.8,7.8,0,0,0-4.573,1.155,2.521,2.521,0,0,0-1.062,2.079A2.431,2.431,0,0,0,9.6-13.347q1.247,1.109,6.1,2.217a31.38,31.38,0,0,1,7.206,2.4A9.224,9.224,0,0,1,26.6-5.4,9.953,9.953,0,0,1,27.9-.089a9.636,9.636,0,0,1-1.571,5.312,9.593,9.593,0,0,1-4.481,3.7,18.833,18.833,0,0,1-7.16,1.2c-4.2,0-7.391-.97-9.655-2.91A11,11,0,0,1,1.842,2.406Z"
                  transform="translate(-1.653 24.11)"
                  fill="#a5c168"
                />
              </g>
              <g
                id="Group_6"
                data-name="Group 6"
                transform="translate(41.847 22.318)"
              >
                <path
                  id="Path_17"
                  data-name="Path 17"
                  d="M376.242,24.123V63.178a2.789,2.789,0,0,0,5.579,0V24.123a2.789,2.789,0,0,0-5.579,0Z"
                  transform="translate(-376.242 -21.334)"
                  fill="#a5c168"
                  fillRule="evenodd"
                />
              </g>
            </g>
          </svg>
        }
      />
      <MetricCard
        title="Performance"
        description="Immersion cooling allows 2x higher performance"
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="75.516"
            height="60.333"
            viewBox="0 0 75.516 60.333"
          >
            <g
              id="Group_9"
              data-name="Group 9"
              transform="translate(-2.5 -12.1)"
            >
              <path
                id="Path_18"
                data-name="Path 18"
                d="M60.985,37.571,43.816,48.222A8.2,8.2,0,0,0,40,55.138a8.02,8.02,0,0,0,14.944,3.975L65.278,41.7A3.061,3.061,0,0,0,60.985,37.571Z"
                transform="translate(-7.691 -5.121)"
                fill="#d1d1d1"
              />
              <path
                id="Path_19"
                data-name="Path 19"
                d="M40.258,12.1A37.8,37.8,0,0,0,8.939,71a3.187,3.187,0,0,0,2.623,1.431,3.093,3.093,0,0,0,1.828-.556,3.292,3.292,0,0,0,.874-4.451A30.742,30.742,0,0,1,9.177,53.117h5.087a3.18,3.18,0,0,0,0-6.359H9.1a31.376,31.376,0,0,1,6.836-16.534L19.59,33.88a3.184,3.184,0,0,0,2.305.954A3.319,3.319,0,0,0,24.2,33.88a3.167,3.167,0,0,0,0-4.531l-3.736-3.816A32.121,32.121,0,0,1,37,18.618v5.167a3.18,3.18,0,1,0,6.359,0V18.618a31.48,31.48,0,0,1,28.06,28.06H66.251a3.18,3.18,0,0,0,0,6.359h5.087a31.647,31.647,0,0,1-5.087,14.308,3.208,3.208,0,0,0,5.326,3.577A37.739,37.739,0,0,0,40.258,12.1Z"
                transform="translate(0)"
                fill="#d1d1d1"
              />
            </g>
          </svg>
        }
      />
      <div />
    </div>
    <div className="flex md:flex-row flex-col justify-between pt-32 bg-gray-1100">
      <div className="flex flex-col space-y-72 justify-start">
        <div className="font-bold md:text-right text-gray-1500 text-3xl text-center md:text-5xl">
          Immersion Cooling
        </div>
        <div className="text-bg-1500 text-2xl md:text-center w-full">
          palceholder
        </div>
        <div className="text-bg-1500 text-2xl md:text-center">palceholder</div>
        <div className="text-bg-1500 text-2xl md:text-center">
          palceholderpa
        </div>
      </div>
      <div className="w-full">
        <img
          src="https://via.placeholder.com/800x1400"
          className="w-full h-full"
        />
      </div>
    </div>
    <div className="flex md:flex-row flex-col justify-between bg-gray-1300 py-36">
      <div className="flex flex-col md:flex-1 space-y-16 justify-start md:m-36">
        <div className="font-bold text-left text-gray-1200 text-5xl">
          Air cooling vs Immersion cooling
        </div>
        <div className="text-bg-1200 md:text-2xl text-left">
          Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div className="text-bg-1200 md:text-2xl text-left">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt
        </div>
        <div className="text-bg-1200 md:text-2xl text-left">
          palceholder palceholder palceholder palceholderpalceholder
        </div>
      </div>
      <div className="container md:flex-1 bg-primary-1100 m:h-96 m-auto">
        <BarChartWrapper />
      </div>
    </div>
    <div className="flex flex-col bg-gray-1300 pt-12 text-center">
      <div className="text-bg-1200 text-3xl font-bold">
        Co2 emission reduction
      </div>
      <div className="pt-8">
        Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et
      </div>
    </div>
    <div className="bg-gray-1300 ">
      <img
        src="/assets/images/hor-barchart.png"
        className="m-auto w-3/4 md:p-20 pt-5"
      />
    </div>
    <div className="bg-gray-1300 pt-24 flex flex-col items-center space-y-40">
      <div className="flex md:flex-row w-full">
        <hr
          style={{
            borderTop: "7px solid #DCDCDC",
            width: "60rem",
          }}
        />
      </div>

      <div className=" text-4xl font-bold text-gray-1800">Our Founders</div>
    </div>
    <div className="bg-gray-1300 flex lg:flex-row md:flex-row sm:flex-row flex-col justify-center space-y-5 lg-space-x-5 m-p-24 pb-36">
      <div className="p-10 m-auto">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-3/4 h-3/4 m-auto mt-6"
            src="/assets/images/founder1.png"
            alt="Reza Azizian"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Reza Azizian</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
      <div className="p-10">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-3/4 h-3/4 m-auto mt-6"
            src="/assets/images/founder2.png"
            alt="Matteo Bucci"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Matteo Bucci</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { VerticalFeatures };
