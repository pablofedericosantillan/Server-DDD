/* eslint-disable @typescript-eslint/require-await */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerModule } from './shared';
import { ApplicationModule } from './application';
import { ConfigModule, ConfigService } from './controllers/config';
import { createMongooseOptions } from './infrastructure/mongo/mongo.config';
// Controllers Modules
import { HealthModule } from './controllers/health/health.module';
import { UserControllerModule } from './controllers/users/users.module';

@Module({
  imports: [
    LoggerModule,
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => {
        return createMongooseOptions(config.get('mongoConfig.MONGO_URI'));
      },
      inject: [ConfigService],
    }),
    ApplicationModule,
    // Controllers
    HealthModule,
    UserControllerModule,
  ],
  providers: [],
})
export class AppModule {}
