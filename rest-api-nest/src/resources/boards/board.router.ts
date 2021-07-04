import express from 'express';
import Board from '../../entities/board.model.js';
import * as boardsService from './board.service.js';

const router = express.Router();

router.route('/').get(async (_, res) => {
  const boards = await boardsService.getAll();

  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;

  try {
    const board = await boardsService.getById(boardId);
    if (!board) return;
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const board = await boardsService.create(body);
  if (!board) return;
  res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const { body } = req;
  const { boardId } = req.params;

  try {
    const board = await boardsService.update(boardId, body);
    if (!board) return;
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;

  try {
    const board = await boardsService.remove(boardId);
    if (!board) return;
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
