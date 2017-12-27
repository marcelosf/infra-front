export class Middleware {

  static interceptRequest (api, request) {

    return api.interceptors.request.use(request);

  }

  static interceptResponse (api, response, error) {

    return api.interceptors.response.use(response, error);

  }

  static interceptHeader (api, headerKey, headerValue) {

    api.defaults.header.common[headerKey] = headerValue;

  }

}
