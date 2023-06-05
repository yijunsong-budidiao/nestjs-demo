import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashGateway } from './dash/dash.gateway';
import { DashModule } from './dash/dash.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DashModule, UserModule],
  controllers: [AppController],
  providers: [AppService, DashGateway],
})
export class AppModule {}
