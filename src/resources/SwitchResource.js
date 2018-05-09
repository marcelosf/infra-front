import {Resource} from './Resource';

const SWITCH_API = '/switch';

export class SwitchResource extends Resource {

  static listPatchPanels (action, page, search, errors) {

    let searchParam = search ? '&search=' + search.parameter + ':' + search.value : '';

    this._getApi().get(SWITCH_API + '?page=' + page + searchParam).then((response) => {

      action(response.data);

    }).catch(errors);

  }

}
