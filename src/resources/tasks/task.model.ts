import { v1 as uuid } from 'uuid'

export interface ITask {
  id: string,
  title: string,
  order: number,
  description: string,
  userId?: string | null,
  boardId: string,
  columnId?: string,
}

export default class Task implements ITask {
  public id: string
  public title: string
  public order: number
  public description: string
  public userId?: string | null
  public boardId: string
  public columnId?: string

  constructor(options: ITask) {
    this.id = options.id || uuid()
    this.title = options.title || ''
    this.order = options.order || 0
    this.description = options.description || ''
    this.userId = options.userId
    this.boardId = options.boardId || ''
    this.columnId = options.columnId
  }

  static toResponse(task: ITask) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }

  static fromRequest(task: ITask) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}
