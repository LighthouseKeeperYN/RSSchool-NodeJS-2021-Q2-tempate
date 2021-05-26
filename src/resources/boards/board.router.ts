import express from 'express'
import Board from './board.model.js'
import * as boardsService from './board.service.js'

const router = express.Router()

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params;

  try {
    const board = await boardsService.getById(boardId);
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const board = await boardsService.create(body);

  res.status(201).json(Board.toResponse(board))
});

router.route('/:boardId').put(async (req, res) => {
  const { body } = req;
  const { boardId } = req.params;

  try {
    const board = await boardsService.update(boardId, body);
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params;

  try {
    const board = await boardsService.remove(boardId);
    res.status(200).json(Board.toResponse(board));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
