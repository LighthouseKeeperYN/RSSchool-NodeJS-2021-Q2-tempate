import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './common/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './resources/login/login.module';

import UsersModule from './resources/users/user.module';
import TaskModule from './resources/tasks/task.module';
import BoardModule from './resources/boards/board.module';
import ColumnModule from './resources/columns/column.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UsersModule,
    TaskModule,
    BoardModule,
    ColumnModule,
    LoginModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule { }
