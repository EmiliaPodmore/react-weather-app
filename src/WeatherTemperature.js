import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="CurrentTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ˚C |{" "}
          <button className="unit-toggle" onClick={showFahrenheit}>
            ˚F
          </button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="CurrentTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <button className="unit-toggle" onClick={showCelsius}>
            ˚C
          </button>{" "}
          | ˚F
        </span>
      </div>
    );
  }
}
