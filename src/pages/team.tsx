import React from "react";

import { FounderCard } from "../components/cards/FounderCard";
import { Meta } from "../layout/Meta";
import { Footer } from "../templates/Footer";
import Navbar from "../templates/Navbar";
import { AppConfig } from "../utils/AppConfig";

const Team = () => {
  return (
    <div className="antialiased bg-gray-1300" style={{ fontFamily: "Mulish" }}>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Navbar />
      <div className="bg-gray-1300 text-center pt-40 pb-16 px:8 sm:px-12 md:px-16 xl:px-60">
        <div className="m-auto text-4xl font-bold text-gray-1200">
          Our Founders
        </div>
      </div>
      <div className="bg-gray-1300 flex flex-col xl:flex-row xl:space-x-3 justify-evenly pb-40 pt-8 px:2 sm:px-12 md:px-16 xl:px-60 items-center">
        <FounderCard
          name="Reza Azizian"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`}
          image="/assets/images/founder1.png"
        />
        <FounderCard
          name="Matteo Bucci"
          description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus quia, nulla! Maiores et perferendis eaque,
          exercitationem praesentium nihil.`}
          image="/assets/images/founder2.png"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Team;
