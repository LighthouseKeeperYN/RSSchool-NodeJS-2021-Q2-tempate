import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../../common/config';
import User, { IUser } from '../../entities/user.model.js';

@Injectable()
export default class LoginService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }

  async authenticateUser({ login, password = '' }: Partial<IUser>) {
    const user = await this.userRepository.findOne({ login });
    const isValid = bcrypt.compareSync(password, user?.password || '');

    if (!user || !isValid) {
      return false;
    }

    const token = jwt.sign(
      { userId: user.id, login: user.login },
      JWT_SECRET_KEY!,
      { expiresIn: 60 * 60 * 24 },
    );

    return token;
  }
}
