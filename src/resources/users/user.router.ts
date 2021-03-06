import express from 'express'
import User from '../../entities/user.model.js'
import * as usersService from './user.service.js'

const router = express.Router()

router.route('/').get(async (_, res) => {
  const users = await usersService.getAll();

  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await usersService.getOne({ id: userId });
    if (!user) return
    res.status(200).json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/').post(async (req, res) => {
  const { body } = req;

  const user = await usersService.create(body);
  if (!user) return
  res.status(201).json(User.toResponse(user))
});

router.route('/:userId').put(async (req, res) => {
  const { body } = req;
  const { userId } = req.params;

  try {
    const user = await usersService.update(userId, body);
    if (!user) return
    res.status(200).json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

router.route('/:userId').delete(async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await usersService.remove(userId);
    if (!user) return
    res.status(200).json(User.toResponse(user));
  } catch (e) {
    res.status(404).send(e.message);
  }
});

export default router;
