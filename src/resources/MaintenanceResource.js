import {Resource} from '@/resources/Resource';

const CREATE_SERVICE_URL = 'maintenance/service/service';
const LIST_SERVICES_URL = 'maintenance/service/service';
const LIST_ORDERS_BY_SERVICE_URL = 'maintenance/order/list-by-service/';
const UPDATE_SERVICES_URL = 'maintenance/service/service/';
const ORDER_URL = 'maintenance/order/order/';
const LIST_EPIS_URL = 'maintenance/epi/epi';
const ORDER_REPORTS_URL = 'maintenance/order/reports';
const LIST_TECHNICAL_AREA_URL = 'maintenance/technical/technical';

export class MaintenanceResource extends Resource {

  static storeService (data, action, errors) {

    this._getApi().post(CREATE_SERVICE_URL, data).then((response) => {

      action(response.data);

    }).catch(errors);

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

  static listOrdersByService (service, action, errors) {

    this._getApi().get(LIST_ORDERS_BY_SERVICE_URL + service).then((response) => {

      (response.data.data.length > 0) ? action(response.data.data) : action(null);

    }).catch(errors);

  }

  static updateOrder (order, action, errors) {

    this._getApi().put((ORDER_URL + order.id), order).then((response) => {

      action(response.data);

    }).catch(errors);

  }

  static listEpis (action, errors) {

    this._getApi().get(LIST_EPIS_URL).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

  static listOrderReportsByOrder (order, action, errors) {

    this._getApi().get(ORDER_REPORTS_URL + '?search=order_id:' + order).then((response) => {

      action(response.data.data);

    }).catch(errors);

  }

  static storeOrder (order, action, error) {

    this._getApi().post(ORDER_URL, order).then((response) => {

      action(response.data);

    }).catch(error);

  }

  static storeOrderReport (report, action, errors) {

    this._getApi().post(ORDER_REPORTS_URL, report).then((response) => {

      action(response.data);

    }).catch(errors);

  }

  static listTechnicalAreas (actions) {

    this._getApi().get(LIST_TECHNICAL_AREA_URL).then((response) => {

      actions(response.data.data);

    });

  }

}
