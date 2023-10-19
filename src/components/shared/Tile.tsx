import { IconType } from "../../types";

import Feels from "../Icons/Feels";
import Wind from "../Icons/Wind";
import Humidity from "../Icons/Humidity";
import Visibility from "../Icons/Visibility";
import Pressure from "../Icons/Pressure";
import Pop from "../Icons/Pop";

interface TileProps {
  icon: IconType;
  title: string;
  info: string | JSX.Element;
  description: string;
}

const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};

const Tile = ({ icon, title, info, description }: TileProps): JSX.Element => {
  const IconElement = icons[icon];
  return (
    <div className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg p-2 mb-5 drop-shadow-lg flex flex-col justify-between">
      <div className="flex items-center text-sm font-bold">
        <IconElement /> <h4 className="ml-1">{title}</h4>
      </div>

      <h3 className="mt-1 text-lg">{info}</h3>
      <p className="text-xs font-bold">{description}</p>
    </div>
  );
};

export default Tile;
