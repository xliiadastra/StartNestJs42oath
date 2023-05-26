import { Test, TestingModule } from '@nestjs/testing';
import { OauthApiService } from './oauth-api.service';

describe('OauthApiService', () => {
  let service: OauthApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OauthApiService],
    }).compile();

    service = module.get<OauthApiService>(OauthApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
