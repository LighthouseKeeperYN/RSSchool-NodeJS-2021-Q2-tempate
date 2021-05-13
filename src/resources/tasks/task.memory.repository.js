import db from '../../db.js'

export const getAll = async () => db.tasks
export const getById = async (id) => db.tasks[id]
export const create = async (task) => {
  db.tasks[task.id] = task
};
export const update = async (id, task) => {
  if (!db.tasks[id]) return false

  db.tasks[id] = { ...db.tasks[id], ...task }

  return db.tasks[id]
};
export const remove = async (id) => {
  if (!db.tasks[id]) return false

  const deletedUser = db.tasks[id]

  delete db.tasks[id]

  return deletedUser
}
