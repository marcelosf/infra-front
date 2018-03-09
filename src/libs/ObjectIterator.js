export class ObjectIterator {

  static clear (object) {

    let objectKeys = Object.keys(object);

    objectKeys.forEach((value) => {

      object[value] = '';

    });

  }

}
