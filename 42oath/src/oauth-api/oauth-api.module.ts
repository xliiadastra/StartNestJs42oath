import { Module } from '@nestjs/common';
import { OauthApiService } from './oauth-api.service';
import { OauthApiController } from './oauth-api.controller';
import { FortyTwoStrategy } from './fortytwo.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: '42'}),
  ],
  providers: [
    OauthApiService,
    FortyTwoStrategy,
  ],
  controllers: [OauthApiController]
})
export class OauthApiModule {}
