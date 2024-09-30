import Types from '../../utils/types';

export default class User {
  private _email: string;
  private _name: string;
  private _profile: Types;

  constructor(email: string, name: string, profile: Types) {
    this._email = email;
    this._name = name;
    this._profile = profile;
  }

  get email(): string {
    return this._email;
  }

  get name(): string {
    return this._name;
  }

  get profile(): Types {
    return this._profile;
  }

  toObject(): object {
    return {
      email: this._email,
      name: this._name,
      profile: this._profile
    }
  }

  toString(): string {
    return JSON.stringify(this.toObject());
  }
}