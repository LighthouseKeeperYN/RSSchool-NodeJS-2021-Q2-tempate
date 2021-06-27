import { getRepository } from 'typeorm';
import User, { IUser } from '../../entities/user.model.js';

export const getAll = async () => {
  const repo = getRepository(User)
  return repo.find()
};

export const getOne = async (options: Partial<IUser>) => {
  const repo = getRepository(User)
  const user = await repo.findOne(options)

  if (!user) {
    throw new Error('User not found')
  }

  return user
}

export const create = async (user: IUser) => {
  const repo = getRepository(User)
  const newUser = repo.create(user)

  return repo.save(newUser)
};

export const update = async (id: string, user: IUser) => {
  const repo = getRepository(User)
  const updateRes = await repo.update(id, user)

  if (!updateRes.affected) {
    throw new Error('User not found')
  }

  return user
};

export const remove = async (id: string) => {
  const repo = getRepository(User)
  const foundUser = await repo.findOne(id)

  if (!foundUser) {
    throw new Error('User not found')
  }

  await repo.delete(id)

  return foundUser
}
