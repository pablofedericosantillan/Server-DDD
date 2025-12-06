import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { MongoConfig } from './mongo';

export class EnvConfig {
  @Type(() => MongoConfig)
  @ValidateNested()
  mongoConfig = new MongoConfig();
}
