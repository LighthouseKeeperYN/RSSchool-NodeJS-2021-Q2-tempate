import * as boardsRepo from './board.memory.repository.js';
import Board, { IBoard } from '../../entities/board.model.js'

export const getAll = async () => boardsRepo.getAll();
export const getById = async (boardId: string) => boardsRepo.getById(boardId)
export const create = async (body: IBoard) => boardsRepo.create(new Board(body))
export const update = async (boardId: string, body: IBoard) => boardsRepo.update(boardId, Board.fromRequest(body))
export const remove = async (boardId: string) => boardsRepo.remove(boardId)
