import { Global, Module } from '@nestjs/common';
import { Logger as PinoLogger } from 'nestjs-pino';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Logger extends PinoLogger {}

@Global()
@Module({
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
