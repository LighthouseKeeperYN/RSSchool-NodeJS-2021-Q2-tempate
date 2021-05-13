import * as tasksRepo from './task.memory.repository.js'

export const getAll = () => tasksRepo.getAll();
export const getById = ({ userId }) => tasksRepo.getById(userId)
export const create = ({ body }) => tasksRepo.create(body)
export const update = ({ userId, body }) => tasksRepo.update(userId, body)
export const remove = ({ userId }) => tasksRepo.remove(userId)
