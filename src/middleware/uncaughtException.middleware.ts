import moment from 'moment';
import fs from 'fs';
import path from 'path';

export const uncaughtExceptionMiddleware = (error: Error) => {
  const logEntry = `
    [${moment().format('YYYY-MM-DD hh:mm:ss')}]
    ${error.stack}
   `;

  const uncaughtExceptionLog = fs.createWriteStream(path.join(__dirname, '../../logs/uncaughtException.log'), { flags: 'a' });

  uncaughtExceptionLog.write(logEntry);
};

export default uncaughtExceptionMiddleware;
