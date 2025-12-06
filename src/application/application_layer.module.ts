import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModelName, UserRepository, UserSchema } from 'src/infrastructure';
import { CreateUserCommandHandler } from './commands';
import { USER_REPOSITORY_TOKEN } from './interfaces';
import { GetAllUsersQueryHandler } from './queries';

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModelName, schema: UserSchema }]),
  ],
  controllers: [],
  providers: [
    { provide: USER_REPOSITORY_TOKEN, useClass: UserRepository },
    CreateUserCommandHandler,
    GetAllUsersQueryHandler,
  ],
  exports: [CreateUserCommandHandler, GetAllUsersQueryHandler],
})
export class ApplicationModule {}
