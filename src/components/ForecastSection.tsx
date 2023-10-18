import React from "react";

import { Forecast } from "../types";

import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";

interface ForecastSectionProps {
  forecastData: Forecast;
}

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return <React.Fragment>{Math.round(temp)}°</React.Fragment>;
};

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
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {forecastData.name}{" "}
            <span className="font-thin">{forecastData.country}</span>
          </h2>

          <h1 className="text-4xl font-extrabold">
            <Degree temp={currentForecast.main.temp} />
          </h1>
          <p>
            {currentForecastMain} ({currentForecastDescription})
          </p>

          <div className="flex justify-center items-center">
            <p className="text-sm flex mr-2">
              <HiArrowSmUp size={20} /> <Degree temp={currentMaxTemp} />
            </p>
            <p className="text-sm flex">
              <HiArrowSmDown size={20} /> <Degree temp={currentMinTemp} />
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ForecastSection;
