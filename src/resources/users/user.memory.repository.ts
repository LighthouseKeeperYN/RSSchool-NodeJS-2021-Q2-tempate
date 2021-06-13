import db from '../../../db/index.js'
import { IUser } from './user.model';

export const getAll = async () => db.users
export const getById = async (id: string) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  return db.users[id]
}
export const create = async (user: IUser) => {
  db.users[user.id] = user
  return db.users[user.id]
};
export const update = async (id: string, user: IUser) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  db.users[id] = { ...db.users[id], ...user }
  return db.users[id]
};
export const remove = async (id: string) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  const deletedUser = db.users[id]
  delete db.users[id]
  return deletedUser
}
