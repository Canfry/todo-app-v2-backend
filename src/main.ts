import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.use(cors());

  await app.listen(5500);
}
bootstrap();
function cors(): any {
  throw new Error('Function not implemented.');
}
