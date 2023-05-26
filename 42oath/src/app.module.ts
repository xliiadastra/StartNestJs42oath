import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OauthApiModule } from './oauth-api/oauth-api.module';

@Module({
  imports: [OauthApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
