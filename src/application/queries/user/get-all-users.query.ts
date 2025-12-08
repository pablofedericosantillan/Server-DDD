/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Inject, Injectable } from '@nestjs/common';
import { PaginationQuery, PaginationResult } from 'src/shared';
import {
  IUserRepository,
  QueryHandler,
  USER_REPOSITORY_TOKEN,
} from 'src/application/interfaces';
import { User } from 'src/domain';

export class GetAllUsersQuery {
  constructor(public readonly pagination: PaginationQuery) {}
}

export type GetAllUserQueryResult = PaginationResult<User>;

@Injectable()
export class GetAllUsersQueryHandler
  implements QueryHandler<GetAllUsersQuery, GetAllUserQueryResult>
{
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    // @ts-ignore
    private readonly userRepository: IUserRepository,
  ) {}

  public async handle(q: GetAllUsersQuery): Promise<GetAllUserQueryResult> {
    const users = await this.userRepository.getAll(q.pagination);

    const result: GetAllUserQueryResult = {
      entries: users.items,
      limit: q.pagination.limit,
      offset: q.pagination.offset,
      totalCount: users.totalCount,
    };

    return result;
  }
}
