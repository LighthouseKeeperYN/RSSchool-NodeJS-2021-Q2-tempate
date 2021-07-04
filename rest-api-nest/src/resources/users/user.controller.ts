import { Controller } from '@nestjs/common';
import bcrypt from 'bcryptjs';

import User, { IUser } from '../../entities/user.model.js';
import UserService from './user.service'

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  async findAll() {
    return this.userService.findAll();
  }

  async findOne(options: Partial<IUser>) {
    const user = this.userService.findOne(options);

    if (!user) {
      throw new Error('User not found');
    }

    return user
  }

  async create({ password, ...userData }: IUser) {
    const newUser = await this.userService.create(new User({
      ...userData,
      password: bcrypt.hashSync(password, 10),
    }));

    return newUser;
  };

  async update(userId: string, body: IUser) {
    const updateRes = await this.userService.update(userId, User.fromRequest(body));

    if (!updateRes.affected) {
      throw new Error('User not found');
    }

    return body
  }

  async remove(userId: string) {
    const foundUser = await this.findOne({ id: userId });

    if (!foundUser) {
      throw new Error('User not found');
    }

    // await tasksRepo.unassignAll(userId);
    await this.userService.remove(userId);

    return foundUser;
  };
}
