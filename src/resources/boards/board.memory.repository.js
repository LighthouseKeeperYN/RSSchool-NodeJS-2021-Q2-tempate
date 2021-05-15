import db from '../../db.js'

export const getAll = async () => db.boards
export const getById = async (id) => {
  if (!db.boards[id]) {
    throw new Error('Board not found')
  }

  return db.boards[id]
}
export const create = async (board) => {
  db.boards[board.id] = board
  db.tasks[board.id] = {}
  return db.boards[board.id]
};
export const update = async (id, board) => {
  if (!db.boards[id]) {
    throw new Error('Board not found')
  }

  db.boards[id] = { ...db.boards[id], ...board }
  return db.boards[id]
};
export const remove = async (id) => {
  if (!db.boards[id]) {
    throw new Error('Board not found')
  }

  const deletedBoard = db.boards[id]
  delete db.boards[id]
  delete db.tasks[id]
  return deletedBoard
}
