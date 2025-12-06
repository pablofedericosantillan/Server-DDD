import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
// import { ApplicationModule } from 'src/application';

@Module({
  // imports: [ApplicationModule], // al aplication lo ponen aca, capaz estaria bueno colocarlo en el module
  imports: [],
  providers: [],
  controllers: [UsersController],
})
export class UserModule {}
