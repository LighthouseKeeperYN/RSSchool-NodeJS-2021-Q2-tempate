import { Entity, PrimaryGeneratedColumn, Column as DbColumn } from "typeorm";
import { v1 as uuid } from 'uuid';

export interface IBoard {
  id?: string,
  title: string,
  columns: string
}

@Entity({ name: 'boards' })
export default class Board implements IBoard {
  @PrimaryGeneratedColumn('uuid') id: string
  @DbColumn() title: string
  @DbColumn('json', { nullable: true }) columns: string

  constructor({
    id = uuid(),
    title = '',
    columns
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