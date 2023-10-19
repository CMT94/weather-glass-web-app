import { Forecast } from "../types";

import ForecastHeader from "./ForecastHeader";
import ForecastList from "./ForecastList";
import Sunrise from "./Icons/Sunrise";
import Sunset from "./Icons/Sunset";
import {
  getHumidityValue,
  getPop,
  getSunTime,
  getVisibilityValue,
  getWindDirection,
} from "../helpers";

import Tile from "./shared/Tile";
import Degree from "./shared/Degree";

interface ForecastSectionProps {
  forecastData: Forecast;
}

const ForecastSection = ({
  forecastData,
}: ForecastSectionProps): JSX.Element => {
  const currentForecast = forecastData.list[0];
  const currentForecastMain = currentForecast.weather[0].main;
  const currentForecastDescription = currentForecast.weather[0].description;

  const currentMinTemp = currentForecast.main.temp_min;
  const currentMaxTemp = currentForecast.main.temp_max;
  const currentFeelsLikeTemp = currentForecast.main.feels_like;
  const currentTemp = currentForecast.main.temp;

  const currentWindSpeed = Math.round(currentForecast.wind.speed);
  const currentWindGust = currentForecast.wind.gust.toFixed(1);
  const currentWindDirection = getWindDirection(
    Math.round(currentForecast.wind.deg)
  );

  const currentHumidity = currentForecast.main.humidity;
  const currentPop = Math.round(currentForecast.pop * 100);
  const currentClouds = currentForecast.clouds.all;
  const currentPressure = currentForecast.main.pressure;
  const currentVisibility = currentForecast.visibility;

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

        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunrise />
            <span className="mt-2">{getSunTime(forecastData.sunrise)}</span>
          </div>

          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5">
            <Sunset />
            <span className="mt-2">{getSunTime(forecastData.sunset)}</span>
          </div>

          <Tile
            icon="wind"
            title="Wind"
            info={`${currentWindSpeed} km/h`}
            description={`${currentWindDirection}, gusts ${currentWindGust} km/h`}
          />

          <Tile
            icon="feels"
            title="Feels like"
            info={<Degree temp={currentFeelsLikeTemp} />}
            description={`Feels ${
              Math.round(currentFeelsLikeTemp) < Math.round(currentTemp)
                ? "colder"
                : "warmer"
            }`}
          />

          <Tile
            icon="humidity"
            title="Humidity"
            info={`${currentHumidity}%`}
            description={getHumidityValue(currentHumidity)}
          />

          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(currentPop)}%`}
            description={`${getPop(currentPop)}, clouds at ${currentClouds}%`}
          />

          <Tile
            icon="pressure"
            title="Pressure"
            info={`${currentPressure} hPa`}
            description={`${
              Math.round(currentPressure) < 1013 ? "Lower" : "Higher"
            } than standard`}
          />

          <Tile
            icon="visibility"
            title="Visibility"
            info={`${(currentVisibility / 1000).toFixed()} km`}
            description={getVisibilityValue(currentVisibility)}
          />
        </section>
      </div>
    </div>
  );
};

export default ForecastSection;
