import db from '../../db.js'

export const getAll = async () => Object.values(db.users)
export const getById = async (id) => db.users[id]
export const create = async (user) => {
  db.users[user.id] = user
};
export const update = async (id, user) => {
  db.users[id] = { ...db.users[id], ...user }
};
export const remove = async (id) => delete db.users[id]
