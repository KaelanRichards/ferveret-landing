import React, { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const MetricCard = (props: MetricCardProps) => {
  return (
    <div className="container flex flex-col w-72 h-96 bg-gray-1400">
      <div className="mx-auto my-10">{props.icon}</div>

      <div className="text-bg-1500  text-2xl font-bold text-center">
        {props.title}
      </div>
      <div className="text-bg-1500 text-1xl text-center p-6">
        {props.description}
      </div>
    </div>
  );
};

export { MetricCard };
