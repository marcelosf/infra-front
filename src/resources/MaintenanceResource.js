import {Resource} from '@/resources/Resource';

const CREATE_SERVICE_URL = 'maintenance/service/service';
const LIST_SERVICES_URL = 'maintenance/service/service';
const UPDATE_SERVICES_URL = 'maintenance/service/service/';

export class MaintenanceResource extends Resource {

  static storeService (data, action, errors) {

    this._getApi().post(CREATE_SERVICE_URL, data).then(action).catch(errors);

  }

  static listServices (action, errors) {

    this._getApi().get(LIST_SERVICES_URL).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

  static updateService (data, action, errors) {

    this._getApi().put((UPDATE_SERVICES_URL + data.id), data).then((response) => {

      action(response.data);

    }).catch(errors);

  }

}
