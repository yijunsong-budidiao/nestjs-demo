import { Module } from '@nestjs/common';
import { DashService } from './dash.service';
import { DashGateway } from './dash.gateway';

@Module({
  providers: [DashGateway, DashService],
  exports: [DashGateway, DashService],
})
export class DashModule {}
