import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ApplicationModule } from 'src/application/application_layer.module';

@Module({
  imports: [ApplicationModule],
  providers: [],
  controllers: [UsersController],
})
export class UserModule {}
