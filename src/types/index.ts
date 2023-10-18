export interface SearchOption {
  country: string;
  lat: number;
  local_names: Record<string, unknown>;
  lon: number;
  name: string;
  state: string;
}

export interface Forecast {
  base: string;
  clouds: Record<string, number>;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  rain: Record<string, number>;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
