import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import path from 'path';
import YAML from 'yamljs';

import { AppModule } from './app.module';
import { PORT, HOST } from './common/config.js';
// import { connectToDB } from './helpers/db.helper.js';

// const __dirname = path.resolve(path.dirname(''));

async function bootstrap() {
  // await connectToDB();
  const app = await NestFactory.create(AppModule,  {
    logger: ['log', 'error', 'warn'],
  });

  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  Logger.log('test')
  // console.log(swaggerDocument)
  SwaggerModule.setup('doc', app, swaggerDocument);

  await app.listen(PORT, HOST);
}
bootstrap();
