import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "de2c40e370d58e257faf07ba4ea95840";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="01d" size={40} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">18˚C</span>
            <span className="WeatherForecast-temperature-min">12˚C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
