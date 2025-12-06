import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { EnvConfig } from './config.dto';
import { ConfigService } from './config.service';

const validate = (config: typeof process.env) => {
  process.env = { ...process.env, ...config };

  const loadedConfig = new EnvConfig();

  const validatedConfig = plainToInstance(EnvConfig, loadedConfig, {
    enableImplicitConversion: true,
  });

  if (`${process.env.SKIP_VALIDATION ?? ''}` === 'true') {
    return validatedConfig;
  }

  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) throw new Error(errors.toString());

  return validatedConfig;
};

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      envFilePath: ['.env', `.env.${process.env.NODE_ENV}`],
      validate,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
