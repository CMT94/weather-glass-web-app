import React from "react";

import { Forecast } from "../types";

interface ForecastSectionProps {
  forecastData: Forecast;
}

const ForecastSection = ({
  forecastData,
}: ForecastSectionProps): JSX.Element => {
  return (
    <div className="w-full h-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">Forecast</div>
    </div>
  );
};

export default ForecastSection;
