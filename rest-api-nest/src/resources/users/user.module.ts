import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserService from './user.service';
import UsersController from './user.controller';
import User from '../../entities/user.model.js';
import Task from '../../entities/task.model.js';

@Module({
  imports: [TypeOrmModule.forFeature([User, Task])],
  providers: [UserService],
  controllers: [UsersController],
})
export default class UsersModule { }
