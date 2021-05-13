import db from '../../db.js'

export const getAll = async () => db.users
export const getById = async (id) => db.users[id]
export const create = async (user) => {
  db.users[user.id] = user
};
export const update = async (id, user) => {
  if (!db.users[id]) return false

  db.users[id] = { ...db.users[id], ...user }

  return db.users[id]
};
export const remove = async (id) => {
  if (!db.users[id]) return false

  const deletedUser = db.users[id]

  delete db.users[id]

  return deletedUser
}
