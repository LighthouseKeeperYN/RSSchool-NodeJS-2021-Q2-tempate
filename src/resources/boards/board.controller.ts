import {
  Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res, UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import Board, { IBoard } from '../../entities/board.model.js';
import BoardService from './board.service';
import AuthGuard from '../../guards/auth.guard';

@Controller('boards')
@UseGuards(new AuthGuard())
export default class BoardController {
  constructor(
    private readonly boardService: BoardService,
  ) { }

  @Get()
  async findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  async findOne(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    const board = await this.boardService.findOne({ id });

    if (!board) {
      throw new NotFoundException('Board not found');
    }

    return res.json(Board.toResponse(board!));
  }

  @Post()
  async create(@Body() boardData: IBoard) {
    const newBoard = await this.boardService.create(boardData);
    return newBoard;
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id') boardId: string,
    @Body() body: IBoard,
  ) {
    const isUpdated = await this.boardService.update(boardId, body);

    if (!isUpdated) {
      throw new NotFoundException('Board not found');
    }

    return res.json('Board updated');
  }

  @Delete(':id')
  async remove(
    @Res() res: Response,
    @Param('id') boardId: string,
  ) {
    const isDeleted = await this.boardService.remove(boardId);

    if (!isDeleted) {
      throw new NotFoundException('Board not found');
    }

    return res.json('Board updated');
  }
}
