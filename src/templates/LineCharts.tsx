import React from "react";

import { LineChart } from "../components/charts/LineChart";

const populationData = [
  {
    name: "2021",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2030",
    uv: 500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2040",
    uv: 1500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2050",
    uv: 2500,
    pv: 3908,
    amt: 2000,
  },
];

const energyConsumptionData = [
  {
    name: "2021",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "2030",
    uv: 500,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "2040",
    uv: 1500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "2050",
    uv: 2500,
    pv: 3908,
    amt: 2000,
  },
];

const LineCharts = () => {
  return (
    <div className="flex flex-col items-center pt-40 pb-96 bg-gray-1300">
      <h1 className="text-4xl font-bold text-gray-1200 p-12 text-center">
        Data is Dirty and Expensive
      </h1>
      <p className="text-2xl text-gray-1200 font bold pl-36 pr-36 text-center">
        A simple google search consumes the same amount of energy as turning on
        a 60W light bulb for 17 seconds
      </p>
      <div className=" container shadow-lg bg-primary-1100 flex flex-col md:flex-col items-start mt-36 h-96">
        <div className="w-full h-full p-2">
          <LineChart data={populationData} />
        </div>
        <div className="w-full h-full p-2">
          <LineChart data={energyConsumptionData} />
        </div>
      </div>
    </div>
  );
};

export { LineCharts };
