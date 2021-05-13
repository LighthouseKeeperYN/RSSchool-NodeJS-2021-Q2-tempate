import {v1 as uuid} from 'uuid'

export default class Column {
  constructor({
    id = uuid(),
    title,
    order,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }

  static toResponse(column) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}
