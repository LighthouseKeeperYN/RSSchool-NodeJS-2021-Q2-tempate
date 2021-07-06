import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import ColumnService from './column.service';
import ColumnsController from './column.controller';
import Column from '../../entities/column.model.js';

@Module({
  imports: [TypeOrmModule.forFeature([Column])],
  providers: [ColumnService],
  controllers: [ColumnsController],
})
export default class ColumnsModule { }
