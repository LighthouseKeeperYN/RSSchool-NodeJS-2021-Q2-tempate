import { Entity, PrimaryGeneratedColumn, Column as DbColumn } from "typeorm";
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

@Entity({ name: 'tasks' })
export default class Task implements ITask {
  @PrimaryGeneratedColumn('uuid') public id: string
  @DbColumn() public title: string
  @DbColumn('integer') public order: number
  @DbColumn() public description: string
  @DbColumn('uuid') public boardId: string
  @DbColumn('varchar', { nullable: true }) public userId?: string | null
  @DbColumn('varchar', { nullable: true }) public columnId?: string

  constructor({
    id = uuid(),
    title = '',
    order = 0,
    description = '',
    userId = '',
    boardId = '',
    columnId = '',
  }: ITask = {} as ITask) {
    this.id = id
    this.title = title
    this.order = order
    this.description = description
    this.userId = userId
    this.boardId = boardId
    this.columnId = columnId
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
