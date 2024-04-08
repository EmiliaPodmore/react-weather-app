import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thurs</div>
          <WeatherIcon code="01d" />
          12 18
        </div>
      </div>
    </div>
  );
}
