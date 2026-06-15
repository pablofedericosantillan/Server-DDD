import { Type } from 'class-transformer';
import { IsEnum, IsInt, ValidateNested } from 'class-validator';
import { CorsConfig } from './cors/cors.config';
import { MongoConfig } from 'src/infrastructure/mongo/mongo-env.config';

export enum NodeEnv {
  DEVELOP = 'develop',
}

export class EnvConfig {
  appName = 'Proyect test';

  @IsEnum(NodeEnv)
  env: NodeEnv = (process.env.NODE_ENV as NodeEnv) ?? NodeEnv.DEVELOP;

  @Type(() => Number)
  @IsInt()
  port = process.env.PORT || 8000;

  @Type()
  @ValidateNested()
  cors: CorsConfig = new CorsConfig();

  @Type(() => MongoConfig)
  @ValidateNested()
  mongoConfig = new MongoConfig();
}
