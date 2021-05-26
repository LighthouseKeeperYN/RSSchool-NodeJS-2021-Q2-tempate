import express from 'express'
import Column from './column.model.js'
import * as columnsService from './column.service.js'

const router = express.Router()

router.route('/').get(async (_, res) => {
  const columns = await columnsService.getAll();

  res.status(200).json(columns.map(Column.toResponse));
});

router.route('/:columnId').get(async (req, res) => {
  const { columnId } = req.params;

  try {
    const column = await columnsService.getById(columnId);
    if (!column) return
    res.status(200).json(Column.toResponse(column));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const column = await columnsService.create(body);
  if (!column) return
  res.status(201).json(Column.toResponse(column))
});

router.route('/:columnId').put(async (req, res) => {
  const { body } = req;
  const { columnId } = req.params;

  try {
    const column = await columnsService.update(columnId, body);
    if (!column) return
    res.status(200).json(Column.toResponse(column));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:columnId').delete(async (req, res) => {
  const { columnId } = req.params;

  try {
    const column = await columnsService.remove(columnId);
    if (!column) return
    res.status(200).json(Column.toResponse(column));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
