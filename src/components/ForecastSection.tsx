import React from "react";

import { Forecast } from "../types";

import ForecastHeader from "./ForecastHeader";
import ForecastList from "./ForecastList";
import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import { getSunTime } from "../helpers";

interface ForecastSectionProps {
  forecastData: Forecast;
}

const ForecastSection = ({
  forecastData,
}: ForecastSectionProps): JSX.Element => {
  console.log({ forecastData });
  const currentForecast = forecastData.list[0];
  const currentForecastMain = currentForecast.weather[0].main;
  const currentForecastDescription = currentForecast.weather[0].description;
  const currentMinTemp = currentForecast.main.temp_min;
  const currentMaxTemp = currentForecast.main.temp_max;

  return (
    <div className="w-full h-full md:max-w-[500px] py-4 md:py-4 md:px-10 lg:px-24 lg:h-auto bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <ForecastHeader
          city={forecastData.name}
          country={forecastData.country}
          currentTemperature={currentForecast.main.temp}
          currentForecastMain={currentForecastMain}
          currentForecastDescription={currentForecastDescription}
          currentMinTemp={currentMinTemp}
          currentMaxTemp={currentMaxTemp}
        />

        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          <ForecastList forecastData={forecastData} />
        </section>

        <section className="flex justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise />
            <span className="mt-2">{getSunTime(forecastData.sunrise)}</span>
          </div>

          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset />
            <span className="mt-2">{getSunTime(forecastData.sunset)}</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForecastSection;
