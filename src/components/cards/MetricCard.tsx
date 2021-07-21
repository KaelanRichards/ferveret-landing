import React, { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const MetricCard = (props: MetricCardProps) => {
  return (
    <div
      className="bg-gray-1400 flex flex-shrink-0 w-64 flex-col md:flex-col  mt-6"
      style={{ height: "22rem" }}
    >
      <div className="mx-auto h-32 pt-12">
        <div>{props.icon}</div>
      </div>
      <div className="text-gray-1900 pt-6  text-2xl font-bold text-center">
        {props.title}
      </div>
      <div className="text-gray-1900  text-sm text-center mx-2 p-5 pb-7">
        {props.description}
      </div>
    </div>
  );
};

export { MetricCard };
