import moment from 'moment';
import fs from 'fs';
import path/* , { dirname } */ from 'path';
// import { fileURLToPath } from 'url';
import type { RequestHandler } from 'express';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const __dirname = path.resolve(path.dirname(''));

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
