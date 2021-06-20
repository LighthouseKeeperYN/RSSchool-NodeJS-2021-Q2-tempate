import { Entity, PrimaryGeneratedColumn, Column as DbColumn } from "typeorm";
import { v1 as uuid } from 'uuid'

export interface IColumn {
  id: string,
  title: string,
  order: number,
}

@Entity({ name: 'column' })
export default class Column implements IColumn {
  @PrimaryGeneratedColumn('uuid') public id: string
  @DbColumn('varchar') public title: string
  @DbColumn('integer') public order: number

  constructor({
    id = uuid(),
    title = '',
    order = 0
  }: IColumn = {} as IColumn) {
    this.id = id
    this.title = title
    this.order = order
  }

  static toResponse(column: IColumn) {
    const { id, title, order } = column;
    return { id, title, order };
  }

  static fromRequest(column: IColumn) {
    const { id, title, order } = column;
    return { id, title, order };
  }
}
