/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigModule, AppConfigService } from './shared';
import { createMongooseOptions } from '../src_DDD/transport/config/mongo/mongoose-config';
// Controllers Modules
import { HealthModule } from '../src/transport/health/health.module';
import { UserModule } from '../src/transport/users/users.module';

@Module({
  imports: [
    AppConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      useFactory: async (config: AppConfigService) => {
        return createMongooseOptions(config.getConfig().MONGO_URI);
      },
      inject: [AppConfigService],
    }),
    // Controllers
    HealthModule,
    UserModule,
  ],
  providers: [],
})
export class AppModule {}
