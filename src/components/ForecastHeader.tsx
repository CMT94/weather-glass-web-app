import React from "react";
import { HiArrowSmUp, HiArrowSmDown } from "react-icons/hi";
import Degree from "./shared/Degree";

interface ForecastHeaderProps {
  city: string;
  country: string;
  currentTemperature: number;
  currentForecastMain: string;
  currentForecastDescription: string;
  currentMinTemp: number;
  currentMaxTemp: number;
}

const ForecastHeader = ({
  city,
  country,
  currentTemperature,
  currentForecastMain,
  currentForecastDescription,
  currentMinTemp,
  currentMaxTemp,
}: ForecastHeaderProps) => {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-black">
        {city} <span className="font-thin">{country}</span>
      </h2>

      <h1 className="text-4xl font-extrabold">
        <Degree temp={currentTemperature} />
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
  );
};

export default ForecastHeader;
