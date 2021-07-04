import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { PORT, HOST } from './common/config.js';
import { connectToDB } from './helpers/db.helper.js';

async function bootstrap() {
  await connectToDB();
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, HOST);
}
bootstrap();
