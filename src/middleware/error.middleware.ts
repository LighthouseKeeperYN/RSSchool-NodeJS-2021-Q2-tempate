import type { ErrorRequestHandler } from 'express';
import { handleError, logError } from '../helpers/error.helper.js';

const errorHandlerMiddleware: ErrorRequestHandler = (err, _, res, next) => {
  handleError(err, res);
  logError(err);
  console.error(err.stack);
};

export default errorHandlerMiddleware;
