import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { corsOption } from './shared/options/cors.option';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.enableCors(corsOption);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen(config.get('PORT'), () => {
    console.log(`Port : ${config.get('PORT')} with start `);
  });
}
bootstrap();
