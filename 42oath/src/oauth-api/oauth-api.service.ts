import { Injectable } from '@nestjs/common';
import { User } from './entiti/OauthApi.entity';

@Injectable()
export class OauthApiService {
    private users: User[] = [];
    
    getLogin(): User[] {
        return this.users;
    }
}
