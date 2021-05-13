const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const boards = await boardsService.getById(req.params.id);
  res.json(boards.map(Board.toResponse));
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(req.body);
  res.json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.json(Board.toResponse(board));
});

router.route('/:boardId').delete(async (req, res) => {
  const board = await boardsService.remove(req.params.id);
  res.json(Board.toResponse(board));
});

module.exports = router;
