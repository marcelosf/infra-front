const USER_ROUTE = 'auth/me';
const STORAGE_USER_KEY = 'user';

import {LocalStorage} from '@/resources/LocalStorage/LocalStorage';
import {Api} from '@/resources/Api/Api';
import {TokenInterceptor} from '@/middleware/TokenInterceptor';

export class User {

  static loadUserData (error) {

    this._setUserAccessToken();

    this._setUserRequester(this._accessToken);

    this._api.post(USER_ROUTE).then((response) => {

      this._storeUser(response.data.user);

      return response.data.user;

    }).catch(error);

  }

  static getUser () {

    return this._getStorageHandler().getValueByKey(STORAGE_USER_KEY);

  }

  static clearSession() {

    this._getStorageHandler().destroy(STORAGE_USER_KEY);

  }

  static _setUserAccessToken () {

    this._accessToken = this._getStorageHandler().getValueByKey('access_token');

  }

  static _setUserRequester (accessToken) {

    let api = new Api().initialize();

    this._api = TokenInterceptor.handleBearer(api, accessToken);

  }

  static _storeUser (user) {

    this._getStorageHandler().storeValue(STORAGE_USER_KEY, user);

  }

  static _getStorageHandler() {

    return new LocalStorage();

  }

}