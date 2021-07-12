import React from "react";

import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { LineCharts } from "./LineCharts";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <LineCharts />
    <VerticalFeatures />
    <Footer />
  </div>
);

export { Base };
