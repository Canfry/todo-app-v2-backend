import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://www.todo-app-v2-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
  await app.listen(5500);
}
bootstrap();

// allowedHeaders: ['content-type'],
//     origin: 'http://localhost:5173',

// {
//     origin: 'https://www.todo-app-v2-frontend.vercel.app',
//   }
