import * as usersRepo from './user.memory.repository.js';
import User from './user.model.js'

export const getAll = async () => Object.values(await usersRepo.getAll());
export const getById = async ({ userId }) => usersRepo.getById(userId)
export const create = async ({ body }) => {
  const newUser = new User(body)
  usersRepo.create(newUser)
  return newUser
}
export const update = async ({ userId, body }) => usersRepo.update(userId, User.toDB(body))
export const remove = async ({ userId }) => usersRepo.remove(userId)
