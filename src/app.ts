import express from 'express';
import swaggerUI from 'swagger-ui-express';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';
import YAML from 'yamljs';

import boardRouter from './resources/boards/board.router.js';
import taskRouter from './resources/tasks/task.router.js';
import userRouter from './resources/users/user.router.js';

import uncaughtExceptionMiddleware from './middleware/uncaughtException.middleware.js'
import unhandledRejectionMiddleware from './middleware/unhandledRejection.middleware.js'
import errorMiddleware from './middleware/error.middleware.js'
import requestMiddleware from './middleware/request.middleware.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());
app.use(errorMiddleware)
app.use(requestMiddleware)

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/boards', boardRouter);
app.use('/boards/:boardId/tasks', taskRouter);
app.use('/users', userRouter);


process.on('uncaughtException', uncaughtExceptionMiddleware);
process.on('unhandledRejection', unhandledRejectionMiddleware);
Promise.reject(Error('Oops!'));
export default app;
