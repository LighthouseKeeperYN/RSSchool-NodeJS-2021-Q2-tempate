import { v1 as uuid } from 'uuid'

export interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}

export default class User implements IUser {
  public id: string
  public name: string
  public login: string
  public password: string

  constructor(options: IUser) {
    this.id = options.id || uuid();
    this.name = options.name || '';
    this.login = options.login || '';
    this.password = options.password || '';
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
