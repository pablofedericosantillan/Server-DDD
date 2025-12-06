import { CommandResult } from '../types/command_result.type';

export interface QueryHandler<Query, QueryResult> {
  handle(q: Query): Promise<QueryResult>;
}

export interface CommandHandler<Command> {
  handle(c: Command): Promise<CommandResult>;
}
