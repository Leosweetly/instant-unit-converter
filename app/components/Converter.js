"use client"; // Enables client-side interactions

import { useState, useEffect } from "react";

const conversionRates = {
  length: { meter: 1, kilometer: 0.001, mile: 0.000621371, yard: 1.09361, foot: 3.28084, inch: 39.3701, centimeter: 100, millimeter: 1000, nanometer: 1e+9 },
  weight: { kilogram: 1, gram: 1000, milligram: 1e+6, pound: 2.20462, ounce: 35.274, ton: 0.00110231 },
  temperature: {
    celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
    fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
    celsiusToKelvin: (c) => c + 273.15,
    kelvinToCelsius: (k) => k - 273.15,
    fahrenheitToKelvin: (f) => ((f - 32) * 5) / 9 + 273.15,
    kelvinToFahrenheit: (k) => ((k - 273.15) * 9) / 5 + 32
  },
  area: { square_meter: 1, square_kilometer: 0.000001, square_mile: 0.0000003861, square_yard: 1.19599, square_foot: 10.7639, square_inch: 1550, hectare: 0.0001, acre: 0.000247105 },
  volume: { cubic_meter: 1, cubic_kilometer: 1e-9, cubic_centimeter: 1e+6, cubic_millimeter: 1e+9, liter: 1000, milliliter: 1e+6, gallon_us: 264.172, quart_us: 1056.69, pint_us: 2113.38, cup_us: 4226.75, tablespoon_us: 67628, teaspoon_us: 202884 },
  time: { second: 1, minute: 60, hour: 3600, day: 86400, week: 604800, month: 2629800, year: 31557600 }
};

export default function Converter({ defaultCategory = "length" }) {
  const [category, setCategory] = useState(defaultCategory);
  const [fromUnit, setFromUnit] = useState("meter");
  const [toUnit, setToUnit] = useState("kilometer");
  const [inputValue, setInputValue] = useState(1);
  const [outputValue, setOutputValue] = useState(null);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  // **Auto Convert when any input changes**
  useEffect(() => {
    let result;
    if (category === "temperature") {
      if (fromUnit === "celsius" && toUnit === "fahrenheit") result = conversionRates.temperature.celsiusToFahrenheit(inputValue);
      else if (fromUnit === "fahrenheit" && toUnit === "celsius") result = conversionRates.temperature.fahrenheitToCelsius(inputValue);
      else if (fromUnit === "celsius" && toUnit === "kelvin") result = conversionRates.temperature.celsiusToKelvin(inputValue);
      else if (fromUnit === "kelvin" && toUnit === "celsius") result = conversionRates.temperature.kelvinToCelsius(inputValue);
      else if (fromUnit === "fahrenheit" && toUnit === "kelvin") result = conversionRates.temperature.fahrenheitToKelvin(inputValue);
      else if (fromUnit === "kelvin" && toUnit === "fahrenheit") result = conversionRates.temperature.kelvinToFahrenheit(inputValue);
    } else {
      result = inputValue * (conversionRates[category][toUnit] / conversionRates[category][fromUnit]);
    }
    setOutputValue(result ? result.toFixed(4) : "Error");
  }, [category, fromUnit, toUnit, inputValue]);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-green-300" : "bg-gray-100 text-gray-900"} min-h-screen flex flex-col justify-center items-center p-4`}>
      {/* Dark/Light Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 p-2 text-sm font-bold rounded border-2 transition duration-300"
        style={{ borderColor: darkMode ? "#22c55e" : "#333", background: darkMode ? "#22c55e" : "#333", color: darkMode ? "#111" : "#fff" }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Unit Converter Title */}
      <h1 className={`${darkMode ? "text-green-500" : "text-green-700"} text-4xl font-bold mb-6`}>
        Unit Converter
      </h1>

      {/* Conversion Box (Centered) */}
      <div className={`shadow-lg rounded-lg p-6 w-full max-w-lg border-2 ${darkMode ? "border-green-400 bg-gray-800" : "border-gray-500 bg-white"}`}>
        <label className={`block mb-2 text-lg ${darkMode ? "text-green-400" : "text-gray-700"}`}>Category:</label>
        <select
          className={`w-full p-2 mb-4 border rounded ${darkMode ? "bg-gray-700 text-green-300 border-green-400" : "bg-gray-200 text-gray-800 border-gray-500"}`}
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setFromUnit(Object.keys(conversionRates[e.target.value])[0]);
            setToUnit(Object.keys(conversionRates[e.target.value])[1]);
          }}
        >
          <option value="length">Length</option>
          <option value="weight">Weight</option>
          <option value="temperature">Temperature</option>
          <option value="area">Area</option>
          <option value="volume">Volume</option>
          <option value="time">Time</option>
        </select>

        {/* Conversion Inputs */}
        <div className={`flex items-center space-x-2 border p-4 rounded-md ${darkMode ? "border-green-400" : "border-gray-500"}`}>
          <input
            type="number"
            className={`w-1/3 p-2 border rounded text-center appearance-none ${darkMode ? "bg-gray-700 text-green-300 border-green-400" : "bg-gray-200 text-gray-800 border-gray-500"}`}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <select
            className={`w-1/4 p-2 border rounded ${darkMode ? "bg-gray-700 text-green-300 border-green-400" : "bg-gray-200 text-gray-800 border-gray-500"}`}
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.replace(/_/g, " ")}
              </option>
            ))}
          </select>
          <span className={`${darkMode ? "text-green-400" : "text-gray-700"} font-bold`}>=</span>
          <input
            type="text"
            className={`w-1/3 p-2 border rounded text-center ${darkMode ? "bg-gray-700 text-green-300 border-green-400" : "bg-gray-200 text-gray-800 border-gray-500"}`}
            value={outputValue || ""}
            readOnly
          />
          <select
            className={`w-1/4 p-2 border rounded ${darkMode ? "bg-gray-700 text-green-300 border-green-400" : "bg-gray-200 text-gray-800 border-gray-500"}`}
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit.replace(/_/g, " ")}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}