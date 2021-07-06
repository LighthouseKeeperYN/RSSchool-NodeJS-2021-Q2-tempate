import moment from 'moment';
import fs from 'fs';
import path from 'path';
import type { RequestHandler } from 'express';

export const loggerMiddleware: RequestHandler = (req, res, next) => {
  const logEntry = `
    [${moment().format('YYYY-MM-DD hh:mm:ss')}]
    path: ${req.originalUrl}
    body: ${JSON.stringify(req.body)}
    resStatus: ${res.statusCode}
   `;

  const requestLog = fs.createWriteStream(path.join(__dirname, '../../logs/request.log'), { flags: 'a' });

  requestLog.write(logEntry);

  next();
};

export default loggerMiddleware;
