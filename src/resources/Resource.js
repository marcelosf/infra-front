import {Api} from '@/resources/Api/Api';

export class Resource {

  static _getApi () {

    return new Api().initialize();

  }

  static getRequestParameters (search) {

    return search ? '&search=' + search.parameter + ':' + search.value : '';

  }

}
