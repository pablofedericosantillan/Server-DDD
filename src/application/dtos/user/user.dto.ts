import { IsDateString, IsMongoId, IsOptional, IsString } from 'class-validator';

export class UserDto {
  /**
   * The ID of the user.
   * @example "65bd1d23e05e3abeb91c674e"
   */
  @IsMongoId()
  id: string;

  /**
   * The email of the user.
   * @example "100.50"
   */
  @IsString()
  email: string;

  /**
   * Password.
   * @example "100.50"
   */
  @IsString()
  pwd: string;

  /**
   * The metadata for the user.
   */
  @IsOptional()
  metadata?: Record<string, unknown>;

  /**
   * The created date of the user.
   * @example "2024-12-31T23:59:59.000Z"
   */
  @IsDateString()
  createdAt: string;

  /**
   * The updated date of the user.
   * @example "2024-12-31T23:59:59.000Z"
   */
  @IsDateString()
  updatedAt: string;

  /**
   * The deleted date of the user.
   * @example "2024-12-31T23:59:59.000Z"
   */
  @IsDateString()
  @IsOptional()
  deletedAt: string | undefined;
}
