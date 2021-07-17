import React, { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const MetricCard = (props: MetricCardProps) => {
  return (
    <div
      className="bg-gray-1400 flex flex-shrink-0 w-72 flex-col md:flex-col  mt-6"
      style={{ height: "25rem" }}
    >
      <div className="mx-auto h-32 pt-12">
        <div>{props.icon}</div>
      </div>
      <div className="text-gray-1900 pt-6  text-2xl font-bold text-center">
        {props.title}
      </div>
      <div className="text-gray-1900 pt-12 text-1xl text-center mx-12">
        {props.description}
      </div>
    </div>
  );
};

export { MetricCard };
