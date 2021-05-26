import { v1 as uuid } from 'uuid';

export interface IBoard {
  id: string,
  title: string,
  columns: string[]
}

export default class Board implements IBoard {
  id: string
  title: string
  columns: string[]

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