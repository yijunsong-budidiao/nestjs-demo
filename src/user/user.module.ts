import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DashModule } from '../dash/dash.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [DashModule],
})
export class UserModule {}
