import React from "react";

import { dateFormat } from "../helpers";

import { Forecast } from "../types";

import Degree from "./shared/Degree";

interface ForecastListProps {
  forecastData: Forecast;
}
const ForecastList = ({ forecastData }: ForecastListProps) => {
  return (
    <React.Fragment>
      {forecastData.list.map((item, itemIndex) => (
        <div
          key={itemIndex}
          className="inline-block text-center w-[50px] flex-shrink-0"
        >
          <p>{itemIndex === 0 ? "Now" : dateFormat(item.dt)}</p>
          <img
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            alt={`weather-icon-${item.weather[0].description}`}
          />
          <p className="text-sm font-bold">
            <Degree temp={item.main.temp} />
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default ForecastList;
