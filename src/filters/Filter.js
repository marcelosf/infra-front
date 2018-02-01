export class Filter {

  static byParameterKey (valueToCompare, parameter, array) {

    return array.filter((item) => {

      return item[parameter] === valueToCompare;

    });

  }

}
