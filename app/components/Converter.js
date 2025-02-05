"use client";

import { useState, useEffect } from "react";

const conversionRates = {
  length: {
    meter: 1, kilometer: 0.001, mile: 0.000621371, foot: 3.28084, inch: 39.3701, yard: 1.09361,
    centimeter: 100, millimeter: 1000, nautical_mile: 0.000539957
  },
  weight: {
    kilogram: 1, gram: 1000, pound: 2.20462, ounce: 35.274, ton: 0.00110231, stone: 0.157473
  },
  temperature: {
    celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
    fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
    celsiusToKelvin: (c) => c + 273.15,
    kelvinToCelsius: (k) => k - 273.15,
  },
  area: {
    square_meter: 1, square_kilometer: 0.000001, square_mile: 0.0000003861, square_foot: 10.7639, acre: 0.000247105,
  },
  volume: {
    cubic_meter: 1, cubic_centimeter: 1000000, liter: 1000, milliliter: 1000000,
    gallon_us: 264.172, quart_us: 1056.69, pint_us: 2113.38, cup_us: 4226.75,
    tablespoon_us: 67628, teaspoon_us: 202884
  },
  speed: {
    mph: 1, kph: 1.60934, mps: 0.44704, fps: 1.46667, knot: 0.868976
  },
  time: {
    second: 1, minute: 60, hour: 3600, day: 86400, week: 604800, month: 2629800, year: 31557600
  }
};

export default function Converter() {
  const [category, setCategory] = useState("length");
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [inputValue, setInputValue] = useState(1);
  const [outputValue, setOutputValue] = useState("");

  useEffect(() => {
    convertUnits();
  }, [inputValue, fromUnit, toUnit, category]);

  const convertUnits = () => {
    if (category === "temperature") {
      setOutputValue(
        fromUnit === "celsius"
          ? conversionRates.temperature.celsiusToFahrenheit(inputValue).toFixed(2)
          : conversionRates.temperature.fahrenheitToCelsius(inputValue).toFixed(2)
      );
    } else {
      setOutputValue(
        (inputValue * conversionRates[category][toUnit] / conversionRates[category][fromUnit]).toFixed(4)
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-green-300 p-6 font-mono">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Unit Converter</h1>

      <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-lg border-2 border-green-400">
        <label className="block text-green-400 mb-2">Category:</label>
        <select
          className="w-full p-2 mb-4 border rounded bg-gray-700 text-green-300 border-green-400"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setFromUnit(Object.keys(conversionRates[e.target.value])[0]);
            setToUnit(Object.keys(conversionRates[e.target.value])[1]);
          }}
        >
          {Object.keys(conversionRates).map((cat) => (
            <option key={cat} value={cat}>{cat.replace(/_/g, " ").charAt(0).toUpperCase() + cat.replace(/_/g, " ").slice(1)}</option>
          ))}
        </select>

        <div className="flex items-center justify-between space-x-4">
          <input
            type="number"
            className="p-2 border rounded bg-gray-700 text-green-300 border-green-400 w-1/3 appearance-none"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <select
            className="p-2 border rounded bg-gray-700 text-green-300 border-green-400 w-1/3"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>{unit.replace(/_/g, " ")}</option>
            ))}
          </select>

          <span className="text-green-400 text-2xl">=</span>

          <input
            type="text"
            className="p-2 border rounded bg-gray-700 text-green-300 border-green-400 w-1/3"
            value={outputValue}
            readOnly
          />

          <select
            className="p-2 border rounded bg-gray-700 text-green-300 border-green-400 w-1/3"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>{unit.replace(/_/g, " ")}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}