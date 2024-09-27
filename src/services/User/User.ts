import Types from '../../utils/types';

export default class User {
  private _email: string;
  private _name: string;
  private _role: Types;

  constructor(email: string, name: string, role: Types) {
    this._email = email;
    this._name = name;
    this._role = role;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get role(): Types {
    return this._role;
  }

  toObject(): object {
    return {
      email: this._email,
      name: this._name,
      role: this._role
    }
  }

  toString(): string {
    return JSON.stringify(this.toObject());
  }
}