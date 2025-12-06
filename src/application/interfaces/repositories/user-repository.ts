import { User } from 'src/domain';

/**
 * Dependency injection token for the User Repository.
 * Used to register and inject the user repository implementation.
 */
export const USER_REPOSITORY_TOKEN = 'USER_REPOSITORY_TOKEN';

/**
 * Interface for fee-related data operations.
 * Provides methods to persist and retrieve fee entities from the data store.
 */
export interface IUserRepository {
  /**
   * Saves a user entity to the data store.
   *
   */
  save(user: User): Promise<User>;
}
