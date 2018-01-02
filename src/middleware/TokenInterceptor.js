import {Middleware} from '@/middleware/Middleware';

export class TokenInterceptor extends Middleware {

  static handleBearer (api, token) {

    let headerValue = 'Bearer ' + token;

    return super.interceptHeader(api, 'Authorization', headerValue);

  }

}
