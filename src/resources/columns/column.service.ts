import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import Column, { IColumn } from '../../entities/column.model.js';

@Injectable()
export default class ColumnsService {
  constructor(
    @InjectRepository(Column)
    private columnRepository: Repository<Column>,
  ) { }

  async findAll() {
    return this.columnRepository.find();
  }

  async findOne(options: Partial<IColumn>) {
    const column = await this.columnRepository.findOne(options);

    if (!column) {
      throw new Error('Column not found');
    }

    return column;
  }

  async create(columnData: IColumn) {
    const newColumn = this.columnRepository.create(new Column(columnData));

    return this.columnRepository.save(newColumn);
  }

  async update(id: string, columnData: IColumn) {
    const updateResult = await this.columnRepository.update(id, columnData);

    if (!updateResult.affected) {
      throw new Error('Column not found');
    }
  }

  async remove(id: string) {
    const deleteResult = await this.columnRepository.delete(id);

    if (!deleteResult.affected) {
      throw new Error('Column not found');
    }
  }
}