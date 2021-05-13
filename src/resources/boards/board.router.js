import express from 'express'
import Board from './board.model.js'
import * as boardsService from './board.service.js'

const router = express.Router()

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.status(200).send(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params

  const boards = await boardsService.getById({ boardId });

  res.status(200).send(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const board = await boardsService.create({ body });

  res.status(200).send(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const { body } = req
  const { boardId } = req.params

  const board = await boardsService.update({ boardId, body });

  res.status(200).send(Board.toResponse(board));
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params

  const board = await boardsService.remove({ boardId });

  res.status(200).send(Board.toResponse(board));
});

export default router;
