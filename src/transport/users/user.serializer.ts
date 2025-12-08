import { User } from 'src/domain';
import { UserDto } from 'src/application';

/**
 * Anti-Corruption Layer Serializer
 * Transforms domain entities to DTOs for the transport layer
 */
export class UserSerializer {
  /**
   * Serializes a user domain entity to a UserDto
   */
  public static toDto(user: User): UserDto {
    return {
      id: user.id,
      email: user.email,
      pwd: user.pwd,
      createdAt: user.createdAt.toISOString(),
      updatedAt: user.updatedAt.toISOString(),
      deletedAt: user.deletedAt?.toISOString(),
    };
  }
}
