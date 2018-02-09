import {Middleware} from '@/middleware/Middleware';

export class TokenInterceptor extends Middleware {

  static handleBearer (api, token) {

    let headerValue = 'Bearer ' + token;

    return super.interceptPostHeader(api, 'Authorization', headerValue);

  }

}
