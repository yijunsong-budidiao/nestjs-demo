import { Test, TestingModule } from '@nestjs/testing';
import { DashGateway } from './dash.gateway';
import { DashService } from './dash.service';

describe('DashGateway', () => {
  let gateway: DashGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DashGateway, DashService],
    }).compile();

    gateway = module.get<DashGateway>(DashGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
