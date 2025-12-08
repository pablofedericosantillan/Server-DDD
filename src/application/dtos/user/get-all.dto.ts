import { PaginationQueryDto, PaginationResultDto } from 'src/shared';
import { UserDto } from './user.dto';

export class GetAllUsersRequestDto extends PaginationQueryDto {}

export class GetAllUsersResponseDto extends PaginationResultDto<UserDto> {}
