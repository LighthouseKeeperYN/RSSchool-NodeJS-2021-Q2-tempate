import * as tasksRepo from './task.memory.repository.js';
import Task from './task.model.js'

export const getAll = async ({ boardId }) => Object.values(await tasksRepo.getAll(boardId));
export const getById = async ({ boardId, taskId }) => tasksRepo.getById(boardId, taskId)
export const create = async ({ boardId, body, }) => tasksRepo.create(boardId, new Task({ ...body, boardId }))
export const update = async ({ boardId, taskId, body }) => tasksRepo.update(
  boardId, taskId, Task.fromRequest({ ...body, boardId, id: taskId })
)
export const remove = async ({ boardId, taskId }) => tasksRepo.remove(boardId, taskId)
