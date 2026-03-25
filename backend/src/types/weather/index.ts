export interface WeatherResponse {
  weather: { main: string }[];
  main: { temp: number };
}
