export type UserArgs = {
  id: string;
  email: string;
  pwd: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | undefined;
};

export class User {
  private readonly _id: string;
  private readonly _email: string;
  private readonly _pwd: string;
  private _createdAt: Date;
  private _updatedAt: Date;
  private _deletedAt: Date | undefined;

  constructor(args: UserArgs) {
    this._id = args.id;
    this._email = args.email;
    this._pwd = args.pwd;
    this._createdAt = args.createdAt;
    this._updatedAt = args.updatedAt;
    this._deletedAt = args.deletedAt;
  }

  public get id(): string {
    return this._id;
  }

  public get email(): string {
    return this._email;
  }

  public get pwd(): string {
    return this._pwd;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }
  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public get deletedAt(): Date | undefined {
    return this._deletedAt;
  }

  public static create(args: UserArgs): { user: User } {
    const user = new User(args);

    return { user };
  }
}
