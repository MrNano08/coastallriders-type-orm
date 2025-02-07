import { NestFactory } from '@nestjs/core';
import { DatabaseModule } from './database.module';

async function bootstrap() {
  const app = await NestFactory.create(DatabaseModule);
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
