import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Task, { ITask } from '../../entities/task.model.js';

@Injectable()
export default class TasksService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) { }

  async findAll() {
    return this.taskRepository.find();
  }

  async findOne(options: Partial<ITask>) {
    const task = await this.taskRepository.findOne(options);

    if (!task) {
      throw new Error('Task not found');
    }

    return task;
  }

  async create(boardId: string, task: ITask) {
    const newTask = this.taskRepository.create(new Task({ ...task, boardId }));

    return this.taskRepository.save(newTask);
  }

  async update(id: string, task: ITask) {
    const updateResult = await this.taskRepository.update(id, task);

    if (!updateResult.affected) {
      throw new Error('Task not found');
    }
  }

  async remove(id: string) {
    const deleteResult = await this.taskRepository.delete(id);

    if (!deleteResult.affected) {
      throw new Error('Task not found');
    }
  }
}
