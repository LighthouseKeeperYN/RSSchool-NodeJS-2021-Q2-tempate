import { Entity, PrimaryGeneratedColumn, Column as DbColumn } from "typeorm";
import { v1 as uuid } from 'uuid';
import { IColumn } from './column.model.js';

export interface IBoard {
  id: string,
  title: string,
  columns: IColumn[]
}

@Entity({ name: 'board' })
export default class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid') id: string
  @DbColumn('varchar') title: string
  @DbColumn('simple-array', { nullable: true }) columns: IColumn[]

  constructor({
    id = uuid(),
    title = '',
    columns = []
  }: IBoard = {} as IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(board: IBoard) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}