import {Resource} from './Resource';

const API = '/patch';

export class PatchResource extends Resource {

  static list (action, page, search, errors) {

    let searchParam = this.getRequestParameters(search);

    this._getApi().get(API + '?page=' + page + searchParam).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

}
