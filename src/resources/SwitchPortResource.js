import {Resource} from './Resource';

const SWITCH_API = '/switch-port';

export class SwitchPortResource extends Resource {

  static listSwitchPorts (actions, page, search, errors) {

    let searchParam = search ? '&search=' + search.parameter + ':' + search.value : '';

    this._getApi().get(SWITCH_API + '?page=' + page + searchParam).then((response) => {

      actions(response.data.data);

    }).catch(errors);

  }

  static update (actions, data, errors) {

    this._getApi().put(SWITCH_API + '/' + data.id, data).then((response) => {

      actions(response.data);

    }).catch(errors);

  }

}
