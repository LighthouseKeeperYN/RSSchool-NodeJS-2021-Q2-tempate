import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import BoardService from './board.service';
import BoardsController from './board.controller';
import Board from '../../entities/board.model.js';
import Task from '../../entities/task.model.js';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Task])],
  providers: [BoardService],
  controllers: [BoardsController],
})
export default class BoardsModule { }
