import type { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

import { PRIVATE_ROUTES, JWT_SECRET_KEY } from '../common/config';

export const authMiddleware: RequestHandler = (req, res, next) => {
  const isPublicRoute = !PRIVATE_ROUTES.some((path) => req.path.startsWith(path));
  if (isPublicRoute) {
    return next();
  }

  const authHeader = req.headers['authorization'];
  const token = authHeader?.replace('Bearer ', '');
  let isValidToken = false;

  try {
    isValidToken = !!token && !!jwt.verify(token, JWT_SECRET_KEY!);
  } catch (error) {
    console.error('403');
  }

  if (!isValidToken) {
    return res.status(401).send('Unauthorized');
  }

  return next();
};

export default authMiddleware;
