import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="currentCity">{props.data.city}</h1>
      <div className="row mt-3">
        <div className="col-sm-5">
          <ul>
            <li className="date">
              <FormattedDate date={props.data.date} />
            </li>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind} km/h</strong>
            </li>
          </ul>
        </div>
        <div className="col-sm-2 text-center">
          <WeatherIcon code={props.data.icon} size={90} />
        </div>
        <div className="col-sm-5 text-center">
          <WeatherTemperature celsius={props.data.temperature} />
          <p className="text-capitalize description">
            {props.data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
