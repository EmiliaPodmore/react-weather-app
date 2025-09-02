import React from "react";

export default function WeatherIcon(props) {
  const size = props.size || 100;

  return (
    <img
      src={`https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`}
      alt="weather icon"
      width={size}
      height={size}
    />
  );
}
