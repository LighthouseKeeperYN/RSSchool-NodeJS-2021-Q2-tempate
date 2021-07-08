import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards,
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
    try {
      const board = await this.boardService.findOne({ id });
      return res.json(Board.toResponse(board!));
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
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
    try {
      await this.boardService.update(boardId, body);
      return res.json('Board updated');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
  }

  @Delete(':id')
  async remove(
    @Res() res: Response,
    @Param('id') boardId: string,
  ) {
    try {
      await this.boardService.remove(boardId);
      return res.json('Board deleted');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
  }
}
