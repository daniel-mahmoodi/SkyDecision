import type { Weather } from "../components/weather/types";

export const fetchWeather = async (
  setWeather: (items: Weather) => void,
  setLoading: (condition: boolean) => void,
  city: string,
) => {
  if (!city) return;
  setLoading(true);

  try {
    const res = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/weather?city=${city}`,
    );
    console.log(res);

    // const res = await fetch(
    //   `${process.env.VITE_BACKEND_URL}/weather?city=${city}`,
    // );
    const data = await res.json();
    setWeather(data);
  } catch (err) {
    console.error(err);
    alert("Failed to fetch weather");
  } finally {
    setLoading(false);
  }
};
