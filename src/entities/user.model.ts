import { Entity, PrimaryGeneratedColumn, Column as DbColumn } from "typeorm";
import { v1 as uuid } from 'uuid'

export interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}

@Entity('users')
export default class User implements IUser {
  @PrimaryGeneratedColumn('uuid') public id: string
  @DbColumn() public name: string
  @DbColumn() public login: string
  @DbColumn() public password: string

  constructor({
    id = uuid(),
    name = '',
    login = '',
    password = '',
  }: IUser = {} as IUser) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(user: IUser) {
    const { name, login, password, id } = user;
    return { password, name, login, id };
  }
}
