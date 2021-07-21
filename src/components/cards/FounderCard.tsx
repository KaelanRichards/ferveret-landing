import React from "react";

type FounderCardProps = {
  image: string;
  name: string;
  description: string;
};

const FounderCard = (props: FounderCardProps) => {
  return (
    <div className="bg-gray-1700 flex flex-col flex-shrink-0 p-6 h-auto lg:w-1/2 w:5/6">
      <div className="p-5">
        <img
          style={{ height: "328px", width: "auto", margin: "0 auto" }}
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="font-bold text-gray-2100 text-xl text-left pt-6 pl-5 pb-4 mb-2">
        {props.name}
      </div>
      <p className="text-gray-2100 text-base text center px-5">
        {props.description}
      </p>
    </div>
  );
};

export { FounderCard };
