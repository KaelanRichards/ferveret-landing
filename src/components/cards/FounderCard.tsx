import React from "react";

type FounderCardProps = {
  image: string;
  name: string;
  description: string;
};

const FounderCard = (props: FounderCardProps) => {
  return (
    <div
      className="shadow rounded-md	bg-primary-1100 flex flex-col flex-shrink-0 p-6 lg:w-1/2 w:5/6"
      style={{ height: "47rem" }}
    >
      <div className="p-5">
        <img
          style={{ height: "328px", width: "auto", margin: "0 auto" }}
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="font-bold text-gray-1200 text-xl text-left pt-6 pl-5 pb-4 mb-2">
        {props.name}
      </div>
      <p className="text-gray-1200 text-base text center px-5 pb2">
        {props.description}
      </p>
    </div>
  );
};

export { FounderCard };
