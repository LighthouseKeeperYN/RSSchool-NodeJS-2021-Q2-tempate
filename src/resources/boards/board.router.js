const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();

  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const { boardId } = req.params

  const boards = await boardsService.getById({ boardId });

  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const board = await boardsService.create({ body });

  res.json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const { body } = req
  const { boardId } = req.params

  const board = await boardsService.update({ boardId, body });

  res.json(Board.toResponse(board));
});

router.route('/:boardId').delete(async (req, res) => {
  const { boardId } = req.params

  const board = await boardsService.remove({ boardId });

  res.json(Board.toResponse(board));
});

module.exports = router;
