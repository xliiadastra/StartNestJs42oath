import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { User } from './entiti/OauthApi.entity';

@Injectable()
export class OauthApiService {
    private users: User[] = [];

    getLogin(): User[] {
        axios.
        return this.users;
    }
}
