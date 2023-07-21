import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |
          <span href="#" onClick={convertToF}>
            °F
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temp">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <span href="#" onClick={convertToC}>
            °C |
          </span>
          °F
        </span>
      </div>
    );
  }
}