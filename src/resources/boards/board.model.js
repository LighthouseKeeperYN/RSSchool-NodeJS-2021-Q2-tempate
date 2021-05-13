const uuid = require('uuid');

class Board {
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

module.exports = Board;
