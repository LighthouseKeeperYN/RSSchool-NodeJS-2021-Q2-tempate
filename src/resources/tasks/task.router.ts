import express, { Request as IRequest } from 'express'
import Task from '../../entities/task.model.js'
import * as tasksService from './task.service.js'

const router = express.Router({ mergeParams: true })

router.route('/').get(async (req: IRequest, res) => {
  const { boardId } = req.params;
  if (!boardId) return

  const tasks = await tasksService.getAll();

  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req: IRequest, res) => {
  const { taskId } = req.params;
  if (!taskId) return

  try {
    const task = await tasksService.getById(taskId);
    if (!task) return
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req: IRequest, res) => {
  const { body } = req;
  const { boardId } = req.params;
  if (!boardId) return

  const task = await tasksService.create(boardId, body);
  if (!task) return
  res.status(201).json(Task.toResponse(task))
});

router.route('/:taskId').put(async (req: IRequest, res) => {
  const { body } = req;
  const { taskId } = req.params;
  if (!taskId) return

  try {
    const task = await tasksService.update(taskId, body);
    if (!task) return
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:taskId').delete(async (req: IRequest, res) => {
  const { taskId } = req.params;
  if (!taskId) return

  try {
    const task = await tasksService.remove(taskId);
    if (!task) return
    res.status(200).json(Task.toResponse(task));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
