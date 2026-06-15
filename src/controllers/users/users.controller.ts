import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  CreateUserCommand,
  CreateUserCommandHandler,
  CreateUserRequestDto,
  GetAllUsersQuery,
  GetAllUsersQueryHandler,
  GetAllUsersRequestDto,
  GetAllUsersResponseDto,
} from 'src/application';
import { PaginationQuery } from 'src/shared';
import { UserSerializer } from './user.serializer';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,
    private readonly getAllUsersQueryHandler: GetAllUsersQueryHandler,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create new users',
  })
  async create(@Body() payload: CreateUserRequestDto): Promise<{ id: string }> {
    const command = new CreateUserCommand(payload);

    return this.createUserCommandHandler.handle(command);
  }

  @Get()
  @ApiOperation({
    summary: 'Get users',
  })
  async getAll(
    @Query() dto: GetAllUsersRequestDto,
  ): Promise<GetAllUsersResponseDto> {
    const query = new GetAllUsersQuery(dto as PaginationQuery);

    const result = await this.getAllUsersQueryHandler.handle(query);

    return {
      entries: result.entries.map((f) => UserSerializer.toDto(f)),
      limit: result.limit,
      offset: result.offset,
      totalCount: result.totalCount,
    };
  }
}
