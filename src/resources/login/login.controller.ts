import {
  Controller, Res, Body, HttpStatus, Post,
} from '@nestjs/common';
import { Response } from 'express';
import LoginService from './login.service';

import { IUser } from '../../entities/user.model.js';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
  ) { }

  @Post()
  async login(
    @Res() res: Response,
    @Body() body: Partial<IUser>,
  ) {
    try {
      const token = await this.loginService.authenticateUser(body);

      return res.json({ token });
    } catch (e) {
      return res.status(HttpStatus.FORBIDDEN).json(e.message);
    }
  }
}
