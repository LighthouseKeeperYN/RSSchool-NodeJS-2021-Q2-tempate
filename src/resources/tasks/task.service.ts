import * as tasksRepo from './task.memory.repository.js';
import Task, { ITask } from '../../entities/task.model.js'

export const getAll = async () => tasksRepo.getAll();
export const getById = async (taskId: string) => tasksRepo.getById(taskId)
export const create = async (boardId: string, body: ITask,) => tasksRepo.create(new Task({ ...body, boardId }))
export const update = async (taskId: string, body: ITask) => tasksRepo.update(
  taskId, Task.fromRequest({ ...body, id: taskId })
)
export const remove = async (taskId: string) => tasksRepo.remove(taskId)
