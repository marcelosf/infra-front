import {Jwt} from './Jwt/Jwt.js';
import {Api} from './Api/Api';
import {LocalStorage} from './LocalStorage/LocalStorage';
import {LoginInterceptor} from '@/middleware/LoginInterceptor';

const ACCESS_TOKEN_KEY = 'access_token';

export class Authentication {

  constructor () {

    this._api = new Api().initialize();

    LoginInterceptor.handleLoginResponse(this._api);

    this.JWT = new Jwt(this._api);

  }

  login (credentials, error) {

    this.JWT.requestToken(credentials, this._storeAccountToken, error);

  }

  renewLogin () {

    this.JWT.refreshToken();

  }

  logout () {

    this.JWT.removeToken();

  }

  _storeAccountToken (response) {

    let localStorage = new LocalStorage();

    localStorage.storeValue(ACCESS_TOKEN_KEY, response.data.access_token);

    return true;

  }

}
