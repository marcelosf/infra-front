import {Resource} from './Resource';

const STACK_API = '/stack';

export class StackResource extends Resource {

 static store (stack, actions, errors) {

    this._getApi().post(STACK_API, stack).then((response) => {

      actions(response.data.data);

    }).catch(errors);

  }

}
