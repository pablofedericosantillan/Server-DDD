import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  CreateUserCommand,
  CreateUserCommandHandler,
  CreateUserRequestDto,
  GetAllUserQueryResult,
  GetAllUsersQuery,
  GetAllUsersQueryHandler,
  GetAllUsersRequestDto,
} from 'src/application';
import { PaginationQuery } from 'src/shared';

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
  ): Promise<GetAllUserQueryResult> {
    const query = new GetAllUsersQuery(dto as PaginationQuery);

    return this.getAllUsersQueryHandler.handle(query);
  }
}
