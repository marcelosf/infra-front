export class LocalStorage {

  static getValueByKey (key) {

    return localStorage.getItem(key);

  }

  static storeValue (key, value) {

    try {

      localStorage.setItem(key, value);

      return this.getValueByKey(key);

    } catch (e) {

      return e.message;

    }

  }

  static destroy (key) {

    try {

      localStorage.removeItem(key);

    } catch (e) {

      return e.message;

    }

  }

}
