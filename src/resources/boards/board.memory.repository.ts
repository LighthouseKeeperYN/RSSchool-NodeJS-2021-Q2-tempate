import { getRepository } from 'typeorm';
import Board, { IBoard } from '../../entities/board.model.js';
import Task from '../../entities/task.model.js';

export const getAll = async () => {
  const repo = getRepository(Board)
  return repo.find()
};

export const getById = async (id: string) => {
  const repo = getRepository(Board)
  const board = await repo.findOne(id)

  if (!board) {
    throw new Error('Board not found')
  }

  return board
}

export const create = async (board: IBoard) => {
  const repo = getRepository(Board)
  const newBoard = repo.create(board)

  return repo.save(newBoard)
};

export const update = async (id: string, board: IBoard) => {
  const repo = getRepository(Board)
  const updateRes = await repo.update(id, board)

  if (!updateRes.affected) {
    throw new Error('Board not found')
  }

  return board
};

export const remove = async (id: string) => {
  const boardRepo = getRepository(Board)
  const taskRepo = getRepository(Task)

  const foundBoard = await boardRepo.findOne(id)

  if (!foundBoard) {
    throw new Error('Board not found')
  }

  await taskRepo.delete({ boardId: id });
  await boardRepo.delete(id)

  return foundBoard
}
