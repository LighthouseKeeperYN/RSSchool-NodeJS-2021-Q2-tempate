import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Board, { IBoard } from '../../entities/board.model.js';
import Task from '../../entities/task.model.js';

@Injectable()
export default class BoardsService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) { }

  async findAll() {
    return this.boardRepository.find();
  }

  async findOne(options: Partial<IBoard>) {
    const board = await this.boardRepository.findOne(options);

    return board;
  }

  async create(boardData: IBoard) {
    const newBoard = this.boardRepository.create(new Board(boardData));

    return this.boardRepository.save(newBoard);
  }

  async update(id: string, board: IBoard) {
    const updateResult = await this.boardRepository.update(id, board);

    return !!updateResult.affected;
  }

  async remove(id: string) {
    const boardDeleteResult = await this.boardRepository.delete(id);

    if (!boardDeleteResult.affected) {
      return false;
    }

    await this.taskRepository.delete({ boardId: id });

    return true;
  }
}
