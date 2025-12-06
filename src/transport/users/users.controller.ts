import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import {
  CreateUserCommand,
  CreateUserCommandHandler,
  CreateUserRequestDto,
} from 'src/application';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserCommandHandler: CreateUserCommandHandler,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create new users',
  })
  async create(@Body() payload: CreateUserRequestDto): Promise<{ id: string }> {
    const command = new CreateUserCommand(payload);

    return this.createUserCommandHandler.handle(command);
  }

  // @Get()
  // @ApiOperation({
  //   summary: 'Get users',
  // })
  // async getAll(
  //   @Query() dto: Dtos.GetAllUsersRequest,
  // ): Promise<Dtos.GetAllUsersResponse> {
  //   return this.userGetService.getAll(dto);
  // }
}
