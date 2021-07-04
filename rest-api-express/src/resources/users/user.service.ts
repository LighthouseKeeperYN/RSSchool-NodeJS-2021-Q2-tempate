import bcrypt from 'bcryptjs';

import * as usersRepo from './user.memory.repository.js';
import * as tasksRepo from '../tasks/task.memory.repository.js';
import User, { IUser } from '../../entities/user.model.js'

export const getAll = async () => usersRepo.getAll();
export const getOne = async (options: Partial<IUser>) => usersRepo.getOne(options)
export const create = async ({ password, ...userData }: IUser) => {
  const newUser = await usersRepo.create(new User({
    ...userData,
    password: bcrypt.hashSync(password, 10)
  }))

  return newUser
}
export const update = async (userId: string, body: IUser) => usersRepo.update(userId, User.fromRequest(body))
export const remove = async (userId: string) => {
  await tasksRepo.unassignAll(userId)
  return usersRepo.remove(userId)
}
