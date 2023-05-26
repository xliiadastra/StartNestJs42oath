import { Controller, Get, UseGuards } from '@nestjs/common';
import { Axios } from 'axios';
import { User } from './entiti/OauthApi.entity';
import { FortyTwoStrategy } from './fortytwo.strategy';
import { OauthApiService } from './oauth-api.service';

@Controller('oauth-api')
export class OauthApiController {

    constructor(private readonly oauthApiService: OauthApiService) {}

    @Get()
    gethello(): string {
        return "Hello, Fucking World!";
    }

    @UseGuards(FortyTwoStrategy)
    @Get('/login')
    getLogin(): User[] {
        return this.oauthApiService.getLogin();
    }
}
