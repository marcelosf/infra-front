export class LocalStorage {

  getValueByKey (key) {

    return this.localStorage.getItem(key);

  }

  storeValue (key, value) {

    try {

      localStorage.setItem(key, value);

      return this.getValueByKey(key);

    } catch (e) {

      return e.message;

    }

  }

  destroyToken (key) {

    try {

      localStorage.removeItem(key);

    } catch (e) {

      return e.message;

    }

  }

}
