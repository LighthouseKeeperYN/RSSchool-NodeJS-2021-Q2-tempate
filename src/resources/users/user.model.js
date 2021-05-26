import { v1 as uuid } from 'uuid'

export default class User {
  constructor({
    id = uuid(),
    name,
    login,
    password,
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static fromRequest(user) {
    const { name, login, password, id } = user;
    return { password, name, login, id };
  }
}
