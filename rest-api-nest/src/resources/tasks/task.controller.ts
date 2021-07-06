import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res,
} from '@nestjs/common';
import { Response } from 'express';

import Task, { ITask } from '../../entities/task.model.js';
import TaskService from './task.service';

@Controller('boards/:boardId/tasks')
export default class TaskController {
  constructor(
    private readonly taskService: TaskService,
  ) { }

  @Get()
  async findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  async findOne(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const task = await this.taskService.findOne({ id });
      return res.json(Task.toResponse(task!));
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }

  @Post()
  async create(
    @Param('boardId') boardId: any,
    @Body() taskData: ITask,
  ) {
    const newTask = await this.taskService.create(boardId, taskData);
    return newTask;
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id') taskId: string,
    @Body() body: ITask,
  ) {
    try {
      await this.taskService.update(taskId, body);
      return res.send('Task updated');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }

  @Delete(':id')
  async remove(
    @Res() res: Response,
    @Param('id') taskId: string,
  ) {
    try {
      await this.taskService.remove(taskId);
      return res.send('Task deleted');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }
}
