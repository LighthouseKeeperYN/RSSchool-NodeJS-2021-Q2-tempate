import moment from 'moment';
import fs from 'fs';
import { Response } from 'express';
import path/* , { dirname }  */from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const __dirname = path.resolve(path.dirname(''));

export class ErrorHandler extends Error {
  statusCode: number

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const handleError = (err: ErrorHandler, res: Response) => {
  const { statusCode, message } = err;

  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message,
  });
};

export const logError = (err: ErrorHandler) => {
  const { statusCode, message } = err;

  const logEntry = `[${moment().format('YYYY-MM-DD hh:mm:ss')}]: ${statusCode} ${message}\n`;
  const errorLog = fs.createWriteStream(path.join(__dirname, '../../logs/error.log'), { flags: 'a' });

  errorLog.write(logEntry);
};
