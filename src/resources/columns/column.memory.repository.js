import db from '../../db.js'

export const getAll = async () => db.columns
export const getById = async (id) => db.columns[id]
export const create = async (column) => {
  db.columns[column.id] = column
};
export const update = async (id, column) => {
  if (!db.columns[id]) return false

  db.columns[id] = { ...db.columns[id], ...column }

  return db.columns[id]
};
export const remove = async (id) => {
  if (!db.columns[id]) return false

  const deletedUser = db.columns[id]

  delete db.columns[id]

  return deletedUser
}
