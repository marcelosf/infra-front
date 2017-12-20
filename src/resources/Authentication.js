import {Jwt} from './Jwt/Jwt.js';
import {Api} from './Api/Api';
import {LocalStorage} from './LocalStorage/LocalStorage';
import {AuthenticationException} from './AuthenticationException';

const ACCESS_TOKEN_KEY = 'access_token';

export class Authentication {

  constructor () {

    let api = new Api().initialize();

    this.JWT = new Jwt(api);

  }

  login (credentials) {

    let response = this.JWT.requestToken(credentials);

    if (response) {

      let localStorage = new LocalStorage();

      localStorage.storeValue(ACCESS_TOKEN_KEY, response.data.access_token);

      return true;

    }

    throw new AuthenticationException('Wrong login or password.');

  }

  renewLogin () {

    this.JWT.refreshToken();

  }

  logout () {

    this.JWT.removeToken();

  }

}
