import React from "react";

const Degree = ({ temp }: { temp: number }): JSX.Element => {
  return <React.Fragment>{Math.round(temp)}°</React.Fragment>;
};

export default Degree;
