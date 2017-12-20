const GET_TOKEN_URL = 'auth/login';
const REFRESH_TOKEN_URL = 'auth/refresh';
const INVALIDATE_TOKEN_URL = 'auth/logout';

export class Jwt {

  constructor (api) {

    this.api = api;

  }

  requestToken (data) {

    try {

      this.api.post(GET_TOKEN_URL, data).then((response) => {

        return response;

      });

    } catch (error) {

      return "Something went's wrong requesting a token. " + error.message + ' ' + error.code

    }

  }

  refreshToken () {

    try {

      return this.api.post(REFRESH_TOKEN_URL).then((response) => {

        return response;

      });

    } catch (error) {

      return 'An error occurred when trying to refresh the token. Error: ' + error.message;

    }

  }

  removeToken () {

    try {

      this.api.post(INVALIDATE_TOKEN_URL).then((response) => {

        return response;

      });

    } catch (error) {

      return 'An error occurred while trying to invalidate the token. Error: ' + error.message;

    }

  }

}
