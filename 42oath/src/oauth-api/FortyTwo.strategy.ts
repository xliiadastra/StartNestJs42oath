import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import axios from "axios";
import { Strategy } from 'passport-oauth2';
import { Repository } from "typeorm";
import { User } from "./entiti/user.entity";

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    ) {
    super({
      authorizationURL: `https://api.intra.42.fr/oauth/authorize?
        client_id=${configService.get<string>('CLIENT_ID')}&
        redirect_uri=${configService.get<string>('CALLBACK_URL')}&
        response_type=code`,
      tokenURL: 'https://api.intra.42.fr/oauth/token',
      clientID: configService.get<string>('CLIENT_ID'),
      clientSecret: configService.get<string>('CLIENT_SECRET'),
      callbackURL: configService.get<string>('CALLBACK_URL'),
    });
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    const { data } = await axios.get('https://api.intra.42.fr/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    
    const user = this.userRepository.create({
      nickname: data.login,
      email: data.email,
      avatar: data.image.link,
      win: 0,
      lose: 0,
      level: 0,
      user_status: 0,
    });

    await this.userRepository.save(user);

    console.log(user);

    return user;
  }
}
