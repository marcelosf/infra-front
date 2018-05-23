import {Resource} from './Resource';

const STACK_API = '/stack';

export class StackResource extends Resource {

  static list (actions, page, search, errors) {

    let requestParameters = this.getRequestParameters(search);

    this._getApi().get(STACK_API + '?page=' + page + requestParameters).then((response) => {

      actions(response.data.data);

    }).catch(errors);

  }

   static store (stack, actions, errors) {

      this._getApi().post(STACK_API, stack).then((response) => {

        actions(response.data.data);

      }).catch(errors);

    }

}
