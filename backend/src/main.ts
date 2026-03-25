import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (for your React later)
  app.enableCors();

  // ✅ Swagger config
  const config = new DocumentBuilder()
    .setTitle('Weather Advisor API')
    .setDescription('API for umbrella or sunglasses suggestion')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
