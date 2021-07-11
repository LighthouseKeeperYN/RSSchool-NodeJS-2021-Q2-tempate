import {
  Injectable, CanActivate, ExecutionContext, UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import jwt from 'jsonwebtoken';

import { JWT_SECRET_KEY } from '../common/config';

@Injectable()
export default class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];
    const token = authHeader?.replace('Bearer ', '');
    let isValidToken = false;

    try {
      isValidToken = !!token && !!jwt.verify(token, JWT_SECRET_KEY!);
    } catch (error) {
      console.error('403');
    }

    if (!isValidToken) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
