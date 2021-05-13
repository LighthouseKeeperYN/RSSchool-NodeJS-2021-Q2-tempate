import db from '../../db.js'

export const getAll = async () => Object.values(db.tasks)
export const getById = async (id) => db.tasks[id]
export const create = async (task) => {
  db.tasks[task.id] = task
};
export const update = async (id, task) => {
  db.tasks[id] = { ...db.tasks[id], ...task }
};
export const remove = async (id) => delete db.tasks[id]
