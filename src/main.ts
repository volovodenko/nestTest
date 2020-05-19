import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import logger from './logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
    cors: {
      origin: '*',
      allowedHeaders: 'Content-Type,Authorization,X-Requested-With',
      credentials: true,
    },
  });

  await app.listen(3000);
}

bootstrap();
