const USER_ROUTE = 'auth/me';
const STORAGE_USER_KEY = 'user';

import {LocalStorage} from '@/resources/LocalStorage/LocalStorage';
import {Api} from '@/resources/Api/Api';
import {TokenInterceptor} from '@/middleware/TokenInterceptor';

export class User {

  static getUser () {

    let userData = this._getStorageHandler().getValueByKey(STORAGE_USER_KEY);

    return JSON.parse(userData);

  }

  static loadUserData (afterLoadActions, error) {

    this._setUserAccessToken();

    this._setUserRequester();

    this._api.post(USER_ROUTE).then((response) => {

      this._storeUser(JSON.stringify(response.data));

      afterLoadActions();

      return response.data;

    }).catch(error);

  }

  static clearSession () {

    this._getStorageHandler().destroy(STORAGE_USER_KEY);

  }

  static _setUserAccessToken () {

    this._accessToken = this._getStorageHandler().getValueByKey('access_token');

  }

  static _setUserRequester () {

    this._api = TokenInterceptor.handleBearer(this._getApi(), this._accessToken);

  }

  static _storeUser (user) {

    this._getStorageHandler().storeValue(STORAGE_USER_KEY, user);

  }

  static _getStorageHandler () {

    return LocalStorage;

  }

  static _getApi () {

    return new Api().initialize();

  }

}
