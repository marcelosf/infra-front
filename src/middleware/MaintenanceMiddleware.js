import {Middleware} from '@/middleware/Middleware'

export class MaintenanceMiddleware extends Middleware {

  static setPostHeader (api, headerKey, value) {

    return super.interceptPostHeader(api, headerKey, value);

  }

}
