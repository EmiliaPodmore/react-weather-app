import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
            <WeatherIcon code={props.data.icon} size={62} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">˚C</span>
          </div>
          <p className="text-capitalize">{props.data.description}</p>
        </div>
      </div>
    </div>
  );
}
