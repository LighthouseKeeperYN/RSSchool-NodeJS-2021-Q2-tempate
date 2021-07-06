import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import TaskService from './task.service';
import TasksController from './task.controller';
import Task from '../../entities/task.model.js';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TaskService],
  controllers: [TasksController],
})
export default class TasksModule { }
