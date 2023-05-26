import { Module } from '@nestjs/common';
import { OauthApiService } from './oauth-api.service';
import { OauthApiController } from './oauth-api.controller';

@Module({
  providers: [OauthApiService],
  controllers: [OauthApiController]
})
export class OauthApiModule {}
