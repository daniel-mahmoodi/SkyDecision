import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags, ApiQuery } from '@nestjs/swagger';
import { WeatherService } from './weather.service';
import { ApiResponse } from '@nestjs/swagger';
import { WeatherResponseDto } from './dtos/weather.dto';
@ApiTags('Weather')
@Controller('weather')
@ApiResponse({ status: 200, type: WeatherResponseDto })
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiQuery({ name: 'city', required: true })
  getWeather(@Query('city') city: string) {
    return this.weatherService.getWeather(city);
  }
}
