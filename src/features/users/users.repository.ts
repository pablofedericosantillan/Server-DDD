import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseRepository } from 'src_DDD/infrastructure/mongo/repository/model.repository';
import { User } from './models/user.model';

@Injectable()
export class UsersRepository extends BaseRepository<User> {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {
    super(userModel);
  }
}
