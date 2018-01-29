export class Middleware {

  static interceptRequest (api, request) {

    return api.interceptors.request.use(request);

  }

  static interceptResponse (api, response, error) {

    return api.interceptors.response.use(response, error);

  }

  static interceptPostHeader (api, headerKey, headerValue) {

    api.defaults.headers.post[headerKey] = headerValue;

    return api;

  }

}
