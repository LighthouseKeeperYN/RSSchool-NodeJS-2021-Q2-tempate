import { v1 as uuid } from 'uuid';

export default class Board {
  constructor({
    id = uuid(),
    title,
    column,
  } = {}) {
    this.id = id;
    this.title = title;
    this.column = column;
  }

  static toResponse(board) {
    const { id, title, column } = board;
    return { id, title, column };
  }
}