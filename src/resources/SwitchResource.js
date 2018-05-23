import {Resource} from './Resource';

const SWITCH_API = '/switch';

export class SwitchResource extends Resource {

  static listSwitches (action, page, search, errors) {

    let searchParam = this.getRequestParameters(search);

    this._getApi().get(SWITCH_API + '?page=' + page + searchParam).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

  static store (switches, actions, errors) {

    this._getApi().post(SWITCH_API, switches).then((response) => {

      actions(response);

    }).catch(errors);

  }

}
