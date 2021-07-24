import React from "react";

import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import Navbar from "./Navbar";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="antialiased bg-gray-1300" style={{ fontFamily: "Mulish" }}>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    <Hero />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
