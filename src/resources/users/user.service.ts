import * as usersRepo from './user.memory.repository.js';
import * as tasksRepo from '../tasks/task.memory.repository.js';
import User, { IUser } from './user.model.js'

export const getAll = async () => Object.values(await usersRepo.getAll());
export const getById = async (userId: string) => usersRepo.getById(userId)
export const create = async (body: IUser) => usersRepo.create(new User(body))
export const update = async (userId: string, body: IUser) => usersRepo.update(userId, User.fromRequest(body))
export const remove = async (userId: string) => {
  tasksRepo.unassignAll(userId)
  return usersRepo.remove(userId)
}
