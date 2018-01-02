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

  login (credentials, triggerLoginActions, error) {

    this.JWT.requestToken(credentials, (response) => {

      this._storeAccountToken(response);

      triggerLoginActions();

    }, error);

  }

  renewLogin () {

    this.JWT.refreshToken();

  }

  logout () {

    if (this.check()) {

      // TODO Invalidate Token.

      LocalStorage.destroy(ACCESS_TOKEN_KEY);

    }

  }

  check () {

    return LocalStorage.getValueByKey(ACCESS_TOKEN_KEY) !== null;

  }

  _storeAccountToken (response) {

    LocalStorage.storeValue(ACCESS_TOKEN_KEY, response.data.access_token);

    return true;

  }

}
