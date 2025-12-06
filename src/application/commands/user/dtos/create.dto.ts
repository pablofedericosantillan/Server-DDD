import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserRequestDto {
  /**
   * The individual email
   * @example "email@email.com"
   */
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  pwd: string;
}
