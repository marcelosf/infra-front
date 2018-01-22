const USER_URI = 'user/user';

import {Resource} from './Resource';

export class UserResource extends Resource {

  static list (action, error) {

    this._getApi().get(USER_URI).then((response) => {

      action(response.data);

    }).catch(error);

  }

}
