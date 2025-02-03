"use client"; // Enables client-side interactions

import { useState } from "react";

const conversionRates = {
  length: { meter: 1, kilometer: 0.001, mile: 0.000621371, foot: 3.28084 },
  weight: { kilogram: 1, gram: 1000, pound: 2.20462, ounce: 35.274 },
  temperature: {
    celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
    fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
  },
};

export default function Converter({ defaultCategory = "length" }) {
    const [category, setCategory] = useState(defaultCategory);
    const [fromUnit, setFromUnit] = useState("meter");
    const [toUnit, setToUnit] = useState("kilometer");
    const [inputValue, setInputValue] = useState(1);
    const [outputValue, setOutputValue] = useState(null);
  
    const conversionRates = {
      length: { meter: 1, kilometer: 0.001, mile: 0.000621371, foot: 3.28084 },
      weight: { kilogram: 1, gram: 1000, pound: 2.20462, ounce: 35.274 },
      temperature: {
        celsiusToFahrenheit: (c) => (c * 9) / 5 + 32,
        fahrenheitToCelsius: (f) => ((f - 32) * 5) / 9,
      },
    };
  
    const handleConversion = () => {
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-green-300 p-4 font-mono">
        <h1 className="text-4xl font-bold text-green-500 mb-6 border-b-4 border-green-500 pb-2">
          Unit Converter
        </h1>
  
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 w-full max-w-md border-2 border-green-400">
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
            <option value="length">Length</option>
            <option value="weight">Weight</option>
            <option value="temperature">Temperature</option>
          </select>
  
          <label className="block text-green-400 mb-2">From:</label>
          <select
            className="w-full p-2 mb-4 border rounded bg-gray-700 text-green-300 border-green-400"
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
  
          <label className="block text-green-400 mb-2">To:</label>
          <select
            className="w-full p-2 mb-4 border rounded bg-gray-700 text-green-300 border-green-400"
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
          >
            {Object.keys(conversionRates[category]).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
  
          <label className="block text-green-400 mb-2">Value:</label>
          <input
            type="number"
            className="w-full p-2 mb-4 border rounded bg-gray-700 text-green-300 border-green-400"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
  
          <button
            className="w-full bg-green-500 text-gray-900 p-2 rounded font-bold hover:bg-green-400 transition"
            onClick={handleConversion}
          >
            Convert
          </button>
  
          {outputValue !== null && (
            <div className="mt-4 text-center text-lg font-bold text-green-400 border-t-2 border-green-500 pt-2">
              Result: {outputValue} {toUnit}
            </div>
          )}
        </div>
      </div>
    );
  }
