import express from 'express'
import Column from './column.model'
import * as columnsService from './column.service'

const router = express.Router()

router.route('/').get(async (req, res) => {
  const columns = await columnsService.getAll();
  // map column fields to exclude secret fields like "password"
  res.json(columns.map(Column.toResponse));
});

export default router;
