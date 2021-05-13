import express  from 'express'
import Task  from './task.model.js';
import * as tasksService  from './task.service.js';

const router = express.Router({ mergeParams: true });

router.route('/').get(async (req, res) => {
  const { boardId } = req.params

  const tasks = await tasksService.getAll({ boardId });

  res.status(200).send(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params

  const tasks = await tasksService.getById({ boardId, taskId });

  res.status(200).send(tasks.map(Task.toResponse));
});


router.route('/').post(async (req, res) => {
  const { boardId } = req.params

  const task = await tasksService.create({ boardId });

  res.status(200).send(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const { body } = req
  const { boardId, taskId } = req.params

  const task = await tasksService.update({ boardId, taskId, body });

  res.status(200).send(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const { boardId, taskId } = req.params

  const task = await tasksService.remove({ boardId, taskId });

  res.status(200).send(Task.toResponse(task));
});

export default router;
