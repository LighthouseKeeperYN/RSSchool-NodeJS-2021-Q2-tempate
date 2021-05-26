import db from '../../db.js'

export const getAll = async () => db.users
export const getById = async (id) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  return db.users[id]
}
export const create = async (user) => {
  db.users[user.id] = user
  return db.users[user.id]
};
export const update = async (id, user) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  db.users[id] = { ...db.users[id], ...user }
  return db.users[id]
};
export const remove = async (id) => {
  if (!db.users[id]) {
    throw new Error('User not found')
  }

  const deletedUser = db.users[id]
  delete db.users[id]
  return deletedUser
}
