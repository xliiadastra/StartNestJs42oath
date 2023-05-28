import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import axios from "axios";
import { Strategy } from 'passport-oauth2';
import { OauthApiService } from "./oauth-api.service";

const FORTYTWO_CLIENT_ID = 'u-s4t2ud-d3db08ed75998b55a00e9559e5acc91e6af3a092a1ff145ee3c8ed595449efc9';
const FORTYTWO_CLIENT_SECRET = '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';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(private readonly oauthApiService: OauthApiService) {
    console.log('accessToken2');
    super({
      authorizationURL: `https://api.intra.42.fr/oauth/authorize?
        client_id=u-s4t2ud-fa146d81878f20c946a82e7182c1f4e47f9cb34718d55a17d3680bb60bd1fba0&
        redirect_uri=http://localhost:3000/oauth-api/login&
        response_type=code`,
      tokenURL: 'https://api.intra.42.fr/oauth/token',
      // clientID: process.env.FORTYTWO_CLIENT_ID,
      // clientSecret: process.env.FORTYTWO_CLIENT_SECRET,
      clientID: FORTYTWO_CLIENT_ID,
      clientSecret: FORTYTWO_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/oauth-api/login',
    });
    console.log('accessToken3');
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    const { data } = await axios.get('https://api.intra.42.fr/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    console.log(accessToken);

    const user = {
      accessToken,
      refreshToken,
      profile: data,
    };

    console.log(user);
    return 'd';
  }
}
