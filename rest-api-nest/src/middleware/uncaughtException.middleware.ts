import moment from 'moment';
import fs from 'fs';
import path/* , { dirname } */ from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const __dirname = path.resolve(path.dirname(''));

export const uncaughtExceptionMiddleware = (error: Error) => {
  const logEntry = `
    [${moment().format('YYYY-MM-DD hh:mm:ss')}]
    ${error.stack}
   `;

  const uncaughtExceptionLog = fs.createWriteStream(path.join(__dirname, '../../logs/uncaughtException.log'), { flags: 'a' });

  uncaughtExceptionLog.write(logEntry);
};

export default uncaughtExceptionMiddleware;
