import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path/* , { dirname } */ from 'path';
// import { fileURLToPath } from 'url';
import User from '../entities/user.model.js';
import Board from '../entities/board.model.js';
import Task from '../entities/task.model.js';
import Column from '../entities/column.model.js';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const __dirname = path.resolve(path.dirname(''));

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const dbConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env['POSTGRES_HOST']!,
  port: +process.env['POSTGRES_PORT']!,
  username: process.env['POSTGRES_USER']!,
  password: process.env['POSTGRES_PASSWORD']!,
  database: process.env['POSTGRES_DB']!,
  synchronize: true,
  logging: false,
  entities: [User, Board, Task, Column],
};

export default dbConfig