import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { IUserRepository } from 'src/application';
import { UserDocument, UserModelName } from './user.model';
import { User } from 'src/domain';
import { PaginationQuery } from 'src/shared';

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

  public async getAll(
    filters: PaginationQuery,
  ): Promise<{ items: Array<User>; totalCount: number | undefined }> {
    const match: FilterQuery<UserDocument> = {
      deletedAt: undefined,
    };

    const docs = await this.model // check this
      .aggregate<UserDocument>([
        { $match: match },
        { $sort: { 'created.at': -1 } },
        { $skip: filters.offset },
        { $limit: filters.limit },
      ])
      .exec();

    let totalCount: number | undefined = undefined;

    if (filters.count) {
      const countResult = await this.model
        .aggregate<{ // check this
          count: number;
        }>([{ $match: match }, { $count: 'count' }])
        .exec();

      totalCount =
        countResult.length > 0 && countResult[0]?.count
          ? countResult[0].count
          : 0;
    }

    return {
      items: docs.map((doc) => this.toDomainEntity(doc)),
      totalCount,
    };
  }
}
