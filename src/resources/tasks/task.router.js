const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const { boardId } = req.params

  const tasks = await tasksService.getAll({ boardId });
  
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const { boardId, taskId } = req.params

  const tasks = await tasksService.getById({ boardId, taskId });

  res.json(tasks.map(Task.toResponse));
});


router.route('/').post(async (req, res) => {
  const { boardId } = req.params

  const task = await tasksService.create({ boardId });

  res.json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const { body } = req
  const { boardId, taskId } = req.params

  const task = await tasksService.update({ boardId, taskId, body });

  res.json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const { boardId, taskId } = req.params

  const task = await tasksService.remove({ boardId, taskId });

  res.json(Task.toResponse(task));
});

module.exports = router;
