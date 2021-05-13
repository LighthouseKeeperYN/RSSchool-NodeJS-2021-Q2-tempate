import db from '../../db.js'

export const getAll = async () => Object.values(db.boards)
export const getById = async (id) => db.boards[id]
export const create = async (board) => {
  db.boards[board.id] = board
};
export const update = async (id, board) => {
  db.boards[id] = { ...db.boards[id], ...board }
};
export const remove = async (id) => delete db.boards[id]
