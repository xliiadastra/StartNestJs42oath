import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import axios from 'axios';
import { User } from './entiti/OauthApi.entity';
import { FortyTwoStrategy } from './FortyTwo.strategy';

@Injectable()
export class OauthApiService {
//    private users: User[] = [];

    getLogin() {        
        return 'ok';
    }
}
