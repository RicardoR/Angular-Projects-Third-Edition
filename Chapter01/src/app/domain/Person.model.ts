export class Person {
  private _id!: string;
  private _name!: string;

  setName(value: string): this {
    this._name = value;
    return this;
  }

  getName(): string {
    return this._name;
  }

  setId(value: string): this {
    this._id = value;
    return this;
  }

  getId(): string {
    return this._id;
  }
}
