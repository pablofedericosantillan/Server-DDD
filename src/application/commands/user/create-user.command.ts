/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Inject } from '@nestjs/common';
import { Types } from 'mongoose';
import {
  IUserRepository,
  CommandHandler,
  USER_REPOSITORY_TOKEN,
} from 'src/application/interfaces';
import { User } from 'src/domain';
import { CommandResult } from 'src/domain/types/command_result.type';

export class CreateUserCommand {
  constructor(
    public readonly data: {
      email: string;
      pwd: string;
    },
  ) {}
}

export class CreateUserCommandHandler
  implements CommandHandler<CreateUserCommand>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    // @ts-ignore
    private readonly userRepository: IUserRepository,
  ) {}

  public async handle(cmd: CreateUserCommand): Promise<CommandResult> {
    const {
      data: { email, pwd },
    } = cmd;

    const now = new Date();

    const { user } = User.create({
      id: new Types.ObjectId().toString(),
      email,
      pwd,
      createdAt: now,
      updatedAt: now,
      deletedAt: undefined,
    });

    const newUser = await this.userRepository.save(user);

    return { id: newUser.id };
  }
}
