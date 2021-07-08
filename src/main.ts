import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import path from 'path';
import YAML from 'yamljs';
import LoginService from './resources/login/login.service';
import UsersService from './resources/users/user.service';

import { AppModule } from './app.module';
import { PORT, HOST } from './common/config.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('doc', app, swaggerDocument);

  await app.listen(PORT, HOST);

  try {
    await app.get(LoginService).authenticateUser({ login: 'admin', password: 'admin' });
  } catch (error) {
    await app.get(UsersService).create({ name: 'admin', login: 'admin', password: 'admin' });
  }
}
bootstrap();
