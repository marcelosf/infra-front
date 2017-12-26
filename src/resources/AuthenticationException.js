const ERROR_401 = 'Wrong Login or password';

export class AuthenticationException {

  constructor (errorStatus, message) {

    this.message = message || this._setErrorMessage(errorStatus);

    this.name = 'AuthenticationException';

  }

  _setErrorMessage (status) {

    switch (status) {

      case 401:

        return ERROR_401;

    }

  }

}
