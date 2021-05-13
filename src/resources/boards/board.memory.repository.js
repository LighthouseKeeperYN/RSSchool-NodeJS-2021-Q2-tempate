import db from '../../db.js'

export const getAll = async () => db.boards
export const getById = async (id) => db.boards[id]
export const create = async (board) => {
  db.boards[board.id] = board
};
export const update = async (id, board) => {
  if (!db.boards[id]) return false

  db.boards[id] = { ...db.boards[id], ...board }

  return db.boards[id]
};
export const remove = async (id) => {
  if (!db.boards[id]) return false

  const deletedUser = db.boards[id]

  delete db.boards[id]

  return deletedUser
}
