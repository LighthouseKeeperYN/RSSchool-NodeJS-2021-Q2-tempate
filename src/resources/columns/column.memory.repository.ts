import db from '../../../db/index.js'
import { IColumn } from '../../entities/column.model.js';

export const getAll = async () => db.columns
export const getById = async (id: string) => {
  if (!db.columns[id]) {
    throw new Error('Column not found')
  }

  return db.columns[id]
}
export const create = async (column: IColumn) => {
  db.columns[column.id] = column
  return db.columns[column.id]
};
export const update = async (id: string, column: IColumn) => {
  if (!db.columns[id]) {
    throw new Error('Column not found')
  }

  db.columns[id] = { ...db.columns[id], ...column }
  return db.columns[id]
};
export const remove = async (id: string) => {
  if (!db.columns[id]) {
    throw new Error('Column not found')
  }

  const deletedColumn = db.columns[id]
  delete db.columns[id]
  return deletedColumn
}
