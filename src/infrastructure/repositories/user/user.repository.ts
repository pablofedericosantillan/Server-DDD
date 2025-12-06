import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { IUserRepository } from 'src/application';
import { UserDocument, UserModelName } from './user.model';
import { User } from 'src/domain';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(UserModelName) private readonly model: Model<UserDocument>,
  ) {}

  private toDomainEntity(doc: UserDocument): User {
    return new User({
      id: doc._id.toString(),
      email: doc.email,
      pwd: doc.pwd,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
      deletedAt: doc.deletedAt ?? undefined,
    });
  }

  public async save(user: User): Promise<User> {
    const doc = await this.model.findOneAndReplace(
      { _id: new Types.ObjectId(user.id) },
      {
        email: user.email,
        pwd: user.pwd,
        createdAt: user.updatedAt,
        updatedAt: user.updatedAt,
        deletedAt: user.deletedAt ?? undefined,
      },
      {
        upsert: true,
        new: true,
        lean: true,
      },
    );

    return this.toDomainEntity(doc as unknown as UserDocument);
  }
}
