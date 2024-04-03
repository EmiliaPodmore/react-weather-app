import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>London</h1>
        <div className="row mt-3">
          <div className="col-6">
            <p>Wednesday 3rd April</p>
            <ul>
              <li>Humidity: 60%</li>
              <li>Wind: 20 km/h</li>
            </ul>
          </div>
          <div className="col-6 text-end">
            <span className="temperature">{temperature}</span>
            <span className="unit">˚C</span>
            <p>Light showers</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "de2c40e370d58e257faf07ba4ea95840";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
