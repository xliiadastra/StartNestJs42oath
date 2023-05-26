import { Test, TestingModule } from '@nestjs/testing';
import { OauthApiController } from './oauth-api.controller';

describe('OauthApiController', () => {
  let controller: OauthApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OauthApiController],
    }).compile();

    controller = module.get<OauthApiController>(OauthApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
