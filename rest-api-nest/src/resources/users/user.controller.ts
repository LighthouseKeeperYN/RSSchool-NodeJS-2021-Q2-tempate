import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res,
} from '@nestjs/common';
import { Response } from 'express';

import User, { IUser } from '../../entities/user.model.js';
import UserService from './user.service';

@Controller('users')
export default class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const user = await this.userService.findOne({ id });
      return res.json(User.toResponse(user!));
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }

  @Post()
  async create(@Body() userData: IUser) {
    const newUser = await this.userService.create(userData);
    return newUser;
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id') userId: string,
    @Body() body: IUser,
  ) {
    try {
      await this.userService.update(userId, body);
      return res.send('User updated');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }

  @Delete(':id')
  async remove(
    @Res() res: Response,
    @Param('id') userId: string,
  ) {
    try {
      await this.userService.remove(userId);
      return res.send('User deleted');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).send(e.message);
    }
  }
}
