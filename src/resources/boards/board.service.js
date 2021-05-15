import * as boardsRepo from './board.memory.repository.js';
import Board from './board.model.js'

export const getAll = async () => Object.values(await boardsRepo.getAll());
export const getById = async ({ boardId }) => boardsRepo.getById(boardId)
export const create = async ({ body }) => boardsRepo.create(new Board(body))
export const update = async ({ boardId, body }) => boardsRepo.update(boardId, Board.fromRequest(body))
export const remove = async ({ boardId }) => boardsRepo.remove(boardId)
