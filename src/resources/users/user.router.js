const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const users = await usersService.getById(req.params.id);
  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.create(req.body);
  res.json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const user = await usersService.update(req.params.id, req.body);
  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  const user = await usersService.remove(req.params.id);
  res.json(User.toResponse(user));
});

module.exports = router;
