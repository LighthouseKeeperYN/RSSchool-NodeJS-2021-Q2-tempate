import express from 'express'

import * as loginService from './login.service.js'

const router = express.Router()

router.route('/').post(async (req, res) => {
  const { body } = req;

  try {
    const token = await loginService.authenticateUser(body);

    res.status(200).json({ token });
  } catch (e) {
    res.status(403).send(e.message);
  }
});


export default router;
