import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: ['Content-Type'],
    origin: 'http://localhost:5173',
    credentials: true,
  });
  await app.listen(5500);
}
bootstrap();
