import { useState } from "react";
import { WeatherCard } from "./WeatherCart";
import type { Weather } from "./types";
import { fetchWeather } from "../../api/fetchWeather";

export default function WeatherAdvisor() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherHandler = async () => {
    fetchWeather(setWeather, setLoading, city);
    // setLoading(true);

    // // Fake API (replace with real API)
    // setTimeout(() => {
    //   setWeather({
    //     city: city || "Abuja",
    //     temp: 27,
    //     condition: "Cloudy",
    //     high: 30,
    //     low: 24,
    //     feelsLike: 29,
    //     humidity: 55,
    //     isNight: false,
    //   });
    //   setLoading(false);
    // }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* LEFT SIDE */}
      <div className="w-2/3 flex flex-col items-center justify-start p-1">
        <h1 className="text-4xl font-semibold text-gray-700 mb-6">
          Weather in
        </h1>

        <div className="flex gap-3 mb-10">
          <input
            type="text"
            placeholder="What City?"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="px-6 py-3 rounded-full shadow-md outline-none w-72"
          />
          <button
            onClick={fetchWeatherHandler}
            disabled={loading}
            className="px-6 py-3 rounded-full bg-black text-white shadow-md hover:scale-105 transition"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {weather && (
          <div className="flex gap-10">
            {/* CARD 1 */}
            <WeatherCard weather={weather} night />

            {/* CARD 2 */}
            {/* <WeatherCard weather={weather} /> */}
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/3 bg-teal-900 text-white flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">☁️</div>
          <h2 className="text-5xl font-light">WEATHER APP</h2>
          <p className="text-xl grid text-yellow-300 mt-4 px-3 tracking-widest">
            <span>FullStack:</span>
            <span>NestJS & ReactJS & TypeScript & Tailwind</span>
          </p>
        </div>
      </div>
    </div>
  );
}
