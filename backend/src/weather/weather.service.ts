import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { WeatherResponse } from '../types/weather';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherService {
  constructor(private configService: ConfigService) {}
  async getWeather(city: string) {
    const apiKey = this.configService.get<string>('WEATHER_API_KEY');
    if (!apiKey) {
      throw new Error('OpenWeather API key is missing');
    }
    if (!city) {
      throw new BadRequestException('City is required');
    }

    //     const apiKey = process.env.WEATHER_API_KEY;

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
      );

      if (!response.ok) {
        throw new BadRequestException('Invalid city or API error');
      }

      const data = (await response.json()) as WeatherResponse;

      const condition: string = data.weather[0].main.toLowerCase();
      const temperature: number = data.main.temp;

      // 🎯 Recommendation logic
      let recommendation = 'No need';

      if (condition.includes('rain')) {
        recommendation = 'Take umbrella ☔';
      } else if (condition.includes('clear')) {
        recommendation = 'Take sunglasses 😎';
      } else if (condition.includes('cloud')) {
        recommendation = 'Maybe take sunglasses 😎';
      }

      return {
        temperature,
        condition,
        recommendation,
      };
    } catch (error) {
      console.log(error);

      throw new InternalServerErrorException('Failed to fetch weather data');
    }
  }
}
