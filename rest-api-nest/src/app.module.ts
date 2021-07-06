import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import dbConfig from './common/ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import UsersController from './resources/users/user.controller';
import UsersModule from './resources/users/user.module';
import TaskModule from './resources/tasks/task.module';
import BoardModule from './resources/boards/board.module';
// import { TasksController } from './resources/tasks/tasks.controller';
// import { LoginController } from './resources/login/login.controller';
// import { ColumnsController } from './resources/columns/columns.controller';
// import { BoardsController } from './resources/boards/boards.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    UsersModule,
    TaskModule,
    BoardModule,
  ],
  providers: [AppService],
  controllers: [
    AppController,
    // UsersController,
    // TasksController,
    // LoginController,
    // ColumnsController,
    // BoardsController
  ],
})
export class AppModule { }
