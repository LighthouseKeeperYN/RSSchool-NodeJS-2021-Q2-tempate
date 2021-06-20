import * as tasksRepo from './task.memory.repository.js';
import Task, { ITask } from '../../entities/task.model.js'

export const getAll = async (boardId: string) => Object.values(await tasksRepo.getAll(boardId));
export const getById = async (boardId: string, taskId: string) => tasksRepo.getById(boardId, taskId)
export const create = async (boardId: string, body: ITask,) => tasksRepo.create(boardId, new Task({ ...body, boardId }))
export const update = async (boardId: string, taskId: string, body: ITask) => tasksRepo.update(
  boardId, taskId, Task.fromRequest({ ...body, boardId, id: taskId })
)
export const remove = async (boardId: string, taskId: string) => tasksRepo.remove(boardId, taskId)
