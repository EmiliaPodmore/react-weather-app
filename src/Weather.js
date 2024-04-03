import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h1>London</h1>
      <ul>
        <li>Wednesday 3rd April</li>
        <li>Light showers</li>
      </ul>
      <div className="row">
        <div className="col-6">12˚C</div>
        <div className="col-6">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 20 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
