import React, { ReactNode } from "react";

type MetricCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

const MetricCard = (props: MetricCardProps) => {
  return (
    <div className="container flex flex-col md:flex-col h-60 w-36 md:w-72 md:h-96 bg-gray-1400">
      <div className="mx-auto my-10 h-25">{props.icon}</div>

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
