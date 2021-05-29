import { v1 as uuid } from 'uuid';
import { IColumn } from './../columns/column.model';

export interface IBoard {
  id: string,
  title: string,
  columns: IColumn[]
}

export default class Board implements IBoard {
  id: string
  title: string
  columns: IColumn[]

  constructor(options: IBoard) {
    this.id = options.id || uuid();
    this.title = options.title || '';
    this.columns = options.columns || [];
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