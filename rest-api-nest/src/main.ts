import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import path from 'path';
import YAML from 'yamljs';

import { AppModule } from './app.module';
import { PORT, HOST } from './common/config.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('doc', app, swaggerDocument);

  await app.listen(PORT, HOST);
}
bootstrap();
