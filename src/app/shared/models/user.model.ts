export class User {
  constructor(
    public password?: string,
    public email?: string,
    public name?: string,
    public id?: number,
    public avatar?: string,
    public type?: string
  ) {}
}
