const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req, res) => {
  const tasks = await tasksService.getById(req.params.id);
  res.json(tasks.map(Task.toResponse));
});


router.route('/').post(async (req, res) => {
  const task = await tasksService.create(req.body);
  res.json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  res.json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req, res) => {
  const task = await tasksService.remove(req.params.id);
  res.json(Task.toResponse(task));
});

module.exports = router;
