import * as tasksRepo from './task.memory.repository.js'

export const getAll = () => tasksRepo.getAll();
export const getById = () => tasksRepo.getById()
export const create = () => tasksRepo.create()
export const update = () => tasksRepo.update()
export const remove = () => tasksRepo.remove()
