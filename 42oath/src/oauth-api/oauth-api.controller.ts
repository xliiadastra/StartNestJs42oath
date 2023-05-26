import { Controller, Get } from '@nestjs/common';
import { Axios } from 'axios';
import { User } from './entiti/OauthApi.entity';
import { OauthApiService } from './oauth-api.service';

@Controller('oauth-api')
export class OauthApiController {

    constructor(private readonly oauthApiService: OauthApiService) {}

    @Get()
    gethello(): string {
        return "Hello, Fucking World!";
    }

    @Get('/login')
    getLogin(): User[] {
        return this.oauthApiService.getLogin();
    }

    @Axios('/login')
    axiosLogin(): User[] {
        return this.oauthApiService.axiosLogin();
    }
}
