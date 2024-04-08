import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-6">
          <p className="date">
            <FormattedDate date={props.data.date} />
          </p>
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-6 text-center">
          <div className="d-flex">
            <WeatherIcon code={props.data.icon} size={52} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <p className="text-capitalize description">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
