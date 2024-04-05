import React from "react";

export default function WeatherInfo() {
  return (
    <div className="Weather Info">
      <h1>{weatherData.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          <p className="date">
            <FormattedDate date={weatherData.date} />
          </p>
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">˚C</span>
          <p className="text-capitalize">{weatherData.description}</p>
        </div>
      </div>
    </div>
  );
}
