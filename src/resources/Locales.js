const LOCALE_ENDPOINT = 'locale/locale';

import {Api} from '@/resources/Api/Api';

export class Locales {

  static list (action) {

    let api = this._apiHandler();

    return api.get(LOCALE_ENDPOINT).then((response) => {

      return action(response.data.data);

    });

  }

  static _apiHandler () {

    return new Api().initialize();

  }

}
