import moment from 'moment';
import fs from 'fs';
import path from 'path';

export const unhandledRejectionMiddleware = (error: Error) => {
  const logEntry = `
    [${moment().format('YYYY-MM-DD hh:mm:ss')}]
    ${error.stack}
   `;

  const unhandledRejectionLog = fs.createWriteStream(path.join(__dirname, '../../logs/unhandledRejection.log'), { flags: 'a' });

  unhandledRejectionLog.write(logEntry);
};

export default unhandledRejectionMiddleware;
