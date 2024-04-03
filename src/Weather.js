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
        <div class="col-6">
          <span className="temperature">12</span>
          <span className="unit">˚C</span>
          <p>Light showers</p>
        </div>
      </div>
    </div>
  );
}
