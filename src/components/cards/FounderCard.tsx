import React from "react";

type FounderCardProps = {
  image: string;
  name: string;
  description: string;
};

const FounderCard = (props: FounderCardProps) => {
  return (
    <div
      className="bg-gray-1700 flex flex-col flex-shrink-0 px-5"
      style={{ height: "35rem", width: "30rem" }}
    >
      <div className="pt-5 px-4">
        <img
          className="w-auto h-auto m-auto"
          src={props.image}
          alt={props.name}
        />
      </div>
      <div className="font-bold text-xl text-left pb-4 mb-2">{props.name}</div>
      <p className="text-gray-700 text-base text center">{props.description}</p>
    </div>
  );
};

export { FounderCard };
