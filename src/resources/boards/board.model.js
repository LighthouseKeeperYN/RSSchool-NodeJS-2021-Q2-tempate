import { v1 as uuid } from 'uuid';

export default class Board {
  constructor({
    id = uuid(),
    title,
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }

  static fromRequest(board) {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}