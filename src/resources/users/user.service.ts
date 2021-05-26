import * as usersRepo from './user.memory.repository.js';
import * as tasksRepo from '../tasks/task.memory.repository.js';
import User from './user.model.js'

export const getAll = async () => Object.values(await usersRepo.getAll());
export const getById = async ({ userId }) => usersRepo.getById(userId)
export const create = async ({ body }) => usersRepo.create(new User(body))
export const update = async ({ userId, body }) => usersRepo.update(userId, User.fromRequest(body))
export const remove = async ({ userId }) => {
  tasksRepo.unassignAll(userId)
  return usersRepo.remove(userId)
}
