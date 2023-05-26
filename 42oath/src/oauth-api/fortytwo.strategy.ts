import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import axios from "axios";
import { Strategy } from 'passport-oauth2';
import { OauthApiService } from "./oauth-api.service";

const FORTYTWO_CLIENT_ID = 'yichoi';
const FORTYTWO_CLIENT_SECRET = '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';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(private readonly oauthApiService: OauthApiService) {
    super({
      authorizationURL: `https://api.intra.42.fr/oauth/authorize?
        client_id=${oauthApiService.getLogin()}&
        redirect_uri=${oauthApiService.getLogin()}&
        response_type=code`, // 인증
      tokenURL: 'https://api.intra.42.fr/oauth/token',
      // clientID: process.env.FORTYTWO_CLIENT_ID,
      // clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
      clientID: FORTYTWO_CLIENT_ID,
      clientSecret: FORTYTWO_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/42/callback',
    });
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    const { data } = await axios.get('https://api.intra.42.fr/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const user = {
      accessToken,
      refreshToken,
      profile: data,
    };
    console.log(user.accessToken);    
    return user;
  }
}