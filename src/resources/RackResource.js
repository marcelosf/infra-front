import {Resource} from '@/resources/Resource';

const ENDPOINT = '/rack';

export class RackResource extends Resource {

  static list (search, action, errors) {

    let searchParam = search ? '?search=' + search.parameter + ':' + search.value : '';

    this._getApi().get(ENDPOINT + searchParam).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

}
