import {Resource} from '@/resources/Resource';

const CREATE_SERVICE_URL = 'maintenance/service/service';

export class MaintenanceResource extends Resource {

  static storeService (data, action, errors) {

    this._getApi().post(CREATE_SERVICE_URL, data).then(action).catch(errors);

  }

}
