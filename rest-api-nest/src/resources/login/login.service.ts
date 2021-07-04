import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../../common/config';
import { IUser } from '../../entities/user.model.js';
import * as usersRepo from '../users/user.memory.repository.js';

export const authenticateUser = async ({ login, password = '' }: Partial<IUser>) => {
  const user = await usersRepo.getOne({ login });
  const isValid = bcrypt.compareSync(password, user.password);

  if (!isValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign(
    { userId: user.id, login: user.login },
    JWT_SECRET_KEY!,
    { expiresIn: 60 * 60 * 24 },
  );

  return token;
};
