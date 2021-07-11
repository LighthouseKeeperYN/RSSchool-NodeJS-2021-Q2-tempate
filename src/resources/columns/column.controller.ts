import {
  Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseGuards,
} from '@nestjs/common';
import { Response } from 'express';

import Column, { IColumn } from '../../entities/column.model.js';
import ColumnService from './column.service';
import AuthGuard from '../../guards/auth.guard';

@Controller('columns')
@UseGuards(new AuthGuard())
export default class ColumnController {
  constructor(
    private readonly columnService: ColumnService,
  ) { }

  @Get()
  async findAll() {
    return this.columnService.findAll();
  }

  @Get(':id')
  async findOne(
    @Res() res: Response,
    @Param('id') id: string,
  ) {
    try {
      const column = await this.columnService.findOne({ id });
      return res.json(Column.toResponse(column!));
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
  }

  @Post()
  async create(@Body() columnData: IColumn) {
    const newColumn = await this.columnService.create(columnData);
    return newColumn;
  }

  @Put(':id')
  async update(
    @Res() res: Response,
    @Param('id') columnId: string,
    @Body() body: IColumn,
  ) {
    try {
      await this.columnService.update(columnId, body);
      return res.json('Column updated');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
  }

  @Delete(':id')
  async remove(
    @Res() res: Response,
    @Param('id') columnId: string,
  ) {
    try {
      await this.columnService.remove(columnId);
      return res.json('Column deleted');
    } catch (e) {
      return res.status(HttpStatus.NOT_FOUND).json(e.message);
    }
  }
}
