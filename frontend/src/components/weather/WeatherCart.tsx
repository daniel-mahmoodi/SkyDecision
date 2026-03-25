import { motion } from "framer-motion";
import type { Weather } from "./types";

export function WeatherCard({
  weather,
  night,
}: {
  weather: Weather;
  night: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-72 h-[420px] rounded-3xl shadow-xl p-6 grid
        ${
          night
            ? "bg-gradient-to-b from-indigo-900 to-gray-200 text-white"
            : "bg-gradient-to-b from-blue-300 to-gray-200 text-gray-700"
        }`}
    >
      {/* Top */}
      {/* <div>
        <h3 className="text-lg font-semibold">{weather.city}</h3>
        <div className="text-center mt-4 text-6xl">{night ? "🌙" : "☀️"}</div>
      </div> */}

      {/* Middle */}
      <div>
        <h1 className="text-5xl font-light">{weather.temperature}°C</h1>
        <p className="text-lg">{weather.condition}</p>
        {/* <p className="text-sm">↑ {weather.high}°C</p>
        <p className="text-sm">↓ {weather.low}°C</p> */}
      </div>

      {/* Bottom */}
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-xl">{weather.recommendation}°C</p>
        </div>
        {/* <div>
          <p className="text-xl">{weather.humidity}%</p>
          <p>Humidity</p>
        </div> */}
      </div>
    </motion.div>
  );
}
