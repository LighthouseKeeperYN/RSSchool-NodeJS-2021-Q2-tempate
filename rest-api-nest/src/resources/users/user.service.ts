// import bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// import * as usersRepo from './user.memory.repository.js';
// import * as tasksRepo from '../tasks/task.memory.repository.js';
import User, { IUser } from '../../entities/user.model.js';


// export const getAll = async () => usersRepo.getAll();
// export const getOne = async (options: Partial<IUser>) => usersRepo.getOne(options);
// export const create = async ({ password, ...userData }: IUser) => {
//   const newUser = await usersRepo.create(new User({
//     ...userData,
//     password: bcrypt.hashSync(password, 10),
//   }));

//   return newUser;
// };
// export const update = async (userId: string, body: IUser) => usersRepo.update(userId, User.fromRequest(body));
// export const remove = async (userId: string) => {
//   await tasksRepo.unassignAll(userId);
//   return usersRepo.remove(userId);
// };

@Injectable()
export default class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }

  async findOne(options: Partial<IUser>) {
    return this.userRepository.findOne(options);
  }

  async create(user: IUser) {
    const newUser = this.userRepository.create(user);

    return this.userRepository.save(newUser);
  }

  async update(id: string, user: IUser) {
    const updateRes = await this.userRepository.update(id, user);

    return updateRes;
  }

  async remove(id: string) {
    await this.userRepository.delete(id);
  }
}