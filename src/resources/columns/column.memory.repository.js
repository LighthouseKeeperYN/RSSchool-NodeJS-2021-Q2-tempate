import db from '../../db.js'

export const getAll = async () => Object.values(db.columns)
export const getById = async (id) => db.columns[id]
export const create = async (column) => {
  db.columns[column.id] = column
};
export const update = async (id, column) => {
  db.columns[id] = { ...db.columns[id], ...column }
};
export const remove = async (id) => delete db.columns[id]
