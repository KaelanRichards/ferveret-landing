import React, { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const MetricCard = (props: MetricCardProps) => {
  return (
    <div
      className="bg-primary-1100 flex flex-shrink-0 w-64 flex-col md:flex-col  mt-6"
      style={{ height: "22rem" }}
    >
      <div className="mx-auto h-32 pt-12">
        <div>{props.icon}</div>
      </div>
      <div className="text-gray-2400 pt-6  text-2xl font-bold text-center">
        {props.title}
      </div>
      <div className="text-gray-2400  text-sm text-center mx-2 p-5 pb-7">
        {props.description}
      </div>
    </div>
  );
};

export { MetricCard };
