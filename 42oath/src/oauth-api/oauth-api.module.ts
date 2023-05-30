import { Module } from '@nestjs/common';
import { OauthApiService } from './oauth-api.service';
import { OauthApiController } from './oauth-api.controller';
import { PassportModule } from '@nestjs/passport';
import { FortyTwoStrategy } from './FortyTwo.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule.register({defaultStrategy: '42'}),
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 3000,
    //   username: 'test1',
    //   password: 'test11',
    //   database: 'test111',
    //   entities: [],
    //   synchronize: true,
    // }),
    // ConfigModule,
  ],
  providers: [
    OauthApiService,
    FortyTwoStrategy,
    ConfigService,
  ],
  controllers: [OauthApiController]
})
export class OauthApiModule {}
