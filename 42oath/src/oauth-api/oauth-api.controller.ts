import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { Axios } from 'axios';
import { get } from 'http';
import { User } from './entiti/OauthApi.entity';
// import { FortyTwoStrategy } from './FortyTwo.strategy';
import { FortyTwoAuthGuard } from './FortyTwoAuthGuard';
import { OauthApiService } from './oauth-api.service';

@Controller('oauth-api')
export class OauthApiController {

    constructor(private readonly oauthApiService: OauthApiService) {}

    @Get()
    gethello(): string {
        return "Hello, Fucking World!";
    }

    @UseGuards(FortyTwoAuthGuard)
    @Get('/login')
    // @Redirect()
    async getLogin(@Req() req) {
        return 'ok!';
    }
}
