import { Global, Injectable, Module } from '@nestjs/common';
import {
  Logger as PinoLogger,
  LoggerModule as PinoLoggerModule,
} from 'nestjs-pino';

@Injectable()
export class Logger {
  constructor(private readonly pinoLogger: PinoLogger) {}

  log(message: string) {
    this.pinoLogger.log(message);
  }

  error(message: string, trace?: string) {
    this.pinoLogger.error({ trace }, message);
  }

  warn(message: string) {
    this.pinoLogger.warn(message);
  }

  debug(message: string) {
    this.pinoLogger.debug(message);
  }
}

@Global()
@Module({
  imports: [
    PinoLoggerModule.forRoot({
      pinoHttp: {
        level: 'info',
        redact: ['req.headers.authorization'],
        autoLogging: false,
        serializers: {
          req: () => undefined,
          res: () => undefined,
        },
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            singleLine: true,
            ignore: 'hostname,pid,req,res',
          },
        },
      },
    }),
  ],
  providers: [Logger],
  exports: [Logger],
})
export class LoggerModule {}
