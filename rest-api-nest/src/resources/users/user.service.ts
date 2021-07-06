import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import bcrypt from 'bcryptjs';

import User, { IUser } from '../../entities/user.model.js';
import Task from '../../entities/task.model.js';

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Task) private taskRepository: Repository<Task>,
  ) { }

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(options: Partial<IUser>) {
    const user = await this.userRepository.findOne(options);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }

  async create({ password, ...userData }: IUser) {
    const newUser = this.userRepository.create(new User({
      ...userData,
      password: bcrypt.hashSync(password, 10),
    }));

    return this.userRepository.save(newUser);
  }

  async update(id: string, user: IUser) {
    const updateResult = await this.userRepository.update(id, user);

    if (!updateResult.affected) {
      throw new Error('User not found');
    }
  }

  async remove(id: string) {
    const deleteResult = await this.userRepository.delete(id);

    if (!deleteResult.affected) {
      throw new Error('User not found');
    }

    await this.taskRepository.update({ userId: id }, { userId: null });
  }
}
