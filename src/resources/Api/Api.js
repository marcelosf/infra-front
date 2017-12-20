import axios from 'axios';
import {ApiException} from './Exceptions/ApiException';

export class Api {

  constructor (baseUrl) {

    this.baseUrl = null;

    this._setBaseUrl(baseUrl);

  }

  initialize () {

    let instance = axios.create();

    instance.defaults.baseURL = this.baseUrl;

    instance.defaults.timeout = 5000;

    return instance;

  }

  _setBaseUrl (baseUrl) {

    if (baseUrl) {

      this.baseUrl = baseUrl;

      return true;

    }

    if (process.env.API_URL) {

      this.baseUrl = process.env.API_URL;

      return true;

    }

    let message = 'Base URL was not configured. Please' +
    'set the base URL at /config/*.env.js or inform it at the constructor.';

    throw new ApiException(message);

  }

}
