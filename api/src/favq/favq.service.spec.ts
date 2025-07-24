import { Test, TestingModule } from '@nestjs/testing';
import { FavqService } from './favq.service';

describe('FavqService', () => {
  let service: FavqService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavqService],
    }).compile();

    service = module.get<FavqService>(FavqService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
