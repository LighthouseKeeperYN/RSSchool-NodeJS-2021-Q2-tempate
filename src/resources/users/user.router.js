const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;

  const users = await usersService.getById({ userId });

  res.json(users.map(User.toResponse));
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const user = await usersService.create({ body });

  res.json(User.toResponse(user));
});

router.route('/:userId').put(async (req, res) => {
  const { body } = req;
  const { userId } = req.params;

  const user = await usersService.update({ userId, body });

  res.json(User.toResponse(user));
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;

  const user = await usersService.remove({ userId });

  res.json(User.toResponse(user));
});

module.exports = router;
